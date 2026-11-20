import React from "react";

export function WinterCornerFrost() {
  return (
    <div className="pointer-events-none fixed inset-0 z-35 overflow-hidden" aria-hidden="true">
      {/* Top Left Window Frost Ferns */}
      <svg
        className="absolute top-0 left-0 w-36 h-36 md:w-56 md:h-56 opacity-65"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="frostFernGradL" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#E0F2FE" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#BAE6FD" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main corner ice crystal arcs */}
        <path
          d="M 0 0 L 80 0 Q 55 25 70 65 Q 40 40 15 65 Q 25 30 0 45 Z"
          fill="url(#frostFernGradL)"
        />
        <path
          d="M 0 0 L 0 95 Q 28 70 65 85 Q 40 50 75 25 Q 35 30 45 0 Z"
          fill="url(#frostFernGradL)"
        />
        <path
          d="M 0 0 Q 60 20 110 50 Q 80 75 140 110 Q 95 105 75 145 Q 60 90 20 80 Q 35 40 0 0 Z"
          fill="url(#frostFernGradL)"
          opacity="0.75"
        />

        {/* Delicate Ice Needles branching out */}
        <line x1="0" y1="0" x2="145" y2="120" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
        <line x1="60" y1="50" x2="85" y2="35" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.5" />
        <line x1="90" y1="75" x2="115" y2="60" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.5" />
        <line x1="120" y1="100" x2="140" y2="85" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.5" />

        <line x1="0" y1="0" x2="90" y2="160" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
        <line x1="40" y1="70" x2="25" y2="95" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.5" />
        <line x1="65" y1="115" x2="50" y2="140" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.5" />
      </svg>

      {/* Top Right Window Frost Ferns */}
      <svg
        className="absolute top-0 right-0 w-36 h-36 md:w-56 md:h-56 opacity-65 -scale-x-100"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="frostFernGradR" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="40%" stopColor="#E0F2FE" stopOpacity="0.5" />
            <stop offset="80%" stopColor="#BAE6FD" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </linearGradient>
        </defs>

        <path
          d="M 0 0 L 80 0 Q 55 25 70 65 Q 40 40 15 65 Q 25 30 0 45 Z"
          fill="url(#frostFernGradR)"
        />
        <path
          d="M 0 0 L 0 95 Q 28 70 65 85 Q 40 50 75 25 Q 35 30 45 0 Z"
          fill="url(#frostFernGradR)"
        />
        <path
          d="M 0 0 Q 60 20 110 50 Q 80 75 140 110 Q 95 105 75 145 Q 60 90 20 80 Q 35 40 0 0 Z"
          fill="url(#frostFernGradR)"
          opacity="0.75"
        />

        <line x1="0" y1="0" x2="145" y2="120" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
        <line x1="60" y1="50" x2="85" y2="35" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.5" />
        <line x1="90" y1="75" x2="115" y2="60" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.5" />

        <line x1="0" y1="0" x2="90" y2="160" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />
        <line x1="40" y1="70" x2="25" y2="95" stroke="#BAE6FD" strokeWidth="0.8" opacity="0.5" />
      </svg>
    </div>
  );
}

export default WinterCornerFrost;
