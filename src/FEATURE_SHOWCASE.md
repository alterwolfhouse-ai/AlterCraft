# ALTER CRAFT Gallery - Feature Showcase

## 🎬 Visual Tour

### 1️⃣ Home Page Enhancement

**Before**: Single WhatsApp CTA
**After**: Two premium CTAs side-by-side

```
┌────────────────────────────────────────┐
│  ALTER CRAFT                           │
│  Handcrafted + CNC Precision           │
│                                        │
│  [ENQUIRE ON WHATSAPP] [PRODUCT GALLERY]│
│   (Gold filled)       (Gold outline)  │
└────────────────────────────────────────┘
```

**Visual Design**:
- Gold filled button (WhatsApp) - Primary CTA
- Gold outline button (Gallery) - Secondary CTA
- Both maintain luxury aesthetic
- Responsive: Stack vertically on mobile

---

### 2️⃣ Product Gallery Page

#### Page Structure:
```
┌─────────────────────────────────────────────────┐
│ 🔧 LOCAL PREVIEW MODE - NOT DEPLOYED          │ ← Banner
├─────────────────────────────────────────────────┤
│ ALTER CRAFT | Handcrafted + CNC Precision     │ ← Header
├─────────────────────────────────────────────────┤
│                                                 │
│ ← Home                                         │
│                                                 │
│ PRODUCT                                        │
│ GALLERY                                        │
│                                                 │
│ Explore our curated collection...             │
│                                                 │
├─────────────────────────────────────────────────┤
│ [Category ▼] [All][Rent+Buy][Buy][Rent] [🔍 Search]│ ← Filters
│ Showing 12 products                            │
├─────────────────────────────────────────────────┤
│                                                 │
│ ┌──────┐  ┌──────┐  ┌──────┐                │
│ │ BED  │  │ BED  │  │ WAR  │                │
│ │ 01   │  │ 02   │  │ 01   │                │
│ └──────┘  └──────┘  └──────┘                │
│                                                 │
│ ┌──────┐  ┌──────┐  ┌──────┐                │
│ │ WAR  │  │ STD  │  │ STD  │                │
│ │ 02   │  │ 01   │  │ 02   │                │
│ └──────┘  └──────┘  └──────┘                │
│                                                 │
│ ... (more products)                            │
│                                                 │
├─────────────────────────────────────────────────┤
│ Can't Find What You Need?                     │
│ [WHATSAPP US NOW]                              │
└─────────────────────────────────────────────────┘
```

#### Filter Functionality:

**Category Dropdown**:
```
┌──────────────────┐
│ All Categories ▼ │ ← Click
├──────────────────┤
│ All Categories   │
│ Beds            │
│ Wardrobes       │
│ Study Tables    │
│ Mandirs         │
│ Panels          │
│ Nameplates      │
│ Rentals         │
└──────────────────┘
```

**Availability Chips**:
```
[All] [Rent+Buy] [Buy Only] [Rent Only]
 ↑       ↑          ↑           ↑
Gold   Outline   Outline    Outline
(active state)
```

**Search Bar**:
```
┌────────────────────────────────┐
│ 🔍 Search products...          │
└────────────────────────────────┘
Real-time filtering as you type
```

---

### 3️⃣ Product Card Design

```
┌─────────────────────────────────┐
│ ┌─────────────────────────────┐ │
│ │ [BED-01]    Product Image   │ │ ← Image + Badge
│ │                             │ │
│ └─────────────────────────────┘ │
│                                 │
│ Luxury King Platform Bed        │ ← Name
│ Premium engineered wood bed...  │ ← Description
│                                 │
│ ₹32,000  ₹45,000  Save ₹13,000│ ← Pricing
│ or Rent at ₹2,500/mo           │ ← Rental
│                                 │
│ [Rent+Buy] [Made-to-Order] [7d]│ ← Chips
│                                 │
│ [ VIEW DETAILS ]                │ ← CTA
└─────────────────────────────────┘
```

**Hover Effect**:
- Gold border glow appears
- Image scales up slightly
- Gradient overlay on image
- Smooth 300ms transition

---

### 4️⃣ Product Detail Page

#### Layout:
```
┌──────────────────────────────────────────────────┐
│ 🔧 LOCAL PREVIEW MODE                           │
├──────────────────────────────────────────────────┤
│ ALTER CRAFT                                      │
├──────────────────────────────────────────────────┤
│ Home / Gallery / BED-01                          │ ← Breadcrumb
├──────────────────────────────────────────────────┤
│                                                  │
│ ┌──────────────┐  ┌──────────────────────────┐│
│ │              │  │ [Beds]                    ││
│ │              │  │                            ││
│ │  Main Image  │  │ Luxury King Platform Bed  ││
│ │              │  │                            ││
│ │  [🔍 Zoom]   │  │ Premium engineered wood... ││
│ │  [BED-01]    │  │                            ││
│ └──────────────┘  │ ┌────────────────────────┐││
│                   │ │ ₹32,000                │││
│ [▢][▢][▢][▢]    │ │ ₹45,000  Save ₹13,000  │││
│  ↑ Thumbnails    │ └────────────────────────┘││
│                   │                            ││
│                   │ Rent: ₹2,500/mo           ││
│                   │ Deposit: ₹10,000          ││
│                   │                            ││
│                   │ ▶ Delivery: 7 Days        ││
│                   │ ▶ Dimensions: 210×200×120 ││
│                   │ ▶ Materials: Eng. Wood    ││
│                   │                            ││
│                   │ ✓ CNC-carved headboard    ││
│                   │ ✓ Reinforced slat system  ││
│                   │ ✓ Anti-slip base         ││
│                   │                            ││
│                   │ [WHATSAPP TO ORDER]       ││
│                   │ [BACK TO GALLERY]         ││
│                   └──────────────────────────┘│
├──────────────────────────────────────────────────┤
│ Similar Products                                 │
│ ┌──────┐  ┌──────┐  ┌──────┐                  │
│ │ BED  │  │ BED  │  │ BED  │                  │
│ │ 02   │  │ 03   │  │ 04   │                  │
│ └──────┘  └──────┘  └──────┘                  │
└──────────────────────────────────────────────────┘
```

#### Multi-Photo Gallery:
```
Main Image:
┌────────────────────────────┐
│                            │
│    Large Product Photo     │
│                            │
│  [🔍] ← Zoom button        │
│  [BED-01] ← Code badge     │
└────────────────────────────┘

Thumbnails:
┌───┐ ┌───┐ ┌───┐ ┌───┐
│ 1 │ │ 2 │ │ 3 │ │ 4 │
└───┘ └───┘ └───┘ └───┘
  ↑     ↓     ↓     ↓
Active  Inactive
(Gold border)
```

---

### 5️⃣ Zoom Modal

```
Click zoom button or main image
         ↓
┌────────────────────────────────┐
│ [×]                            │
│                                │
│                                │
│                                │
│    Full-Size Product Image     │
│    (High Resolution)           │
│                                │
│                                │
│                                │
└────────────────────────────────┘
        Click X or outside to close
```

---

### 6️⃣ Filter Examples

#### Example 1: Category Filter
```
User selects "Beds" → Shows only BED-01, BED-02
Result: 2 products
```

#### Example 2: Availability Filter
```
User clicks "Rent Only" → Shows only RNT-01
Result: 1 product
```

#### Example 3: Search
```
User types "luxury" → Shows all products with "luxury" in name/description
Result: Multiple matches
```

#### Example 4: Combined Filters
```
Category: "Wardrobes"
Availability: "Rent+Buy"
Search: ""
Result: Shows WAR-01 (has both rent and buy options)
```

---

### 7️⃣ Responsive Breakpoints

#### Desktop (1440px)
```
┌──────┐ ┌──────┐ ┌──────┐
│ Card │ │ Card │ │ Card │
└──────┘ └──────┘ └──────┘
   3 columns
```

#### Tablet (768px)
```
┌──────┐ ┌──────┐
│ Card │ │ Card │
└──────┘ └──────┘
   2 columns
```

#### Mobile (375px)
```
┌──────┐
│ Card │
└──────┘
┌──────┐
│ Card │
└──────┘
1 column (stacked)
```

---

### 8️⃣ Empty States

#### No Results Found:
```
┌────────────────────────────────┐
│                                │
│           🔍                   │
│                                │
│    No Products Found           │
│                                │
│ Try adjusting your filters     │
│ or search query                │
│                                │
│    [RESET FILTERS]             │
│                                │
└────────────────────────────────┘
```

---

### 9️⃣ Loading States

All pages use Motion (Framer Motion) for smooth entrance:

```
Component appears:
  Opacity: 0 → 1
  Y-position: +20px → 0
  Duration: 600ms
  
Product cards stagger:
  Each card appears 100ms after previous
```

---

### 🔟 Interactive Elements

#### Hover States:
- **Product Cards**: Gold border glow + scale
- **Buttons**: Background color change
- **Links**: Color change to gold
- **Thumbnails**: Border opacity increase

#### Focus States:
- **Inputs**: Gold border
- **Buttons**: Ring outline
- **Links**: Underline

#### Active States:
- **Filter Chips**: Gold background
- **Thumbnails**: Gold border
- **Nav Links**: Gold text

---

## 🎨 Color Usage Map

```
Background:     #0A0A0A (Deep Black)
                ├─ All page backgrounds
                └─ Card backgrounds

Gold:           #FFB800
                ├─ Primary CTAs
                ├─ Active states
                ├─ Badges
                ├─ Borders on hover
                └─ Accents

Gray (Light):   #A1A1AA
                ├─ Body text
                ├─ Descriptions
                └─ Secondary info

Gray (Dark):    #52525B
                ├─ Muted text
                ├─ Placeholders
                └─ Disabled states

Charcoal:       #1A1A1A
                ├─ Card backgrounds
                ├─ Input backgrounds
                └─ Hover states

White:          #FFFFFF
                ├─ Headings
                ├─ Primary text
                └─ Hover state for gold buttons
```

---

## 🚀 User Journey

```
1. Land on Home Page
   ↓
2. See "PRODUCT GALLERY" CTA
   ↓
3. Click to view products
   ↓
4. Arrive at Gallery
   ↓
5. Browse products OR Apply filters
   ↓
6. Click "VIEW DETAILS" on a product
   ↓
7. View full product details
   ↓
8. Browse photos using thumbnails
   ↓
9. Click "WHATSAPP TO ORDER"
   ↓
10. Opens WhatsApp with pre-filled message
    ↓
11. Complete order via WhatsApp
```

---

## 📊 Feature Matrix

| Feature              | Home | Gallery | Detail |
|---------------------|------|---------|--------|
| Product Gallery CTA | ✅   | -       | -      |
| Category Filter     | -    | ✅      | -      |
| Availability Filter | -    | ✅      | -      |
| Search              | -    | ✅      | -      |
| Product Cards       | -    | ✅      | ✅     |
| Multi-Photo Gallery | -    | -       | ✅     |
| Zoom Feature        | -    | -       | ✅     |
| Specifications      | -    | -       | ✅     |
| Features List       | -    | -       | ✅     |
| Similar Products    | -    | -       | ✅     |
| WhatsApp CTA        | ✅   | ✅      | ✅     |
| Local Preview Banner| ✅   | ✅      | ✅     |

---

## 🎯 Key Interactions

### 1. Filter Interaction
```
Click Category Dropdown
  → Dropdown opens
  → Select "Beds"
  → Gallery filters to show only beds
  → Results counter updates
  → "Showing 2 products"
```

### 2. Search Interaction
```
Click Search Bar
  → Cursor appears
  → Type "luxury"
  → Results filter in real-time
  → Counter updates immediately
  → No page refresh
```

### 3. Product Card Interaction
```
Hover over card
  → Gold border glow appears
  → Image scales up slightly
  → Smooth transition
  
Click "VIEW DETAILS"
  → Navigate to /product/:id
  → Page transitions smoothly
  → Product details load
```

### 4. Photo Gallery Interaction
```
View Main Image
  → Hover to see zoom icon
  
Click Thumbnail
  → Main image changes
  → Active thumbnail highlighted
  → Smooth fade transition
  
Click Zoom Icon
  → Modal opens
  → Full-size image displays
  → Click outside to close
```

---

## 💡 Premium Details

1. **Typography Hierarchy**: Clear size differences between headings
2. **Spacing System**: Consistent 8px base unit throughout
3. **Animation Timing**: Synchronized transitions (300ms standard)
4. **Border Radius**: Sharp corners (0px) for modern look
5. **Shadow System**: Subtle shadows on cards and modals
6. **Texture Overlay**: Barely visible grain texture
7. **Icon Consistency**: Lucide React icons throughout
8. **Button Styles**: Two variants (filled and outline)
9. **Chip Design**: Rounded-none, bordered, colored by type
10. **Grid Alignment**: Pixel-perfect card alignment

---

**Built with attention to luxury e-commerce design patterns**
**Ready for local testing and customization**
