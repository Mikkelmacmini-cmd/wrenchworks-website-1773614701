Lesson 4 — Agent Lifecycle & Operations

Learning goals
- Understand lifecycle stages: design, test, deploy, monitor, retire
- Learn operational runbooks and incident flow

Stages
1. Design: Define mission, skills, and config; write tests and safety checks.
2. Implement: Build skills, unit tests, and integration tests.
3. Test: Run in sandbox with simulated inputs; run chaos/failure cases.
4. Deploy: Roll out gradually (canary) with monitoring hooks.
5. Operate: Monitor metrics, logs, and alerts; periodic audits.
6. Retire: Revoke permissions, archive config, update documentation.

Operational runbook (template)
- Normal operation: expected metrics and dashboards
- Alert thresholds and on-call rotations
- Immediate actions for critical alerts (stop agent, revoke token)
- Post-incident: timeline reconstruction, RCA, and follow-ups

Audit & compliance
- Keep immutable logs of decisions and data accesses
- Regularly rotate secrets and audit permissions
- Maintain a changelog for agent config and skill updates

Exercise
Sketch a simple runbook for a monitoring agent that restarts a crashed service automatically.
