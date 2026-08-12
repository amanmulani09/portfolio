import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  EyeOff,
  ExternalLink,
  Github,
  Layers3,
  Lightbulb,
  ShieldCheck
} from "lucide-react";
import { useEffect } from "react";
import { getProjectById, profile } from "../../data/resume";
import type { Project } from "../../types/portfolio";
import { ProjectVisual } from "../ui/ProjectVisual";

type CaseStudyPageProps = {
  project: Project;
};

export function CaseStudyPage({ project }: CaseStudyPageProps) {
  const nextProject = getProjectById(project.next as Project["id"]);

  useEffect(() => {
    const siteTitle = `${profile.name} | AI + Full-Stack Engineer`;
    const siteDescription =
      "Aman Mulani is an AI + Full-Stack Engineer building practical AI features, RAG systems, backend services, and React interfaces.";
    const siteUrl = window.location.origin + "/";
    const pageTitle = `${project.title} Case Study | ${profile.name}`;
    const pageUrl = `${window.location.origin}/work/${project.id}`;
    const setMeta = (selector: string, value: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
    };

    document.title = pageTitle;
    setMeta('meta[name="description"]', project.outcome);
    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:description"]', project.outcome);
    setMeta('meta[property="og:url"]', pageUrl);
    setMeta('meta[name="twitter:title"]', pageTitle);
    setMeta('meta[name="twitter:description"]', project.outcome);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", pageUrl);
    window.scrollTo({ top: 0, behavior: "auto" });

    return () => {
      document.title = siteTitle;
      setMeta('meta[name="description"]', siteDescription);
      setMeta('meta[property="og:title"]', siteTitle);
      setMeta('meta[property="og:description"]',
        "Explore clear case studies across full-stack products, AI features, RAG, payments, and secure automation."
      );
      setMeta('meta[property="og:url"]', siteUrl);
      setMeta('meta[name="twitter:title"]', siteTitle);
      setMeta('meta[name="twitter:description"]', "Practical AI and full-stack product engineering.");
      document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", siteUrl);
    };
  }, [project]);

  return (
    <main className="case-study-page" id="main-content">
      <section className="case-hero" style={{ "--case-accent": project.accent } as React.CSSProperties}>
        <div className="case-hero-inner">
          <div className="case-hero-links">
            <a className="case-back-link" href="/#work">
              <ArrowLeft size={16} aria-hidden="true" />
              All selected work
            </a>
            <div className="case-source-links">
              <a className="case-source-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                {project.sourceKind === "github" ? (
                  <Github size={16} aria-hidden="true" />
                ) : (
                  <ExternalLink size={16} aria-hidden="true" />
                )}
                {project.sourceLabel}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
              {project.additionalSources?.map((source) => (
                <a className="case-source-link" href={source.url} target="_blank" rel="noopener noreferrer" key={source.url}>
                  <ExternalLink size={16} aria-hidden="true" />
                  {source.label}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <span className="case-eyebrow">{project.eyebrow}</span>
              <h1>{project.title}</h1>
              <p className="case-thesis">“{project.thesis}”</p>
              <p className="case-outcome">{project.outcome}</p>
              <div className="case-facts" aria-label={`${project.title} project facts`}>
                <div>
                  <span>Role</span>
                  <strong>{project.role}</strong>
                </div>
                <div>
                  <span>Timeline</span>
                  <strong>{project.timeline}</strong>
                </div>
                <div>
                  <span>Team</span>
                  <strong>{project.team}</strong>
                </div>
                <div>
                  <span>Status</span>
                  <strong>{project.status}</strong>
                </div>
              </div>
            </div>
            <ProjectVisual projectId={project.id} large />
          </div>
        </div>
      </section>

      <nav className="case-local-nav" aria-label="Case study sections">
        <a href="#brief">Brief</a>
        <a href="#decisions">Decisions</a>
        <a href="#system">System</a>
        <a href="#results">Results</a>
        <a href="#learning">Learning</a>
      </nav>

      <section className="case-section case-brief" id="brief">
        <div className="case-section-label">
          <span>01</span>
          Project brief
        </div>
        <div className="case-brief-grid">
          <article>
            <span>The problem</span>
            <h2>What made the work necessary.</h2>
            <p>{project.problem}</p>
          </article>
          <article>
            <span>The response</span>
            <h2>What I helped build.</h2>
            <p>{project.solution}</p>
          </article>
          <article className="case-impact-card">
            <span>The outcome</span>
            <h2>What changed.</h2>
            <p>{project.impact}</p>
          </article>
        </div>
      </section>

      <section className="case-section case-constraints">
        <div className="case-section-label">
          <ShieldCheck size={17} aria-hidden="true" />
          Constraints
        </div>
        <div className="constraint-grid">
          {project.constraints.map((constraint, index) => (
            <article key={constraint}>
              <span>0{index + 1}</span>
              <p>{constraint}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-section" id="decisions">
        <div className="case-section-heading">
          <div className="case-section-label">
            <span>02</span>
            Decision log
          </div>
          <div>
            <h2>The choices that shaped the system.</h2>
            <p>
              Case studies are more useful when they show judgment, not just a list of completed features.
            </p>
          </div>
        </div>
        <div className="decision-grid">
          {project.decisions.map((decision) => (
            <article key={decision.index}>
              <div className="decision-top">
                <span>{decision.index}</span>
                <small>{decision.signal}</small>
              </div>
              <h3>{decision.title}</h3>
              <p>{decision.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-system-section" id="system">
        <div className="case-section case-system-inner">
          <div className="case-section-heading">
            <div className="case-section-label">
              <Layers3 size={17} aria-hidden="true" />
              System model
            </div>
            <div>
              <h2>How the pieces move together.</h2>
              <p>An intentionally simplified view of the product flow and the responsibility of each layer.</p>
            </div>
          </div>

          <div className="architecture-flow">
            {project.architecture.map((step, index) => (
              <div className="architecture-step" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
                {index < project.architecture.length - 1 ? <ArrowRight size={17} aria-hidden="true" /> : <CheckCircle2 size={17} aria-hidden="true" />}
              </div>
            ))}
          </div>

          <div className="case-workflow">
            <span>System flow</span>
            <ol>
              {project.workflow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="confidentiality-note">
            <EyeOff size={19} aria-hidden="true" />
            <div>
              <strong>Designed around confidentiality</strong>
              <p>{project.confidentiality}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section case-results" id="results">
        <div className="case-section-heading">
          <div className="case-section-label">
            <span>03</span>
            Results
          </div>
          <div>
            <h2>The signals that matter.</h2>
            <p>Selected outcomes that connect engineering work to product and operational value.</p>
          </div>
        </div>
        <div className="case-result-grid">
          {project.results.map((result) => (
            <article key={result.label}>
              <strong>{result.value}</strong>
              <span>{result.label}</span>
            </article>
          ))}
        </div>
        <div className="case-tech-row" aria-label={`${project.title} technologies`}>
          <span>Built with</span>
          <div>
            {project.tech.map((item) => (
              <strong key={item}>{item}</strong>
            ))}
          </div>
        </div>
      </section>

      <section className="case-learning-section" id="learning">
        <div className="case-section case-learning-inner">
          <Lightbulb size={28} aria-hidden="true" />
          <span>What stayed with me</span>
          <blockquote>“{project.learning}”</blockquote>
        </div>
      </section>

      <section className="case-next">
        <div>
          <span>Next case study</span>
          <h2>{nextProject.title}</h2>
          <p>{nextProject.outcome}</p>
        </div>
        <a href={`/work/${nextProject.id}`}>
          Continue
          <ArrowUpRight size={22} aria-hidden="true" />
        </a>
      </section>

      <section className="case-contact">
        <span>Want the deeper technical version?</span>
        <h2>I am happy to talk through the decisions.</h2>
        <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`Question about ${project.title}`)}`}>
          Start a conversation
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
