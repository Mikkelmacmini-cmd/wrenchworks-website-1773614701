type MobileActionRailProps = {
  phoneHref: string;
  callbackHref: string;
  quickDiagnosisHref: string;
};

export function MobileActionRail({ phoneHref, callbackHref, quickDiagnosisHref }: MobileActionRailProps) {
  return (
    <div className="sticky-cta md:hidden" aria-label="Quick actions">
      <a href={phoneHref} className="btn-primary ui-pressable min-h-14 rounded-full px-4 py-3 text-sm font-semibold">
        Call Now
      </a>
      <a href={callbackHref} className="btn-secondary ui-pressable min-h-14 rounded-full px-4 py-3 text-sm font-semibold">
        Request Callback
      </a>
      <a href={quickDiagnosisHref} className="btn-ghost ui-pressable min-h-14 rounded-full px-4 py-3 text-sm font-semibold">
        Quick Diagnosis
      </a>
    </div>
  );
}
