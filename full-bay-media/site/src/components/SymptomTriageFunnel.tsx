"use client";

import { useMemo, useState } from "react";

type Path = { id: string; symptom: string; urgency: "Safe to drive" | "Use caution" | "Stop driving"; action: string; note: string };

const paths: Path[] = [
  { id: "check-engine", symptom: "Check engine light", urgency: "Use caution", action: "Book a diagnostic inspection", note: "Driving may be possible short-term, but avoid long trips." },
  { id: "brakes", symptom: "Brake noise / vibration", urgency: "Stop driving", action: "Call for a same-day brake safety check", note: "If pedal feel changes, do not continue driving." },
  { id: "overheat", symptom: "Overheating", urgency: "Stop driving", action: "Pull over and call an advisor immediately", note: "Continuing can cause major engine damage." },
  { id: "suspension", symptom: "Pulling / clunks / rough ride", urgency: "Use caution", action: "Book suspension and alignment diagnosis", note: "Drive short distances only until inspected." },
  { id: "maintenance", symptom: "Overdue maintenance", urgency: "Safe to drive", action: "Schedule preventive service this week", note: "Preventive work avoids higher repair costs." },
];

const urgencyStyle: Record<Path["urgency"], string> = { "Safe to drive": "text-emerald-700", "Use caution": "text-amber-700", "Stop driving": "text-rose-700" };

export function SymptomTriageFunnel() {
  const [pathId, setPathId] = useState(paths[0].id);
  const [hours, setHours] = useState<"now" | "today" | "week">("today");
  const selected = useMemo(() => paths.find((p) => p.id === pathId) ?? paths[0], [pathId]);
  const ctaHref = `sms:+13033283356?body=${encodeURIComponent(`Hi AutoTrek, I need help with ${selected.symptom.toLowerCase()}. Best time: ${hours}.`)}`;

  return (
    <section id="triage" className="diagnostic-grid rounded-3xl border border-slate-200 bg-white p-6 md:p-8" aria-labelledby="triage-title">
      <p className="text-xs uppercase tracking-[0.16em] text-[var(--accent-gold-soft)]">Quick Diagnosis</p>
      <h2 id="triage-title" className="mt-2 font-bold text-slate-900">2-Step Symptom Triage</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <label className="rounded-xl border border-slate-200 bg-[var(--bg-surface)] p-4 text-sm">
          <span className="block text-xs uppercase tracking-[0.14em] text-slate-500">1. Symptom</span>
          <select aria-label="Select symptom" value={pathId} onChange={(e) => setPathId(e.target.value)} className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900">
            {paths.map((path) => <option key={path.id} value={path.id}>{path.symptom}</option>)}
          </select>
        </label>

        <label className="rounded-xl border border-slate-200 bg-[var(--bg-surface)] p-4 text-sm">
          <span className="block text-xs uppercase tracking-[0.14em] text-slate-500">2. Timing</span>
          <select aria-label="Select timing" value={hours} onChange={(e) => setHours(e.target.value as "now" | "today" | "week")} className="mt-2 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900">
            <option value="now">Need help now</option><option value="today">Today</option><option value="week">This week</option>
          </select>
        </label>

        <div className="rounded-xl border border-slate-200 bg-[var(--bg-surface)] p-4 text-sm">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500">Recommended next step</p>
          <p className={`mt-2 text-sm font-semibold ${urgencyStyle[selected.urgency]}`}>{selected.urgency}</p>
          <p className="mt-2 text-slate-900">{selected.action}</p>
          <p className="mt-2 text-xs text-slate-600">{selected.note}</p>
          <a href={ctaHref} className="btn-primary ui-pressable mt-4 inline-block rounded-full px-4 py-2 font-semibold">Request Callback</a>
        </div>
      </div>
    </section>
  );
}
