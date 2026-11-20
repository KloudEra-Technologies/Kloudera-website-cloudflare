import React, { useRef, useState } from "react";
import { WinterBanner } from "./WinterBanner";
import { WinterFrostHeader } from "./WinterFrostHeader";
import { WinterHangingSnowflakes } from "./WinterHangingSnowflakes";
import { WinterCornerFrost } from "./WinterCornerFrost";
import { WinterSnowfall } from "./WinterSnowfall";
import { WinterPineTrees } from "./WinterPineTrees";
import { WinterSnowman } from "./WinterSnowman";
import { WinterSnowLandscape } from "./WinterSnowLandscape";

/**
 * WinterExperience - Complete Winter Wonderland ambiance for KloudEra Technologies:
 * 1. Gentle natural white snowfall drifting across screen (canvas 60fps).
 * 2. Crystalline Icicles along top edge.
 * 3. Hanging silver snowflake ornaments swaying from the header.
 * 4. Translucent windowpane frost ferns in corners.
 * 5. Multi-layer rolling snow landscape dunes across bottom of the screen.
 * 6. Snowy evergreen pine trees nestled in the snowbank.
 * 7. Interactive cheerful snowman with scarf, hat, tap flurry & winter greeting.
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

      {/* 5. Falling Pure White Snowflakes with Natural Wind Drift */}
      <WinterSnowfall triggerFlurryRef={triggerFlurryRef} />

      {/* 6. Multi-layer Rolling Snow Landscape along Bottom of Screen */}
      <WinterSnowLandscape />

      {/* 7. Snowy Evergreen Pine Trees at Bottom-Left */}
      <WinterPineTrees />

      {/* 8. Interactive Winter Snowman with Scarf, Hat & Flurry Trigger */}
      <WinterSnowman onFlurryRequest={handleFlurryRequest} />

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
