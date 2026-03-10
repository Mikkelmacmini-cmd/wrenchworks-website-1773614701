import Image from "next/image";
import Link from "next/link";
import { featuredServices } from "@/lib/autotrek-services";

const business = {
  name: "AutoTrek Service Center",
  phoneDisplay: "(303) 328-3356",
  phoneHref: "tel:+13033283356",
  address: "8161 S Grant Way, Littleton, CO 80122",
  hours: "Mon–Fri 9:00 AM – 5:00 PM",
  warranty: "36 months / 36,000 miles",
  reviewUrl: "https://share.google/aglkPp86GrLFRfT7V",
};

const serviceAreas = ["Littleton", "Highlands Ranch", "Englewood", "Lakewood", "Centennial"];

const trustPoints = [
  "Specialized in European and fleet vehicles",
  "3 year / 36,000 mile nationwide warranty",
  "Local-friendly service with clear communication",
  "Dealer-level diagnostics without dealer hassle",
];

const faqs = [
  {
    q: "Do you work on European vehicles?",
    a: "Yes — Euro vehicles are one of our specialties, along with domestic vehicles and fleet accounts.",
  },
  {
    q: "Do you provide a warranty?",
    a: "Absolutely. We stand behind our repairs with a 36 months / 36,000 miles warranty.",
  },
  {
    q: "Do you offer financing?",
    a: "Not at this time. We focus on transparent inspections and helping you prioritize the most important repairs first.",
  },
  {
    q: "How do I schedule?",
    a: "Call us at (303) 328-3356 and we’ll get your appointment locked in.",
  },
];

export default function Home() {
  return (
    <main className="bg-white text-[#1f2937]">
      <header className="border-b border-[#e5e7eb] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:px-10">
          <div className="relative h-14 w-52 md:h-16 md:w-64">
            <Image src="/autotrek-logo.png" alt="AutoTrek Service Center logo" fill className="object-contain object-left" priority />
          </div>
          <a href={business.phoneHref} className="rounded-full bg-[#dc2626] px-5 py-2 text-sm font-bold text-white hover:bg-[#b91c1c]">
            Schedule an Appointment
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-[#e5e7eb]">
        <Image
          src="/images/autotrek-hero-current.png"
          alt="AutoTrek technician working on a truck in the shop"
          width={2200}
          height={1200}
          className="h-[72vh] w-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 mx-auto flex w-full max-w-6xl items-end px-6 py-10 md:px-10 md:py-14">
          <div className="max-w-3xl text-white">
            <p className="mb-4 text-sm font-medium text-[#bbf7d0]">Serving Littleton and nearby communities</p>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">Reliable Auto Repair in Littleton, CO</h1>
            <p className="mt-4 text-lg text-white/90">
              Honest diagnostics, quality repairs, and friendly service for daily drivers, European vehicles, and fleet accounts.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="rounded-full bg-[#dc2626] px-6 py-3 font-semibold text-white hover:bg-[#b91c1c]">
                Schedule an Appointment
              </a>
              <a href="#services" className="rounded-full border border-white/70 px-6 py-3 font-semibold text-white hover:bg-white/15">
                View Services
              </a>
            </div>

          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-8 md:grid-cols-2 md:px-10">
        <div className="rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
          <p className="text-sm text-[#6b7280]">Address</p>
          <p className="mt-1 font-semibold">{business.address}</p>
        </div>
        <div className="rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-5">
          <p className="text-sm text-[#6b7280]">Hours</p>
          <p className="mt-1 font-semibold">{business.hours}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h2 className="text-3xl font-bold text-[#111827]">About Us</h2>
        <p className="mt-3 text-[#4b5563]">
          Since 2009, AutoTrek Service Center has been a trusted name in auto repair for Littleton and surrounding communities.
          We’re committed to high-quality service, fair pricing, and a local family atmosphere that keeps customers coming back.
        </p>
        <p className="mt-3 text-[#4b5563]">
          As a family-owned and operated shop, our team brings decades of combined experience and modern diagnostic tools to every visit.
          We service both foreign and domestic vehicles, along with fleet accounts, and we focus on clear communication from start to finish.
        </p>
        <p className="mt-3 text-[#4b5563]">
          Whether you need routine maintenance or a complex repair, we provide complete, accurate assessments and practical next steps.
          Our goal is simple: fix it right, treat people fairly, and get you safely back on the road.
        </p>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[#111827]">Auto Services We Offer</h2>
            <p className="mt-2 text-[#4b5563]">Our most requested services in Littleton.</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-xl border border-[#e5e7eb] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Image src={service.image} alt={service.title} width={1200} height={900} className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
              <div className="p-4">
                <h3 className="font-semibold text-[#111827]">{service.title}</h3>
                <p className="mt-2 text-sm text-[#4b5563]">{service.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link href="/services" className="mt-6 inline-block text-sm font-semibold text-[#166534] underline underline-offset-4">
          See our full list of services
        </Link>
      </section>

      <section className="border-y border-[#e5e7eb] bg-[#f9fafb]">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 md:grid-cols-2 md:px-10">
          <div>
            <h3 className="text-2xl font-bold text-[#111827]">Why Drivers Choose AutoTrek</h3>
            <ul className="mt-4 space-y-2 text-[#374151]">
              {trustPoints.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <a href={business.phoneHref} className="mt-6 inline-block rounded-full bg-[#166534] px-6 py-3 font-semibold text-white hover:bg-[#14532d]">
              Talk to Our Team
            </a>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#111827]">Service Areas</h3>
            <p className="mt-2 text-[#4b5563]">Helping drivers across the south Denver metro area.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((city) => (
                <span key={city} className="rounded-full border border-[#d1d5db] bg-white px-3 py-1 text-sm">
                  {city}, CO
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h3 className="text-2xl font-bold text-[#111827]">Inside AutoTrek</h3>
        <p className="mt-2 text-[#4b5563]">Real photos from the shop and facility.</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <Image src="/images/autotrek-shop-floor-2.png" alt="Wide view of AutoTrek service bays" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-sm">
            <Image src="/images/autotrek-building.png" alt="AutoTrek Service Center storefront" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h3 className="text-2xl font-bold text-[#111827]">Reviews from Local Drivers</h3>
        <p className="mt-2 text-[#4b5563]">See what customers are saying about AutoTrek Service Center.</p>
        <a
          href={business.reviewUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-full border border-[#111827] px-5 py-3 font-semibold hover:bg-[#f3f4f6]"
        >
          Read Google Reviews
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h3 className="text-2xl font-bold text-[#111827]">Frequently Asked Questions</h3>
        <div className="mt-4 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-[#e5e7eb] bg-white p-4">
              <summary className="cursor-pointer font-semibold">{faq.q}</summary>
              <p className="mt-2 text-[#4b5563]">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#111827] py-12 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center md:px-10">
          <h3 className="text-3xl font-bold">Need service? Let’s get you scheduled.</h3>
          <p className="mx-auto mt-3 max-w-2xl text-white/85">
            Call {business.phoneDisplay} now and our team will help you pick the right appointment time.
          </p>
          <a href={business.phoneHref} className="mt-6 inline-block rounded-full bg-[#dc2626] px-8 py-3 font-bold text-white hover:bg-[#b91c1c]">
            Schedule an Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
