import type { CashBucket, JobStage, ServiceType, WorkStatus } from './types';

export const serviceTypes: ServiceType[] = [
  'Material Desk',
  'Labour Desk',
  'Production Desk',
  'Site Control Desk',
  'Full Execution Desk',
];

export const jobStages: JobStage[] = [
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

export const workStatuses: WorkStatus[] = [
  'New',
  'Waiting',
  'Active',
  'Payment Pending',
  'Blocked',
  'Disputed',
  'Completed',
];

export const cashBuckets: CashBucket[] = [
  'Material',
  'Labour',
  'Transport',
  'Tools',
  'Rent',
  'EMI',
  'Personal Survival',
  'Business Reserve',
  'Profit',
  'Debt',
];

export const labourRoles = [
  'Carpenter',
  'Helper',
  'Painter',
  'Electrician',
  'Supervisor',
  'ACP Worker',
  'False Ceiling Worker',
  'Polish Worker',
  'Hardware Fitter',
  'Specialist',
];

export const doctrineRules = [
  'No verbal work.',
  'No undocumented asset.',
  'No site without payment gate.',
  'No labour without advance.',
  'No material without 100% material payment.',
  'No cash without bucket.',
  'No job without owner.',
  'No scope without writing.',
  'No handover without final payment/proof.',
  'Incoming cash is oxygen, not freedom.',
];

export const futureUpgradeNotes = [
  'Supabase backend',
  'Authentication and contractor login portal',
  'Vendor database',
  'Labour QR attendance',
  'WhatsApp update automation',
  'PDF work order and site report exports',
  'Photo/file upload',
  'Notion sync',
  'Payment reminders',
  'Role-based access',
];
