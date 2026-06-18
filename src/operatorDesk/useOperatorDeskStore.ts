import { useCallback, useEffect, useMemo, useState } from 'react';
import { seedOperatorDeskState } from './seed';
import type {
  CashEntry,
  Job,
  Labour,
  Lead,
  Material,
  OperatorDeskState,
  PaymentGateStatus,
  SiteReport,
  Dispute,
} from './types';

const STORAGE_KEY = 'altercraft-operator-desk-v1';

const cloneSeed = (): OperatorDeskState => JSON.parse(JSON.stringify(seedOperatorDeskState));

const stamp = (state: OperatorDeskState): OperatorDeskState => ({
  ...state,
  updatedAt: new Date().toISOString(),
});

export const createOperatorId = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export const formatMoney = (amount: number) =>
  new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'INR',
  }).format(Number.isFinite(amount) ? amount : 0);

export const deriveGateStatus = (job: Pick<Job, 'serviceType' | 'advanceReceived' | 'paymentGateStatus'>): PaymentGateStatus => {
  if (job.paymentGateStatus === 'Blocked') return 'Blocked';
  if (job.serviceType === 'Material Desk' && job.advanceReceived <= 0) return 'Awaiting 100% Material Payment';
  if (job.serviceType === 'Labour Desk' && job.advanceReceived <= 0) return 'Awaiting Labour Advance';
  if (job.serviceType === 'Production Desk' && job.advanceReceived <= 0) return 'Pending';
  return job.paymentGateStatus;
};

export const gateWarningFor = (job: Job) => {
  const status = deriveGateStatus(job);
  if (status === 'Clear') return '';
  if (status === 'Awaiting 100% Material Payment') return 'No material purchase before 100% material payment.';
  if (status === 'Awaiting Labour Advance') return 'No labour deployment before advance.';
  return 'No Work Starts Without Payment Gate.';
};

const readInitialState = (): OperatorDeskState => {
  if (typeof window === 'undefined') return cloneSeed();

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return cloneSeed();
    const parsed = JSON.parse(stored) as OperatorDeskState;
    if (!parsed.jobs || !parsed.leads || !parsed.cashEntries) return cloneSeed();
    return parsed;
  } catch {
    return cloneSeed();
  }
};

export function useOperatorDeskStore() {
  const [state, setState] = useState<OperatorDeskState>(readInitialState);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const setStampedState = useCallback((updater: (current: OperatorDeskState) => OperatorDeskState) => {
    setState((current) => stamp(updater(current)));
  }, []);

  const addLead = useCallback((lead: Omit<Lead, 'id' | 'createdAt'>) => {
    setStampedState((current) => ({
      ...current,
      leads: [
        {
          ...lead,
          id: createOperatorId('lead'),
          createdAt: new Date().toISOString(),
        },
        ...current.leads,
      ],
    }));
  }, [setStampedState]);

  const updateLead = useCallback((leadId: string, patch: Partial<Lead>) => {
    setStampedState((current) => ({
      ...current,
      leads: current.leads.map((lead) => (lead.id === leadId ? { ...lead, ...patch } : lead)),
    }));
  }, [setStampedState]);

  const convertLeadToJob = useCallback((leadId: string) => {
    setStampedState((current) => {
      const lead = current.leads.find((item) => item.id === leadId);
      if (!lead) return current;
      const job: Job = {
        id: createOperatorId('job'),
        siteName: lead.siteLocation || `${lead.contractorName} Site`,
        contractorName: lead.contractorName,
        serviceType: lead.serviceType,
        totalValue: lead.approxBudget,
        advanceReceived: 0,
        pendingAmount: lead.approxBudget,
        paymentGateStatus: lead.serviceType === 'Material Desk' ? 'Awaiting 100% Material Payment' : 'Pending',
        currentStage: 'Requirement Captured',
        workCompleted: 'Requirement captured from lead.',
        workPending: 'Written scope, payment gate and proof plan pending.',
        materialRequired: lead.materialPreference || 'Not provided',
        labourRequired: lead.labourRequired ? 'Required' : 'Not required',
        assignedOwner: 'Operator Desk',
        deadline: '',
        blocker: 'Payment gate not cleared yet.',
        writtenConfirmation: lead.drawingAvailable,
        photosProof: false,
        riskLevel: 'Medium',
        status: 'Payment Pending',
        nextAction: 'Prepare BOQ and collect advance/payment gate.',
        createdAt: new Date().toISOString(),
      };

      return {
        ...current,
        leads: current.leads.map((item) =>
          item.id === leadId ? { ...item, status: 'Completed', notes: `${item.notes}\nConverted to ${job.id}`.trim() } : item
        ),
        jobs: [job, ...current.jobs],
      };
    });
  }, [setStampedState]);

  const addJob = useCallback((job: Omit<Job, 'id' | 'createdAt' | 'pendingAmount'>) => {
    setStampedState((current) => {
      const nextJob: Job = {
        ...job,
        id: createOperatorId('job'),
        pendingAmount: Math.max(job.totalValue - job.advanceReceived, 0),
        createdAt: new Date().toISOString(),
      };
      return { ...current, jobs: [nextJob, ...current.jobs] };
    });
  }, [setStampedState]);

  const updateJob = useCallback((jobId: string, patch: Partial<Job>) => {
    setStampedState((current) => ({
      ...current,
      jobs: current.jobs.map((job) => {
        if (job.id !== jobId) return job;
        const merged = { ...job, ...patch };
        return {
          ...merged,
          pendingAmount: Math.max(merged.totalValue - merged.advanceReceived, 0),
          paymentGateStatus: deriveGateStatus(merged),
        };
      }),
    }));
  }, [setStampedState]);

  const addCashEntry = useCallback((entry: Omit<CashEntry, 'id'>) => {
    setStampedState((current) => ({
      ...current,
      cashEntries: [{ ...entry, id: createOperatorId('cash') }, ...current.cashEntries],
    }));
  }, [setStampedState]);

  const addLabour = useCallback((labour: Omit<Labour, 'id'>) => {
    setStampedState((current) => ({
      ...current,
      labour: [{ ...labour, id: createOperatorId('labour') }, ...current.labour],
    }));
  }, [setStampedState]);

  const updateLabour = useCallback((labourId: string, patch: Partial<Labour>) => {
    setStampedState((current) => ({
      ...current,
      labour: current.labour.map((labour) => (labour.id === labourId ? { ...labour, ...patch } : labour)),
    }));
  }, [setStampedState]);

  const addMaterial = useCallback((material: Omit<Material, 'id'>) => {
    setStampedState((current) => ({
      ...current,
      materials: [{ ...material, id: createOperatorId('mat') }, ...current.materials],
    }));
  }, [setStampedState]);

  const addSiteReport = useCallback((report: Omit<SiteReport, 'id'>) => {
    setStampedState((current) => ({
      ...current,
      siteReports: [{ ...report, id: createOperatorId('report') }, ...current.siteReports],
    }));
  }, [setStampedState]);

  const addDispute = useCallback((dispute: Omit<Dispute, 'id'>) => {
    setStampedState((current) => ({
      ...current,
      disputes: [{ ...dispute, id: createOperatorId('dispute') }, ...current.disputes],
    }));
  }, [setStampedState]);

  const replaceState = useCallback((nextState: OperatorDeskState) => {
    setState(stamp(nextState));
  }, []);

  const resetSeed = useCallback(() => {
    setState(stamp(cloneSeed()));
  }, []);

  const exportJson = useCallback(() => JSON.stringify(state, null, 2), [state]);

  const importJson = useCallback((json: string) => {
    const parsed = JSON.parse(json) as OperatorDeskState;
    if (!parsed.jobs || !parsed.leads || !parsed.cashEntries || !parsed.materials) {
      throw new Error('Invalid OperatorDesk JSON backup.');
    }
    setState(stamp(parsed));
  }, []);

  const reports = useMemo(() => {
    const activeJobs = state.jobs.filter((job) => job.status !== 'Completed');
    const blockedJobs = state.jobs.filter((job) => job.status === 'Blocked' || job.status === 'Payment Pending');
    const disputedAmount = state.disputes.reduce((sum, dispute) => sum + dispute.amountAtRisk, 0);
    const materialCostPending = state.materials
      .filter((material) => !material.clientPaid || material.deliveryStatus !== 'Delivered')
      .reduce((sum, material) => sum + material.totalCost, 0);
    const labourCostThisWeek = state.labour.reduce((sum, item) => sum + item.dailyRate * 6, 0);

    return {
      activeJobValue: activeJobs.reduce((sum, job) => sum + job.totalValue, 0),
      pendingPayment: state.jobs.reduce((sum, job) => sum + job.pendingAmount, 0),
      receivedAdvance: state.jobs.reduce((sum, job) => sum + job.advanceReceived, 0),
      labourCostThisWeek,
      materialCostPending,
      blockedJobs: blockedJobs.length,
      jobsWithoutWrittenConfirmation: state.jobs.filter((job) => !job.writtenConfirmation).length,
      jobsWithoutPhotos: state.jobs.filter((job) => !job.photosProof).length,
      disputedAmount,
      unallocatedCash: state.cashEntries
        .filter((entry) => !entry.bucket)
        .reduce((sum, entry) => sum + entry.amount, 0),
      cashRisk: state.cashEntries.filter((entry) => !entry.bucket || !entry.proof).length,
    };
  }, [state]);

  return {
    state,
    reports,
    addLead,
    updateLead,
    convertLeadToJob,
    addJob,
    updateJob,
    addCashEntry,
    addLabour,
    updateLabour,
    addMaterial,
    addSiteReport,
    addDispute,
    replaceState,
    resetSeed,
    exportJson,
    importJson,
  };
}
