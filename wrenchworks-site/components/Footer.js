import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1C1E' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col gap-4">
            <img src="/images/logo.png" alt="WrenchWorks Digital" className="h-10 w-auto" />
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: '#6B6560' }}>
              Growth systems for auto repair shops.
            </p>
          </div>

          <div>
            <h3
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ color: '#D4A853' }}
            >
              Pages
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/services', label: 'Services' },
                { href: '/case-studies', label: 'Case Studies' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="transition-colors"
                    style={{ color: '#E8E2DC' }}
                    onMouseEnter={e => (e.target.style.color = '#E85D2A')}
                    onMouseLeave={e => (e.target.style.color = '#E8E2DC')}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3
              className="text-xs uppercase tracking-widest font-semibold mb-5"
              style={{ color: '#D4A853' }}
            >
              Get in Touch
            </h3>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: '#6B6560' }}>
              Ready to grow your shop? We would love to hear from you.
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 shadow-md"
              style={{ backgroundColor: '#E85D2A' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.backgroundColor = '#cf4e1e' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#E85D2A' }}
            >
              Schedule a Free Call
            </Link>
          </div>
        </div>

        <div
          className="mt-12 pt-6 text-center text-xs"
          style={{ borderTop: '1px solid rgba(214,207,199,0.12)', color: '#6B6560' }}
        >
          &copy; {new Date().getFullYear()} WrenchWorks Digital. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
