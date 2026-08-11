import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/resume";
import type { ThemeMode } from "../../types/theme";
import { ThemeToggle } from "../ui/ThemeToggle";

type HeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Notes", href: "/#notes" },
  { label: "Journey", href: "/#journey" },
  { label: "Contact", href: "/#contact" }
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a
        href="/"
        className="brand-lockup"
        aria-label={`${profile.name} · AI engineering · portfolio home`}
      >
        <span className="brand-mark">AM</span>
        <span className="brand-copy">
          <strong>{profile.name}</strong>
          <small>AI systems · {profile.location}</small>
        </span>
      </a>

      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Portfolio sections">
        {navigation.map((item) => (
          <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
            {item.label}
          </a>
        ))}
        <a className="nav-resume" href={profile.resume} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
          Résumé
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </nav>

      <div className="header-actions">
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <a className="header-hello" href={`mailto:${profile.email}`}>
          Say hello
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}
