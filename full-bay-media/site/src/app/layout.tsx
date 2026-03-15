import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://autotrekservicecenter.com"),
  title: {
    default: "AutoTrek Service Center | Littleton Auto Repair",
    template: "%s | AutoTrek Service Center",
  },
  description:
    "AutoTrek Service Center provides trusted auto repair, diagnostics, Euro and fleet service in Littleton, CO.",
  keywords: [
    "auto repair littleton co",
    "euro repair littleton",
    "fleet repair littleton",
    "brake repair littleton",
    "check engine light repair",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AutoTrek Service Center | Littleton Auto Repair",
    description:
      "Local-friendly auto repair in Littleton, CO. Diagnostics, maintenance, major service, Euro and fleet repair.",
    url: "https://autotrekservicecenter.com",
    siteName: "AutoTrek Service Center",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoTrek Service Center | Littleton Auto Repair",
    description:
      "Local-friendly auto repair in Littleton, CO. Diagnostics, maintenance, major service, Euro and fleet repair.",
  },
};

// Critical inline CSS for above-the-fold stability (header/hero/CTA), even if full CSS is delayed.
const CRITICAL_CSS = `
:root{--site-header-height:5.5rem;--critical-ink:#0f172a;--critical-surface:#ffffff;--critical-accent:#c62828}
*{box-sizing:border-box}
html,body{margin:0;padding:0;background:var(--critical-surface);color:var(--critical-ink);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif}
main{background:#fff}
header,[data-testid="site-header"]{position:sticky;top:0;z-index:70;display:block;background:rgba(255,255,255,.96);border-bottom:1px solid rgba(148,163,184,.35)}
[aria-labelledby="hero-title"]{position:relative;overflow:hidden;border-bottom:1px solid rgba(148,163,184,.35);min-height:26rem}
[aria-labelledby="hero-title"] img{display:block;width:100%;height:80vh;min-height:620px;object-fit:cover}
#hero-title{margin:.6rem 0 0;font-weight:800;line-height:1.06}
[data-copy-id="hero.subhead"]{max-width:50ch}
.btn-primary,.btn-secondary,.btn-ghost{display:inline-flex;align-items:center;justify-content:center;min-height:44px;border-radius:9999px;padding:.7rem 1.2rem;text-decoration:none;font-weight:700}
.btn-primary{background:linear-gradient(135deg,#d32f2f 0%,var(--critical-accent) 100%);color:#fff;border:1px solid rgba(255,255,255,.28)}
.btn-secondary,.btn-ghost{background:#fff;color:#111827;border:1px solid rgba(75,85,99,.3)}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/critical.css" as="style" />
        <link rel="stylesheet" href="/critical.css" />
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
      </head>
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
