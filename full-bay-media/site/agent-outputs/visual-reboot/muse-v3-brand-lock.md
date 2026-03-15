# AutoTrek Visual Reboot v3 — **Brand Lock**

## Non-Negotiable Brand Adjectives (Hard Lock)
1. **PREMIUM** — Feels high-value, intentional, elevated.
2. **BOLD** — Strong hierarchy, decisive contrast, clear action.
3. **TRUSTWORTHY** — Transparent, evidence-led, calm and credible.

If a design choice weakens any one of these, it is rejected.

---

## 1) Brand Lock Principles

### PREMIUM = Elevated restraint
- Fewer, larger elements with breathing room
- High-quality imagery, clean typography, disciplined spacing
- Minimal visual noise; no “coupon-flyer” clutter

### BOLD = Confident clarity
- Strong headline voice
- High contrast between foreground/background
- Primary CTA and proof signals impossible to miss

### TRUSTWORTHY = Verifiable confidence
- Claims must be paired with proof (ratings, warranty, certifications, process)
- Clear pricing posture, clear next steps, no ambiguity
- Friendly but professional tone; no hype language

---

## 2) V3 Visual Direction (Tightened)

## 2.1 Art Direction Statement
**“Executive-level auto care.”**
A premium service experience with bold visual confidence and trust-first information architecture.

## 2.2 Color System (Locked)
```css
--bg: #0B0F14;
--surface: #121821;
--surface-2: #1A2330;
--ink: #EAF0F6;
--muted: #A9B4C2;

--accent: #C89B5E;   /* premium bronze */
--accent-2: #E7CFA8; /* highlight */

--success: #43B581;
--danger: #E85D5D;
```

**Do**
- Keep dark foundation + warm premium accent
- Use accent for CTA, proof highlights, and key interactions only

**Don’t**
- Reintroduce bright generic reds/blues as dominant brand color
- Use more than one accent family

## 2.3 Typography (Locked)
- Display: `Manrope` or `Sora` (700–800)
- Body/UI: `Inter` (400–600)

**Do**
- Use strong headline scale with tight tracking
- Keep body copy readable, max ~70ch

**Don’t**
- Mix 3+ font families
- Use thin/light text for critical trust content

---

## 3) Explicit Do/Don’t Rules (Global)

## Layout + Composition
**Do**
- Use clear section rhythm (`py-24+` desktop)
- Prioritize one message per section
- Keep generous whitespace for premium feel

**Don’t**
- Pack dense, equal-weight card grids
- Stack too many competing CTAs

## Content + Voice
**Do**
- Speak plainly: what you do, how long it takes, what it costs (range)
- Pair every promise with evidence

**Don’t**
- Use fear-based copy (“catastrophic,” “urgent danger”) unless truly safety-critical
- Use vague fluff (“best service ever”)

## Trust UX
**Do**
- Show rating count + years + warranty + certifications above the fold
- Expose process: Diagnose → Confirm → Repair → Verify

**Don’t**
- Hide proof below multiple scroll depths
- Force conversion before clarifying service confidence

---

## 4) Component-Level Brand Guidance

## 4.1 Header / Nav
**Must express:** PREMIUM + TRUSTWORTHY
- Clean nav, limited items, high legibility
- Persistent contact and booking access

**Do:** Keep nav minimal and polished
**Don’t:** Add promo banners/tickers in header

## 4.2 Hero (Split Cinematic)
**Must express:** BOLD + PREMIUM
- Strong outcome headline
- Two clear CTAs: `Book Inspection` (primary), `Speak to Advisor` (secondary)
- Trust tiles visible in hero visual zone

**Do:** Make primary action visually dominant
**Don’t:** Use generic stock-like hero with no trust overlay

## 4.3 Proof Rail (Sticky/Anchored)
**Must express:** TRUSTWORTHY
- 4 fixed proof points: Rating, Years, Warranty, Certifications

**Do:** Keep concise and always legible
**Don’t:** Rotate claims like ad copy carousel

## 4.4 Symptom Selector
**Must express:** BOLD + TRUSTWORTHY
- Organize by customer symptoms, not internal shop taxonomy

**Do:** “Check engine light on” style titles
**Don’t:** Generic labels like “Diagnostics Services” only

## 4.5 Process Timeline (4-step)
**Must express:** TRUSTWORTHY
- Diagnose → Confirm → Repair → Verify

**Do:** State approvals and communication points clearly
**Don’t:** Skip consent or timeline expectations

## 4.6 Service Cards / Blocks
**Must express:** PREMIUM + TRUSTWORTHY
- “Best when” bullets + turnaround expectation + clear CTA

**Do:** Prioritize clarity over volume
**Don’t:** Overload with tiny badges and icon noise

## 4.7 Reputation Wall
**Must express:** TRUSTWORTHY + PREMIUM
- Real testimonials, partner/cert badges, review snippets

**Do:** Use authentic proof density
**Don’t:** Use anonymous, unverifiable quotes

## 4.8 Final Decision CTA Bar
**Must express:** BOLD
- Three intent paths: urgent / planned / diagnosis-first

**Do:** Make choices mutually clear and immediate
**Don’t:** End with a single generic “Contact Us” button

---

## 5) Page-Level Enforcement

## Homepage
- First screen must communicate: **what AutoTrek is, why trust it, what to do next**
- No section should exist without a conversion or trust role

## Services Index
- Symptom-first navigation is required
- Group services by system only after symptom pathways

## Service Detail
- Include: symptoms, what’s included, timeline, approval model, pricing posture, next step
- Sticky booking/phone/warranty module on desktop required

---

## 6) QA Checklist (Brand Lock Gate)
A screen/page passes only if all are true:
- [ ] Feels **PREMIUM** (space, polish, restraint)
- [ ] Reads **BOLD** (clear hierarchy, decisive CTA, strong contrast)
- [ ] Builds **TRUSTWORTHY** confidence (proof + process + transparency)
- [ ] No visual clutter or template-like generic UI
- [ ] No unsupported claims
- [ ] Primary conversion path visible within 5 seconds

---

## 7) Anti-Patterns (Immediate Rejection)
- Coupon-style promo chaos
- Generic bright-red auto-shop aesthetic
- Equal-weight “card soup” layouts
- Vague marketing claims without proof
- Multi-accent, multi-font inconsistency
- CTA ambiguity (“Learn More” everywhere)

---

## 8) Final Direction Summary
v3 is now **brand-locked**: every decision must visibly reinforce **PREMIUM, BOLD, TRUSTWORTHY**. This is not a stylistic preference layer; it is a strict operating system for layout, copy, components, and conversion flow.