import { canvaVisuals } from './visualAssets';

export const AI_PREVIEW_DISCLAIMER =
  'This first preview is only to help you imagine the space. Final sizes, materials, quotation and work details will be checked by the AlterCraft team before confirmation.';

export const PROJECT_TYPES = [
  'Modular Kitchen',
  'Office Interior',
  'Bedroom',
  'Living Room',
  'Wardrobe',
  'TV Unit',
  'Custom Furniture',
  'Door',
  'Commercial Space',
  'Other',
] as const;

export const PREFERRED_STYLES = [
  'Modern',
  'Luxury',
  'Minimal',
  'Premium Office',
  'Indian Practical',
  'Wood + White',
  'Navy + Gold',
  'Beige + Off-white',
  'Custom',
] as const;

export const SERVICE_CATEGORIES = [
  'Modular Kitchen',
  'Office Interior',
  'Wardrobe',
  'Bedroom Furniture',
  'Beds',
  'Flush Doors',
  'TV Units',
  'Custom Furniture',
  'Full Interior Execution',
] as const;

export const LEAD_STATUS_FLOW = [
  'New Request',
  'Photo Reviewed',
  'Imagination In Progress',
  'Imagination Ready',
  'Sent to Customer',
  'Customer Selected Concept',
  'Execution Review',
  'Quotation In Progress',
  'Quotation Sent',
  'Advance Pending',
  'Project Confirmed',
  'Production',
  'Installation',
  'Completed',
] as const;

export const AI_AUTOMATION_TODOS = [
  'TODO Model 1: convert user inputs into a professional design brief.',
  'TODO Measurement validation: flag missing or conflicting site constraints without inventing dimensions.',
  'TODO Model 2: generate four AI-assisted imagination concepts from approved brief and photos.',
  'TODO Output quality check: verify category, style, material direction and obvious site conflicts.',
  'TODO Customer concept delivery: publish approved concepts to the customer project page.',
];

export type ProjectType = (typeof PROJECT_TYPES)[number];
export type PreferredStyle = (typeof PREFERRED_STYLES)[number];
export type LeadStatus = (typeof LEAD_STATUS_FLOW)[number];

export type User = {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  createdAt: string;
};

export type Project = {
  id: string;
  requestId: string;
  userId: string;
  projectType: string;
  title: string;
  budgetRange: string;
  city: string;
  status: LeadStatus;
  createdAt: string;
};

export type Measurements = {
  projectId: string;
  length: string;
  width: string;
  height: string;
  unit: 'ft' | 'inch' | 'mm';
  doorLocation: string;
  windowLocation: string;
  flooring: string;
  ceiling: string;
  electricalPoints: string;
  plumbingPoints: string;
  notes: string;
  requiredWidth: string;
  requiredHeight: string;
  requiredDepth: string;
  materialPreference: string;
  storageRequirement: string;
  lockedStatus: 'Unlocked' | 'Locked';
};

export type UploadAsset = {
  id: string;
  projectId: string;
  fileUrl: string;
  fileType: string;
  label: string;
  fileName: string;
  uploadedAt: string;
};

export type ImaginationConcept = {
  id: string;
  projectId: string;
  conceptName: string;
  conceptType: string;
  imageUrl: string;
  description: string;
  materials: string;
  budgetLevel: string;
  executionComplexity: string;
  status: 'Draft' | 'Ready' | 'Selected';
  createdAt: string;
};

export type Lead = {
  id: string;
  projectId: string;
  selectedConceptId: string;
  customerName: string;
  customerPhone: string;
  leadStatus: LeadStatus;
  assignedTo: string;
  createdAt: string;
};

export type PlannerRequirements = {
  designIntent: string;
  preferredStyle: string;
  budgetRange: string;
  city: string;
  expectedTimeline: string;
  specialNotes: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
};

export type PlannerProjectRecord = {
  user: User;
  project: Project;
  measurements: Measurements;
  uploads: UploadAsset[];
  requirements: PlannerRequirements;
  concepts: ImaginationConcept[];
  lead: Lead;
  selectedConceptId: string;
  internalNotes: string;
};

export type PlannerDraft = {
  projectType: string;
  uploads: UploadAsset[];
  measurements: Measurements;
  requirements: PlannerRequirements;
};

export const emptyMeasurements = (projectId = 'draft'): Measurements => ({
  projectId,
  length: '',
  width: '',
  height: '',
  unit: 'ft',
  doorLocation: '',
  windowLocation: '',
  flooring: '',
  ceiling: '',
  electricalPoints: '',
  plumbingPoints: '',
  notes: '',
  requiredWidth: '',
  requiredHeight: '',
  requiredDepth: '',
  materialPreference: '',
  storageRequirement: '',
  lockedStatus: 'Unlocked',
});

export const emptyRequirements = (): PlannerRequirements => ({
  designIntent: '',
  preferredStyle: '',
  budgetRange: '',
  city: '',
  expectedTimeline: '',
  specialNotes: '',
  customerName: '',
  customerPhone: '',
  customerEmail: '',
});

export const emptyPlannerDraft = (): PlannerDraft => ({
  projectType: '',
  uploads: [],
  measurements: emptyMeasurements(),
  requirements: emptyRequirements(),
});

export const mockPlannerProjects: PlannerProjectRecord[] = [
  {
    user: {
      id: 'usr-demo-1',
      name: 'Demo Customer',
      phone: '+91 88175 03658',
      email: 'support@altercraft.in',
      city: 'Ghaziabad',
      createdAt: '2026-06-07T10:00:00.000Z',
    },
    project: {
      id: 'prj-demo-1',
      requestId: 'AC-IMG-0001',
      userId: 'usr-demo-1',
      projectType: 'Modular Kitchen',
      title: 'Design Preview for Modular Kitchen',
      budgetRange: 'Premium but practical',
      city: 'Ghaziabad',
      status: 'Imagination Ready',
      createdAt: '2026-06-07T10:00:00.000Z',
    },
    measurements: {
      ...emptyMeasurements('prj-demo-1'),
      length: '11',
      width: '8',
      height: '10',
      unit: 'ft',
      doorLocation: 'Entry from dining side',
      windowLocation: 'Window above sink wall',
      electricalPoints: 'Hob, chimney, microwave and refrigerator points marked',
      plumbingPoints: 'Sink point on window wall',
      notes: 'Keep refrigerator near entrance and add tall pantry if feasible.',
      lockedStatus: 'Locked',
    },
    uploads: [
      {
        id: 'upl-demo-1',
        projectId: 'prj-demo-1',
        fileUrl: '',
        fileType: 'image',
        label: 'Main site photo',
        fileName: 'demo-kitchen-site-photo.jpg',
        uploadedAt: '2026-06-07T10:03:00.000Z',
      },
    ],
    requirements: {
      designIntent: 'Create a warm modular kitchen with practical storage and a clean premium finish.',
      preferredStyle: 'Beige + Off-white',
      budgetRange: 'Premium but practical',
      city: 'Ghaziabad',
      expectedTimeline: '30-45 days',
      specialNotes: 'Use soft-close hardware and keep maintenance simple.',
      customerName: 'Demo Customer',
      customerPhone: '+91 88175 03658',
      customerEmail: 'support@altercraft.in',
    },
    concepts: [
      {
        id: 'concept-demo-1',
        projectId: 'prj-demo-1',
        conceptName: 'Warm Beige Parallel Kitchen',
        conceptType: 'Kitchen Layout',
        imageUrl: canvaVisuals.kitchenVisual,
        description: 'A practical two-wall preview with warm shutters, tall pantry direction and clear prep zones.',
        materials: 'BWP plywood direction, matte laminate, quartz-look counter, soft-close hardware',
        budgetLevel: 'Premium Practical',
        executionComplexity: 'Medium',
        status: 'Ready',
        createdAt: '2026-06-07T10:30:00.000Z',
      },
      {
        id: 'concept-demo-2',
        projectId: 'prj-demo-1',
        conceptName: 'Wood + White L-Shape Concept',
        conceptType: 'Kitchen Theme',
        imageUrl: canvaVisuals.aiJourney,
        description: 'A lighter design preview with white overheads and wood base cabinets.',
        materials: 'HDHMR or plywood direction, laminate shutters, profile handles, under-cabinet lighting',
        budgetLevel: 'Balanced',
        executionComplexity: 'Medium',
        status: 'Ready',
        createdAt: '2026-06-07T10:34:00.000Z',
      },
      {
        id: 'concept-demo-3',
        projectId: 'prj-demo-1',
        conceptName: 'Luxury Tall Storage Kitchen',
        conceptType: 'Premium Storage',
        imageUrl: canvaVisuals.wardrobeVisual,
        description: 'A storage-heavy direction with tall units, appliance tower and richer wood surfaces.',
        materials: 'Plywood direction, veneer-look laminate, tandem drawers, pantry fittings',
        budgetLevel: 'Higher',
        executionComplexity: 'High',
        status: 'Ready',
        createdAt: '2026-06-07T10:38:00.000Z',
      },
      {
        id: 'concept-demo-4',
        projectId: 'prj-demo-1',
        conceptName: 'Minimal Indian Practical Kitchen',
        conceptType: 'Daily Use',
        imageUrl: canvaVisuals.office,
        description: 'A clean, low-maintenance design preview focused on cooking flow and easy cleaning.',
        materials: 'Matte laminate, granite direction, simple handles, durable channels',
        budgetLevel: 'Value Premium',
        executionComplexity: 'Low-Medium',
        status: 'Ready',
        createdAt: '2026-06-07T10:41:00.000Z',
      },
    ],
    lead: {
      id: 'lead-demo-1',
      projectId: 'prj-demo-1',
      selectedConceptId: '',
      customerName: 'Demo Customer',
      customerPhone: '+91 88175 03658',
      leadStatus: 'Imagination Ready',
      assignedTo: 'AlterCraft Design Team',
      createdAt: '2026-06-07T10:00:00.000Z',
    },
    selectedConceptId: '',
    internalNotes: 'Demo project for the manual imagination preview workflow.',
  },
];
