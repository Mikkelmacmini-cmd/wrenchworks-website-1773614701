#!/usr/bin/env bash
set -euo pipefail
PROJECT=/Users/openclaw/.openclaw/workspace/projects/autotrek-site/web
ASSET_SRC=~/Desktop/'Client Websites'/Autotrek/Images
PUBLIC_IMAGES="$PROJECT/public/images"

mkdir -p "$PUBLIC_IMAGES"
# Copy hero images and icons if present
cp -v "$ASSET_SRC"/"PROMPT 1.png" "$PUBLIC_IMAGES/hero-a.png" 2>/dev/null || true
cp -v "$ASSET_SRC"/"PROMPT 2.png" "$PUBLIC_IMAGES/hero-b.png" 2>/dev/null || true
cp -v "$ASSET_SRC"/"PROMPT 3.png" "$PUBLIC_IMAGES/hero-c.png" 2>/dev/null || true
mkdir -p "$PUBLIC_IMAGES/icons"
cp -v ~/Desktop/'Client Websites'/Autotrek/Images/icons/* "$PUBLIC_IMAGES/icons/" 2>/dev/null || true

# Build and start
cd "$PROJECT"
npm run build --silent
# Kill any existing Next server on 3000
pkill -f next-server || true
npm run start --silent &
# Give server a moment, then open in Safari
sleep 2
open -a Safari http://127.0.0.1:3000 || open -a Safari http://localhost:3000

echo "Preview started: http://127.0.0.1:3000"
