export default function Testimonials(){
  const items = [
    {name:'A. Rivera', role:'Head of Ops', quote:'WrenchWorks transformed our throughput in 6 weeks.', img:'scene-05-keys-returned-640'},
    {name:'S. Patel', role:'CTO', quote:'Clear process, measurable results.', img:'scene-06-review-request-640'}
  ];
  return (
    <section className="my-12 bg-slate-50 p-8 rounded">
      <h3 className="text-2xl font-semibold text-center">What clients say</h3>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {items.map(i=> (
          <blockquote key={i.name} className="p-4 bg-white rounded card flex items-start gap-4">
            <picture className="w-24 flex-shrink-0">
              <source srcSet={`/images/${i.img}.webp`} type="image/webp" />
              <img src={`/images/${i.img.replace('-640','')}.png`} alt={i.name} className="rounded" />
            </picture>
            <div>
              <p className="text-slate-700">“{i.quote}”</p>
              <footer className="mt-3 text-sm text-slate-500">{i.name} — {i.role}</footer>
            </div>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
