When to add facts

Add a fact to MEMORY.md when:
- It describes how you or your team works (processes, preferences, rules)
- You or multiple people notice the same pattern repeatedly (3+ times)
- It affects future decisions (deployment rules, meeting norms)
- You learned a lesson worth remembering (post-mortem conclusion)

When to merge facts

Merge when:
- Two entries say the same thing in different words
- You have overlapping rules that cause confusion
- A newer rule replaces and clarifies an older one

How to merge safely
- Create the merged entry with a new id
- Copy or summarize key details from both
- Update older entries: set status: superseded and add supersededBy: <new-id>
- Add a short note explaining why you merged

Example merge
- old: "Deploy on Tuesdays" and "No Friday deploys"
- merged: "Deploy only on Tuesdays; never deploy on Fridays (superseded: deploy-2025-11)"