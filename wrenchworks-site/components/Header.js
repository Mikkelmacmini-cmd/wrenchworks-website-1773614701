import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: 'rgba(28,28,30,0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(214,207,199,0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/images/logo.png" alt="WrenchWorks Digital" className="h-14 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/services"
            className="text-sm font-medium transition-colors"
            style={{ color: '#E8E2DC' }}
            onMouseEnter={e => (e.target.style.color = '#E85D2A')}
            onMouseLeave={e => (e.target.style.color = '#E8E2DC')}
          >
            Services
          </Link>
          <Link
            href="/testimonials"
            className="text-sm font-medium transition-colors"
            style={{ color: '#E8E2DC' }}
            onMouseEnter={e => (e.target.style.color = '#E85D2A')}
            onMouseLeave={e => (e.target.style.color = '#E8E2DC')}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors"
            style={{ color: '#E8E2DC' }}
            onMouseEnter={e => (e.target.style.color = '#E85D2A')}
            onMouseLeave={e => (e.target.style.color = '#E8E2DC')}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            style={{ backgroundColor: '#E85D2A' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.backgroundColor = '#cf4e1e' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#E85D2A' }}
          >
            Schedule a Call
          </Link>
        </nav>

        <button
          className="md:hidden focus:outline-none"
          style={{ color: '#E8E2DC' }}
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
        <div
          className="md:hidden px-4 pb-5"
          style={{
            backgroundColor: 'rgba(28,28,30,0.97)',
            borderTop: '1px solid rgba(214,207,199,0.1)',
          }}
        >
          <nav className="flex flex-col gap-4 pt-4">
            <Link href="/services" className="text-sm font-medium" style={{ color: '#E8E2DC' }} onClick={() => setOpen(false)}>Services</Link>
            <Link href="/testimonials" className="text-sm font-medium" style={{ color: '#E8E2DC' }} onClick={() => setOpen(false)}>Testimonials</Link>
            <Link href="/contact" className="text-sm font-medium" style={{ color: '#E8E2DC' }} onClick={() => setOpen(false)}>Contact</Link>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 rounded-xl text-white text-sm font-semibold text-center"
              style={{ backgroundColor: '#E85D2A' }}
              onClick={() => setOpen(false)}
            >
              Schedule a Call
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
