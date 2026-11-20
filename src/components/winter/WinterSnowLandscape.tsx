import React from "react";

export function WinterSnowLandscape() {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-25 overflow-hidden select-none"
      style={{ filter: "drop-shadow(0 -4px 18px rgba(2, 132, 199, 0.15))" }}
      aria-hidden="true"
    >
      <div className="relative w-full h-16 md:h-20">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 1. Distant Back Snow Drift Gradient */}
            <linearGradient id="snowBackGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#7DD3FC" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0F172A" stopOpacity="0.2" />
            </linearGradient>

            {/* 2. Middle Snow Ridge Gradient */}
            <linearGradient id="snowMidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E0F2FE" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#BAE6FD" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.25" />
            </linearGradient>

            {/* 3. Foreground Crisp Powder Snow Gradient */}
            <linearGradient id="snowFrontGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
              <stop offset="25%" stopColor="#F0F9FF" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#E0F2FE" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#BAE6FD" stopOpacity="0.85" />
            </linearGradient>

            {/* Subtle Cyan Shimmer Highlight */}
            <linearGradient id="snowRimGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#BAE6FD" stopOpacity="0.7" />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="85%" stopColor="#7DD3FC" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* ========================================================
              LAYER 1: DISTANT ROLLING SNOW HILLS (Back Dunes)
              ======================================================== */}
          <path
            d="
              M 0 90
              L 0 52
              Q 120 28 260 48
              Q 420 68 580 38
              Q 720 12 880 44
              Q 1040 68 1180 34
              Q 1320 18 1440 45
              L 1440 90
              Z
            "
            fill="url(#snowBackGrad)"
          />

          {/* Distant tiny pine silhouettes on background dunes */}
          <polygon points="560,42 554,58 566,58" fill="#1E3A2F" opacity="0.4" />
          <polygon points="560,34 556,46 564,46" fill="#1E3A2F" opacity="0.4" />
          <polygon points="575,45 570,60 580,60" fill="#1E3A2F" opacity="0.35" />
          <polygon points="1165,38 1160,54 1170,54" fill="#1E3A2F" opacity="0.4" />
          <polygon points="1182,42 1178,56 1186,56" fill="#1E3A2F" opacity="0.35" />

          {/* ========================================================
              LAYER 2: MIDGROUND ROLLING SNOW DRIFTS (Mid Ridge)
              ======================================================== */}
          <path
            d="
              M 0 90
              L 0 42
              Q 180 18 360 40
              Q 540 58 720 32
              Q 900 14 1080 38
              Q 1260 56 1440 30
              L 1440 90
              Z
            "
            fill="url(#snowMidGrad)"
          />

          {/* ========================================================
              LAYER 3: FOREGROUND CRISP POWDER SNOWBANK (Front Mound)
              ======================================================== */}
          <path
            d="
              M 0 90
              L 0 28
              Q 140 46 290 22
              Q 440 8 600 26
              Q 760 44 920 18
              Q 1080 6 1240 24
              Q 1360 38 1440 18
              L 1440 90
              Z
            "
            fill="url(#snowFrontGrad)"
          />

          {/* Crest Rim Highlight: Gives that sharp sparkling powder-snow edge */}
          <path
            d="
              M 0 28
              Q 140 46 290 22
              Q 440 8 600 26
              Q 760 44 920 18
              Q 1080 6 1240 24
              Q 1360 38 1440 18
            "
            stroke="url(#snowRimGrad)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Glistening Snow Sparkles along the snowbank crest */}
          <circle cx="160" cy="38" r="1.3" fill="#FFFFFF" opacity="0.9" className="animate-pulse" />
          <circle cx="340" cy="18" r="1.5" fill="#BAE6FD" opacity="0.9" />
          <circle cx="580" cy="24" r="1.2" fill="#FFFFFF" opacity="0.85" className="animate-pulse" />
          <circle cx="790" cy="32" r="1.4" fill="#E0F2FE" opacity="0.9" />
          <circle cx="980" cy="16" r="1.5" fill="#FFFFFF" opacity="0.9" className="animate-pulse" />
          <circle cx="1180" cy="18" r="1.2" fill="#BAE6FD" opacity="0.85" />
          <circle cx="1370" cy="26" r="1.4" fill="#FFFFFF" opacity="0.9" className="animate-pulse" />
        </svg>

        {/* Ambient Icy Bottom Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-sky-300/10 blur-sm" />
      </div>
    </div>
  );
}

export default WinterSnowLandscape;
