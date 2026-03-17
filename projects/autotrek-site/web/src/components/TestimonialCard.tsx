import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  text: string;
  rating: number;
}

export function TestimonialCard({ name, text, rating }: TestimonialCardProps) {
  return (
    <div className="card-elevated space-y-4">
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-[var(--accent)] text-[var(--accent)]" : "text-gray-300"}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 leading-relaxed italic">&quot;{text}&quot;</p>

      {/* Name */}
      <p className="font-semibold text-[var(--primary)]">{name}</p>
    </div>
  );
}
