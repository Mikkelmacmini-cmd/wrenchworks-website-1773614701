#!/usr/bin/env python3
import sys, pathlib, re, json
BASE=pathlib.Path.home()/"Desktop"/"MJ files"
FILES={
 'Soul.md':{
   'required_headings':[r'^## Core Identity', r'^## Voice & Tone', r'Decision Philosophy', r'Communication Rules']
 },
 'Agents.md':{
   'required_headings':[r'Session Startup', r'Task Management', r'Task Execution Loop', r'Escalation Matrix']
 },
 'IDENTITY.md':{
   'required_headings':[r'Action authorization matrix', r'Audit & Trace', r'Problem Solving Sequence']
 },
 'User.md':{
   'required_headings':[r'Decision Filters', r'Availability & Notifications', r'Privacy & Data']
 }
}
report={'base':str(BASE),'results':{}}
for name,checks in FILES.items():
    p=BASE/name
    r={'exists':p.exists(),'warnings':[]}
    if not p.exists():
        report['results'][name]=r; continue
    text=p.read_text(encoding='utf-8')
    if not text.lstrip().startswith('---'):
        r['warnings'].append('missing_frontmatter')
    for pattern in checks['required_headings']:
        if not re.search(pattern,text,re.M):
            r['warnings'].append(f'missing_heading:{pattern}')
    report['results'][name]=r
out=json.dumps(report,indent=2)
print(out)
# exit with nonzero if any warnings
any_warnings=any(v['warnings'] for v in report['results'].values())
if any_warnings:
    sys.exit(2)
else:
    sys.exit(0)
