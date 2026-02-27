# ALTER CRAFT - Luxury Furniture Website

A premium website for AlterCraft Woods & Furniture featuring a luxury poster-inspired design with dark charcoal/black backgrounds and gold accents.

## Features

- 🏠 **Home Page**: Luxury poster-style sections showcasing the brand, custom manufacturing, furniture rentals, materials, and trust badges
- 🖼️ **Product Gallery**: Filterable product catalog with search, category filtering, and availability options
- 📱 **Product Detail Pages**: Multi-photo galleries with zoom, specifications, features, and WhatsApp ordering
- 🎨 **Premium Design**: Dark backgrounds with gold accents, elegant typography, and smooth animations
- 📦 **12+ Sample Products**: Beds, wardrobes, study tables, mandirs, panels, nameplates, and rental packages

## Tech Stack

- **React** - UI Framework
- **React Router** - Client-side routing
- **Tailwind CSS v4** - Styling
- **Motion (Framer Motion)** - Animations
- **Lucide React** - Icons
- **TypeScript** - Type safety

## Local Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

The site will run locally with hot-module replacement for instant updates as you edit files.

## Project Structure

```
/
├── App.tsx                 # Main app with routing
├── routes.ts               # Route configuration
├── pages/
│   ├── Home.tsx           # Home page (poster layout)
│   ├── Gallery.tsx        # Product gallery with filters
│   └── ProductDetail.tsx  # Individual product pages
├── components/
│   ├── Header.tsx         # Site header/navigation
│   ├── ProductCard.tsx    # Product card component
│   ├── HeroPoster.tsx     # Hero section
│   ├── ManufacturingPoster.tsx
│   ├── RentalPoster.tsx
│   ├── MaterialsPoster.tsx
│   ├── TrustPoster.tsx
│   └── FooterPoster.tsx
├── data/
│   └── products.ts        # Product catalog data
└── styles/
    └── globals.css        # Global styles
```

## Product Data

Products are managed in `/data/products.ts`. Each product includes:

- **Basic Info**: ID, code, name, category, description
- **Pricing**: MRP, offer price, savings
- **Rental**: Monthly rate and deposit (if applicable)
- **Specs**: Materials, dimensions, delivery time
- **Images**: Multiple product photos
- **Features**: Key selling points
- **Availability**: Buy, rent, or both

### Adding New Products

Edit `/data/products.ts` and add a new product object following the existing pattern:

```typescript
{
  id: 'product-id',
  code: 'PRD-01',
  name: 'Product Name',
  category: 'Beds', // or other categories
  shortDescription: 'Brief description',
  prices: {
    mrp: 50000,
    offer: 40000,
    save: 10000,
  },
  rent: {
    monthly: 3000,
    deposit: 12000,
  },
  deliveryDays: 7,
  materials: 'Material description',
  dimensions: 'L × W × H',
  images: [
    'image-url-1',
    'image-url-2',
  ],
  features: [
    'Feature 1',
    'Feature 2',
  ],
  availability: ['rent', 'buy'],
}
```

## Customization

### Colors

The site uses a consistent color palette defined in Tailwind classes:

- **Background**: `#0A0A0A` (deep black)
- **Gold Accent**: `#FFB800`
- **Text Gray**: `#A1A1AA`, `#52525B`

### Typography

- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

## WhatsApp Integration

The site includes WhatsApp CTAs with pre-filled messages. Update the phone number in:

- `/components/HeroPoster.tsx`
- `/pages/Gallery.tsx`
- `/pages/ProductDetail.tsx`
- `/pages/Home.tsx`

Replace `918826436093` with your WhatsApp business number.

## Deployment Notes

**IMPORTANT**: This project is configured for local development only. Do NOT push changes directly to GitHub or deploy without testing locally first.

When ready to deploy:

1. Test all routes and features locally
2. Update product images with your actual assets
3. Configure your deployment platform (Vercel, Netlify, etc.)
4. Set up environment variables if needed
5. Build the production version:

```bash
npm run build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 AlterCraft Woods & Furniture. All rights reserved.

## Contact

For support or questions:
- WhatsApp: +91 8826436093
- Website: [Your website URL]
