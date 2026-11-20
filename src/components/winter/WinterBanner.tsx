import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

export function WinterBanner({ onDismiss }: { onDismiss?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const handleClose = () => {
    setIsVisible(false);
    if (onDismiss) onDismiss();
  };

  return (
    <aside
      className="relative z-50 flex items-center justify-between border-b border-sky-500/20 bg-gradient-to-r from-sky-950/95 via-slate-950/95 to-sky-950/95 px-3 py-2 text-xs text-slate-200 backdrop-blur-md transition-all duration-300 md:px-6"
      aria-label="Winter Seasonal Greeting"
    >
      <div className="mx-auto flex flex-wrap items-center justify-center gap-2 text-center md:gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/30 bg-sky-500/10 px-2.5 py-0.5 font-medium text-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.2)]">
          <span className="text-sm">❄️</span>
          <span>Winter 2026</span>
        </span>
        <span className="font-medium tracking-wide text-slate-100">
          Season's Greetings from KloudEra Technologies — Zero-Trust Resilience for Sub-Zero Winters.
        </span>
        <span className="hidden items-center gap-1 text-sky-400 font-semibold md:inline-flex">
          <Sparkles className="h-3 w-3" />
          <span>Cold-Storage & 24/7 SOC</span>
        </span>
      </div>

      <button
        onClick={handleClose}
        className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
        aria-label="Dismiss winter greeting"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </aside>
  );
}

export default WinterBanner;
