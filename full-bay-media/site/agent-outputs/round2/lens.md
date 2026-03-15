# Round 2 — Lens: Conversion-Clear Imagery System (AutoTrek Intent Only)

Date: 2026-03-11  
Scope: Refine Round 1 image guardrails into a conversion-focused, implementation-ready system that keeps every visual anchored to **AutoTrek auto repair** and protects accessibility.

## Objective
Make imagery do one job: remove hesitation and support a single action path — **Call AutoTrek at (303) 328-3356**.

If a visual does not increase confidence in AutoTrek’s repair capability, it should not ship.

---

## 1) Round 2 Intent Upgrade: Image = Evidence, Not Decoration

Round 1 established what to avoid. Round 2 adds a stricter standard: every key image must function as **proof**.

A publishable image should communicate at least one of these proof signals:
1. **Real repair competence** (diagnostic tools, in-bay work, brake/suspension/inspection context)
2. **Process clarity** (advisor explanation, inspection handoff, documented findings)
3. **Trust + accountability** (clean bay standards, uniformed techs, credible shop environment)
4. **Immediate relevance to customer pain** (warning lights, brake concerns, drivability symptoms)

Reject images that are merely “nice-looking” but non-evidentiary.

---

## 2) Section-by-Section Image Plan (Conversion Clarity)

### Hero (highest-impact visual)
**Goal:** Instantly answer: “These people fix cars like mine, and I can call now.”

- Preferred scenes:
  - Technician actively running diagnostics on a vehicle
  - Brake/suspension inspection with visible real tools
  - Advisor + customer at vehicle discussing next step
- Composition:
  - Reserve clean low-detail zone for headline/CTA
  - Keep vehicle and technician visible in same frame when possible
- Avoid:
  - Studio-lit glamour car shots with no service context
  - Office-only scenes or laptop-centric frames

### Trust strip / proof modules
**Goal:** Reinforce legitimacy right after initial CTA exposure.

- Preferred scenes:
  - Uniformed technician in clean bay
  - Process detail (inspection checklist, calibrated tool usage)
  - Team context that feels local and authentic
- Keep backgrounds low-noise for readability and icon/text overlays.

### Service cards
**Goal:** Eliminate ambiguity: each image must match service label exactly.

- Diagnostics → scan tool connected + active fault-check context
- Brakes → visible brake assembly/inspection
- Oil/fluids → fluid service action, not generic engine beauty shot
- Suspension/alignment → lift/undercarriage/alignment workstation context
- Hybrid/European/fleet → model/context cues that support claim authenticity

### Final CTA band
**Goal:** Remove friction before the call action.

- Use calm, low-variance background (soft shop texture or subtle service scene)
- Never use busy mechanical detail behind small text or phone number

---

## 3) AutoTrek-Only Visual Governance (Stricter Reject Criteria)

Reject any asset containing:
1. Marketing/SEO motifs (graphs, keyword dashboards, rankings visuals)
2. Generic startup office teamwork aesthetics disconnected from repair work
3. Unrealistic AI artifacts (tool geometry errors, impossible hand/part details)
4. Competitor branding or ambiguous non-AutoTrek signage
5. Luxury-showroom vibes that imply sales, not repair service
6. Cinematic effects that reduce visibility of core repair context

**Decision test:** “Could this image appear on a digital agency homepage?” If yes, reject.

---

## 4) Accessibility-Safe Alt Text System (Round 2)

## Alt text rules by image role

### A) Informative conversion image (hero, trust, service cards)
Use concise action + context + AutoTrek relevance.

Pattern:  
**[Who/action] + [vehicle/service context] + [why it matters to user]**

Examples:
- "AutoTrek technician scanning a check-engine issue in the Littleton service bay."
- "Mechanic inspecting front brake components to confirm safe stopping performance."
- "Service advisor explaining inspection results beside a customer’s vehicle at AutoTrek."
- "Vehicle on lift during suspension inspection to diagnose steering pull and uneven tire wear."

### B) Decorative/supportive texture image
If image adds no unique information, use empty alt:
- `alt=""`

### C) Repeated nearby text already conveys full meaning
Use short reinforcing alt or empty alt to avoid redundancy overload.

## Alt quality constraints
- Target length: ~80–140 chars
- No keyword stuffing
- No “image of” / “photo of” prefix
- Keep plain-language and outcome-aware (diagnose, inspect, explain, repair)

---

## 5) Overlay, Contrast, and Legibility Standards (Implementation-Ready)

For all text-on-image modules:

1. **Base overlay token**: `rgba(15, 23, 42, 0.62)`
2. **High-variance fallback**: increase to `0.70–0.76`
3. **Optional gradient panel** for headline zones:  
   `linear-gradient(90deg, rgba(15,23,42,0.78) 0%, rgba(15,23,42,0.52) 55%, rgba(15,23,42,0.18) 100%)`
4. Contrast minimums:
   - Small/body text: **4.5:1**
   - Large text: **3:1**
5. Keep CTA phone number inside the highest-contrast region; never on raw highlights/reflections.
6. Re-validate after responsive crop changes (mobile often exposes brighter zones).

## Safe defaults for conversion modules
- Prefer left/right anchored bounded text container over free-floating text
- Avoid white text directly over chrome/highlighted car surfaces
- Use text shadow only as secondary aid, not main contrast mechanism

---

## 6) Practical Image Selection Rubric (Use Before Publish)

Score each candidate image 0/1 on each item:

- [ ] Clearly shows real auto repair context
- [ ] Supports one conversion action (call) without introducing alternate intent
- [ ] Matches adjacent section copy/service exactly
- [ ] Contains no off-brand motifs or ambiguous business signals
- [ ] Maintains legibility with approved overlay tokens
- [ ] Has context-correct alt text (or empty alt if decorative)
- [ ] Still reads clearly at mobile crop

**Ship only if all boxes pass.**

---

## 7) Recommended Asset Priorities (Round 2 Production Order)

1. Replace/confirm hero image first (largest impact on intent clarity)
2. Normalize all service-card images to one-to-one service mapping
3. Simplify final CTA background for maximal phone CTA readability
4. Run alt text and contrast QA pass sitewide before release

---

## 8) Expected Conversion Impact

- Faster recognition that AutoTrek is a real, trusted repair shop
- Reduced confusion from non-repair visual signals
- Higher CTA confidence by pairing evidence visuals with a single call action
- Fewer accessibility regressions from standardized overlay + alt conventions
