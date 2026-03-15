import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

export default function Home(){
  return (
    <div>
      <Head><title>WrenchWorks — Audit, Pilot & Scale Operations</title></Head>
      <main className="min-h-screen flex items-center justify-center p-8">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold">Stop Firefighting. Build an Operating System That Scales.</h1>
          <p className="mt-4 text-lg">Find and fix operational bottlenecks with a diagnostic audit, validate improvements with a pilot, then scale proven systems with measurable results.</p>
          <nav className="mt-6 space-x-4">
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="mt-8"><Hero /></div>
          <CTA label="Start My Diagnostic Audit" sub="Get a clear baseline, priority map, and next-step plan." href="/contact" />
        </motion.div>
      </main>
    </div>
  )
}
