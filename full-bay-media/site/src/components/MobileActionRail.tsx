"use client";

import { useEffect, useState } from "react";

type MobileActionRailProps = {
  phoneHref: string;
  callbackHref: string;
  quickDiagnosisHref: string;
};

export function MobileActionRail({ phoneHref, callbackHref, quickDiagnosisHref }: MobileActionRailProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const stops = Array.from(document.querySelectorAll("[data-sticky-rail-stop='true']"));
    if (!stops.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const shouldHide = entries.some((entry) => entry.isIntersecting);
        setHidden(shouldHide);
      },
      { rootMargin: "0px 0px -16% 0px", threshold: [0, 0.2, 0.6] },
    );

    stops.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky-cta md:hidden" data-state={hidden ? "hidden" : "visible"} aria-label="Quick actions">
      <a data-copy-id="mobileRail.cta.primary" href={phoneHref} className="btn-primary ui-pressable min-h-14 rounded-full px-4 py-3 text-sm font-semibold">
        Book Diagnostic
      </a>
      <a data-copy-id="mobileRail.cta.secondary" href={callbackHref} className="btn-secondary ui-pressable min-h-14 rounded-full px-4 py-3 text-sm font-semibold">
        Request Callback
      </a>
      <a data-copy-id="mobileRail.cta.tertiary" href={quickDiagnosisHref} className="btn-ghost ui-pressable min-h-14 rounded-full px-4 py-3 text-sm font-semibold">
        Quick Triage
      </a>
    </div>
  );
}
