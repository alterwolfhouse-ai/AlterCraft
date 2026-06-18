import { Link } from 'react-router';
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Camera,
  CheckCircle2,
  ClipboardList,
  FileLock2,
  Hammer,
  Layers3,
  LockKeyhole,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Users,
  WalletCards,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { SEOHead } from '../components/seo/SEOHead';
import { siteDetails } from '../data/siteDetails';
import { createWhatsappLink } from '../utils/contact';
import '../styles/contractor-desk.css';

type DeskCard = {
  icon: LucideIcon;
  title: string;
  copy: string;
};

const metrics = [
  { label: 'Active Jobs', value: '05', note: 'sites, production and material orders' },
  { label: 'Payment Pending', value: '03', note: 'gates holding risky movement' },
  { label: 'Labour Deployed', value: '2+1', note: 'carpenters and helper assigned' },
  { label: 'Proof Missing', value: '07', note: 'photos, approvals and confirmations' },
];

const serviceDesks: DeskCard[] = [
  {
    icon: PackageCheck,
    title: 'Material Desk',
    copy: 'Plywood, laminate, hardware, glass, paint, ACP, lights, channels and site material sourcing with 100 percent material payment before procurement.',
  },
  {
    icon: Users,
    title: 'Labour Desk',
    copy: 'Carpenters, helpers, electricians, painters, ceiling workers, polish workers and fitters deployed only after labour advance is clear.',
  },
  {
    icon: Hammer,
    title: 'Production Desk',
    copy: 'Workshop production for kitchens, wardrobes, beds, TV units, counters, office furniture, wall panels and modular furniture with stage payments.',
  },
  {
    icon: Camera,
    title: 'Site Control Desk',
    copy: 'Daily site visits, attendance, progress photos, material needs, issue reporting and contractor or client updates in one command flow.',
  },
  {
    icon: Layers3,
    title: 'Full Execution Desk',
    copy: 'Measurement, material, labour, production, supervision, installation, finishing and handover with written scope and milestone control.',
  },
];

const modules: DeskCard[] = [
  {
    icon: Banknote,
    title: 'Payment Gate',
    copy: 'A job cannot move forward when advance, material payment, labour advance or milestone proof is not clear.',
  },
  {
    icon: ClipboardList,
    title: 'Job and Site Tracker',
    copy: 'Track each order from lead capture to BOQ, quotation, work order, production, site execution, QC and handover.',
  },
  {
    icon: WalletCards,
    title: 'Cash Ledger',
    copy: 'Assign every rupee into material, labour, transport, tools, rent, EMI, reserve, profit or debt before spending.',
  },
  {
    icon: Users,
    title: 'Labour Deployment',
    copy: 'Know who is assigned, who attended, what advance was paid, what work is approved and what cannot start.',
  },
  {
    icon: Camera,
    title: 'Daily Site Report',
    copy: 'Labour present, work completed, pending work, material used, photos taken, issues and next action.',
  },
  {
    icon: FileLock2,
    title: 'Dispute Protection',
    copy: 'Preserve documents, WhatsApp proof, witnesses, amount at risk, settlement option and next lawful action.',
  },
];

const rules = [
  'No verbal work',
  'No undocumented asset',
  'No site without payment gate',
  'No labour without advance',
  'No material without 100 percent material payment',
  'No cash without bucket',
  'No job without owner',
  'No scope without writing',
  'No handover without final payment and proof',
];

const jobStages = [
  'Lead',
  'Requirement Captured',
  'BOQ Prepared',
  'Quotation Sent',
  'Advance Received',
  'Work Order Confirmed',
  'Material Assigned',
  'Labour Assigned',
  'Production',
  'Site Execution',
  'QC',
  'Handover',
  'Final Payment',
  'Closed',
];

const seedJobs = [
  { name: 'Empro Motor Office', service: 'Full Execution', status: 'Payment Gate Pending', risk: 'Critical' },
  { name: 'Devala Site', service: 'Site Control / Dispute', status: 'Disputed', risk: 'Critical' },
  { name: 'Current Shop Production', service: 'Production Desk', status: 'Active', risk: 'Medium' },
  { name: 'Contractor Material Order', service: 'Material Desk', status: 'Awaiting 100 percent Material Payment', risk: 'Medium' },
  { name: 'Labour Deployment Batch', service: 'Labour Desk', status: '2 Carpenters + 1 Helper Assigned', risk: 'Medium' },
];

const whatsappLink = createWhatsappLink(
  'Hi AlterCraft, I want to know about Contractor Desk for execution control, payment gates and site management.',
);

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AlterCraft Contractor Desk',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://www.altercraft.in/ContractorDesk/',
  description:
    'Mobile-first execution control system for contractor leads, work orders, payment gates, labour deployment, material desk, site reports, cash ledger and dispute protection.',
  creator: {
    '@type': 'Organization',
    name: siteDetails.legalName,
    url: 'https://www.altercraft.in/',
  },
};

function OperatorMockup() {
  return (
    <div className="contractor-mockup" aria-label="Contractor Desk mobile dashboard preview">
      <div className="contractor-mockup-light" />
      <div className="contractor-device">
        <div className="contractor-device-top">
          <div>
            <span>AlterCraft</span>
            <strong>Contractor Desk</strong>
          </div>
          <em>Live</em>
        </div>

        <div className="contractor-device-metrics">
          {metrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
              <small>{metric.note}</small>
            </article>
          ))}
        </div>

        <div className="contractor-job-list">
          {seedJobs.slice(0, 3).map((job) => (
            <article key={job.name} className={job.risk === 'Critical' ? 'is-critical' : ''}>
              <div>
                <strong>{job.name}</strong>
                <span>{job.service}</span>
              </div>
              <em>{job.status}</em>
            </article>
          ))}
        </div>
      </div>

      <div className="contractor-float-chip contractor-float-chip-a">
        <ShieldCheck size={20} />
        <span>Proof locked</span>
      </div>
      <div className="contractor-float-chip contractor-float-chip-b">
        <AlertTriangle size={20} />
        <span>Cash risk</span>
      </div>
    </div>
  );
}

export default function ContractorDesk() {
  return (
    <main className="contractor-desk-page">
      <SEOHead
        title="AlterCraft Contractor Desk | Execution Control System"
        description="AlterCraft Contractor Desk is a mobile-first execution control system for contractor leads, payment gates, labour, material, site reports, cash ledger and dispute protection."
        canonical="https://www.altercraft.in/ContractorDesk/"
        jsonLd={[productSchema]}
      />

      <section className="contractor-hero">
        <div className="contractor-beam" />
        <nav className="contractor-nav" aria-label="Contractor Desk navigation">
          <Link to="/" className="contractor-brand">
            <span>AC</span>
            <div>
              <strong>AlterCraft</strong>
              <small>Contractor Desk</small>
            </div>
          </Link>
          <div className="contractor-nav-links">
            <a href="#desks">Desks</a>
            <a href="#modules">Modules</a>
            <a href="#doctrine">Payment Gates</a>
            <a href="#demo">Request Access</a>
          </div>
        </nav>

        <div className="contractor-hero-grid">
          <div className="contractor-hero-copy">
            <p className="contractor-kicker">
              <Sparkles size={15} />
              Main product by AlterCraft
            </p>
            <h1>Contractor execution control, without site chaos.</h1>
            <p className="contractor-lede">
              AlterCraft Contractor Desk is a mobile-first command center for contractors,
              designers, builders and site operators who need payment gates, material control,
              labour deployment, site reports, cash discipline and dispute protection in one place.
            </p>
            <div className="contractor-actions">
              <a href={whatsappLink} className="contractor-primary">
                Request access <ArrowRight size={17} />
              </a>
              <a href="#modules" className="contractor-secondary">
                See modules
              </a>
            </div>
            <div className="contractor-proof-row">
              {['Payment gate first', 'Written scope', 'Daily proof', 'Cash buckets'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <OperatorMockup />
        </div>
      </section>

      <section className="contractor-strip" aria-label="Contractor Desk quick metrics">
        {metrics.map((metric) => (
          <article key={metric.label}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <small>{metric.note}</small>
          </article>
        ))}
      </section>

      <section className="contractor-section contractor-split" id="desks">
        <div className="contractor-section-copy">
          <p className="contractor-kicker">Execution desks</p>
          <h2>You bring the order. AlterCraft manages the backend.</h2>
          <p>
            Contractor Desk turns execution support into clear service lanes: material sourcing,
            labour deployment, production, site control and full execution. Every lane has a
            payment rule before work moves.
          </p>
        </div>
        <div className="contractor-card-grid">
          {serviceDesks.map((desk) => (
            <article className="contractor-card" key={desk.title}>
              <desk.icon size={24} />
              <h3>{desk.title}</h3>
              <p>{desk.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contractor-section" id="modules">
        <div className="contractor-section-head">
          <p className="contractor-kicker">Operator modules</p>
          <h2>Every risky action becomes visible before it bleeds cash.</h2>
        </div>
        <div className="contractor-module-grid">
          {modules.map((module) => (
            <article className="contractor-module-card" key={module.title}>
              <module.icon size={24} />
              <h3>{module.title}</h3>
              <p>{module.copy}</p>
              <ChevronRightLite />
            </article>
          ))}
        </div>
      </section>

      <section className="contractor-section contractor-doctrine" id="doctrine">
        <div>
          <LockKeyhole size={36} />
          <p className="contractor-kicker">Operating doctrine</p>
          <h2>No work starts without a payment gate.</h2>
          <p>
            This is not CRM theatre. It is an execution control system built to stop verbal chaos,
            undocumented work, weak payment stages and missing site proof.
          </p>
        </div>
        <div className="contractor-rule-list">
          {rules.map((rule) => (
            <article key={rule}>
              <CheckCircle2 size={18} />
              <span>{rule}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contractor-section contractor-stage-section">
        <div className="contractor-section-head">
          <p className="contractor-kicker">Job tracker</p>
          <h2>From lead to handover, every stage has an owner.</h2>
        </div>
        <div className="contractor-stage-flow">
          {jobStages.map((stage, index) => (
            <span key={stage}>
              <em>{String(index + 1).padStart(2, '0')}</em>
              {stage}
            </span>
          ))}
        </div>
      </section>

      <section className="contractor-section contractor-risk-section">
        <div className="contractor-section-head">
          <p className="contractor-kicker">Seed control data</p>
          <h2>The first dashboard already knows what is active, blocked and risky.</h2>
        </div>
        <div className="contractor-risk-table">
          {seedJobs.map((job) => (
            <article key={job.name} className={job.risk === 'Critical' ? 'is-critical' : ''}>
              <div>
                <strong>{job.name}</strong>
                <span>{job.service}</span>
              </div>
              <p>{job.status}</p>
              <em>{job.risk}</em>
            </article>
          ))}
        </div>
      </section>

      <section className="contractor-final" id="demo">
        <BadgeCheck size={42} />
        <h2>Run contractor-backed work with payment discipline and proof.</h2>
        <p>
          Start with the mobile-first MVP: dashboard, leads, job tracker, payment gate, cash ledger,
          labour, material desk, daily site reports, disputes, JSON import and export.
        </p>
        <a href={whatsappLink} className="contractor-primary">
          Request Contractor Desk access <Zap size={17} />
        </a>
      </section>
    </main>
  );
}

function ChevronRightLite() {
  return (
    <span className="contractor-card-arrow" aria-hidden="true">
      <ArrowRight size={16} />
    </span>
  );
}
