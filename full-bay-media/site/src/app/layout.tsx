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
