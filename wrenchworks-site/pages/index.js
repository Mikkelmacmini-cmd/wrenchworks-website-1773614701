import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
export default function Home(){
  return (
    <div>
      <Head><title>WrenchWorks — Home</title></Head>
      <main className="min-h-screen flex items-center justify-center p-8">
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-center max-w-3xl">
          <h1 className="text-4xl font-bold">WrenchWorks</h1>
          <p className="mt-4 text-lg">Engineering services for modern makers.</p>
          <nav className="mt-6 space-x-4">
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="mt-8"><Hero /></div>
        </motion.div>
      </main>
    </div>
  )
}
