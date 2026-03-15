Lesson 2 — Agent Types & Roles

Learning goals
- Know common agent archetypes
- Map responsibilities to agent type
- Choose appropriate autonomy level

Agent archetypes
- Assistant agents: Help humans with tasks, require frequent human interaction (e.g., scheduling assistant).
- Executor agents: Perform scripted operations with deterministic inputs (e.g., CI/CD deployer).
- Research agents: Gather and summarize information (e.g., market research bot).
- Monitoring agents: Watch systems and alert or remediate (e.g., healthcheck cron agent).
- Hybrid agents: Combine two or more roles (e.g., research + execution).

Autonomy spectrum
- Manual: human in loop for all decisions
- Assisted: suggests actions, human approves
- Semi-autonomous: takes low-risk actions automatically, escalates high-risk
- Fully autonomous: acts without human approval (rare, high-trust)

Mapping responsibilities
- For each task, document: inputs, expected outputs, tolerances, rollback plan.
- Define what constitutes 'high-risk' and must be escalated.

Exercise
List three tasks in your workspace and pick the agent type and autonomy level for each.
