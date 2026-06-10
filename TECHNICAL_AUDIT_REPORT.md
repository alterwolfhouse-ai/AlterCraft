# AlterCraft Technical Audit Report

Date: 2026-06-10
Project: AlterCraft website / AI planner / ACOS admin shell
Audit role: Senior project engineering review

Remediation status:

- First remediation pass started after this audit.
- Dependency advisories were addressed and `npm audit --audit-level=high` now reports 0 vulnerabilities.
- Production admin bypass via localStorage was mitigated by disabling local demo sessions outside localhost.
- Customer-facing admin upload CTA was removed from the project view.
- Admin/private route fallback generation was reduced and crawler disallow rules were added.
- Heavy route scroll reset was replaced with a one-shot reset.

## Executive Summary

The AlterCraft site builds successfully and has a strong marketing/SEO foundation, but it is still a static frontend application. The current codebase should be treated as a high-quality prototype for the AI planner and ACOS admin product, not as a secure production web app for real customer/project/admin data.

The biggest risks are:

1. Admin access is protected only by client-side localStorage state and can be bypassed in the browser.
2. AI planner requests and customer/admin project records are stored only in localStorage, so leads are not durable, not private, and not operationally reliable.
3. `npm audit` reports high-severity vulnerabilities in the current dependency tree, including direct advisories for `react-router` and `vite`.
4. There are no lint, typecheck, unit test, E2E, or audit gates in CI.
5. Motion and scroll-reset code is likely contributing to UI jank and slow navigation.

## Checks Performed

- Reviewed project structure, routing, auth, AI planner, admin shell, SEO head management, build script, deployment workflow, and public assets.
- Ran `npm.cmd run build`: passed.
- Ran `npm.cmd audit --json`: failed with 6 vulnerabilities: 5 high, 1 moderate.
- Ran `npm.cmd outdated --json`: many packages are behind; `react-router` current 7.13.1, wanted/latest 7.17.0; `vite` current 6.3.5.
- Scanned for risky patterns: hardcoded credentials, localStorage auth/session data, dynamic image URLs, `dangerouslySetInnerHTML`, global mutation observers, admin route exposure, missing security headers.

## P0 / Release Blockers

### 1. Client-side admin auth can be bypassed

Evidence:

- `src/contexts/AuthContext.tsx:27-29` stores the session key and hardcoded demo credentials.
- `src/contexts/AuthContext.tsx:38-55` reads/writes the entire user session from localStorage.
- `src/contexts/AuthContext.tsx:61-75` verifies credentials only in frontend code, and only blocks the login form on production hostnames.
- `src/routes.tsx:152-167` trusts `useAuth()` client state for admin route access.
- `src/routes.tsx:343-404` exposes admin routes behind this client-only guard.

Risk:

Even though production login returns "backend not connected", a user can manually write a fake admin user into `localStorage` and pass `AdminOnly`. Any future real admin data rendered by this frontend would be exposed. Client route guards are UX only, not security.

Recommendation:

- Remove production admin functionality until server auth exists, or render a hard production-disabled screen for every `/admin/*` route.
- Implement backend auth with httpOnly Secure SameSite cookies, CSRF protection, server-side RBAC, audit logs, account lockouts, and rate limiting.
- Never trust localStorage for admin session or role.

### 2. AI planner and lead data are not real backend data

Evidence:

- `src/pages/AIPlanner.tsx:44-47` defines localStorage keys for draft/projects/latest request.
- `src/pages/AIPlanner.tsx:65-100` reads and writes project records only in localStorage.
- `src/pages/AIPlanner.tsx:430-476` creates project, user, measurements, uploads, and lead records in the browser.
- `src/pages/AIPlanner.tsx:541-563` lists all locally available projects with no user identity boundary.
- `src/pages/AIPlanner.tsx:587-600` stores customer concept selections only in localStorage.

Risk:

Customer enquiries can be lost by clearing browser data, changing device, incognito browsing, or using another phone. Admin cannot see customer submissions from another device. This is not ready for paid ads or real lead capture.

Recommendation:

- Build a backend lead API and database before Meta ads scale.
- Persist user, project, measurement, upload, concept, and lead records server-side.
- Add file storage for photos and sketches.
- Send WhatsApp/email notifications to AlterCraft on new submissions.
- Add spam controls: server validation, rate limiting, honeypot, and optionally Turnstile/reCAPTCHA.

### 3. Customer project page exposes admin action

Evidence:

- `src/pages/AIPlanner.tsx:659-664` shows an "Open Admin Upload" CTA from the customer project page when no concepts exist.

Risk:

This leaks internal workflow to customers and drives public users toward `/admin/projects/:id`. Combined with client-only auth, this reinforces the wrong trust model.

Recommendation:

- Remove all admin links from customer views.
- Customer pages should show "Your previews are being prepared" and a WhatsApp support CTA only.
- Admin upload must exist only inside authenticated server-protected admin routes.

### 4. Dependency vulnerabilities in current install

Evidence:

- `npm audit --json` reported 6 total vulnerabilities: 5 high, 1 moderate.
- Direct affected packages include `react-router@7.13.1` and `vite@6.3.5`.
- Transitive advisories include `lodash`, `picomatch`, `postcss`, and `rollup`.
- `package.json:34`, `package.json:39`, `package.json:46`, and `package.json:49` use wildcard dependency ranges for `clsx`, `motion`, `react-router`, and `tailwind-merge`.

Risk:

Security advisories include RCE/DoS/XSS/open redirect classes in dependency reports. Some Vite issues are dev-server focused, but they still matter because development runs on Windows and local files can be exposed during dev-server use.

Recommendation:

- Pin dependency ranges instead of `*`.
- Upgrade `react-router` to at least the latest patched 7.x.
- Upgrade Vite to a patched version compatible with the current stack.
- Run `npm audit` in CI and fail on high severity.
- Add Dependabot or Renovate.

## P1 / High Priority Engineering Bugs

### 5. Forms do not create durable leads

Evidence:

- `src/components/elegant/QuoteForm.tsx:27-35` only opens WhatsApp with a prefilled message.
- `src/pages/InfoPages.tsx:193-199` tells users the form opens WhatsApp.

Risk:

If the user does not press Send in WhatsApp, the business receives nothing. There is no server-side lead record, campaign attribution, duplicate detection, or follow-up pipeline.

Recommendation:

- On submit, first create a backend lead record, then open WhatsApp.
- Store UTM parameters, landing page, service interest, city, phone, and timestamp.
- Add server-side conversion tracking for Meta/Google where legally appropriate.

### 6. Heavy scroll reset workaround can hurt performance

Evidence:

- `src/App.tsx:7-36` resets page scroll repeatedly every 50ms for 1.4 seconds after route change.
- `src/App.tsx:55-62` subscribes globally to router changes and schedules the repeated reset.

Risk:

This can fight rendering, browser scroll restoration, and mobile compositing. It likely contributes to perceived slowness and jank after navigation.

Recommendation:

- Replace with a route-aware `ScrollToTop` component that calls `window.scrollTo(0, 0)` once in a layout effect when pathname changes.
- Use React Router scroll restoration patterns where possible.
- Avoid repeated intervals except for confirmed browser bugs.

### 7. Global motion layer scans the whole DOM

Evidence:

- `src/components/visual/CreativeMotion.tsx:163-174` queries broad selectors across the document.
- `src/components/visual/CreativeMotion.tsx:179-190` uses a `MutationObserver` on `document.body` subtree and rescans on DOM changes.
- `src/components/visual/CreativeMotion.tsx:129-160` attaches magnetic pointer handlers to many elements.

Risk:

As pages and blog lists grow, DOM scanning plus magnetic handlers can cause low FPS, especially on slower laptops and mobile-like devices.

Recommendation:

- Scope motion to the current page root instead of `document.body`.
- Disable magnetic handlers by default, or apply only to hero CTA buttons.
- Add an explicit performance mode for low-end devices.
- Respect `prefers-reduced-motion` for all tilt/parallax sections, not only cursor.

### 8. No typecheck, lint, tests, or smoke checks

Evidence:

- `package.json:57-60` only defines `dev` and `build`.
- No `tsconfig.json` was found at the project root.
- `.github/workflows/deploy-gh-pages.yml:23-26` runs `npm ci` and `npm run build`, but no typecheck, lint, tests, audit, or route smoke test.

Risk:

Vite/SWC can transpile TypeScript without full type safety. UI regressions, route breaks, SEO metadata errors, and localStorage/admin flow bugs can ship unnoticed.

Recommendation:

- Add `tsconfig.json`.
- Add scripts: `typecheck`, `lint`, `test`, `test:e2e`, `audit`.
- Add Playwright smoke checks for home, service pages, AI planner, mobile nav, and lead submission.
- Gate deploy on these checks.

## P2 / Medium Priority Issues

### 9. Admin/static routes are published and robots allows almost everything

Evidence:

- `scripts/postbuild.mjs:48-62` creates static fallback pages for `/admin/*`.
- `public/robots.txt:1-4` allows all routes except `/cart/`.

Risk:

Admin and project routes are publicly crawlable/discoverable even if they are not in the sitemap. This is not a direct data leak today, but it is poor security hygiene.

Recommendation:

- Add `Disallow: /admin/`, `Disallow: /my-projects/`, and optionally `Disallow: /ai-planner/submitted`.
- Add `noindex` metadata to admin/customer-private pages.
- Do not generate static route copies for admin pages until server auth exists.

### 10. Arbitrary concept image URLs are rendered directly

Evidence:

- `src/pages/AIPlanner.tsx:859-864` allows an admin-entered image URL.
- `src/components/aiPlanner/PlannerComponents.tsx:191-195` renders `concept.imageUrl` directly in an `img`.

Risk:

React prevents script execution here, but arbitrary images can leak visitor IP/user agent to third-party hosts, load slow assets, or break layout. If future code changes this into richer HTML/embed support, XSS risk increases.

Recommendation:

- Validate URLs server-side.
- Allow only trusted image storage/CDN domains.
- Proxy or store uploaded concept images.
- Add image loading limits, dimensions, placeholders, and error handling.

### 11. `dangerouslySetInnerHTML` exists in chart styling utility

Evidence:

- `src/components/ui/chart.tsx:81-100` injects CSS via `dangerouslySetInnerHTML`.

Risk:

This is likely safe while chart config is developer-controlled. It becomes unsafe if chart color keys or values come from users/API without sanitization.

Recommendation:

- Keep chart config internal only.
- Sanitize CSS variable keys and color values if any chart config becomes data-driven.

### 12. SEO metadata is mostly client-mutated in the SPA

Evidence:

- `src/components/seo/SEOHead.tsx:30-45` updates title/meta/canonical/json-ld only after React runs.
- `scripts/postbuild.mjs:77-84` copies the same SPA `index.html` for route fallbacks.

Risk:

Google can execute JavaScript, but initial HTML for local SEO routes is not fully prerendered per page. This can delay indexing and weaken previews for crawlers/social tools that do not execute JS.

Recommendation:

- Generate static HTML per SEO route with correct title, description, canonical, and JSON-LD at build time.
- At minimum, add a prerender step for high-intent pages and blogs.

### 13. Large global CSS and route-wide styling

Evidence:

- `src/main.tsx:4-6` imports global CSS, elegant site CSS, and ACOS CSS for the entire app.
- Build output reports main CSS around 187 KB before gzip.

Risk:

Admin styles, planner styles, and marketing styles are all loaded globally. This increases CSS parse cost and makes accidental style conflicts more likely.

Recommendation:

- Split ACOS/admin CSS from the public website bundle.
- Scope planner/admin styles under route-specific wrappers.
- Remove unused legacy styles from `src/styles/elegant-site.css`.

### 14. Large image assets should be optimized further

Evidence:

- `public/images/blog/cnc-interiors-cover.png` is about 2031 KB.
- `public/images/blog/wardrobe-storage-cover.png` is about 1877 KB.

Risk:

Large PNG images hurt mobile LCP and bandwidth, especially for blog/social traffic.

Recommendation:

- Convert large PNGs to WebP/AVIF.
- Use responsive image sizes and `loading="lazy"` below the fold.
- Keep hero/LCP images preload-aware and compressed.

### 15. Deployment workflow uses Node 20 actions and broad write permission

Evidence:

- `.github/workflows/deploy-gh-pages.yml:9-11` grants `contents: write`.
- `.github/workflows/deploy-gh-pages.yml:18-21` uses Node 20.
- GitHub Pages runs currently warn that Node 20 actions are deprecated.

Risk:

The deploy still works, but future GitHub runner changes can break deploys. Broad write permission is needed for `gh-pages`, but the workflow should be intentionally constrained.

Recommendation:

- Move to Node 24 when action support is ready.
- Pin action major versions and monitor deprecation notices.
- Keep permissions minimal; consider modern Pages deployment actions if moving away from `gh-pages`.

## P3 / Enhancement Suggestions

### Backend and data model

- Implement real backend endpoints for planner requests, leads, project details, status updates, concept uploads, and customer selection.
- Use a database schema matching the current TypeScript entities, but add ownership, audit fields, and soft-delete fields.
- Use signed upload URLs for customer photos.
- Add per-lead source attribution from UTM, Google Search, Meta campaigns, and WhatsApp click location.

### Security hardening

- Add CSP, Referrer-Policy, Permissions-Policy, X-Content-Type-Options, and frame controls through a hosting layer that supports headers.
- Add server-side validation for phone, email, dimensions, budget, city, and image URLs.
- Add rate limits to quote and AI planner submissions.
- Keep PII out of static files and client-only mock datasets before production.

### CI/CD

- Add CI steps: `npm ci`, `npm audit --audit-level=high`, `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build`.
- Add Playwright route smoke tests for:
  - `/`
  - `/modular-kitchen-near-me`
  - `/modular-kitchen-noida`
  - `/ai-planner/start`
  - `/contact`
  - mobile nav open/close
- Add a sitemap validation step that checks all sitemap URLs have a generated fallback page.

### Performance

- Replace interval-based scroll reset.
- Reduce global DOM observers.
- Move ACOS/admin CSS and code behind stronger route boundaries.
- Optimize large images and add responsive image markup.
- Audit unused Radix packages and remove unused dependencies.

### SEO and content operations

- Generate static HTML for local SEO pages and high-value blogs.
- Add an internal content registry so blog cards, sitemap entries, and public blog pages are generated from one source of truth.
- Add `lastmod` to sitemap entries.
- Keep admin/private pages out of crawlers.

## Positive Notes

- Production build passes.
- Key business details are centralized in `siteDetails`.
- The AI planner entity model is a good starting point for backend migration.
- Local service pages are data-driven, which is good for SEO scaling.
- React escaping prevents ordinary user-entered text from becoming immediate XSS in the current planner/admin UI.
- The code already documents that backend security is required in `ACOS_BACKEND.md`; the next step is enforcing that boundary in production behavior.

## Recommended Next Sprint Order

1. Upgrade vulnerable dependencies and remove wildcard dependency ranges.
2. Disable or hide production admin routes until backend auth exists.
3. Build the real lead submission API and database.
4. Remove customer-facing admin upload links.
5. Replace route scroll reset and reduce global motion observers.
6. Add typecheck, lint, audit, and Playwright smoke tests to CI.
7. Add robots/noindex protection for admin and private project routes.
8. Convert large PNG images to WebP/AVIF and add responsive image handling.
9. Start prerender/static metadata generation for local SEO pages.
