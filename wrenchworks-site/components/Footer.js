export default function Footer(){
  return (
    <footer className="mt-12 border-t pt-8 text-sm text-slate-600">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>© {new Date().getFullYear()} WrenchWorks Digital</div>
        <nav className="space-x-4">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
