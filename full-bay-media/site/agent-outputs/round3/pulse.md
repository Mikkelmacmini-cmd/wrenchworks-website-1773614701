# Round 3 — Pulse: Final Interaction + Motion Pass (Conversion-Safe Accessibility)

Date: 2026-03-11  
Scope: Final interaction-state and motion guidance for AutoTrek’s conversion path, with emphasis on **focus visibility**, **hover/focus parity**, **reduced-motion behavior**, and **contrast-safe CTA dominance**.

---

## Executive outcome
The interaction model is now locked to one priority: make the next action obvious and accessible for every user input mode.

This final pass formalizes:
1. A strict CTA dominance ladder across all states.
2. Accessibility-safe state behavior (rest/hover/focus-visible/active/disabled) for every interactive surface.
3. Reduced-motion rules that remove movement but keep decision signals.
4. Contrast guardrails that prevent “pretty but unreadable” regressions during late polish.

---

## 1) Final conversion-state hierarchy (interaction-level)

**Priority order in every state:**
1. Primary call CTA (hero + sticky/mobile + section closes)
2. Supporting trust interactions (reviews/directions/warranty references)
3. Service navigation links/cards
4. Utility/footer links

### Enforcement rules
- Secondary controls may become clearer on hover/focus, but never louder than primary CTA.
- No state may introduce a competing action language.
- If two controls feel equally “click me” in a viewport, hierarchy is considered broken.

---

## 2) State matrix lock (all interactive components)

Every interactive component must define and preserve these states:
- `rest`
- `hover` (pointer only)
- `focus-visible` (keyboard/AT)
- `active`
- `disabled` (if applicable)

### Required parity behaviors
- Anything communicated by `hover` must also be communicated by `focus-visible`.
- `focus-visible` must be equal to or stronger than `hover` in clarity.
- `active` must provide immediate non-ambiguous feedback.
- `disabled` must remain readable (not opacity-only fade-out).

---

## 3) CTA-focused interaction specs (final)

## 3.1 Primary CTA buttons
- Keep strongest fill/chroma in rest state.
- Hover: subtle confidence cue only (minor darken/lift), no dramatic motion.
- Focus-visible: explicit 2px+ ring with offset; ring must be obvious on light/dark backgrounds.
- Active: press feedback should feel instant and stable.
- Disabled: maintain readable label contrast and semantic disabled state.

## 3.2 Secondary CTA/link controls
- Use lower visual intensity than primary in every state.
- Hover/focus can improve discoverability but cannot mimic primary prominence.
- No strong “pulse/glow” effects that steal attention from call action.

## 3.3 Service cards (card-as-link)
- Hover/focus: border + shadow + optional tiny lift (if motion-safe).
- Focus-visible: ring/border combo for clear keyboard location.
- Keep card copy stable across states (avoid label swaps that increase hesitation).

---

## 4) Reduced-motion final policy

When `prefers-reduced-motion: reduce` is active:
- Remove non-essential transforms (lift, scale, parallax, floating effects).
- Minimize transition duration to near-instant.
- Preserve all meaning-bearing signals: contrast change, border emphasis, focus ring, underline.

**Rule:** reduced motion must reduce movement, not reduce usability.

---

## 5) Contrast-safe interaction guardrails

Minimum contrast targets in all states:
- Standard text and CTA labels: **4.5:1+**
- Large text: **3:1+** (target 4.5:1 for key promises when possible)
- Focus indicators must be clearly visible against adjacent surfaces.

### State-specific pitfalls to block
- Hover darkening that drops label contrast below threshold.
- Disabled labels becoming unreadable due to opacity-only styling.
- Focus rings blending into tinted backgrounds.
- Link states distinguished by color alone (no underline/state-shape change).

---

## 6) Final QA checklist (interaction + accessibility + conversion)
- [ ] Primary CTA remains visually dominant in rest/hover/focus/active states.
- [ ] Every hover affordance has a focus-visible equivalent.
- [ ] Focus ring is clearly visible on every interactive component.
- [ ] Reduced-motion mode removes transforms but preserves state meaning.
- [ ] Secondary interactions remain subordinate across all states.
- [ ] All state variants preserve WCAG-safe contrast for text and controls.
- [ ] No interaction copy/state introduces alternative non-call primary pathways.
- [ ] Sticky/mobile CTA remains accessible and does not occlude final content.

---

## Launch position
Interaction quality is now defined as a governed system, not ad-hoc polish.  
If this checklist is enforced during final QA and future edits, AutoTrek can keep high conversion clarity **without** accessibility regressions in focus, hover, motion, or contrast behavior.