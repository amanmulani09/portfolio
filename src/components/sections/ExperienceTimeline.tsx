import { ArrowUpRight, GraduationCap } from "lucide-react";
import { experiences, profile } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function ExperienceTimeline() {
  const workExperience = experiences.filter((experience) => experience.kind === "work");
  const education = experiences.filter((experience) => experience.kind === "education");

  return (
    <section className="content-section journey-section" id="experience">
      <div className="section-intro-grid">
        <SectionHeading
          eyebrow="01 / Experience"
          title="Experience across web, payments, and AI."
          description="Four years building production software across interactive web apps, secure payment systems, backend services, RAG, and AI product features."
        />
        <a className="journey-resume-link" href={profile.resume} target="_blank" rel="noopener noreferrer">
          Open the full résumé
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className="journey-layout">
        <div className="career-list">
          {workExperience.map((experience, index) => (
            <article key={`${experience.company}-${experience.role}`} className="career-item">
              <span className="career-number">0{workExperience.length - index}</span>
              <div className="career-period">{experience.period}</div>
              <div className="career-copy">
                <span>{experience.company}</span>
                <h3>{experience.role}</h3>
                <p>{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <aside className="learning-track">
          <div className="learning-track-heading">
            <GraduationCap size={22} aria-hidden="true" />
            <div>
              <span>Learning track</span>
              <strong>Software foundations</strong>
            </div>
          </div>
          {education.map((item) => (
            <article key={`${item.company}-${item.role}`}>
              <span>{item.period}</span>
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.summary}</p>
            </article>
          ))}
        </aside>
      </div>
    </section>
  );
}
