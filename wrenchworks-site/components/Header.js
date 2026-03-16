import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header style={{ backgroundColor: '#1a2332' }} className="sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo.png" alt="WrenchWorks Digital" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/services" className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors">Services</Link>
          <Link href="/case-studies" className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors">Case Studies</Link>
          <Link href="/contact" className="text-gray-300 hover:text-orange-400 text-sm font-medium transition-colors">Contact</Link>
          <Link href="/contact" style={{ backgroundColor: '#f97316' }} className="px-4 py-2 rounded text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            Get a Free Plan
          </Link>
        </nav>

        <button
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ backgroundColor: '#1a2332' }} className="md:hidden border-t border-gray-700 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            <Link href="/services" className="text-gray-300 hover:text-orange-400 text-sm font-medium" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/case-studies" className="text-gray-300 hover:text-orange-400 text-sm font-medium" onClick={() => setOpen(false)}>Case Studies</Link>
            <Link href="/contact" className="text-gray-300 hover:text-orange-400 text-sm font-medium" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/contact" style={{ backgroundColor: '#f97316' }} className="inline-block px-4 py-2 rounded text-white text-sm font-semibold text-center" onClick={() => setOpen(false)}>
              Get a Free Plan
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
