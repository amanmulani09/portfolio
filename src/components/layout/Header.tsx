import { profile } from "../../data/resume";
import type { ThemeMode } from "../../types/theme";
import { ThemeToggle } from "../ui/ThemeToggle";

export function Header({ theme, onToggleTheme }: { theme: ThemeMode; onToggleTheme: () => void }) {
  return (
    <header className="header-wrap"><div className="site-header glass">
      <a className="brand" href="/#top" aria-label={`${profile.name}, home`}>a<span>.</span></a>
      <nav aria-label="Portfolio"><a href="/#work">Work</a><a href="/#experience">Experience</a><a href="/#about">About</a><a href="/#contact">Contact</a></nav>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </div></header>
  );
}
