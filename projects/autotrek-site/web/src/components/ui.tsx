import Link from "next/link";
import { siteConfig } from "@/lib/site";
export function PrimaryCTA({ href = "/contact", label = "Schedule an Appointment" }: { href?: string; label?: string }) { return <Link href={href} className="rounded-lg bg-[#C62828] px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-red-700">{label}</Link>; }
export function CallCTA() { return <a href={siteConfig.phoneHref} className="rounded-lg border border-[#C62828] px-5 py-3 font-semibold text-[#C62828] transition hover:bg-red-50">Call {siteConfig.phoneDisplay}</a>; }
export function PlaceholderImage({ alt }: { alt: string }) { return <div role="img" aria-label={alt} className="h-48 w-full rounded-xl border border-dashed border-gray-300 bg-gray-100 p-4 text-sm text-gray-500">Image placeholder: {alt}</div>; }
