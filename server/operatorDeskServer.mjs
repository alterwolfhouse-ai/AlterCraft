import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = process.env.OPERATOR_DESK_DB_PATH || join(__dirname, 'operatorDeskDb.json');
const port = Number(process.env.OPERATOR_DESK_PORT || 8787);

const roleConfig = {
  'l3-founder': {
    label: 'L3 Founder',
    accessLevel: 3,
    permissions: ['users:read', 'users:create', 'users:update', 'users:assign-role', 'data:read', 'data:write'],
  },
  'l2-manager': {
    label: 'L2 Manager',
    accessLevel: 2,
    permissions: ['users:read', 'users:create-worker', 'users:update-worker', 'data:read', 'data:write'],
  },
  'l1-worker': {
    label: 'L1 Worker',
    accessLevel: 1,
    permissions: ['data:read', 'site-report:create', 'proof:create'],
  },
};

const validRoles = Object.keys(roleConfig);

const normalizeRole = (role) => (validRoles.includes(role) ? role : 'l1-worker');

const normalizeStatus = (status) => (status === 'suspended' ? 'suspended' : 'active');

const canManageUsers = (user) => roleConfig[normalizeRole(user.role)].accessLevel >= 2;

const canAssignRole = (actor, targetRole) => {
  const actorRole = normalizeRole(actor.role);
  const normalizedTargetRole = normalizeRole(targetRole);

  if (actorRole === 'l3-founder') return true;
  if (actorRole === 'l2-manager') return normalizedTargetRole === 'l1-worker';
  return false;
};

const defaultDb = {
  users: [],
  sessions: [],
  leads: [],
  jobs: [],
  siteReports: [],
  cashEntries: [],
  auditLog: [],
};

const readDb = () => {
  if (!existsSync(dbPath)) {
    writeFileSync(dbPath, JSON.stringify(defaultDb, null, 2));
  }
  const rawDb = JSON.parse(readFileSync(dbPath, 'utf8'));
  let migrated = false;
  const db = { ...defaultDb, ...rawDb };

  db.users = (db.users || []).map((user, index) => {
    const nextUser = {
      ...user,
      role: normalizeRole(user.role || (index === 0 ? 'l3-founder' : 'l1-worker')),
      status: normalizeStatus(user.status),
    };
    if (nextUser.role !== user.role || nextUser.status !== user.status) migrated = true;
    return nextUser;
  });

  db.sessions = db.sessions || [];
  db.auditLog = db.auditLog || [];

  if (migrated) {
    writeFileSync(dbPath, JSON.stringify(db, null, 2));
  }

  return db;
};

const writeDb = (db) => {
  writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

const send = (res, status, payload) => {
  res.writeHead(status, {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,PATCH,OPTIONS',
    'access-control-allow-headers': 'content-type,authorization',
    'content-type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(payload));
};

const readBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  const raw = Buffer.concat(chunks).toString('utf8');
  try {
    return JSON.parse(raw);
  } catch {
    const error = new Error('Invalid JSON body.');
    error.statusCode = 400;
    throw error;
  }
};

const hashPassword = (password, salt = randomBytes(16).toString('hex')) => {
  const hash = scryptSync(password, salt, 64).toString('hex');
  return { salt, hash };
};

const verifyPassword = (password, user) => {
  const next = hashPassword(password, user.passwordSalt).hash;
  return timingSafeEqual(Buffer.from(next, 'hex'), Buffer.from(user.passwordHash, 'hex'));
};

const publicUser = (user) => ({
  id: user.id,
  name: user.name,
  phone: user.phone,
  email: user.email,
  role: normalizeRole(user.role),
  accessLevel: roleConfig[normalizeRole(user.role)].accessLevel,
  roleLabel: roleConfig[normalizeRole(user.role)].label,
  status: normalizeStatus(user.status),
  createdAt: user.createdAt,
});

const writeAudit = (db, actor, action, targetUserId, details = {}) => {
  db.auditLog.push({
    id: `audit-${Date.now()}-${randomBytes(4).toString('hex')}`,
    actorUserId: actor?.id || 'system',
    action,
    targetUserId,
    details,
    createdAt: new Date().toISOString(),
  });
};

const createToken = (userId) => {
  const nonce = randomBytes(24).toString('hex');
  return createHash('sha256').update(`${userId}:${nonce}:${Date.now()}`).digest('hex');
};

const authUser = (req, db) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const session = db.sessions.find((item) => item.token === token);
  if (!session) return null;
  const user = db.users.find((item) => item.id === session.userId) || null;
  if (!user || normalizeStatus(user.status) !== 'active') return null;
  return user;
};

const server = createServer(async (req, res) => {
  if (req.method === 'OPTIONS') {
    return send(res, 204, {});
  }

  try {
    const db = readDb();
    const url = new URL(req.url || '/', `http://${req.headers.host}`);

    if (req.method === 'GET' && url.pathname === '/health') {
      return send(res, 200, { ok: true, service: 'operator-desk', port });
    }

    if (req.method === 'POST' && url.pathname === '/api/auth/signup') {
      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');
      const name = String(body.name || 'Contractor Operator').trim();
      const phone = String(body.phone || '').trim();

      if (!email || !password) {
        return send(res, 400, { error: 'Email and password are required.' });
      }

      if (db.users.some((user) => user.email === email)) {
        return send(res, 409, { error: 'User already exists.' });
      }

      const requestedRole = normalizeRole(body.role);
      const setupKey = String(body.setupKey || '');
      const configuredSetupKey = process.env.OPERATOR_DESK_SETUP_KEY || '';
      const role = db.users.length === 0
        ? 'l3-founder'
        : configuredSetupKey && setupKey === configuredSetupKey
          ? requestedRole
          : 'l1-worker';
      const passwordRecord = hashPassword(password);
      const user = {
        id: `od-user-${Date.now()}`,
        name,
        phone,
        email,
        role,
        status: 'active',
        passwordSalt: passwordRecord.salt,
        passwordHash: passwordRecord.hash,
        createdAt: new Date().toISOString(),
      };
      const token = createToken(user.id);
      db.users.push(user);
      db.sessions.push({ token, userId: user.id, createdAt: new Date().toISOString() });
      writeAudit(db, null, 'auth.signup', user.id, { role });
      writeDb(db);
      return send(res, 201, { token, user: publicUser(user) });
    }

    if (req.method === 'POST' && url.pathname === '/api/auth/login') {
      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || '');
      const user = db.users.find((item) => item.email === email);

      if (!user || !verifyPassword(password, user)) {
        return send(res, 401, { error: 'Invalid credentials.' });
      }

      if (normalizeStatus(user.status) !== 'active') {
        return send(res, 403, { error: 'This OperatorDesk account is suspended.' });
      }

      const token = createToken(user.id);
      db.sessions.push({ token, userId: user.id, createdAt: new Date().toISOString() });
      writeAudit(db, user, 'auth.login', user.id);
      writeDb(db);
      return send(res, 200, { token, user: publicUser(user) });
    }

    if (req.method === 'GET' && url.pathname === '/api/operator-desk/bootstrap') {
      const user = authUser(req, db);
      if (!user) return send(res, 401, { error: 'Unauthorized.' });
      return send(res, 200, {
        user: publicUser(user),
        roles: roleConfig,
        users: canManageUsers(user) ? db.users.map(publicUser) : [],
        jobs: db.jobs,
        leads: db.leads,
        siteReports: db.siteReports,
        cashEntries: db.cashEntries,
      });
    }

    if (req.method === 'GET' && url.pathname === '/api/operator-desk/users') {
      const user = authUser(req, db);
      if (!user) return send(res, 401, { error: 'Unauthorized.' });
      if (!canManageUsers(user)) return send(res, 403, { error: 'L2 Manager or L3 Founder access is required.' });

      const users = db.users
        .map(publicUser)
        .sort((a, b) => b.accessLevel - a.accessLevel || a.name.localeCompare(b.name));
      return send(res, 200, { users, roles: roleConfig });
    }

    if (req.method === 'POST' && url.pathname === '/api/operator-desk/users') {
      const actor = authUser(req, db);
      if (!actor) return send(res, 401, { error: 'Unauthorized.' });
      if (!canManageUsers(actor)) return send(res, 403, { error: 'L2 Manager or L3 Founder access is required.' });

      const body = await readBody(req);
      const email = String(body.email || '').trim().toLowerCase();
      const password = String(body.password || 'OperatorDesk#2026');
      const name = String(body.name || '').trim();
      const phone = String(body.phone || '').trim();
      const role = normalizeRole(body.role);

      if (!name || !email || !password) {
        return send(res, 400, { error: 'Name, email and password are required.' });
      }

      if (!canAssignRole(actor, role)) {
        return send(res, 403, { error: 'You cannot assign that access level.' });
      }

      if (db.users.some((user) => user.email === email)) {
        return send(res, 409, { error: 'User already exists.' });
      }

      const passwordRecord = hashPassword(password);
      const user = {
        id: `od-user-${Date.now()}`,
        name,
        phone,
        email,
        role,
        status: 'active',
        createdByUserId: actor.id,
        passwordSalt: passwordRecord.salt,
        passwordHash: passwordRecord.hash,
        createdAt: new Date().toISOString(),
      };
      db.users.push(user);
      writeAudit(db, actor, 'users.create', user.id, { role });
      writeDb(db);
      return send(res, 201, { user: publicUser(user) });
    }

    const userUpdateMatch = url.pathname.match(/^\/api\/operator-desk\/users\/([^/]+)$/);
    if (req.method === 'PATCH' && userUpdateMatch) {
      const actor = authUser(req, db);
      if (!actor) return send(res, 401, { error: 'Unauthorized.' });
      if (!canManageUsers(actor)) return send(res, 403, { error: 'L2 Manager or L3 Founder access is required.' });

      const targetUserId = decodeURIComponent(userUpdateMatch[1]);
      const target = db.users.find((user) => user.id === targetUserId);
      if (!target) return send(res, 404, { error: 'User not found.' });
      if (target.id === actor.id) return send(res, 400, { error: 'You cannot change your own account from this endpoint.' });

      const body = await readBody(req);
      const nextRole = body.role ? normalizeRole(body.role) : normalizeRole(target.role);
      const nextStatus = body.status ? normalizeStatus(body.status) : normalizeStatus(target.status);

      if (!canAssignRole(actor, nextRole) || !canAssignRole(actor, normalizeRole(target.role))) {
        return send(res, 403, { error: 'You cannot update that access level.' });
      }

      target.role = nextRole;
      target.status = nextStatus;
      target.updatedAt = new Date().toISOString();
      writeAudit(db, actor, 'users.update', target.id, { role: nextRole, status: nextStatus });
      writeDb(db);
      return send(res, 200, { user: publicUser(target) });
    }

    if (req.method === 'POST' && url.pathname === '/api/operator-desk/leads') {
      const user = authUser(req, db);
      if (!user) return send(res, 401, { error: 'Unauthorized.' });
      const body = await readBody(req);
      const lead = {
        id: `lead-${Date.now()}`,
        ownerUserId: user.id,
        name: String(body.name || ''),
        phone: String(body.phone || ''),
        site: String(body.site || ''),
        requirement: String(body.requirement || ''),
        status: 'New',
        createdAt: new Date().toISOString(),
      };
      db.leads.push(lead);
      writeDb(db);
      return send(res, 201, { lead });
    }

    if (req.method === 'POST' && url.pathname === '/api/operator-desk/site-reports') {
      const user = authUser(req, db);
      if (!user) return send(res, 401, { error: 'Unauthorized.' });
      const body = await readBody(req);
      const report = {
        id: `report-${Date.now()}`,
        ownerUserId: user.id,
        jobId: String(body.jobId || ''),
        workDone: String(body.workDone || ''),
        blockers: String(body.blockers || ''),
        nextAction: String(body.nextAction || ''),
        createdAt: new Date().toISOString(),
      };
      db.siteReports.push(report);
      writeDb(db);
      return send(res, 201, { report });
    }

    return send(res, 404, { error: 'Not found.' });
  } catch (error) {
    const statusCode = Number(error?.statusCode || 500);
    return send(res, statusCode, { error: error instanceof Error ? error.message : 'Server error.' });
  }
});

server.listen(port, () => {
  console.log(`OperatorDesk server running on http://localhost:${port}`);
});
