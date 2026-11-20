import React from "react";

export function WinterPineTrees() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 z-35 flex items-end select-none"
      style={{ filter: "drop-shadow(0 8px 20px rgba(2, 132, 199, 0.2))" }}
      aria-hidden="true"
    >
      <svg
        width="260"
        height="150"
        viewBox="0 0 260 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          {/* Pine Tree Foliage Gradients */}
          <linearGradient id="pineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A2F" />
            <stop offset="50%" stopColor="#142B22" />
            <stop offset="100%" stopColor="#0B1A14" />
          </linearGradient>

          <linearGradient id="pineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#164E3F" />
            <stop offset="50%" stopColor="#133E33" />
            <stop offset="100%" stopColor="#0D2821" />
          </linearGradient>

          {/* Snow On Boughs Gradient */}
          <linearGradient id="snowBoughGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>

          {/* Trunk Gradient */}
          <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#451A03" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        {/* =========================================
            1. TALL BACKGROUND PINE TREE (Center/Right)
            ========================================= */}
        <g transform="translate(145, 10)">
          {/* Trunk */}
          <rect x="30" y="105" width="8" height="28" fill="url(#trunkGrad)" rx="2" />

          {/* Bottom Foliage Tier */}
          <polygon points="34,68 6,110 62,110" fill="url(#pineGrad1)" />
          {/* Snow on Bottom Tier */}
          <path
            d="M 6 110 Q 14 100 24 106 Q 34 98 44 106 Q 54 100 62 110 Q 50 102 34 103 Q 18 102 6 110 Z"
            fill="url(#snowBoughGrad)"
          />

          {/* Middle Foliage Tier */}
          <polygon points="34,42 12,80 56,80" fill="url(#pineGrad1)" />
          {/* Snow on Middle Tier */}
          <path
            d="M 12 80 Q 20 72 28 76 Q 34 70 42 76 Q 48 72 56 80 Q 46 73 34 74 Q 22 73 12 80 Z"
            fill="url(#snowBoughGrad)"
          />

          {/* Top Foliage Tier */}
          <polygon points="34,16 18,52 50,52" fill="url(#pineGrad1)" />
          {/* Snow on Top Tier */}
          <path
            d="M 18 52 Q 26 44 34 48 Q 42 44 50 52 Q 42 46 34 47 Q 26 46 18 52 Z"
            fill="url(#snowBoughGrad)"
          />

          {/* Snow Cap Peak */}
          <path d="M 34 16 L 30 24 Q 34 22 38 24 Z" fill="#FFFFFF" />

          {/* Glowing Tree Star */}
          <polygon
            points="34,8 36,13 41,13 37,16 39,21 34,18 29,21 31,16 27,13 32,13"
            fill="#FACC15"
            opacity="0.9"
            style={{ filter: "drop-shadow(0 0 6px rgba(250, 204, 21, 0.8))" }}
          />

          {/* Sparkly winter lights on the tree */}
          <circle cx="24" cy="98" r="1.8" fill="#38BDF8" opacity="0.85" className="animate-pulse" />
          <circle cx="44" cy="92" r="1.8" fill="#F472B6" opacity="0.85" />
          <circle cx="34" cy="65" r="1.8" fill="#FACC15" opacity="0.9" className="animate-pulse" />
          <circle cx="26" cy="48" r="1.5" fill="#38BDF8" opacity="0.85" />
          <circle cx="42" cy="46" r="1.5" fill="#4ADE80" opacity="0.85" />
        </g>

        {/* =========================================
            2. COZY FOREGROUND PINE TREE (Left)
            ========================================= */}
        <g transform="translate(95, 38)">
          {/* Trunk */}
          <rect x="22" y="80" width="7" height="24" fill="url(#trunkGrad)" rx="2" />

          {/* Bottom Foliage Tier */}
          <polygon points="25,50 4,86 47,86" fill="url(#pineGrad2)" />
          {/* Snow on Bottom Tier */}
          <path
            d="M 4 86 Q 12 78 20 83 Q 26 77 34 83 Q 40 78 47 86 Q 38 79 25 80 Q 14 79 4 86 Z"
            fill="url(#snowBoughGrad)"
          />

          {/* Middle Foliage Tier */}
          <polygon points="25,28 8,60 42,60" fill="url(#pineGrad2)" />
          {/* Snow on Middle Tier */}
          <path
            d="M 8 60 Q 15 54 22 57 Q 26 52 32 57 Q 37 54 42 60 Q 33 55 25 56 Q 16 55 8 60 Z"
            fill="url(#snowBoughGrad)"
          />

          {/* Top Foliage Tier */}
          <polygon points="25,8 13,36 37,36" fill="url(#pineGrad2)" />
          {/* Snow on Top Tier */}
          <path
            d="M 13 36 Q 19 30 25 33 Q 31 30 37 36 Q 31 32 25 33 Q 19 32 13 36 Z"
            fill="url(#snowBoughGrad)"
          />

          {/* Snow Cap Peak */}
          <path d="M 25 8 L 22 15 Q 25 13 28 15 Z" fill="#FFFFFF" />

          {/* Twinkling fairy light dots */}
          <circle cx="18" cy="74" r="1.6" fill="#FACC15" opacity="0.9" />
          <circle cx="33" cy="70" r="1.6" fill="#38BDF8" opacity="0.9" className="animate-pulse" />
          <circle cx="24" cy="48" r="1.6" fill="#F43F5E" opacity="0.85" />
          <circle cx="29" cy="30" r="1.4" fill="#38BDF8" opacity="0.9" />
        </g>

        {/* =========================================
            3. GROUND SNOWBANK ACCENT
            ========================================= */}
        <path
          d="M 0 148 Q 40 135 110 140 Q 170 136 260 148 L 260 150 L 0 150 Z"
          fill="#BAE6FD"
          opacity="0.7"
        />
        <path
          d="M 0 150 Q 50 140 130 143 Q 190 139 260 150 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}

export default WinterPineTrees;
