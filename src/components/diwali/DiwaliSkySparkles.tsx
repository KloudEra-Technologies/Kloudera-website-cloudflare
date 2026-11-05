import React, { useEffect, useRef } from "react";

interface SparkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  trail: { x: number; y: number }[];
  alpha: number;
  decay: number;
  color: string;
  twinklePhase: number;
  twinkleSpeed: number;
  gravity: number;
  drag: number;
  crackles: boolean;
}

interface CrackleDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  decay: number;
  size: number;
  color: string;
}

interface GoldenEmber {
  x: number;
  y: number;
  baseX: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  frequency: number;
  amplitude: number;
  color: string;
}

interface SkyRocket {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  speed: number;
  vx: number;
  vy: number;
  trail: { x: number; y: number }[];
}

export function DiwaliSkySparkles({
  triggerBurstRef,
}: {
  triggerBurstRef?: React.MutableRefObject<(() => void) | null>;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

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

    // 1. FLOATING AMBIENT GOLDEN EMBERS (Night Diya Ambiance)
    const embers: GoldenEmber[] = [];
    const emberCount = Math.min(24, Math.floor(width / 50));
    const emberColors = ["#FFD700", "#FFB703", "#FFA000", "#FFF3B0"];

    for (let i = 0; i < emberCount; i++) {
      const baseX = Math.random() * width;
      embers.push({
        x: baseX,
        y: Math.random() * height,
        baseX,
        vy: 0.2 + Math.random() * 0.4,
        size: 1.0 + Math.random() * 1.4,
        alpha: 0.15 + Math.random() * 0.35,
        phase: Math.random() * Math.PI * 2,
        frequency: 0.012 + Math.random() * 0.018,
        amplitude: 10 + Math.random() * 20,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
      });
    }

    // 2. CELEBRATORY GOLDEN CRACKER ROCKETS & SHOWER SPARKS
    const rockets: SkyRocket[] = [];
    const sparks: SparkParticle[] = [];
    const crackles: CrackleDot[] = [];

    function launchRocket(customTargetX?: number, customTargetY?: number) {
      const startX = width * (0.2 + Math.random() * 0.6);
      const startY = height + 10;
      const targetX = customTargetX ?? width * (0.3 + Math.random() * 0.4);
      const targetY = customTargetY ?? height * (0.16 + Math.random() * 0.24);

      const dx = targetX - startX;
      const dy = targetY - startY;
      const dist = Math.hypot(dx, dy);
      const speed = 15 + Math.random() * 3;

      rockets.push({
        x: startX,
        y: startY,
        targetX,
        targetY,
        speed,
        vx: (dx / dist) * speed,
        vy: (dy / dist) * speed,
        trail: [],
      });
    }

    if (triggerBurstRef) {
      triggerBurstRef.current = () => {
        launchRocket(width * 0.4, height * 0.22);
        setTimeout(() => {
          launchRocket(width * 0.6, height * 0.25);
        }, 200);
      };
    }

    // AUTHENTIC GOLDEN FIRECRACKER SPARK SHOWER (Zari Kamuro / Weeping Gold Rain)
    function burstRocket(r: SkyRocket) {
      // Golden firecracker sparks: incandescent golden and white sparks
      const sparkCount = 80 + Math.floor(Math.random() * 35);

      // Gold flame palette for authentic burning gunpowder
      const goldTones = ["#FFF8E7", "#FFE066", "#FFD700", "#FFB703", "#FB8500"];

      for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Layered velocities so sparks form natural arching plumes rather than a solid ring
        const speed = Math.random() * 6.5 + 1.2;
        const color = goldTones[Math.floor(Math.random() * goldTones.length)];

        sparks.push({
          x: r.x,
          y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.5, // initial slight upward kick
          trail: [],
          alpha: 1,
          decay: 0.009 + Math.random() * 0.008, // long-hanging golden rain (~2 seconds)
          color,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.25 + Math.random() * 0.35,
          gravity: 0.085 + Math.random() * 0.03, // gravity pulls sparks into weeping golden rain
          drag: 0.965, // smooth air drag
          crackles: Math.random() > 0.4, // crackles micro-sparks as it falls
        });
      }

      // Center crackler burst (instant snapping white-gold micro-crackles)
      for (let i = 0; i < 30; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4.5 + 0.8;
        crackles.push({
          x: r.x,
          y: r.y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          decay: 0.04 + Math.random() * 0.04,
          size: 1.2 + Math.random() * 1.2,
          color: "#FFFFFF",
        });
      }
    }

    // Schedule launches every 2.8s - 4.5s
    let fireworkTimer: NodeJS.Timeout | null = null;
    function scheduleNextCelebration() {
      const delay = 2600 + Math.random() * 1800;
      fireworkTimer = setTimeout(() => {
        if (!document.hidden) {
          launchRocket();
        }
        scheduleNextCelebration();
      }, delay);
    }

    const initialTimer = setTimeout(() => {
      launchRocket();
      scheduleNextCelebration();
    }, 600);

    let animationFrameId: number;

    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      // --- 1. AMBIENT GOLDEN EMBERS ---
      for (let i = 0; i < embers.length; i++) {
        const e = embers[i];
        e.y -= e.vy;
        e.phase += e.frequency;
        e.x = e.baseX + Math.sin(e.phase) * e.amplitude;

        if (e.y < -10) {
          e.y = height + 10;
          e.baseX = Math.random() * width;
        }

        const alphaPulse = e.alpha * (0.8 + 0.2 * Math.sin(e.phase * 2));

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fillStyle = e.color;
        ctx.globalAlpha = Math.max(0, Math.min(1, alphaPulse));
        ctx.fill();
      }

      // --- 2. ROCKET ASCENT (Sizzling Golden Trail) ---
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.trail.push({ x: r.x, y: r.y });
        if (r.trail.length > 8) r.trail.shift();

        r.x += r.vx;
        r.y += r.vy;

        // Emit small sizzling sparks behind rocket
        if (Math.random() < 0.7) {
          crackles.push({
            x: r.x + (Math.random() - 0.5) * 3,
            y: r.y + (Math.random() - 0.5) * 3,
            vx: -r.vx * 0.15 + (Math.random() - 0.5) * 1.2,
            vy: Math.random() * 2 + 1,
            alpha: 0.9,
            decay: 0.05 + Math.random() * 0.04,
            size: 1.0 + Math.random() * 1.2,
            color: "#FFB703",
          });
        }

        // Draw ascending rocket tracer line
        if (r.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(r.trail[0].x, r.trail[0].y);
          for (let t = 1; t < r.trail.length; t++) {
            ctx.lineTo(r.trail[t].x, r.trail[t].y);
          }
          ctx.strokeStyle = "rgba(255, 215, 0, 0.85)";
          ctx.lineWidth = 1.8;
          ctx.globalAlpha = 0.9;
          ctx.stroke();
        }

        // Bright rocket head
        ctx.beginPath();
        ctx.arc(r.x, r.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = 1;
        ctx.fill();

        if (r.y <= r.targetY) {
          burstRocket(r);
          rockets.splice(i, 1);
        }
      }

      // --- 3. GENUINE CRACKER SPARK RAIN (Arching Golden Trails & Glitter) ---
      for (let i = sparks.length - 1; i >= 0; i--) {
        const p = sparks[i];

        // Record history for cascading sparkler trail
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 10) {
          p.trail.shift();
        }

        // Physics: drag decelerates, gravity curves sparks downwards
        p.vx *= p.drag;
        p.vy = p.vy * p.drag + p.gravity;
        p.x += p.vx;
        p.y += p.vy;

        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        // Sputtering micro-crackles shedding from falling sparks
        if (p.crackles && Math.random() < 0.12) {
          crackles.push({
            x: p.x + (Math.random() - 0.5) * 2,
            y: p.y + (Math.random() - 0.5) * 2,
            vx: (Math.random() - 0.5) * 1.2,
            vy: Math.random() * 1.5,
            alpha: p.alpha * 0.9,
            decay: 0.05 + Math.random() * 0.04,
            size: 0.8 + Math.random() * 0.6,
            color: "#FFF8E7",
          });
        }

        // Twinkle flicker (real cracker spark stroboscopic effect)
        p.twinklePhase += p.twinkleSpeed;
        const flicker = 0.7 + 0.3 * Math.sin(p.twinklePhase);
        const displayAlpha = Math.max(0, p.alpha * flicker);

        // Draw graceful curved golden spark streak
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let t = 1; t < p.trail.length; t++) {
            ctx.lineTo(p.trail[t].x, p.trail[t].y);
          }
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.3;
          ctx.globalAlpha = displayAlpha * 0.75;
          ctx.stroke();
        }

        // Intense glowing sparkler tip (incandescent white-gold point)
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.globalAlpha = displayAlpha;
        ctx.fill();
      }

      // --- 4. MICRO-CRACKLE SPARKLES (Instant Popping Embers) ---
      for (let i = crackles.length - 1; i >= 0; i--) {
        const c = crackles[i];
        c.x += c.vx;
        c.y += c.vy;
        c.vy += 0.08;
        c.alpha -= c.decay;

        if (c.alpha <= 0) {
          crackles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
        ctx.fillStyle = c.color;
        ctx.globalAlpha = c.alpha;
        ctx.fill();
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(loop);
    }

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      if (initialTimer) clearTimeout(initialTimer);
      if (fireworkTimer) clearTimeout(fireworkTimer);
      cancelAnimationFrame(animationFrameId);
    };
  }, [triggerBurstRef]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-20 h-full w-full select-none"
    />
  );
}

export default DiwaliSkySparkles;
