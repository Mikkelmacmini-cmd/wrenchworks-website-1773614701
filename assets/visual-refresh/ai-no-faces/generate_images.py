#!/usr/bin/env python3
import base64
import json
import os
import urllib.request
from pathlib import Path
from PIL import Image

OUT = Path("assets/visual-refresh/ai-no-faces")
HERO_DIR = OUT / "hero"
SUPPORT_DIR = OUT / "support"
MOBILE_DIR = OUT / "mobile"

for d in [HERO_DIR, SUPPORT_DIR, MOBILE_DIR]:
    d.mkdir(parents=True, exist_ok=True)

API_KEY = (os.environ.get("OPENAI_API_KEY") or "").strip()
if not API_KEY:
    raise SystemExit("Missing OPENAI_API_KEY")

jobs = [
    ("hero", "hero-01-torque-wrench-closeup", "Ultra-realistic commercial automotive photo, tight close-up of a technician's gloved forearms and hands using a torque wrench on an engine component, no face visible, no full person, shallow depth of field, crisp metal textures, premium clean workshop lighting, brand-safe website hero image, no text, no watermark"),
    ("hero", "hero-02-macro-bay-sensor", "Ultra-realistic macro shot in a modern auto service bay, technician arms only reaching into open hood with diagnostic probe and multimeter, illuminated diagnostic readouts in background bokeh, no face visible, no identifiable person, high contrast details, cinematic but natural lighting, no text, no watermark"),
    ("hero", "hero-03-precision-tool-tray", "Photoreal automotive service scene, close framing of hands organizing precision tools on a spotless tool cart beside a vehicle bay, LED task lights reflecting on chrome and painted surfaces, no faces, no upper bodies, no logos, clean premium composition for homepage hero"),
    ("support", "support-01-brake-service", "Photoreal close-up of brake service in progress, gloved hands removing brake caliper and inspecting rotor, detailed textures of pads and rotor surface, workshop background softly blurred, no faces or identifiable people, no text, no watermark"),
    ("support", "support-02-diagnostics-scan", "Photoreal automotive diagnostics image, technician hands holding OBD scan tablet near steering column, screen showing abstract diagnostic graphs and codes (non-branded), no face visible, modern clean garage lighting, no text overlays"),
    ("support", "support-03-oil-service", "Photoreal oil service close-up, gloved hands unscrewing oil filter and controlled oil drain into clean pan, emphasis on cleanliness and precision, no faces or full person, high-detail industrial lighting, no watermark"),
    ("support", "support-04-suspension-repair", "Photoreal suspension repair scene, close-up of mechanic hands using ratchet on strut assembly and control arm components, sharp detail on metal parts and gloves, no face visible, no text, clean commercial style"),
    ("support", "support-05-hybrid-repair", "Photoreal hybrid vehicle service, close-up of insulated gloved hands working near orange high-voltage cables and battery module access panel, safety-focused composition, no faces or identifiable people, clean modern shop, no text"),
    ("support", "support-06-fleet-maintenance", "Photoreal fleet maintenance bay scene, technician hands using diagnostic tool on light commercial van engine bay, multiple vehicles softly out of focus in background, operational efficiency mood, no faces, no logos, no text"),
]


def generate(prompt: str, size: str = "1536x1024") -> bytes:
    body = json.dumps({
        "model": "gpt-image-1",
        "prompt": prompt,
        "size": size,
        "quality": "high",
        "output_format": "webp",
        "background": "auto",
        "n": 1,
    }).encode("utf-8")
    req = urllib.request.Request(
        "https://api.openai.com/v1/images/generations",
        method="POST",
        headers={
            "Authorization": f"Bearer {API_KEY}",
            "Content-Type": "application/json",
        },
        data=body,
    )
    with urllib.request.urlopen(req, timeout=300) as resp:
        payload = json.loads(resp.read().decode("utf-8"))
    b64 = payload.get("data", [{}])[0].get("b64_json")
    if not b64:
        raise RuntimeError(f"No image data in response: {payload}")
    return base64.b64decode(b64)


def mobile_crop(src: Path, dst: Path):
    with Image.open(src) as img:
        w, h = img.size
        target_w = int(h * 0.75)  # 3:4 portrait crop using full height.
        left = max((w - target_w) // 2, 0)
        right = min(left + target_w, w)
        crop = img.crop((left, 0, right, h))
        crop.save(dst, format="WEBP", quality=82, method=6)

manifest = []
for category, name, prompt in jobs:
    out_path = (HERO_DIR if category == "hero" else SUPPORT_DIR) / f"{name}.webp"
    if not out_path.exists():
        print(f"Generating {name}...")
        image_bytes = generate(prompt, size="1536x1024")
        out_path.write_bytes(image_bytes)
    else:
        print(f"Using existing {name}...")

    mobile_path = MOBILE_DIR / f"{name}-mobile.webp"
    mobile_crop(out_path, mobile_path)

    manifest.append({
        "category": category,
        "name": name,
        "prompt": prompt,
        "desktop": str(out_path),
        "mobile": str(mobile_path),
    })

(OUT / "manifest.json").write_text(json.dumps(manifest, indent=2), encoding="utf-8")
print("Done. Wrote manifest:", OUT / "manifest.json")
