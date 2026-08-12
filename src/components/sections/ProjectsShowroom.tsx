import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import type { CSSProperties } from "react";
import { profile, projects } from "../../data/resume";
import { SpotlightCard } from "../react-bits/SpotlightCard";
import { ProjectVisual } from "../ui/ProjectVisual";
import { SectionHeading } from "../ui/SectionHeading";

type AccentStyle = CSSProperties & {
  "--accent": string;
};

export function ProjectsShowroom() {
  return (
    <section className="content-section project-band" id="work">
      <div className="section-intro-grid">
        <SectionHeading
          eyebrow="02 / Selected work"
          title="Selected work with clear outcomes."
          description="Professional work at THG Ingenuity, Razorpay, and HMX Media, followed by focused AI projects with public source code."
        />
        <p className="section-aside">
          Each case study keeps the useful story visible while protecting private architecture, customer data, and
          company-owned code.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => {
          const accentStyle: AccentStyle = { "--accent": project.accent };

          return (
            <SpotlightCard
              as="article"
              className={`project-card project-card-${project.id}${index === 0 ? " project-card-featured" : ""}`}
              key={project.id}
              spotlightColor={`color-mix(in srgb, ${project.accent} 22%, transparent)`}
              style={accentStyle}
            >
              <ProjectVisual projectId={project.id} large={index === 0} />
              <div className="project-card-copy">
                <div className="project-card-meta">
                  <span>{project.eyebrow}</span>
                  <span>
                    Case study {String(index + 1).padStart(2, "0")} · {project.timeline}
                  </span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.short}</p>
                <div className="project-card-results" aria-label={`${project.title} results`}>
                  {project.results.slice(0, index === 0 ? 3 : 2).map((result) => (
                    <span key={result.label}>
                      <strong>{result.value}</strong>
                      {result.label}
                    </span>
                  ))}
                </div>
                <div className="project-card-bottom">
                  <div className="compact-tech-list" aria-label={`${project.title} technologies`}>
                    {project.tech.slice(0, 4).map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-card-actions">
                    <a
                      className="project-source-action"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={
                        project.sourceKind === "github"
                          ? `View ${project.title} source code on GitHub`
                          : `Open public source for ${project.title}`
                      }
                    >
                      {project.sourceKind === "github" ? (
                        <Github size={16} aria-hidden="true" />
                      ) : (
                        <ExternalLink size={16} aria-hidden="true" />
                      )}
                      {project.sourceKind === "github" ? "View code" : "Public source"}
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                    <a className="project-case-action" href={`/work/${project.id}`} aria-label={`Read case study: ${project.title}`}>
                      Read case study
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      <div className="projects-cta">
        <span>Want the quick version?</span>
        <p>Start with the résumé, or reach out to discuss the role, team, and problems you are hiring for.</p>
        <div>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            Open résumé
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <a href={`mailto:${profile.email}`}>
            Get in touch
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
