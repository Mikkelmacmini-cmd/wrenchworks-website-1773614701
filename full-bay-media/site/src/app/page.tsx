import Image from "next/image";

const pillars = [
  {
    title: "Diagnose fast",
    detail:
      "Messaging that makes shop owners feel understood in seconds, not scroll fatigue.",
  },
  {
    title: "Prove authority",
    detail:
      "Position Full Bay Media as the growth partner for serious auto repair operators.",
  },
  {
    title: "Convert clearly",
    detail:
      "Single focused CTA flow: Book a Diag Call with no distractions.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070b14] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(72,111,255,0.28),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(0,224,255,0.22),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(137,65,255,0.2),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:46px_46px]" />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-8 md:px-10 lg:px-12">
        <header className="mb-14 flex items-center justify-between rounded-full border border-white/15 bg-white/5 px-5 py-3 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Image src="/full-bay-logo.svg" alt="Full Bay Media" width={142} height={30} />
          </div>
          <a
            href="#"
            className="rounded-full border border-cyan-300/40 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20"
          >
            Book a Diag Call
          </a>
        </header>

        <section className="grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.24em] text-cyan-100/80">
              Built for serious growth
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Premium growth systems for repair shops that refuse mediocre marketing.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-white/75 md:text-lg">
              Full Bay Media combines high-performance web experiences, local search dominance,
              and review funnel automation to keep your bays full with better jobs.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#"
                className="rounded-full bg-gradient-to-r from-cyan-300 to-indigo-300 px-6 py-3 text-sm font-bold text-[#091022] transition hover:brightness-110"
              >
                Book a Diag Call
              </a>
              <a
                href="#services"
                className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/6 p-6 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-cyan-100/70">Operator Snapshot</p>
            <p className="mt-4 text-3xl font-semibold">+41%</p>
            <p className="mt-2 text-sm text-white/75">Average lift in booked diagnostics after launch cycles.</p>
            <div className="mt-6 space-y-2 text-sm text-white/85">
              <p>• Site + funnel alignment</p>
              <p>• Local visibility engine</p>
              <p>• Automated review momentum</p>
            </div>
          </div>
        </section>

        <section id="services" className="mt-16 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-0.5 hover:bg-white/8"
            >
              <h2 className="text-lg font-semibold">{pillar.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{pillar.detail}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
