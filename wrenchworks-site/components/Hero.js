'use client'
export default function Hero(){
  return (
    <section className="flex items-center gap-6">
      <div className="w-48 flex-shrink-0">
        <img src="/images/wrenchworks-logo-640.webp" alt="WrenchWorks logo" className="w-full" />
      </div>
      <div>
        <h2 className="text-2xl font-bold">More booked appointments. Less guesswork.</h2>
        <p className="mt-2 text-slate-700">Rapid prototyping to production — diagnostics, pilots, and scale.</p>
      </div>
    </section>
  )
}
