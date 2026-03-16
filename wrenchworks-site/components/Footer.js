import Link from "next/link";
export default function Footer() {
  return (
    <footer style={{backgroundColor: "#0f1621"}} className="text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img src="/images/logo.png" className="h-10 w-auto mb-4 brightness-0 invert" alt="WrenchWorks Digital" />
            <p className="text-gray-400 text-sm max-w-xs">Auto repair marketing that fills bays, builds reputations, and grows revenue.</p>
            <a href="https://twitter.com" className="inline-flex items-center gap-2 mt-4 text-sm text-gray-400 hover:text-white transition-colors">Twitter / X →</a>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Services</p>
            <ul className="space-y-2">
              <li><Link href="/services/website-build" className="text-sm text-gray-400 hover:text-white transition-colors">Website Build</Link></li>
              <li><Link href="/services/local-seo" className="text-sm text-gray-400 hover:text-white transition-colors">Local SEO</Link></li>
              <li><Link href="/services/gbp-optimization" className="text-sm text-gray-400 hover:text-white transition-colors">GBP Optimization</Link></li>
              <li><Link href="/services/review-funnels" className="text-sm text-gray-400 hover:text-white transition-colors">Review Funnels</Link></li>
              <li><Link href="/services/managed-hosting" className="text-sm text-gray-400 hover:text-white transition-colors">Managed Hosting</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Discover</p>
            <ul className="space-y-2">
              <li><Link href="/case-studies" className="text-sm text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} WrenchWorks Digital. All rights reserved.</p>
          <p className="text-sm text-gray-600">Built for shop owners who want to grow.</p>
        </div>
      </div>
    </footer>
  );
}
