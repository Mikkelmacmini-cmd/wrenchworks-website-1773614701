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

  "steering-suspension-littleton-co": {
    slug: "steering-suspension-littleton-co",
    intro: "If your vehicle wanders on the highway, bottoms out over bumps, or the steering feels loose and imprecise — your suspension or steering system needs attention. At AutoTrek Service Center in Littleton, we diagnose and repair the full steering and suspension system: shocks, struts, tie rods, ball joints, control arms, bushings, and wheel alignment. We'll show you what's worn, explain what it means for your safety and ride quality, and give you a written quote before touching anything.",
    whyMatters: {
      heading: "Why Worn Suspension Is a Safety Problem, Not Just a Comfort Issue",
      body: "Your suspension does more than smooth out bumps — it keeps your tires planted on the road, maintains braking stability, and controls body roll in turns. Worn shocks and struts increase stopping distances by up to 20%. Loose tie rods and ball joints can cause unpredictable steering. Failed bushings allow alignment to shift, chewing through tires. Colorado roads are especially hard on suspension. Potholes after freeze-thaw cycles, mountain switchbacks, and gravel roads all accelerate wear. If your vehicle doesn't handle like it used to, there's a reason — and it's usually fixable.",
      signs: [
        "Vehicle pulls to one side while driving straight",
        "Steering wheel vibrates or feels loose",
        "Clunking or knocking noises over bumps",
        "Excessive body roll or nose dive when braking",
        "Uneven tire wear patterns",
        "Vehicle feels floaty or bouncy at highway speeds"
      ]
    },
    process: {
      heading: "Our Steering & Suspension Service Process",
      steps: [
        { title: "Visual & Hands-On Inspection", desc: "We inspect shocks, struts, springs, tie rods, ball joints, control arms, bushings, and sway bar links. We check for leaks, play, cracking, and wear. We also inspect tire wear patterns — they tell us a lot about alignment and suspension health." },
        { title: "Road Test", desc: "We drive the vehicle to feel for the symptoms you described — pulling, wandering, clunking, vibration. This helps us correlate what we see on the lift with what you experience on the road." },
        { title: "Written Quote with Priorities", desc: "We explain what's worn, what's critical for safety, and what can wait. You get a written estimate with parts and labor. We recommend addressing safety-critical items first." },
        { title: "Repair & Alignment Check", desc: "After replacing worn components, we check and adjust wheel alignment to ensure your tires wear evenly and the vehicle tracks straight. We road test again to verify the repair." }
      ]
    },
    included: [
      "Full steering and suspension inspection",
      "Shock, strut, and spring condition check",
      "Tie rod, ball joint, and control arm inspection",
      "Bushing and sway bar link check",
      "Tire wear pattern analysis",
      "Road test before and after repair",
      "Alignment check after suspension work",
      "Complimentary full-vehicle safety inspection"
    ],
    whyChoose: [
      { title: "Complete System Approach", desc: "We inspect the entire steering and suspension system, not just the part you think might be bad. Problems are often interconnected." },
      { title: "Alignment Included", desc: "Suspension work affects alignment. We check and adjust alignment after every suspension repair to protect your tires." },
      { title: "Colorado Road Tested", desc: "We know what Colorado roads do to suspension. Potholes, altitude, temperature swings — we account for all of it." },
      { title: "Safety First Recommendations", desc: "We prioritize by safety impact. If a bushing is slightly worn but your ball joint has play, we'll tell you which one matters more." }
    ],
    faqs: [
      { q: "How do I know if I need new shocks or struts?", a: "If your vehicle bounces excessively after bumps, nose-dives when braking, leans heavily in turns, or feels unstable at highway speeds, your shocks or struts are likely worn. Most last 50,000–100,000 miles depending on driving conditions." },
      { q: "What causes a clunking noise over bumps?", a: "Usually worn sway bar links, ball joints, tie rod ends, or strut mounts. We'll put it on the lift and find exactly which component is causing the noise." },
      { q: "Do I need an alignment after suspension work?", a: "Yes — any time suspension components are replaced, alignment should be checked and adjusted. We include this as part of our suspension repair process." },
      { q: "How much does suspension repair cost?", a: "It depends on what's worn and your vehicle type. Replacing a pair of sway bar links is very different from a full strut assembly replacement. We provide a detailed written quote after inspection." }
    ],
    closingCta: "Get your handling back. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122. We'll diagnose the issue, give you honest options, and get your ride feeling solid again. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },

  "tires-wheels-littleton-co": {
    slug: "tires-wheels-littleton-co",
    intro: "Your tires are the only thing between your vehicle and the road. Worn tread, improper inflation, and misalignment don't just wear your tires out faster — they compromise braking, handling, and safety. At AutoTrek Service Center in Littleton, we provide tire rotation, balancing, pressure checks, and tread inspections. We'll tell you honestly when your tires need replacing and help you choose the right ones for your vehicle and Colorado driving conditions.",
    whyMatters: {
      heading: "Why Tire Maintenance Saves You Money and Keeps You Safe",
      body: "Tires wear unevenly depending on alignment, inflation, and driving habits. Front tires wear differently than rears. Without regular rotation, you'll replace tires twice as often. Under-inflated tires reduce fuel economy, increase stopping distances, and generate excess heat that can cause blowouts. Over-inflated tires reduce traction and cause center-tread wear. Colorado drivers face additional challenges: mountain passes, snow, temperature swings that affect pressure (tires lose about 1 PSI for every 10°F drop). Keeping your tires maintained isn't just about longevity — it's about getting home safe.",
      signs: [
        "Uneven tread wear (one side more worn than the other)",
        "Tread depth below 4/32 inch (time to start shopping)",
        "Visible cracks, bulges, or sidewall damage",
        "Vehicle vibrates at highway speeds",
        "Tire pressure warning light (TPMS) illuminated",
        "It's been over 5,000 miles since your last rotation"
      ]
    },
    process: {
      heading: "Our Tire Service Process",
      steps: [
        { title: "Tread Depth & Condition Check", desc: "We measure tread depth at multiple points across each tire, check for uneven wear patterns (which indicate alignment or suspension issues), and inspect sidewalls for cracks, bulges, or damage." },
        { title: "Tire Rotation & Balancing", desc: "We rotate tires according to your vehicle's recommended pattern (front-to-back, cross-pattern, etc.) and balance each wheel to eliminate vibration and ensure even wear." },
        { title: "Pressure Check & Adjustment", desc: "We set all four tires (plus the spare) to manufacturer-recommended pressure. We also inspect the TPMS sensors if your vehicle has them." },
        { title: "Alignment Recommendation", desc: "If we see uneven wear patterns that indicate alignment issues, we'll recommend an alignment check. Proper alignment extends tire life significantly." }
      ]
    },
    included: [
      "Tread depth measurement (all four tires)",
      "Tire rotation to manufacturer pattern",
      "Wheel balancing",
      "Tire pressure adjustment (including spare)",
      "Sidewall and tread condition inspection",
      "TPMS sensor check",
      "Wear pattern analysis for alignment issues",
      "Complimentary full-vehicle safety inspection"
    ],
    whyChoose: [
      { title: "Honest Tread Assessment", desc: "We'll measure your tread and tell you exactly how much life is left. If your tires are fine, we'll say so. No premature replacement recommendations." },
      { title: "Colorado Tire Knowledge", desc: "We know what Colorado driving demands from tires — all-season vs. winter performance, altitude effects on pressure, and the wear patterns our roads cause." },
      { title: "Alignment Awareness", desc: "Tire wear tells a story. We read the patterns and catch alignment or suspension issues before they destroy your new tires." },
      { title: "Quick Service", desc: "Tire rotations and balancing are typically done in under an hour. Most services are same-day." }
    ],
    faqs: [
      { q: "How often should I rotate my tires?", a: "Every 5,000–7,500 miles, or with every oil change. Regular rotation evens out wear and extends tire life significantly. Colorado's mix of highway and mountain driving makes rotation especially important." },
      { q: "How do I know if I need new tires?", a: "If tread depth is at or below 2/32 inch, it's time. At 4/32 inch, start shopping — especially if you drive in rain or snow. We'll measure and give you an honest assessment." },
      { q: "Why does my car vibrate at highway speeds?", a: "Usually unbalanced tires or a tire with a defect (belt separation, flat spot). Could also be worn suspension components. We'll diagnose which one it is." },
      { q: "Do you sell tires?", a: "We can source and install tires for your vehicle. We'll recommend options based on your driving needs and budget — not the most expensive set on the wall." }
    ],
    closingCta: "Protect your investment and your safety. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122 for tire service. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },

  "transmission-repair-littleton-co": {
    slug: "transmission-repair-littleton-co",
    intro: "Transmission problems are stressful — and expensive if ignored. Whether you're feeling rough shifts, slipping gears, delayed engagement, or see a transmission warning light, AutoTrek Service Center in Littleton can help. We diagnose transmission issues accurately, explain what's happening in plain English, and give you real options — from fluid service to repair. No scare tactics, no inflated quotes.",
    whyMatters: {
      heading: "Why Transmission Problems Escalate Fast",
      body: "Your transmission is one of the most complex and expensive components in your vehicle. It converts engine power into wheel movement through hundreds of precision parts working in harmony. When something goes wrong — a solenoid sticks, clutch packs wear, fluid breaks down — the problem cascades quickly. What starts as a rough shift can become a complete transmission failure in weeks. Early diagnosis saves thousands. A $200 fluid service today can prevent a $4,000 rebuild next month. Colorado mountain driving — steep grades, towing, stop-and-go — puts extra strain on transmissions.",
      signs: [
        "Rough, harsh, or delayed shifting",
        "Transmission slipping — RPMs climb but the car doesn't accelerate",
        "Grinding or shaking when shifting gears",
        "Burning smell from under the vehicle",
        "Transmission warning light or check engine light",
        "Fluid leak (red or brown fluid under the vehicle)"
      ]
    },
    process: {
      heading: "Our Transmission Service Process",
      steps: [
        { title: "Diagnostic Scan & Road Test", desc: "We pull transmission-specific codes, monitor shift points and pressures with live data, and road test the vehicle to replicate the symptoms you described." },
        { title: "Fluid Inspection & Level Check", desc: "We check transmission fluid level, color, smell, and condition. Dark, burnt fluid is a red flag. We also check for leaks at the pan, lines, cooler, and seals." },
        { title: "Clear Explanation & Options", desc: "We explain what we found and give you real options: fluid service, solenoid replacement, valve body work, or if it's more serious — we'll tell you straight. Written quote, you decide." },
        { title: "Service or Repair", desc: "From fluid and filter changes to internal component repair, we handle it with precision. After service, we road test to verify proper shift quality and timing." }
      ]
    },
    included: [
      "Transmission diagnostic code scan",
      "Live data monitoring of shift points and pressures",
      "Road test to verify symptoms",
      "Fluid level, condition, and leak inspection",
      "Written estimate before any work",
      "Post-service road test verification",
      "Complimentary full-vehicle safety inspection"
    ],
    whyChoose: [
      { title: "Honest Assessment", desc: "We won't tell you your transmission is shot if it just needs a fluid change. We diagnose accurately and give you real options." },
      { title: "Mountain-Ready", desc: "Colorado mountain driving is hard on transmissions. We understand the stress patterns and service accordingly." },
      { title: "Transparent Pricing", desc: "Transmission work can be expensive. We give you a detailed written quote so you know exactly what you're paying for." },
      { title: "Prevent, Don't Replace", desc: "Regular fluid service extends transmission life dramatically. We'll recommend a maintenance schedule that protects your investment." }
    ],
    faqs: [
      { q: "How do I know if my transmission is failing?", a: "Rough or delayed shifts, slipping (RPMs rise without acceleration), grinding noises, or a burning smell are all warning signs. A dashboard warning light is the most obvious indicator. Get it checked promptly — catching problems early saves thousands." },
      { q: "How much does transmission repair cost?", a: "It varies enormously — from a $200 fluid service to several thousand for major internal work. That's why accurate diagnosis matters. We'll tell you exactly what's wrong and what it costs before starting." },
      { q: "How often should I service my transmission fluid?", a: "Most manufacturers recommend every 30,000–60,000 miles. If you tow, drive in mountains, or do a lot of stop-and-go driving, more frequent service is smart. Check your owner's manual or ask us." },
      { q: "Can you fix my transmission or does it need to be replaced?", a: "Many transmission problems can be resolved without a full replacement — solenoid replacement, valve body repair, fluid service. We diagnose first and give you honest options." }
    ],
    closingCta: "Don't ignore transmission symptoms. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122. We'll diagnose the issue accurately and give you straight answers. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },

  "wheel-alignment-littleton-co": {
    slug: "wheel-alignment-littleton-co",
    intro: "If your vehicle pulls to one side, your steering wheel is off-center, or your tires are wearing unevenly — you likely need an alignment. At AutoTrek Service Center in Littleton, we use precision alignment equipment to measure and adjust your vehicle's camber, caster, and toe to manufacturer specifications. Proper alignment extends tire life, improves handling, and keeps you driving straight.",
    whyMatters: {
      heading: "Why Alignment Matters More Than You Think",
      body: "Misalignment doesn't just cause your car to pull — it silently eats your tires. A vehicle that's just half a degree out of spec can scrub off thousands of miles of tread life. That's hundreds of dollars in premature tire replacement. Beyond tires, misalignment affects handling, braking stability, and fuel economy. Colorado potholes, construction zones, and curb strikes can knock alignment out of spec in an instant. After hitting a big pothole, it's worth getting checked.",
      signs: [
        "Vehicle pulls to the left or right",
        "Steering wheel is off-center when driving straight",
        "Uneven or rapid tire wear",
        "Steering feels loose or wandering",
        "Squealing tires on turns",
        "Vehicle doesn't track straight after hitting a pothole or curb"
      ]
    },
    process: {
      heading: "Our Alignment Process",
      steps: [
        { title: "Pre-Alignment Inspection", desc: "Before we align, we inspect suspension components — tie rods, ball joints, bushings, struts. Aligning a vehicle with worn suspension parts is pointless because the alignment won't hold. We make sure the foundation is solid first." },
        { title: "Precision Measurement", desc: "Using computerized alignment equipment, we measure all three alignment angles: camber (tilt), caster (steering axis), and toe (parallel tracking). We compare to your vehicle's manufacturer specifications." },
        { title: "Adjustment", desc: "We adjust the angles that are out of spec. Some vehicles allow adjustment on all four wheels; others only the front. We'll let you know what your vehicle allows." },
        { title: "Verification & Print", desc: "After adjustment, we verify all angles are within spec and provide you with a before-and-after alignment printout showing exactly what was corrected." }
      ]
    },
    included: [
      "Pre-alignment suspension inspection",
      "Computerized alignment measurement (all angles)",
      "Adjustment to manufacturer specifications",
      "Before-and-after alignment printout",
      "Tire pressure check and adjustment",
      "Complimentary full-vehicle safety inspection"
    ],
    whyChoose: [
      { title: "Suspension Check First", desc: "We inspect before we align. If a tie rod or ball joint is worn, we'll tell you — because aligning over worn parts wastes your money." },
      { title: "Printout Proof", desc: "You get a before-and-after printout showing exactly what we measured and adjusted. Full transparency." },
      { title: "Tire Life Extension", desc: "Proper alignment can add thousands of miles to your tire life. It pays for itself." },
      { title: "Colorado Road Awareness", desc: "We know the potholes, construction, and road conditions around Littleton that knock alignments out. We see it every day." }
    ],
    faqs: [
      { q: "How often do I need an alignment?", a: "We recommend checking alignment annually, after hitting a significant pothole or curb, after suspension work, or when you notice pulling or uneven tire wear. Some vehicles need it more frequently." },
      { q: "How long does an alignment take?", a: "Typically 45 minutes to an hour. If suspension repairs are needed first, that adds time — but we'll discuss that with you before proceeding." },
      { q: "Will an alignment fix my pulling?", a: "Usually, yes — if the cause is alignment-related. If a tire is defective or suspension is worn, alignment alone won't fix it. We check everything before recommending." },
      { q: "Should I get an alignment with new tires?", a: "Absolutely. Starting with proper alignment protects your investment and ensures even wear from day one." }
    ],
    closingCta: "Save your tires and your handling. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122 for a precision alignment. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },

  "preventative-maintenance-littleton-co": {
    slug: "preventative-maintenance-littleton-co",
    intro: "The cheapest repair is the one you never need. Preventative maintenance catches small problems before they become expensive breakdowns. At AutoTrek Service Center in Littleton, we follow manufacturer-recommended service schedules tailored to your vehicle, your mileage, and Colorado driving conditions. Every visit includes a full safety inspection — because the best time to find a problem is before it leaves you stranded.",
    whyMatters: {
      heading: "Why Preventative Maintenance Saves You Thousands",
      body: "Modern vehicles are reliable, but they're not maintenance-free. Belts crack, fluids break down, filters clog, and components wear. Manufacturer service schedules exist because engineers know exactly when parts need attention. Skipping scheduled maintenance doesn't save money — it shifts the cost to a larger repair bill later. A $150 coolant flush prevents a $2,000 overheating episode. A $30 air filter prevents reduced performance and fuel economy. Colorado's elevation, temperature extremes, and mountain driving accelerate wear on many components.",
      signs: [
        "Maintenance reminder light on your dashboard",
        "It's been over a year since your last full service",
        "You've hit a major mileage milestone (30k, 60k, 90k, 100k+)",
        "Fluid levels dropping between oil changes",
        "Vehicle doesn't feel as responsive or smooth as it used to",
        "You're planning a long road trip or mountain drive"
      ]
    },
    process: {
      heading: "Our Maintenance Process",
      steps: [
        { title: "Review Service History & Schedule", desc: "We check your vehicle's recommended maintenance schedule against what's been done. We identify what's due now, what's coming up soon, and what can wait." },
        { title: "Full Vehicle Inspection", desc: "We inspect all major systems: fluids, brakes, tires, belts, hoses, battery, suspension, lights, wipers. We measure and document — not just glance." },
        { title: "Prioritized Recommendations", desc: "We categorize findings: needs attention now, should be done soon, and can plan for later. You get a written report with costs for each item. No pressure." },
        { title: "Service & Document", desc: "We perform the maintenance you approve, update your service records, and reset maintenance reminders. You drive away knowing exactly where your vehicle stands." }
      ]
    },
    included: [
      "Manufacturer maintenance schedule review",
      "Full multi-system vehicle inspection",
      "Fluid level checks and top-offs",
      "Tire pressure and tread assessment",
      "Brake inspection",
      "Belt and hose condition check",
      "Battery test",
      "Written report with prioritized recommendations"
    ],
    whyChoose: [
      { title: "Schedule-Based, Not Sales-Based", desc: "We follow your manufacturer's recommendations, not our revenue targets. If something doesn't need doing yet, we'll say so." },
      { title: "Full Picture Every Visit", desc: "Our inspection covers the entire vehicle. You always know the complete status — not just the one thing you came in for." },
      { title: "Documented History", desc: "We keep records of what was done and when. This protects your warranty, supports resale value, and helps plan future maintenance." },
      { title: "Colorado-Adjusted", desc: "Altitude and temperature extremes affect maintenance intervals. We account for real Colorado driving conditions." }
    ],
    faqs: [
      { q: "What maintenance does my car need?", a: "It depends on your vehicle, mileage, and driving conditions. Common items include oil changes, fluid flushes, filter replacements, brake inspections, and belt/hose checks. We reference your manufacturer's schedule." },
      { q: "My car seems fine — do I really need maintenance?", a: "Yes. Most maintenance prevents problems you can't see or feel yet. By the time you notice symptoms, the underlying issue has usually progressed. Prevention is always cheaper than repair." },
      { q: "What's a 30k/60k/90k service?", a: "These are milestone services based on mileage. Each includes specific items recommended by your vehicle's manufacturer — typically more extensive than a basic oil change. We'll tell you exactly what's included for your vehicle." },
      { q: "Can I just do the critical stuff and skip the rest?", a: "Absolutely. We prioritize recommendations so you can address the most important items first and plan for the rest. No pressure to do everything at once." }
    ],
    closingCta: "Stay ahead of breakdowns. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122 for a maintenance check. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },

  "pre-purchase-inspection-littleton-co": {
    slug: "pre-purchase-inspection-littleton-co",
    intro: "Buying a used car is one of the biggest financial decisions most people make. A pre-purchase inspection from AutoTrek Service Center in Littleton can save you thousands — or save you from a very expensive mistake. We put any vehicle on the lift, check 50+ points, and give you a straight, honest report before you hand over the money. No sales pressure, no affiliations with the seller — just the facts.",
    whyMatters: {
      heading: "Why a Pre-Purchase Inspection Is Non-Negotiable",
      body: "Private sellers and even dealerships don't always disclose everything. A car that looks pristine in photos can have a leaking transmission, a compromised frame from an undisclosed accident, or $5,000 in deferred maintenance waiting to hit you. An inspection typically costs $100–$150. It can reveal problems that cost $2,000–$10,000 to fix — or confirm the car is solid and worth buying. Either way, you're making an informed decision. Skipping this step is the single most expensive mistake used-car buyers make.",
      signs: [
        "You're about to buy a used vehicle from a private party",
        "A dealership is pressuring you to decide quickly",
        "The listing price seems too good to be true",
        "The seller says it was in a minor accident",
        "You don't have a mechanic you trust to evaluate it yourself",
        "You're buying from out of state or sight unseen"
      ]
    },
    process: {
      heading: "What We Check in Our Pre-Purchase Inspection",
      steps: [
        { title: "Under-Hood & Engine Check", desc: "We check engine condition, fluid levels and condition, belts, hoses, leaks, battery, and look for signs of overheating, head gasket issues, or deferred maintenance." },
        { title: "Undercarriage & Frame Inspection", desc: "We put the vehicle on the lift to inspect the frame for damage or repairs, check for rust (critical in Colorado), inspect suspension components, and look for leaks from engine, transmission, or differentials." },
        { title: "Brakes, Tires & Drivetrain", desc: "We measure brake pad and rotor thickness, check tire tread and condition, inspect CV joints and axles, and test 4WD operation if applicable." },
        { title: "Road Test & Electronics", desc: "We drive the vehicle to check transmission shifting, steering, braking, AC/heat, and listen for unusual noises. We also scan for stored diagnostic codes — which sellers sometimes clear before listing." }
      ]
    },
    included: [
      "50+ point inspection across all major systems",
      "Engine and fluid condition check",
      "Frame and undercarriage inspection",
      "Brake and tire measurement",
      "OBD-II diagnostic scan for hidden codes",
      "Road test",
      "Written report with pass/fail/monitor ratings",
      "Verbal walkthrough of findings — plain English"
    ],
    whyChoose: [
      { title: "No Conflict of Interest", desc: "We work for you, not the seller. Our only job is to tell you the truth about the vehicle's condition." },
      { title: "Written Report", desc: "You get a documented inspection report — useful for negotiating price, walking away, or keeping records after purchase." },
      { title: "Fast Turnaround", desc: "We know you're on a timeline. Most pre-purchase inspections are completed same day." },
      { title: "Colorado Specific", desc: "We know Colorado vehicles — altitude effects, rust from mountain roads, and typical failure patterns for vehicles used here." }
    ],
    faqs: [
      { q: "Can the seller bring the car to you?", a: "Yes — many sellers will drive the vehicle to our shop for an inspection. If they refuse, that's a red flag worth noting." },
      { q: "What if the car is at a dealership?", a: "Most reputable dealerships allow third-party inspections. If a dealer refuses to allow an independent inspection, walk away." },
      { q: "How much does a pre-purchase inspection cost?", a: "Call us for current pricing. It's typically a fraction of what you'd spend fixing undisclosed problems after purchase." },
      { q: "What if you find problems?", a: "We give you a clear report with our findings. You can use it to negotiate a lower price, ask the seller to repair issues, or decide to walk away. The decision is yours — we just give you the information." }
    ],
    closingCta: "Don't buy blind. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122 before you sign anything. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },

  "complete-auto-repair-littleton-co": {
    slug: "complete-auto-repair-littleton-co",
    intro: "Whatever your vehicle needs — from a simple oil change to a complex engine repair — AutoTrek Service Center in Littleton handles it under one roof. We're a full-service auto repair shop staffed by ASE-certified technicians who work on domestic, foreign, trucks, and SUVs. Bring it in, we'll figure out what's wrong, explain it clearly, and fix it right. Every visit includes a full vehicle safety inspection at no extra charge.",
    whyMatters: {
      heading: "Why One Trusted Shop Beats Bouncing Between Specialists",
      body: "Having a single shop that knows your vehicle saves time, money, and headaches. We keep records of every service, understand your vehicle's history, and can spot developing issues before they become emergencies. Instead of explaining your car's quirks to a new mechanic every time, you work with a team that already knows your vehicle. We handle brakes, engine, transmission, electrical, steering, suspension, AC, exhaust, and more. If it rolls into the bay, we can fix it.",
      signs: [
        "Dashboard warning lights (check engine, ABS, TPMS, etc.)",
        "Unusual noises (grinding, clunking, squealing, ticking)",
        "Performance changes (rough idle, hesitation, loss of power)",
        "Fluid leaks under the vehicle",
        "Overheating or temperature gauge rising",
        "Anything that doesn't feel right when you drive"
      ]
    },
    process: {
      heading: "Our Repair Process",
      steps: [
        { title: "Listen & Diagnose", desc: "We start by listening to you — what symptoms you're experiencing, when they started, and what conditions trigger them. Then we diagnose using professional tools and hands-on inspection." },
        { title: "Explain & Quote", desc: "We tell you what we found in plain English. Written estimate with parts and labor. We explain what's critical and what can wait. You decide." },
        { title: "Repair", desc: "Our ASE-certified technicians perform the work using quality parts. We follow manufacturer specifications and don't cut corners." },
        { title: "Verify & Return", desc: "We verify the repair resolved the issue — road test, system checks, code verification. You get your vehicle back running right." }
      ]
    },
    included: [
      "Professional diagnostics across all vehicle systems",
      "Written estimate before any work begins",
      "ASE-certified technician repair",
      "Quality parts matched to your vehicle",
      "Post-repair verification",
      "Complimentary full-vehicle safety inspection",
      "Service history documentation"
    ],
    whyChoose: [
      { title: "Everything Under One Roof", desc: "Brakes, engine, transmission, electrical, AC, steering, tires — we handle it all. One shop, one team, one relationship." },
      { title: "We Know Your Vehicle", desc: "We keep detailed service records. Over time, we understand your vehicle's history and can catch issues early." },
      { title: "No Surprise Bills", desc: "Written quotes, you approve first. If we find something unexpected during repair, we call before proceeding." },
      { title: "ASE-Certified Team", desc: "Our technicians are trained and certified. We invest in ongoing education and modern diagnostic equipment." }
    ],
    faqs: [
      { q: "What vehicles do you work on?", a: "Domestic (Ford, Chevy, RAM, etc.), foreign (Toyota, Honda, BMW, Subaru, etc.), trucks, SUVs, and most specialty vehicles. If you're unsure, call us." },
      { q: "Do I need an appointment?", a: "Appointments are recommended to guarantee your time slot, but we accept walk-ins when availability allows. Call ahead for the best experience." },
      { q: "How long will my repair take?", a: "It depends on the repair. Simple services are often same-day. Complex repairs may take longer. We'll give you a realistic time estimate when you drop off." },
      { q: "Can I get a ride or wait?", a: "We have a comfortable waiting area. For longer repairs, we can help arrange alternative transportation." }
    ],
    closingCta: "One shop for everything your vehicle needs. Call AutoTrek Service Center at (303) 328-3356 or stop by 8161 S Grant Way, Littleton, CO 80122. Serving Littleton, Highlands Ranch, Englewood, Centennial, Lakewood, and the Denver metro area."
  },
}
