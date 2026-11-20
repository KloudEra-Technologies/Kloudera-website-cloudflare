import React from "react";

interface WinterFrostHeaderProps {
  hasBanner?: boolean;
}

export function WinterFrostHeader({ hasBanner = true }: WinterFrostHeaderProps) {
  return (
    <div
      className={`pointer-events-none fixed left-0 right-0 z-30 transition-all duration-300 ${
        hasBanner ? "top-[38px] md:top-[38px]" : "top-0"
      }`}
      aria-hidden="true"
    >
      {/* Decorative Icicle SVG fringe across the full width */}
      <div className="relative w-full overflow-hidden leading-none h-6 md:h-8 opacity-85">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="icicleGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="40%" stopColor="#E0F2FE" stopOpacity="0.65" />
              <stop offset="85%" stopColor="#BAE6FD" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.1" />
            </linearGradient>

            <linearGradient id="frostLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
              <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#7DD3FC" stopOpacity="0.6" />
              <stop offset="75%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Top continuous snow frost crust */}
          <rect x="0" y="0" width="1440" height="3" fill="url(#frostLineGrad)" />

          {/* Repeating natural icicle clusters */}
          <path
            d="
              M 0 0
              L 15 12 L 25 3 L 38 18 L 45 4 L 55 10 L 65 24 L 75 5 L 90 14 L 105 28 L 115 3 L 130 9 L 140 20 L 150 4
              L 165 15 L 180 3 L 195 22 L 205 6 L 220 14 L 235 30 L 245 4 L 260 11 L 275 19 L 285 5
              L 300 16 L 315 4 L 330 25 L 340 7 L 355 13 L 370 29 L 380 4 L 395 10 L 410 21 L 420 5
              L 435 15 L 450 3 L 465 23 L 475 6 L 490 14 L 505 31 L 515 4 L 530 11 L 545 18 L 555 5
              L 570 16 L 585 4 L 600 24 L 610 7 L 625 13 L 640 28 L 650 4 L 665 10 L 680 20 L 690 5
              L 705 15 L 720 3 L 735 22 L 745 6 L 760 14 L 775 30 L 785 4 L 800 11 L 815 19 L 825 5
              L 840 16 L 855 4 L 870 25 L 880 7 L 895 13 L 910 29 L 920 4 L 935 10 L 950 21 L 960 5
              L 975 15 L 990 3 L 1005 23 L 1015 6 L 1030 14 L 1045 31 L 1055 4 L 1070 11 L 1085 18 L 1095 5
              L 1110 16 L 1125 4 L 1140 24 L 1150 7 L 1165 13 L 1180 28 L 1190 4 L 1205 10 L 1220 20 L 1230 5
              L 1245 15 L 1260 3 L 1275 22 L 1285 6 L 1300 14 L 1315 30 L 1325 4 L 1340 11 L 1355 19 L 1365 5
              L 1380 16 L 1395 4 L 1410 25 L 1420 7 L 1435 13 L 1440 4
              L 1440 0 Z
            "
            fill="url(#icicleGrad)"
          />
        </svg>

        {/* Ambient subtle cyan light glimmer */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-sky-300/40 shadow-[0_0_12px_rgba(56,189,248,0.4)]" />
      </div>
    </div>
  );
}

export default WinterFrostHeader;
