import React, { useEffect, useRef, useState, useCallback } from "react";
import { Sparkles, Volume2, VolumeX, Pause, Play, ChevronDown, ChevronUp } from "lucide-react";

interface Rocket {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  startX: number;
  startY: number;
  speed: number;
  angle: number;
  trail: { x: number; y: number; alpha: number }[];
  palette: string[];
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  decay: number;
  size: number;
  twinkle: boolean;
  history: { x: number; y: number }[];
}

interface Spark {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  decay: number;
  size: number;
}

interface Flash {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

// Festive Diwali palettes
const FESTIVE_PALETTES = [
  // Royal Gold & Crimson
  ["#FFD700", "#FFB703", "#FB8500", "#E63946", "#FFF3B0", "#FFFFFF"],
  // Emerald & Auspicious Gold
  ["#00F5D4", "#00BBF9", "#52B788", "#FFD166", "#D8F3DC", "#FFFFFF"],
  // Neon Magenta & Violet
  ["#F72585", "#7209B7", "#3A0CA3", "#4CC9F0", "#FF70A6", "#FFFFFF"],
  // Electric Cyan & Amber
  ["#00E5FF", "#FF9100", "#FFEA00", "#FF1744", "#FFFFFF"],
  // Multi-color Celebration
  ["#FF0055", "#FF5000", "#FFCC00", "#00EE77", "#00CCFF", "#CC00FF", "#FFFFFF"],
];

export function DiwaliRockets() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // References to keep animation loop independent of state re-renders
  const stateRef = useRef({
    isPlaying: true,
    isMuted: true,
  });

  useEffect(() => {
    stateRef.current.isPlaying = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    stateRef.current.isMuted = isMuted;
  }, [isMuted]);

  // Audio Context (Synthesized Web Audio for realistic whoosh & firework pop)
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getAudioContext = useCallback(() => {
    if (!audioCtxRef.current && typeof window !== "undefined") {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  }, []);

  const playRocketWhistle = useCallback(() => {
    if (stateRef.current.isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      const now = ctx.currentTime;
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(1100, now + 0.9);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.1);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.8);
      gain.gain.linearRampToValueAtTime(0.0001, now + 0.95);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.95);
    } catch {
      // Audio not permitted or interrupted
    }
  }, [getAudioContext]);

  const playBurstSound = useCallback(() => {
    if (stateRef.current.isMuted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      // Filtered noise buffer for deep pop & sparkle crackle
      const bufferSize = ctx.sampleRate * 0.5;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(900, now);
      filter.frequency.exponentialRampToValueAtTime(80, now + 0.45);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      noise.start(now);
      noise.stop(now + 0.45);
    } catch {
      // Audio not permitted
    }
  }, [getAudioContext]);

  // Handler to manually launch rocket
  const launchRef = useRef<() => void>(() => {});

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx?.scale(dpr, dpr);
    }
    resize();
    window.addEventListener("resize", resize);

    const rockets: Rocket[] = [];
    const particles: Particle[] = [];
    const sparks: Spark[] = [];
    const flashes: Flash[] = [];

    // Helper to spawn a rocket flying from bottom to upper center
    function spawnRocket(customX?: number) {
      if (!stateRef.current.isPlaying) return;

      // Rocket starts at the bottom across a wide horizontal range
      const startX = customX ?? width * (0.12 + Math.random() * 0.76);
      const startY = height + 10;

      // Target position: above center of screen (around 15% to 45% of height)
      // and concentrated towards the upper center (30% to 70% width)
      const targetX = width * 0.5 + (Math.random() - 0.5) * (width * 0.55);
      const targetY = height * (0.16 + Math.random() * 0.32);

      const angle = Math.atan2(targetY - startY, targetX - startX);
      const palette = FESTIVE_PALETTES[Math.floor(Math.random() * FESTIVE_PALETTES.length)];

      rockets.push({
        x: startX,
        y: startY,
        startX,
        startY,
        targetX,
        targetY,
        speed: 13 + Math.random() * 3.5,
        angle,
        trail: [],
        palette,
      });

      playRocketWhistle();
    }

    launchRef.current = () => {
      spawnRocket();
    };

    // Burst explosion effect
    function explode(rocket: Rocket) {
      playBurstSound();

      // Flash ring at detonation point
      flashes.push({
        x: rocket.x,
        y: rocket.y,
        radius: 6,
        maxRadius: 40 + Math.random() * 20,
        alpha: 0.9,
        color: rocket.palette[0] || "#FFD700",
      });

      // Spawn burst particles radiating outward
      const particleCount = 75 + Math.floor(Math.random() * 45);
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Layered velocities for rich full burst
        const speed = Math.random() * 6.5 + 1.5;
        const color = rocket.palette[Math.floor(Math.random() * rocket.palette.length)];

        particles.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color,
          alpha: 1,
          decay: 0.012 + Math.random() * 0.014,
          size: 1.8 + Math.random() * 2.2,
          twinkle: Math.random() > 0.4,
          history: [],
        });
      }

      // Extra secondary golden spark ring (traditional Diwali cracker glitter)
      for (let i = 0; i < 25; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3 + 0.5;
        sparks.push({
          x: rocket.x,
          y: rocket.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: "#FFEA00",
          alpha: 1,
          decay: 0.025 + Math.random() * 0.03,
          size: 1.2 + Math.random() * 1.5,
        });
      }
    }

    let nextLaunchTimeout: NodeJS.Timeout | null = null;

    // Recursive random interval launcher
    function scheduleNextLaunch() {
      // Random interval between 1.1s and 2.6s
      const delay = 1100 + Math.random() * 1500;
      nextLaunchTimeout = setTimeout(() => {
        if (!document.hidden && stateRef.current.isPlaying) {
          spawnRocket();

          // 25% chance of launching a salvo (two rockets nearly at the same time)
          if (Math.random() < 0.25) {
            setTimeout(() => {
              if (stateRef.current.isPlaying) {
                spawnRocket();
              }
            }, 140);
          }
        }
        scheduleNextLaunch();
      }, delay);
    }

    // Initial launch shortly after mount
    const initialTimer = setTimeout(() => {
      spawnRocket();
      scheduleNextLaunch();
    }, 400);

    let animationFrameId: number;

    // Animation Loop
    function render() {
      if (!ctx) return;

      // Clear canvas with transparent clearRect
      ctx.clearRect(0, 0, width, height);

      // --- 1. UPDATE & DRAW FLASHES ---
      for (let i = flashes.length - 1; i >= 0; i--) {
        const flash = flashes[i];
        flash.radius += 2.8;
        flash.alpha -= 0.07;
        if (flash.alpha <= 0) {
          flashes.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        const grad = ctx.createRadialGradient(
          flash.x,
          flash.y,
          0,
          flash.x,
          flash.y,
          flash.radius
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${flash.alpha})`);
        grad.addColorStop(0.4, `${flash.color}${Math.floor(flash.alpha * 200).toString(16).padStart(2, "0")}`);
        grad.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(flash.x, flash.y, flash.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // --- 2. UPDATE & DRAW ROCKETS ---
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];

        // Store trail
        r.trail.push({ x: r.x, y: r.y, alpha: 1 });
        if (r.trail.length > 8) {
          r.trail.shift();
        }

        // Move rocket towards target
        const vx = Math.cos(r.angle) * r.speed;
        const vy = Math.sin(r.angle) * r.speed;
        r.x += vx;
        r.y += vy;

        // Emit falling tail embers/sparks behind rocket engine
        if (Math.random() < 0.85) {
          sparks.push({
            x: r.x + (Math.random() - 0.5) * 4,
            y: r.y + (Math.random() - 0.5) * 4,
            vx: -vx * 0.2 + (Math.random() - 0.5) * 1.5,
            vy: Math.random() * 2.2 + 0.8, // falls downward
            color: Math.random() > 0.3 ? "#FFB703" : "#FFFFFF",
            alpha: 0.95,
            decay: 0.04 + Math.random() * 0.04,
            size: 1.5 + Math.random() * 1.5,
          });
        }

        // Check if rocket reached or passed above target
        const distToTarget = Math.hypot(r.targetX - r.x, r.targetY - r.y);
        if (r.y <= r.targetY || distToTarget <= r.speed * 1.2) {
          explode(r);
          rockets.splice(i, 1);
          continue;
        }

        // Draw rocket glowing trail
        ctx.save();
        ctx.globalCompositeOperation = "lighter";
        if (r.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(r.trail[0].x, r.trail[0].y);
          for (let t = 1; t < r.trail.length; t++) {
            ctx.lineTo(r.trail[t].x, r.trail[t].y);
          }
          ctx.strokeStyle = "rgba(255, 200, 80, 0.75)";
          ctx.lineWidth = 2.5;
          ctx.stroke();
        }

        // Draw rocket glowing head
        const headGrad = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, 6);
        headGrad.addColorStop(0, "#FFFFFF");
        headGrad.addColorStop(0.3, "#FFE066");
        headGrad.addColorStop(1, "rgba(255, 140, 0, 0)");
        ctx.fillStyle = headGrad;
        ctx.beginPath();
        ctx.arc(r.x, r.y, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // --- 3. UPDATE & DRAW BURST PARTICLES ---
      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Track history for sparkling stream trails
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > 4) {
          p.history.shift();
        }

        // Physics: drag + gravity
        p.vx *= 0.96;
        p.vy = p.vy * 0.96 + 0.1; // gravity
        p.x += p.vx;
        p.y += p.vy;

        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Twinkle effect (subtle brightness modulation)
        const displayAlpha = p.twinkle
          ? Math.max(0, p.alpha * (0.65 + Math.random() * 0.35))
          : p.alpha;

        // Draw particle trail streak
        if (p.history.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.history[0].x, p.history[0].y);
          for (let h = 1; h < p.history.length; h++) {
            ctx.lineTo(p.history[h].x, p.history[h].y);
          }
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = displayAlpha * 0.6;
          ctx.lineWidth = p.size * 0.8;
          ctx.stroke();
        }

        // Draw particle head
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = displayAlpha;
        ctx.fill();
      }

      // --- 4. UPDATE & DRAW SPARKS (TAIL & CRACKLE) ---
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05; // gravity
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.fill();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      if (initialTimer) clearTimeout(initialTimer);
      if (nextLaunchTimeout) clearTimeout(nextLaunchTimeout);
      cancelAnimationFrame(animationFrameId);
    };
  }, [playBurstSound, playRocketWhistle]);

  return (
    <>
      {/* 
        Full-screen canvas for Diwali rockets & bursting crackers.
        pointer-events-none ensures users can seamlessly click and interact with all website elements.
      */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 h-full w-full select-none"
      />

      {/* Floating Diwali Festive Badge & Control Widget (bottom-left) */}
      <div
        className="fixed bottom-5 left-5 z-40 transition-all duration-300 select-none"
        role="region"
        aria-label="Diwali Celebration Controls"
      >
        <div className="flex items-center gap-2 rounded-full border border-amber-500/30 bg-background/85 px-3 py-1.5 shadow-lg shadow-amber-500/10 backdrop-blur-md transition-all hover:border-amber-500/60">
          {/* Festive Icon & Label */}
          <button
            onClick={() => {
              if (launchRef.current) {
                launchRef.current();
              }
            }}
            title="Click to launch a Diwali rocket!"
            className="group flex items-center gap-1.5 text-xs font-medium text-amber-300 hover:text-amber-200"
          >
            <span className="text-base transition-transform group-hover:scale-125" role="img" aria-label="Diya">
              🪔
            </span>
            <span className="font-semibold tracking-wide bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-400 bg-clip-text text-transparent">
              Diwali Fireworks
            </span>
            <Sparkles className="h-3 w-3 text-amber-400 animate-pulse" />
          </button>

          {!isCollapsed && (
            <div className="flex items-center gap-1 border-l border-border/60 pl-2">
              {/* Launch extra rocket on demand */}
              <button
                onClick={() => launchRef.current?.()}
                className="rounded-full px-2 py-0.5 text-[11px] font-medium text-amber-400 transition-colors hover:bg-amber-500/20"
                title="Launch a celebratory rocket"
              >
                Launch 🚀
              </button>

              {/* Sound Toggle */}
              <button
                onClick={() => {
                  const nextMuted = !isMuted;
                  setIsMuted(nextMuted);
                  if (!nextMuted) {
                    getAudioContext();
                  }
                }}
                className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                title={isMuted ? "Enable festive sounds" : "Mute festive sounds"}
                aria-label={isMuted ? "Sound on" : "Sound off"}
              >
                {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5 text-amber-400" />}
              </button>

              {/* Pause / Resume */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="rounded-full p-1 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                title={isPlaying ? "Pause fireworks" : "Resume fireworks"}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 text-emerald-400" />}
              </button>
            </div>
          )}

          {/* Collapse / Expand Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="rounded-full p-0.5 text-muted-foreground/80 hover:text-foreground"
            title={isCollapsed ? "Expand controls" : "Collapse"}
            aria-label={isCollapsed ? "Expand" : "Collapse"}
          >
            {isCollapsed ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
          </button>
        </div>
      </div>
    </>
  );
}

export default DiwaliRockets;
