export interface Product {
  id: string;
  code: string;
  name: string;
  category: 'Beds' | 'Wardrobes' | 'Study Tables' | 'Mandirs' | 'Panels' | 'Nameplates' | 'Rentals';
  shortDescription: string;
  prices: {
    mrp: number;
    offer: number;
    save: number;
  };
  rent: {
    monthly: number;
    deposit: number;
  };
  deliveryDays: number;
  materials: string;
  dimensions: string;
  images: string[];
  features: string[];
  availability: ('rent' | 'buy')[];
}

export const products: Product[] = [
  {
    id: 'bed-01',
    code: 'BED-01',
    name: 'Luxury King Platform Bed',
    category: 'Beds',
    shortDescription: 'Premium engineered wood bed with gold accent inlays',
    prices: {
      mrp: 45000,
      offer: 32000,
      save: 13000,
    },
    rent: {
      monthly: 2500,
      deposit: 10000,
    },
    deliveryDays: 7,
    materials: 'Engineered Wood with Walnut Veneer',
    dimensions: '210cm × 200cm × 120cm (L × W × H)',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
      'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800',
      'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=800',
      'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800',
    ],
    features: [
      'CNC-carved headboard with custom patterns',
      'Reinforced slat system for durability',
      'Anti-slip felt base protection',
      'Premium walnut finish with gold accents',
      'Made-to-order with custom sizing options',
    ],
    availability: ['rent', 'buy'],
  },
  {
    id: 'bed-02',
    code: 'BED-02',
    name: 'Modern Storage Bed',
    category: 'Beds',
    shortDescription: 'Contemporary bed with hydraulic storage and soft-close mechanism',
    prices: {
      mrp: 38000,
      offer: 28500,
      save: 9500,
    },
    rent: {
      monthly: 2200,
      deposit: 8500,
    },
    deliveryDays: 10,
    materials: 'Engineered Wood with Melamine Finish',
    dimensions: '190cm × 150cm × 110cm (L × W × H)',
    images: [
      'https://images.unsplash.com/photo-1578898886655-c70a4aa75f5d?w=800',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800',
    ],
    features: [
      'Hydraulic lift storage with 400L capacity',
      'Soft-close mechanism for safety',
      'Scratch-resistant melamine coating',
      'Easy assembly with modular design',
    ],
    availability: ['rent', 'buy'],
  },
  {
    id: 'wardrobe-01',
    code: 'WAR-01',
    name: 'Executive Sliding Door Wardrobe',
    category: 'Wardrobes',
    shortDescription: '3-door wardrobe with mirror and premium fittings',
    prices: {
      mrp: 65000,
      offer: 48000,
      save: 17000,
    },
    rent: {
      monthly: 3500,
      deposit: 15000,
    },
    deliveryDays: 14,
    materials: 'Engineered Wood + Bagasse Board Interior',
    dimensions: '240cm × 60cm × 210cm (H × D × W)',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800',
      'https://images.unsplash.com/photo-1595428773711-e6b9e4a8ebeb?w=800',
    ],
    features: [
      'Soft-close sliding door mechanism',
      'Full-length mirror on center panel',
      'Customizable interior shelving',
      'Anti-rust premium fittings',
      'Eco-friendly bagasse board interiors',
    ],
    availability: ['rent', 'buy'],
  },
  {
    id: 'wardrobe-02',
    code: 'WAR-02',
    name: 'Compact Swing Door Wardrobe',
    category: 'Wardrobes',
    shortDescription: 'Space-saving 2-door wardrobe perfect for small bedrooms',
    prices: {
      mrp: 32000,
      offer: 24500,
      save: 7500,
    },
    rent: {
      monthly: 1800,
      deposit: 7000,
    },
    deliveryDays: 7,
    materials: 'Engineered Wood with Laminate Finish',
    dimensions: '180cm × 50cm × 150cm (H × D × W)',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    ],
    features: [
      'Magnetic door locks',
      '4 internal shelves + hanging rod',
      'Compact design for tight spaces',
      'Durable laminate exterior',
    ],
    availability: ['buy'],
  },
  {
    id: 'study-01',
    code: 'STD-01',
    name: 'Ergonomic Study Table with Storage',
    category: 'Study Tables',
    shortDescription: 'Modern study desk with cable management and drawer storage',
    prices: {
      mrp: 18000,
      offer: 13500,
      save: 4500,
    },
    rent: {
      monthly: 1200,
      deposit: 5000,
    },
    deliveryDays: 5,
    materials: 'Engineered Wood with Matt Finish',
    dimensions: '120cm × 60cm × 75cm (L × W × H)',
    images: [
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800',
    ],
    features: [
      'Built-in cable management system',
      '2 large drawers with smooth glides',
      'Scratch-resistant matt surface',
      'Ergonomic height for long study sessions',
      'Optional keyboard tray add-on',
    ],
    availability: ['rent', 'buy'],
  },
  {
    id: 'study-02',
    code: 'STD-02',
    name: 'Wall-Mounted Foldable Study Desk',
    category: 'Study Tables',
    shortDescription: 'Space-saving foldable desk for compact rooms',
    prices: {
      mrp: 12000,
      offer: 9500,
      save: 2500,
    },
    rent: {
      monthly: 800,
      deposit: 3500,
    },
    deliveryDays: 3,
    materials: 'Engineered Wood with PU Polish',
    dimensions: '100cm × 50cm × 10cm (folded)',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800',
      'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800',
    ],
    features: [
      'Folds flat when not in use',
      'Heavy-duty wall brackets included',
      'Smooth PU polished surface',
      'Supports up to 25kg',
    ],
    availability: ['buy'],
  },
  {
    id: 'mandir-01',
    code: 'MND-01',
    name: 'Traditional Teak Temple',
    category: 'Mandirs',
    shortDescription: 'Handcrafted pooja mandir with intricate CNC carvings',
    prices: {
      mrp: 55000,
      offer: 42000,
      save: 13000,
    },
    rent: {
      monthly: 0,
      deposit: 0,
    },
    deliveryDays: 21,
    materials: 'Premium Teak Wood with Natural Polish',
    dimensions: '90cm × 45cm × 150cm (W × D × H)',
    images: [
      'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800',
      'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800',
      'https://images.unsplash.com/photo-1624084265550-f4d68ea0ca04?w=800',
    ],
    features: [
      'CNC-carved traditional motifs',
      'Multiple idol shelves with LED backlighting',
      'Drawer for pooja essentials',
      'Natural teak finish with hand-polishing',
      'Custom height and design options available',
    ],
    availability: ['buy'],
  },
  {
    id: 'mandir-02',
    code: 'MND-02',
    name: 'Wall-Mounted Modern Mandir',
    category: 'Mandirs',
    shortDescription: 'Contemporary wall mandir with LED lighting',
    prices: {
      mrp: 28000,
      offer: 21500,
      save: 6500,
    },
    rent: {
      monthly: 0,
      deposit: 0,
    },
    deliveryDays: 10,
    materials: 'Engineered Wood with Veneer Finish',
    dimensions: '75cm × 35cm × 100cm (W × D × H)',
    images: [
      'https://images.unsplash.com/photo-1609743522653-52354461eb27?w=800',
      'https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=800',
    ],
    features: [
      'Space-saving wall-mounted design',
      'Integrated warm LED strip lighting',
      'Minimalist modern aesthetics',
      'Easy installation kit included',
    ],
    availability: ['buy'],
  },
  {
    id: 'panel-01',
    code: 'PNL-01',
    name: 'Geometric Wall Panel Set',
    category: 'Panels',
    shortDescription: '3D CNC-cut decorative wall panels (set of 6)',
    prices: {
      mrp: 15000,
      offer: 11500,
      save: 3500,
    },
    rent: {
      monthly: 0,
      deposit: 0,
    },
    deliveryDays: 7,
    materials: 'MDF with Lacquer Finish',
    dimensions: '60cm × 60cm × 2cm each (6 panels)',
    images: [
      'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
      'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800',
    ],
    features: [
      'Precision CNC geometric patterns',
      'High-gloss lacquer finish',
      'Easy wall mounting system',
      'Custom colors available',
      'Create unique 3D wall art',
    ],
    availability: ['buy'],
  },
  {
    id: 'panel-02',
    code: 'PNL-02',
    name: 'Floral Pattern Decorative Panel',
    category: 'Panels',
    shortDescription: 'Single large statement wall panel with floral design',
    prices: {
      mrp: 12000,
      offer: 9000,
      save: 3000,
    },
    rent: {
      monthly: 0,
      deposit: 0,
    },
    deliveryDays: 5,
    materials: 'Plywood with UV Print + CNC Cut',
    dimensions: '120cm × 90cm × 1.5cm',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800',
      'https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?w=800',
    ],
    features: [
      'Intricate floral CNC cutting',
      'UV-printed background colors',
      'Lightweight plywood construction',
      'Ready to hang',
    ],
    availability: ['buy'],
  },
  {
    id: 'nameplate-01',
    code: 'NMP-01',
    name: 'Custom Family Nameplate',
    category: 'Nameplates',
    shortDescription: 'Personalized acrylic nameplate with LED backlight',
    prices: {
      mrp: 4500,
      offer: 3200,
      save: 1300,
    },
    rent: {
      monthly: 0,
      deposit: 0,
    },
    deliveryDays: 3,
    materials: 'Acrylic with LED Strip',
    dimensions: '45cm × 30cm × 1.5cm (customizable)',
    images: [
      'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800',
    ],
    features: [
      'Custom text and font selection',
      'Warm white LED backlighting',
      'Weather-resistant acrylic material',
      'Multiple color options',
      'Quick CNC engraving turnaround',
    ],
    availability: ['buy'],
  },
  {
    id: 'rental-01',
    code: 'RNT-01',
    name: 'Premium Event Furniture Package',
    category: 'Rentals',
    shortDescription: 'Complete furniture set for weddings and corporate events',
    prices: {
      mrp: 0,
      offer: 0,
      save: 0,
    },
    rent: {
      monthly: 15000,
      deposit: 50000,
    },
    deliveryDays: 2,
    materials: 'Mixed: Wood, Metal, Upholstery',
    dimensions: 'Package includes 20 chairs + 4 tables',
    images: [
      'https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?w=800',
      'https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?w=800',
      'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800',
    ],
    features: [
      'Complete event setup included',
      'Professional delivery and pickup',
      'Cleaning service included',
      'Flexible rental periods (per event)',
      'Custom configurations available',
    ],
    availability: ['rent'],
  },
];
