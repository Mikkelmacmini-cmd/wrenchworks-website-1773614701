#!/usr/bin/env bash
set -euo pipefail
BASE=/Users/openclaw/.openclaw/workspace
echo "SMOKE: session startup dry run"
# 1. Check required files exist
for f in SOUL.md AGENTS.md IDENTITY.md USER.md; do
  if [[ ! -f "$BASE/$f" ]]; then echo "MISSING: $f"; exit 2; else echo "FOUND: $f"; fi
done
# 2. Print next_step from active-tasks.md if present (do not modify files)
AT=$BASE/active-tasks.md
if [[ -f "$AT" ]]; then echo "active-tasks.md present — showing first task entry:"; sed -n '1,120p' "$AT" | sed -n '1,40p'; else echo "active-tasks.md not found — OK for dry run"; fi
# 3. Run validator
/Users/openclaw/.openclaw/workspace/scripts/validate_agent_docs.py || (echo 'Validator failed' && exit 2)
# 4. Simulate a read-only task loop (no writes)
echo "Simulating task loop (read-only)..."
# just sleep briefly to simulate runtime
sleep 1
echo "Dry run complete — no state changed"
exit 0
