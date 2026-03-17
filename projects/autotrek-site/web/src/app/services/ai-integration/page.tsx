"use client";
import Head from 'next/head'
import Link from 'next/link'
import { Header, Footer } from '@/components/layout'

const features = [
  { title: 'AI-Powered Chat', desc: '24/7 chat for inquiries, estimates, and scheduling.' },
  { title: 'Automated Follow-Ups', desc: 'Automatic review requests and service reminders.' },
  { title: 'Smart Scheduling', desc: 'Efficient booking and calendar optimization.' },
  { title: 'GBP Optimization', desc: 'AI-driven GBP posts and responses.' },
  { title: 'Auto Diagnostics', desc: 'AI-assisted diagnostics summaries for techs.' },
  { title: 'Analytics', desc: 'AI-generated insights for growth.' },
]

export default function AIIntegrationPage(){
  return (
    <div>
      <Head>
        <title>AI Integration — AutoTrek</title>
        <meta name="description" content="AI tools for auto repair: chat, scheduling, GBP optimization, and more." />
      </Head>
      <Header />
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AI Integration for AutoTrek</h1>
          <p className="text-lg opacity-90">Automate the busywork, so your team can focus on fixing cars.</p>
        </div>
      </section>
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-xl shadow p-6 text-center">
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-700">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold mb-2">See it in action</h2>
          <p className="mb-4">Schedule a call to discuss a tailored AI plan for your shop.</p>
          <Link href="/contact" className="inline-block bg-[#1F7A4C] px-5 py-3 rounded-lg font-semibold">Schedule a Call</Link>
        </div>
      </section>
      <Footer />
    </div>
  )
}
