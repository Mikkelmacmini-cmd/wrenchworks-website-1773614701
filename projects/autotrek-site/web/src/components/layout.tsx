"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { siteConfig } from "@/lib/site"

function MountainIcon() {
  return (
    <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 21L10 6L15 13L18 9L27 21H1Z" fill="#2d6a2d" />
      <path d="M15 13L18 9L23 16H11L15 13Z" fill="#c0392b" opacity="0.9" />
    </svg>
  )
}

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
      <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <MountainIcon />
          <span className="font-black text-xl tracking-tight text-[#2d6a2d] group-hover:text-[#1a4a1a] transition-colors">
            AutoTrek
          </span>
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
          className="hidden md:inline-flex items-center gap-2 bg-[#c0392b] hover:bg-[#a93226] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-md"
        >
          Call Now: {siteConfig.phoneDisplay}
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
          <a href={siteConfig.phoneHref} className="block w-full text-center bg-[#c0392b] text-white font-bold py-3 rounded-full">
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
              className="bg-[#c0392b] hover:bg-[#a93226] text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:-translate-y-0.5"
            >
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
              <div className="flex items-center gap-2 mb-3">
                <span className="font-black text-xl text-[#2d6a2d]">AutoTrek</span>
                <span className="text-white/40 text-sm">Service Center</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                NAPA AutoCare Center serving Littleton and surrounding communities with honest, expert auto repair.
              </p>
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

          <div className="border-t border-white/10 pt-6 text-white/40 text-sm text-center">
            © 2025 AutoTrek Service Center. All rights reserved.
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
          className="flex-1 rounded-full bg-[#c0392b] px-4 py-3 text-center font-bold text-white text-sm"
        >
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 rounded-full border-2 border-[#c0392b] px-4 py-3 text-center font-bold text-[#c0392b] text-sm"
        >
          Schedule
        </Link>
      </div>
    </div>
  )
}
