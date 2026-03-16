import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm border-b border-gray-100" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/"><img src="/images/logo.png" className="h-10 w-auto" alt="WrenchWorks Digital" /></Link>
        <nav className="hidden md:flex items-center gap-8">
          <a href="/#solutions" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Solutions</a>
          <a href="/#results" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Results</a>
          <a href="/#process" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Process</a>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
        </nav>
        <a href="/contact" className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-orange-500 transition-colors duration-200">Let's Talk →</a>
      </div>
    </header>
  );
}
