import React from "react";

/**
 * DiwaliToran - Traditional Indian Marigold (Genda Phool) & Mango Leaf
 * garland hung across the top of the screen to welcome prosperity and light.
 */
export function DiwaliToran({ hasBanner = true }: { hasBanner?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed ${hasBanner ? "top-8" : "top-0"} inset-x-0 z-[45] overflow-hidden select-none transition-all duration-300`}
    >
      {/* Decorative top border line in gold */}
      <div className="h-[2px] w-full bg-gradient-to-r from-amber-600 via-yellow-400 to-amber-600 shadow-[0_0_12px_rgba(251,191,36,0.6)]" />

      {/* SVG garland repeat pattern */}
      <svg
        className="w-full h-14 sm:h-16 -mt-[1px] drop-shadow-[0_4px_10px_rgba(245,158,11,0.25)]"
        preserveAspectRatio="none"
        viewBox="0 0 1200 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradients for Marigold flowers */}
          <radialGradient id="marigoldOrange" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF275" />
            <stop offset="45%" stopColor="#FF9F1C" />
            <stop offset="85%" stopColor="#E71D36" />
            <stop offset="100%" stopColor="#9E2A2B" />
          </radialGradient>

          <radialGradient id="marigoldYellow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FFE066" />
            <stop offset="80%" stopColor="#F48C06" />
            <stop offset="100%" stopColor="#DC2F02" />
          </radialGradient>

          {/* Gradients for Mango leaves */}
          <linearGradient id="mangoLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#52B788" />
            <stop offset="60%" stopColor="#2D6A4F" />
            <stop offset="100%" stopColor="#081C15" />
          </linearGradient>

          {/* Gold Bell gradient */}
          <linearGradient id="goldBell" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF3B0" />
            <stop offset="40%" stopColor="#FFD166" />
            <stop offset="80%" stopColor="#E76F51" />
            <stop offset="100%" stopColor="#B05B3B" />
          </linearGradient>

          {/* Single scallop segment (width: 150) */}
          <pattern id="toranScallop" width="150" height="64" patternUnits="userSpaceOnUse">
            {/* Scallop arched string */}
            <path
              d="M 0 4 Q 75 32 150 4"
              stroke="#D4A373"
              strokeWidth="2.5"
              fill="none"
              strokeDasharray="2 3"
              opacity="0.85"
            />

            {/* Mango Leaves hanging between scallops */}
            <path
              d="M 0 4 C -6 18 -4 30 0 38 C 4 30 6 18 0 4 Z"
              fill="url(#mangoLeaf)"
            />
            <path
              d="M 150 4 C 144 18 146 30 150 38 C 154 30 156 18 150 4 Z"
              fill="url(#mangoLeaf)"
            />
            <path
              d="M 75 19 C 71 28 72 37 75 42 C 78 37 79 28 75 19 Z"
              fill="url(#mangoLeaf)"
            />

            {/* Marigold flowers along the scallop curve */}
            <circle cx="15" cy="8" r="6.5" fill="url(#marigoldOrange)" />
            <circle cx="35" cy="14" r="6.5" fill="url(#marigoldYellow)" />
            <circle cx="55" cy="18" r="6.5" fill="url(#marigoldOrange)" />
            <circle cx="75" cy="20" r="7.5" fill="url(#marigoldYellow)" />
            <circle cx="95" cy="18" r="6.5" fill="url(#marigoldOrange)" />
            <circle cx="115" cy="14" r="6.5" fill="url(#marigoldYellow)" />
            <circle cx="135" cy="8" r="6.5" fill="url(#marigoldOrange)" />

            {/* Joint flower clusters at junctions */}
            <circle cx="0" cy="4" r="8" fill="url(#marigoldYellow)" />
            <circle cx="150" cy="4" r="8" fill="url(#marigoldYellow)" />

            {/* Hanging golden bell with tassel at center of scallop */}
            <g className="animate-swing origin-top" style={{ transformOrigin: "75px 22px" }}>
              <line x1="75" y1="20" x2="75" y2="44" stroke="#FFD166" strokeWidth="1.5" />
              <circle cx="75" cy="44" r="2.5" fill="#FFEAA7" />
              <path
                d="M 70 54 C 70 48 80 48 80 54 Z"
                fill="url(#goldBell)"
              />
              <circle cx="75" cy="54" r="1.5" fill="#FFEAA7" />
              <path
                d="M 73 54 L 75 62 L 77 54 Z"
                fill="#FF9F1C"
              />
            </g>
          </pattern>
        </defs>

        {/* Fill the banner with repeating scallops */}
        <rect width="1200" height="64" fill="url(#toranScallop)" />
      </svg>
    </div>
  );
}

export default DiwaliToran;
