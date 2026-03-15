# Forge — Refresh R2/R3 Implementation Pass

Date: 2026-03-11

## What I changed

Implemented the highest-impact cross-team directives from Vanguard, Muse, Lens, Pulse, Quill, and Atlas with emphasis on **decision support, trust evidence, mobile conversion mechanics, and visual distinctiveness**.

### 1) Homepage rebuilt for decision flow + trust architecture
**File:** `src/app/page.tsx`

- Reworked hero copy and hierarchy to match Muse/Quill guidance:
  - Eyebrow: “Littleton Auto Care Since 2009”
  - H1: “Get a Clear Repair Plan Before Small Issues Get Expensive.”
  - Subcopy stresses approval-first + warranty.
- Added in-hero trust chips at hesitation point (rating/reviews/since 2009/warranty/ASE).
- Added **Symptom Triage Quickstart** section with urgency + “safe to drive” hints.
- Added explicit process guardrail callout: **“No repairs begin until you approve the estimate.”**
- Preserved/expanded proof modules with real-outcome snippets.
- Kept and strengthened “AutoTrek vs Dealer vs Chain” comparison table.
- Maintained strong CTA hierarchy (single dominant filled CTA, secondary outlined).

### 2) Persistent mobile action rail (P0 requirement)
**Files:**
- `src/app/page.tsx`
- `src/app/services/page.tsx`
- `src/app/services/[slug]/page.tsx`
- `src/app/globals.css`

- Added/standardized sticky bottom rail on mobile across home, services hub, and service detail templates.
- Actions implemented:
  - `Call Now`
  - `Request Callback`
  - `Quick Diagnosis`
- Included safe-area handling and 44px minimum target sizing.
- Added entrance animation and reduced-motion-safe behavior.

### 3) Service hub upgraded to symptom-first conversion path
**File:** `src/app/services/page.tsx`

- Updated metadata per Atlas target direction.
- Expanded symptom-first grid with direct call actions and intent-specific labels.
- Upgraded featured service cards with consistent interaction treatment.

### 4) Service detail pages now include decision-critical blocks (Vanguard P0)
**File:** `src/app/services/[slug]/page.tsx`

Added per-service structured decision support:
- Common Symptoms
- Typical Causes
- Driveability Guidance
- Typical Time Window
- Budget Range (banded)
- What can wait vs what cannot

Also retained core trust/CTA side rail and process language.

### 5) Visual/motion token modernization + interaction consistency
**File:** `src/app/globals.css`

- Shifted core palette and shadows toward Lens’ atmospheric/depth model.
- Updated motion tokens toward Pulse spec (`140ms`, `220ms`, `320ms` + easing).
- Improved card/pressable elevation system consistency.
- Added sticky CTA animation and accessibility sizing.
- Preserved reduced-motion fallback behavior.

## SEO/route hygiene checks

- Legacy incorrect service routes remain redirected in `next.config.ts`.
- Legacy route disallows preserved in `src/app/robots.ts`.
- No regression to canonical service URL patterns.

## Build/test result

Command:
- `npm run build`

Result:
- ✅ Build passed successfully on Next.js 16.1.6.
- ✅ Static routes generated for homepage, services hub, and all service detail pages.

## Files touched in this pass

- `src/app/page.tsx`
- `src/app/services/page.tsx`
- `src/app/services/[slug]/page.tsx`
- `src/app/globals.css`
- `agent-outputs/refresh-r2/forge.md`
