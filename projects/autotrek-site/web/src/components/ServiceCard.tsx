import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  slug: string;
  icon?: string;
}

export function ServiceCard({ name, description, slug, icon = "🔧" }: ServiceCardProps) {
  return (
    <Link href={`/services/${slug}`}>
      <div className="card-elevated group cursor-pointer hover:-translate-y-1">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[var(--primary)] group-hover:text-[var(--accent)] mb-3">
          {name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <div className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold group-hover:gap-3">
          Learn More <ArrowRight size={16} className="transition-transform" />
        </div>
      </div>
    </Link>
  );
}
