import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a2332' }} className="text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3">
            <img src="/images/logo.png" alt="WrenchWorks Digital" className="h-10 w-auto" />
            <p className="text-sm text-gray-400 max-w-xs">Growth systems for auto repair shops.</p>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Pages</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/" className="hover:text-orange-400 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-orange-400 transition-colors">Services</Link></li>
              <li><Link href="/case-studies" className="hover:text-orange-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Get in Touch</h3>
            <p className="text-sm mb-3">Ready to grow your shop? We would love to hear from you.</p>
            <Link href="/contact" style={{ backgroundColor: '#f97316' }} className="inline-block px-4 py-2 rounded text-white text-sm font-semibold hover:opacity-90 transition-opacity">
              Schedule a Free Call
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} WrenchWorks Digital. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
