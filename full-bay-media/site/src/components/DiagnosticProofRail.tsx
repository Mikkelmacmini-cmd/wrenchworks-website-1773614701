type ProofItem = {
  stamp: string;
  vehicle: string;
  system: string;
  finding: string;
  outcome: string;
};

const defaultProofItems: ProofItem[] = [
  { stamp: "Today · 10:42 AM", vehicle: "2018 BMW X3", system: "Ignition + fuel", finding: "Misfire under load traced to coil + injector imbalance.", outcome: "Repaired same-day. No repeat CEL after verification drive." },
  { stamp: "Yesterday · 4:15 PM", vehicle: "Ford Transit Fleet Van", system: "Brake system", finding: "Rotor runout + pad taper verified with digital report.", outcome: "Service completed overnight. Vehicle returned before 8 AM route." },
  { stamp: "This week", vehicle: "Subaru Outback", system: "Cooling system", finding: "Pressure loss identified at upper hose connection.", outcome: "Leak fixed before head-gasket damage risk escalated." },
];

export function DiagnosticProofRail({ title = "Diagnostic Proof OS", subtitle = "Recent jobs with documented findings, approval checkpoints, and verified outcomes.", items = defaultProofItems }: { title?: string; subtitle?: string; items?: ProofItem[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 md:p-6" aria-label="Repair evidence rail">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p data-copy-id="proof.eyebrow" className="text-xs uppercase tracking-[0.18em] text-slate-500">Evidence Rail</p>
          <h3 className="mt-1 text-3xl font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 max-w-3xl text-sm">{subtitle}</p>
        </div>
        <div className="hidden rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-900 md:block">No work before approval</div>
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {items.map((item) => (
          <article key={`${item.vehicle}-${item.system}`} className="diagnostic-grid ui-card-depth-2 rounded-xl border border-slate-200 bg-[var(--bg-surface)] p-4">
            <p className="text-xs uppercase tracking-[0.12em] text-slate-500">{item.stamp}</p>
            <h4 className="mt-2 text-lg font-semibold text-slate-900">{item.vehicle}</h4>
            <p className="mt-1 text-xs text-[var(--accent-gold-soft)]">System: {item.system}</p>
            <p className="mt-3 text-sm"><span className="font-semibold text-slate-900">Finding:</span> {item.finding}</p>
            <p className="mt-2 text-sm"><span className="font-semibold text-slate-900">Outcome:</span> {item.outcome}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
