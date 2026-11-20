import React from "react";

export function WinterHangingSnowflakes({ hasBanner = true }: { hasBanner?: boolean }) {
  const ornaments = [
    { left: "8%", length: 50, size: 20, delay: "0s", duration: "4.2s" },
    { left: "22%", length: 68, size: 26, delay: "1.2s", duration: "5.1s" },
    { left: "42%", length: 44, size: 18, delay: "0.5s", duration: "4.6s" },
    { left: "64%", length: 74, size: 28, delay: "1.8s", duration: "5.4s" },
    { left: "82%", length: 55, size: 22, delay: "0.9s", duration: "4.8s" },
    { left: "93%", length: 38, size: 16, delay: "2.1s", duration: "4.0s" },
  ];

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 z-35 overflow-visible transition-all duration-300 ${
        hasBanner ? "top-[38px]" : "top-0"
      }`}
      aria-hidden="true"
    >
      {ornaments.map((orn, i) => (
        <div
          key={i}
          className="absolute origin-top select-none"
          style={{
            left: orn.left,
            animation: `ornamentSwing ${orn.duration} ease-in-out infinite alternate`,
            animationDelay: orn.delay,
          }}
        >
          {/* Fine Frosty Silver Hanging Thread */}
          <div
            className="mx-auto w-[1px] bg-gradient-to-b from-white/70 via-white/40 to-white/80"
            style={{ height: `${orn.length}px` }}
          />

          {/* Pure Silver-White Hanging Snowflake Crystal */}
          <div
            className="-mt-1 flex items-center justify-center transition-transform hover:scale-125"
            style={{
              width: `${orn.size}px`,
              height: `${orn.size}px`,
              filter: "drop-shadow(0 2px 6px rgba(255, 255, 255, 0.35))",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width={orn.size}
              height={orn.size}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            >
              {/* Central Hex Star Crystal */}
              <line x1="12" y1="2" x2="12" y2="22" />
              <line x1="3.34" y1="7" x2="20.66" y2="17" />
              <line x1="3.34" y1="17" x2="20.66" y2="7" />
              {/* Outer Barbs */}
              <polyline points="10 4 12 2 14 4" />
              <polyline points="10 20 12 22 14 20" />
              <polyline points="4.5 8.5 3.34 7 5.5 6" />
              <polyline points="19.5 18 20.66 17 18.5 15.5" />
              <polyline points="4.5 15.5 3.34 17 5.5 18" />
              <polyline points="19.5 6 20.66 7 18.5 8.5" />
              {/* Center Dot - Pure White */}
              <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes ornamentSwing {
          0% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
}

export default WinterHangingSnowflakes;
