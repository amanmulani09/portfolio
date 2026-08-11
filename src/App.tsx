import { useEffect } from "react";
import { Footer, Header } from "./components/layout";
import { CaseStudyPage } from "./components/pages/CaseStudyPage";
import { BlogIndexPage } from "./components/pages/BlogIndexPage";
import { BlogPostPage } from "./components/pages/BlogPostPage";
import { NotFoundPage } from "./components/pages/NotFoundPage";
import {
  AboutSection,
  BlogSection,
  ContactSection,
  ExperienceTimeline,
  HeroSection,
  LinkedInProofSection,
  PrinciplesSection,
  ProjectsShowroom,
  SkillsConstellation
} from "./components/sections";
import { getLinkedInPost, profile, projects } from "./data/resume";
import { useThemePreference } from "./hooks/useThemePreference";
import { ScrollProgress } from "./components/ui/ScrollProgress";

function App() {
  const { theme, toggleTheme } = useThemePreference();
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const pathParts = pathname.split("/").filter(Boolean);
  const isHome = pathname === "/";
  const isCaseStudyRoute = pathParts[0] === "work" && pathParts.length === 2;
  const project = isCaseStudyRoute ? projects.find((item) => item.id === pathParts[1]) : undefined;
  const isBlogIndex = pathname === "/blog";
  const isBlogPostRoute = pathParts[0] === "blog" && pathParts.length === 2;
  const blogPost = isBlogPostRoute ? getLinkedInPost(pathParts[1]) : undefined;
  const isNotFound = !isHome && !project && !isBlogIndex && !blogPost;

  useEffect(() => {
    if (project || blogPost || isBlogIndex || isNotFound) return;

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
  }, [blogPost, isBlogIndex, isNotFound, project]);

  useEffect(() => {
    if (!isNotFound) return;

    const description = "The requested page could not be found on Aman Mulani's portfolio.";
    const setMeta = (selector: string, value: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
    };

    document.title = `Page not found | ${profile.name}`;
    setMeta('meta[name="description"]', description);
    setMeta('meta[name="robots"]', "noindex, follow");
    setMeta('meta[property="og:title"]', `Page not found | ${profile.name}`);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', `Page not found | ${profile.name}`);
    setMeta('meta[name="twitter:description"]', description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.remove();
    document.querySelector<HTMLMetaElement>('meta[property="og:url"]')?.remove();
  }, [isNotFound]);

  return (
    <div className="app-shell" data-theme={theme} id="top">
      <ScrollProgress />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />

      {isNotFound ? (
        <NotFoundPage />
      ) : project ? (
        <CaseStudyPage project={project} />
      ) : isBlogIndex ? (
        <BlogIndexPage />
      ) : blogPost ? (
        <BlogPostPage post={blogPost} />
      ) : (
        <main id="main-content">
          <HeroSection />
          <ExperienceTimeline />
          <ProjectsShowroom />
          <SkillsConstellation />
          <AboutSection />
          <PrinciplesSection />
          <BlogSection />
          <LinkedInProofSection />
          <ContactSection />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;
