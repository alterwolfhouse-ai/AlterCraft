import React from 'react';
import { NavLink } from 'react-router';
import {
  AlertTriangle,
  ArrowUpRight,
  Banknote,
  BriefcaseBusiness,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  ClipboardList,
  Download,
  FileWarning,
  Gauge,
  HardHat,
  Layers3,
  PackageCheck,
  Plus,
  Scale,
  Settings,
  Upload,
  Users,
} from 'lucide-react';
import type { Dispute, Job, Labour, Lead, Material, RiskLevel, WorkStatus } from './types';
import { formatMoney, gateWarningFor } from './useOperatorDeskStore';

export type ScreenSlug =
  | 'dashboard'
  | 'leads'
  | 'jobs'
  | 'cash'
  | 'labour'
  | 'materials'
  | 'site-reports'
  | 'disputes'
  | 'reports'
  | 'settings';

export const screenNav: Array<{
  slug: ScreenSlug;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ size?: number }>;
}> = [
  { slug: 'dashboard', label: 'Dashboard', shortLabel: 'Home', icon: Gauge },
  { slug: 'leads', label: 'Leads', shortLabel: 'Leads', icon: BriefcaseBusiness },
  { slug: 'jobs', label: 'Jobs', shortLabel: 'Jobs', icon: ClipboardList },
  { slug: 'cash', label: 'Cash', shortLabel: 'Cash', icon: Banknote },
  { slug: 'labour', label: 'Labour', shortLabel: 'Labour', icon: Users },
  { slug: 'materials', label: 'Materials', shortLabel: 'Mat.', icon: PackageCheck },
  { slug: 'site-reports', label: 'Site Reports', shortLabel: 'Site', icon: Layers3 },
  { slug: 'disputes', label: 'Disputes', shortLabel: 'Risk', icon: Scale },
  { slug: 'reports', label: 'Reports', shortLabel: 'Reports', icon: FileWarning },
  { slug: 'settings', label: 'Settings', shortLabel: 'More', icon: Settings },
];

export function DashboardCard({
  label,
  value,
  note,
  tone = 'neutral',
  icon: Icon = Gauge,
}: {
  label: string;
  value: string | number;
  note?: string;
  tone?: 'neutral' | 'good' | 'warn' | 'danger';
  icon?: React.ComponentType<{ size?: number }>;
}) {
  return (
    <article className={`od-card od-kpi od-tone-${tone}`}>
      <span className="od-kpi-icon"><Icon size={17} /></span>
      <p>{label}</p>
      <strong>{value}</strong>
      {note ? <small>{note}</small> : null}
    </article>
  );
}

export function StatusBadge({ status }: { status: WorkStatus | string }) {
  const key = status.toLowerCase().replace(/\s+/g, '-');
  return <span className={`od-badge od-status-${key}`}>{status}</span>;
}

export function RiskBadge({ risk }: { risk: RiskLevel | string }) {
  const key = risk.toLowerCase();
  return <span className={`od-badge od-risk-${key}`}>{risk} risk</span>;
}

export function BottomNav({ active }: { active: ScreenSlug }) {
  const primary = screenNav.filter((item) => ['dashboard', 'leads', 'jobs', 'cash', 'settings'].includes(item.slug));
  return (
    <nav className="od-bottom-nav" aria-label="OperatorDesk mobile navigation">
      {primary.map(({ slug, shortLabel, icon: Icon }) => (
        <NavLink key={slug} to={`/operator-desk/${slug}`} className={active === slug ? 'active' : undefined}>
          <Icon size={18} />
          <span>{shortLabel}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export function QuickActionButton({ onClick, label = 'Add' }: { onClick: () => void; label?: string }) {
  return (
    <button className="od-fab" type="button" onClick={onClick}>
      <Plus size={20} />
      <span>{label}</span>
    </button>
  );
}

export function JobCard({
  job,
  onMarkProof,
}: {
  job: Job;
  onMarkProof?: (jobId: string) => void;
}) {
  const warning = gateWarningFor(job);
  return (
    <article className="od-card od-job-card">
      <div className="od-card-row">
        <div>
          <p className="od-eyebrow">{job.serviceType}</p>
          <h3>{job.siteName}</h3>
          <small>{job.contractorName} / {job.assignedOwner}</small>
        </div>
        <RiskBadge risk={job.riskLevel} />
      </div>
      <div className="od-meta-grid">
        <span><b>{formatMoney(job.totalValue)}</b>Total</span>
        <span><b>{formatMoney(job.pendingAmount)}</b>Pending</span>
        <span><b>{job.currentStage}</b>Stage</span>
      </div>
      {warning ? (
        <div className="od-warning"><AlertTriangle size={15} /> {warning}</div>
      ) : (
        <div className="od-success"><CheckCircle2 size={15} /> Payment gate clear</div>
      )}
      <p className="od-muted">{job.nextAction}</p>
      <div className="od-proof-row">
        <span className={job.writtenConfirmation ? 'is-ok' : 'is-missing'}>Written scope</span>
        <span className={job.photosProof ? 'is-ok' : 'is-missing'}>Photo proof</span>
        {onMarkProof ? (
          <button type="button" onClick={() => onMarkProof(job.id)}>
            <ArrowUpRight size={15} /> Mark proof
          </button>
        ) : null}
      </div>
    </article>
  );
}

export function LeadCard({
  lead,
  onConvert,
}: {
  lead: Lead;
  onConvert: (leadId: string) => void;
}) {
  return (
    <article className="od-card od-list-card">
      <div className="od-card-row">
        <div>
          <p className="od-eyebrow">{lead.leadSource} / {lead.serviceType}</p>
          <h3>{lead.contractorName}</h3>
          <small>{lead.siteLocation}</small>
        </div>
        <StatusBadge status={lead.status} />
      </div>
      <p className="od-muted">{lead.workType}</p>
      <div className="od-meta-grid">
        <span><b>{formatMoney(lead.approxBudget)}</b>Budget</span>
        <span><b>{lead.timeline || 'Not set'}</b>Timeline</span>
      </div>
      <button type="button" className="od-ghost-action" onClick={() => onConvert(lead.id)}>
        Convert to job <ArrowUpRight size={15} />
      </button>
    </article>
  );
}

export function LabourCard({
  labour,
  onPresent,
}: {
  labour: Labour;
  onPresent: (labourId: string) => void;
}) {
  return (
    <article className="od-card od-list-card">
      <div className="od-card-row">
        <div>
          <p className="od-eyebrow">{labour.role}</p>
          <h3>{labour.name}</h3>
          <small>{labour.assignedSite}</small>
        </div>
        <StatusBadge status={labour.workStatus} />
      </div>
      <div className="od-meta-grid">
        <span><b>{formatMoney(labour.dailyRate)}</b>Daily</span>
        <span><b>{labour.attendanceStatus}</b>Attendance</span>
        <span><b>{labour.reliabilityScore}/100</b>Reliability</span>
      </div>
      <button type="button" className="od-ghost-action" onClick={() => onPresent(labour.id)}>
        <HardHat size={15} /> Mark present
      </button>
    </article>
  );
}

export function MaterialCard({ material }: { material: Material }) {
  return (
    <article className="od-card od-list-card">
      <div className="od-card-row">
        <div>
          <p className="od-eyebrow">{material.vendor}</p>
          <h3>{material.itemName}</h3>
          <small>{material.quantity}</small>
        </div>
        <StatusBadge status={material.clientPaid ? 'Active' : 'Payment Pending'} />
      </div>
      <div className="od-meta-grid">
        <span><b>{formatMoney(material.totalCost)}</b>Cost</span>
        <span><b>{material.procurementStatus}</b>Procurement</span>
        <span><b>{material.deliveryStatus}</b>Delivery</span>
      </div>
      {!material.clientPaid ? <div className="od-warning"><CircleDollarSign size={15} /> Material payment not clear</div> : null}
    </article>
  );
}

export function DisputeCard({ dispute }: { dispute: Dispute }) {
  return (
    <article className="od-card od-list-card">
      <div className="od-card-row">
        <div>
          <p className="od-eyebrow">{dispute.personOrCompany}</p>
          <h3>{dispute.disputeName}</h3>
          <small>Deadline: {dispute.deadline || 'Not set'}</small>
        </div>
        <RiskBadge risk="Critical" />
      </div>
      <div className="od-meta-grid">
        <span><b>{formatMoney(dispute.amountAtRisk)}</b>At risk</span>
        <span><b>{dispute.documentsAvailable ? 'Yes' : 'No'}</b>Docs</span>
        <span><b>{dispute.whatsappProof ? 'Yes' : 'No'}</b>WhatsApp</span>
      </div>
      <p className="od-muted">{dispute.nextLawfulAction}</p>
    </article>
  );
}

export function EmptyState({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="od-empty">
      <Clock3 size={28} />
      <h3>{title}</h3>
      <p>{copy}</p>
    </div>
  );
}

export function ImportExportPanel({
  exportJson,
  importJson,
  resetSeed,
}: {
  exportJson: () => string;
  importJson: (json: string) => void;
  resetSeed: () => void;
}) {
  const [backup, setBackup] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleExport = () => {
    setBackup(exportJson());
    setMessage('Backup generated below. Keep it safe before resetting data.');
  };

  const handleImport = () => {
    try {
      importJson(backup);
      setMessage('Backup imported successfully.');
    } catch (error) {
      setMessage(error instanceof Error ? error.message : 'Import failed.');
    }
  };

  return (
    <article className="od-card od-import-export">
      <div className="od-card-row">
        <div>
          <p className="od-eyebrow">Local data backup</p>
          <h3>Import / Export JSON</h3>
        </div>
      </div>
      <div className="od-button-row">
        <button type="button" onClick={handleExport}><Download size={16} /> Export</button>
        <button type="button" onClick={handleImport}><Upload size={16} /> Import</button>
        <button type="button" className="danger" onClick={resetSeed}>Reset seed</button>
      </div>
      <textarea
        value={backup}
        onChange={(event) => setBackup(event.target.value)}
        placeholder="Paste OperatorDesk JSON backup here, or export current data."
        rows={8}
      />
      {message ? <p className="od-muted">{message}</p> : null}
    </article>
  );
}
