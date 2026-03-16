export default function Testimonials(){
  const items = [
    {name:'A. Rivera', role:'Head of Ops', quote:'WrenchWorks transformed our throughput in 6 weeks.'},
    {name:'S. Patel', role:'CTO', quote:'Clear process, measurable results.'}
  ];
  return (
    <section className="my-12 bg-slate-50 p-8 rounded">
      <h3 className="text-2xl font-semibold text-center">What clients say</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map(i=> (
          <blockquote key={i.name} className="p-4 bg-white rounded card">
            <p className="text-slate-700">“{i.quote}”</p>
            <footer className="mt-3 text-sm text-slate-500">{i.name} — {i.role}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
