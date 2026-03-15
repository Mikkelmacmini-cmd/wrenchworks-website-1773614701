#!/usr/bin/env bash
set -euo pipefail
API="$OPENAI_API_KEY"
OUTDIR=~/Desktop/'Client Websites'/Autotrek/Images
mkdir -p "$OUTDIR"
SITE_PUBLIC=/Users/openclaw/.openclaw/workspace/projects/autotrek-site/web/public/images
mkdir -p "$SITE_PUBLIC"

prompta='Photorealistic storefront of AutoTrek Service Center at golden hour, clean signage reading "AutoTrek Service Center", a friendly technician greeting a customer at the door, shallow depth of field, warm natural light, editorial photography'
printf '{"prompt":"%s","n":1,"size":"1024x1024"}' "$prompta" > /tmp/promptA.json
curl -sS https://api.openai.com/v1/images/generations -H "Authorization: Bearer $API" -H "Content-Type: application/json" -d @/tmp/promptA.json -o /tmp/respA.json || true
jq -r '.data[0].b64_json' /tmp/respA.json | base64 --decode > "$OUTDIR/PROMPT 1.png" || cat /tmp/respA.json
cp -v "$OUTDIR/PROMPT 1.png" "$SITE_PUBLIC/hero-a.png" || true

a='Mechanic inspecting an engine bay, hands-on detail, clean modern workshop, soft directional overhead lighting, realistic photography'
printf '{"prompt":"%s","n":1,"size":"1024x1024"}' "$a" > /tmp/promptB.json
curl -sS https://api.openai.com/v1/images/generations -H "Authorization: Bearer $API" -H "Content-Type: application/json" -d @/tmp/promptB.json -o /tmp/respB.json || true
jq -r '.data[0].b64_json' /tmp/respB.json | base64 --decode > "$OUTDIR/PROMPT 2.png" || cat /tmp/respB.json
cp -v "$OUTDIR/PROMPT 2.png" "$SITE_PUBLIC/hero-b.png" || true

c='Handshake between a customer and a mechanic in a bright service bay, branded uniform visible, shallow depth of field, warm tones'
printf '{"prompt":"%s","n":1,"size":"1024x1024"}' "$c" > /tmp/promptC.json
curl -sS https://api.openai.com/v1/images/generations -H "Authorization: Bearer $API" -H "Content-Type: application/json" -d @/tmp/promptC.json -o /tmp/respC.json || true
jq -r '.data[0].b64_json' /tmp/respC.json | base64 --decode > "$OUTDIR/PROMPT 3.png" || cat /tmp/respC.json
cp -v "$OUTDIR/PROMPT 3.png" "$SITE_PUBLIC/hero-c.png" || true

echo "Generation complete. Images copied to $OUTDIR and $SITE_PUBLIC"
