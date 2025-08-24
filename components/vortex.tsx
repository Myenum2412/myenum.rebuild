import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useCallback } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";
  const tickRef = useRef(0);
  const noise3D = createNoise3D();
  const particlePropsRef = useRef<Float32Array>(new Float32Array(particlePropsLength));
  const center = useRef<[number, number]>([0, 0]);

  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const resize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    center.current = [0.5 * canvas.width, 0.5 * canvas.height];
  }, []);

  const initParticle = (i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const props = particlePropsRef.current;
    const x = rand(canvas.width);
    const y = center.current[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);
    props.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const initParticles = useCallback(() => {
    tickRef.current = 0;
    const props = new Float32Array(particlePropsLength);
    particlePropsRef.current = props;
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  }, []);

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };

  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) =>
    x > canvas.width || x < 0 || y > canvas.height || y < 0;

  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const props = particlePropsRef.current;
    const [x, y] = [props[i], props[i + 1]];
    const n = noise3D(x * xOff, y * yOff, tickRef.current * zOff) * noiseSteps * Math.PI * 2;
    const vx = lerp(props[i + 2], Math.cos(n), 0.5);
    const vy = lerp(props[i + 3], Math.sin(n), 0.5);
    const life = props[i + 4];
    const ttl = props[i + 5];
    const speed = props[i + 6];
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;
    const radius = props[i + 7];
    const hue = props[i + 8];

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);

    props[i] = x2;
    props[i + 1] = y2;
    props[i + 2] = vx;
    props[i + 3] = vy;
    props[i + 4] = life + 1;

    if (checkBounds(x2, y2, canvas) || life > ttl) initParticle(i);
  };

  const drawParticles = useCallback((ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  }, []);

  const renderGlow = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();

    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const renderToScreen = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const draw = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    tickRef.current++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawParticles(ctx);
    renderGlow(canvas, ctx);
    renderToScreen(canvas, ctx);
    requestAnimationFrame(() => draw(canvas, ctx));
  }, [backgroundColor, drawParticles]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      resize();
      initParticles();
      draw(canvas, ctx);
    }

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [resize, initParticles, draw]);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 bg-transparent flex items-center justify-center h-full w-full"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>
      <div className={cn("relative z-10", props.className)}>{props.children}</div>
    </div>
  );
};