# Diagnostic Proof OS — Interaction System Spec (Implementation-Ready)

Date: 2026-03-11 (MDT)  
Owner: Pulse (interaction system pass)  
Scope: Homepage interaction layer for Vanguard-selected direction

---

## 0) Intent
Create one **ownable, repeated interaction signature** that makes AutoTrek feel like a diagnostic platform (not a generic local-shop site), while improving mobile clarity and conversion trust.

Design principle: **Evidence before persuasion.** Every conversion moment should expose proof artifact(s), urgency context, and a clear next action.

---

## 1) Ownable Repeated Signature: **Proof Flip**

## What it is
A consistent micro-interaction used across hero proof rail, trust cards, and service confidence panels:

- **Front state (default):** concise claim in plain language
- **Flip/expand state (on tap/hover/click):** structured proof artifact appears
  - Vehicle + symptom
  - Test/evidence source
  - Outcome + timestamp
  - “What this means for me” line

This is not a decorative 3D gimmick. It is a **diagnostic evidence reveal** pattern.

## Why it is ownable
Most competitors show static stars/badges. AutoTrek repeatedly uses the same claim→artifact interaction language everywhere, tied to diagnostics.

## Reuse targets
1. Hero “live proof” cards
2. Mid-page trust evidence cards
3. Service detail confidence module snippets
4. Final CTA companion card (“recent similar case”)

## Behavior spec
- Desktop:
  - Hover: subtle lift + border brighten (no flip yet)
  - Click: reveal back/evidence panel (animated crossfade + slight Y shift 8px)
- Mobile:
  - Tap toggles reveal (accordion-style vertical expand, not literal card rotation)
- Motion:
  - Duration: 180–220ms
  - Easing: `cubic-bezier(0.22, 1, 0.36, 1)`
  - Respect `prefers-reduced-motion`: instant state swap
- State memory:
  - One open card per group by default (reduces noise)
  - Last opened card persists while in viewport

## Visual tokens (suggested)
- Surface: near-black with warm neutral border
- Accent: restrained amber line/icon only for “verified proof” metadata
- Verified marker: “Evidence verified” with check glyph + source type (`DTC scan`, `pressure test`, `inspection photo`)

---

## 2) Mini-Flow Spec: **Symptom → Urgency → Next Action**

Objective: turn “Quick Diagnosis” into a productized triage path that lowers uncertainty quickly.

## IA + step logic

### Step 1 — Symptom (input)
Prompt: “What is your car doing?”  
Input modes:
- Suggested chips (Check engine light, Braking noise, Overheating, Battery drain, AC not cold)
- Optional free-text (`max 120 chars`)

Validation:
- At least one chip OR free-text required

### Step 2 — Urgency (system output)
System returns urgency band with plain guidance:
- **Drive Now (Green):** safe to continue short-term
- **Book Soon (Amber):** avoid delay beyond X days
- **Stop & Call (Red):** minimize driving, immediate advisor call

Each includes:
- One-sentence risk rationale
- “Confidence level” microcopy (e.g., “based on reported symptom patterns”)

### Step 3 — Next Best Action (conversion)
Dynamic CTA block based on urgency:
- Green: “Book This Week” (online booking primary)
- Amber: “Reserve Next Available Diagnostic Slot”
- Red: “Call Advisor Now” (tel primary) + “Request Priority Callback” secondary

Auto-prefill handoff summary shown before submit:
- Reported symptom
- Urgency band
- Suggested service path
- Preferred contact method

## Interaction details
- Progress indicator: `1 Symptom • 2 Urgency • 3 Next Step`
- Back navigation allowed without data loss
- Completion target: <45 seconds on mobile
- Save draft in session storage for 30 minutes

## Analytics events
- `triage_started`
- `triage_symptom_selected`
- `triage_urgency_shown` (with band)
- `triage_cta_clicked` (with band + CTA type)
- `triage_submitted`

---

## 3) Mobile-Safe Hero Behavior (fix P0 clipping + improve scan)

## Layout guardrails
- Use dynamic viewport safe sizing (`min-height` not fixed to problematic `100vh` behavior)
- Hero top padding must include notch/safe area + content buffer
  - `padding-top: max(20px, env(safe-area-inset-top)) + 24px` equivalent strategy
- Headline container must never render above visible content area

## Content order (mobile)
1. Eyebrow
2. Full headline (no forced truncation)
3. Subheadline (max 3 lines before clamp + expand)
4. Primary CTA
5. Secondary CTA
6. Proof rail (first card visible, others horizontally swipeable)

## Proof rail behavior
- Snap points with peeking next card (signals more evidence)
- First card auto-visible without requiring scroll
- No auto-rotating carousel (reduces cognitive load)

## Performance constraints
- LCP target: <2.5s on 4G mid-tier
- Avoid heavy hero media on mobile; prefer optimized still + optional deferred motion
- Keep initial above-fold JS light; triage module hydrate after first paint

---

## 4) Conversion Micro-Interactions for Trust Evidence Cards

## Card anatomy
- Title claim (human-readable)
- Evidence type tag (`Scan`, `Photo`, `Pressure test`, `Road test`)
- Freshness timestamp (“Updated 2 days ago”)
- Outcome line (“Resolved misfire, no catalytic replacement needed”)
- Expand affordance (“See proof details”)

## Micro-interactions
1. **Confidence Pulse (idle, subtle):**
   - 1.5s very low-opacity border shimmer every ~8s
   - Disabled for reduced motion
2. **Press feedback:**
   - Scale 0.98 for 90ms on tap/click down
3. **Reveal details (Proof Flip):**
   - Show test reading or artifact summary + interpretation
4. **Action bridge:**
   - After reveal, display contextual CTA:
     - “Get a diagnostic plan like this”
     - Pre-fills triage with related symptom

## Trust copy rules
- Never present naked claims (“best diagnostics in town”)
- Every claim must pair with either:
  - measurable data point, or
  - identifiable process proof, or
  - time-bounded freshness

---

## 5) Component-Level Build Notes (for design/dev handoff)

## Components to implement
- `ProofCard` (default/revealed variants)
- `ProofRail` (horizontal mobile, grid desktop)
- `TriageMiniFlow` (3-step state machine)
- `UrgencyBadge` (green/amber/red with icon + rationale)
- `EvidenceMeta` (source + freshness + verification)

## Accessibility
- All interactive cards are buttons with clear labels
- `aria-expanded` + `aria-controls` on reveal toggles
- Focus ring visible and high contrast
- Color bands (urgency) always paired with text labels (not color-only meaning)

## QA acceptance criteria
1. No hero headline clipping on iOS Safari common heights (e.g., 390×844 class)
2. User can complete triage flow one-handed on mobile without zoom
3. At least one proof artifact visible above fold on mobile hero
4. Every trust card has claim + artifact + freshness metadata
5. Reduced-motion mode removes non-essential motion without breaking comprehension

---

## 6) Priority Rollout (fastest path to pass gate)

### Phase 1 (P0 fix + signature)
- Fix mobile hero clipping
- Launch hero proof rail with Proof Flip interaction
- Replace static trust chips with 3 artifact-backed cards

### Phase 2 (conversion uplift)
- Ship 3-step triage mini-flow
- Add urgency-based dynamic CTA behavior

### Phase 3 (systemization)
- Extend Proof Flip to service pages and final CTA areas
- Add advisor identity + artifact attribution where relevant

---

## 7) Success Metrics (2-week read)
- +15–25% interaction rate on proof cards
- +10–20% click-through from triage result to booking/call
- Reduced pogo/back behavior from hero section on mobile
- Increased conversion rate from sessions that opened ≥1 proof artifact

---

## One-line implementation north star
**Make every key decision moment feel like: “I saw the evidence, I understand the urgency, I know my next step.”**
