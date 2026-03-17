# PRD: AutoTrek Service Center — 2026 Design Refresh

## Objective
Transform AutoTrek from a plain, unstyled site into a bold, modern, interactive experience using 2026 web design trends. Must be completely different from WrenchWorks Digital (no earthy palettes, no serif typography, no tactile warmth).

## Design Direction: Dark-Mode Brutalism + Hyperreality
- **Dark-mode-first** with electric accent pops
- **Bold geometric sans typography** with exaggerated scale hierarchy
- **High-contrast layouts** — stark sections, dramatic color blocking
- **Dynamic interactions** — scroll-triggered animations, parallax, counter animations, hover reveals
- **Cinematic feel** — full-bleed imagery, gradient overlays, moody lighting

## Brand Colors (evolved from existing)
- **Primary dark**: #0A0A0A (near-black, replaces #0f1a0f)
- **Secondary dark**: #141414
- **Brand green**: #00E676 (electric green — evolved from #2d6a2d for more energy)
- **Brand red**: #FF3D3D (vivid red — evolved from #c0392b)
- **Accent**: #00BCD4 (cyan for tech/diagnostic feel)
- **Text primary**: #FFFFFF
- **Text secondary**: #9CA3AF (gray-400)
- **Surface/card bg**: #1A1A1A
- **Border**: rgba(255,255,255,0.08)

## Typography
- **Headlines**: "Space Grotesk" (Google Font) — geometric, techy, bold
- **Body**: "Inter" — keep existing, clean and readable
- **Accents/numbers**: "JetBrains Mono" (monospace) — for stats, phone numbers, technical data
- **Scale**: Hero h1 text-5xl sm:text-6xl lg:text-8xl; Section h2 text-3xl sm:text-4xl lg:text-6xl
- **Eyebrow labels**: uppercase, tracked wide, text-xs, in cyan (#00BCD4) or electric green

## Page: Homepage (src/app/page.tsx)

### Hero Section
- Full-viewport dark hero with subtle animated gradient mesh background (CSS @keyframes, radial gradients moving slowly)
- Large bold headline: "Your Car Deserves Better." with electric green highlight on "Better"
- Subtext: "Littleton's most trusted auto repair — honest diagnostics, expert service, zero BS."
- Two CTAs: "Book Service" (green bg button) + "Call Now" (outline with phone icon)
- Trust badges strip below hero: NAPA AutoCare | 36-Month Warranty | Domestic & Import & EV | 4.1★ Google

### Services Section — Interactive Grid
- Section title: "WHAT WE FIX" with eyebrow "SERVICES" in cyan
- 6 featured service cards in a 2x3 grid (desktop), each card:
  - Dark card bg (#1A1A1A) with subtle border
  - Service icon (existing from /images/icons/)
  - Service name in bold
  - Short description
  - On hover: card lifts, border glows electric green, slight scale
  - Click navigates to service page
- Below grid: "See all 22 services →" link
- Use the top 6 most common services: Oil & Fluid, Brakes, AC, Check Engine, Wheel Alignment, EV/Hybrid

### Stats Counter Section
- Full-width dark section with dramatic radial gradient
- 4 animated counters that count up when scrolled into view:
  - "36+" months warranty coverage
  - "4.1" Google rating (animate from 0 to 4.1)
  - "22" services offered
  - "5" communities served
- Use JetBrains Mono for the numbers, large scale (text-5xl to text-7xl)
- Each counter has a label below in text-secondary

### About/Trust Section
- Split layout: left = image (hero-b.png), right = text
- Headline: "Your Neighborhood Mechanic. No Dealership Drama."
- Body copy about honest service, local team, NAPA backing
- Small trust logos: NAPA AutoCare, ASE Certified
- CTA: "Learn More About Us →"

### Reviews Section
- Dark bg section
- Headline: "What Drivers Say" with red period typography: "What. Drivers. Say."
- Google review link styled as a large card with star rating, review count
- "Read all reviews on Google →" CTA

### Service Areas Section
- Horizontal scrolling pill chips for each area
- Headline: "Proudly Serving the South Metro"
- Animate pills sliding in from right

### CTA Banner (bottom)
- Full-width, electric green gradient background
- "Ready to get your car fixed right?" headline in dark text
- Two buttons: Book Service + Call Now
- Subtle diagonal line pattern overlay

## Components to Update

### Header (src/components/layout.tsx → Header)
- Dark sticky header (#0A0A0A) with backdrop-blur
- Logo/name in white, bold, Space Grotesk
- Nav links in gray-400, hover:white transition
- CTA button: electric green bg, dark text, rounded-lg
- Mobile: hamburger menu with full-screen dark overlay

### Footer (src/components/layout.tsx → Footer)  
- Dark footer (#0A0A0A), generous padding
- Grid layout: brand + tagline | Quick links | Contact info | Hours
- Bottom bar with copyright
- Subtle top border in green

### MobileStickyBar
- Keep existing but restyle: dark bg, green "Call Now" button, red outline "Schedule" button

### UI Components (src/components/ui.tsx)
- PrimaryCTA: electric green bg (#00E676), dark text, hover glow effect
- CallCTA: outline with red border, red text, hover:bg red
- Add new AnimatedCounter component
- Add new GlowCard component (for services)

## globals.css Updates
- Import Space Grotesk + JetBrains Mono from Google Fonts
- Dark body bg: #0A0A0A
- Custom CSS for animated gradient mesh hero
- Glow effect utility class
- Smooth scroll behavior
- Custom scrollbar styling (dark)

## Interactions & Animations (CSS-only, no framer-motion since this is Next.js App Router with SSR)
- Use CSS @keyframes for gradient mesh animation
- Use Intersection Observer (client component) for scroll-triggered counter animations
- CSS transitions for hover effects on cards (transform, box-shadow, border-color)
- CSS transition for service area pills sliding in
- Parallax-like effect on hero using CSS transform on scroll (simple client component)

## Technical Constraints
- Keep all existing routes and URL structure (SEO)
- Keep siteConfig, services[], and areas[] data as-is
- Keep schema.org JSON-LD
- Must build and export without errors
- All changes must be responsive (mobile-first)
- No external animation libraries — CSS + minimal client components only
- Keep Tailwind v4 CSS-based config (no tailwind.config.js)

## Files to Modify
1. `src/app/globals.css` — dark theme, fonts, animations, utilities
2. `src/app/layout.tsx` — dark body, font imports
3. `src/app/page.tsx` — full homepage redesign
4. `src/components/layout.tsx` — Header, Footer, MobileStickyBar restyle
5. `src/components/ui.tsx` — update CTAs, add AnimatedCounter, GlowCard
6. New: `src/components/animated-counter.tsx` — client component for scroll counters
7. `src/app/about/page.tsx` — restyle to match dark theme
8. `src/app/contact/page.tsx` — restyle to match dark theme
9. `src/app/services/page.tsx` — restyle to match dark theme
10. `src/app/reviews/page.tsx` — restyle to match dark theme

## Definition of Done
1. All files updated with new dark design system
2. `npm run build` passes with 0 errors
3. Homepage has all sections described above with interactions
4. Color palette is consistent across all pages
5. Typography hierarchy is dramatic and bold
6. Responsive on all breakpoints
7. Mobile sticky bar works correctly
8. Commit all changes with clear message

When completely finished, run:
openclaw system event --text "Done: AutoTrek 2026 redesign complete — dark mode, electric accents, animated counters, interactive service cards, full homepage rebuild" --mode now
