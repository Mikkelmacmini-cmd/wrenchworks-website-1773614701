# PRD — AutoTrek Site Build V1

## Objective
Build and ship a production-ready, conversion-focused local-service website for AutoTrek Service Center using Next.js + TypeScript + Tailwind, based on completed strategy/design/content artifacts.

## Inputs
- `BRIEF.md`
- `seo/ATLAS_PLAN.md`
- `content/QUILL_COPY.md`
- `design/MUSE_DIRECTION.md`
- `design/PULSE_INTERACTIONS.md`
- `design/LENS_IMAGERY_PLAN.md`
- `build/FORGE_IMPLEMENTATION_PLAN.md`
- `qa/SENTINEL_QA_CHECKLIST.md`

## Tasks
- [ ] Initialize Next.js app in `projects/autotrek-site/web` with TypeScript + Tailwind.
- [ ] Implement global layout: header, footer, contact bar, sticky mobile CTA (call now).
- [ ] Build homepage sections (hero, trust bar, top services, differentiators, process, reviews, service area, FAQ, final CTA) using Quill copy.
- [ ] Create `/services` index and at least 10 high-priority dynamic service pages with reusable templates and internal links.
- [ ] Create location pages: Littleton (primary) + Highlands Ranch + Englewood + Lakewood + Centennial.
- [ ] Add conversion form scaffold (schedule appointment) with placeholder submit handler and success route `/thank-you`.
- [ ] Implement technical SEO baseline: metadata, sitemap, robots, canonical tags, local business/service schema, breadcrumbs.
- [ ] Apply Muse design tokens and Pulse interaction behaviors (subtle motion, premium feel).
- [ ] Add image placeholders/alt strategy from Lens plan.
- [ ] Add QA pass fixes for a11y/performance/SEO alignment with Sentinel checklist.
- [ ] Build and run checks; ensure app compiles and key pages render.
- [ ] Commit all changes with clear message.

## Acceptance Criteria
- Home, Services, Service Detail, Locations, About, Reviews, Contact, Thank-you pages implemented.
- Mobile-first call CTA present and functional (`tel:(303)328-3356`).
- Core metadata + schema + sitemap + robots included.
- Build succeeds without errors.
- Code committed.
