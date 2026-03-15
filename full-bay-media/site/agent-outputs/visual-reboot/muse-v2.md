# AutoTrek Visual Reboot v2 — "Precision Hospitality" System

## 0) Intent
Create a **distinctly new** direction from the current site: less “local shop brochure,” more **premium service lounge + technical authority**.

Positioning feel:
- **Luxury-adjacent, not luxury-priced**
- High trust, high clarity, high control
- Calm confidence (no clutter, no gimmicks)

---

## 1) New Design System (Completely Different Look)

## 1.1 Art Direction
**Theme:** Precision Hospitality  
**Visual cues:** dark graphite foundation, warm metal accents, soft lighting gradients, strong whitespace, editorial typography.

Avoid:
- Bright primary red as dominant brand color
- Dense card grids with equal visual weight
- Generic “auto repair template” icon rows

Use instead:
- Deep neutral background + elevated light cards
- Gold/amber accent for premium trust cues
- Strong photographic crops with intentional overlays

## 1.2 Color Tokens
```css
/* Neutrals */
--bg: #0B0F14;            /* page base */
--surface: #121821;       /* elevated sections */
--surface-2: #1A2330;     /* cards */
--ink: #EAF0F6;           /* primary text on dark */
--muted: #A9B4C2;         /* secondary text */

/* Accents */
--accent: #C89B5E;        /* premium bronze */
--accent-2: #E7CFA8;      /* highlight */
--success: #43B581;       /* status only */
--danger: #E85D5D;        /* urgent only */

/* Light mode utility surface for forms/sections */
--paper: #F8FAFC;
--ink-dark: #0F1723;
```

## 1.3 Typography System
- **Display:** `"Manrope"` or `"Sora"` (700/800)
- **Body/UI:** `"Inter"` (400/500/600)

Type scale:
- Display XL: 64/68
- Display L: 52/58
- H1: 44/52
- H2: 34/42
- H3: 26/34
- Body L: 19/30
- Body: 16/27
- Meta: 13/20

Rules:
- Max 2 fonts
- Headlines tighter tracking (`-0.02em`)
- Body max width 70ch

## 1.4 Spacing + Layout Grid
8pt system with larger premium rhythm:
- 8, 12, 16, 24, 32, 48, 64, 96, 128

Container:
- `max-w-[1200px]` desktop
- Section padding: `py-24 md:py-28`
- Hero: `pt-32 pb-24 md:pt-40 md:pb-32`

Grid:
- 12-col desktop
- 6-col tablet
- 4-col mobile

## 1.5 Motion & Interaction
- Hover transitions 180–240ms
- Elevation on cards (not scale-heavy)
- Button hover: subtle sheen + border glow
- Avoid parallax noise; prioritize intentional microinteractions

---

## 2) Trust Architecture (New)

Trust must be structured in 3 stacked layers:

### Layer A — Instant Proof (first viewport)
- Google rating + review count
- Years in service
- Warranty badge
- ASE/brand-certification marks

### Layer B — Procedural Trust
- Clear service workflow: Diagnose → Confirm → Repair → Verify
- Digital inspection report mention
- Communication promise (SMS/photo updates)

### Layer C — Outcome Trust
- Testimonial proofs grouped by vehicle type/problem
- “Before/after” style repair stories
- Warranty + follow-up commitment in plain language

---

## 3) Homepage Architecture Blueprint (New Information Flow)

## 3.1 Section Order
1. **Premium Hero (Split Narrative)**
2. **Proof Rail (Sticky/anchored stat rail)**
3. **Service Path Selector (by symptom, not by category)**
4. **How We Work (4-step visual process)**
5. **Featured Service Blocks (2 large, 4 compact)**
6. **Reputation Wall (reviews + badges + partner logos)**
7. **Shop Experience (people, facility, hospitality details)**
8. **Coverage & Convenience (areas, shuttle/loaner, hours)**
9. **FAQ (conversion-focused only)**
10. **Final Decision CTA (book vs call vs get estimate)**

## 3.2 Hero Composition (Distinct)
Left:
- Eyebrow: “Littleton’s Precision Auto Care Studio”
- Strong headline with outcome promise
- 1-line value proposition
- Dual CTAs: Book Inspection (primary), Speak to Advisor (secondary)

Right:
- Cinematic shop/team image with dark gradient
- Floating trust tiles (rating, warranty, same-week availability)

## 3.3 Conversion Logic
- First CTA: low-friction booking
- Mid-page CTA: “Get a 2-min service recommendation” (guided form)
- Final CTA: triage choice:
  - Need urgent help today
  - Planning maintenance
  - Need diagnosis first

---

## 4) Services Index Page Blueprint

Purpose: move from generic cards to **decision-oriented pathways**.

Structure:
1. Header + short intro
2. Filter chips by need:
   - Warning light
   - Strange noise
   - Braking issues
   - Maintenance due
   - A/C problems
   - Performance loss
3. Featured services (high-demand)
4. All services grouped by system:
   - Engine & Diagnostics
   - Brakes & Safety
   - Transmission & Drivetrain
   - Electrical & Battery
   - Cooling & Climate
5. Financing/warranty reassurance strip
6. CTA to book

Card pattern:
- Symptom-first title
- “Best when” bullets
- Typical turnaround range
- CTA: Learn more

---

## 5) Service Detail Page Blueprint

Goal: convert intent into booking with confidence.

Section sequence:
1. Service hero (what this fixes)
2. Problem signals (“You may need this if…”) 
3. What’s included (inspection, parts, labor, validation)
4. Transparent process + timeline expectations
5. Pricing posture (range-based, no bait)
6. Related services upsell module
7. Relevant testimonials
8. Strong booking footer

Key UX additions:
- Sticky side rail on desktop with:
  - Phone
  - Book now
  - Hours/status
  - Warranty summary

---

## 6) Component Inventory (Implementation-Ready)

1. `NavShellPremium`
2. `HeroSplitCinematic`
3. `ProofRail`
4. `SymptomSelector`
5. `ProcessTimeline4`
6. `ServiceFeatureBlock`
7. `ServiceCardCompact`
8. `ReputationWall`
9. `AdvisorCTA`
10. `FAQAccordionPremium`
11. `CoveragePanel`
12. `FooterDecisionBar`

---

## 7) Exact Tailwind Patterns

## 7.1 Page Shell
```html
<body class="bg-[#0B0F14] text-[#EAF0F6] antialiased selection:bg-[#C89B5E]/30">
  <main class="overflow-x-clip">
    <section class="mx-auto w-full max-w-[1200px] px-5 md:px-8">...</section>
  </main>
</body>
```

## 7.2 Premium Button System
```html
<!-- Primary -->
<button class="inline-flex items-center gap-2 rounded-xl bg-[#C89B5E] px-6 py-3 text-sm font-semibold text-[#0F1723] shadow-[0_8px_30px_rgba(200,155,94,0.35)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#E7CFA8]">
  Book Inspection
</button>

<!-- Secondary -->
<button class="inline-flex items-center gap-2 rounded-xl border border-[#2A3545] bg-[#121821] px-6 py-3 text-sm font-semibold text-[#EAF0F6] transition hover:border-[#C89B5E]/60 hover:bg-[#1A2330]">
  Speak to Advisor
</button>
```

## 7.3 Hero Split Layout
```html
<section class="relative pt-32 pb-24 md:pt-40 md:pb-32">
  <div class="grid items-center gap-10 md:grid-cols-12">
    <div class="md:col-span-6 space-y-6">
      <p class="text-xs uppercase tracking-[0.18em] text-[#E7CFA8]">Littleton’s Precision Auto Care Studio</p>
      <h1 class="max-w-[16ch] text-4xl font-extrabold leading-tight tracking-[-0.02em] md:text-6xl">Confidence on every mile starts here.</h1>
      <p class="max-w-[58ch] text-lg text-[#A9B4C2]">Dealer-level diagnostics, transparent recommendations, and hospitality-grade service.</p>
      <div class="flex flex-wrap gap-3">...</div>
    </div>
    <div class="md:col-span-6">
      <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121821]">
        <img class="h-[420px] w-full object-cover" src="/images/shop-hero.jpg" alt="AutoTrek service bay" />
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F14]/70 via-transparent to-transparent"></div>
      </div>
    </div>
  </div>
</section>
```

## 7.4 Proof Rail
```html
<section class="sticky top-0 z-30 border-y border-white/10 bg-[#0F141C]/90 backdrop-blur">
  <div class="mx-auto grid max-w-[1200px] grid-cols-2 gap-4 px-5 py-4 md:grid-cols-4 md:px-8">
    <div class="text-center"><p class="text-2xl font-bold">4.9★</p><p class="text-xs text-[#A9B4C2]">Google Rating</p></div>
    <div class="text-center"><p class="text-2xl font-bold">15+ Years</p><p class="text-xs text-[#A9B4C2]">Serving Littleton</p></div>
    <div class="text-center"><p class="text-2xl font-bold">3yr / 36k</p><p class="text-xs text-[#A9B4C2]">Warranty</p></div>
    <div class="text-center"><p class="text-2xl font-bold">ASE</p><p class="text-xs text-[#A9B4C2]">Certified Techs</p></div>
  </div>
</section>
```

## 7.5 Symptom Selector Cards
```html
<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <a class="group rounded-2xl border border-[#253040] bg-[#121821] p-5 transition hover:border-[#C89B5E]/60 hover:bg-[#1A2330]" href="/services/check-engine-light">
    <h3 class="text-lg font-semibold">Check engine light on</h3>
    <p class="mt-2 text-sm text-[#A9B4C2]">Pinpoint faults fast with full-system diagnostics.</p>
    <span class="mt-4 inline-flex text-sm font-medium text-[#E7CFA8]">See solution →</span>
  </a>
</div>
```

## 7.6 Reputation Wall
```html
<section class="rounded-3xl border border-white/10 bg-gradient-to-br from-[#121821] to-[#1A2330] p-6 md:p-10">
  <div class="grid gap-6 md:grid-cols-3">
    <article class="rounded-2xl bg-white/5 p-5">...</article>
    <article class="rounded-2xl bg-white/5 p-5">...</article>
    <article class="rounded-2xl bg-white/5 p-5">...</article>
  </div>
</section>
```

## 7.7 Final Decision Bar
```html
<section class="py-20">
  <div class="rounded-3xl border border-[#C89B5E]/40 bg-[#121821] p-8 md:p-12">
    <h2 class="text-3xl font-bold tracking-[-0.02em] md:text-4xl">What do you need right now?</h2>
    <div class="mt-6 grid gap-3 md:grid-cols-3">
      <button class="rounded-xl bg-[#C89B5E] px-5 py-3 font-semibold text-[#0F1723]">Urgent repair today</button>
      <button class="rounded-xl border border-[#2A3545] px-5 py-3 font-semibold">Plan maintenance</button>
      <button class="rounded-xl border border-[#2A3545] px-5 py-3 font-semibold">Need diagnosis first</button>
    </div>
  </div>
</section>
```

---

## 8) Conversion Flow (Implementation Guidance)

## 8.1 Funnel by Intent
- **Emergency intent:** immediate phone + “today availability” prompt
- **Planned intent:** booking calendar with service-type preselect
- **Uncertain intent:** guided diagnosis form (symptom triage)

## 8.2 Form Strategy
- Keep first step to 4 fields max: name, phone, vehicle, issue
- Step 2 optional details + preferred time
- Confirmation screen includes expectation setting (“advisor contacts in X minutes”)

## 8.3 CTA Cadence
- Hero CTA
- Post-symptom-selector CTA
- Post-process CTA
- Final CTA band

Every CTA label should reflect intent, not generic “Submit.”

---

## 9) Content Tone + Microcopy

Voice:
- Technical clarity, human warmth
- No hype, no fear-based copy

Examples:
- “We’ll show you what matters now, what can wait, and why.”
- “No surprise work. Nothing proceeds without your approval.”
- “Your estimate includes labor, parts, and timeline expectations.”

---

## 10) Rollout Plan (Practical)

Phase 1 (Structure):
- Implement new homepage architecture + dark premium system

Phase 2 (Service UX):
- Build new services index + one canonical service-detail template

Phase 3 (Trust depth):
- Add reputation wall data, certifications, and case-story modules

Phase 4 (CRO):
- Add guided triage flow + CTA A/B testing

---

## 11) Definition of Done

A reboot is complete when:
- Visual identity is clearly distinct from previous version
- Homepage communicates trust + fit + action within first 20 seconds
- Services pages are symptom-led and conversion-oriented
- All key components are reusable in Tailwind
- Conversion paths exist for urgent, planned, and uncertain users

---

## 12) Summary
This v2 direction transforms AutoTrek from a conventional local-shop layout into a **premium, confidence-first digital experience**. The system is intentionally different in palette, hierarchy, spacing, and flow—while staying practical for local service conversion and fast Tailwind implementation.