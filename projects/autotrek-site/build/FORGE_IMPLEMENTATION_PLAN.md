# AutoTrek Service Center — Forge Implementation Plan

## Project Goal
Build a fast, conversion-first local service marketing site for **AutoTrek Service Center** that:
- Drives phone calls and appointment requests from local search traffic.
- Communicates trust quickly (warranty, NAPA status, reviews, local expertise).
- Scales cleanly for service pages and city-targeted SEO pages.
- Ships with a solid technical SEO baseline and deployment-ready checklist.

---

## 1) Recommended Stack (Assumed)
**Framework:** Next.js 14+ (App Router)  
**Language:** TypeScript  
**Styling:** Tailwind CSS + design tokens  
**Content pattern:** Hybrid static + server components (mostly static for speed)  
**Forms:** Server action or API route with provider adapter (Resend/SMTP/Webhook; TBD)  
**Analytics:** GA4 + Google Tag Manager scaffold (IDs pending)  
**Hosting:** Vercel (preferred for fastest Next.js deploy workflow)

### Why this stack
- Excellent Core Web Vitals potential.
- Fast production deployment and preview workflows.
- Clean SEO controls (metadata API, sitemaps, robots, structured data).
- Easy reusable component architecture for future growth.

---

## 2) Conversion-First Site Architecture

## Primary conversion objective
1. **Tap/call now** (mobile-first sticky CTA)
2. **Submit appointment request form**

## Secondary conversion objective
- Direction intent (map + address)
- Trust engagement (reviews, warranty, certifications)

## Sitemap (MVP + scalable)

### Core pages (MVP)
- `/` Home
- `/services` Service index
- `/services/[slug]` Individual service pages (22 priority services)
- `/about` About / why choose us
- `/reviews` Reviews/social proof hub
- `/contact` Contact + hours + map + appointment form
- `/locations/littleton-co` Primary local landing page

### SEO expansion pages (phase 2)
- `/locations/highlands-ranch-co`
- `/locations/englewood-co`
- `/locations/lakewood-co`
- `/locations/centennial-co`
- `/blog` (optional content engine)
- `/blog/[slug]`

### Utility/required pages
- `/thank-you` Post-form conversion page
- `/privacy-policy`
- `/terms` (optional if required)
- `/sitemap.xml` (generated)
- `/robots.txt` (generated)

---

## 3) Information Hierarchy (Homepage)
Above-the-fold must answer in <5 seconds:
1. Who are you?
2. Where are you?
3. Can I trust you?
4. What should I do next?

## Home section order
1. **Hero:** headline + subheadline + dual CTAs (Call / Schedule)
2. **Trust bar:** 36/36 warranty, NAPA badge, review rating snippet
3. **Top services grid:** highest-intent services
4. **Why AutoTrek:** differentiators, dealer alternative positioning
5. **Process section:** simple 3-step “Book → Diagnose → Repair”
6. **Review highlights:** pulled/curated testimonials + link to Google reviews
7. **Service area:** Littleton + nearby cities
8. **FAQ:** conversion objections (cost, turnaround, warranty, EV expertise)
9. **Final CTA band:** phone + schedule form entry

---

## 4) Reusable Component System
Build once, use everywhere.

## Global layout components
- `SiteHeader`
- `PrimaryNav`
- `StickyMobileCTA`
- `SiteFooter`
- `ContactBar` (phone/hours/address)

## Conversion components
- `HeroSplit`
- `PrimaryCTAGroup`
- `ClickToCallButton`
- `AppointmentForm`
- `TrustBadges`
- `ReviewCard`
- `ReviewCarousel`
- `ServiceCard`
- `ServiceGrid`
- `LocationCoverage`
- `FAQAccordion`
- `FinalCTABand`

## SEO/content components
- `SeoIntroBlock` (location/service copy scaffolding)
- `SchemaInjector`
- `Breadcrumbs`
- `InternalLinkCluster`

## Data-driven rendering
Use typed content collections in `/content` to avoid hardcoding page blocks:
- `services.ts` (22 service definitions)
- `locations.ts` (primary + secondary city details)
- `site.ts` (NAP, hours, trust claims, CTAs)
- `faqs.ts`

This allows rapid expansion without changing core templates.

---

## 5) Content Plan (Launch)

## Core messaging pillars
- Trusted local shop in Littleton
- Dealer-quality care without dealer hassle/cost framing
- Strong warranty confidence (36mo/36k)
- Capability across domestic, foreign, EV/hybrid

## Priority service page template (all 22)
Each service page should include:
- Intent-matched headline
- Service problem symptoms
- What’s included in diagnosis/repair
- Why local drivers choose AutoTrek for this service
- FAQs specific to service
- CTA blocks (call + schedule)
- Internal links to related services + location page

## City page template (local SEO)
For each city page:
- Unique city intro and driving-distance relevance
- Service highlights for that area
- Trust + review proof
- NAP consistency
- Local FAQ and CTA

---

## 6) Technical SEO Baseline

## On-page fundamentals
- Unique title/meta per page with city + service intent
- Single H1 per page
- Semantic heading hierarchy (H2/H3)
- Optimized internal linking (service hub -> service details -> contact)
- Canonical tags via Next metadata

## Structured data (JSON-LD)
Implement:
- `AutoRepair` or `LocalBusiness` schema (homepage/contact)
- `Service` schema (service pages)
- `FAQPage` schema (FAQ blocks)
- `BreadcrumbList` schema
- `Review` aggregate only if policy-compliant and source-backed

## Local SEO essentials
- Consistent NAP across site
- Embedded map and service area mentions
- City-specific landing pages with non-duplicate copy
- Prominent review link: https://share.google/aglkPp86GrLFRfT7V

## Crawl/index controls
- Generate dynamic `sitemap.xml`
- Clean `robots.txt`
- Remove/redirect thin placeholder routes
- 301 policy for future slug changes

---

## 7) Performance Baseline (Core Web Vitals)

## Targets
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1

## Implementation choices
- Use `next/image` for all imagery/logo assets
- Prefer static rendering for marketing pages
- Avoid heavy client-side JS on initial load
- Lazy-load non-critical sections (reviews carousel/maps if needed)
- Font optimization via local/self-hosted or Next font loader
- Compression + caching headers via platform defaults

---

## 8) Accessibility + UX Baseline
- WCAG-friendly color contrast (red/green usage with sufficient contrast)
- Keyboard navigable forms and nav
- Clear focus states
- Alt text for trust badges/images
- Click-to-call accessible labels (screen reader friendly)
- Form validation with clear inline errors and success states

---

## 9) Lead Capture + Tracking Plan

## CTA behavior
- Persistent phone CTA on mobile
- Schedule form in hero + contact + final CTA sections

## Form fields (MVP)
- Name
- Phone
- Email (optional if phone present)
- Vehicle year/make/model (optional)
- Requested service
- Preferred day/time
- Message

## Lead handling
- Route submissions to destination email (TBD)
- Save lightweight server log for diagnostics
- Redirect to `/thank-you` after successful submission

## Analytics events (when IDs provided)
- `phone_click`
- `form_start`
- `form_submit`
- `thank_you_view`
- `direction_click`

---

## 10) Suggested Project Structure

```txt
/app
  /(marketing)
    page.tsx
    services/page.tsx
    services/[slug]/page.tsx
    locations/littleton-co/page.tsx
    locations/[slug]/page.tsx
    about/page.tsx
    reviews/page.tsx
    contact/page.tsx
    thank-you/page.tsx
  /api
    lead/route.ts
  sitemap.ts
  robots.ts
/components
  layout/
  sections/
  seo/
  ui/
/content
  services.ts
  locations.ts
  site.ts
  faqs.ts
/lib
  seo.ts
  schema.ts
  analytics.ts
  validation.ts
/public
  /images
  /icons
```

---

## 11) Build Phases & Milestones

## Phase 0 — Discovery lock (0.5 day)
- Confirm stack and deployment owner
- Confirm lead destination email + analytics IDs
- Confirm domain access and launch date target

## Phase 1 — Foundation (1 day)
- Initialize Next.js + Tailwind + TypeScript
- Add global layout, theme tokens, typography
- Configure metadata defaults, sitemap, robots
- Add base structured data utilities

## Phase 2 — Core conversion pages (1.5–2 days)
- Build Home, Services index, Contact, About, Reviews
- Implement sticky mobile CTA + appointment form
- Wire call links/sitewide conversion actions

## Phase 3 — Programmatic service pages (1.5–2 days)
- Data model for 22 services
- Build reusable service template
- Generate all service routes
- Add FAQ + schema per service page

## Phase 4 — Local SEO pages (1 day)
- Build Littleton primary city page
- Add secondary city templates (4 pages)
- Internal links between services and city pages

## Phase 5 — QA + performance + launch (1 day)
- Lighthouse optimization pass
- Accessibility QA pass
- Metadata/schema validation
- Form and analytics event testing
- Production deploy + smoke test

Estimated total: **5.5–7 days** depending on copy approval speed.

---

## 12) Deployment Checklist

## Pre-deploy
- [ ] Domain and DNS access confirmed
- [ ] Environment variables configured
- [ ] Lead destination email set
- [ ] Tracking IDs set (GA4/GTM)
- [ ] Favicon/logo and OG image finalized

## QA checks
- [ ] All nav and CTA links valid
- [ ] Phone CTA dialable on mobile
- [ ] Form submits and routes correctly
- [ ] Thank-you page conversion event fires
- [ ] Sitemap/robots reachable
- [ ] No 404/500 on core routes
- [ ] Basic schema validation passes
- [ ] Lighthouse scores acceptable on home + service page

## Launch day
- [ ] Production deployment green
- [ ] Search Console property connected
- [ ] Submit sitemap
- [ ] Manual smoke test on iOS/Android/desktop
- [ ] Verify indexability and canonical tags

## Post-launch (first 14 days)
- [ ] Monitor form delivery reliability
- [ ] Monitor event tracking
- [ ] Fix crawl/index coverage issues
- [ ] Add first 2–4 blog/FAQ support articles (optional)

---

## 13) Known Open Inputs (Non-blocking for plan)
1. Final booking destination (call-first is default until URL exists)
2. Lead notification email destination
3. Analytics/tag IDs
4. Hosting/domain credentials
5. Final copy polish and brand imagery set

---

## 14) Immediate Next Action
Start implementation with **Phase 1 Foundation** and in parallel draft launch copy for:
- Homepage hero and trust sections
- Top 8 highest-intent service pages first (then remaining 14)
- Littleton location page

This sequencing gets conversion-ready pages live fastest while preserving SEO scalability.
