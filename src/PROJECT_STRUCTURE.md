# ALTER CRAFT - Project Structure

## 📁 File Organization

```
/
├── App.tsx                          # Main app entry with RouterProvider
├── routes.ts                        # Route configuration (React Router)
│
├── pages/                           # Route pages
│   ├── Home.tsx                     # Home page (/) - Poster layout
│   ├── Gallery.tsx                  # Product gallery (/gallery)
│   └── ProductDetail.tsx            # Product details (/product/:id)
│
├── components/                      # Reusable components
│   ├── Header.tsx                   # Site header with navigation
│   ├── ProductCard.tsx              # Product card component
│   │
│   ├── HeroPoster.tsx              # Home hero section
│   ├── ManufacturingPoster.tsx     # Manufacturing section
│   ├── RentalPoster.tsx            # Rental section
│   ├── MaterialsPoster.tsx         # Materials section
│   ├── TrustPoster.tsx             # Trust & compliance section
│   ├── FooterPoster.tsx            # Footer section
│   │
│   ├── ui/                          # UI primitives (shadcn-style)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── select.tsx
│   │   ├── dialog.tsx
│   │   └── ... (other UI components)
│   │
│   └── figma/
│       └── ImageWithFallback.tsx    # Image component with fallback
│
├── data/
│   └── products.ts                  # Product catalog data
│
├── styles/
│   └── globals.css                  # Global styles & Tailwind config
│
├── README.md                        # Full documentation
├── QUICKSTART.md                    # Quick start guide
└── PROJECT_STRUCTURE.md             # This file
```

## 🗂️ Key Files Explained

### `/App.tsx`
- Main application entry point
- Sets up React Router with `RouterProvider`
- No longer contains page content (moved to `/pages/Home.tsx`)

### `/routes.ts`
- Defines all application routes
- Maps URLs to page components:
  - `/` → Home
  - `/gallery` → Gallery
  - `/product/:id` → ProductDetail
  - `*` → 404 page

### `/pages/Home.tsx`
- Original homepage with poster sections
- Contains all poster components (Hero, Manufacturing, Rental, etc.)
- Includes local preview banner
- Floating WhatsApp CTA

### `/pages/Gallery.tsx`
- Product gallery with filters
- Category dropdown (Beds, Wardrobes, etc.)
- Availability toggle chips (All, Rent+Buy, Buy Only, Rent Only)
- Search functionality
- Responsive grid layout
- Results counter

### `/pages/ProductDetail.tsx`
- Individual product pages
- Multi-photo gallery with thumbnails
- Zoom dialog for images
- Product specifications
- Pricing and rental info
- Feature list
- WhatsApp ordering CTA
- Similar products section

### `/components/Header.tsx`
- Sticky header with navigation
- Two variants: `default` and `minimal`
- Links to Home and Gallery
- WhatsApp contact button

### `/components/ProductCard.tsx`
- Reusable product card
- Displays product image, name, code
- Shows pricing (MRP, offer, savings)
- Rental pricing (if applicable)
- Availability chips
- Hover effects with gold border glow
- "View Details" CTA

### `/data/products.ts`
- Product catalog data structure
- TypeScript interface: `Product`
- 12 sample products:
  - 2 Beds
  - 2 Wardrobes
  - 2 Study Tables
  - 2 Mandirs
  - 2 Panels
  - 1 Nameplate
  - 1 Rental Package

## 🎨 Styling System

### Color Palette
```css
--background: #0A0A0A      /* Deep black */
--gold: #FFB800            /* Gold accent */
--gray-light: #A1A1AA      /* Text gray */
--gray-dark: #52525B       /* Muted gray */
--charcoal: #1A1A1A        /* Card backgrounds */
```

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Buttons**: Black, uppercase, wide tracking

### Component Patterns
- Gold borders on hover
- Smooth transitions (300-500ms)
- Backdrop blur for sticky elements
- Subtle texture overlays
- Sharp angles (no rounded corners)

## 🔀 Routing Flow

```
┌─────────────┐
│    Home     │ (/)
│  /pages/    │
│  Home.tsx   │
└──────┬──────┘
       │
       ├─→ Click "Product Gallery" CTA
       │
       ↓
┌─────────────┐
│   Gallery   │ (/gallery)
│  /pages/    │
│ Gallery.tsx │
└──────┬──────┘
       │
       ├─→ Click "View Details" on any product
       │
       ↓
┌──────────────┐
│Product Detail│ (/product/:id)
│   /pages/    │
│ProductDetail │
│    .tsx      │
└──────────────┘
```

## 📦 Data Flow

```
/data/products.ts
       │
       ├─→ Gallery.tsx (filters & displays grid)
       │
       └─→ ProductDetail.tsx (displays single product)
                │
                └─→ ProductCard.tsx (for similar products)
```

## 🧩 Component Hierarchy

```
App.tsx
  └─ RouterProvider
      │
      ├─ Home (/)
      │   ├─ Local Preview Banner
      │   ├─ HeroPoster
      │   ├─ ManufacturingPoster
      │   ├─ RentalPoster
      │   ├─ MaterialsPoster
      │   ├─ TrustPoster
      │   └─ FooterPoster
      │
      ├─ Gallery (/gallery)
      │   ├─ Local Preview Banner
      │   ├─ Header (minimal)
      │   ├─ Hero Section
      │   ├─ Filters Section
      │   │   ├─ Category Dropdown (Select)
      │   │   ├─ Availability Chips
      │   │   └─ Search Bar (Input)
      │   ├─ Products Grid
      │   │   └─ ProductCard (×12)
      │   └─ Footer CTA
      │
      └─ ProductDetail (/product/:id)
          ├─ Local Preview Banner
          ├─ Header (minimal)
          ├─ Breadcrumb
          ├─ Main Section
          │   ├─ Image Gallery
          │   │   ├─ Main Image (with zoom)
          │   │   └─ Thumbnail Strip
          │   └─ Product Info Panel
          │       ├─ Pricing
          │       ├─ Rental Info
          │       ├─ Specifications
          │       └─ Features
          └─ Similar Products Section
              └─ ProductCard (×3)
```

## 🔧 State Management

### Gallery Page
```typescript
- selectedCategory: string
- availabilityFilter: 'all' | 'rent-buy' | 'buy-only' | 'rent-only'
- searchQuery: string
- filteredProducts: Product[] (computed)
```

### Product Detail Page
```typescript
- selectedImageIndex: number
- product: Product (from URL param)
- similarProducts: Product[] (filtered by category)
```

## 🎯 Entry Points

1. **Development**: `npm run dev` → Runs local server
2. **User Navigation**:
   - Home (/) → Primary landing page
   - Gallery (/gallery) → Product catalog
   - Product (/product/:id) → Individual products

## 📝 Customization Points

### Add New Products
→ Edit `/data/products.ts`

### Change Colors
→ Edit Tailwind classes in components
→ Update `/styles/globals.css` for global tokens

### Add New Routes
→ Update `/routes.ts`
→ Create new page in `/pages/`

### Modify Layout
→ Edit poster components in `/components/`
→ Adjust grid layouts in Gallery/ProductDetail

## 🚀 Deployment Preparation

Before deploying:
1. Remove local preview banners from all pages
2. Replace sample products with real data
3. Update WhatsApp number
4. Add real product images
5. Test all routes and filters
6. Build production: `npm run build`

---

**Quick Reference**:
- Routes: `/routes.ts`
- Data: `/data/products.ts`
- Styles: `/styles/globals.css`
- Pages: `/pages/`
- Components: `/components/`
