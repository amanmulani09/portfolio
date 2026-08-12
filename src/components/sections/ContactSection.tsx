import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { profile } from "../../data/resume";
import { ClickSpark } from "../react-bits/ClickSpark";
import CurvedInput from "../react-bits/CurvedInput/CurvedInput";
import { ElasticMesh } from "../react-bits/ElasticMesh/ElasticMesh";

export function ContactSection() {
  const [draftStatus, setDraftStatus] = useState("");

  const openEmailDraft = (message: string) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage) {
      setDraftStatus("Add a short note first.");
      return;
    }

    const subject = encodeURIComponent("Portfolio conversation");
    const body = encodeURIComponent(`${trimmedMessage}\n\nSent from amanmulani.dev`);
    setDraftStatus("Opening your email app…");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact-section" id="contact">
      <ElasticMesh className="contact-elastic-mesh" stiffness={0.05} damping={0.9} grabRadius={210} pull={0.018} />
      <ClickSpark className="contact-spark-shell" sparkColor="#8caf55" sparkRadius={26}>
        <div className="content-section contact-inner">
          <div className="contact-kicker">
            <span className="availability-dot" />
            {profile.availability}
          </div>
          <h2>
            Building an AI product with
            <br />
            <span>real production stakes?</span>
          </h2>
          <p>
            I am happy to discuss full-stack products, AI workflows, RAG, backend services, observability, or
            security-sensitive automation.
          </p>

          <div className="contact-composer">
            <CurvedInput
              ariaLabel="Describe what you are building"
              backgroundColor="var(--surface-glass)"
              borderColor="var(--border-soft)"
              buttonColor="var(--accent-green)"
              buttonText="Draft email"
              buttonTextColor="var(--ink)"
              height={68}
              iconColor="var(--accent-green)"
              onChange={() => setDraftStatus("")}
              onSubmit={openEmailDraft}
              placeholder="What are you building?"
              shadowColor="#101713"
              shadowSize="sm"
              textColor="var(--text-heading)"
              type="text"
              width="min(100%, 820px)"
            />
            <span className="contact-composer-status" aria-live="polite">
              {draftStatus || "One line opens a pre-filled email draft. Nothing is stored or sent automatically."}
            </span>
          </div>

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
      </ClickSpark>
    </section>
  );
}
