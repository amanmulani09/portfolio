// Lightweight canvas adaptation inspired by React Bits Elastic Mesh by David Haz.
// License notice: /THIRD_PARTY_NOTICES.md
import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";
import "./ElasticMesh.css";

type MeshPoint = {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
};

type PointerState = {
  active: boolean;
  x: number;
  y: number;
};

type ElasticMeshProps = {
  className?: string;
  style?: CSSProperties;
  stiffness?: number;
  damping?: number;
  grabRadius?: number;
  pull?: number;
};

export function ElasticMesh({
  className = "",
  style,
  stiffness = 0.055,
  damping = 0.88,
  grabRadius = 180,
  pull = 0.026,
}: ElasticMeshProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const interactionRoot = container?.parentElement;
    if (!container || !interactionRoot) return;

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.setAttribute("aria-hidden", "true");
    container.appendChild(canvas);

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointerQuery = window.matchMedia("(pointer: coarse)");
    const pointer: PointerState = { active: false, x: 0, y: 0 };
    let points: MeshPoint[][] = [];
    let animationFrame = 0;
    let animationRunning = false;
    let isVisible = true;
    let width = 1;
    let height = 1;
    let devicePixelRatio = 1;
    let glowColor = "rgba(197, 234, 141, 0.12)";
    let lineColor = "rgba(197, 234, 141, 0.18)";

    const readColors = () => {
      const computedStyle = getComputedStyle(container);
      glowColor = computedStyle.getPropertyValue("--mesh-glow").trim() || glowColor;
      lineColor = computedStyle.getPropertyValue("--mesh-line").trim() || lineColor;
    };

    const createPoints = () => {
      const columns = Math.min(30, Math.max(10, Math.round(width / 72)));
      const rows = Math.min(18, Math.max(7, Math.round(height / 72)));

      points = Array.from({ length: rows }, (_, row) =>
        Array.from({ length: columns }, (_, column) => {
          const baseX = (column / (columns - 1)) * width;
          const baseY = (row / (rows - 1)) * height;
          return { baseX, baseY, x: baseX, y: baseY, velocityX: 0, velocityY: 0 };
        }),
      );
    };

    const drawLine = (line: MeshPoint[], lineColor: string) => {
      context.beginPath();
      line.forEach((point, index) => {
        if (index === 0) {
          context.moveTo(point.x, point.y);
          return;
        }

        const previous = line[index - 1];
        context.quadraticCurveTo(previous.x, previous.y, (previous.x + point.x) / 2, (previous.y + point.y) / 2);
      });
      const lastPoint = line[line.length - 1];
      if (lastPoint) context.lineTo(lastPoint.x, lastPoint.y);
      context.strokeStyle = lineColor;
      context.stroke();
    };

    const draw = () => {
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
      context.clearRect(0, 0, width, height);
      context.lineWidth = 1;

      points.forEach((row) => drawLine(row, lineColor));

      for (let column = 0; column < (points[0]?.length ?? 0); column += 1) {
        drawLine(points.map((row) => row[column]), lineColor);
      }

      if (!pointer.active || reduceMotionQuery.matches || coarsePointerQuery.matches) return;

      const glow = context.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, grabRadius);
      glow.addColorStop(0, glowColor);
      glow.addColorStop(1, "rgba(197, 234, 141, 0)");
      context.fillStyle = glow;
      context.fillRect(pointer.x - grabRadius, pointer.y - grabRadius, grabRadius * 2, grabRadius * 2);
    };

    const resize = () => {
      const bounds = container.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * devicePixelRatio);
      canvas.height = Math.round(height * devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      readColors();
      createPoints();
      draw();
    };

    const update = () => {
      const motionEnabled = pointer.active && !reduceMotionQuery.matches && !coarsePointerQuery.matches;

      points.forEach((row) => {
        row.forEach((point) => {
          if (motionEnabled) {
            const distanceX = pointer.x - point.x;
            const distanceY = pointer.y - point.y;
            const distance = Math.hypot(distanceX, distanceY);

            if (distance < grabRadius) {
              const influence = 1 - distance / grabRadius;
              point.velocityX += distanceX * influence * pull;
              point.velocityY += distanceY * influence * pull;
            }
          }

          point.velocityX += (point.baseX - point.x) * stiffness;
          point.velocityY += (point.baseY - point.y) * stiffness;
          point.velocityX *= damping;
          point.velocityY *= damping;
          point.x += point.velocityX;
          point.y += point.velocityY;
        });
      });
    };

    const animate = () => {
      if (!isVisible || reduceMotionQuery.matches || coarsePointerQuery.matches) {
        animationRunning = false;
        return;
      }

      update();
      draw();
      animationFrame = window.requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      if (animationRunning || !isVisible || reduceMotionQuery.matches || coarsePointerQuery.matches) return;
      animationRunning = true;
      animationFrame = window.requestAnimationFrame(animate);
    };

    const updatePointer = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active = true;
      startAnimation();
    };

    const clearPointer = () => {
      pointer.active = false;
    };

    const resizeObserver = new ResizeObserver(resize);
    const themeObserver = new MutationObserver(() => {
      readColors();
      draw();
    });
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) startAnimation();
      else {
        window.cancelAnimationFrame(animationFrame);
        animationRunning = false;
      }
    });

    resizeObserver.observe(container);
    themeObserver.observe(document.documentElement, { attributeFilter: ["data-theme"], attributes: true });
    intersectionObserver.observe(container);
    interactionRoot.addEventListener("pointermove", updatePointer, { passive: true });
    interactionRoot.addEventListener("pointerleave", clearPointer);
    resize();
    startAnimation();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      intersectionObserver.disconnect();
      interactionRoot.removeEventListener("pointermove", updatePointer);
      interactionRoot.removeEventListener("pointerleave", clearPointer);
      canvas.remove();
    };
  }, [damping, grabRadius, pull, stiffness]);

  return <div ref={containerRef} className={`elastic-mesh ${className}`.trim()} style={style} aria-hidden="true" />;
}
