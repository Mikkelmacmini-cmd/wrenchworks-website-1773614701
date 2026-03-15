Responsive CSS spec — WrenchWorks header & hero overlap

Files: mock1-*/ mock2-*/ mock3-*
Location: /workspace/design-deliverables/wrenchworks-header/

Overview
- Deliverables: 3 header+logo placement options with desktop + mobile thumbnails.
- Behavior: header stays at top; hero card visually overlaps header (partial overlap). Layout responsive: desktop shows wide hero; mobile stacks header then overlapping hero card scaled to container.

Breakpoints
- Mobile (small): up to 599px
- Tablet (medium): 600px — 959px
- Desktop (large): 960px and up

Grid & spacing
- Base spacing unit: 8px
- Gutter: 24px (mobile: 16px)
- Header height:
  - Mobile: 56px
  - Tablet: 64px
  - Desktop: 72px
- Hero card vertical offset (overlap amount): 24px (mobile: 12px)

Header layout options (applies to each mock)
- Option A (mock1): logo left, nav right. Header content padded 24px from edges. Logo 48x48.
- Option B (mock2): centered logo, nav split left/right. Center logo absolute-centered within header. Logo 56x48 (slightly larger).
- Option C (mock3): logo right (floating), nav left. Logo 64x64.

CSS snippets (example)
:root {
  --space: 8px;
  --gutter: 24px;
  --header-h-mobile: 56px;
  --header-h-tablet: 64px;
  --header-h-desktop: 72px;
  --overlap: 24px;
}

.header {
  position: relative; /* sits at top */
  height: var(--header-h-desktop);
  display: flex;
  align-items: center;
  padding: 0 var(--gutter);
  background: white;
}

/* Responsive heights */
@media (max-width: 599px) {
  .header { height: var(--header-h-mobile); padding: 0 16px; }
  :root { --overlap: 12px; }
}
@media (min-width:600px) and (max-width:959px) {
  .header { height: var(--header-h-tablet); }
}

.hero-card {
  width: min(1000px, calc(100% - 2*var(--gutter)));
  margin: 0 auto;
  position: relative;
  top: calc(var(--header-h-desktop) - var(--overlap)); /* pulls up to overlap header */
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(10,20,30,0.08);
  padding: 28px;
  background: white;
}
@media (max-width:599px) {
  .hero-card { width: calc(100% - 32px); top: calc(var(--header-h-mobile) - var(--overlap)); padding: 20px; }
}

Accessibility & focus
- Ensure logo has descriptive alt text: <img src="..." alt="WrenchWorks logo"> or aria-label on svg.
- Nav links must be real links (<a>) and keyboard-focusable. Visible focus ring: outline: 3px solid #ffd; use high-contrast color for focus.
- Hero CTA buttons: contrast ratio >= 4.5:1 for normal text; 3:1 for large text. Use aria-label when icon-only.
- Ensure sufficient spacing for touch targets: min 44x44 px for interactive elements on mobile.

Motion
- If animating the hero overlap: prefer a subtle translateY on load (duration 220ms, ease-out) and respect prefers-reduced-motion.

Notes & implementation tips
- Use prefers-reduced-motion to turn off entrance animations.
- For centered logo (mock2), avoid absolute positioning pitfalls by using grid with three columns: [nav-left][logo][nav-right], collapse nav-right into a hamburger on mobile.
- For accessible stacking, when hero overlaps header visually but DOM order should remain header then hero for screen readers.

End of spec
