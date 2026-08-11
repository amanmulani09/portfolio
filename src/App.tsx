import { useEffect } from "react";
import { Footer, Header } from "./components/layout";
import { CaseStudyPage } from "./components/pages/CaseStudyPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import {
  AboutSection,
  ContactSection,
  ExperienceTimeline,
  FieldNotesSection,
  HeroSection,
  LinkedInProofSection,
  PrinciplesSection,
  ProjectsShowroom,
  SkillsConstellation
} from "./components/sections";
import { projects } from "./data/resume";
import { useThemePreference } from "./hooks/useThemePreference";

function App() {
  const { theme, toggleTheme } = useThemePreference();
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const pathParts = pathname.split("/").filter(Boolean);
  const isHome = pathname === "/";
  const isCaseStudyRoute = pathParts[0] === "work" && pathParts.length === 2;
  const project = isCaseStudyRoute ? projects.find((item) => item.id === pathParts[1]) : undefined;
  const isNotFound = !isHome && !project;

  useEffect(() => {
    if (project || isNotFound) return;

    const scrollToHash = () => {
      const targetId = decodeURIComponent(window.location.hash.slice(1));
      if (!targetId) return;

      window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: "start" });
      });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [isNotFound, project]);

  useEffect(() => {
    if (!isNotFound) return;

    document.title = `Page not found | ${document.title.split("|")[0].trim()}`;
    document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute(
      "content",
      "The requested page could not be found on Aman Mulani's portfolio."
    );
  }, [isNotFound]);

  return (
    <div className="app-shell" data-theme={theme} id="top">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {isNotFound ? (
        <NotFoundPage />
      ) : project ? (
        <CaseStudyPage project={project} />
      ) : (
        <main id="main-content">
          <HeroSection />
          <ProjectsShowroom />
          <AboutSection />
          <PrinciplesSection />
          <FieldNotesSection />
          <LinkedInProofSection />
          <ExperienceTimeline />
          <SkillsConstellation />
          <ContactSection />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
