export type FeaturedService = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
};

export const featuredServices: FeaturedService[] = [
  {
    slug: "vehicle-maintenance",
    title: "Vehicle Maintenance",
    shortDescription: "Factory-scheduled upkeep to keep your car reliable and prevent expensive breakdowns.",
    longDescription:
      "Our vehicle maintenance service covers oil changes, fluid checks, filters, and scheduled inspections based on your mileage and driving habits. We help you stay ahead of expensive repairs by catching issues early and giving you a clear maintenance plan. If you commute daily in Littleton, Highlands Ranch, Englewood, Lakewood, or Centennial, this service keeps your vehicle dependable year-round.",
    image: "/images/autotrek-hero-current.png",
    seoTitle: "Vehicle Maintenance in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Factory-scheduled vehicle maintenance in Littleton, CO. Keep your car reliable with inspections, fluids, and preventive service at AutoTrek.",
  },
  {
    slug: "brake-repair-service",
    title: "Brake Repair & Service",
    shortDescription: "Pads, rotors, and brake-system checks for safer stops and better control.",
    longDescription:
      "If your brakes squeak, grind, vibrate, or feel soft, our team can diagnose and repair the issue quickly. We service brake pads, rotors, calipers, and fluid so your vehicle stops confidently in every condition. We focus on safety-first recommendations with transparent pricing and clear explanations before work begins.",
    image: "/images/autotrek-shop-floor-2.png",
    seoTitle: "Brake Repair in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Trusted brake repair and brake service in Littleton, CO. Pads, rotors, diagnostics, and safety-first recommendations from AutoTrek.",
  },
  {
    slug: "oil-fluid-changes",
    title: "Oil & Fluid Changes",
    shortDescription: "Fast oil and fluid service to protect engine life and day-to-day performance.",
    longDescription:
      "Regular oil and fluid changes are one of the easiest ways to protect your engine, transmission, and cooling system. We check condition, leaks, and service intervals so your vehicle runs smoothly and lasts longer. Whether you drive short city routes or long highway miles, we tailor the service to your real usage.",
    image: "/images/autotrek-building.png",
    seoTitle: "Oil Change & Fluid Service in Littleton, CO | AutoTrek",
    seoDescription:
      "Oil changes and fluid service in Littleton, CO. Protect engine and transmission performance with scheduled maintenance at AutoTrek Service Center.",
  },
  {
    slug: "hybrid-repair",
    title: "Hybrid Repair",
    shortDescription: "Confident diagnostics and repairs for hybrid systems, batteries, and drivability issues.",
    longDescription:
      "Hybrid systems require precise diagnostics and experienced repair strategy. We inspect battery health, cooling performance, charging behavior, and warning codes to identify the root issue quickly. Our process is designed to reduce guesswork and help hybrid owners make smart, cost-effective repair decisions.",
    image: "/images/autotrek-hero-current.png",
    seoTitle: "Hybrid Repair in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Hybrid diagnostics and repair in Littleton, CO. Battery checks, drivability diagnostics, and expert hybrid service from AutoTrek.",
  },
  {
    slug: "european-auto-repair",
    title: "European Auto Repair",
    shortDescription: "Specialized service for European makes using proper diagnostics and repair procedures.",
    longDescription:
      "European vehicles need brand-specific diagnostics, quality parts, and proper repair procedures. Our team services major European makes with a focus on reliability, performance, and long-term ownership value. From warning-light diagnostics to major service intervals, we provide dealer-level precision without dealer friction.",
    image: "/images/autotrek-shop-floor-2.png",
    seoTitle: "European Auto Repair in Littleton, CO | AutoTrek",
    seoDescription:
      "European auto repair in Littleton, CO for Audi, BMW, Mercedes, VW, and more. Dealer-level diagnostics and trusted service at AutoTrek.",
  },
  {
    slug: "fleet-repair-service",
    title: "Fleet Repair & Service",
    shortDescription: "Priority maintenance and repair support to keep your business vehicles on the road.",
    longDescription:
      "Downtime costs money, so our fleet service is built for speed, consistency, and communication. We provide preventive maintenance, diagnostics, and repair planning to keep your vehicles running and your teams moving. From single-unit businesses to larger local fleets, we tailor service intervals around your operational needs.",
    image: "/images/autotrek-building.png",
    seoTitle: "Fleet Repair & Maintenance in Littleton, CO | AutoTrek",
    seoDescription:
      "Fleet repair and fleet maintenance in Littleton, CO. Reduce downtime with priority service and clear communication from AutoTrek.",
  },
  {
    slug: "vehicle-suspension-repair",
    title: "Vehicle Suspension Repair",
    shortDescription: "Shocks, struts, and suspension fixes for smoother handling and tire life.",
    longDescription:
      "If your vehicle pulls, bounces, clunks, or wears tires unevenly, suspension issues may be the cause. We inspect shocks, struts, links, bushings, and related components to restore handling and ride quality. Our goal is to improve comfort, control, and overall safety with repairs that solve the real problem.",
    image: "/images/autotrek-shop-floor-2.png",
    seoTitle: "Suspension Repair in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Suspension repair in Littleton, CO including shocks, struts, and steering-related diagnostics. Improve ride quality and control with AutoTrek.",
  },
  {
    slug: "vehicle-diagnosis-repair",
    title: "Vehicle Diagnosis & Repair",
    shortDescription: "Check-engine and drivability troubleshooting with clear repair recommendations.",
    longDescription:
      "When a warning light appears or your car feels off, accurate diagnosis comes first. We use modern diagnostic tools and technician expertise to pinpoint issues and explain your options in plain language. You get a clear game plan, prioritized recommendations, and repairs focused on reliability.",
    image: "/images/autotrek-hero-current.png",
    seoTitle: "Vehicle Diagnostics in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Check-engine light diagnostics and vehicle repair in Littleton, CO. Fast troubleshooting and clear repair recommendations at AutoTrek.",
  },
  {
    slug: "wheel-alignments",
    title: "Wheel Alignments",
    shortDescription: "Precision alignment service to improve steering feel and reduce uneven tire wear.",
    longDescription:
      "Poor alignment can cause steering drift, vibration, and premature tire wear. Our wheel alignment service corrects angles to manufacturer specs for better handling, longer tire life, and a smoother drive. If you’ve hit potholes, replaced suspension components, or noticed uneven tire wear, alignment should be checked.",
    image: "/images/autotrek-building.png",
    seoTitle: "Wheel Alignment in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Wheel alignment service in Littleton, CO to improve handling and tire life. Precision alignment and suspension-aware setup at AutoTrek.",
  },
];

export const fullServices: string[] = [
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

export const findServiceBySlug = (slug: string) => featuredServices.find((s) => s.slug === slug);
