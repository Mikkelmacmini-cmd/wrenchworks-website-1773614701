"use client";

import { useEffect, useRef, useState } from "react";

type MobileActionRailProps = {
  phoneHref: string;
  callbackHref: string;
  quickDiagnosisHref: string;
};

export function MobileActionRail({ phoneHref }: MobileActionRailProps) {
  const [hiddenByStop, setHiddenByStop] = useState(false);
  const [hiddenByOverlap, setHiddenByOverlap] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    const setRailHeight = () => {
      const railHeight = railRef.current?.offsetHeight ?? 0;
      root.style.setProperty("--mobile-rail-height", `${railHeight}px`);
    };

    body.setAttribute("data-has-mobile-rail", "true");
    setRailHeight();

    const resizeObserver = new ResizeObserver(() => setRailHeight());
    if (railRef.current) resizeObserver.observe(railRef.current);

    const stops = Array.from(document.querySelectorAll<HTMLElement>("[data-sticky-rail-stop='true']"));

    const hideByOverlapCheck = () => {
      if (!railRef.current || !stops.length) {
        setHiddenByOverlap(false);
        return;
      }

      const railRect = railRef.current.getBoundingClientRect();
      const railTopWithGap = railRect.top - 14;
      const overlap = stops.some((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top < railTopWithGap && rect.bottom > 0;
      });

      setHiddenByOverlap(overlap);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const shouldHide = entries.some((entry) => entry.isIntersecting);
        setHiddenByStop(shouldHide);
      },
      {
        rootMargin: "0px 0px -108px 0px",
        threshold: [0, 0.15, 0.45],
      },
    );

    stops.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", hideByOverlapCheck, { passive: true });
    window.addEventListener("resize", hideByOverlapCheck);
    hideByOverlapCheck();

    return () => {
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("scroll", hideByOverlapCheck);
      window.removeEventListener("resize", hideByOverlapCheck);
      body.removeAttribute("data-has-mobile-rail");
      root.style.removeProperty("--mobile-rail-height");
    };
  }, []);

  const hidden = hiddenByStop || hiddenByOverlap;

  return (
    <div ref={railRef} className="sticky-cta md:hidden" data-state={hidden ? "hidden" : "visible"} aria-label="Quick actions">
      <a data-copy-id="mobileRail.cta.primary" href={phoneHref} className="btn-primary ui-pressable min-h-14 w-full rounded-full px-4 py-3 text-sm font-semibold">
        Book Diagnostic
      </a>
    </div>
  );
}
