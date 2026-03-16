import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header, MobileStickyBar } from "@/components/layout";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: { default: "Auto Repair in Littleton, CO | AutoTrek Service Center", template: "%s | AutoTrek Service Center" },
  description: "Trusted auto repair in Littleton, CO for domestic, foreign, EV, and hybrid vehicles. NAPA Service Center with a 36-month/36,000-mile warranty.",
  alternates: { canonical: "/" },
  openGraph: { title: "AutoTrek Service Center", description: "Reliable repairs. Honest service.", url: siteConfig.baseUrl, siteName: siteConfig.name, type: "website" },
  twitter: { card: "summary_large_image", title: "AutoTrek Service Center", description: "Trusted auto repair in Littleton, CO." }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {"@context": "https://schema.org","@type": "AutoRepair",name: siteConfig.name,telephone: siteConfig.phoneDisplay,address: {"@type": "PostalAddress",streetAddress: "8161 S Grant Way",addressLocality: "Littleton",addressRegion: "CO",postalCode: "80122"},openingHours: "Mo-Fr 09:00-17:00"};
  return (<html lang="en"><body className="bg-white pb-20 md:pb-0"><Header /><main id="main">{children}</main><Footer /><MobileStickyBar /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>);
}
