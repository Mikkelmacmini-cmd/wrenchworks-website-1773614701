Accessibility notes — WrenchWorks header & hero overlap

Summary
- Ensure semantic structure: <header> contains site branding and primary nav (<nav>). Hero is a landmark (<main> or <section role="region">) and visually overlaps but should appear after header in DOM order.

Key requirements
1. Keyboard navigation
   - All interactive elements (links, buttons, toggles) must be reachable via Tab in a logical order.
   - Provide visible focus states (outline or box-shadow) with at least 3px thickness and good contrast.

2. Screen reader semantics
   - Logo: include alt text (alt="WrenchWorks — cloud infrastructure tools") or <svg role="img" aria-label="WrenchWorks logo">.
   - Nav: use <nav aria-label="Primary"> and list items (<ul><li><a>).
   - Hero: use <main> or <section aria-labelledby="hero-heading"> with an H1/H2 for heading.

3. Color contrast
   - Text contrast ratio >= 4.5:1 against background for normal text. Use WCAG 2.1 AA as baseline.
   - CTA buttons: ensure text over button meets contrast; provide alternative outlines or icons with text labels.

4. Touch targets & spacing
   - Minimum target size 44x44 CSS pixels for mobile. Use at least 12px spacing between touch targets.

5. Animation & motion
   - Respect prefers-reduced-motion: reduce or remove parallax/translate animations.

6. Overlap & focus management
   - Even though hero overlaps visually, do not remove header from tab order. If hero contains modal triggers, manage focus trap correctly.

Testing checklist
- Keyboard-only: can you access logo, primary nav, hero CTA, and any form fields?
- Screen reader (NVDA/VoiceOver): Does reading order make sense (header -> hero)? Headings correctly labelled?
- Contrast: run automated checks (axe, Lighthouse) and manual color ratio checks.
- Mobile: verify touch target sizes and spacing.

Implementation notes
- Keep DOM order: header then hero. Use negative margin/top offset on hero for visual overlap.
- Use aria-hidden="true" only for purely decorative SVGs; do not hide informative content.

Contact
- If you need color pair suggestions or contrast-safe palette, request sample theme swatches and I'll generate them.

End of accessibility notes
