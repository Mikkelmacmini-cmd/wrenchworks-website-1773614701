export default function Services(){
  const services = [
    {title:'Operational Audit', desc:'Identify bottlenecks, KPIs, and quick wins.'},
    {title:'Pilot & Validation', desc:'Run small pilots to validate impact.'},
    {title:'Scale & Automate', desc:'Standardize processes and scale reliably.'}
  ];
  return (
    <section className="my-12">
      <h3 className="text-2xl font-semibold text-center">What we do</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(s=> (
          <div key={s.title} className="card p-6">
            <h4 className="text-lg font-bold text-slate-900">{s.title}</h4>
            <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            <button className="mt-4 inline-block px-4 py-2 rounded bg-[var(--brand-500)] text-white">Learn more</button>
          </div>
        ))}
      </div>
    </section>
  );
}
