# Final Sentinel Fix — Service Title Duplication

Date: 2026-03-10 (MDT)

## Issue
Service detail pages were outputting duplicated brand text in `<title>` because:
- root layout uses `title.template: "%s | AutoTrek Service Center"`, and
- service detail `generateMetadata()` was already providing brand-inclusive `seoTitle` values.

Resulting pattern: `... | AutoTrek Service Center | AutoTrek Service Center`.

## Fix Applied
Updated `src/app/services/[slug]/page.tsx` metadata to use **absolute page titles** so the layout template is not re-applied on service detail pages.

Changes:
- Not-found metadata title:
  - from `title: "Service Not Found | AutoTrek Service Center"`
  - to `title: { absolute: "Service Not Found | AutoTrek Service Center" }`
- Service detail metadata title:
  - from `title: service.seoTitle`
  - to `title: { absolute: service.seoTitle }`

## Verification
- Ran: `npm run build` ✅ (successful production build)
- Checked generated output in `.next/server/app/services/vehicle-maintenance.html`:
  - `<title>Vehicle Maintenance in Littleton, CO | AutoTrek Service Center</title>`
  - Brand appears exactly once.

Status: **Resolved**.
