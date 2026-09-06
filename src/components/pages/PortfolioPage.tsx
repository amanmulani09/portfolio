import { ArrowDown, ArrowDownToLine, ArrowUpRight, Check, Copy, Cpu, Layers3, CreditCard, GitPullRequest, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { experiences, profile, projects, shoppingCaseStudy, skillGroups } from "../../data/resume";

const projectIcons = [Layers3, CreditCard, GitPullRequest];

export function PortfolioPage({ onAsk }: { onAsk: () => void }) {
  const [copyStatus, setCopyStatus] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied");
    } catch {
      setCopyStatus("Select the email address to copy it.");
    }
    resetTimer.current = setTimeout(() => setCopyStatus(""), 3500);
  }

  return (
    <main id="main-content">
      <section className="hero page-width" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> AI & FULL-STACK ENGINEER</div>
          <h1 id="hero-title">{profile.headline}</h1>
          <p className="hero-intro">{profile.introduction}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#shopping-assistant">See flagship project <ArrowDown size={17} /></a>
            <a className="button button-secondary" href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé <ArrowDownToLine size={17} /></a>
          </div>
          <div className="hero-footnote">Based in {profile.location}<span>·</span>Building since 2022</div>
        </div>
        <aside className="profile-card glass" aria-label="Current work and impact">
          <div className="profile-card-top">
            <img className="profile-photo" src="/aman-mulani-profile.png" alt="Aman Mulani" width="72" height="72" />
            <span className="small-label"><span className="status-dot" /> Currently building</span>
          </div>
          <div className="profile-card-name">Aman Mulani<span>Software Engineer at THG Ingenuity</span></div>
          <div className="impact-pair">
            <div><strong>10+</strong><span>brands using the<br />Shopping Assistant</span></div>
            <div><strong>$4k+</strong><span>monthly assistant<br />cost savings</span></div>
          </div>
          <button className="profile-ask" onClick={onAsk}>Curious about my experience? <span>Ask A <ArrowUpRight size={15} /></span></button>
        </aside>
      </section>

      <section className="section page-width" id="work" aria-labelledby="work-title">
        <div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2 id="work-title">Built to be used.</h2></div><p>Production systems & a personal project.</p></div>
        <article className="flagship glass" id="shopping-assistant" aria-labelledby="flagship-title">
          <div className="flagship-heading">
            <div>
              <span className="eyebrow">FEATURED / THG INGENUITY</span>
              <h3 id="flagship-title">AI Shopping Assistant</h3>
              <p>Shopping help, built into the storefront.</p>
            </div>
            <span className="flagship-status"><span className="status-dot" /> In production</span>
          </div>
          <div className="flagship-body">
            <dl className="case-brief">
              <div><dt>The problem</dt><dd>{shoppingCaseStudy.problem}</dd></div>
              <div><dt>My contribution</dt><dd>{shoppingCaseStudy.contribution}</dd></div>
              <div><dt>The result</dt><dd>{shoppingCaseStudy.result}</dd></div>
            </dl>
            <figure className="assistant-flow">
              <figcaption>Illustrative system flow</figcaption>
              <ol>
                {shoppingCaseStudy.flow.map((step, index) => (
                  <li key={step.title}>
                    <span className="flow-index" aria-hidden="true">0{index + 1}</span>
                    <div><strong>{step.title}</strong><span>{step.detail}</span></div>
                    {index < shoppingCaseStudy.flow.length - 1 && <ArrowDown className="flow-arrow" size={17} aria-hidden="true" />}
                  </li>
                ))}
              </ol>
              <div className="flow-runtime"><Cpu size={16} aria-hidden="true" /> Cloud Run deployment · Observability</div>
            </figure>
          </div>
          <div className="flagship-footer">
            <div className="tech-tags">{projects[0].tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <div className="flagship-links">
              <a className="text-link" href={profile.resume} target="_blank" rel="noopener noreferrer">View résumé <ArrowUpRight size={15} aria-hidden="true" /></a>
              <a className="text-link" href={shoppingCaseStudy.sourceUrl} target="_blank" rel="noopener noreferrer">THG public platform overview <ArrowUpRight size={15} aria-hidden="true" /></a>
            </div>
          </div>
        </article>
        <div className="project-grid">
          {projects.slice(1).map((project, index) => {
            const Icon = projectIcons[index];
            return (
              <article className={`project-card project-${index + 1} glass`} id={project.id} key={project.id}>
                <div className="project-top"><span className="project-icon"><Icon size={23} strokeWidth={1.5} aria-hidden="true" /></span><span className="project-number">0{index + 2}</span></div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3><p className="project-summary">{project.summary}</p>
                <div className="project-impact">{project.impact}</div>
                <div className="tech-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                <details className="project-details">
                  <summary aria-label={`What I built: ${project.title}`}><span>What I built</span><Plus size={18} aria-hidden="true" /></summary>
                  <div className="project-detail-content"><p>{project.details}</p><p>{project.extra}</p></div>
                </details>
                <a className="project-destination text-link" href={project.sourceUrl} target="_blank" rel="noopener noreferrer">{project.sourceLabel}<ArrowUpRight size={15} aria-hidden="true" /></a>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section page-width" id="experience" aria-labelledby="experience-title">
        <div className="section-heading"><div><span className="eyebrow">02 / EXPERIENCE</span><h2 id="experience-title">From interfaces to intelligence.</h2></div></div>
        <div className="experience-list">
          {experiences.map((experience) => <article className="experience-row" key={experience.company}><span className="company-mark" aria-hidden="true">{experience.initials}</span><div className="experience-content"><div className="experience-heading"><h3>{experience.company}</h3><span>{experience.period}</span></div><div className="experience-role">{experience.role}</div><p>{experience.summary}</p></div></article>)}
        </div>
      </section>

      <section className="section page-width" id="about" aria-labelledby="about-title">
        <div className="about-grid"><div><span className="eyebrow">03 / A LITTLE ABOUT ME</span><h2 id="about-title">I connect the pieces.</h2></div><div className="about-copy"><p>I enjoy the space where product, engineering, and AI meet. I work across interfaces, APIs, and agent systems, with the same focus: making them useful and reliable for the people using them.</p></div></div>
        <div className="skills-grid">{skillGroups.map((group) => <div key={group.label}><h3>{group.label}</h3><p>{group.skills.join(" · ")}</p></div>)}</div>
      </section>

      <section className="contact-section page-width" id="contact" aria-labelledby="contact-title">
        <div className="contact-panel glass"><div><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2 id="contact-title">Let’s build something useful.</h2><p>AI products, full-stack systems, or a good engineering conversation.</p></div><div className="contact-bottom"><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="icon-button" type="button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === "Email copied" ? <Check size={18} /> : <Copy size={18} />}</button><span className="copy-status" role="status">{copyStatus}</span></div><a className="button button-primary" href={`mailto:${profile.email}`}>Say hello <ArrowUpRight size={18} /></a></div></div>
      </section>
    </main>
  );
}
