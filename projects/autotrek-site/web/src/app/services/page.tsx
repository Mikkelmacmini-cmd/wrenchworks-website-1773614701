import { ServiceCard } from "@/components/ServiceCard";
import { CallCTA, PrimaryCTA } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata = {
  title: "Auto Repair Services | AutoTrek Service Center",
  description: "Complete auto repair services in Littleton, CO. From oil changes to transmission repair.",
};

export default function ServicesPage() {
  const categories = {
    "Routine Maintenance": services.slice(0, 7),
    "Repairs & Diagnostics": services.slice(7, 15),
    "Specialty Services": services.slice(15),
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-[var(--primary)] py-12 md:py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-white mb-4">Complete Auto Repair Services</h1>
          <p className="text-xl text-gray-200 max-w-2xl mb-6">
            From routine maintenance to complex repairs, we handle everything your vehicle needs.
          </p>
          <div className="flex gap-3">
            <PrimaryCTA label="Schedule Service" />
            <CallCTA />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        {Object.entries(categories).map(([category, categoryServices]) => (
          <div key={category} className="mb-16">
            <h2 className="text-[var(--primary)] mb-8">{category}</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {categoryServices.map((service) => (
                <ServiceCard
                  key={service.slug}
                  name={service.name}
                  description={service.short}
                  slug={service.slug}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-[var(--primary)] mb-4">Don't see your service?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Call us to discuss your specific repair or maintenance needs. We're here to help.
          </p>
          <CallCTA />
        </div>
      </section>
    </div>
  );
}
