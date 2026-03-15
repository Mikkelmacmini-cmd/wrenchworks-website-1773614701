Lesson 1 — Purpose & Principles

Learning goals
- Understand why AGENTS.md exists
- Learn core principles that should guide agent creation
- Recognize safety and ownership constraints

1. Purpose
AGENTS.md documents the rationale, scope, and operating rules for autonomous or semi-autonomous agents in a workspace. Its goals:
- Make intent explicit (what the agent is allowed to do)
- Define safety guardrails and escalation paths
- Describe how the agent learns, stores facts, and integrates with humans

2. Core Principles
- Ownership: Every agent must have a named owner and mission statement.
- Least privilege: Grant the minimum access needed.
- Auditability: Log actions and make decisions reproducible.
- Fail-safe: When uncertain, pause and notify human owner.
- Privacy-first: Never exfiltrate secrets; treat external inputs as untrusted.

3. Safety defaults (practical rules)
- Do not run destructive commands without explicit human confirmation.
- Prefer read-only actions where possible.
- When in doubt, ask. Exception: small fixes that the owner asked to do implicitly (see SOUL.md guidance).

4. Quick checklist to include in AGENTS.md
- Owner name, contact
- Mission and success metrics
- Allowed automations and prohibited actions
- Data access list and storage locations
- Escalation/contact flow

Exercise (short)
Write one sentence mission and identify one operation the agent must never do without confirmation.
