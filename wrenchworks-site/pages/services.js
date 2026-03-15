import Head from 'next/head';
import CTA from '../components/CTA';
export default function Services(){
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Head><title>Services — WrenchWorks</title></Head>
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-4">We help service and operations teams reduce friction and scale performance with a practical, measurable approach.</p>
      <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/services/gbp-optimization" className="block p-4 border rounded">Google Business Profile Optimization</a>
        <a href="/services/local-seo" className="block p-4 border rounded">Local SEO</a>
        <a href="/services/review-funnels" className="block p-4 border rounded">Review Funnels</a>
        <a href="/services/website-build" className="block p-4 border rounded">Website Build</a>
        <a href="/services/managed-hosting" className="block p-4 border rounded">Managed Hosting</a>
      </section>
      <div className="mt-6">
        <CTA label="Start My Diagnostic Audit" sub="60-minute scoping call. No disruption to daily ops." href="/contact" />
      </div>
    </div>
  )
}
