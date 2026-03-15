import Head from 'next/head';
import AuditForm from '../components/AuditForm';
import FAQ from '../components/FAQ';

const FAQ_ITEMS = [
  {q: 'What exactly does WrenchWorks do?', a: 'We reduce friction and improve execution consistency with audits, pilots, and scaled rollouts.'},
  {q: 'How long does the audit take?', a: 'Most audits complete in 1–2 weeks depending on scope and availability.'},
  {q: 'Do we need to pause operations?', a: 'No — the process is designed to minimize disruption.'}
]

export default function Contact(){
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Head><title>Contact — WrenchWorks</title></Head>
      <h1 className="text-3xl font-bold">Request an Audit</h1>
      <p className="mt-2">Start with a diagnostic audit: baseline, prioritized plan, and clear next steps.</p>
      <AuditForm />
      <h2 className="mt-8 text-2xl font-semibold">FAQ</h2>
      <FAQ items={FAQ_ITEMS} />
    </div>
  )
}
