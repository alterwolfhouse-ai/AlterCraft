import { createHash, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:http';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, 'operatorDeskDb.json');
const port = Number(process.env.OPERATOR_DESK_PORT || 8787);

const defaultDb = {
  users: [],
  sessions: [],
  leads: [],
  jobs: [],
  siteReports: [],
  cashEntries: [],
};

const readDb = () => {
  if (!existsSync(dbPath)) {
    writeFileSync(dbPath, JSON.stringify(defaultDb, null, 2));
  }
  return JSON.parse(readFileSync(dbPath, 'utf8'));
};

const writeDb = (db) => {
  writeFileSync(dbPath, JSON.stringify(db, null, 2));
};

const send = (res, status, payload) => {
  res.writeHead(status, {
    'access-control-allow-origin': '*',
    'access-control-allow-methods': 'GET,POST,OPTIONS',
    'access-control-allow-headers': 'content-type,authorization',
    'content-type': 'application/json; charset=utf-8',
  });
  res.end(JSON.stringify(payload));
};

const readBody = async (req) => {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
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
  createdAt: user.createdAt,
});

const createToken = (userId) => {
  const nonce = randomBytes(24).toString('hex');
  return createHash('sha256').update(`${userId}:${nonce}:${Date.now()}`).digest('hex');
};

const authUser = (req, db) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const session = db.sessions.find((item) => item.token === token);
  if (!session) return null;
  return db.users.find((user) => user.id === session.userId) || null;
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

      const passwordRecord = hashPassword(password);
      const user = {
        id: `od-user-${Date.now()}`,
        name,
        phone,
        email,
        passwordSalt: passwordRecord.salt,
        passwordHash: passwordRecord.hash,
        createdAt: new Date().toISOString(),
      };
      const token = createToken(user.id);
      db.users.push(user);
      db.sessions.push({ token, userId: user.id, createdAt: new Date().toISOString() });
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

      const token = createToken(user.id);
      db.sessions.push({ token, userId: user.id, createdAt: new Date().toISOString() });
      writeDb(db);
      return send(res, 200, { token, user: publicUser(user) });
    }

    if (req.method === 'GET' && url.pathname === '/api/operator-desk/bootstrap') {
      const user = authUser(req, db);
      if (!user) return send(res, 401, { error: 'Unauthorized.' });
      return send(res, 200, {
        user: publicUser(user),
        jobs: db.jobs,
        leads: db.leads,
        siteReports: db.siteReports,
        cashEntries: db.cashEntries,
      });
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
    return send(res, 500, { error: error instanceof Error ? error.message : 'Server error.' });
  }
});

server.listen(port, () => {
  console.log(`OperatorDesk server running on http://localhost:${port}`);
});
