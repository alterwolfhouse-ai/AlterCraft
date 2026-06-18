import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, NavLink, useParams } from 'react-router';
import {
  AlertTriangle,
  ArrowRight,
  Banknote,
  BriefcaseBusiness,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  FileText,
  Filter,
  Gauge,
  HardHat,
  Layers3,
  PackageCheck,
  Search,
  ShieldCheck,
  Sparkles,
  Upload,
  Users,
} from 'lucide-react';
import {
  BottomNav,
  DashboardCard,
  DisputeCard,
  EmptyState,
  ImportExportPanel,
  JobCard,
  LabourCard,
  LeadCard,
  MaterialCard,
  QuickActionButton,
  RiskBadge,
  ScreenSlug,
  StatusBadge,
  screenNav,
} from '../operatorDesk/components';
import { cashBuckets, doctrineRules, futureUpgradeNotes, jobStages, labourRoles, serviceTypes, workStatuses } from '../operatorDesk/constants';
import type { CashBucket, CashEntry, Dispute, Job, Labour, Lead, Material, ServiceType, SiteReport, WorkStatus } from '../operatorDesk/types';
import { formatMoney, useOperatorDeskStore } from '../operatorDesk/useOperatorDeskStore';

type ActionForm = 'lead' | 'job' | 'cash' | 'labour' | 'material' | 'site-report' | 'dispute' | null;

const validScreens = new Set(screenNav.map((item) => item.slug));

const screenMeta: Record<ScreenSlug, { title: string; kicker: string; copy: string }> = {
  dashboard: {
    title: 'OperatorDesk',
    kicker: 'ACOS mobile command',
    copy: 'Control money, work, proof, people and risk from one focused execution desk.',
  },
  leads: {
    title: 'Leads',
    kicker: 'Contractor pipeline',
    copy: 'Capture contractor enquiries and convert only documented leads into jobs.',
  },
  jobs: {
    title: 'Jobs',
    kicker: 'Execution control',
    copy: 'Watch stages, payment gates, blockers, proof and next actions before work moves.',
  },
  cash: {
    title: 'Cash',
    kicker: 'Bucket discipline',
    copy: 'Record inflow and outflow with proof, bucket, mode and related job.',
  },
  labour: {
    title: 'Labour',
    kicker: 'Deployment desk',
    copy: 'Track roles, daily rate, attendance, advance and reliability before site work starts.',
  },
  materials: {
    title: 'Materials',
    kicker: 'Procurement desk',
    copy: 'Lock vendor, cost, client payment, delivery status and material proof.',
  },
  'site-reports': {
    title: 'Site Reports',
    kicker: 'Daily proof',
    copy: 'Record what happened today, what is pending, issues, photos and customer update status.',
  },
  disputes: {
    title: 'Disputes',
    kicker: 'Evidence desk',
    copy: 'Keep documents, WhatsApp proof, witnesses, money at risk and next lawful action visible.',
  },
  reports: {
    title: 'Reports',
    kicker: 'Owner review',
    copy: 'Summarize active value, pending payment, proof gaps, cash risk and disputed exposure.',
  },
  settings: {
    title: 'Settings',
    kicker: 'Local MVP',
    copy: 'Export, import, reset and review the rules that protect the business.',
  },
};

const actionForScreen = (screen: ScreenSlug): ActionForm => {
  if (screen === 'leads') return 'lead';
  if (screen === 'jobs' || screen === 'dashboard') return 'job';
  if (screen === 'cash') return 'cash';
  if (screen === 'labour') return 'labour';
  if (screen === 'materials') return 'material';
  if (screen === 'site-reports') return 'site-report';
  if (screen === 'disputes') return 'dispute';
  return null;
};

const actionLabel = (action: ActionForm) => {
  if (action === 'lead') return 'Add lead';
  if (action === 'job') return 'Add job';
  if (action === 'cash') return 'Add cash';
  if (action === 'labour') return 'Add labour';
  if (action === 'material') return 'Add material';
  if (action === 'site-report') return 'Add report';
  if (action === 'dispute') return 'Add dispute';
  return 'Add';
};

const today = () => new Date().toISOString().slice(0, 10);

const includes = (value: unknown, needle: string) => String(value ?? '').toLowerCase().includes(needle.toLowerCase());

function TextField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required,
}: {
  label: string;
  value: string | number;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="od-field">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function TextAreaField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="od-field wide">
      <span>{label}</span>
      <textarea value={value} placeholder={placeholder} rows={3} onChange={(event) => onChange(event.target.value)} />
    </label>
  );
}

function SelectField<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: readonly T[];
  onChange: (value: T) => void;
}) {
  return (
    <label className="od-field">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value as T)}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function BooleanField({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <label className="od-check">
      <input type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} />
      <span>{label}</span>
    </label>
  );
}

function LeadForm({ onSubmit }: { onSubmit: (lead: Omit<Lead, 'id' | 'createdAt'>) => void }) {
  const [lead, setLead] = useState<Omit<Lead, 'id' | 'createdAt'>>({
    contractorName: '',
    phone: '',
    siteLocation: '',
    leadSource: 'WhatsApp',
    workType: '',
    approxBudget: 0,
    timeline: '',
    materialPreference: '',
    labourRequired: true,
    drawingAvailable: false,
    notes: '',
    serviceType: 'Full Execution Desk',
    status: 'New',
  });

  const update = <K extends keyof typeof lead>(key: K, value: (typeof lead)[K]) => setLead((current) => ({ ...current, [key]: value }));

  return (
    <form className="od-form-grid" onSubmit={(event) => { event.preventDefault(); onSubmit(lead); }}>
      <TextField label="Contractor / client" value={lead.contractorName} required onChange={(value) => update('contractorName', value)} />
      <TextField label="Phone" value={lead.phone} onChange={(value) => update('phone', value)} />
      <TextField label="Site location" value={lead.siteLocation} onChange={(value) => update('siteLocation', value)} />
      <TextField label="Lead source" value={lead.leadSource} onChange={(value) => update('leadSource', value)} />
      <TextField label="Work type" value={lead.workType} required onChange={(value) => update('workType', value)} />
      <TextField label="Approx budget" type="number" value={lead.approxBudget} onChange={(value) => update('approxBudget', Number(value))} />
      <TextField label="Timeline" value={lead.timeline} onChange={(value) => update('timeline', value)} />
      <SelectField label="Service type" value={lead.serviceType} options={serviceTypes} onChange={(value) => update('serviceType', value)} />
      <SelectField label="Status" value={lead.status} options={workStatuses} onChange={(value) => update('status', value)} />
      <TextAreaField label="Material preference" value={lead.materialPreference} onChange={(value) => update('materialPreference', value)} />
      <TextAreaField label="Notes" value={lead.notes} onChange={(value) => update('notes', value)} />
      <div className="od-form-checks">
        <BooleanField label="Labour required" checked={lead.labourRequired} onChange={(value) => update('labourRequired', value)} />
        <BooleanField label="Drawing available" checked={lead.drawingAvailable} onChange={(value) => update('drawingAvailable', value)} />
      </div>
      <button type="submit" className="od-submit">Save lead</button>
    </form>
  );
}

function JobForm({ onSubmit }: { onSubmit: (job: Omit<Job, 'id' | 'createdAt' | 'pendingAmount'>) => void }) {
  const [job, setJob] = useState<Omit<Job, 'id' | 'createdAt' | 'pendingAmount'>>({
    siteName: '',
    contractorName: '',
    serviceType: 'Full Execution Desk',
    totalValue: 0,
    advanceReceived: 0,
    paymentGateStatus: 'Pending',
    currentStage: 'Lead',
    workCompleted: '',
    workPending: '',
    materialRequired: '',
    labourRequired: '',
    assignedOwner: 'Operator Desk',
    deadline: '',
    blocker: '',
    writtenConfirmation: false,
    photosProof: false,
    riskLevel: 'Medium',
    status: 'New',
    nextAction: '',
  });

  const update = <K extends keyof typeof job>(key: K, value: (typeof job)[K]) => setJob((current) => ({ ...current, [key]: value }));

  return (
    <form className="od-form-grid" onSubmit={(event) => { event.preventDefault(); onSubmit(job); }}>
      <TextField label="Site name" value={job.siteName} required onChange={(value) => update('siteName', value)} />
      <TextField label="Contractor / client" value={job.contractorName} required onChange={(value) => update('contractorName', value)} />
      <SelectField label="Service type" value={job.serviceType} options={serviceTypes} onChange={(value) => update('serviceType', value)} />
      <SelectField label="Stage" value={job.currentStage} options={jobStages} onChange={(value) => update('currentStage', value)} />
      <SelectField label="Status" value={job.status} options={workStatuses} onChange={(value) => update('status', value)} />
      <SelectField label="Risk" value={job.riskLevel} options={['Low', 'Medium', 'High', 'Critical']} onChange={(value) => update('riskLevel', value)} />
      <TextField label="Total value" type="number" value={job.totalValue} onChange={(value) => update('totalValue', Number(value))} />
      <TextField label="Advance received" type="number" value={job.advanceReceived} onChange={(value) => update('advanceReceived', Number(value))} />
      <TextField label="Owner" value={job.assignedOwner} onChange={(value) => update('assignedOwner', value)} />
      <TextField label="Deadline" type="date" value={job.deadline} onChange={(value) => update('deadline', value)} />
      <TextAreaField label="Work completed" value={job.workCompleted} onChange={(value) => update('workCompleted', value)} />
      <TextAreaField label="Work pending" value={job.workPending} onChange={(value) => update('workPending', value)} />
      <TextAreaField label="Material required" value={job.materialRequired} onChange={(value) => update('materialRequired', value)} />
      <TextAreaField label="Labour required" value={job.labourRequired} onChange={(value) => update('labourRequired', value)} />
      <TextAreaField label="Blocker" value={job.blocker} onChange={(value) => update('blocker', value)} />
      <TextAreaField label="Next action" value={job.nextAction} onChange={(value) => update('nextAction', value)} />
      <div className="od-form-checks">
        <BooleanField label="Written confirmation" checked={job.writtenConfirmation} onChange={(value) => update('writtenConfirmation', value)} />
        <BooleanField label="Photos / proof available" checked={job.photosProof} onChange={(value) => update('photosProof', value)} />
      </div>
      <button type="submit" className="od-submit">Save job</button>
    </form>
  );
}

function CashEntryForm({ jobs, onSubmit }: { jobs: Job[]; onSubmit: (entry: Omit<CashEntry, 'id'>) => void }) {
  const [entry, setEntry] = useState<Omit<CashEntry, 'id'>>({
    date: today(),
    type: 'Inflow',
    amount: 0,
    bucket: '',
    relatedJobId: '',
    sourceOrPaidTo: '',
    mode: 'UPI',
    proof: false,
    notes: '',
  });
  const update = <K extends keyof typeof entry>(key: K, value: (typeof entry)[K]) => setEntry((current) => ({ ...current, [key]: value }));

  return (
    <form className="od-form-grid" onSubmit={(event) => { event.preventDefault(); onSubmit(entry); }}>
      <TextField label="Date" type="date" value={entry.date} onChange={(value) => update('date', value)} />
      <SelectField label="Type" value={entry.type} options={['Inflow', 'Outflow']} onChange={(value) => update('type', value)} />
      <TextField label="Amount" type="number" value={entry.amount} onChange={(value) => update('amount', Number(value))} />
      <SelectField label="Bucket" value={(entry.bucket || '') as CashBucket | ''} options={['', ...cashBuckets]} onChange={(value) => update('bucket', value)} />
      <label className="od-field">
        <span>Related job</span>
        <select value={entry.relatedJobId} onChange={(event) => update('relatedJobId', event.target.value)}>
          <option value="">Not linked</option>
          {jobs.map((job) => <option key={job.id} value={job.id}>{job.siteName}</option>)}
        </select>
      </label>
      <TextField label="Source / paid to" value={entry.sourceOrPaidTo} onChange={(value) => update('sourceOrPaidTo', value)} />
      <TextField label="Mode" value={entry.mode} onChange={(value) => update('mode', value)} />
      <TextAreaField label="Notes" value={entry.notes} onChange={(value) => update('notes', value)} />
      <BooleanField label="Payment proof available" checked={entry.proof} onChange={(value) => update('proof', value)} />
      <button type="submit" className="od-submit">Save cash entry</button>
    </form>
  );
}

function LabourForm({ onSubmit }: { onSubmit: (labour: Omit<Labour, 'id'>) => void }) {
  const [labour, setLabour] = useState<Omit<Labour, 'id'>>({
    name: '',
    role: 'Carpenter',
    assignedSite: '',
    dailyRate: 0,
    paymentType: 'Daily',
    attendanceStatus: 'Not Marked',
    advancePaid: 0,
    workStatus: 'New',
    reliabilityScore: 70,
    notes: '',
  });
  const update = <K extends keyof typeof labour>(key: K, value: (typeof labour)[K]) => setLabour((current) => ({ ...current, [key]: value }));

  return (
    <form className="od-form-grid" onSubmit={(event) => { event.preventDefault(); onSubmit(labour); }}>
      <TextField label="Name" value={labour.name} required onChange={(value) => update('name', value)} />
      <SelectField label="Role" value={labour.role} options={labourRoles} onChange={(value) => update('role', value)} />
      <TextField label="Assigned site" value={labour.assignedSite} onChange={(value) => update('assignedSite', value)} />
      <TextField label="Daily rate" type="number" value={labour.dailyRate} onChange={(value) => update('dailyRate', Number(value))} />
      <TextField label="Payment type" value={labour.paymentType} onChange={(value) => update('paymentType', value)} />
      <TextField label="Advance paid" type="number" value={labour.advancePaid} onChange={(value) => update('advancePaid', Number(value))} />
      <SelectField label="Status" value={labour.workStatus} options={workStatuses} onChange={(value) => update('workStatus', value)} />
      <TextField label="Reliability score" type="number" value={labour.reliabilityScore} onChange={(value) => update('reliabilityScore', Number(value))} />
      <TextAreaField label="Notes" value={labour.notes} onChange={(value) => update('notes', value)} />
      <button type="submit" className="od-submit">Save labour</button>
    </form>
  );
}

function MaterialForm({ jobs, onSubmit }: { jobs: Job[]; onSubmit: (material: Omit<Material, 'id'>) => void }) {
  const [material, setMaterial] = useState<Omit<Material, 'id'>>({
    itemName: '',
    relatedJobId: jobs[0]?.id || '',
    vendor: '',
    quantity: '',
    rate: 0,
    totalCost: 0,
    clientPaid: false,
    procurementStatus: 'Required',
    deliveryStatus: 'Pending',
    proof: false,
    notes: '',
  });
  const update = <K extends keyof typeof material>(key: K, value: (typeof material)[K]) => setMaterial((current) => ({ ...current, [key]: value }));

  return (
    <form className="od-form-grid" onSubmit={(event) => { event.preventDefault(); onSubmit(material); }}>
      <TextField label="Item name" value={material.itemName} required onChange={(value) => update('itemName', value)} />
      <label className="od-field">
        <span>Related job</span>
        <select value={material.relatedJobId} onChange={(event) => update('relatedJobId', event.target.value)}>
          {jobs.map((job) => <option key={job.id} value={job.id}>{job.siteName}</option>)}
        </select>
      </label>
      <TextField label="Vendor" value={material.vendor} onChange={(value) => update('vendor', value)} />
      <TextField label="Quantity" value={material.quantity} onChange={(value) => update('quantity', value)} />
      <TextField label="Rate" type="number" value={material.rate} onChange={(value) => update('rate', Number(value))} />
      <TextField label="Total cost" type="number" value={material.totalCost} onChange={(value) => update('totalCost', Number(value))} />
      <SelectField label="Procurement" value={material.procurementStatus} options={['Required', 'Quoted', 'Ordered', 'Received', 'Used']} onChange={(value) => update('procurementStatus', value)} />
      <SelectField label="Delivery" value={material.deliveryStatus} options={['Pending', 'In Transit', 'Delivered', 'Partial']} onChange={(value) => update('deliveryStatus', value)} />
      <BooleanField label="Client payment clear" checked={material.clientPaid} onChange={(value) => update('clientPaid', value)} />
      <BooleanField label="Proof available" checked={material.proof} onChange={(value) => update('proof', value)} />
      <TextAreaField label="Notes" value={material.notes} onChange={(value) => update('notes', value)} />
      <button type="submit" className="od-submit">Save material</button>
    </form>
  );
}

function SiteReportForm({ jobs, onSubmit }: { jobs: Job[]; onSubmit: (report: Omit<SiteReport, 'id'>) => void }) {
  const [report, setReport] = useState<Omit<SiteReport, 'id'>>({
    id: '',
    date: today(),
    siteName: jobs[0]?.siteName || '',
    relatedJobId: jobs[0]?.id || '',
    labourPresent: '',
    workCompletedToday: '',
    workPending: '',
    materialUsed: '',
    materialRequired: '',
    photosTaken: false,
    issues: '',
    nextAction: '',
    updateSent: false,
    notes: '',
  } as Omit<SiteReport, 'id'>);
  const update = <K extends keyof typeof report>(key: K, value: (typeof report)[K]) => setReport((current) => ({ ...current, [key]: value }));

  return (
    <form className="od-form-grid" onSubmit={(event) => { event.preventDefault(); onSubmit(report); }}>
      <TextField label="Date" type="date" value={report.date} onChange={(value) => update('date', value)} />
      <label className="od-field">
        <span>Related job</span>
        <select
          value={report.relatedJobId}
          onChange={(event) => {
            const job = jobs.find((item) => item.id === event.target.value);
            update('relatedJobId', event.target.value);
            update('siteName', job?.siteName || '');
          }}
        >
          {jobs.map((job) => <option key={job.id} value={job.id}>{job.siteName}</option>)}
        </select>
      </label>
      <TextField label="Labour present" value={report.labourPresent} onChange={(value) => update('labourPresent', value)} />
      <TextAreaField label="Completed today" value={report.workCompletedToday} onChange={(value) => update('workCompletedToday', value)} />
      <TextAreaField label="Work pending" value={report.workPending} onChange={(value) => update('workPending', value)} />
      <TextAreaField label="Material used" value={report.materialUsed} onChange={(value) => update('materialUsed', value)} />
      <TextAreaField label="Material required" value={report.materialRequired} onChange={(value) => update('materialRequired', value)} />
      <TextAreaField label="Issues" value={report.issues} onChange={(value) => update('issues', value)} />
      <TextAreaField label="Next action" value={report.nextAction} onChange={(value) => update('nextAction', value)} />
      <div className="od-form-checks">
        <BooleanField label="Photos taken" checked={report.photosTaken} onChange={(value) => update('photosTaken', value)} />
        <BooleanField label="Update sent" checked={report.updateSent} onChange={(value) => update('updateSent', value)} />
      </div>
      <TextAreaField label="Notes" value={report.notes} onChange={(value) => update('notes', value)} />
      <button type="submit" className="od-submit">Save report</button>
    </form>
  );
}

function DisputeForm({ jobs, onSubmit }: { jobs: Job[]; onSubmit: (dispute: Omit<Dispute, 'id'>) => void }) {
  const [dispute, setDispute] = useState<Omit<Dispute, 'id'>>({
    disputeName: '',
    relatedJobId: jobs[0]?.id || '',
    personOrCompany: '',
    amountAtRisk: 0,
    assetAtRisk: '',
    documentsAvailable: false,
    whatsappProof: false,
    witnesses: '',
    currentStatus: '',
    settlementOption: '',
    nextLawfulAction: '',
    deadline: '',
    notes: '',
  });
  const update = <K extends keyof typeof dispute>(key: K, value: (typeof dispute)[K]) => setDispute((current) => ({ ...current, [key]: value }));

  return (
    <form className="od-form-grid" onSubmit={(event) => { event.preventDefault(); onSubmit(dispute); }}>
      <TextField label="Dispute name" value={dispute.disputeName} required onChange={(value) => update('disputeName', value)} />
      <label className="od-field">
        <span>Related job</span>
        <select value={dispute.relatedJobId} onChange={(event) => update('relatedJobId', event.target.value)}>
          {jobs.map((job) => <option key={job.id} value={job.id}>{job.siteName}</option>)}
        </select>
      </label>
      <TextField label="Person / company" value={dispute.personOrCompany} onChange={(value) => update('personOrCompany', value)} />
      <TextField label="Amount at risk" type="number" value={dispute.amountAtRisk} onChange={(value) => update('amountAtRisk', Number(value))} />
      <TextField label="Asset at risk" value={dispute.assetAtRisk} onChange={(value) => update('assetAtRisk', value)} />
      <TextField label="Witnesses" value={dispute.witnesses} onChange={(value) => update('witnesses', value)} />
      <TextField label="Deadline" type="date" value={dispute.deadline} onChange={(value) => update('deadline', value)} />
      <TextAreaField label="Current status" value={dispute.currentStatus} onChange={(value) => update('currentStatus', value)} />
      <TextAreaField label="Settlement option" value={dispute.settlementOption} onChange={(value) => update('settlementOption', value)} />
      <TextAreaField label="Next lawful action" value={dispute.nextLawfulAction} onChange={(value) => update('nextLawfulAction', value)} />
      <div className="od-form-checks">
        <BooleanField label="Documents available" checked={dispute.documentsAvailable} onChange={(value) => update('documentsAvailable', value)} />
        <BooleanField label="WhatsApp proof" checked={dispute.whatsappProof} onChange={(value) => update('whatsappProof', value)} />
      </div>
      <TextAreaField label="Notes" value={dispute.notes} onChange={(value) => update('notes', value)} />
      <button type="submit" className="od-submit">Save dispute</button>
    </form>
  );
}

function ActionPanel({
  action,
  onClose,
  jobs,
  handlers,
}: {
  action: ActionForm;
  onClose: () => void;
  jobs: Job[];
  handlers: {
    addLead: ReturnType<typeof useOperatorDeskStore>['addLead'];
    addJob: ReturnType<typeof useOperatorDeskStore>['addJob'];
    addCashEntry: ReturnType<typeof useOperatorDeskStore>['addCashEntry'];
    addLabour: ReturnType<typeof useOperatorDeskStore>['addLabour'];
    addMaterial: ReturnType<typeof useOperatorDeskStore>['addMaterial'];
    addSiteReport: ReturnType<typeof useOperatorDeskStore>['addSiteReport'];
    addDispute: ReturnType<typeof useOperatorDeskStore>['addDispute'];
  };
}) {
  if (!action) return null;

  const submitAndClose = <T,>(handler: (value: T) => void) => (value: T) => {
    handler(value);
    onClose();
  };

  return (
    <section className="od-action-panel" aria-label={`${actionLabel(action)} panel`}>
      <div className="od-panel-head">
        <div>
          <p className="od-eyebrow">Quick action</p>
          <h2>{actionLabel(action)}</h2>
        </div>
        <button type="button" onClick={onClose}>Close</button>
      </div>
      {action === 'lead' ? <LeadForm onSubmit={submitAndClose(handlers.addLead)} /> : null}
      {action === 'job' ? <JobForm onSubmit={submitAndClose(handlers.addJob)} /> : null}
      {action === 'cash' ? <CashEntryForm jobs={jobs} onSubmit={submitAndClose(handlers.addCashEntry)} /> : null}
      {action === 'labour' ? <LabourForm onSubmit={submitAndClose(handlers.addLabour)} /> : null}
      {action === 'material' ? <MaterialForm jobs={jobs} onSubmit={submitAndClose(handlers.addMaterial)} /> : null}
      {action === 'site-report' ? <SiteReportForm jobs={jobs} onSubmit={submitAndClose(handlers.addSiteReport)} /> : null}
      {action === 'dispute' ? <DisputeForm jobs={jobs} onSubmit={submitAndClose(handlers.addDispute)} /> : null}
    </section>
  );
}

export default function OperatorDesk() {
  const params = useParams();
  const routeScreen = (params.screen || 'dashboard') as ScreenSlug;
  const screen = validScreens.has(routeScreen) ? routeScreen : 'dashboard';
  const {
    state,
    reports,
    addLead,
    convertLeadToJob,
    addJob,
    updateJob,
    addCashEntry,
    addLabour,
    updateLabour,
    addMaterial,
    addSiteReport,
    addDispute,
    resetSeed,
    exportJson,
    importJson,
  } = useOperatorDeskStore();
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<WorkStatus | 'All'>('All');
  const [action, setAction] = useState<ActionForm>(null);

  useEffect(() => {
    document.body.classList.add('operator-desk-active');
    return () => document.body.classList.remove('operator-desk-active');
  }, []);

  if (params.screen && !validScreens.has(params.screen as ScreenSlug)) {
    return <Navigate to="/operator-desk/dashboard" replace />;
  }

  const meta = screenMeta[screen];
  const primaryAction = actionForScreen(screen);

  const filteredLeads = useMemo(
    () => state.leads.filter((lead) => (statusFilter === 'All' || lead.status === statusFilter) && [lead.contractorName, lead.siteLocation, lead.workType, lead.serviceType].some((value) => includes(value, query))),
    [state.leads, query, statusFilter]
  );

  const filteredJobs = useMemo(
    () => state.jobs.filter((job) => (statusFilter === 'All' || job.status === statusFilter) && [job.siteName, job.contractorName, job.serviceType, job.currentStage, job.nextAction].some((value) => includes(value, query))),
    [state.jobs, query, statusFilter]
  );

  const todaysActions = [
    ...state.jobs.filter((job) => job.paymentGateStatus !== 'Clear').map((job) => ({
      label: job.siteName,
      copy: job.nextAction || 'Payment follow-up required.',
      tone: 'danger' as const,
    })),
    ...state.jobs.filter((job) => !job.writtenConfirmation).map((job) => ({
      label: job.siteName,
      copy: 'Written confirmation missing. Do not expand scope verbally.',
      tone: 'warn' as const,
    })),
    ...state.jobs.filter((job) => !job.photosProof).slice(0, 4).map((job) => ({
      label: job.siteName,
      copy: 'Photo proof pending for operator review.',
      tone: 'warn' as const,
    })),
  ].slice(0, 8);

  const renderContent = () => {
    if (screen === 'dashboard') {
      return (
        <>
          <section className="od-hero-card">
            <div>
              <p className="od-eyebrow">You bring the order. AlterCraft manages the backend.</p>
              <h2>Founder control for contractor execution.</h2>
              <p>
                OperatorDesk keeps every active order tied to payment, labour, material, proof and next action.
                It is built for field reality, not decorative CRM reporting.
              </p>
            </div>
            <div className="od-hero-orbit" aria-hidden="true">
              <span>Money</span>
              <span>Work</span>
              <span>Proof</span>
              <span>Risk</span>
            </div>
          </section>
          <section className="od-kpi-grid">
            <DashboardCard label="Active Jobs" value={state.jobs.filter((job) => job.status === 'Active').length} icon={ClipboardList} />
            <DashboardCard label="Payment Pending" value={state.jobs.filter((job) => job.status === 'Payment Pending').length} tone="warn" icon={Banknote} />
            <DashboardCard label="Labour Deployed" value={state.labour.filter((item) => item.workStatus === 'Active').length} icon={Users} />
            <DashboardCard label="Blocked Sites" value={state.jobs.filter((job) => job.status === 'Blocked').length} tone="danger" icon={AlertTriangle} />
            <DashboardCard label="Disputed Jobs" value={state.disputes.length} tone="danger" icon={ShieldCheck} />
            <DashboardCard label="Cash Risk" value={reports.cashRisk} note="Unallocated or no proof" tone={reports.cashRisk ? 'warn' : 'good'} icon={Gauge} />
          </section>
          <section className="od-section-card">
            <div className="od-section-head">
              <div>
                <p className="od-eyebrow">Today</p>
                <h2>Actions that protect the business</h2>
              </div>
              <span>{todaysActions.length} open</span>
            </div>
            <div className="od-action-list">
              {todaysActions.map((item, index) => (
                <article key={`${item.label}-${index}`} className={`od-action-item ${item.tone}`}>
                  <strong>{item.label}</strong>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="od-list-grid">
            {state.jobs.slice(0, 3).map((job) => (
              <JobCard key={job.id} job={job} onMarkProof={(jobId) => updateJob(jobId, { photosProof: true })} />
            ))}
          </section>
        </>
      );
    }

    if (screen === 'leads') {
      return filteredLeads.length ? (
        <section className="od-list-grid">
          {filteredLeads.map((lead) => <LeadCard key={lead.id} lead={lead} onConvert={convertLeadToJob} />)}
        </section>
      ) : <EmptyState title="No matching leads" copy="Add a lead or clear the filters to see the full contractor pipeline." />;
    }

    if (screen === 'jobs') {
      return filteredJobs.length ? (
        <section className="od-list-grid">
          {filteredJobs.map((job) => <JobCard key={job.id} job={job} onMarkProof={(jobId) => updateJob(jobId, { photosProof: true })} />)}
        </section>
      ) : <EmptyState title="No matching jobs" copy="Add a job or use the dashboard to inspect active operational risk." />;
    }

    if (screen === 'cash') {
      return (
        <section className="od-list-grid">
          {reports.unallocatedCash ? (
            <div className="od-warning wide"><AlertTriangle size={16} /> {formatMoney(reports.unallocatedCash)} is not allocated to a bucket.</div>
          ) : null}
          {state.cashEntries.map((entry) => (
            <article className="od-card od-list-card" key={entry.id}>
              <div className="od-card-row">
                <div>
                  <p className="od-eyebrow">{entry.date} / {entry.mode}</p>
                  <h3>{entry.sourceOrPaidTo}</h3>
                  <small>{entry.bucket || 'No bucket selected'}</small>
                </div>
                <StatusBadge status={entry.type === 'Inflow' ? 'Active' : 'Waiting'} />
              </div>
              <div className="od-meta-grid">
                <span><b>{formatMoney(entry.amount)}</b>{entry.type}</span>
                <span><b>{entry.proof ? 'Yes' : 'No'}</b>Proof</span>
              </div>
              <p className="od-muted">{entry.notes}</p>
            </article>
          ))}
        </section>
      );
    }

    if (screen === 'labour') {
      return (
        <section className="od-list-grid">
          {state.labour.map((item) => (
            <LabourCard key={item.id} labour={item} onPresent={(labourId) => updateLabour(labourId, { attendanceStatus: 'Present', workStatus: 'Active' })} />
          ))}
        </section>
      );
    }

    if (screen === 'materials') {
      return (
        <section className="od-list-grid">
          {state.materials.map((item) => <MaterialCard key={item.id} material={item} />)}
        </section>
      );
    }

    if (screen === 'site-reports') {
      return (
        <section className="od-list-grid">
          {state.siteReports.map((report) => (
            <article className="od-card od-list-card" key={report.id}>
              <div className="od-card-row">
                <div>
                  <p className="od-eyebrow">{report.date}</p>
                  <h3>{report.siteName}</h3>
                  <small>{report.labourPresent || 'Labour not noted'}</small>
                </div>
                <StatusBadge status={report.updateSent ? 'Completed' : 'Waiting'} />
              </div>
              <p className="od-muted">{report.workCompletedToday}</p>
              <div className="od-proof-row">
                <span className={report.photosTaken ? 'is-ok' : 'is-missing'}>Photos</span>
                <span className={report.updateSent ? 'is-ok' : 'is-missing'}>Update sent</span>
              </div>
            </article>
          ))}
        </section>
      );
    }

    if (screen === 'disputes') {
      return (
        <section className="od-list-grid">
          {state.disputes.map((dispute) => <DisputeCard key={dispute.id} dispute={dispute} />)}
        </section>
      );
    }

    if (screen === 'reports') {
      return (
        <>
          <section className="od-kpi-grid report-grid">
            <DashboardCard label="Total active job value" value={formatMoney(reports.activeJobValue)} icon={ClipboardList} />
            <DashboardCard label="Total pending payment" value={formatMoney(reports.pendingPayment)} tone="warn" icon={Banknote} />
            <DashboardCard label="Total received advance" value={formatMoney(reports.receivedAdvance)} tone="good" icon={CheckCircle2} />
            <DashboardCard label="Labour cost this week" value={formatMoney(reports.labourCostThisWeek)} icon={HardHat} />
            <DashboardCard label="Material cost pending" value={formatMoney(reports.materialCostPending)} tone="warn" icon={PackageCheck} />
            <DashboardCard label="Blocked jobs" value={reports.blockedJobs} tone={reports.blockedJobs ? 'danger' : 'good'} icon={AlertTriangle} />
            <DashboardCard label="Without written confirmation" value={reports.jobsWithoutWrittenConfirmation} tone={reports.jobsWithoutWrittenConfirmation ? 'warn' : 'good'} icon={FileText} />
            <DashboardCard label="Without photos/proof" value={reports.jobsWithoutPhotos} tone={reports.jobsWithoutPhotos ? 'warn' : 'good'} icon={Upload} />
            <DashboardCard label="Disputed amount at risk" value={formatMoney(reports.disputedAmount)} tone="danger" icon={ShieldCheck} />
          </section>
          <section className="od-section-card">
            <div className="od-section-head">
              <div>
                <p className="od-eyebrow">Future automation</p>
                <h2>AI and backend hooks are reserved</h2>
              </div>
            </div>
            <div className="od-note-grid">
              <span>TODO: payment reminder automation</span>
              <span>TODO: PDF work order export</span>
              <span>TODO: WhatsApp site update automation</span>
              <span>TODO: Supabase sync</span>
            </div>
          </section>
        </>
      );
    }

    return (
      <section className="od-settings-grid">
        <ImportExportPanel exportJson={exportJson} importJson={importJson} resetSeed={resetSeed} />
        <article className="od-card">
          <p className="od-eyebrow">Company doctrine</p>
          <h3>Rules before work moves</h3>
          <ul className="od-rule-list">
            {doctrineRules.map((rule) => <li key={rule}>{rule}</li>)}
          </ul>
        </article>
        <article className="od-card">
          <p className="od-eyebrow">Next phase</p>
          <h3>Upgrade placeholders</h3>
          <ul className="od-rule-list future">
            {futureUpgradeNotes.map((note) => <li key={note}>{note}</li>)}
          </ul>
        </article>
      </section>
    );
  };

  return (
    <div className="operator-desk-page">
      <aside className="od-desktop-rail">
        <Link to="/operator-desk/dashboard" className="od-brand">
          <span>AC</span>
          <div>
            <strong>OperatorDesk</strong>
            <small>Powered by ACOS</small>
          </div>
        </Link>
        <nav aria-label="OperatorDesk screens">
          {screenNav.map(({ slug, label, icon: Icon }) => (
            <NavLink key={slug} to={`/operator-desk/${slug}`} className={screen === slug ? 'active' : undefined}>
              <Icon size={17} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="od-rail-note">
          <Sparkles size={16} />
          <p>This MVP stores data on this device. Use export JSON before clearing browser or APK data.</p>
        </div>
      </aside>

      <main className="od-main">
        <header className="od-topbar">
          <Link to="/" className="od-home-link">AlterCraft</Link>
          <div className="od-top-status">
            <span><CalendarClock size={14} /> {new Date().toLocaleDateString('en-IN')}</span>
            <span><ShieldCheck size={14} /> Local MVP</span>
          </div>
        </header>

        <section className="od-page-head">
          <div>
            <p className="od-eyebrow">{meta.kicker}</p>
            <h1>{meta.title}</h1>
            <p>{meta.copy}</p>
          </div>
          {primaryAction ? (
            <button className="od-primary-action" type="button" onClick={() => setAction(primaryAction)}>
              {actionLabel(primaryAction)} <ArrowRight size={16} />
            </button>
          ) : null}
        </section>

        <nav className="od-chip-nav" aria-label="OperatorDesk screen shortcuts">
          {screenNav.map(({ slug, shortLabel }) => (
            <NavLink key={slug} to={`/operator-desk/${slug}`} className={screen === slug ? 'active' : undefined}>
              {shortLabel}
            </NavLink>
          ))}
        </nav>

        {['leads', 'jobs'].includes(screen) ? (
          <section className="od-filter-bar">
            <label>
              <Search size={15} />
              <input value={query} placeholder={`Search ${screen}...`} onChange={(event) => setQuery(event.target.value)} />
            </label>
            <label>
              <Filter size={15} />
              <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value as WorkStatus | 'All')}>
                {['All', ...workStatuses].map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
            </label>
          </section>
        ) : null}

        <ActionPanel
          action={action}
          onClose={() => setAction(null)}
          jobs={state.jobs}
          handlers={{ addLead, addJob, addCashEntry, addLabour, addMaterial, addSiteReport, addDispute }}
        />

        {renderContent()}

        <footer className="od-app-footer">
          <strong>AlterCraft OperatorDesk</strong>
          <span>No site without payment gate. No scope without writing. No handover without proof.</span>
        </footer>
      </main>

      {primaryAction ? <QuickActionButton label={actionLabel(primaryAction)} onClick={() => setAction(primaryAction)} /> : null}
      <BottomNav active={screen} />
    </div>
  );
}
