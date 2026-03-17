import Link from "next/link";
import { CallCTA, PrimaryCTA } from "./ui";

interface HeroProps {
  headline: string;
  subheadline: string;
  cta1?: string;
  cta2?: string;
  backgroundImage?: string;
}

export function Hero({ headline, subheadline, cta1 = "Schedule Service", cta2 = "Call Now", backgroundImage = "/images/hero-mechanic.jpg" }: HeroProps) {
  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] flex items-center px-4 py-16 md:py-24"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-dark)]/90 to-[var(--primary)]/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          {/* Subheadline */}
          <p className="text-[var(--accent)] font-semibold text-lg md:text-xl fade-in">
            Professional Auto Repair in Littleton, Colorado
          </p>

          {/* Headline */}
          <h1 className="text-white fade-in fade-in-delay-1">
            {headline}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-100 leading-relaxed max-w-xl fade-in fade-in-delay-2">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 md:gap-4 fade-in fade-in-delay-3">
            <PrimaryCTA label={cta1} />
            <CallCTA />
          </div>
        </div>
      </div>
    </section>
  );
}
