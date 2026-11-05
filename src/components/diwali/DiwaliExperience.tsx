import React, { useRef, useState } from "react";
import { DiwaliToran } from "./DiwaliToran";
import { DiwaliBanner } from "./DiwaliBanner";
import { DiwaliDiyas } from "./DiwaliDiyas";
import { DiwaliSkySparkles } from "./DiwaliSkySparkles";

/**
 * DiwaliExperience - Complete festive ambiance for KloudEra Technologies:
 * 1. Marigold & Mango leaf hanging Toran (Bandhanwar) along the top.
 * 2. Elegant festive announcement banner.
 * 3. Ornate Terracotta clay Diyas with animated flickering flames & warm ambient glow.
 * 4. Atmospheric golden diya light embers and cascading fireworks in the background.
 */
export function DiwaliExperience() {
  const triggerBurstRef = useRef<(() => void) | null>(null);
  const [hasBanner, setHasBanner] = useState(true);

  const handleSparkleRequest = () => {
    if (triggerBurstRef.current) {
      triggerBurstRef.current();
    }
  };

  return (
    <>
      {/* 1. Top Festive Announcement Ribbon */}
      <DiwaliBanner onDismiss={() => setHasBanner(false)} />

      {/* 2. Traditional Hanging Marigold & Mango Leaf Floral Toran */}
      <DiwaliToran hasBanner={hasBanner} />

      {/* 3. Atmospheric Golden Diya Embers & Grand Cascading Fireworks */}
      <DiwaliSkySparkles triggerBurstRef={triggerBurstRef} />

      {/* 4. Ornate Terracotta Clay Diya with Flickering Flame & Deepavali Blessings */}
      <DiwaliDiyas onSparkleRequest={handleSparkleRequest} />

      {/* 5. Subtle Diwali Golden Aura enhancements on the theme */}
      <style>{`
        /* Warm Diwali Golden highlights for buttons & glass accents */
        :root {
          --diwali-gold: #F59E0B;
        }
        .glass-diwali {
          box-shadow: 0 0 25px -5px rgba(245, 158, 11, 0.15);
        }
      `}</style>
    </>
  );
}

export default DiwaliExperience;
