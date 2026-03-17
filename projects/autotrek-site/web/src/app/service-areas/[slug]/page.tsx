import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { areas, siteConfig } from "@/lib/site";
export function generateStaticParams() { return areas.map((a) => ({ slug: a.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const area = areas.find((a) => a.slug === params.slug); if (!area) return {}; return { title: `Auto Repair Near ${area.name}`, description: `${area.title}. Call ${siteConfig.phoneDisplay}.`, alternates: { canonical: `/service-areas/${area.slug}` } }; }
export default function AreaPage({ params }: { params: { slug: string } }) { const area = areas.find((a) => a.slug === params.slug); if (!area) notFound(); return <div className="mx-auto max-w-4xl px-4 py-16"><nav className="mb-4 text-sm"><Link href="/">Home</Link> / <Link href="/service-areas">Service Areas</Link> / {area.name}</nav><h1 className="text-4xl font-bold">{area.title}</h1><p className="mt-4 text-gray-700">From diagnostics and brakes to alignment and more, our Littleton team supports drivers in {area.name} with transparent, dependable work.</p></div>; }
