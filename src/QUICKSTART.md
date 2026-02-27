# Quick Start Guide - ALTER CRAFT Gallery Extension

## 🚀 What Was Added

Your ALTER CRAFT website now includes:

1. **"Product Gallery" CTA** on the home page (next to WhatsApp button)
2. **Product Gallery Page** (`/gallery`) with:
   - 12 sample products across all categories
   - Category filter dropdown
   - Availability filters (All, Rent+Buy, Buy Only, Rent Only)
   - Search bar
   - Responsive product cards with hover effects
3. **Product Detail Pages** (`/product/:id`) with:
   - Multi-photo gallery with zoom
   - Thumbnail navigation
   - Pricing and rental information
   - Specifications and features
   - WhatsApp ordering integration
   - Similar products section

## 🎨 Design Features

- ✅ Matches existing luxury black + gold theme
- ✅ Premium poster-inspired aesthetic
- ✅ Smooth animations and transitions
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Local preview banner (top of page)

## 🛠️ Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
```
http://localhost:5173
```

## 📍 Navigation

- **Home**: `/` - Original poster-style homepage
- **Gallery**: `/gallery` - Product catalog with filters
- **Product**: `/product/:id` - Individual product pages

## 🔧 How to Customize

### Add New Products

Edit `/data/products.ts` and add new product objects:

```typescript
{
  id: 'new-product',
  code: 'NEW-01',
  name: 'Product Name',
  category: 'Beds', // Choose from existing categories
  shortDescription: 'Brief description',
  prices: { mrp: 50000, offer: 40000, save: 10000 },
  rent: { monthly: 3000, deposit: 12000 },
  deliveryDays: 7,
  materials: 'Material info',
  dimensions: 'L × W × H',
  images: ['url1', 'url2', 'url3'],
  features: ['Feature 1', 'Feature 2'],
  availability: ['rent', 'buy'], // or just ['buy'] or ['rent']
}
```

### Update Product Images

Replace the Unsplash URLs in `/data/products.ts` with your actual product photos:

```typescript
images: [
  'https://your-cdn.com/product-image-1.jpg',
  'https://your-cdn.com/product-image-2.jpg',
  // ... more images
],
```

### Add New Categories

1. Update the `category` type in `/data/products.ts`
2. Add the new category to the `categories` array in `/pages/Gallery.tsx`

### Change WhatsApp Number

Find and replace `918826436093` with your number in:
- `/components/HeroPoster.tsx`
- `/pages/Gallery.tsx`
- `/pages/ProductDetail.tsx`
- `/pages/Home.tsx`

## 🧪 Testing Checklist

Before deploying, test these features locally:

- [ ] Home page loads with both CTAs (WhatsApp + Product Gallery)
- [ ] Clicking "Product Gallery" navigates to `/gallery`
- [ ] Gallery page shows all 12 sample products
- [ ] Category filter works (try "Beds", "Wardrobes", etc.)
- [ ] Availability filters work (All, Rent+Buy, Buy Only, Rent Only)
- [ ] Search bar filters products by name/code/description
- [ ] Clicking "View Details" opens product detail page
- [ ] Product detail page shows all images
- [ ] Thumbnail navigation works
- [ ] Zoom dialog opens on hover + click
- [ ] "WhatsApp to Order" button opens WhatsApp with pre-filled message
- [ ] "Back to Gallery" button returns to gallery
- [ ] Similar products section shows related items
- [ ] All pages are responsive (test mobile view)

## 📱 Mobile Testing

Test on different screen sizes:
- Mobile: 375px width
- Tablet: 768px width
- Desktop: 1440px width

Check that:
- Grid layouts adjust properly
- Filters are accessible
- CTAs are easy to tap
- Images scale correctly

## 🎯 Next Steps

1. **Replace Sample Products**: Update `/data/products.ts` with your real inventory
2. **Add Real Images**: Replace Unsplash URLs with your product photos
3. **Update Phone Number**: Change WhatsApp number to yours
4. **Test Everything**: Go through the testing checklist above
5. **Remove Local Banner**: When ready to deploy, remove the "Local Preview" banner from all pages

## 🚫 Do NOT Push to GitHub Yet

This is configured for local preview only. Test everything locally first before considering deployment.

## 💡 Tips

- Keep product codes unique (e.g., BED-01, WAR-02, etc.)
- Use high-quality images (recommended: 1200px wide minimum)
- Write clear, SEO-friendly product descriptions
- Test WhatsApp links on mobile to ensure they work
- Check console for any errors during testing

## 📞 Support

If you need help:
- Check the main README.md for detailed documentation
- Inspect browser console for errors
- Verify all imports are correct
- Make sure `npm install` completed successfully

---

**Happy Building! 🎉**

The ALTER CRAFT team is ready to showcase luxury furniture with style.
