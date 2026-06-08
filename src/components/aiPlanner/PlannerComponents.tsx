import React from 'react';
import { Link } from 'react-router';
import {
  ArrowRight,
  CheckCircle,
  CircleDashed,
  ImagePlus,
  LockKeyhole,
  MessageCircle,
} from 'lucide-react';
import type { ImaginationConcept, LeadStatus, Measurements, PlannerProjectRecord } from '../../data/aiPlanner';

type CTAButtonProps = {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'light';
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
};

export function CTAButton({
  to,
  href,
  children,
  variant = 'primary',
  type = 'button',
  disabled,
  onClick,
}: CTAButtonProps) {
  const className = `planner-cta planner-cta-${variant}`;

  if (to) {
    return (
      <Link className={className} to={to}>
        {children}
        <ArrowRight size={16} />
      </Link>
    );
  }

  if (href) {
    return (
      <a className={className} href={href}>
        {children}
        <ArrowRight size={16} />
      </a>
    );
  }

  return (
    <button className={className} type={type} disabled={disabled} onClick={onClick}>
      {children}
      <ArrowRight size={16} />
    </button>
  );
}

type SectionHeaderProps = {
  kicker?: string;
  title: string;
  copy?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({ kicker, title, copy, align = 'center' }: SectionHeaderProps) {
  return (
    <div className={`planner-section-head ${align === 'left' ? 'left' : ''}`}>
      {kicker ? <p className="planner-kicker">{kicker}</p> : null}
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ServiceCard({ title, description, image }: ServiceCardProps) {
  return (
    <article className="planner-service-card">
      <img src={image} alt={`${title} imagination preview direction`} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="planner-card-actions">
          <Link to="/ai-planner/start">Create Design Preview</Link>
          <Link to="/contact">Get Quote</Link>
        </div>
      </div>
    </article>
  );
}

type ProjectTypeCardProps = {
  title: string;
  active?: boolean;
  onClick?: () => void;
};

export function ProjectTypeCard({ title, active, onClick }: ProjectTypeCardProps) {
  return (
    <button
      type="button"
      className={`planner-type-card ${active ? 'active' : ''}`}
      onClick={onClick}
      aria-pressed={active}
    >
      <span>{active ? <CheckCircle size={18} /> : <CircleDashed size={18} />}</span>
      <strong>{title}</strong>
    </button>
  );
}

const displayValue = (value?: string) => (value && value.trim() ? value : 'Not provided');

type MeasurementSummaryProps = {
  projectType?: string;
  measurements: Measurements;
  budget?: string;
  style?: string;
  uploadCount?: number;
};

export function MeasurementSummary({
  projectType,
  measurements,
  budget,
  style,
  uploadCount = 0,
}: MeasurementSummaryProps) {
  const summaryRows = [
    ['Project type', displayValue(projectType)],
    ['Length', measurements.length ? `${measurements.length} ${measurements.unit}` : 'Not provided'],
    ['Width', measurements.width ? `${measurements.width} ${measurements.unit}` : 'Not provided'],
    ['Height', measurements.height ? `${measurements.height} ${measurements.unit}` : 'Not provided'],
    ['Door position', displayValue(measurements.doorLocation)],
    ['Window position', displayValue(measurements.windowLocation)],
    ['Electrical points', displayValue(measurements.electricalPoints)],
    ['Plumbing points', displayValue(measurements.plumbingPoints)],
    ['Required furniture width', measurements.requiredWidth ? `${measurements.requiredWidth} ${measurements.unit}` : 'Not provided'],
    ['Required furniture height', measurements.requiredHeight ? `${measurements.requiredHeight} ${measurements.unit}` : 'Not provided'],
    ['Required furniture depth', measurements.requiredDepth ? `${measurements.requiredDepth} ${measurements.unit}` : 'Not provided'],
    ['Material preference', displayValue(measurements.materialPreference)],
    ['Storage requirement', displayValue(measurements.storageRequirement)],
    ['Budget', displayValue(budget)],
    ['Style', displayValue(style)],
    ['Uploaded photos/files', uploadCount ? `${uploadCount} file(s) noted` : 'Not provided'],
  ];

  const missing = summaryRows.filter(([, value]) => value === 'Not provided').map(([label]) => label);

  return (
    <section className="planner-summary-card">
      <div className="planner-summary-head">
        <div>
          <p className="planner-kicker">Measurement Summary</p>
          <h3>Details to confirm</h3>
        </div>
        <span className="planner-lock-pill">
          <LockKeyhole size={15} />
          {measurements.lockedStatus}
        </span>
      </div>
      <div className="planner-summary-grid">
        {summaryRows.map(([label, value]) => (
          <div key={label} className={value === 'Not provided' ? 'missing' : ''}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="planner-missing-box">
        <strong>Missing details</strong>
        <p>{missing.length ? missing.join(', ') : 'No missing details in the current summary.'}</p>
      </div>
    </section>
  );
}

type ConceptCardProps = {
  concept: ImaginationConcept;
  selected?: boolean;
  onSelect?: () => void;
};

export function ConceptCard({ concept, selected, onSelect }: ConceptCardProps) {
  return (
    <article className={`planner-concept-card ${selected ? 'selected' : ''}`}>
      <img src={concept.imageUrl} alt={`${concept.conceptName} imagination preview`} />
      <div className="planner-concept-body">
        <span>{concept.conceptType}</span>
        <h3>{concept.conceptName}</h3>
        <p>{concept.description}</p>
        <dl>
          <div>
            <dt>Budget level</dt>
            <dd>{concept.budgetLevel}</dd>
          </div>
          <div>
            <dt>Materials idea</dt>
            <dd>{concept.materials}</dd>
          </div>
          <div>
            <dt>Build difficulty</dt>
            <dd>{concept.executionComplexity}</dd>
          </div>
        </dl>
        <div className="planner-card-actions">
          <button type="button" onClick={onSelect}>
            {selected ? 'Selected' : 'Select This Idea'}
          </button>
          <button type="button" onClick={onSelect}>
            Ask AlterCraft to Review
          </button>
        </div>
      </div>
    </article>
  );
}

type StatusBadgeProps = {
  status: LeadStatus | string;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className="planner-status-badge">{status}</span>;
}

type UploadFieldProps = {
  id: string;
  label: string;
  helper: string;
  multiple?: boolean;
  onFilesSelected?: (files: FileList | null) => void;
};

export function UploadField({ id, label, helper, multiple, onFilesSelected }: UploadFieldProps) {
  return (
    <label className="planner-upload-field" htmlFor={id}>
      <span>
        <ImagePlus size={22} />
      </span>
      <strong>{label}</strong>
      <small>{helper}</small>
      <input
        id={id}
        name={id}
        type="file"
        accept="image/*,.pdf"
        multiple={multiple}
        onChange={(event) => onFilesSelected?.(event.currentTarget.files)}
      />
      <em>For now, the selected file names are saved on this device.</em>
    </label>
  );
}

type AdminLeadTableProps = {
  projects: PlannerProjectRecord[];
};

export function AdminLeadTable({ projects }: AdminLeadTableProps) {
  return (
    <div className="planner-table-wrap">
      <table className="planner-table">
        <thead>
          <tr>
            <th>Request</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>City</th>
            <th>Project</th>
            <th>Budget</th>
            <th>Status</th>
            <th>Selected concept</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((record) => {
            const selectedConcept = record.concepts.find(
              (concept) => concept.id === record.selectedConceptId
            );
            return (
              <tr key={record.project.id}>
                <td>{record.project.requestId}</td>
                <td>{record.lead.customerName || 'Not provided'}</td>
                <td>{record.lead.customerPhone || 'Not provided'}</td>
                <td>{record.project.city || 'Not provided'}</td>
                <td>{record.project.projectType}</td>
                <td>{record.project.budgetRange || 'Not provided'}</td>
                <td><StatusBadge status={record.project.status} /></td>
                <td>{selectedConcept?.conceptName ?? 'Not selected'}</td>
                <td>
                  <Link to={`/admin/projects/${record.project.requestId}`}>Open</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function PreviewDisclaimer({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`planner-disclaimer ${compact ? 'compact' : ''}`}>
      <MessageCircle size={compact ? 15 : 18} />
      <p>
        This first preview is only to help you imagine the space. Final sizes, materials,
        quotation and work details will be checked by the AlterCraft team before confirmation.
      </p>
    </div>
  );
}
