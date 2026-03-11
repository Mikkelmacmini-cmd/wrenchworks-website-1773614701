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

// Critical inline CSS for above-the-fold stability (hero, header, primary CTA)
const CRITICAL_CSS = `
:root{--critical-bg:#0f172a}
html,body{background:#fff}
.header,header, .site-header{display:block}
.hero{visibility:visible;opacity:1}
.btn-primary{display:inline-block}
/* minimal hero layout guards */
.hero,.hero *{box-sizing:border-box}
`; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: CRITICAL_CSS }} />
      </head>
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
