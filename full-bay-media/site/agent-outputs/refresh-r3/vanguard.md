# AutoTrek Refresh — Round 3/3 Final Critic Gate (Vanguard)

Date: 2026-03-11  
Standard: Launch-critical only (premium / bold / trustworthy / conversion-safe)

## Final Verdict (Pre-QA)
The R1→R2 direction is materially stronger, but launch should be blocked unless the experience crosses from **“polished template”** to **“proof-led decision engine.”**

At this stage, the biggest risk is not aesthetics—it is **trust depth + decision speed**.  
If users still need to “figure out what to do,” conversion and premium perception will underperform.

---

## P0 — Launch Blockers (Must Pass)

### 1) Persistent mobile conversion rail must exist and behave correctly
**Required:** `Call Now` + `Request Callback` + `Quick Diagnosis` on homepage, service list, and service detail pages.  
**Blocker conditions:** no rail, inconsistent templates, keyboard overlap, footer/final CTA collision, or tap targets <44px.

### 2) Trust must be evidence-first above the fold (not claim-first)
**Required in first 1–2 scroll depths:**
- Aggregate rating + count context
- 3–5 review excerpts with vehicle/problem/outcome metadata
- ASE + warranty credentials with plain-language meaning
**Blocker condition:** trust row is still mostly badges/claims without verifiable context.

### 3) Symptom triage flow must ship as a real micro-funnel
**Required:** 2–3 step quick diagnosis path that outputs urgency + recommended action + prefilled next CTA.  
**Blocker condition:** “Quick Diagnosis” is only copy/UI shell with no actionable routing.

### 4) Service pages must include decision-critical blocks
Each high-intent service page must include all six:
1. Common Symptoms
2. Typical Causes
3. Can I Keep Driving? (driveability guidance)
4. Typical Time Window
5. Budget Range (banded)
6. Next Best Step CTA (intent-specific)
**Blocker condition:** pages remain descriptive marketing copy without immediate decision scaffolding.

### 5) Approval transparency must be explicit and prominent
**Required:** non-buried guardrail statement + explanation:  
**“No repairs begin until you approve the estimate.”**
**Blocker condition:** this is present but visually weak, buried, or not reinforced near process/CTA areas.

---

## P1 — High-Leverage Before/Immediately After Launch

### 1) Enforce one ownable visual signature across key modules
Implement one consistent motif (diagnostic pulse / precision-grid language) across hero, trust chips, service cards, and CTA zones.  
If this is missing, brand remains modern-but-generic.

### 2) Add operator identity layer (human trust)
Advisor/technician modules with real photos, cert level, years, and specialties.  
Premium trust requires visible accountable humans, not anonymous brand voice.

### 3) Add “Recent Repair Outcomes” proof strip
Real mini-cases: vehicle, issue, fix, turnaround, outcome.  
This is the bridge between testimonials and operational proof.

### 4) Enforce intent-based CTA language everywhere
High-intent modules must standardize on: `Call Now`, `Quick Diagnosis`, `Request Callback` (contextual variants allowed).  
Remove generic conversion language (`Learn More`, `Contact Us`, etc.) from key decision surfaces.

### 5) Lock brand/design tokens into one implementation source
Single token authority for type, color ratios, elevation, spacing, and interaction depths (D1/D2/D3).  
Without this, post-launch edits will quickly degrade premium consistency.

---

## Final QA Release Gate (Go/No-Go)
Declare launch-ready only if all are true:
- Mobile user always has a one-thumb high-intent action path.
- Trust is verifiable in-context (not assertion-based).
- Service pages answer “what should I do now?” in under 30 seconds.
- Visual system has at least one ownable, repeated signature beyond palette.
- CTA system is intent-led and consistent across templates.

If any one fails, this is still a strong rebuild—but **not yet a category-defining launch**.