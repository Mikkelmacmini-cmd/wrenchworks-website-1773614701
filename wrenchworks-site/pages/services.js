import Head from 'next/head';
import CTA from '../components/CTA';
export default function Services(){
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Head><title>Services — WrenchWorks</title></Head>
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-4">We help service and operations teams reduce friction and scale performance with a practical, measurable approach.</p>
      <section className="mt-6">
        <h2 className="font-semibold">Audit</h2>
        <p className="mt-2">A structured, low-disruption deep dive into workflow, tooling, handoffs and quality controls. You get a clear baseline, prioritized fixes, and an implementation path.</p>
      </section>
      <section className="mt-4">
        <h2 className="font-semibold">Pilot & Rollout</h2>
        <p className="mt-2">Start with a focused pilot to validate improvements, then roll out with playbooks, enablement and governance so gains persist.</p>
      </section>
      <CTA label="Start My Diagnostic Audit" sub="60-minute scoping call. No disruption to daily ops." href="/contact" />
    </div>
  )
}
