import { ArrowUpRight } from "lucide-react";
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
          title="Case studies with decisions and results."
          description="Four stories about taking AI and full-stack systems from ambiguous requirements to dependable production outcomes."
        />
        <p className="section-aside">
          Original visualizations explain the system boundaries without exposing proprietary interfaces, internal
          documents, customer data, or private repositories.
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
                  <a href={`/work/${project.id}`} aria-label={`Read case study: ${project.title}`}>
                    Read case study
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          );
        })}
      </div>

      <div className="projects-cta">
        <span>Want the quick version?</span>
        <p>Start with the résumé, or reach out if you want to talk through the decisions behind the work.</p>
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
