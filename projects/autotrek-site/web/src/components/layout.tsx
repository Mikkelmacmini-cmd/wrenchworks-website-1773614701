"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { siteConfig } from "@/lib/site"



export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-black/10" : "border-b border-gray-100"
      }`}
    >
      <a href="#main" className="sr-only focus:not-sr-only">Skip to main content</a>
      <div className="w-full flex items-center justify-between px-6 py-2">
        {/* Logo — large, locked far left */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <img src="/images/logo.jpg" alt="AutoTrek Service Center" className="h-24 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-700">
          <Link href="/services" className="hover:text-[#2d6a2d] transition-colors">Services</Link>
          <Link href="/about" className="hover:text-[#2d6a2d] transition-colors">About</Link>
          <Link href="/reviews" className="hover:text-[#2d6a2d] transition-colors">Reviews</Link>
          <Link href="/contact" className="hover:text-[#2d6a2d] transition-colors">Contact</Link>
        </nav>

        {/* CTA */}
        <a
          href={siteConfig.phoneHref}
          className="hidden md:inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-8.33-8.33 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          Call Now
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-gray-700 flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current" />
          <div className="w-5 h-0.5 bg-current" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link href="/services" className="block font-semibold text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/about" className="block font-semibold text-gray-700 py-2" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/reviews" className="block font-semibold text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <Link href="/contact" className="block font-semibold text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Contact</Link>
          <a href={siteConfig.phoneHref} className="block w-full text-center bg-[#D32F2F] text-white font-bold py-3 rounded-full">
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  )
}

export function Footer() {
  return (
    <footer>
      {/* Footer CTA strip */}
      <div className="bg-[#0f1a0f] py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Ready to Get<br />
            <span style={{ color: "#c0392b" }}>Back on the Road?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Call us or schedule service online. We respond same day.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={siteConfig.phoneHref}
              className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#b71c1c] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-8.33-8.33 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
              Call {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/services"
              className="border-2 border-[#2d6a2d] hover:bg-[#2d6a2d] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-[#0a120a] py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="mb-3">
                <img src="/images/logo.jpg" alt="AutoTrek Service Center" className="h-10 w-auto brightness-0 invert" />
              </div>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Your neighborhood mechanic — serving Littleton and surrounding communities with honest, expert auto repair.
              </p>
              <div className="flex gap-3 items-center">
                <img src="/images/napa-autocare.jpg" alt="NAPA AutoCare Center" className="h-9 w-auto object-contain brightness-0 invert opacity-60" />
                <img src="/images/ase-certified.jpg" alt="ASE Certified" className="h-9 w-auto object-contain brightness-0 invert opacity-60" />
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-1 text-white/60 text-sm">
                <p>{siteConfig.address}</p>
                <p><a href={siteConfig.phoneHref} className="hover:text-[#c0392b] transition-colors">{siteConfig.phoneDisplay}</a></p>
                <p>{siteConfig.hours}</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-3 text-sm uppercase tracking-wider">Quick Links</h4>
              <div className="space-y-1 text-sm">
                <Link href="/services" className="block text-white/60 hover:text-white transition-colors">Services</Link>
                <Link href="/about" className="block text-white/60 hover:text-white transition-colors">About Us</Link>
                <Link href="/reviews" className="block text-white/60 hover:text-white transition-colors">Reviews</Link>
                <Link href="/contact" className="block text-white/60 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-white/40 text-sm">
            <p>© {new Date().getFullYear()} AutoTrek Service Center. All rights reserved.</p>
            <p>Serving Littleton · Highlands Ranch · Englewood · Centennial · Lakewood</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white p-3 md:hidden shadow-2xl">
      <div className="mx-auto flex max-w-md gap-2">
        <a
          href={siteConfig.phoneHref}
          className="flex-1 rounded-full bg-[#c0392b] px-4 py-3 text-center font-bold text-white text-sm inline-flex items-center justify-center gap-2"
        >
          <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-8.33-8.33 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full border-2 border-[#D32F2F] px-4 py-3 text-center font-bold text-[#D32F2F] text-sm"
        >
          Schedule
        </Link>
      </div>
    </div>
  )
}
