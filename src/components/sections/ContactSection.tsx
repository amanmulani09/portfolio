import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../../data/resume";

export function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="content-section contact-inner">
        <div className="contact-kicker">
          <span className="availability-dot" />
          {profile.availability}
        </div>
        <h2>
          Building product systems with
          <br />
          <span>real production stakes?</span>
        </h2>
        <p>
          I am always ready to discuss full-stack products, frontend and backend platforms, LLM workflows, production
          RAG, observability, or security-sensitive automation.
        </p>

        <div className="contact-primary-row">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Mail size={20} aria-hidden="true" />
            <span>
              <small>Email is best</small>
              {profile.email}
            </span>
            <ArrowUpRight size={22} aria-hidden="true" />
          </a>
          <span className="contact-location">
            <MapPin size={17} aria-hidden="true" />
            {profile.location}
          </span>
        </div>

        <div className="contact-links" aria-label="Contact and profile links">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin size={17} aria-hidden="true" />
            LinkedIn
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <Github size={17} aria-hidden="true" />
            GitHub
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <a href={profile.resume} target="_blank" rel="noopener noreferrer">
            <FileText size={17} aria-hidden="true" />
            Résumé
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
