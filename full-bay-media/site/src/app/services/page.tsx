import Link from "next/link";

const fullServices = [
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
  "4X4 Auto Repair",
  "Complete Auto Repair",
  "Domestic Auto Repair",
  "Fleet Repair & Service",
  "Maintenance Lights",
  "Preventative Maintenance",
  "Timing Belt Repair",
  "Wheel Alignment",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-[#1f2937] md:px-10">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="text-sm font-semibold text-[#166534] underline underline-offset-4">
          ← Back to Home
        </Link>

        <h1 className="mt-4 text-4xl font-bold text-[#111827]">Full List of Services</h1>
        <p className="mt-2 text-[#4b5563]">Comprehensive auto repair and maintenance for Littleton drivers.</p>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {fullServices.map((service) => (
            <div key={service} className="rounded-xl border border-[#e5e7eb] bg-white px-4 py-3 shadow-sm">
              {service}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
