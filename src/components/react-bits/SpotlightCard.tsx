// Adapted from React Bits SpotlightCard by David Haz.
// License notice: /THIRD_PARTY_NOTICES.md
import type { ElementType, HTMLAttributes, MouseEventHandler, PropsWithChildren } from "react";
import { useRef } from "react";
import "./reactBits.css";

type SpotlightCardProps = PropsWithChildren<HTMLAttributes<HTMLElement> & {
  as?: "article" | "div";
  spotlightColor?: string;
}>;

export function SpotlightCard({
  as = "div",
  children,
  className = "",
  spotlightColor = "rgba(182, 220, 123, 0.14)",
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const Component = as as ElementType;

  const handleMouseMove: MouseEventHandler<HTMLElement> = (event) => {
    if (!cardRef.current || window.matchMedia("(prefers-reduced-motion: reduce), (pointer: coarse)").matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    cardRef.current.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
    cardRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <Component ref={cardRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`} {...props}>
      {children}
    </Component>
  );
}
