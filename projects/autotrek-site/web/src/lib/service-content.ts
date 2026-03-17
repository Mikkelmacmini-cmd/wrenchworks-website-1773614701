// Long-form SEO content for service pages
// Pattern: ~1,500-2,000 words per service, locally optimized for Littleton, CO

export interface ServiceContent {
  slug: string
  intro: string
  whyMatters: { heading: string; body: string; signs: string[] }
  process: { heading: string; steps: { title: string; desc: string }[] }
  included: string[]
  whyChoose: { title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  closingCta: string
}

export const serviceContent: Record<string, ServiceContent> = {
  "brake-repair-service-littleton-co": {
    slug: "brake-repair-service-littleton-co",
    intro: "Your brakes are the most critical safety system in your vehicle. Whether you're navigating C-470 during rush hour or picking the kids up from school, your brakes have to work perfectly every single time. If you hear grinding, feel a soft pedal, or just aren't sure when your brakes were last checked — bring it in. At AutoTrek Service Center in Littleton, Alan and the team will show you exactly what's going on, give you a written quote, and let you decide. No pressure, no upselling — just honest brake work from ASE-certified technicians.",
    whyMatters: {
      heading: "Why Your Brakes Deserve More Than a Quick Pad Slap",
      body: "Most shops treat brake service like an assembly line — swap the pads, collect the money, and move on. But your braking system is complex. Rotors, calipers, brake lines, fluid, hardware — they all work together. When one component fails, it can damage others and compromise your safety. That's why we inspect the entire system, not just the pads. Different vehicles have different braking needs. A Subaru Outback handles Colorado mountain roads differently than a Ram 1500 hauling a trailer. We take your specific vehicle and driving habits into account before recommending anything.",
      signs: [
        "Squealing, grinding, or scraping noises when braking",
        "Soft or spongy brake pedal that goes further to the floor",
        "Vehicle pulls to one side when braking",
        "Steering wheel vibrates or shakes during braking",
        "Brake warning light illuminated on your dashboard",
        "Visible brake dust buildup on one wheel more than others"
      ]
    },
    process: {
      heading: "Our Brake Service Process",
      steps: [
        { title: "Full Brake System Inspection", desc: "We measure pad thickness, check rotor condition and tolerances, inspect calipers for proper operation, examine brake lines for leaks or corrosion, and test brake fluid condition. You get specific findings — '3mm on the front pads' — not vague guesses." },
        { title: "Clear Explanation & Written Quote", desc: "We walk you through what we found. We'll show you the worn components. You get a written estimate with parts and labor broken out. We'll tell you what's critical, what should be done soon, and what can wait." },
        { title: "Quality Repair", desc: "Once you approve, our ASE-certified technicians use quality components matched to your vehicle. We follow manufacturer specifications and don't cut corners. Pads, rotors, hardware, fluid — we replace what needs replacing." },
        { title: "Road Test & Verification", desc: "Before you get your keys back, we road test the vehicle to verify proper pedal feel, stopping power, and noise-free operation. We don't just install parts — we confirm the repair works." }
      ]
    },
    included: [
      "Full brake system inspection (pads, rotors, calipers, lines, fluid)",
      "Written estimate before any work begins",
      "Quality parts matched to your vehicle",
      "Complimentary full-vehicle safety inspection",
      "Road test after repair to verify performance",
      "Fluid level check and tire pressure adjustment"
    ],
    whyChoose: [
      { title: "No Guesswork", desc: "We diagnose first, quote second, repair third. You always know exactly what you're paying for before we start." },
      { title: "ASE-Certified Technicians", desc: "Our team has the training and experience to handle brake systems on domestic, foreign, trucks, and SUVs." },
      { title: "Transparent Pricing", desc: "Written quotes with no hidden fees. If we find additional issues, we call you first — nothing gets done without your approval." },
      { title: "Full Inspection Every Visit", desc: "Every vehicle gets a complimentary safety inspection. We check everything, not just what you came in for." }
    ],
    faqs: [
      { q: "How do I know if I need new brakes?", a: "Listen for squealing, grinding, or scraping. Feel for a soft pedal or vibration. If your car pulls to one side when braking or you see a dashboard warning light, get them checked. We offer free brake inspections — just stop by." },
      { q: "How much does a brake job cost?", a: "It depends on your vehicle, what components need replacing, and the parts used. A basic pad replacement is different from a full rotor and caliper job. We provide a written quote after inspection so you know exactly what you're looking at." },
      { q: "How long does brake repair take?", a: "Most brake jobs are completed the same day. A straightforward pad and rotor replacement typically takes 2–3 hours. More complex work may take longer — we'll give you a time estimate when you drop off." },
      { q: "Can I wait while my brakes are done?", a: "Absolutely. We have a comfortable waiting area. You can also drop off your vehicle and we'll call you when it's ready." },
      { q: "Do you work on trucks and SUVs?", a: "Yes — domestic, foreign, trucks, SUVs, and specialty vehicles. We have the tools and experience for heavy-duty brake systems too." }
    ],
    closingCta: "Don't wonder if your brakes are safe. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122. We'll inspect your brakes, show you what we find, and give you a clear written quote. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the greater Denver metro area."
  },

  "oil-fluid-changes-littleton-co": {
    slug: "oil-fluid-changes-littleton-co",
    intro: "Looking for an oil change you can trust — without the upsell? At AutoTrek Service Center in Littleton, we keep it simple: quality oil, proper filter, full inspection, fair price. No scare tactics, no pushing services you don't need. Alan and the team have been taking care of Littleton vehicles with the same honest approach — change the oil, check the car, tell you the truth about what it needs.",
    whyMatters: {
      heading: "Why Regular Oil Changes Are Your Engine's Best Friend",
      body: "Engine oil lubricates dozens of moving metal parts running at high speeds and extreme temperatures. Without clean oil, those parts grind against each other, generating heat and causing rapid wear. Old oil becomes contaminated with metal particles, dirt, and combustion byproducts — turning protective lubricant into an abrasive paste. Regular oil changes are the single most cost-effective thing you can do to maintain your vehicle and avoid expensive engine repairs. Colorado driving conditions — altitude, temperature swings, mountain passes — put extra stress on your oil. We factor that into our recommendations.",
      signs: [
        "Oil change light or maintenance reminder on your dashboard",
        "Dark, gritty oil on the dipstick",
        "Engine runs louder or rougher than usual",
        "Decreased fuel economy",
        "Overdue past your last change interval",
        "Burning oil smell from under the hood"
      ]
    },
    process: {
      heading: "What's Included in Our Oil Change Service",
      steps: [
        { title: "Premium Oil & Filter", desc: "We use the right oil for your engine — conventional, synthetic blend, or full synthetic — matched to your manufacturer's specifications. New OEM-spec oil filter every time. We also inspect and replace the drain plug washer if needed." },
        { title: "Full-Vehicle Safety Inspection", desc: "Every oil change includes a complimentary multi-point inspection: fluid levels (transmission, brake, coolant, power steering), tire pressure check and adjustment, visual brake inspection, belt and hose check, battery terminals, air filter, and wiper blades." },
        { title: "Clear Report", desc: "We'll tell you exactly what we found. If something needs attention, we categorize it: needs attention now, should be done soon, or can wait. You decide — no pressure." },
        { title: "Proper Disposal", desc: "Used oil and filters are disposed of responsibly. We handle all environmental compliance so you don't have to think about it." }
      ]
    },
    included: [
      "Premium oil matched to your vehicle's specifications",
      "New oil filter installation",
      "Drain plug and washer inspection",
      "Full multi-point vehicle safety inspection",
      "Fluid level check (all systems)",
      "Tire pressure check and adjustment",
      "Visual brake inspection",
      "Belt, hose, and battery terminal check"
    ],
    whyChoose: [
      { title: "No Upselling", desc: "We'll tell you what your car needs — honestly. If your air filter is fine, we won't push a replacement. If something can wait, we'll say so." },
      { title: "Right Oil, Right Spec", desc: "We don't use a one-size-fits-all approach. Your engine gets the oil grade and type the manufacturer specified." },
      { title: "Full Inspection Included", desc: "Every oil change includes a comprehensive vehicle check. It's not a sales tactic — it's a genuine safety service." },
      { title: "Fast & Convenient", desc: "Most oil changes are completed in under an hour. Drop off or wait in our comfortable waiting area." }
    ],
    faqs: [
      { q: "How often should I get my oil changed?", a: "It depends on your vehicle and oil type. Conventional oil: typically every 3,000–5,000 miles. Synthetic: 7,500–10,000+ miles. Colorado driving conditions (altitude, temperature swings, mountain driving) may require more frequent changes. We follow your manufacturer's recommendations." },
      { q: "Synthetic or conventional — which do I need?", a: "Many modern vehicles require full synthetic. Synthetic flows better in cold weather, protects better at high temps, and lasts longer between changes. We'll recommend what your engine needs — not the most expensive option." },
      { q: "How long does an oil change take?", a: "Typically 30–45 minutes including the full inspection. If we find something else that needs attention, we'll discuss it with you separately." },
      { q: "What does the oil change include?", a: "Oil, filter, drain plug check, plus a full vehicle safety inspection — fluid levels, brakes, tires, belts, hoses, battery. All included, no extra charge." }
    ],
    closingCta: "Keep your engine protected with an oil change you can trust. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the greater Denver metro area."
  },

  "check-engine-light-diagnostics-littleton-co": {
    slug: "check-engine-light-diagnostics-littleton-co",
    intro: "That amber light on your dashboard is stressful. Is it something serious or just a loose gas cap? Maybe you've been driving with it on for weeks, hoping it goes away. At AutoTrek Service Center in Littleton, we don't guess — we use professional-grade diagnostic equipment to read the codes, test the systems, and find the actual problem. Then we explain it in plain English, give you a written quote, and let you decide.",
    whyMatters: {
      heading: "Why You Shouldn't Ignore That Light",
      body: "Your check engine light means your vehicle's onboard computer has detected something outside normal parameters. It could be minor — or it could be the early warning of an expensive failure. A $200 oxygen sensor replacement today can prevent a $2,000 catalytic converter problem next month. Beyond cost, some issues affect safety: engine misfires, transmission faults, and fuel system problems can leave you stranded or cause dangerous power loss on the highway. The longer you wait, the more a small problem can cascade into a big one.",
      signs: [
        "Solid or flashing check engine light on your dashboard",
        "Rough idle, hesitation, or stalling",
        "Poor fuel economy or sudden drop in MPG",
        "Engine misfires or runs rough",
        "Difficulty starting the vehicle",
        "Failed emissions test"
      ]
    },
    process: {
      heading: "Our Check Engine Light Diagnostic Process",
      steps: [
        { title: "Code Retrieval & Analysis", desc: "We pull all stored and pending diagnostic trouble codes using professional-grade scan tools — not a $20 code reader from the parts store. Codes are a starting point, not a diagnosis. They tell us which system has a problem, not which part failed." },
        { title: "Live Data & Component Testing", desc: "We monitor real-time sensor data while the engine runs to see how systems are actually performing. We test individual components — oxygen sensors, fuel injectors, ignition coils, solenoids — to verify what's actually failed vs. what's just reporting a symptom." },
        { title: "Clear Explanation & Written Quote", desc: "We explain what we found, what caused it, and what needs to be done to fix it. Written estimate with parts and labor. We prioritize: fix now, fix soon, or monitor. Your call." },
        { title: "Repair & Verification", desc: "After repair, we clear the codes, run the vehicle through drive cycles, and verify the monitors reset properly. We make sure the fix actually resolved the problem — not just turned off the light temporarily." }
      ]
    },
    included: [
      "Professional-grade diagnostic code retrieval",
      "Live data monitoring and analysis",
      "Component-level testing to verify failures",
      "Clear plain-English explanation of findings",
      "Written estimate before any repair work",
      "Post-repair verification and code clear",
      "Complimentary full-vehicle safety inspection"
    ],
    whyChoose: [
      { title: "Real Diagnosis, Not Parts Guessing", desc: "A code is a clue, not a verdict. We test and verify before recommending parts. That saves you money and gets the repair right the first time." },
      { title: "Professional Equipment", desc: "We use manufacturer-level scan tools that access live data, freeze frames, and system tests — far beyond what a basic code reader can do." },
      { title: "You Approve First", desc: "We never start repairs without your written approval. You get a clear explanation and a firm quote before anything happens." },
      { title: "ASE-Certified Technicians", desc: "Our team has diagnosed thousands of check engine lights across all makes and models. We know the common patterns and the uncommon ones." }
    ],
    faqs: [
      { q: "Can I drive with the check engine light on?", a: "A solid light usually means a non-emergency issue, but you should get it checked soon. A flashing check engine light means an active misfire — pull over safely and call us. Continued driving can cause catalytic converter damage." },
      { q: "How much does check engine light diagnosis cost?", a: "Diagnostic fees vary based on complexity. Simple code reads are quick; intermittent electrical issues take more time. We'll give you a diagnostic fee upfront, and if you approve the repair, the diagnostic cost is typically applied to the repair bill." },
      { q: "My check engine light came on after getting gas — is it serious?", a: "Often that's a loose or improperly sealed gas cap. Tighten it, and if the light clears in a day or two, you're fine. If it stays on, there may be an EVAP system issue — bring it in and we'll check." },
      { q: "Will you just read the code for free?", a: "We provide professional diagnostic services, not quick code reads. Parts stores offer free code pulls, but a code without proper testing leads to guessing and wasted money. Our diagnostics find the actual problem." }
    ],
    closingCta: "Don't let that light stress you out. Call AutoTrek Service Center at (303) 328-3356 or bring your vehicle to 8161 S Grant Way, Littleton, CO 80122. We'll find the problem, explain it clearly, and give you options. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },

  "ac-service-repair-littleton-co": {
    slug: "ac-service-repair-littleton-co",
    intro: "Colorado summers hit different when your AC stops working. Whether it's blowing warm air, making strange noises, or just not cooling like it used to — AutoTrek Service Center in Littleton has the equipment and expertise to diagnose and fix it. We handle everything from simple refrigerant recharges to compressor replacements. Honest quote first, repair second.",
    whyMatters: {
      heading: "Why AC Problems Get Worse (and More Expensive) If You Wait",
      body: "Your vehicle's air conditioning system is a sealed, pressurized loop of components that all depend on each other. When one part starts failing — a slow leak, a weak compressor, a clogged condenser — it puts stress on the rest of the system. A slow refrigerant leak today means the compressor runs harder, wears faster, and eventually fails. Replacing just the refrigerant costs a fraction of what a full compressor replacement costs. Colorado's Front Range altitude also affects AC performance — systems work harder at elevation. We account for that when diagnosing and servicing your AC.",
      signs: [
        "AC blowing warm or lukewarm air",
        "Weak airflow from the vents",
        "Strange noises when the AC is running (clicking, grinding, squealing)",
        "Musty or foul smell from the vents",
        "AC cycles on and off rapidly",
        "Water pooling on the passenger side floor"
      ]
    },
    process: {
      heading: "Our AC Service Process",
      steps: [
        { title: "System Performance Test", desc: "We check refrigerant charge level, measure vent temperatures, and test compressor operation. This tells us immediately whether the system is low on refrigerant, has a mechanical issue, or has an electrical problem." },
        { title: "Leak Detection & Component Inspection", desc: "Using UV dye and electronic leak detectors, we locate leaks in hoses, fittings, the condenser, evaporator, or compressor. We also inspect the cabin air filter, blower motor, and blend door actuator." },
        { title: "Clear Quote & Options", desc: "We explain what's wrong, what's needed to fix it, and provide a written estimate. We'll tell you if a simple recharge will hold or if a component needs replacing." },
        { title: "Repair & Verify", desc: "After repair, we recharge the system to manufacturer specs, test vent temperatures, and verify the AC cycles properly. You drive away cool." }
      ]
    },
    included: [
      "Full AC system performance test",
      "Refrigerant charge level check",
      "Electronic and UV dye leak detection",
      "Compressor, condenser, and evaporator inspection",
      "Cabin air filter check",
      "Written estimate before repair",
      "Post-repair temperature verification"
    ],
    whyChoose: [
      { title: "Proper Diagnosis First", desc: "We don't just dump refrigerant in and hope for the best. We find the leak, fix the cause, then recharge. That way it stays cold." },
      { title: "All AC Components", desc: "Compressors, condensers, evaporators, expansion valves, blower motors, blend doors — we handle the full system." },
      { title: "Altitude Aware", desc: "AC systems perform differently at Colorado elevation. We calibrate and test accordingly." },
      { title: "Same-Day Most Repairs", desc: "Most AC recharges and many component replacements are done same day." }
    ],
    faqs: [
      { q: "Why is my AC blowing warm air?", a: "Most commonly: low refrigerant from a leak. Could also be a failed compressor, clogged condenser, bad blend door actuator, or electrical issue. We test the system to find the specific cause." },
      { q: "How much does an AC recharge cost?", a: "A straightforward recharge is affordable. If there's a leak that needs repair first, costs vary by location and component. We give you a written quote after diagnosis." },
      { q: "My AC smells bad — what's wrong?", a: "Usually mold or bacteria growth on the evaporator core or a dirty cabin air filter. We can clean the system and replace the filter to eliminate the smell." },
      { q: "How often does AC need service?", a: "AC systems are sealed and shouldn't need regular topping off. If your system is losing refrigerant, there's a leak somewhere. We recommend AC performance checks if you notice decreased cooling." }
    ],
    closingCta: "Stay cool this summer. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122 for an AC inspection. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },
}
