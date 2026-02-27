export type GalleryCategory = {
  id: string;
  label: string;
};

export type GalleryPhoto = {
  src: string;
  label: string;
};

export type GalleryProduct = {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  material: string;
  dimensions: string;
  finish: string;
  photos: GalleryPhoto[];
};

export const galleryCategories: GalleryCategory[] = [
  { id: 'living', label: 'Living' },
  { id: 'bedroom', label: 'Bedroom' },
  { id: 'dining', label: 'Dining' },
  { id: 'office', label: 'Office' },
  { id: 'decor', label: 'Panels and Decor' },
  { id: 'mandir', label: 'Mandir Units' },
];

export const galleryProducts: GalleryProduct[] = [
  {
    id: 'nova-l-shape-sofa',
    name: 'Nova L-Shape Sofa',
    category: 'living',
    shortDescription: 'Deep seat sectional designed for modern living rooms.',
    material: 'Kiln-dried hardwood and premium upholstery',
    dimensions: '96 in x 64 in x 33 in',
    finish: 'Matte beige fabric',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=1400&q=80',
        label: 'Front angle',
      },
      {
        src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=80',
        label: 'Corner angle',
      },
      {
        src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80',
        label: 'Side angle',
      },
      {
        src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
        label: 'Detail shot',
      },
    ],
  },
  {
    id: 'regal-tv-console',
    name: 'Regal TV Console',
    category: 'living',
    shortDescription: 'Low profile media unit with concealed storage.',
    material: 'Pre-laminated board with hardwood frame',
    dimensions: '72 in x 16 in x 22 in',
    finish: 'Walnut and charcoal dual tone',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
        label: 'Front elevation',
      },
      {
        src: 'https://images.unsplash.com/photo-1505693314127-4f8d16735a07?auto=format&fit=crop&w=1400&q=80',
        label: 'Left perspective',
      },
      {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
        label: 'Right perspective',
      },
      {
        src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
        label: 'Storage detail',
      },
    ],
  },
  {
    id: 'aurora-wardrobe',
    name: 'Aurora Sliding Wardrobe',
    category: 'bedroom',
    shortDescription: 'Space-efficient wardrobe with smooth sliding tracks.',
    material: 'BWR plywood with soft-close hardware',
    dimensions: '84 in x 72 in x 24 in',
    finish: 'Oak laminate with fluted accents',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1616628182509-9f5d4a4f2b12?auto=format&fit=crop&w=1400&q=80',
        label: 'Full front',
      },
      {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
        label: 'Diagonal view',
      },
      {
        src: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1400&q=80',
        label: 'Interior layout',
      },
      {
        src: 'https://images.unsplash.com/photo-1505693314127-4f8d16735a07?auto=format&fit=crop&w=1400&q=80',
        label: 'Door profile',
      },
    ],
  },
  {
    id: 'heritage-dining-set',
    name: 'Heritage Dining Set',
    category: 'dining',
    shortDescription: 'Six-seater dining set built for daily family use.',
    material: 'Solid wood top with cushioned chairs',
    dimensions: 'Table 60 in x 36 in',
    finish: 'Natural teak matte polish',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1449247613801-ab06418e2861?auto=format&fit=crop&w=1400&q=80',
        label: 'Table front',
      },
      {
        src: 'https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=1400&q=80',
        label: 'Corner setup',
      },
      {
        src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80',
        label: 'Chair detail',
      },
      {
        src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1400&q=80',
        label: 'Top surface close-up',
      },
    ],
  },
  {
    id: 'summit-workstation',
    name: 'Summit Executive Workstation',
    category: 'office',
    shortDescription: 'CNC-finished workstation for studios and offices.',
    material: 'Powder-coated steel frame and laminate top',
    dimensions: '78 in x 30 in x 30 in',
    finish: 'Matte black with walnut grain',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80',
        label: 'Front setup',
      },
      {
        src: 'https://images.unsplash.com/photo-1505832018823-50331d70d237?auto=format&fit=crop&w=1400&q=80',
        label: 'User side',
      },
      {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80',
        label: 'Cable channel',
      },
      {
        src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
        label: 'Leg detail',
      },
    ],
  },
  {
    id: 'aura-panel-system',
    name: 'Aura Fluted Panel System',
    category: 'decor',
    shortDescription: 'Wall panel solution for feature walls and lobbies.',
    material: 'MDF core with decorative laminate',
    dimensions: 'Custom modules',
    finish: 'Warm oak fluted profile',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80',
        label: 'Full wall view',
      },
      {
        src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80',
        label: 'Side perspective',
      },
      {
        src: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1400&q=80',
        label: 'Texture close-up',
      },
      {
        src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=80',
        label: 'Edge profile',
      },
    ],
  },
  {
    id: 'shree-mandir-unit',
    name: 'Shree Mandir Unit',
    category: 'mandir',
    shortDescription: 'Traditional style mandir unit with CNC jaali detailing.',
    material: 'BWP plywood with PU-coated front',
    dimensions: '48 in x 24 in x 78 in',
    finish: 'Ivory with gold accent trims',
    photos: [
      {
        src: 'https://images.unsplash.com/photo-1505693314127-4f8d16735a07?auto=format&fit=crop&w=1400&q=80',
        label: 'Front elevation',
      },
      {
        src: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1400&q=80',
        label: 'Lighting view',
      },
      {
        src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1400&q=80',
        label: 'Side profile',
      },
      {
        src: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?auto=format&fit=crop&w=1400&q=80',
        label: 'Jaali detail',
      },
    ],
  },
];
