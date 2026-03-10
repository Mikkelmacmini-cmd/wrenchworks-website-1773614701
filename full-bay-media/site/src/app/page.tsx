import Image from "next/image";

const business = {
  name: "AutoTrek Service Center",
  phoneDisplay: "(303) 328-3356",
  phoneHref: "tel:+13033283356",
  email: "hello@autotrekservicecenter.com",
  address: "8161 S Grant Way, Littleton, CO 80122",
  hours: "Mon–Fri: 9:00 AM – 5:00 PM",
  city: "Littleton, CO",
  warranty: "36 months / 36,000 miles",
  style: "Local-friendly",
  specialties: ["European vehicles", "Fleet service"],
};

const services = [
  "AC Service & Repair",
  "Check Engine Light Diagnostics",
  "EV & Hybrid Repair",
  "Foreign Auto Repair",
  "Minor Auto Service",
  "Oil & Fluid Changes",
  "Tires & Wheels",
  "4WD Light Inspection",
  "Brake Repair & Service",
  "Dealer Service Alternative",
  "Factory Recommended Major Auto Service",
  "Pre-Purchase Inspection",
  "Steering & Suspension",
  "Transmission Repair",
  "4x4 Auto Repair",
  "Complete Auto Repair",
  "Domestic Auto Repair",
  "Fleet Repair & Service",
  "Maintenance Lights",
  "Preventative Maintenance",
  "Timing Belt Repair",
  "Wheel Alignment",
];

const serviceAreas = [
  "Littleton",
  "Highlands Ranch",
  "Englewood",
  "Lakewood",
  "Centennial",
];

const faqs = [
  {
    q: "Do you work on European vehicles?",
    a: "Yes. Euro repair is one of our core specialties, and we also service domestic vehicles and light fleets.",
  },
  {
    q: "What warranty do you offer?",
    a: "We back qualifying repairs with a 36-month / 36,000-mile warranty.",
  },
  {
    q: "Do you offer financing?",
    a: "Not at the moment. We focus on transparent estimates and clear recommendations so you can prioritize repairs confidently.",
  },
  {
    q: "How do I book?",
    a: "Call us now and our team will schedule your appointment during business hours.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative">
        <Image
          src="/images/hero-shop.webp"
          alt="Auto repair service bays"
          width={1800}
          height={1000}
          className="h-[70vh] w-full object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black" />

        <div className="absolute inset-0 mx-auto flex w-full max-w-6xl flex-col justify-between px-6 py-8 md:px-10">
          <div className="flex items-center justify-between gap-4">
            <div className="relative h-16 w-56 md:h-20 md:w-72">
              <Image src="/autotrek-logo.png" alt="AutoTrek Service Center" fill className="object-contain object-left" />
            </div>
            <a
              href={business.phoneHref}
              className="rounded-full bg-red-600 px-5 py-3 text-sm font-bold hover:bg-red-500"
            >
              Call Now: {business.phoneDisplay}
            </a>
          </div>

          <div className="max-w-3xl pb-10">
            <p className="mb-3 inline-block rounded-full bg-green-700/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Trusted Local Auto Repair in {business.city}
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Honest Auto Repair for Families, Commuters, and Fleets.
            </h1>
            <p className="mt-4 text-lg text-white/90">
              From check engine diagnostics to major service, AutoTrek keeps your vehicle reliable with clear communication and warranty-backed work.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={business.phoneHref} className="rounded-full bg-red-600 px-6 py-3 font-semibold hover:bg-red-500">
                Schedule an Appointment
              </a>
              <a href="#services" className="rounded-full border border-white/40 px-6 py-3 font-semibold hover:bg-white/10">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-4 px-6 py-10 md:grid-cols-3 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/70">Address</p>
          <p className="mt-1 font-semibold">{business.address}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/70">Hours</p>
          <p className="mt-1 font-semibold">{business.hours}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/70">Warranty</p>
          <p className="mt-1 font-semibold">{business.warranty}</p>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <p className="mt-2 text-white/75">Complete care for domestic, euro, and fleet vehicles.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              {service}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-2 md:px-10">
        <div className="rounded-2xl border border-green-600/40 bg-green-950/30 p-6">
          <h3 className="text-2xl font-bold">Why drivers choose AutoTrek</h3>
          <ul className="mt-4 space-y-2 text-white/85">
            <li>• Local-friendly service with clear recommendations</li>
            <li>• Specialized in European and fleet vehicles</li>
            <li>• Dealer-quality work without dealer hassle</li>
            <li>• {business.warranty} on qualifying repairs</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-red-600/40 bg-red-950/20 p-6">
          <h3 className="text-2xl font-bold">Service areas</h3>
          <p className="mt-2 text-white/80">Serving Littleton and nearby communities:</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span key={area} className="rounded-full border border-white/20 px-3 py-1 text-sm">
                {area}, CO
              </span>
            ))}
          </div>
          <a
            href={business.phoneHref}
            className="mt-6 inline-block rounded-full bg-red-600 px-5 py-3 font-semibold hover:bg-red-500"
          >
            Call {business.phoneDisplay}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h3 className="text-3xl font-bold">Customer Reviews</h3>
        <p className="mt-2 text-white/75">See what local drivers are saying.</p>
        <a
          href="https://share.google/aglkPp86GrLFRfT7V"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-full border border-white/30 px-5 py-3 font-semibold hover:bg-white/10"
        >
          Read Google Reviews
        </a>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 md:px-10">
        <h3 className="text-3xl font-bold">FAQs</h3>
        <div className="mt-4 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-2 text-white/80">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-8 text-center md:px-10">
        <h3 className="text-3xl font-bold">Ready to schedule service?</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/80">
          Call now to book your appointment with {business.name}. We’ll help you prioritize what your vehicle needs most.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href={business.phoneHref} className="rounded-full bg-red-600 px-7 py-3 font-bold hover:bg-red-500">
            Schedule an Appointment
          </a>
          <a
            href={`mailto:${business.email}`}
            className="rounded-full border border-white/30 px-7 py-3 font-bold hover:bg-white/10"
          >
            Email Us
          </a>
        </div>
      </section>
    </main>
  );
}
