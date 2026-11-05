import React from "react";

/**
 * Single ornate clay Diya (Deepak) with multi-layer animated flame & ambient glow
 */
export function SingleDiya({
  size = 52,
  className = "",
  onClick,
}: {
  size?: number;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      title="Shubh Deepavali! Click to celebrate ✨"
      className={`relative inline-block cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-95 ${className}`}
      style={{ width: size, height: size * 0.85 }}
    >
      {/* Warm Ambient Pulsing Glow */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-full opacity-65 blur-lg animate-pulse"
        style={{
          background: "radial-gradient(circle, rgba(255, 183, 3, 0.55) 0%, rgba(251, 133, 0, 0.25) 50%, transparent 80%)",
        }}
      />

      <svg
        viewBox="0 0 100 85"
        className="relative z-10 w-full h-full drop-shadow-[0_4px_12px_rgba(245,158,11,0.5)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Flame Gradients */}
          <radialGradient id="flameInner" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FFF275" />
            <stop offset="100%" stopColor="#FFB703" />
          </radialGradient>

          <linearGradient id="flameOuter" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FF1493" />
            <stop offset="25%" stopColor="#FF5722" />
            <stop offset="65%" stopColor="#FFB703" />
            <stop offset="100%" stopColor="#FB8500" />
          </linearGradient>

          {/* Clay Terracotta Gradients */}
          <linearGradient id="terracotta" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D97706" />
            <stop offset="35%" stopColor="#B45309" />
            <stop offset="70%" stopColor="#78350F" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>

          {/* Gold Filigree / Rim */}
          <linearGradient id="diyaGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>

        {/* 1. FLICKERING MULTI-LAYER FLAME */}
        <g className="animate-flame origin-bottom" style={{ transformOrigin: "50px 38px" }}>
          {/* Outer Flame Aura */}
          <path
            d="M 50 4 C 42 16 38 24 38 34 C 38 42 43 46 50 46 C 57 46 62 42 62 34 C 62 24 58 16 50 4 Z"
            fill="url(#flameOuter)"
            opacity="0.9"
            filter="drop-shadow(0 0 6px rgba(255,100,0,0.8))"
          />

          {/* Inner Golden Core */}
          <path
            d="M 50 14 C 45 22 43 28 43 35 C 43 41 46 44 50 44 C 54 44 57 41 57 35 C 57 28 55 22 50 14 Z"
            fill="url(#flameInner)"
          />

          {/* White-hot Spark center */}
          <ellipse cx="50" cy="34" rx="3.5" ry="7" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* 2. COTTON WICK */}
        <line x1="50" y1="36" x2="50" y2="44" stroke="#2B1810" strokeWidth="2.5" strokeLinecap="round" />

        {/* 3. TERRACOTTA CLAY LAMP BODY */}
        {/* Lamp Base Bowl */}
        <path
          d="M 12 44 Q 50 82 88 44 Q 50 49 12 44 Z"
          fill="url(#terracotta)"
          stroke="#92400E"
          strokeWidth="1.2"
        />

        {/* Lamp Rim (Golden Ornamental Lip) */}
        <ellipse cx="50" cy="45" rx="38" ry="5.5" fill="url(#diyaGold)" stroke="#B45309" strokeWidth="1" />

        {/* Inner Oil Surface */}
        <ellipse cx="50" cy="46" rx="30" ry="3.5" fill="#451A03" opacity="0.8" />

        {/* Ornamental Carvings along the bowl */}
        <path
          d="M 24 53 Q 50 68 76 53"
          stroke="url(#diyaGold)"
          strokeWidth="1.8"
          strokeDasharray="2 3"
          fill="none"
        />
        <circle cx="50" cy="62" r="2.5" fill="url(#diyaGold)" />
        <circle cx="36" cy="57" r="1.8" fill="url(#diyaGold)" />
        <circle cx="64" cy="57" r="1.8" fill="url(#diyaGold)" />

        {/* Lamp Stand / Pedestal */}
        <path
          d="M 40 76 Q 50 79 60 76 L 64 82 Q 50 85 36 82 Z"
          fill="url(#terracotta)"
          stroke="#78350F"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/**
 * DiwaliDiyas - Traditional earthen lamp in bottom corner
 */
export function DiwaliDiyas({ onSparkleRequest }: { onSparkleRequest?: () => void }) {
  return (
    <>
      {/* Bottom-Left Traditional Earthen Diya (clean lamp without box/popover) */}
      <div className="fixed bottom-5 left-5 z-40 select-none">
        <SingleDiya size={54} onClick={onSparkleRequest} />
      </div>

      {/* Flame & Garland CSS Animations */}
      <style>{`
        @keyframes flameWobble {
          0%, 100% {
            transform: scale(1) rotate(0deg) skewX(0deg);
          }
          20% {
            transform: scale(1.05, 0.95) rotate(-2.5deg) skewX(-1.5deg);
          }
          45% {
            transform: scale(0.96, 1.04) rotate(2deg) skewX(1deg);
          }
          70% {
            transform: scale(1.03, 0.97) rotate(-1deg) skewX(-0.5deg);
          }
          85% {
            transform: scale(0.98, 1.02) rotate(1.5deg) skewX(1deg);
          }
        }
        .animate-flame {
          animation: flameWobble 1.8s infinite ease-in-out;
        }

        @keyframes swingBell {
          0%, 100% {
            transform: rotate(-3deg);
          }
          50% {
            transform: rotate(3deg);
          }
        }
        .animate-swing {
          animation: swingBell 3.2s infinite ease-in-out;
        }
      `}</style>
    </>
  );
}

export default DiwaliDiyas;
