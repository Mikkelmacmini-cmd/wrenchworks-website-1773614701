import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fullbaymedia.com"),
  title: "Full Bay Media | Growth Systems for Auto Repair Shops",
  description:
    "Premium websites, local SEO, and review funnels for independent auto repair shops that want more qualified diagnostic calls.",
  keywords: [
    "auto repair shop marketing",
    "local seo for mechanics",
    "repair shop website design",
    "google business profile optimization",
    "review funnel for auto shops",
  ],
  openGraph: {
    title: "Full Bay Media | Growth Systems for Auto Repair Shops",
    description:
      "Web, SEO, and review systems designed to increase booked diagnostics and high-intent local leads.",
    url: "https://fullbaymedia.com",
    siteName: "Full Bay Media",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Full Bay Media | Growth Systems for Auto Repair Shops",
    description:
      "Premium websites, local SEO, and review funnels for independent repair shops.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
