# WrenchWorks Micro-Interaction Spec (Lottie/GIF Notes)

## 1) GBP Star Pulse (2.0s loop)
- Layers: map-pin, star-cluster, glow-ring
- Keyframes:
  - 0ms: star scale 90%, opacity 80%
  - 400ms: scale 112%, opacity 100%
  - 800ms: settle 100%
  - 1200-2000ms: subtle glow pulse (opacity 20%→45%→20%)
- Easing: easeOutBack for pop, easeInOutSine for glow.

## 2) SMS Review Tap (2.4s loop)
- Layers: phone, message bubble, CTA button, finger cursor
- Sequence:
  - 0-600ms: bubble slides up 16px + fades in
  - 700-1200ms: CTA button color transitions orange→green on tap
  - 1200-1700ms: ripple ring from tap origin (scale 0→140%)
  - 1700-2400ms: reset to initial frame

## 3) Conversion Counter Tick (1.8s loop)
- Layers: dashboard card, number text, sparkline
- Sequence:
  - number morphs 24→25→26 with rolling digits
  - sparkline draws left-to-right in 600ms
  - check badge bounces at end

Export recommendations: Lottie JSON @ 60fps, fallback GIF 800x500, transparent background where possible.
