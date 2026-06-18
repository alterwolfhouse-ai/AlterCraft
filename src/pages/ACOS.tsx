import React, { FormEvent, useMemo, useState } from 'react';
import { Link, NavLink, Navigate, useLocation, useNavigate } from 'react-router';
import {
  Activity,
  ArrowRight,
  BadgeIndianRupee,
  BarChart3,
  Boxes,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle,
  ClipboardList,
  FileDown,
  Gauge,
  LayoutDashboard,
  Lock,
  LogOut,
  Megaphone,
  PackagePlus,
  Search,
  ShieldCheck,
  UserCog,
  Users,
  WalletCards,
} from 'lucide-react';
import { useAuth, type ACOSRole } from '../contexts/AuthContext';
import { siteDetails } from '../data/siteDetails';

type ACOSModuleId =
  | 'leads'
  | 'production'
  | 'finances'
  | 'marketing'
  | 'hr'
  | 'marketplace'
  | 'reports'
  | 'users';

type ACOSModule = {
  id: ACOSModuleId;
  title: string;
  kicker: string;
  description: string;
  icon: React.ComponentType<{ size?: number }>;
  kpis: Array<{ label: string; value: string; tone?: 'good' | 'warn' | 'alert' }>;
  columns: string[];
  rows: string[][];
  actions: string[];
};

const roles: ACOSRole[] = ['admin', 'sales', 'production', 'finance', 'marketing', 'hr'];

const moduleMap: Record<ACOSModuleId, ACOSModule> = {
  leads: {
    id: 'leads',
    title: 'Leads & Sales Pipeline',
    kicker: 'CRM',
    description:
      'Track enquiries from Meta ads, Google search, WhatsApp and referrals from first call to quotation and confirmation.',
    icon: BriefcaseBusiness,
    kpis: [
      { label: 'New leads', value: '18' },
      { label: 'Quotes pending', value: '7', tone: 'warn' },
      { label: 'Won this week', value: '4', tone: 'good' },
    ],
    columns: ['Lead', 'Source', 'Requirement', 'Status'],
    rows: [
      ['Rohit Sharma', 'Meta Ads', 'Modular kitchen', 'Quote pending'],
      ['Ananya Gupta', 'Google Search', 'Wardrobe + bed', 'Site visit booked'],
      ['Corporate Office', 'Referral', 'Workstations', 'Designer review'],
    ],
    actions: ['Create lead', 'Attach quote', 'Move stage', 'Export pipeline'],
  },
  production: {
    id: 'production',
    title: 'Production Control',
    kicker: 'Workshop',
    description:
      'Assign active jobs, track start and finish dates, attach progress photos and keep quality checks visible.',
    icon: ClipboardList,
    kpis: [
      { label: 'Active orders', value: '9' },
      { label: 'QC pending', value: '3', tone: 'warn' },
      { label: 'Ready to install', value: '2', tone: 'good' },
    ],
    columns: ['Order', 'Assigned team', 'Target', 'QC'],
    rows: [
      ['AC-KIT-241', 'Carpenter Team A', '12 Jun', 'Hardware check'],
      ['AC-WRD-118', 'Workshop + helper', '15 Jun', 'Finish check'],
      ['AC-OFC-077', 'Commercial team', '18 Jun', 'Panel alignment'],
    ],
    actions: ['Assign worker', 'Upload progress', 'Mark QC', 'Installation handover'],
  },
  finances: {
    id: 'finances',
    title: 'Finance Desk',
    kicker: 'Cashflow',
    description:
      'Record advances, pending payments, material expenses, salary payouts and marketing spends in one place.',
    icon: WalletCards,
    kpis: [
      { label: 'Cash position', value: 'INR 4.8L', tone: 'good' },
      { label: 'Pending payments', value: 'INR 2.1L', tone: 'warn' },
      { label: 'Ad spend MTD', value: 'INR 36K' },
    ],
    columns: ['Entry', 'Type', 'Amount', 'Status'],
    rows: [
      ['Kitchen advance', 'Income', 'INR 75,000', 'Received'],
      ['Laminate purchase', 'Expense', 'INR 42,500', 'Paid'],
      ['Office quote balance', 'Receivable', 'INR 1,10,000', 'Pending'],
    ],
    actions: ['Add income', 'Add expense', 'Reserve budget', 'Export ledger'],
  },
  marketing: {
    id: 'marketing',
    title: 'Marketing Command',
    kicker: 'Growth',
    description:
      'Plan posts, reels, ad spends and lead outcomes so campaigns stay connected to actual business enquiries.',
    icon: Megaphone,
    kpis: [
      { label: 'Posts scheduled', value: '12' },
      { label: 'Campaign leads', value: '31', tone: 'good' },
      { label: 'Creative pending', value: '5', tone: 'warn' },
    ],
    columns: ['Campaign', 'Channel', 'Budget', 'Leads'],
    rows: [
      ['Kitchen Near Me', 'Meta + Google', 'INR 18,000', '16'],
      ['Wardrobe Storage', 'Instagram Reels', 'INR 7,500', '8'],
      ['Office Interiors', 'LinkedIn', 'INR 10,000', '7'],
    ],
    actions: ['Create post', 'Schedule reel', 'Track ad spend', 'Review lead cost'],
  },
  hr: {
    id: 'hr',
    title: 'HR & Worker Records',
    kicker: 'Team',
    description:
      'Manage attendance, salary, advances, leave and rework notes for employees, carpenters and helpers.',
    icon: Users,
    kpis: [
      { label: 'Staff count', value: '14' },
      { label: 'Leaves this week', value: '2' },
      { label: 'Advance ledger', value: 'INR 28K', tone: 'warn' },
    ],
    columns: ['Person', 'Role', 'Attendance', 'Note'],
    rows: [
      ['Mukesh', 'Carpenter', 'Present', 'Assigned kitchen job'],
      ['Ravi', 'Helper', 'Present', 'Site installation'],
      ['Karan', 'Finishing', 'Leave', 'Returns Thursday'],
    ],
    actions: ['Mark attendance', 'Record advance', 'Add leave', 'Salary report'],
  },
  marketplace: {
    id: 'marketplace',
    title: 'Marketplace Products',
    kicker: 'Catalog',
    description:
      'Prepare product SKUs, stock levels, pricing and Amazon/Flipkart listing status for marketplace expansion.',
    icon: Boxes,
    kpis: [
      { label: 'Draft SKUs', value: '24' },
      { label: 'Ready listings', value: '6', tone: 'good' },
      { label: 'Low stock', value: '3', tone: 'alert' },
    ],
    columns: ['SKU', 'Product', 'Stock', 'Channel status'],
    rows: [
      ['AC-BED-01', 'Hydraulic storage bed', '4', 'Draft'],
      ['AC-TV-02', 'TV console unit', '2', 'Photos pending'],
      ['AC-DR-05', 'Flush door set', '8', 'Ready'],
    ],
    actions: ['Create SKU', 'Update stock', 'Attach photos', 'Channel checklist'],
  },
  reports: {
    id: 'reports',
    title: 'Reports & Exports',
    kicker: 'Review',
    description:
      'Generate weekly and monthly reports across leads, production, finance, marketing and team operations.',
    icon: FileDown,
    kpis: [
      { label: 'Weekly report', value: 'Ready', tone: 'good' },
      { label: 'CSV exports', value: '8' },
      { label: 'PDF packs', value: '3' },
    ],
    columns: ['Report', 'Period', 'Owner', 'Status'],
    rows: [
      ['Sales pipeline', 'This week', 'Sales', 'Ready'],
      ['Cashflow summary', 'June', 'Finance', 'Draft'],
      ['Production status', 'This month', 'Workshop', 'Ready'],
    ],
    actions: ['Generate PDF', 'Export CSV', 'Email report', 'Schedule weekly'],
  },
  users: {
    id: 'users',
    title: 'User Management',
    kicker: 'RBAC',
    description:
      'Create internal users, assign roles, disable accounts and review login activity after the backend is connected.',
    icon: UserCog,
    kpis: [
      { label: 'Active users', value: '6' },
      { label: 'Admin users', value: '1' },
      { label: 'Disabled', value: '0', tone: 'good' },
    ],
    columns: ['User', 'Role', 'Status', 'Last activity'],
    rows: [
      ['AlterCraft Admin', 'admin', 'Enabled', 'Today'],
      ['Sales Desk', 'sales', 'Enabled', 'Yesterday'],
      ['Production Desk', 'production', 'Enabled', '2 days ago'],
    ],
    actions: ['Create user', 'Assign role', 'Disable account', 'Audit activity'],
  },
};

const dashboardKpis = [
  { label: 'Cash on hand', value: 'INR 4.8L', icon: BadgeIndianRupee, tone: 'good' },
  { label: 'New leads', value: '18', icon: BriefcaseBusiness },
  { label: 'Orders in production', value: '9', icon: ClipboardList },
  { label: 'Pending payments', value: 'INR 2.1L', icon: WalletCards, tone: 'warn' },
  { label: 'Posts scheduled', value: '12', icon: CalendarClock },
  { label: 'Staff count', value: '14', icon: Users },
];

const moduleNav = [
  { to: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/leads', label: 'Leads', icon: BriefcaseBusiness },
  { to: '/admin/design-requests', label: 'Design Requests', icon: Gauge },
  { to: '/admin/production', label: 'Production', icon: ClipboardList },
  { to: '/admin/finances', label: 'Finances', icon: WalletCards },
  { to: '/admin/marketing', label: 'Marketing', icon: Megaphone },
  { to: '/admin/hr', label: 'HR', icon: Users },
  { to: '/admin/marketplace', label: 'Marketplace', icon: PackagePlus },
  { to: '/admin/reports', label: 'Reports', icon: FileDown },
  { to: '/admin/users', label: 'Users', icon: UserCog },
];

function ACOSShell({ children, title, kicker }: { children: React.ReactNode; title: string; kicker: string }) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="acos-page">
      <aside className="acos-sidebar" aria-label="ACOS modules">
        <Link to="/admin" className="acos-brand">
          <span className="acos-brand-mark">
            <img src="/altercraft-logo-mark.png" alt="" />
          </span>
          <div>
            <strong>AlterCraft OS</strong>
            <small>Internal control center</small>
          </div>
        </Link>
        <nav>
          {moduleNav.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/admin'}>
              <Icon size={17} />
              {label}
            </NavLink>
          ))}
        </nav>
        <div className="acos-sidebar-note">
          <ShieldCheck size={17} />
          <span>Backend JWT, Argon2id/bcrypt, CSRF and audit logging hooks are documented for integration.</span>
        </div>
      </aside>

      <main className="acos-main">
        <header className="acos-topbar">
          <div>
            <span>{kicker}</span>
            <h1>{title}</h1>
          </div>
          <div className="acos-user-chip">
            <span>{user?.name ?? 'ACOS User'}</span>
            <small>{user?.role ?? 'admin'}</small>
            <button type="button" onClick={handleSignOut} aria-label="Sign out of ACOS">
              <LogOut size={16} />
            </button>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

function ACOSAuthShell({ children, title, copy }: { children: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="acos-auth-page">
      <Link to="/" className="acos-auth-brand">AlterCraft</Link>
      <section className="acos-auth-card">
        <div>
          <span>AlterCraft OS</span>
          <h1>{title}</h1>
          <p>{copy}</p>
        </div>
        {children}
        <p className="acos-auth-security-note">
          Production ACOS authentication must be backed by a server using salted password hashing,
          httpOnly secure cookies, CSRF protection and rate limiting.
        </p>
      </section>
    </div>
  );
}

export function ACOSLogin() {
  const { signIn, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  if (isAdmin) return <Navigate to="/admin" replace />;

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const result = signIn(email, password);
    if (!result.ok) {
      setError(result.message || 'Unable to sign in.');
      return;
    }
    const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname || '/admin';
    navigate(from, { replace: true });
  };

  return (
    <ACOSAuthShell
      title="Admin sign in"
      copy="Hidden access for AlterCraft internal users. The live site stays locked until the secure backend auth service is connected."
    >
      <form className="acos-auth-form" onSubmit={submit}>
        <label>
          Email or username
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error && <div className="acos-form-error" role="alert">{error}</div>}
        <button type="submit">Sign in to ACOS <ArrowRight size={16} /></button>
      </form>
      <div className="acos-auth-links">
        <Link to="/admin/reset-password">Reset password</Link>
        <Link to="/admin/signup">Request admin access</Link>
      </div>
    </ACOSAuthShell>
  );
}

export function ACOSSignUp() {
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const score = Math.min(4, [password.length >= 12, /[A-Z]/.test(password), /\d/.test(password), /[^A-Za-z0-9]/.test(password)].filter(Boolean).length);

  return (
    <ACOSAuthShell
      title="Request admin access"
      copy="Keep this form minimal. A backend invitation flow will verify email/phone and create the RBAC user record."
    >
      <form
        className="acos-auth-form"
        onSubmit={(event) => {
          event.preventDefault();
          setMessage('Access request captured in the frontend shell. Connect backend email/OTP verification before using this live.');
        }}
      >
        <label>Email<input type="email" autoComplete="email" required /></label>
        <label>Phone optional<input type="tel" autoComplete="tel" /></label>
        <label>Suggested password<input type="password" autoComplete="new-password" value={password} onChange={(event) => setPassword(event.target.value)} required /></label>
        <div className="acos-password-meter" aria-label={`Password strength ${score} out of 4`}><span style={{ width: `${score * 25}%` }} /></div>
        <button type="submit">Send verification request <ArrowRight size={16} /></button>
        {message && <div className="acos-form-success" role="status">{message}</div>}
      </form>
      <div className="acos-auth-links"><Link to="/admin/login">Back to login</Link></div>
    </ACOSAuthShell>
  );
}

export function ACOSResetPassword() {
  const [message, setMessage] = useState('');
  return (
    <ACOSAuthShell
      title="Reset password"
      copy="Request a secure reset link. The backend should send a time-limited token and never expose passwords to the browser."
    >
      <form
        className="acos-auth-form"
        onSubmit={(event) => {
          event.preventDefault();
          setMessage('Reset request queued in the frontend shell. Connect backend email delivery before live use.');
        }}
      >
        <label>Email<input type="email" autoComplete="email" required /></label>
        <button type="submit">Request reset link <ArrowRight size={16} /></button>
        {message && <div className="acos-form-success" role="status">{message}</div>}
      </form>
      <div className="acos-auth-links"><Link to="/admin/login">Back to login</Link></div>
    </ACOSAuthShell>
  );
}

export function ACOSForbidden() {
  return (
    <ACOSAuthShell
      title="Access restricted"
      copy="This area is only available to AlterCraft users with the admin role."
    >
      <Link className="acos-auth-button-link" to="/admin/login">Return to login</Link>
    </ACOSAuthShell>
  );
}

function SecurityTodoPanel() {
  const items = [
    'POST /auth/login should verify Argon2id/bcrypt hashes and set httpOnly secure JWT cookies.',
    'Every write endpoint must enforce RBAC on the server, not only in React.',
    'Use CSRF tokens, rate limiting, input validation and audit logs before live data entry.',
    'Create migrations for users, roles, leads, orders, finance, marketing, HR and marketplace tables.',
  ];

  return (
    <article className="acos-security-panel">
      <div>
        <Lock size={22} />
        <h2>Backend security handoff</h2>
      </div>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

export function ACOSDashboard() {
  return (
    <ACOSShell title="AlterCraft OS" kicker="Internal CRM">
      <section className="acos-kpi-grid">
        {dashboardKpis.map(({ icon: Icon, label, value, tone }) => (
          <article key={label} className={tone ? `tone-${tone}` : ''}>
            <Icon size={22} />
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="acos-dashboard-grid">
        <article className="acos-chart-card">
          <div className="acos-card-head">
            <div>
              <span>Pipeline</span>
              <h2>Lead conversion view</h2>
            </div>
            <BarChart3 size={22} />
          </div>
          {[
            ['New enquiry', 92],
            ['Photo reviewed', 64],
            ['Quote sent', 47],
            ['Advance paid', 26],
          ].map(([label, value]) => (
            <div className="acos-bar-row" key={label}>
              <span>{label}</span>
              <div><i style={{ width: `${value}%` }} /></div>
              <strong>{value}%</strong>
            </div>
          ))}
        </article>

        <article className="acos-chart-card">
          <div className="acos-card-head">
            <div>
              <span>Operations</span>
              <h2>Today at a glance</h2>
            </div>
            <Activity size={22} />
          </div>
          <div className="acos-timeline">
            <p><CheckCircle size={16} /> Site measurement booked for kitchen lead in Ghaziabad.</p>
            <p><CalendarClock size={16} /> Production QC due for wardrobe order AC-WRD-118.</p>
            <p><Megaphone size={16} /> Kitchen Near Me ad set generated 6 new leads.</p>
            <p><WalletCards size={16} /> Pending payment reminder required for office quote.</p>
          </div>
        </article>
      </section>

      <section className="acos-module-grid">
        {Object.values(moduleMap).filter((module) => module.id !== 'users').map(({ id, title, description, icon: Icon }) => (
          <Link key={id} to={`/admin/${id}`}>
            <Icon size={22} />
            <strong>{title}</strong>
            <span>{description}</span>
            <em>Open module <ArrowRight size={14} /></em>
          </Link>
        ))}
      </section>

      <SecurityTodoPanel />
    </ACOSShell>
  );
}

function ModuleView({ moduleId }: { moduleId: ACOSModuleId }) {
  const module = moduleMap[moduleId];
  const Icon = module.icon;
  const [query, setQuery] = useState('');
  const filteredRows = module.rows.filter((row) => row.join(' ').toLowerCase().includes(query.toLowerCase()));

  return (
    <ACOSShell title={module.title} kicker={module.kicker}>
      <section className="acos-module-hero">
        <div>
          <Icon size={26} />
          <p>{module.description}</p>
        </div>
        <div className="acos-module-actions">
          {module.actions.map((action) => <button key={action} type="button">{action}</button>)}
        </div>
      </section>

      <section className="acos-kpi-grid compact">
        {module.kpis.map((kpi) => (
          <article key={kpi.label} className={kpi.tone ? `tone-${kpi.tone}` : ''}>
            <span>{kpi.label}</span>
            <strong>{kpi.value}</strong>
          </article>
        ))}
      </section>

      <section className="acos-table-card">
        <div className="acos-table-tools">
          <label>
            <Search size={16} />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${module.title.toLowerCase()}`} />
          </label>
          <button type="button"><FileDown size={16} /> Export</button>
        </div>
        <div className="acos-table-wrap">
          <table>
            <thead>
              <tr>{module.columns.map((column) => <th key={column}>{column}</th>)}</tr>
            </thead>
            <tbody>
              {filteredRows.map((row) => (
                <tr key={row.join('-')}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {moduleId === 'users' && <UserManagementPanel />}
      {moduleId !== 'users' && <ModuleCreateForm moduleTitle={module.title} />}
    </ACOSShell>
  );
}

function ModuleCreateForm({ moduleTitle }: { moduleTitle: string }) {
  return (
    <section className="acos-form-card">
      <h2>Quick add for {moduleTitle}</h2>
      <form>
        <label>Title<input type="text" autoComplete="off" /></label>
        <label>Owner<input type="text" autoComplete="name" /></label>
        <label>Status<select><option>New</option><option>In progress</option><option>Review</option><option>Completed</option></select></label>
        <label>Notes<textarea rows={4} /></label>
        <button type="button">Save draft locally</button>
      </form>
    </section>
  );
}

function UserManagementPanel() {
  return (
    <section className="acos-user-management">
      <div className="acos-card-head">
        <div>
          <span>Access control</span>
          <h2>Create user role</h2>
        </div>
        <ShieldCheck size={22} />
      </div>
      <form>
        <label>Email<input type="email" autoComplete="email" /></label>
        <label>Role<select>{roles.map((role) => <option key={role}>{role}</option>)}</select></label>
        <label className="acos-toggle"><input type="checkbox" defaultChecked /> Account enabled</label>
        <button type="button">Create backend user</button>
      </form>
      <div className="acos-audit-log">
        <h3>Audit log preview</h3>
        {['Admin signed in', 'Sales module opened', 'Finance export requested'].map((item) => (
          <p key={item}><Activity size={15} /> {item}<span>logged with timestamp and IP by backend</span></p>
        ))}
      </div>
    </section>
  );
}

export function ACOSLeads() { return <ModuleView moduleId="leads" />; }
export function ACOSProduction() { return <ModuleView moduleId="production" />; }
export function ACOSFinances() { return <ModuleView moduleId="finances" />; }
export function ACOSMarketing() { return <ModuleView moduleId="marketing" />; }
export function ACOSHR() { return <ModuleView moduleId="hr" />; }
export function ACOSMarketplace() { return <ModuleView moduleId="marketplace" />; }
export function ACOSReports() { return <ModuleView moduleId="reports" />; }
export function ACOSUsers() { return <ModuleView moduleId="users" />; }

export function ACOSBackendGuide() {
  return (
    <ACOSShell title="Backend integration guide" kicker="Security">
      <SecurityTodoPanel />
      <section className="acos-table-card">
        <div className="acos-card-head">
          <div>
            <span>API plan</span>
            <h2>Required secure endpoints</h2>
          </div>
          <Lock size={22} />
        </div>
        <div className="acos-table-wrap">
          <table>
            <thead><tr><th>Endpoint</th><th>Purpose</th><th>Server check</th></tr></thead>
            <tbody>
              <tr><td>/auth/login</td><td>Set secure JWT cookie</td><td>Hash verify, rate limit, CSRF</td></tr>
              <tr><td>/users</td><td>User and role CRUD</td><td>admin role only</td></tr>
              <tr><td>/leads</td><td>Lead pipeline CRUD</td><td>admin/sales role</td></tr>
              <tr><td>/finance</td><td>Income and expense ledger</td><td>admin/finance role</td></tr>
              <tr><td>/audit-log</td><td>Immutable activity log</td><td>admin role only</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </ACOSShell>
  );
}
