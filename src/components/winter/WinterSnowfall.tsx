import React, { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speedY: number;
  speedX: number;
  opacity: number;
  swingAngle: number;
  swingSpeed: number;
  swingRadius: number;
}

interface WinterSnowfallProps {
  triggerFlurryRef?: React.MutableRefObject<(() => void) | null>;
}

export function WinterSnowfall({ triggerFlurryRef }: WinterSnowfallProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      return { w, h };
    };

    let { w: width, h: height } = setupCanvas();

    const handleResize = () => {
      if (!canvas) return;
      const res = setupCanvas();
      width = res.w;
      height = res.h;
    };
    window.addEventListener("resize", handleResize);

    // Mouse wind interaction
    let mouseX = -1000;
    let mouseY = -1000;
    let mouseWind = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = e.clientX - mouseX;
      mouseWind = Math.max(-1.5, Math.min(1.5, deltaX * 0.04));
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Balanced natural white snowflake pool
    const count = Math.min(100, Math.max(45, Math.floor((width * height) / 13000)));
    const flakes: Snowflake[] = [];

    const createFlake = (initialY?: number): Snowflake => {
      // Natural soft snow size: small distant flakes to gentle foreground flakes
      const rRoll = Math.random();
      const radius = rRoll < 0.6 ? 1.0 + Math.random() * 1.5 : 2.5 + Math.random() * 1.5;
      const speedY = 0.5 + Math.random() * 0.9;
      const opacity = 0.35 + Math.random() * 0.55;

      return {
        x: Math.random() * width,
        y: initialY !== undefined ? initialY : Math.random() * height,
        radius,
        speedY,
        speedX: (Math.random() - 0.5) * 0.4,
        opacity,
        swingAngle: Math.random() * Math.PI * 2,
        swingSpeed: 0.015 + Math.random() * 0.025,
        swingRadius: 0.5 + Math.random() * 1.2,
      };
    };

    for (let i = 0; i < count; i++) {
      flakes.push(createFlake());
    }

    // Flurry burst when snowman is clicked
    const triggerFlurry = () => {
      const burstCount = 40;
      for (let i = 0; i < burstCount; i++) {
        const flake = createFlake(-15);
        flake.x = Math.random() * width;
        flake.speedY *= 1.7;
        flake.opacity = 0.95;
        flakes.push(flake);
      }
      setTimeout(() => {
        if (flakes.length > count) {
          flakes.splice(count, flakes.length - count);
        }
      }, 7000);
    };

    if (triggerFlurryRef) {
      triggerFlurryRef.current = triggerFlurry;
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.66, 2.0);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      mouseWind *= 0.96;

      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];

        f.swingAngle += f.swingSpeed * dt;
        f.x += (f.speedX + Math.sin(f.swingAngle) * f.swingRadius + mouseWind) * dt;
        f.y += f.speedY * dt;

        // Wrap around viewport edges
        if (f.y > height + 10) {
          f.y = -10;
          f.x = Math.random() * width;
        }
        if (f.x < -15) f.x = width + 10;
        if (f.x > width + 15) f.x = -10;

        // Draw pure, natural white snow particle - NO blue circles, NO outer halos!
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [triggerFlurryRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
      style={{ pointerEvents: "none" }}
      aria-hidden="true"
    />
  );
}

export default WinterSnowfall;
