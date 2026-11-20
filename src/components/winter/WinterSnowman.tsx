import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

interface WinterSnowmanProps {
  onFlurryRequest?: () => void;
}

export function WinterSnowman({ onFlurryRequest }: WinterSnowmanProps) {
  const [isWaving, setIsWaving] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);

  const greetings = [
    "Stay warm, cozy & cyber-secure this winter! ❄️",
    "Zero-trust, high resilience — even in sub-zero weather! ⛄",
    "Happy Winter Season from KloudEra Technologies! 🌨️",
    "Click me anytime to summon a fresh winter snow flurry! ✨",
  ];

  const handleClick = () => {
    setIsWaving(true);
    setShowGreeting(true);
    setGreetingIndex((prev) => (prev + 1) % greetings.length);

    if (onFlurryRequest) {
      onFlurryRequest();
    }

    setTimeout(() => {
      setIsWaving(false);
    }, 1800);
  };

  return (
    <div
      className="fixed bottom-4 left-4 z-40 flex flex-col items-start select-none"
      style={{ filter: "drop-shadow(0 10px 25px rgba(2, 132, 199, 0.25))" }}
    >
      {/* Interactive Speech Bubble */}
      {showGreeting && (
        <div className="relative mb-2 ml-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="relative rounded-2xl border border-sky-400/40 bg-slate-900/90 px-3.5 py-2.5 text-xs text-slate-100 shadow-xl backdrop-blur-md">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowGreeting(false);
              }}
              className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
              aria-label="Close winter greeting"
            >
              <X className="h-3 w-3" />
            </button>
            <div className="flex items-start gap-2">
              <span className="text-base">⛄</span>
              <p className="font-medium leading-relaxed text-sky-100">
                {greetings[greetingIndex]}
              </p>
            </div>
            {/* Speech triangle pointing down to snowman */}
            <div className="absolute -bottom-2 left-8 h-0 w-0 border-x-8 border-x-transparent border-t-8 border-t-slate-900/90" />
          </div>
        </div>
      )}

      {/* Snowman Clickable Avatar */}
      <div
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={(e) => e.key === "Enter" && handleClick()}
        className="group relative cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        title="Click the KloudEra Snowman for a festive snow flurry!"
        aria-label="Winter Snowman"
      >
        {/* Soft Ambient Ice Glow Behind Snowman */}
        <div className="absolute -inset-2 rounded-full bg-sky-400/20 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />

        {/* Snowman SVG */}
        <svg
          width="100"
          height="125"
          viewBox="0 0 100 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10 transition-transform duration-500"
        >
          <defs>
            {/* Gradients for snow volume */}
            <radialGradient id="snowGradBottom" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </radialGradient>
            <radialGradient id="snowGradMid" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="75%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </radialGradient>
            <radialGradient id="snowGradHead" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="75%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </radialGradient>

            {/* Hat Gradient */}
            <linearGradient id="hatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="50%" stopColor="#0F172A" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Scarf KloudEra Blue Gradient */}
            <linearGradient id="scarfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="50%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>
          </defs>

          {/* 1. Ground Snowdrift Mound */}
          <ellipse cx="50" cy="116" rx="42" ry="8" fill="#E0F2FE" opacity="0.8" />
          <ellipse cx="50" cy="117" rx="35" ry="5" fill="#BAE6FD" opacity="0.6" />

          {/* 2. Left Stick Arm (resting) */}
          <path
            d="M 28 75 L 8 68 M 12 70 L 6 62 M 15 69 L 10 74"
            stroke="#78350F"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* 3. Right Stick Arm (waves when clicked / hovered) */}
          <g
            className={`transition-transform origin-[72px_75px] duration-300 ${
              isWaving ? "animate-bounce" : "group-hover:-rotate-12"
            }`}
          >
            <path
              d="M 72 75 L 92 62 M 88 64 L 95 56 M 85 66 L 92 70"
              stroke="#78350F"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>

          {/* 4. Bottom Snowball */}
          <circle cx="50" cy="94" r="24" fill="url(#snowGradBottom)" />
          {/* Subtle bottom shadow highlight */}
          <ellipse cx="50" cy="112" rx="16" ry="3" fill="#93C5FD" opacity="0.4" />

          {/* 5. Middle Snowball */}
          <circle cx="50" cy="68" r="18" fill="url(#snowGradMid)" />

          {/* Charcoal Buttons on Middle Ball */}
          <circle cx="50" cy="62" r="2.2" fill="#1E293B" />
          <circle cx="50" cy="70" r="2.2" fill="#1E293B" />
          <circle cx="50" cy="78" r="2.2" fill="#1E293B" />

          {/* 6. KloudEra Cozy Scarf */}
          {/* Scarf back tail */}
          <path
            d="M 57 52 Q 65 65 64 78 Q 60 80 56 78 Q 57 65 52 53 Z"
            fill="url(#scarfGrad)"
            className="transition-transform origin-top group-hover:rotate-6"
          />
          {/* Scarf fringe */}
          <line x1="57" y1="78" x2="57" y2="82" stroke="#38BDF8" strokeWidth="1.5" />
          <line x1="60" y1="78" x2="60" y2="82" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="63" y1="78" x2="63" y2="82" stroke="#38BDF8" strokeWidth="1.5" />

          {/* Scarf wrap around neck */}
          <rect
            x="36"
            y="48"
            width="28"
            height="8"
            rx="4"
            fill="url(#scarfGrad)"
            stroke="#0284C7"
            strokeWidth="0.5"
          />
          {/* Scarf decorative stripes */}
          <line x1="43" y1="48" x2="43" y2="56" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
          <line x1="51" y1="48" x2="51" y2="56" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
          <line x1="59" y1="48" x2="59" y2="56" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />

          {/* 7. Head Snowball */}
          <circle cx="50" cy="40" r="14" fill="url(#snowGradHead)" />

          {/* Rosy Cheeks */}
          <circle cx="41" cy="43" r="2.5" fill="#F472B6" opacity="0.45" />
          <circle cx="59" cy="43" r="2.5" fill="#F472B6" opacity="0.45" />

          {/* Shiny Coal Eyes */}
          <circle cx="45" cy="37" r="1.8" fill="#0F172A" />
          <circle cx="44.3" cy="36.3" r="0.6" fill="#FFFFFF" />
          <circle cx="55" cy="37" r="1.8" fill="#0F172A" />
          <circle cx="54.3" cy="36.3" r="0.6" fill="#FFFFFF" />

          {/* Cheerful Smile */}
          <path
            d="M 45 44 Q 50 48 55 44"
            stroke="#1E293B"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Carrot Nose (3D Orange) */}
          <polygon points="49,39 49,42 39,41" fill="#F97316" />
          <line x1="46" y1="40" x2="46" y2="42" stroke="#EA580C" strokeWidth="0.6" />
          <line x1="43" y1="40.5" x2="43" y2="41.5" stroke="#EA580C" strokeWidth="0.6" />

          {/* 8. Top Hat with Holly Sprig */}
          {/* Hat Brim */}
          <ellipse cx="50" cy="27" rx="16" ry="3.5" fill="#0F172A" />
          <ellipse cx="50" cy="26" rx="15" ry="2.8" fill="#1E293B" />

          {/* Hat Crown */}
          <path
            d="M 40 26 L 41 12 C 41 11 43 10 50 10 C 57 10 59 11 59 12 L 60 26 Z"
            fill="url(#hatGrad)"
          />
          {/* Hat Band in KloudEra Cyan */}
          <path
            d="M 40.5 24 C 44 25.5 56 25.5 59.5 24 L 59.8 21 C 56 22.5 44 22.5 40.2 21 Z"
            fill="#38BDF8"
          />
          {/* Holly Leaves & Berries */}
          <circle cx="42" cy="21" r="1.5" fill="#EF4444" />
          <circle cx="44" cy="20.5" r="1.3" fill="#DC2626" />
          <path d="M 41 19 Q 39 17 41 15 Q 43 18 41 19 Z" fill="#22C55E" />
          <path d="M 44 19 Q 47 18 46 16 Q 43 17 44 19 Z" fill="#16A34A" />

          {/* 9. Gentle Snow Falling on the Hat */}
          <path
            d="M 42 12 Q 50 8 58 12 Q 54 10 50 10.5 Q 46 10 42 12 Z"
            fill="#FFFFFF"
            opacity="0.9"
          />
        </svg>

        {/* Small "Tap Me!" Pill on Hover */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-sky-950/80 px-2 py-0.5 text-[10px] font-semibold text-sky-300 border border-sky-400/30 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center gap-1">
          <Sparkles className="h-2.5 w-2.5 text-sky-400" />
          <span>Tap Snowman</span>
        </div>
      </div>
    </div>
  );
}

export default WinterSnowman;
