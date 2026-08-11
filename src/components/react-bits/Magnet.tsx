// Adapted from React Bits Magnet by David Haz.
// License notice: /THIRD_PARTY_NOTICES.md
import type { HTMLAttributes, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import "./reactBits.css";

type MagnetProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  wrapperClassName?: string;
  innerClassName?: string;
};

export function Magnet({
  children,
  padding = 72,
  disabled = false,
  magnetStrength = 5,
  wrapperClassName = "",
  innerClassName = "",
  ...props
}: MagnetProps) {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const motionDisabled = window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)");

    if (disabled || motionDisabled.matches) {
      setPosition({ x: 0, y: 0 });
      return;
    }

    const handleMouseMove = (event: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = Math.abs(centerX - event.clientX);
      const distanceY = Math.abs(centerY - event.clientY);

      if (distanceX < width / 2 + padding && distanceY < height / 2 + padding) {
        setIsActive(true);
        setPosition({
          x: (event.clientX - centerX) / magnetStrength,
          y: (event.clientY - centerY) / magnetStrength
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [disabled, magnetStrength, padding]);

  return (
    <div ref={magnetRef} className={`magnet ${wrapperClassName}`} {...props}>
      <div
        className={`magnet-inner ${innerClassName}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: isActive ? "transform 180ms ease-out" : "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)"
        }}
      >
        {children}
      </div>
    </div>
  );
}
