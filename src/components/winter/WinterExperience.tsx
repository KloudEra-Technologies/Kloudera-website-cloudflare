import React, { useRef, useState } from "react";
import { WinterBanner } from "./WinterBanner";
import { WinterFrostHeader } from "./WinterFrostHeader";
import { WinterHangingSnowflakes } from "./WinterHangingSnowflakes";
import { WinterCornerFrost } from "./WinterCornerFrost";
import { WinterSnowfall } from "./WinterSnowfall";
import { WinterPineTrees } from "./WinterPineTrees";
import { WinterSnowman } from "./WinterSnowman";

/**
 * WinterExperience - Complete Winter Wonderland ambiance for KloudEra Technologies:
 * 1. Geometric Frozen Ice Crystals & Stellar Dendrites drifting down (high-DPI canvas).
 * 2. Crystalline Icicle fringe along top edge.
 * 3. Hanging 3D Snowflake ornaments swaying gracefully from the header.
 * 4. Translucent frost ferns framing the top window corners.
 * 5. Snowy evergreen pine trees with snow pillows and fairy lights in bottom-left.
 * 6. Interactive cheerful snowman with knit scarf, top hat, tap flurry & winter greetings.
 * 7. Soft bottom snowbank drift glow and frosty glass enhancements.
 */
export function WinterExperience() {
  const triggerFlurryRef = useRef<(() => void) | null>(null);
  const [hasBanner, setHasBanner] = useState(true);

  const handleFlurryRequest = () => {
    if (triggerFlurryRef.current) {
      triggerFlurryRef.current();
    }
  };

  return (
    <>
      {/* 1. Top Winter Seasonal Announcement Ribbon */}
      <WinterBanner onDismiss={() => setHasBanner(false)} />

      {/* 2. Crystalline Icicles along Top Header */}
      <WinterFrostHeader hasBanner={hasBanner} />

      {/* 3. Swaying Crystal Snowflake Ornaments Hanging from Top */}
      <WinterHangingSnowflakes hasBanner={hasBanner} />

      {/* 4. Translucent Frosted Window Ferns in Corners */}
      <WinterCornerFrost />

      {/* 5. Falling Frozen Snow & Geometric Ice Crystals (Stellar Dendrites, Ice Plates, Stars) */}
      <WinterSnowfall triggerFlurryRef={triggerFlurryRef} />

      {/* 6. Snowy Evergreen Pine Trees at Bottom-Left */}
      <WinterPineTrees />

      {/* 7. Interactive Winter Snowman with Scarf, Hat & Flurry Trigger */}
      <WinterSnowman onFlurryRequest={handleFlurryRequest} />

      {/* 8. Soft Bottom Frost Bank / Snow Drift Glow */}
      <div
        className="pointer-events-none fixed bottom-0 left-0 right-0 h-12 z-20 opacity-50 bg-gradient-to-t from-sky-300/15 via-sky-400/5 to-transparent"
        aria-hidden="true"
      />

      {/* 9. Winter Themed Atmospheric CSS Enhancements */}
      <style>{`
        :root {
          --winter-frost: #38BDF8;
          --winter-ice: #BAE6FD;
          --winter-navy: #0F172A;
        }

        /* Subtle frosty ice shimmer on glass cards */
        .glass-winter {
          box-shadow: 0 0 30px -5px rgba(56, 189, 248, 0.16);
          border-color: rgba(56, 189, 248, 0.25) !important;
        }

        /* Smooth winter scrollbar theme */
        ::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.3) !important;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.5) !important;
        }
      `}</style>
    </>
  );
}

export default WinterExperience;
