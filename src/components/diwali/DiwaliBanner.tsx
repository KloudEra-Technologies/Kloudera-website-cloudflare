import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

export function DiwaliBanner({ onDismiss }: { onDismiss?: () => void }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Diwali Festive Greeting"
      className="fixed top-0 inset-x-0 z-[55] h-8 w-full border-b border-amber-500/35 bg-gradient-to-r from-amber-950/95 via-yellow-950/90 to-amber-950/95 px-3 text-center text-xs backdrop-blur-md shadow-[0_4px_16px_rgba(245,158,11,0.2)] flex items-center justify-center select-none"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-3 text-amber-200">
        <span className="text-sm" role="img" aria-label="Diya">🪔</span>
        <span className="font-semibold tracking-wider bg-gradient-to-r from-amber-300 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
          Shubh Deepavali!
        </span>
        <span className="hidden md:inline text-amber-200/90 font-light text-[11px]">
          May the Festival of Lights bring eternal brilliance, joy, and prosperity to your digital enterprise.
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-amber-300 bg-amber-500/25 rounded-full px-2 py-0.5 border border-amber-500/40">
          <Sparkles className="size-2.5 text-amber-300 animate-pulse" />
          Festival of Lights
        </span>
        <span className="text-sm" role="img" aria-label="Diya">🪔</span>
      </div>

      <button
        onClick={() => {
          setDismissed(true);
          onDismiss?.();
        }}
        className="absolute right-3 p-1 text-amber-400/80 hover:text-amber-100 transition-colors"
        title="Dismiss greeting banner"
        aria-label="Dismiss banner"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}

export default DiwaliBanner;
