import { useEffect, useState } from "react";
import { Header, Footer } from "./components/layout";
import { PortfolioPage } from "./components/pages/PortfolioPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import { AskA } from "./components/ui/AskA";
import { useThemePreference } from "./hooks/useThemePreference";
import redirects from "./data/redirects.json";

function App() {
  const { theme, toggleTheme } = useThemePreference();
  const [chatOpen, setChatOpen] = useState(false);
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const redirect = redirects.find((route) => route.source === pathname)?.destination;
  const isHome = pathname === "/" || Boolean(redirect);

  useEffect(() => {
    if (redirect) {
      if (redirect.startsWith("/")) window.history.replaceState(null, "", redirect);
      else { window.location.replace(redirect); return; }
    }
    if (!isHome) {
      document.title = "Page not found | Aman Mulani";
      document.querySelector('meta[name="robots"]')?.setAttribute("content", "noindex, follow");
      document.querySelector('link[rel="canonical"]')?.remove();
      return;
    }
    const scrollToHash = () => {
      let id;
      try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
      if (!id) return;
      const element = document.getElementById(id);
      const details = element?.matches("article") ? element.querySelector("details") : null;
      if (details) details.open = true;
      requestAnimationFrame(() => element?.scrollIntoView({ block: "start" }));
    };
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [isHome, redirect]);

  return <div className="app-shell" id="top"><a className="skip-link" href="#main-content">Skip to main content</a><Header theme={theme} onToggleTheme={toggleTheme} />{isHome ? <PortfolioPage onAsk={() => setChatOpen(true)} /> : <NotFoundPage />}<Footer /><AskA open={chatOpen} onOpen={() => setChatOpen(true)} onClose={() => setChatOpen(false)} /></div>;
}

export default App;
