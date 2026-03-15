# Round 2 — AutoTrek Conversion Clarity Refinement (Hierarchy, Spacing, Type, Trust Placement)

## Goal for this pass
Increase booking intent by tightening visual order and reducing cognitive load: clearer top-to-bottom priority, cleaner spacing rhythm, stronger typography hierarchy, and trust markers positioned exactly where risk is highest.

---

## 1) Hierarchy: Make decision order unmissable

### Priority ladder (must be visually obvious)
1. **Primary action**: Schedule / Call
2. **Core promise**: fast, honest auto repair outcome
3. **Immediate trust proof**: warranty, ASE, years, review score
4. **Supporting details**: services, process, FAQs
5. **Low-priority utility**: secondary links and footer items

### Hard rules
- Only one high-emphasis button style on screen at a time.
- Headline + primary CTA must sit in same visual cluster above the fold.
- Secondary actions (directions, learn more, reviews link) are text/outline and never equal size/color weight to primary CTA.
- If two adjacent sections use similar contrast and heading size, one must be reduced to restore visual hierarchy.

---

## 2) Spacing system: Use rhythm to improve comprehension

### Vertical spacing cadence (desktop → mobile)
- Section padding: **80px → 56px**
- Internal section gap: **32px → 24px**
- Card padding: **24px → 20px**
- CTA cluster gap (headline/subhead/button): **12–16px**

### Layout constraints
- Keep line length around **60–72ch** for explanatory copy.
- Use more whitespace **before** trust/CTA pivots than after (signals importance).
- Avoid “micro-gaps” (<8px) between related text blocks; they read as accidental.
- Keep card grids visually stable; do not mix radically different card heights in first view.

### Conversion effect
Consistent spacing makes pages feel more trustworthy and lowers scan friction, especially on mobile where decision time is shortest.

---

## 3) Typography tightening: clearer scan, less ambiguity

### Type scale (recommended)
- H1: **40/48**, weight 700 (mobile: 32/40)
- H2: **30/38**, weight 700 (mobile: 26/34)
- H3: **22/30**, weight 600
- Body L: **18/30**, weight 400–500
- Body M: **16/26**, weight 400–500
- Meta/supporting: **14/22**, weight 500 (not for critical info)

### Usage rules
- One heading voice per section (avoid mixed headline tones/sizes).
- Use bold for key phrases sparingly; do not bold full paragraphs.
- Never place critical trust/legal info in 14px muted text.
- Keep button labels short and action-first: “Schedule Service”, “Call Now”.

---

## 4) Trust-marker placement: put reassurance at hesitation points

### Placement map
1. **Hero (immediate reassurance):**
   - compact trust row directly under primary CTA
   - include 3–4 short markers max (e.g., 3-Year Warranty, ASE Certified, 20+ Years, 4.8★ Reviews)

2. **Before service cards (qualification):**
   - short “why us” credibility sentence/badge to frame service browsing

3. **Near pricing/process explanation (risk reduction):**
   - transparency marker (diagnostic clarity, approval-before-work)

4. **Final CTA band (last-mile confidence):**
   - repeat strongest two trust markers + single booking action

### Guardrails
- Do not scatter trust items randomly; cluster them where users decide.
- Prefer numeric/specific claims over generic adjectives.
- Trust badges must never push primary CTA below first-screen mobile fold.

---

## 5) Accessibility-safe contrast guidance (carry forward, tightened)

### Required minimums
- Body and button text: **4.5:1+**
- Large headings: **3:1+** (target higher for key value props)
- Key trust copy (warranty/certification/reviews): treat as body text, keep **4.5:1+**

### High-safety defaults
- Default body copy on light surfaces: deep slate/navy tones only.
- Muted text allowed for metadata only, not promises, pricing, or trust proof.
- On image backgrounds, use a dark overlay strong enough for all breakpoints (desktop and mobile crops).
- Link recognition cannot rely on color only; add underline or strong state change.

### State safety
- Hover/focus/active states must keep contrast compliant.
- Focus ring must remain clearly visible against both light and dark surfaces.

---

## 6) Page-by-page application order
1. **Homepage hero + top trust row** (highest ROI)
2. **Primary services page cards + CTA cadence**
3. **Review/proof modules + final CTA bands**
4. **FAQ and supporting content typography normalization**

If time is limited, finish in this order rather than partially touching every page.

---

## 7) Round 2 acceptance checklist
- [ ] Exactly one dominant CTA style per viewport
- [ ] Hero cluster order = promise → CTA → trust row
- [ ] Section spacing follows consistent cadence (no abrupt density shifts)
- [ ] Typography scale applied consistently; no critical info below readable weight/size
- [ ] Trust markers appear at decision moments, not as decorative scatter
- [ ] Contrast and interactive states remain AA-safe across light/dark/image contexts

---

## Expected outcome
A cleaner, calmer interface that feels credible in under 5 seconds, keeps the booking action unmistakable, and preserves accessibility-safe readability while improving conversion clarity.