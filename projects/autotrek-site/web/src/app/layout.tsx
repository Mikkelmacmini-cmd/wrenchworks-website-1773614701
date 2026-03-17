import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoTrek Service Center | Trusted Auto Repair in Littleton, CO",
  description: "Professional auto repair in Littleton, CO. NAPA AutoCare. Honest service, transparent pricing, trusted local team.",
  openGraph: {
    title: "AutoTrek Service Center",
    description: "Trusted auto repair in Littleton, Colorado",
    url: siteConfig.baseUrl,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1a4d5c" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Header */}
        <header className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
          <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="font-serif font-bold text-2xl text-[var(--primary)]">
              AutoTrek
            </Link>

            {/* Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-gray-700 hover:text-[var(--primary)] font-medium transition">
                Services
              </Link>
              <Link href="/service-areas" className="text-gray-700 hover:text-[var(--primary)] font-medium transition">
                Service Areas
              </Link>
              <Link href="/reviews" className="text-gray-700 hover:text-[var(--primary)] font-medium transition">
                Reviews
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-[var(--primary)] font-medium transition">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-[var(--primary)] font-medium transition">
                Contact
              </Link>
            </nav>

            {/* Call CTA */}
            <a
              href="tel:+13033283356"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] text-white font-semibold hover:bg-[var(--accent-dark)] transition"
            >
              <Phone size={18} />
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-[var(--primary)] text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Business Info */}
              <div>
                <h3 className="font-serif font-bold text-xl mb-4">AutoTrek</h3>
                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex gap-2">
                    <MapPin size={18} className="flex-shrink-0 text-[var(--accent)]" />
                    <div>
                      <p className="font-semibold">{siteConfig.address}</p>
                      <p>{siteConfig.city}, {siteConfig.state} {siteConfig.zip}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Phone size={18} className="flex-shrink-0 text-[var(--accent)]" />
                    <a href={siteConfig.phoneHref} className="hover:text-white">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Clock size={18} className="flex-shrink-0 text-[var(--accent)]" />
                    <p>{siteConfig.hours}</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/services" className="hover:text-white">All Services</Link></li>
                  <li><Link href="/services/oil-fluid-changes-littleton-co" className="hover:text-white">Oil Changes</Link></li>
                  <li><Link href="/services/brake-repair-service-littleton-co" className="hover:text-white">Brakes</Link></li>
                  <li><Link href="/services/ev-hybrid-repair-littleton-co" className="hover:text-white">EV & Hybrid</Link></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                  <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
                  <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
                  <li><a href={siteConfig.reviewUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">Google Reviews</a></li>
                </ul>
              </div>

              {/* Trust */}
              <div>
                <h4 className="font-semibold mb-4">Trust Signals</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ NAPA AutoCare</li>
                  <li>✓ 36mo / 36k Warranty</li>
                  <li>✓ ASE Certified</li>
                  <li>✓ Transparent Pricing</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-[var(--primary-light)] pt-8 text-center text-sm text-gray-400">
              <p>&copy; {new Date().getFullYear()} AutoTrek Service Center. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Mobile Bottom CTA */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[var(--primary)] border-t-2 border-[var(--accent)] p-3 flex gap-2">
          <a
            href="tel:+13033283356"
            className="flex-1 px-4 py-3 rounded-lg bg-[var(--accent)] text-white font-semibold text-center hover:bg-[var(--accent-dark)]"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="flex-1 px-4 py-3 rounded-lg bg-white text-[var(--primary)] font-semibold text-center hover:bg-gray-100"
          >
            Schedule
          </Link>
        </div>

        {/* Mobile bottom padding */}
        <div className="md:hidden h-20"></div>
      </body>
    </html>
  );
}
