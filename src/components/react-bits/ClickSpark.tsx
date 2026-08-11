// Adapted from React Bits Click Spark by David Haz.
// License notice: /THIRD_PARTY_NOTICES.md
import { useCallback, useEffect, useRef } from "react";
import type { MouseEvent, ReactNode } from "react";

type Spark = {
  angle: number;
  startTime: number;
  x: number;
  y: number;
};

type ClickSparkProps = {
  children: ReactNode;
  className?: string;
  duration?: number;
  sparkColor?: string;
  sparkCount?: number;
  sparkRadius?: number;
  sparkSize?: number;
};

export function ClickSpark({
  children,
  className = "",
  duration = 420,
  sparkColor = "#9ac45c",
  sparkCount = 7,
  sparkRadius = 24,
  sparkSize = 8,
}: ClickSparkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sparksRef = useRef<Spark[]>([]);
  const animationRef = useRef(0);
  const canvasSizeRef = useRef({ height: 0, ratio: 1, width: 0 });

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    if (!canvas || !wrapper) return;

    const bounds = wrapper.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(bounds.width * ratio);
    canvas.height = Math.round(bounds.height * ratio);
    canvas.style.width = `${bounds.width}px`;
    canvas.style.height = `${bounds.height}px`;
    canvasSizeRef.current = { height: bounds.height, ratio, width: bounds.width };
  }, []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(wrapper);
    resizeCanvas();

    return () => {
      resizeObserver.disconnect();
      window.cancelAnimationFrame(animationRef.current);
    };
  }, [resizeCanvas]);

  const drawSparks = useCallback(
    (timestamp: number) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context) return;

      const { height, ratio, width } = canvasSizeRef.current;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, width, height);

      sparksRef.current = sparksRef.current.filter((spark) => {
        const progress = (timestamp - spark.startTime) / duration;
        if (progress >= 1) return false;

        const eased = progress * (2 - progress);
        const distance = eased * sparkRadius;
        const lineLength = sparkSize * (1 - eased);
        const startX = spark.x + distance * Math.cos(spark.angle);
        const startY = spark.y + distance * Math.sin(spark.angle);

        context.globalAlpha = 1 - eased;
        context.strokeStyle = sparkColor;
        context.lineWidth = 1.5;
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(
          spark.x + (distance + lineLength) * Math.cos(spark.angle),
          spark.y + (distance + lineLength) * Math.sin(spark.angle),
        );
        context.stroke();
        return true;
      });

      context.globalAlpha = 1;
      animationRef.current = sparksRef.current.length ? window.requestAnimationFrame(drawSparks) : 0;
    },
    [duration, sparkColor, sparkRadius, sparkSize],
  );

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;
    if (!(event.target as HTMLElement).closest("a, button, [role='button']")) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const bounds = canvas.getBoundingClientRect();
    const timestamp = performance.now();

    sparksRef.current.push(
      ...Array.from({ length: sparkCount }, (_, index) => ({
        angle: (Math.PI * 2 * index) / sparkCount,
        startTime: timestamp,
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      })),
    );

    if (!animationRef.current) animationRef.current = window.requestAnimationFrame(drawSparks);
  };

  return (
    <div ref={wrapperRef} className={`click-spark ${className}`.trim()} onClick={handleClick}>
      <canvas ref={canvasRef} className="click-spark-canvas" aria-hidden="true" />
      {children}
    </div>
  );
}
