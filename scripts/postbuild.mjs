import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

const outDir = join(process.cwd(), 'build');
const indexPath = join(outDir, 'index.html');
const notFoundPath = join(outDir, '404.html');
const sitemapPath = join(outDir, 'sitemap.xml');
const spaRoutes = [
  '/gallery',
  '/portfolio',
  '/products',
  '/modular-kitchen',
  '/modular-kitchen-near-me',
  '/modular-kitchen-ghaziabad',
  '/modular-kitchen-noida',
  '/custom-furniture-ghaziabad',
  '/custom-furniture-noida',
  '/custom-furniture-greater-noida',
  '/custom-furniture-maker-near-me',
  '/ai-interior-design-planner',
  '/office-interior-ghaziabad',
  '/office-interior-noida',
  '/wardrobe-design-ghaziabad',
  '/bed-manufacturer-ghaziabad',
  '/shoe-rack-design',
  '/kitchen',
  '/designer-beds',
  '/beds',
  '/flush-doors',
  '/doors',
  '/wardrobes',
  '/storage',
  '/office-commercial',
  '/office',
  '/warranty-quality',
  '/warranty',
  '/about',
  '/contact',
  '/get-quote',
  '/ai-planner',
  '/ai-planner/start',
  '/ai-planner/upload',
  '/ai-planner/dimensions',
  '/ai-planner/requirements',
  '/ai-planner/confirm',
  '/ai-planner/submitted',
  '/my-projects',
  '/admin',
  '/admin/login',
  '/admin/signup',
  '/admin/reset-password',
  '/admin/forbidden',
  '/admin/leads',
  '/admin/design-requests',
  '/admin/production',
  '/admin/finances',
  '/admin/marketing',
  '/admin/hr',
  '/admin/marketplace',
  '/admin/reports',
  '/admin/users',
  '/admin/backend-guide',
];

if (!existsSync(indexPath)) {
  throw new Error(`Missing build output: ${indexPath}`);
}

copyFileSync(indexPath, notFoundPath);

const sitemapRoutes = existsSync(sitemapPath)
  ? Array.from(readFileSync(sitemapPath, 'utf8').matchAll(/<loc>https:\/\/www\.altercraft\.in([^<]+)<\/loc>/g))
      .map((match) => match[1])
      .filter((route) => !route.includes('/blog/'))
  : [];

const writeRouteCopy = (route) => {
  const cleanRoute = route.replace(/\/$/, '');
  if (!cleanRoute || cleanRoute.includes('.')) return false;
  const routeIndexPath = join(outDir, ...cleanRoute.replace(/^\/+/, '').split('/'), 'index.html');
  if (existsSync(routeIndexPath)) return false;
  mkdirSync(dirname(routeIndexPath), { recursive: true });
  copyFileSync(indexPath, routeIndexPath);
  return true;
};

const routeCount = new Set([...spaRoutes, ...sitemapRoutes]).values();
let copiedRoutes = 0;
for (const route of routeCount) {
  if (writeRouteCopy(route)) copiedRoutes += 1;
}

console.log(`Created build/404.html and ${copiedRoutes} SPA route fallback pages for GitHub Pages.`);
