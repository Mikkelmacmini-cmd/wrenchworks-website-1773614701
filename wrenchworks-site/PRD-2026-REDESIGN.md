# PRD: WrenchWorks Digital — 2026 Design Trend Upgrade

## Objective
Apply 2026 web design trends to the existing WrenchWorks Digital site. This is an iteration, not a rebuild. Keep the existing page structure, content, and Formspree integration. Transform the visual layer.

## Tech Stack (no changes)
- Next.js 13 + React 18 + Tailwind CSS + Framer Motion

## 2026 Design Trends to Apply

### 1. Color Palette — Nature Distilled + Dopamine Accents
Replace the current dark navy (#1a2332) + orange (#f97316) two-tone scheme with a richer, more sophisticated palette:

**Primary palette (earthy/nature-distilled):**
- Deep charcoal: #1C1C1E (replaces #1a2332 for dark sections)
- Warm stone: #2C2A28 (dark warm alternative)
- Sand/cream: #F5F0EB (replaces white/gray-50 backgrounds)
- Warm white: #FEFCF9 (body background)

**Accent colors (dopamine pops):**
- Primary accent: #E85D2A (warm burnt orange — more sophisticated than #f97316)
- Secondary accent: #D4A853 (warm gold)
- Highlight: #3B82C4 (cool blue for contrast moments)

**Neutrals:**
- Text primary: #1C1C1E
- Text secondary: #6B6560
- Text on dark: #E8E2DC
- Border/divider: #D6CFC7

### 2. Typography — Exaggerated Hierarchy
Install and use Google Fonts:
- **Headlines**: "DM Serif Display" (serif, editorial weight) — creates the bold/refined contrast
- **Body**: "Inter" (keep existing) or "DM Sans" — clean, modern sans-serif
- **Accents/labels**: "DM Mono" or uppercase Inter with wide letter-spacing

Implement exaggerated scale:
- Hero h1: text-5xl sm:text-6xl lg:text-7xl (bigger than current)
- Section h2: text-3xl sm:text-4xl lg:text-5xl
- Small labels/eyebrows: text-xs uppercase tracking-[0.2em] in accent color
- Add eyebrow text above every section heading (e.g., "OUR SERVICES", "THE JOURNEY", "TESTIMONIALS")

### 3. Layout — Intentional White Space + Bite-Sized Content
- Increase section padding: py-24 sm:py-32 (up from py-20)
- Add more breathing room between elements
- Use card-based layouts with generous internal padding (p-10)
- Services section: keep 3-column grid but add subtle hover lift + shadow transitions
- Testimonials: larger cards, more padding, subtle left border accent instead of quote marks

### 4. UI Components — Tactile & Modern
- **Buttons**: Slightly larger, rounded-xl (not rounded-lg), subtle shadow, hover scale transform (scale-[1.02])
- **Cards**: rounded-2xl, soft shadows (shadow-md), hover:shadow-xl transition
- **Hero**: Add a subtle grain/noise texture overlay on the dark hero (CSS background-image with a tiny noise SVG or gradient)
- **Section dividers**: Use subtle warm gradients or a thin accent-colored line instead of hard bg-color changes
- **Form inputs**: rounded-xl, slightly larger, warm border colors, focus ring in accent gold
- **Navigation**: Add a subtle backdrop-blur-md on the sticky header for glass effect

### 5. Micro-interactions (Framer Motion)
- Fade-in-up animations on scroll for each section (use IntersectionObserver or framer-motion whileInView)
- Stagger children in the services grid and testimonials
- Subtle parallax on hero background image
- Button hover: slight scale + shadow increase

### 6. Visual Accents — Vector-Infused
- Add decorative SVG elements: subtle geometric shapes (circles, lines) as background accents in sections
- Use CSS gradients to add depth to dark sections (radial gradient from center)
- Consider a subtle dot-grid or line pattern as section background texture

## Files to Modify
1. `tailwind.config.js` — extend with new colors, fonts, spacing
2. `styles/globals.css` — import Google Fonts, add custom utilities, grain texture
3. `components/Header.js` — glass effect, updated colors, typography
4. `components/Footer.js` — updated palette and spacing
5. `pages/index.js` — full homepage redesign with new palette, typography scale, animations, eyebrow labels, spacing
6. `pages/_app.js` — ensure font imports are global
7. `pages/_document.js` — add Google Fonts link tags
8. `pages/contact.js` — updated form styling
9. `pages/services.js` — updated styling
10. `pages/case-studies.js` — updated styling

## Constraints
- Do NOT change the Formspree endpoint or form field names
- Do NOT remove any existing pages
- Do NOT change the og:image or meta content (just ensure they're still present)
- Keep the site fully static-exportable (next export)
- All changes must be responsive (mobile-first)
- The site must build without errors: `npm run build` must succeed

## Definition of Done
1. All files updated with the new design system
2. `npm run build` passes with 0 errors
3. Color palette is consistent across all pages
4. Typography hierarchy is dramatic and editorial
5. Animations are smooth and performant
6. Mobile responsive on all breakpoints
7. Commit all changes with a clear message

When completely finished, run this command to notify me:
openclaw system event --text "Done: WrenchWorks 2026 design upgrade complete — new palette, typography, animations, and spacing applied across all pages. Build passing." --mode now
