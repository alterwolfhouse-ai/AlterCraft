# AlterCraft OS backend handoff

ACOS is currently implemented as a protected frontend shell for the existing Vite/React site.
Because the public website is deployed as a static GitHub Pages app, real security must be added
through a backend before ACOS stores live business data.

## Required backend services

- Node.js/Express or equivalent API server.
- PostgreSQL with migrations for users, roles, leads, quotes, orders, finance entries, marketing posts, HR records, inventory, marketplace products and audit logs.
- Password hashing with Argon2id or bcrypt plus per-password salt.
- JWT access/session tokens stored in `httpOnly`, `Secure`, `SameSite` cookies.
- CSRF protection for all state-changing requests.
- Rate limiting on auth and write endpoints.
- Server-side RBAC checks for every API route.

## Roles

- `admin`
- `sales`
- `production`
- `finance`
- `marketing`
- `hr`

Only `admin` can access the full ACOS dashboard. Module-level endpoints should additionally check the relevant role.

## Minimum endpoints

- `POST /auth/login`
- `POST /auth/logout`
- `POST /auth/signup-request`
- `POST /auth/verify-code`
- `POST /auth/reset-password`
- `GET /auth/me`
- `GET/POST/PATCH/DELETE /users`
- `GET/POST/PATCH/DELETE /leads`
- `GET/POST/PATCH/DELETE /projects`
- `GET/POST/PATCH/DELETE /orders`
- `GET/POST/PATCH/DELETE /finance`
- `GET/POST/PATCH/DELETE /marketing`
- `GET/POST/PATCH/DELETE /hr`
- `GET/POST/PATCH/DELETE /marketplace`
- `GET /reports`
- `GET /audit-log`

## Frontend integration points

- Replace the local-only `signIn` implementation in `src/contexts/AuthContext.tsx` with backend calls to `/auth/login` and `/auth/me`.
- Keep the ACOS navigation hidden unless `/auth/me` returns an enabled user with `role: "admin"`.
- Replace the static module rows in `src/pages/ACOS.tsx` with service calls from a future `src/services/acosApi.ts`.
- Keep all server checks on the backend. React route guards are UX helpers, not security boundaries.
