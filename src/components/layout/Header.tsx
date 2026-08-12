import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "../../data/resume";
import type { ThemeMode } from "../../types/theme";
import { Magnet } from "../react-bits/Magnet";
import { ThemeToggle } from "../ui/ThemeToggle";

type HeaderProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

const navigation = [
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Work", href: "/#work", section: "work" },
  { label: "Toolkit", href: "/#toolkit", section: "toolkit" },
  { label: "About", href: "/#about", section: "about" },
  { label: "Approach", href: "/#approach", section: "approach" },
  { label: "Blog", href: "/blog", section: "blog" },
  { label: "Contact", href: "/#contact", section: "contact" }
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (window.location.pathname.startsWith("/blog")) {
      setActiveSection("blog");
      return;
    }

    if (window.location.pathname !== "/") {
      setActiveSection("work");
      return;
    }

    const sections = navigation
      .filter((item) => item.href.includes("#"))
      .map((item) => document.getElementById(item.section))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -68%", threshold: [0, 0.2, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <a
        href="/"
        className="brand-lockup"
        aria-label={`${profile.name} · full-stack and AI engineering · portfolio home`}
      >
        <span className="brand-mark header-profile-mark">
          <img src="/aman-mulani-profile.png" alt="" width="88" height="88" decoding="async" />
        </span>
        <span className="brand-copy">
          <strong>{profile.name}</strong>
          <small>AI + full-stack · {profile.location}</small>
        </span>
      </a>

      <nav className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Portfolio sections">
        {navigation.map((item) => (
          <a
            href={item.href}
            key={item.label}
            className={activeSection === item.section ? "is-active" : undefined}
            aria-current={activeSection === item.section ? "location" : undefined}
            onClick={() => setMenuOpen(false)}
          >
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
        <Magnet padding={48} magnetStrength={7} wrapperClassName="header-magnet">
          <a className="header-hello" href={`mailto:${profile.email}`}>
            Say hello
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </Magnet>
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
