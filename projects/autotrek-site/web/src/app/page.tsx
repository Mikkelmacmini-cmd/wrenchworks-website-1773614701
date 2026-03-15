import Link from "next/link";
import Image from "next/image";
import { CallCTA, PrimaryCTA } from "@/components/ui";
import { areas, services, siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Trusted Auto Repair in Littleton, CO</p>
          <h1 className="text-4xl font-bold">Reliable Repairs. Honest Service. Local Team You Can Trust.</h1>
          <p className="text-lg text-gray-700">At AutoTrek Service Center, we help Littleton drivers stay safe and confident on the road—without dealership hassle.</p>
          <div className="flex flex-wrap gap-3"><PrimaryCTA /><CallCTA /></div>
          <p className="text-sm text-gray-600">{siteConfig.hours} | {siteConfig.address}</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <picture>
            <source srcSet="/images/hero-a.png" media="(min-width:1024px)" />
            <img src="/images/hero-a.png" alt="AutoTrek storefront and service bays in Littleton, CO" style={{width:'100%',height:'100%',objectFit:'cover'}} />
          </picture>
        </div>
      </section>

      <section className="bg-gray-50 py-8">
        <div className="mx-auto grid max-w-6xl gap-3 px-4 text-sm md:grid-cols-4">
          <p>NAPA AutoCare Service Center</p>
          <p>36-Month / 36,000-Mile Warranty</p>
          <p>Domestic, Foreign, EV & Hybrid</p>
          <p>Transparent Service</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="mb-6 text-3xl font-bold">Top Services</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {services.slice(0,10).map(s=> (
            <Link key={s.slug} href={`/services/${s.slug}`} className="rounded-xl border p-4 transition hover:-translate-y-0.5">
              <h3 className="font-semibold">{s.name}</h3>
              <p className="text-sm text-gray-600">{s.short}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-4 text-3xl font-bold">Serving Littleton and Nearby Communities</h2>
          <div className="flex flex-wrap gap-3">{areas.map(a=><Link key={a.slug} href={`/service-areas/${a.slug}`} className="rounded-full border px-4 py-2 text-sm">{a.name}</Link>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-3xl font-bold">See What Customers Are Saying</h2>
        <p className="my-4 text-gray-700">We’re proud to earn the trust of drivers throughout Littleton and surrounding areas.</p>
        <a className="font-semibold text-[#1F7A4C] underline" href={siteConfig.reviewUrl}>Read Our Google Reviews</a>
      </section>

      <section className="bg-[#111827] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold">Ready to Schedule Auto Service in Littleton?</h2>
          <p className="my-3">If your vehicle needs maintenance or repair, our team is ready to help.</p>
          <div className="flex gap-3"><PrimaryCTA /><CallCTA /></div>
        </div>
      </section>
    </div>
  );
}
