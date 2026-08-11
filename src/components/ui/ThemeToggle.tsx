import { Moon, Sun } from "lucide-react";
import type { ThemeMode } from "../../types/theme";

type ThemeToggleProps = {
  theme: ThemeMode;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isLight = theme === "light";
  const label = isLight ? "Switch to dark mode" : "Switch to light mode";
  const Icon = isLight ? Moon : Sun;

  return (
    <button className="theme-toggle" type="button" onClick={onToggle} aria-label={label} title={label} aria-pressed={isLight}>
      <Icon size={17} aria-hidden="true" />
      <span>{isLight ? "Dark" : "Light"}</span>
    </button>
  );
}
