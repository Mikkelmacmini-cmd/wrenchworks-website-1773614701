import Link from "next/link";
import { ArrowRight, MapPin, Award, Wrench } from "lucide-react";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PrimaryCTA, CallCTA } from "@/components/ui";
import { services, areas, siteConfig } from "@/lib/site";

const testimonials = [
  { name: "Michael R.", text: "AutoTrek fixed my transmission issue quickly and honestly. They saved me thousands vs. the dealer quote.", rating: 5 },
  { name: "Sarah T.", text: "Finally found a shop I can trust. Professional, transparent, and fair pricing.", rating: 5 },
  { name: "James P.", text: "Great service on my EV. They actually know what they're doing with modern vehicles.", rating: 5 },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        headline="Reliable Repairs. Honest Service. Local Team You Can Trust."
        subheadline="AutoTrek Service Center delivers honest, transparent auto repair for Littleton drivers. No surprises, no dealership hassle — just expert service you can depend on."
        backgroundImage="/images/hero-mechanic.jpg"
      />

      {/* Trust Badges Section */}
      <section className="bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] py-8">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white text-center">
            <div>
              <Award className="w-8 h-8 mx-auto mb-2 text-[var(--accent)]" />
              <p className="font-semibold">NAPA AutoCare</p>
              <p className="text-sm text-gray-300">Certified Service Center</p>
            </div>
            <div>
              <Wrench className="w-8 h-8 mx-auto mb-2 text-[var(--accent)]" />
              <p className="font-semibold">36-Month / 36k Warranty</p>
              <p className="text-sm text-gray-300">On parts & labor</p>
            </div>
            <div>
              <MapPin className="w-8 h-8 mx-auto mb-2 text-[var(--accent)]" />
              <p className="font-semibold">Local Team</p>
              <p className="text-sm text-gray-300">Serving Littleton since 2015</p>
            </div>
            <div>
              <Award className="w-8 h-8 mx-auto mb-2 text-[var(--accent)]" />
              <p className="font-semibold">Transparent Service</p>
              <p className="text-sm text-gray-300">No surprises ever</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-[var(--primary)] mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            From routine maintenance to complex repairs, we handle all automotive needs for domestic, foreign, EV, and hybrid vehicles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 6).map((service, i) => (
            <div key={service.slug} className="fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <ServiceCard
                name={service.name}
                description={service.short}
                slug={service.slug}
                icon={["🔧", "🛠️", "⚡", "🚗", "🛢️", "🎯"][i]}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 text-lg"
          >
            View All {services.length} Services <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-12">
            <h2 className="text-[var(--primary)] mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Real feedback from Littleton drivers who trust AutoTrek with their vehicles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <TestimonialCard
                  name={testimonial.name}
                  text={testimonial.text}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={siteConfig.reviewUrl}
              className="inline-flex items-center gap-2 text-[var(--primary)] font-semibold hover:gap-3 text-lg"
            >
              Read More Reviews on Google <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12">
          <h2 className="text-[var(--primary)] mb-4">We Serve These Communities</h2>
          <p className="text-xl text-gray-600">
            Serving Littleton and nearby areas with expert auto repair.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-5">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/service-areas/${area.slug}`}
              className="card-elevated text-center hover:-translate-y-1"
            >
              <p className="font-semibold text-[var(--primary)]">{area.name}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[var(--primary)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center text-white space-y-8">
          <div>
            <h2 className="mb-4">Ready to Schedule Your Service?</h2>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">
              Don't wait for problems to worsen. Book your appointment today and experience the AutoTrek difference.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 rounded-lg font-semibold text-[var(--primary)] bg-white hover:bg-gray-100 active:scale-95 transition-all text-lg">
              <Link href="/contact">Schedule Service</Link>
            </button>
            <a
              href="tel:+13033283356"
              className="px-8 py-4 rounded-lg font-semibold border-2 border-white text-white hover:bg-white/10 active:scale-95 transition-all text-lg"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
