import Link from "next/link";
import { areas } from "@/lib/site";
export default function ServiceAreas() { return <div className="mx-auto max-w-5xl px-4 py-16"><h1 className="text-4xl font-bold">Service Areas</h1><p className="my-4 text-gray-700">AutoTrek proudly serves Littleton and surrounding communities.</p><div className="grid gap-3 md:grid-cols-2">{areas.map((a)=><Link key={a.slug} href={`/service-areas/${a.slug}`} className="rounded-xl border p-4">{a.name}</Link>)}</div></div>; }
