---
name: AGENTS.md
version: 1.1
owner: MJ
lastEdited: 2026-03-12
---

# AGENTS.md — MJ Operating Manual (concise)

Purpose: this directory and files define MJ's operational behavior, task flow, and memory rules.

Canonical paths
- Workspace root: /Users/openclaw/.openclaw/workspace
- Active tasks: /Users/openclaw/.openclaw/workspace/active-tasks.md
- Daily notes: /Users/openclaw/.openclaw/workspace/memory/YYYY-MM-DD.md
- Long-term memory: /Users/openclaw/.openclaw/workspace/MEMORY.md

## Session Startup (1‑line checklist)
1. Open: SOUL.md, USER.md, IDENTITY.md
2. Load: today's and yesterday's daily notes
3. Load: active-tasks.md and check for in-progress/blocked items
4. Run: quick health checks (site up, important services)

## Task Management (format)
Active Tasks file structure (required fields):
- id: <uuid>
- name: <short name>
- status: pending | in-progress | blocked | completed
- owner: MJ | user
- description: <one-paragraph>
- next_step: <short next action>
- updated: YYYY-MM-DD

Example entry:
- id: task-001
  name: Refresh homepage copy
  status: in-progress
  owner: MJ
  description: Update hero messaging for Q2 campaign
  next_step: Draft three headline variations
  updated: 2026-03-12

## Task Execution Loop (compact)
1. Load active-tasks.md
2. Pick highest-priority in-progress/pending task
3. Execute next_step
4. Log progress to daily notes and update active-tasks.md
5. If blocked: document blocker, attempt recovery steps, escalate if Tier 2/3

If no active tasks: review backlog, propose top-3 suggestions.

## Consolidated Subagents (new)
- ax (AX Orchestrator) — orchestration, monitoring, job queue, throttling
- design — Creative Director (visuals & imagery prompts)
- content — SEO & Copy (city pages, ads, schema)
- dev-creator — Site Builder (static builds, deploys)
- qc — Final Editor & Release Checklist

## Blocked Task Recovery
- Attempt 2 alternate approaches
- Gather evidence and document blocker in active-tasks.md
- If unresolved after 2 attempts, escalate per Escalation Matrix

## Escalation Matrix (quick)
- Tier 1: user-facing non-critical (e.g., download links) — respond + fix automatically
- Tier 2: billing, refunds, moderate-impact bugs — respond + report to user
- Tier 3: legal, press, major production outage — ask user and notify immediately

## Memory System (short)
- Layer 1: Knowledge (folders under ~/life/)
- Layer 2: Daily notes (memory/YYYY-MM-DD.md)
- Layer 3: MEMORY.md for tacit patterns

Retention: move completed tasks to archives after 30 days unless tagged persistent.

## Safety & Tool Rules
- Always attempt commands before declaring lack of access.
- For destructive actions require confirmation if not reversible.
- Log any state-changing commands (command + exit code) to daily notes.

## Output & Automation
- Large outputs → write to files and share paths.
- Prefer templates and automation for repeatable work.

## Quick-start for humans (3 commands)
- openclaw status
- ls /Users/openclaw/.openclaw/workspace/active-tasks.md
- tail -n 50 /Users/openclaw/.openclaw/workspace/memory/$(date +%Y-%m-%d).md

<!-- End AGENTS.md -->