import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, CheckCircle, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';
import { ElegantLayout } from '../components/elegant/ElegantLayout';
import { PageHero } from '../components/elegant/PageHero';
import { SEOHead } from '../components/seo/SEOHead';
import { siteDetails } from '../data/siteDetails';
import { canvaVisuals } from '../data/visualAssets';
import { createWhatsappLink } from '../utils/contact';

type TextCard = {
  title: string;
  description: string;
};

type ProofCard = {
  title: string;
  scope: string;
  need: string;
  result: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type LocalPageData = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  priceTag: string;
  serviceName: string;
  serviceType: string;
  city: string;
  ctaMessage: string;
  introTitle: string;
  introCopy: string[];
  planningTitle: string;
  planningCopy: string;
  cards: TextCard[];
  process: TextCard[];
  proof: ProofCard[];
  faqs: FaqItem[];
  related: Array<{ to: string; label: string }>;
};

const baseAreas = [
  'Ghaziabad',
  'Chipiyana Buzurg',
  'Indirapuram',
  'Vaishali',
  'Vasundhara',
  'Noida',
  'Greater Noida',
  'Greater Noida West',
  'Crossings Republik',
  'Delhi NCR nearby areas',
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AlterCraft',
  legalName: siteDetails.legalName,
  url: 'https://www.altercraft.in/',
  telephone: '+918817503658',
  email: siteDetails.email,
  image: `https://www.altercraft.in${canvaVisuals.aiJourney}`,
  taxID: `GSTIN ${siteDetails.gstin}`,
  identifier: siteDetails.udyamRegistration,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${siteDetails.addressLine}, ${siteDetails.landmarkLine}, ${siteDetails.locality}`,
    addressLocality: 'Ghaziabad',
    addressRegion: 'Uttar Pradesh',
    postalCode: siteDetails.postalCode,
    addressCountry: 'IN',
  },
  areaServed: siteDetails.serviceAreas,
  openingHours: 'Mo-Sa 10:00-19:00',
  priceRange: 'Measured quote',
};

const schemaForPage = (page: LocalPageData) => {
  const canonical = `https://www.altercraft.in/${page.slug}/`;

  return [
    localBusinessSchema,
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: page.serviceName,
      serviceType: page.serviceType,
      url: canonical,
      provider: {
        '@type': 'LocalBusiness',
        name: 'AlterCraft',
        telephone: '+918817503658',
      },
      areaServed: baseAreas,
      description: page.metaDescription,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: page.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];
};

const commonProcess = [
  {
    title: 'Share Photos and Sizes',
    description:
      'Send clear site photos, rough dimensions, location and the main problem you want to solve.',
  },
  {
    title: 'Human Review',
    description:
      'Our team checks the space, practical constraints, material direction and likely execution scope.',
  },
  {
    title: 'Design Direction',
    description:
      'You receive a practical direction, and where useful, an AI-assisted imagination preview for discussion.',
  },
  {
    title: 'Measured Quote',
    description:
      'Final pricing is confirmed after measurement, material, finish, hardware and installation scope are clear.',
  },
];

const pages: Record<string, LocalPageData> = {
  modularKitchenGhaziabad: {
    slug: 'modular-kitchen-ghaziabad',
    metaTitle: 'Modular Kitchen in Ghaziabad | Custom Kitchen by AlterCraft',
    metaDescription:
      'AlterCraft designs, manufactures and installs custom modular kitchens in Ghaziabad with measured planning, practical storage, premium finishes and installation support.',
    breadcrumb: 'Local Service / Modular Kitchen Ghaziabad',
    title: 'Modular Kitchen in Ghaziabad',
    subtitle:
      'Plan a measured modular kitchen for your Ghaziabad home with practical storage, moisture-aware materials, elegant finishes and clear execution support from AlterCraft.',
    image: canvaVisuals.kitchenVisual,
    imageAlt: 'AlterCraft modular kitchen in Ghaziabad',
    priceTag: 'Measured kitchen quote after photos, dimensions and site review',
    serviceName: 'Modular Kitchen Design and Installation in Ghaziabad',
    serviceType: 'Modular Kitchen',
    city: 'Ghaziabad',
    ctaMessage: 'Hi AlterCraft, I want a modular kitchen in Ghaziabad. I can share photos and dimensions.',
    introTitle: 'A kitchen should fit the room, not just the catalogue.',
    introCopy: [
      'A good Ghaziabad kitchen needs more than shutters and cabinets. It needs the right layout for cooking flow, sink usage, appliance clearance, tall storage and daily cleaning.',
      'AlterCraft plans modular kitchens around real wall sizes, sink points, electrical points, budget range and the way your family uses the kitchen every day.',
    ],
    planningTitle: 'What we plan before quoting',
    planningCopy:
      'The first estimate becomes more useful when the room size, layout and material expectations are clear.',
    cards: [
      { title: 'Layout Planning', description: 'L-shape, parallel, straight, U-shape and island directions based on actual room size.' },
      { title: 'Storage Zones', description: 'Base cabinets, wall units, tall units, drawers, bottle pull-outs and daily-use shelves.' },
      { title: 'Material Direction', description: 'Moisture-aware plywood options, laminates, acrylic direction and hardware planning.' },
      { title: 'Installation Support', description: 'Site coordination, fitting, finishing checks and warranty support across eligible work.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Apartment Kitchen in Ghaziabad', scope: 'Parallel kitchen planning', need: 'More storage and easier cleaning near the sink wall', result: 'Measured cabinet direction with practical shutter and hardware planning' },
      { title: 'Family Kitchen near Chipiyana', scope: 'L-shape kitchen', need: 'Compact cooking flow with appliance space', result: 'Storage-led layout with countertop and electrical-point review' },
      { title: 'New Flat Kitchen', scope: 'Straight kitchen with tall unit', need: 'Budget-aware finish and quick handover planning', result: 'Quote structure prepared around cabinets, finish and installation scope' },
    ],
    faqs: [
      { question: 'Do you make modular kitchens in Ghaziabad?', answer: 'Yes. AlterCraft designs, manufactures and installs modular kitchens in Ghaziabad and nearby Delhi NCR areas.' },
      { question: 'Can I get a kitchen quote from photos?', answer: 'Photos and rough dimensions help us prepare an initial direction. Final pricing depends on measurement, material, finish, hardware and site scope.' },
      { question: 'Do you support AI design previews for kitchens?', answer: 'Yes, where useful we can prepare an AI-assisted imagination preview. Final feasibility and quotation are checked by the AlterCraft team.' },
    ],
    related: [
      { to: '/modular-kitchen-near-me', label: 'Modular Kitchen Near Me' },
      { to: '/custom-furniture-ghaziabad', label: 'Custom Furniture Ghaziabad' },
      { to: '/ai-planner/start', label: 'Start Design Preview' },
    ],
  },
  customFurnitureGhaziabad: {
    slug: 'custom-furniture-ghaziabad',
    metaTitle: 'Custom Furniture Maker in Ghaziabad | AlterCraft',
    metaDescription:
      'AlterCraft is a custom furniture maker in Ghaziabad for wardrobes, beds, shoe racks, TV units, mandirs, study tables and office furniture with measured execution.',
    breadcrumb: 'Local Service / Custom Furniture Ghaziabad',
    title: 'Custom Furniture Maker in Ghaziabad',
    subtitle:
      'Get custom furniture made for your exact room size, storage need and budget. AlterCraft builds wardrobes, beds, shoe racks, TV units, mandirs, counters and office furniture in Ghaziabad.',
    image: canvaVisuals.wardrobeVisual,
    imageAlt: 'Custom furniture maker in Ghaziabad by AlterCraft',
    priceTag: 'Custom furniture quote after size, material and finish selection',
    serviceName: 'Custom Furniture Maker in Ghaziabad',
    serviceType: 'Custom Furniture',
    city: 'Ghaziabad',
    ctaMessage: 'Hi AlterCraft, I need custom furniture in Ghaziabad. I can share room photos and sizes.',
    introTitle: 'Furniture should solve the room, not just fill it.',
    introCopy: [
      'The strongest search signal right now is custom furniture maker near me. That is a high-intent customer looking for someone who can measure, build and install.',
      'AlterCraft handles custom furniture for homes and offices with practical material guidance, clear dimensions, finish selection and installation support.',
    ],
    planningTitle: 'Custom furniture we can plan',
    planningCopy:
      'Each item is measured around wall size, usable depth, shutter clearance, hardware load and daily use.',
    cards: [
      { title: 'Wardrobes and Storage', description: 'Sliding, swing, loft, saree storage, luggage zones and internal organization.' },
      { title: 'Beds and Bedroom Units', description: 'Designer beds, storage beds, headboards, side tables and room-matched finishes.' },
      { title: 'Entrance Furniture', description: 'Shoe racks, key counters, compact seating, mandirs and utility storage.' },
      { title: 'Office Furniture', description: 'Workstations, reception counters, cabins, storage walls and meeting-room units.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Bedroom Storage in Ghaziabad', scope: 'Wardrobe and loft planning', need: 'More saree, luggage and daily-wear storage', result: 'Custom internal layout with practical shelves and hanging zones' },
      { title: 'Entrance Furniture', scope: 'Shoe rack and key counter', need: 'Cleaner entrance with ventilation', result: 'Compact storage direction with shutter and cleaning clearance' },
      { title: 'Office Storage Unit', scope: 'Document and display storage', need: 'Organized office wall without clutter', result: 'Measured cabinetry plan with practical finish direction' },
    ],
    faqs: [
      { question: 'Do you make furniture in custom sizes?', answer: 'Yes. AlterCraft makes furniture based on site measurements, available wall size, depth, height and usage.' },
      { question: 'What custom furniture can you make?', answer: 'We work on wardrobes, beds, shoe racks, TV units, mandirs, study tables, office furniture, storage units and special furniture requirements.' },
      { question: 'Do you provide warranty support?', answer: 'Warranty support is available across eligible products, hardware, workmanship and installation based on category and specification.' },
    ],
    related: [
      { to: '/custom-furniture-maker-near-me', label: 'Custom Furniture Maker Near Me' },
      { to: '/wardrobe-design-ghaziabad', label: 'Wardrobe Design Ghaziabad' },
      { to: '/shoe-rack-design', label: 'Shoe Rack Design' },
    ],
  },
  customFurnitureNoida: {
    slug: 'custom-furniture-noida',
    metaTitle: 'Custom Furniture Maker in Noida | AlterCraft',
    metaDescription:
      'AlterCraft makes custom furniture for Noida homes and offices, including wardrobes, beds, storage units, shoe racks, TV units, workstations and office furniture.',
    breadcrumb: 'Local Service / Custom Furniture Noida',
    title: 'Custom Furniture Maker in Noida',
    subtitle:
      'Plan custom wardrobes, beds, storage furniture, shoe racks, TV units and office furniture for Noida homes and workspaces with AlterCraft.',
    image: canvaVisuals.wardrobeVisual,
    imageAlt: 'Custom furniture maker in Noida by AlterCraft',
    priceTag: 'Noida furniture quotes based on measurement and material scope',
    serviceName: 'Custom Furniture Maker in Noida',
    serviceType: 'Custom Furniture',
    city: 'Noida',
    ctaMessage: 'Hi AlterCraft, I need custom furniture in Noida. I can share photos and sizes.',
    introTitle: 'Custom furniture for apartments, offices and compact spaces.',
    introCopy: [
      'Noida homes and offices often need furniture that uses every inch without making the room feel heavy.',
      'AlterCraft plans custom furniture with site photos, exact dimensions, finish preference and practical storage requirements before quoting.',
    ],
    planningTitle: 'Furniture planned for real use',
    planningCopy:
      'We look at walking clearance, doors, windows, switchboards, AC points, skirting and existing flooring before final dimensions.',
    cards: [
      { title: 'Apartment Storage', description: 'Wardrobes, lofts, utility cabinets and storage beds for compact rooms.' },
      { title: 'Living Room Units', description: 'TV units, wall panels, pooja units, display storage and cable-friendly planning.' },
      { title: 'Work From Home', description: 'Study tables, wall desks, storage shelves and cable-managed work corners.' },
      { title: 'Office Furniture', description: 'Workstations, reception units, cabins and document storage for Noida offices.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Noida Apartment Wardrobe', scope: 'Sliding wardrobe direction', need: 'Storage without blocking bed clearance', result: 'Measured wardrobe plan with internal zones and finish options' },
      { title: 'Work Desk in Noida', scope: 'Wall-mounted study table', need: 'Compact laptop desk with shelves', result: 'Clean desk direction with cable and storage planning' },
      { title: 'Office Furniture in Noida', scope: 'Team workstation planning', need: 'Practical seating and storage for daily office use', result: 'Execution-ready measurement checklist for quote preparation' },
    ],
    faqs: [
      { question: 'Do you make custom furniture in Noida?', answer: 'Yes. AlterCraft takes custom furniture enquiries for Noida and nearby Delhi NCR areas.' },
      { question: 'Can furniture be matched with existing room finishes?', answer: 'Yes. Share photos of your room and existing furniture so the finish direction can be matched or coordinated.' },
      { question: 'Is site measurement required?', answer: 'Final production should always follow confirmed measurements. Photos and rough sizes are useful for the first discussion.' },
    ],
    related: [
      { to: '/custom-furniture-ghaziabad', label: 'Custom Furniture Ghaziabad' },
      { to: '/custom-furniture-greater-noida', label: 'Custom Furniture Greater Noida' },
      { to: '/ai-planner/start', label: 'Start Design Preview' },
    ],
  },
  customFurnitureGreaterNoida: {
    slug: 'custom-furniture-greater-noida',
    metaTitle: 'Custom Furniture Maker in Greater Noida | AlterCraft',
    metaDescription:
      'AlterCraft plans and makes custom furniture in Greater Noida and Greater Noida West for wardrobes, beds, kitchens, storage units, TV units and office interiors.',
    breadcrumb: 'Local Service / Custom Furniture Greater Noida',
    title: 'Custom Furniture Maker in Greater Noida',
    subtitle:
      'Build practical furniture for new flats, villas and offices in Greater Noida and Greater Noida West with measured planning, finish guidance and installation support.',
    image: canvaVisuals.aiJourney,
    imageAlt: 'Custom furniture in Greater Noida by AlterCraft',
    priceTag: 'Furniture quote prepared after room size and scope review',
    serviceName: 'Custom Furniture Maker in Greater Noida',
    serviceType: 'Custom Furniture',
    city: 'Greater Noida',
    ctaMessage: 'Hi AlterCraft, I need custom furniture in Greater Noida. I can share photos and measurements.',
    introTitle: 'Useful furniture for new homes and growing offices.',
    introCopy: [
      'Greater Noida and Greater Noida West projects often begin with new possession, blank rooms and a need to plan many furniture items together.',
      'AlterCraft helps organize wardrobe, kitchen, bed, study table, TV unit and storage decisions into a clear execution direction.',
    ],
    planningTitle: 'Plan room-by-room before fabrication',
    planningCopy:
      'A full furniture plan should coordinate dimensions, finish palette, storage needs and installation sequence.',
    cards: [
      { title: 'New Flat Furniture', description: 'Wardrobes, modular kitchen, bed, shoe rack, mandir and TV unit planned together.' },
      { title: 'Storage First', description: 'Daily storage, lofts, luggage, cleaning supplies and utility cabinets.' },
      { title: 'Finish Coordination', description: 'Wood, white, beige, laminate and premium accent finishes matched room-to-room.' },
      { title: 'Execution Planning', description: 'Measurement, quote, production and installation sequencing before site work starts.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Greater Noida West Flat', scope: 'Wardrobe, bed and TV unit planning', need: 'Complete furniture direction before moving in', result: 'Room-wise checklist with finish and measurement planning' },
      { title: 'Villa Storage Unit', scope: 'Custom storage and utility cabinet', need: 'Strong storage for seasonal items', result: 'Measured storage plan with practical board and hardware direction' },
      { title: 'Commercial Setup', scope: 'Office furniture planning', need: 'Quick setup with clean storage and workstations', result: 'Execution direction for quote and installation sequence' },
    ],
    faqs: [
      { question: 'Do you serve Greater Noida West?', answer: 'Yes. AlterCraft serves Greater Noida, Greater Noida West and nearby Delhi NCR locations subject to schedule and project scope.' },
      { question: 'Can you plan multiple rooms together?', answer: 'Yes. A room-by-room plan is useful for new flats because finish, storage and installation can be coordinated.' },
      { question: 'Can I start with photos before site visit?', answer: 'Yes. Share photos, room sizes and requirements first. Final work depends on confirmed measurements.' },
    ],
    related: [
      { to: '/custom-furniture-noida', label: 'Custom Furniture Noida' },
      { to: '/modular-kitchen-ghaziabad', label: 'Modular Kitchen Ghaziabad' },
      { to: '/contact', label: 'Get Quote' },
    ],
  },
  customFurnitureMakerNearMe: {
    slug: 'custom-furniture-maker-near-me',
    metaTitle: 'Custom Furniture Maker Near Me | AlterCraft Ghaziabad NCR',
    metaDescription:
      'Looking for a custom furniture maker near me? AlterCraft makes wardrobes, beds, shoe racks, TV units, office furniture and storage furniture across Ghaziabad, Noida and NCR.',
    breadcrumb: 'High Intent / Custom Furniture Maker Near Me',
    title: 'Custom Furniture Maker Near Me',
    subtitle:
      'If you are searching for a custom furniture maker near you, AlterCraft can help with measured wardrobes, beds, shoe racks, TV units, mandirs, office furniture and storage units across Ghaziabad, Noida and Delhi NCR.',
    image: canvaVisuals.wardrobeVisual,
    imageAlt: 'Custom furniture maker near me AlterCraft',
    priceTag: 'High-intent custom furniture enquiries handled on WhatsApp',
    serviceName: 'Custom Furniture Maker Near Me',
    serviceType: 'Custom Furniture',
    city: 'Delhi NCR',
    ctaMessage: 'Hi AlterCraft, I searched custom furniture maker near me. I want to discuss a furniture requirement.',
    introTitle: 'A near-me search usually means the project is real.',
    introCopy: [
      'People searching for a custom furniture maker near me usually want someone who can understand dimensions, visit if needed, quote clearly and execute properly.',
      'AlterCraft keeps the journey simple: send photos and sizes, discuss requirements, lock measurements, choose materials, confirm quote and move to production.',
    ],
    planningTitle: 'Start with the exact furniture problem',
    planningCopy:
      'The best custom furniture quote begins with the room, not with a fixed catalogue item.',
    cards: [
      { title: 'Room Fit', description: 'Furniture dimensions are planned around wall size, depth, height and movement clearance.' },
      { title: 'Storage Need', description: 'Daily-use items, seasonal items, files, shoes, clothes and appliances are planned separately.' },
      { title: 'Material and Finish', description: 'Board, laminate, hardware and edge detail are selected according to use and budget.' },
      { title: 'Human Execution', description: 'AI-assisted previews can help imagination, but final execution is verified by the AlterCraft team.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Near-Me Wardrobe Enquiry', scope: 'Bedroom wardrobe', need: 'More organized clothes and luggage storage', result: 'Internal layout direction with measured quote checklist' },
      { title: 'Near-Me Shoe Rack Enquiry', scope: 'Entrance shoe rack', need: 'Daily footwear storage with ventilation', result: 'Compact custom unit direction for entrance clearance' },
      { title: 'Near-Me Office Furniture Enquiry', scope: 'Desk and storage setup', need: 'Practical workstation and document storage', result: 'Execution direction based on room photos and measurements' },
    ],
    faqs: [
      { question: 'How do I start a custom furniture enquiry?', answer: 'Send photos, measurements, location, budget range and reference image if available. AlterCraft will guide the next step.' },
      { question: 'Do you make one-off custom furniture?', answer: 'Yes. AlterCraft can work on single furniture items and full room furniture depending on scope and schedule.' },
      { question: 'Is the first AI preview a final design?', answer: 'No. It is only an AI-assisted imagination preview. Final dimensions, feasibility, materials and quotation are verified by the human team.' },
    ],
    related: [
      { to: '/custom-furniture-ghaziabad', label: 'Custom Furniture Ghaziabad' },
      { to: '/shoe-rack-design', label: 'Shoe Rack Design' },
      { to: '/ai-planner/start', label: 'Create Imagination Preview' },
    ],
  },
  officeInteriorGhaziabad: {
    slug: 'office-interior-ghaziabad',
    metaTitle: 'Office Interior in Ghaziabad | AlterCraft Commercial Interiors',
    metaDescription:
      'AlterCraft plans office interiors in Ghaziabad including workstations, reception counters, cabins, storage, meeting rooms and commercial furniture execution.',
    breadcrumb: 'Local Service / Office Interior Ghaziabad',
    title: 'Office Interior in Ghaziabad',
    subtitle:
      'Plan a cleaner, more practical workplace with AlterCraft office interiors, workstations, reception units, cabins, storage walls and commercial furniture in Ghaziabad.',
    image: canvaVisuals.office,
    imageAlt: 'Office interior in Ghaziabad by AlterCraft',
    priceTag: 'Office quote based on layout, furniture, storage and site scope',
    serviceName: 'Office Interior and Commercial Furniture in Ghaziabad',
    serviceType: 'Office Interior',
    city: 'Ghaziabad',
    ctaMessage: 'Hi AlterCraft, I need office interior work in Ghaziabad. I can share office photos and size.',
    introTitle: 'Office interiors should help people work better.',
    introCopy: [
      'A good office interior is not just decor. It needs proper workstations, cable planning, storage, visitor movement, lighting direction and durable furniture.',
      'AlterCraft plans commercial interiors with practical furniture execution, measured quote structure and a clear path from requirement to installation.',
    ],
    planningTitle: 'Commercial interior scope',
    planningCopy:
      'Office spaces need coordination between furniture, storage, circulation, branding and future team growth.',
    cards: [
      { title: 'Workstations', description: 'Team seating, cable access, privacy panels and storage-friendly desk planning.' },
      { title: 'Reception and Waiting', description: 'Reception counters, waiting seating direction, display walls and brand-facing furniture.' },
      { title: 'Cabins and Meeting Rooms', description: 'Executive desks, storage, credenzas, wall panels and meeting tables.' },
      { title: 'Commercial Storage', description: 'File storage, pantry units, utility cabinets and back-office organization.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Ghaziabad Office Waiting Area', scope: 'Reception and waiting furniture', need: 'Cleaner client-facing zone', result: 'Premium furniture direction with practical circulation' },
      { title: 'Small Office Setup', scope: 'Workstations and storage', need: 'More seats without clutter', result: 'Measured workstation direction with cable and document storage planning' },
      { title: 'Cabin Interior', scope: 'Desk, wall storage and backdrop', need: 'Professional cabin look with daily usability', result: 'Furniture-led interior direction for quotation and execution' },
    ],
    faqs: [
      { question: 'Do you do office interiors in Ghaziabad?', answer: 'Yes. AlterCraft handles office furniture and commercial interior execution in Ghaziabad and nearby areas.' },
      { question: 'Can you work from an existing office photo?', answer: 'Yes. Photos, rough layout and team count help us understand the first direction before site measurement.' },
      { question: 'Do you provide furniture only or full office interior?', answer: 'AlterCraft can help with custom office furniture and broader commercial interior execution depending on project scope.' },
    ],
    related: [
      { to: '/office-commercial', label: 'Office & Commercial Interiors' },
      { to: '/custom-furniture-ghaziabad', label: 'Custom Office Furniture' },
      { to: '/ai-planner/start', label: 'Start Office Preview' },
    ],
  },
  wardrobeDesignGhaziabad: {
    slug: 'wardrobe-design-ghaziabad',
    metaTitle: 'Wardrobe Design in Ghaziabad | Custom Wardrobes by AlterCraft',
    metaDescription:
      'AlterCraft designs custom wardrobes in Ghaziabad with sliding, swing, loft, saree storage, luggage zones, drawers, lighting direction and measured execution.',
    breadcrumb: 'Local Service / Wardrobe Design Ghaziabad',
    title: 'Wardrobe Design in Ghaziabad',
    subtitle:
      'Design custom wardrobes for Ghaziabad bedrooms with better internal storage, saree and luggage zones, sliding or swing shutters, finish guidance and measured execution.',
    image: canvaVisuals.wardrobeVisual,
    imageAlt: 'Wardrobe design in Ghaziabad by AlterCraft',
    priceTag: 'Wardrobe pricing depends on size, finish, internals and hardware',
    serviceName: 'Wardrobe Design in Ghaziabad',
    serviceType: 'Wardrobe Design',
    city: 'Ghaziabad',
    ctaMessage: 'Hi AlterCraft, I need wardrobe design in Ghaziabad. I can share room photos and wall size.',
    introTitle: 'A wardrobe works best when the inside is planned first.',
    introCopy: [
      'Wardrobe design should begin with clothes, sarees, luggage, bedding, accessories and daily habits, not only shutter finish.',
      'AlterCraft plans internal layouts, lofts, drawer positions, hanging heights, shutter clearance and finish direction around the actual bedroom.',
    ],
    planningTitle: 'Wardrobe details that matter',
    planningCopy:
      'Small internal decisions decide whether a wardrobe feels useful or frustrating after installation.',
    cards: [
      { title: 'Sliding Wardrobes', description: 'Useful for compact bedrooms where swing shutters block bed or walking clearance.' },
      { title: 'Swing Wardrobes', description: 'Simple, practical and easy to access where room clearance allows full shutter opening.' },
      { title: 'Saree and Luggage Storage', description: 'Tall hanging, shelf stacks, lofts and wide storage planned for Indian wardrobes.' },
      { title: 'Premium Finish Direction', description: 'Wood, off-white, beige, mirror, laminate and handle directions matched to room style.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Saree Storage Wardrobe', scope: 'Bedroom wardrobe internals', need: 'Separate saree, luggage and daily-wear zones', result: 'Custom internal layout with practical shelf and hanging distribution' },
      { title: 'Compact Bedroom Wardrobe', scope: 'Sliding wardrobe planning', need: 'More storage without blocking bed movement', result: 'Sliding shutter direction with loft and drawer planning' },
      { title: 'Premium Wardrobe Wall', scope: 'Full wall wardrobe', need: 'Clean finish with strong storage', result: 'Measured design direction with finish and hardware options' },
    ],
    faqs: [
      { question: 'Do you design wardrobes for sarees and luggage?', answer: 'Yes. AlterCraft plans wardrobe internals for sarees, hanging clothes, folded items, accessories, bedding and luggage.' },
      { question: 'Which is better, sliding or swing wardrobe?', answer: 'Sliding wardrobes suit compact rooms. Swing wardrobes are simple and practical where there is enough shutter clearance.' },
      { question: 'Can you quote after wall measurements?', answer: 'A first estimate can be prepared from wall width, height, depth and finish preference. Final quote needs confirmed measurements and hardware scope.' },
    ],
    related: [
      { to: '/wardrobes', label: 'Wardrobes & Storage' },
      { to: '/blog/wardrobe-design-for-sarees-lehengas-luggage/', label: 'Saree Wardrobe Guide' },
      { to: '/custom-furniture-ghaziabad', label: 'Custom Furniture Ghaziabad' },
    ],
  },
  bedManufacturerGhaziabad: {
    slug: 'bed-manufacturer-ghaziabad',
    metaTitle: 'Bed Manufacturer in Ghaziabad | Custom Beds by AlterCraft',
    metaDescription:
      'AlterCraft makes custom beds in Ghaziabad including storage beds, designer beds, headboards, side tables and bedroom furniture with measured execution.',
    breadcrumb: 'Local Service / Bed Manufacturer Ghaziabad',
    title: 'Bed Manufacturer in Ghaziabad',
    subtitle:
      'Get custom beds, storage beds, designer headboards and bedroom furniture made in Ghaziabad with AlterCraft, planned around room size, mattress size and storage need.',
    image: canvaVisuals.wardrobeVisual,
    imageAlt: 'Custom bed manufacturer in Ghaziabad by AlterCraft',
    priceTag: 'Bed price depends on size, storage, headboard, material and finish',
    serviceName: 'Bed Manufacturer in Ghaziabad',
    serviceType: 'Custom Bed Manufacturing',
    city: 'Ghaziabad',
    ctaMessage: 'Hi AlterCraft, I need a custom bed in Ghaziabad. I can share room size and reference photo.',
    introTitle: 'A bed should match the room, storage and daily use.',
    introCopy: [
      'A custom bed needs correct mattress size, walking clearance, headboard depth, side-table space, switchboard position and storage access.',
      'AlterCraft makes storage beds, designer beds and bedroom furniture directions that fit the actual room instead of forcing a standard size.',
    ],
    planningTitle: 'Bed planning checklist',
    planningCopy:
      'Before manufacturing, the bed should be checked against room movement, mattress size and storage access.',
    cards: [
      { title: 'Storage Beds', description: 'Hydraulic or box storage direction for bedding, luggage and seasonal items.' },
      { title: 'Designer Headboards', description: 'Wall-mounted, upholstered, wood-finish or panel-led headboard directions.' },
      { title: 'Bedroom Set Planning', description: 'Bed, wardrobe, side table and dressing unit coordinated together.' },
      { title: 'Material and Finish', description: 'Practical boards, laminate, upholstery and hardware selected by use and budget.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Storage Bed in Ghaziabad', scope: 'Hydraulic storage direction', need: 'Extra bedding and luggage storage', result: 'Room-fit bed direction with storage access and mattress clearance' },
      { title: 'Designer Headboard', scope: 'Headboard and side table', need: 'Premium bedroom look without reducing movement', result: 'Measured headboard direction with lighting and switchboard review' },
      { title: 'Compact Bedroom Bed', scope: 'Custom size bed', need: 'Comfortable mattress with walking clearance', result: 'Size direction based on actual room and furniture positions' },
    ],
    faqs: [
      { question: 'Do you make custom bed sizes?', answer: 'Yes. AlterCraft can plan custom bed sizes based on room size, mattress requirement and storage needs.' },
      { question: 'Can you make storage beds?', answer: 'Yes. Storage bed options depend on room size, opening access, material, hardware and budget.' },
      { question: 'Can the bed match my wardrobe finish?', answer: 'Yes. Share existing wardrobe or room photos so the bed finish can be coordinated.' },
    ],
    related: [
      { to: '/designer-beds', label: 'Designer Beds' },
      { to: '/blog/storage-bed-buying-guide-india/', label: 'Storage Bed Guide' },
      { to: '/wardrobe-design-ghaziabad', label: 'Wardrobe Design Ghaziabad' },
    ],
  },
  shoeRackDesign: {
    slug: 'shoe-rack-design',
    metaTitle: 'Shoe Rack Design for Home Entrance | Custom Shoe Rack AlterCraft',
    metaDescription:
      'Plan a custom shoe rack design for Indian home entrances with ventilation, seating, shutters, storage, cleaning access and measured execution by AlterCraft.',
    breadcrumb: 'High Intent / Shoe Rack Design',
    title: 'Shoe Rack Design for Home Entrance',
    subtitle:
      'Create a clean entrance with a custom shoe rack planned for ventilation, daily footwear, seating, key storage, cleaning clearance and the available wall depth.',
    image: canvaVisuals.office,
    imageAlt: 'Shoe rack design for home entrance by AlterCraft',
    priceTag: 'Custom shoe rack quote based on size, shutter style and finish',
    serviceName: 'Custom Shoe Rack Design',
    serviceType: 'Shoe Rack Design',
    city: 'Delhi NCR',
    ctaMessage: 'Hi AlterCraft, I need a custom shoe rack design for my entrance. I can share photos and size.',
    introTitle: 'The entrance should feel clean before the home begins.',
    introCopy: [
      'Shoe rack design is a strong early search signal for AlterCraft. It is also a practical project that often leads into wardrobes, mandirs and full furniture planning.',
      'A good shoe rack needs ventilation, easy cleaning, shelf height planning, daily-use access and a size that does not block the entrance.',
    ],
    planningTitle: 'Shoe rack decisions before fabrication',
    planningCopy:
      'The right design depends on family size, corridor rules, entrance depth and daily footwear habits.',
    cards: [
      { title: 'Ventilated Shutters', description: 'Slatted, perforated or open-detail shutters help reduce smell and improve air movement.' },
      { title: 'Seating Ledge', description: 'A sitting surface can be useful if the entrance has enough depth and clearance.' },
      { title: 'Daily and Occasional Storage', description: 'Separate frequently used shoes from party shoes, sports shoes and seasonal footwear.' },
      { title: 'Cleaning Access', description: 'Raised bases, legs or easy-clean bottom details help maintain the entrance.' },
    ],
    process: commonProcess,
    proof: [
      { title: 'Apartment Entrance Shoe Rack', scope: 'Ventilated shutter unit', need: 'Daily footwear storage without corridor clutter', result: 'Compact design direction with cleaning clearance and shelf planning' },
      { title: 'Shoe Rack with Seat', scope: 'Entrance seating and storage', need: 'Comfortable wearing area with hidden storage', result: 'Measured unit direction with seating height and depth review' },
      { title: 'Shoe Rack and Mandir Zone', scope: 'Combined entrance storage', need: 'Clean entrance with spiritual corner', result: 'Coordinated furniture direction with material and lighting options' },
    ],
    faqs: [
      { question: 'What is the best shoe rack design for apartments?', answer: 'A compact ventilated shoe rack with separate daily-use shelves and cleaning clearance usually works best for apartments.' },
      { question: 'Can a shoe rack include seating?', answer: 'Yes, if the entrance has enough depth and does not block movement. Seating height and support must be planned properly.' },
      { question: 'Do you make custom shoe racks?', answer: 'Yes. AlterCraft makes shoe racks based on entrance size, storage need, shutter style and finish preference.' },
    ],
    related: [
      { to: '/blog/shoe-rack-design-entrance/', label: 'Shoe Rack Blog Guide' },
      { to: '/custom-furniture-maker-near-me', label: 'Custom Furniture Maker Near Me' },
      { to: '/custom-furniture-ghaziabad', label: 'Custom Furniture Ghaziabad' },
    ],
  },
};

function LocalServicePage({ page }: { page: LocalPageData }) {
  const whatsappLink = createWhatsappLink(page.ctaMessage);
  const canonical = `https://www.altercraft.in/${page.slug}/`;

  return (
    <ElegantLayout>
      <SEOHead
        title={page.metaTitle}
        description={page.metaDescription}
        canonical={canonical}
        jsonLd={schemaForPage(page)}
      />

      <PageHero
        title={page.title}
        subtitle={page.subtitle}
        breadcrumb={page.breadcrumb}
        image={page.image}
        imageAlt={page.imageAlt}
        priceTag={page.priceTag}
      />

      <section className="seo-cta-strip">
        <div className="elegant-container seo-cta-strip-inner">
          <div>
            <strong>{page.serviceName}</strong>
            <p>{page.metaDescription}</p>
          </div>
          <div className="seo-cta-actions">
            <a className="elegant-button" href={whatsappLink} target="_blank" rel="noreferrer">
              Discuss on WhatsApp <MessageCircle size={16} />
            </a>
            <Link className="elegant-button-secondary" to="/ai-planner/start">
              Create Design Preview <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container elegant-split">
          <div>
            <p className="elegant-kicker">{page.city} Service</p>
            <h2 className="elegant-heading">{page.introTitle}</h2>
            {page.introCopy.map((copy) => (
              <p className="elegant-copy" key={copy}>{copy}</p>
            ))}
          </div>
          <div className="seo-card-grid compact">
            {page.cards.map((card) => (
              <article className="seo-mini-card" key={card.title}>
                <CheckCircle size={24} />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section elegant-section-muted">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">Service Areas</p>
            <h2 className="elegant-heading">Serving {page.city} and nearby NCR areas</h2>
            <p className="elegant-copy">
              AlterCraft works from Ghaziabad and supports enquiries across nearby locations based
              on schedule, measurement feasibility and project scope.
            </p>
          </div>
          <div className="seo-area-grid">
            {baseAreas.map((area) => (
              <div className="seo-area-pill" key={area}>
                <MapPin size={16} />
                {area}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">Planning</p>
            <h2 className="elegant-heading">{page.planningTitle}</h2>
            <p className="elegant-copy">{page.planningCopy}</p>
          </div>
          <div className="seo-card-grid">
            {page.process.map((step, index) => (
              <article className="elegant-card" key={step.title}>
                <div className="elegant-card-body">
                  <span className="elegant-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section elegant-section-muted">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">Project Signals</p>
            <h2 className="elegant-heading">Real project style content Google can understand</h2>
            <p className="elegant-copy">
              Each project page should eventually include photos, location, dimensions, material
              direction, requirement, timeline and result. These structured cards prepare that SEO
              footprint without removing existing portfolio pages.
            </p>
          </div>
          <div className="seo-proof-grid">
            {page.proof.map((item) => (
              <article className="seo-proof-card" key={item.title}>
                <img src={page.image} alt={`${item.title} by AlterCraft`} />
                <div>
                  <h3>{item.title}</h3>
                  <p><strong>Scope:</strong> {item.scope}</p>
                  <p><strong>Need:</strong> {item.need}</p>
                  <p><strong>Result:</strong> {item.result}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section">
        <div className="elegant-container">
          <div className="elegant-section-head">
            <p className="elegant-kicker">FAQ</p>
            <h2 className="elegant-heading">Common questions about {page.serviceName}</h2>
          </div>
          <div className="seo-faq-list">
            {page.faqs.map((faq) => (
              <article className="seo-faq-item" key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="elegant-section elegant-section-muted">
        <div className="elegant-container">
          <div className="elegant-quote-card">
            <ShieldCheck size={34} color="var(--accent)" />
            <p className="elegant-kicker">Start With Measurement</p>
            <h2 className="elegant-heading">Ready to discuss your space?</h2>
            <p className="elegant-copy">
              Send photos, dimensions, budget range and reference image if available. AlterCraft
              will guide you toward a practical design direction, measured quote and execution plan.
            </p>
            <div className="seo-cta-actions">
              <a className="elegant-button" href={whatsappLink} target="_blank" rel="noreferrer">
                Send Details on WhatsApp <MessageCircle size={16} />
              </a>
              {page.related.map((link) => (
                <Link className="elegant-button-secondary" to={link.to} key={link.to}>
                  {link.label} <ArrowRight size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ElegantLayout>
  );
}

export function ModularKitchenGhaziabad() {
  return <LocalServicePage page={pages.modularKitchenGhaziabad} />;
}

export function CustomFurnitureGhaziabad() {
  return <LocalServicePage page={pages.customFurnitureGhaziabad} />;
}

export function CustomFurnitureNoida() {
  return <LocalServicePage page={pages.customFurnitureNoida} />;
}

export function CustomFurnitureGreaterNoida() {
  return <LocalServicePage page={pages.customFurnitureGreaterNoida} />;
}

export function CustomFurnitureMakerNearMe() {
  return <LocalServicePage page={pages.customFurnitureMakerNearMe} />;
}

export function OfficeInteriorGhaziabad() {
  return <LocalServicePage page={pages.officeInteriorGhaziabad} />;
}

export function WardrobeDesignGhaziabad() {
  return <LocalServicePage page={pages.wardrobeDesignGhaziabad} />;
}

export function BedManufacturerGhaziabad() {
  return <LocalServicePage page={pages.bedManufacturerGhaziabad} />;
}

export function ShoeRackDesign() {
  return <LocalServicePage page={pages.shoeRackDesign} />;
}
