import Link from "next/link";
import { Phone } from "lucide-react";

export function PrimaryCTA({ label = "Schedule Service" }: { label?: string }) {
  return (
    <Link
      href="/contact"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[var(--primary)] hover:bg-[var(--primary-dark)] active:scale-95 transition-all"
    >
      {label}
    </Link>
  );
}

export function CallCTA() {
  return (
    <a
      href="tel:+13033283356"
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[var(--accent-dark)] hover:bg-[var(--accent)] active:scale-95 transition-all"
    >
      <Phone size={18} />
      Call Now
    </a>
  );
}

export function SecondaryButton({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary-light)] hover:text-white transition-all"
    >
      {label}
    </Link>
  );
}

export function Badge({ label, variant = "primary" }: { label: string; variant?: "primary" | "accent" | "success" }) {
  const baseClasses = "inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold";
  const variantClasses = {
    primary: "bg-[var(--primary)]/10 text-[var(--primary)]",
    accent: "bg-yellow-100 text-[var(--accent-dark)]",
    success: "bg-green-100 text-[var(--success)]",
  };

  return <span className={`${baseClasses} ${variantClasses[variant]}`}>{label}</span>;
}
