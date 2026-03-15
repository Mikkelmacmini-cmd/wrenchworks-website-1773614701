import Link from 'next/link'
export default function Header(){
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-xl">WrenchWorks</Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/services">Services</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
      {/* centered hero overlap placeholder: use negative margin on pages to overlap hero under header */}
    </header>
  )
}