export type ServiceDecisionBlock = {
  commonSymptoms: string[];
  typicalCauses: string[];
  driveability: string;
  timeWindow: string;
  budgetRange: string;
  whatCanWait: string;
  whatCannotWait: string;
};

export type ServiceAssetSet = {
  src: string;
  mobileSrc: string;
  srcSet: string;
  alt: string;
};

export type FeaturedService = {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
  decision: ServiceDecisionBlock;
  relatedSlugs: string[];
};

export const homepageHeroAsset = {
  src: "/visual-refresh/ai-no-faces/hero/hero-02-macro-bay-sensor.webp",
  mobileSrc: "/visual-refresh/ai-no-faces/mobile/hero-02-macro-bay-sensor-mobile.webp",
  srcSet:
    "/visual-refresh/ai-no-faces/hero/hero-02-macro-bay-sensor.webp 1280w, /visual-refresh/ai-no-faces/mobile/hero-02-macro-bay-sensor-mobile.webp 768w",
  alt: "Macro diagnostic bay sensor and tool detail emphasizing precision diagnostics without identifiable faces.",
} as const;

export const serviceAssetManifest: Record<string, ServiceAssetSet> = {
  "vehicle-diagnosis-repair": {
    src: "/visual-refresh/service/service-01-vehicle-diagnostics.webp",
    mobileSrc: "/visual-refresh/mobile/service-01-vehicle-diagnostics-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-01-vehicle-diagnostics.webp 960w, /visual-refresh/mobile/service-01-vehicle-diagnostics-mobile.webp 720w",
    alt: "Technician using a scan tablet and OBD tools for vehicle diagnostics.",
  },
  "brake-repair-service": {
    src: "/visual-refresh/service/service-02-brake-repair.webp",
    mobileSrc: "/visual-refresh/mobile/service-02-brake-repair-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-02-brake-repair.webp 960w, /visual-refresh/mobile/service-02-brake-repair-mobile.webp 720w",
    alt: "Close-up of professional brake rotor and caliper service in progress.",
  },
  "oil-fluid-changes": {
    src: "/visual-refresh/service/service-03-oil-fluid-service.webp",
    mobileSrc: "/visual-refresh/mobile/service-03-oil-fluid-service-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-03-oil-fluid-service.webp 960w, /visual-refresh/mobile/service-03-oil-fluid-service-mobile.webp 720w",
    alt: "Controlled oil and fluid maintenance being performed in a clean service environment.",
  },
  "vehicle-suspension-repair": {
    src: "/visual-refresh/service/service-04-suspension-steering.webp",
    mobileSrc: "/visual-refresh/mobile/service-04-suspension-steering-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-04-suspension-steering.webp 960w, /visual-refresh/mobile/service-04-suspension-steering-mobile.webp 720w",
    alt: "Suspension and steering components inspected on a lifted vehicle with wheel removed.",
  },
  "hybrid-repair": {
    src: "/visual-refresh/service/service-05-hybrid-repair.webp",
    mobileSrc: "/visual-refresh/mobile/service-05-hybrid-repair-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-05-hybrid-repair.webp 960w, /visual-refresh/mobile/service-05-hybrid-repair-mobile.webp 720w",
    alt: "Technician performing hybrid-system diagnostics with safety equipment in a modern bay.",
  },
  "fleet-repair-service": {
    src: "/visual-refresh/service/service-06-fleet-service.webp",
    mobileSrc: "/visual-refresh/mobile/service-06-fleet-service-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-06-fleet-service.webp 960w, /visual-refresh/mobile/service-06-fleet-service-mobile.webp 720w",
    alt: "Multiple fleet vans receiving coordinated maintenance in a professional repair facility.",
  },
  "vehicle-maintenance": {
    src: "/visual-refresh/service/service-03-oil-fluid-service.webp",
    mobileSrc: "/visual-refresh/mobile/service-03-oil-fluid-service-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-03-oil-fluid-service.webp 960w, /visual-refresh/mobile/service-03-oil-fluid-service-mobile.webp 720w",
    alt: "Controlled oil and fluid maintenance being performed in a clean service environment.",
  },
  "european-auto-repair": {
    src: "/visual-refresh/service/service-01-vehicle-diagnostics.webp",
    mobileSrc: "/visual-refresh/mobile/service-01-vehicle-diagnostics-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-01-vehicle-diagnostics.webp 960w, /visual-refresh/mobile/service-01-vehicle-diagnostics-mobile.webp 720w",
    alt: "Technician using a scan tablet and OBD tools for vehicle diagnostics.",
  },
  "wheel-alignments": {
    src: "/visual-refresh/service/service-04-suspension-steering.webp",
    mobileSrc: "/visual-refresh/mobile/service-04-suspension-steering-mobile.webp",
    srcSet:
      "/visual-refresh/service/service-04-suspension-steering.webp 960w, /visual-refresh/mobile/service-04-suspension-steering-mobile.webp 720w",
    alt: "Suspension and steering components inspected on a lifted vehicle with wheel removed.",
  },
};

export const featuredServices: FeaturedService[] = [
  {
    slug: "vehicle-maintenance",
    title: "Vehicle Maintenance",
    shortDescription: "Factory-scheduled upkeep to keep your car reliable and prevent expensive breakdowns.",
    longDescription:
      "Our vehicle maintenance service covers oil changes, fluid checks, filters, and scheduled inspections based on your mileage and driving habits. We help you stay ahead of expensive repairs by catching issues early and giving you a clear maintenance plan. If you commute daily in Littleton, Highlands Ranch, Englewood, Lakewood, or Centennial, this service keeps your vehicle dependable year-round.",
    image: serviceAssetManifest["vehicle-maintenance"].src,
    seoTitle: "Vehicle Maintenance in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Factory-scheduled vehicle maintenance in Littleton, CO. Keep your car reliable with inspections, fluids, and preventive service at AutoTrek.",
    decision: {
      commonSymptoms: ["Mileage reminder active", "Slight drop in fuel economy", "Longer crank in cold starts"],
      typicalCauses: ["Aged fluids", "Clogged filters", "Delayed scheduled services"],
      driveability: "Usually safe short-term, but delays increase risk of preventable failures.",
      timeWindow: "Book within 7 days.",
      budgetRange: "$140–$480 depending on interval and vehicle type.",
      whatCanWait: "Cabin filter or non-critical additive service.",
      whatCannotWait: "Overdue oil, coolant, or brake-fluid service.",
    },
    relatedSlugs: ["oil-fluid-changes", "vehicle-diagnosis-repair", "wheel-alignments"],
  },
  {
    slug: "brake-repair-service",
    title: "Brake Repair & Service",
    shortDescription: "Pads, rotors, and brake-system checks for safer stops and better control.",
    longDescription:
      "If your brakes squeak, grind, vibrate, or feel soft, our team can diagnose and repair the issue quickly. We service brake pads, rotors, calipers, and fluid so your vehicle stops confidently in every condition. We focus on safety-first recommendations with transparent pricing and clear explanations before work begins.",
    image: serviceAssetManifest["brake-repair-service"].src,
    seoTitle: "Brake Repair in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Trusted brake repair and brake service in Littleton, CO. Pads, rotors, diagnostics, and safety-first recommendations from AutoTrek.",
    decision: {
      commonSymptoms: ["Squeal or grinding", "Pedal pulsation", "Longer stopping distance"],
      typicalCauses: ["Worn pads", "Heat-spotted rotors", "Hydraulic imbalance"],
      driveability: "Use caution for minor noise. Stop driving if pedal feels soft or pulling is severe.",
      timeWindow: "Same-day safety inspection recommended.",
      budgetRange: "$280–$980 based on axle and hardware condition.",
      whatCanWait: "Light cosmetic rotor rust.",
      whatCannotWait: "Grinding, soft pedal, fluid leaks.",
    },
    relatedSlugs: ["vehicle-suspension-repair", "wheel-alignments", "vehicle-diagnosis-repair"],
  },
  {
    slug: "oil-fluid-changes",
    title: "Oil & Fluid Changes",
    shortDescription: "Fast oil and fluid service to protect engine life and day-to-day performance.",
    longDescription:
      "Regular oil and fluid changes are one of the easiest ways to protect your engine, transmission, and cooling system. We check condition, leaks, and service intervals so your vehicle runs smoothly and lasts longer. Whether you drive short city routes or long highway miles, we tailor the service to your real usage.",
    image: serviceAssetManifest["oil-fluid-changes"].src,
    seoTitle: "Oil Change & Fluid Service in Littleton, CO | AutoTrek",
    seoDescription:
      "Oil changes and fluid service in Littleton, CO. Protect engine and transmission performance with scheduled maintenance at AutoTrek Service Center.",
    decision: {
      commonSymptoms: ["Maintenance light", "Burnt fluid smell", "Rough idle after cold start"],
      typicalCauses: ["Fluid degradation", "Leak seepage", "Extended service interval"],
      driveability: "Usually safe for short trips, but overdue fluid can accelerate wear quickly.",
      timeWindow: "Book within 3–5 days.",
      budgetRange: "$90–$360 depending on fluid package.",
      whatCanWait: "Optional additive service.",
      whatCannotWait: "Low oil level or overheating signs.",
    },
    relatedSlugs: ["vehicle-maintenance", "vehicle-diagnosis-repair", "wheel-alignments"],
  },
  {
    slug: "hybrid-repair",
    title: "Hybrid Repair",
    shortDescription: "Confident diagnostics and repairs for hybrid systems, batteries, and drivability issues.",
    longDescription:
      "Hybrid systems require precise diagnostics and experienced repair strategy. We inspect battery health, cooling performance, charging behavior, and warning codes to identify the root issue quickly. Our process is designed to reduce guesswork and help hybrid owners make smart, cost-effective repair decisions.",
    image: serviceAssetManifest["hybrid-repair"].src,
    seoTitle: "Hybrid Repair in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Hybrid diagnostics and repair in Littleton, CO. Battery checks, drivability diagnostics, and expert hybrid service from AutoTrek.",
    decision: {
      commonSymptoms: ["Hybrid warning light", "Battery fan noise", "Reduced EV assist"],
      typicalCauses: ["Battery degradation", "Cooling circuit restrictions", "Sensor faults"],
      driveability: "Use caution. Driveability may degrade quickly under load.",
      timeWindow: "Diagnostic slot within 48 hours.",
      budgetRange: "$220–$1,800+ based on component path.",
      whatCanWait: "Mild efficiency drop without warnings.",
      whatCannotWait: "Master warning lights or overheating battery alerts.",
    },
    relatedSlugs: ["vehicle-diagnosis-repair", "vehicle-maintenance"],
  },
  {
    slug: "european-auto-repair",
    title: "European Auto Repair",
    shortDescription: "Specialized service for European makes using proper diagnostics and repair procedures.",
    longDescription:
      "European vehicles need brand-specific diagnostics, quality parts, and proper repair procedures. Our team services major European makes with a focus on reliability, performance, and long-term ownership value. From warning-light diagnostics to major service intervals, we provide dealer-level precision without dealer friction.",
    image: serviceAssetManifest["european-auto-repair"].src,
    seoTitle: "European Auto Repair in Littleton, CO | AutoTrek",
    seoDescription:
      "European auto repair in Littleton, CO for Audi, BMW, Mercedes, VW, and more. Dealer-level diagnostics and trusted service at AutoTrek.",
    decision: {
      commonSymptoms: ["Check-engine light", "Oil seepage", "Electrical warnings"],
      typicalCauses: ["Platform-specific part wear", "Software calibration faults", "Cooling or PCV issues"],
      driveability: "Varies by warning level; use caution until diagnosis.",
      timeWindow: "Book this week or sooner for warning lights.",
      budgetRange: "$220–$2,200 depending on platform and repair path.",
      whatCanWait: "Minor cosmetic warning reminders.",
      whatCannotWait: "Flashing warning lights or drivability loss.",
    },
    relatedSlugs: ["vehicle-diagnosis-repair", "brake-repair-service", "vehicle-maintenance"],
  },
  {
    slug: "fleet-repair-service",
    title: "Fleet Repair & Service",
    shortDescription: "Priority maintenance and repair support to keep your business vehicles on the road.",
    longDescription:
      "Downtime costs money, so our fleet service is built for speed, consistency, and communication. We provide preventive maintenance, diagnostics, and repair planning to keep your vehicles running and your teams moving. From single-unit businesses to larger local fleets, we tailor service intervals around your operational needs.",
    image: serviceAssetManifest["fleet-repair-service"].src,
    seoTitle: "Fleet Repair & Maintenance in Littleton, CO | AutoTrek",
    seoDescription:
      "Fleet repair and fleet maintenance in Littleton, CO. Reduce downtime with priority service and clear communication from AutoTrek.",
    decision: {
      commonSymptoms: ["Recurring check-engine alerts", "Brake wear across units", "Unplanned downtime"],
      typicalCauses: ["Interval drift", "Uneven duty cycles", "Deferred diagnostics"],
      driveability: "Case-by-case. Safety faults should be parked until inspected.",
      timeWindow: "Open a fleet triage call same day.",
      budgetRange: "$180–$1,500 per unit depending on scope.",
      whatCanWait: "Non-safety cosmetic repairs.",
      whatCannotWait: "Brake, steering, overheating, or active fault codes.",
    },
    relatedSlugs: ["vehicle-maintenance", "vehicle-diagnosis-repair", "oil-fluid-changes"],
  },
  {
    slug: "vehicle-suspension-repair",
    title: "Vehicle Suspension Repair",
    shortDescription: "Shocks, struts, and suspension fixes for smoother handling and tire life.",
    longDescription:
      "If your vehicle pulls, bounces, clunks, or wears tires unevenly, suspension issues may be the cause. We inspect shocks, struts, links, bushings, and related components to restore handling and ride quality. Our goal is to improve comfort, control, and overall safety with repairs that solve the real problem.",
    image: serviceAssetManifest["vehicle-suspension-repair"].src,
    seoTitle: "Suspension Repair in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Suspension repair in Littleton, CO including shocks, struts, and steering-related diagnostics. Improve ride quality and control with AutoTrek.",
    decision: {
      commonSymptoms: ["Pulling at highway speed", "Bouncing", "Clunking over bumps"],
      typicalCauses: ["Worn struts", "Loose links", "Bushing deterioration"],
      driveability: "Use caution; unstable handling increases braking distance.",
      timeWindow: "Book within 48–72 hours.",
      budgetRange: "$340–$1,600 based on axle and parts.",
      whatCanWait: "Minor ride comfort noise.",
      whatCannotWait: "Steering instability, severe pull, uneven tire wear with vibration.",
    },
    relatedSlugs: ["wheel-alignments", "brake-repair-service", "vehicle-diagnosis-repair"],
  },
  {
    slug: "vehicle-diagnosis-repair",
    title: "Vehicle Diagnosis & Repair",
    shortDescription: "Check-engine and drivability troubleshooting with clear repair recommendations.",
    longDescription:
      "When a warning light appears or your car feels off, accurate diagnosis comes first. We use modern diagnostic tools and technician expertise to pinpoint issues and explain your options in plain language. You get a clear game plan, prioritized recommendations, and repairs focused on reliability.",
    image: serviceAssetManifest["vehicle-diagnosis-repair"].src,
    seoTitle: "Vehicle Diagnostics in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Check-engine light diagnostics and vehicle repair in Littleton, CO. Fast troubleshooting and clear repair recommendations at AutoTrek.",
    decision: {
      commonSymptoms: ["Warning lights", "Rough idle", "Power loss"],
      typicalCauses: ["Ignition/fuel issues", "Sensor faults", "Airflow or emissions problems"],
      driveability: "Depends on fault severity; flashing lights require immediate stop.",
      timeWindow: "Same-day or next-day diagnostic slot.",
      budgetRange: "$180–$420 diagnostic path, repair quoted after findings.",
      whatCanWait: "Stable, non-flashing light with no drivability issues.",
      whatCannotWait: "Flashing CEL, misfires, overheating, or stalling.",
    },
    relatedSlugs: ["vehicle-maintenance", "brake-repair-service", "hybrid-repair"],
  },
  {
    slug: "wheel-alignments",
    title: "Wheel Alignments",
    shortDescription: "Precision alignment service to improve steering feel and reduce uneven tire wear.",
    longDescription:
      "Poor alignment can cause steering drift, vibration, and premature tire wear. Our wheel alignment service corrects angles to manufacturer specs for better handling, longer tire life, and a smoother drive. If you’ve hit potholes, replaced suspension components, or noticed uneven tire wear, alignment should be checked.",
    image: serviceAssetManifest["wheel-alignments"].src,
    seoTitle: "Wheel Alignment in Littleton, CO | AutoTrek Service Center",
    seoDescription:
      "Wheel alignment service in Littleton, CO to improve handling and tire life. Precision alignment and suspension-aware setup at AutoTrek.",
    decision: {
      commonSymptoms: ["Vehicle drifts", "Steering wheel off-center", "Uneven tire wear"],
      typicalCauses: ["Pothole impact", "Suspension wear", "Post-repair misalignment"],
      driveability: "Usually drivable short-term, but tire and safety risk grows quickly.",
      timeWindow: "Book within 3 days.",
      budgetRange: "$140–$280 depending on platform.",
      whatCanWait: "Minor steering wheel offset.",
      whatCannotWait: "Rapid tire wear, vibration, or pull after impact.",
    },
    relatedSlugs: ["vehicle-suspension-repair", "brake-repair-service", "vehicle-maintenance"],
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
