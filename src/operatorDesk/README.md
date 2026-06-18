# AlterCraft OperatorDesk

Mobile-first MVP for the AlterCraft contractor execution backend.

## Positioning

OperatorDesk is the ACOS mobile command layer. It is not a generic CRM. It helps the founder/operator control:

- contractor leads
- jobs and site execution
- payment gates
- cash allocation
- material sourcing
- labour deployment
- daily site proof
- disputes
- owner reports

Tagline: You bring the order. AlterCraft manages the backend.

## Routes

The current Vite app exposes OperatorDesk at:

- `/operator-desk/dashboard`
- `/operator-desk/leads`
- `/operator-desk/jobs`
- `/operator-desk/cash`
- `/operator-desk/labour`
- `/operator-desk/materials`
- `/operator-desk/site-reports`
- `/operator-desk/disputes`
- `/operator-desk/reports`
- `/operator-desk/settings`

`/OperatorDesk` redirects to `/operator-desk/dashboard`.

## Data

The MVP uses typed localStorage data under `altercraft-operator-desk-v1`.

Files:

- `types.ts`: data models
- `constants.ts`: service types, stages, buckets, rules
- `seed.ts`: seed jobs, leads, cash, labour, materials, site reports and disputes
- `useOperatorDeskStore.ts`: persistence, import/export, reports and payment-gate helpers
- `components.tsx`: reusable cards, badges, nav and import/export panel

Use Settings -> Export JSON before resetting browser/app data.

## Access Levels

OperatorDesk now uses three access levels in the JSON server:

- `L3 Founder`: full account, team, job, cash and system control.
- `L2 Manager`: can manage workers and daily execution, but cannot create or edit founder/manager control.
- `L1 Worker`: can update assigned work, reports and proof without account controls.

The first account created on the OperatorDesk server becomes `L3 Founder`. Later public signups default to `L1 Worker`; founders and managers should create team accounts from the mobile Team Control screen.

## Local Run

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000/operator-desk/dashboard
```

## Build

```bash
npm run build
```

The app is compatible with the existing GitHub Pages static fallback build.

## Android APK

Capacitor is used for the mobile wrapper. After dependencies and Android project are present:

```bash
npm run build
npx cap sync android
cd android
.\gradlew assembleDebug
```

Expected debug APK:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

## Future Upgrade Notes

- Supabase backend
- authentication and contractor login portal
- vendor database
- labour QR attendance
- WhatsApp update automation
- PDF work order and site report export
- photo/file upload
- Notion sync
- payment reminders
- hosted database and production authentication provider
