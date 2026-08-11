import { ArrowUpRight, BookOpen, BrainCircuit, MapPin, Sparkles } from "lucide-react";
import { profile } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <div className="about-layout">
        <div>
          <SectionHeading eyebrow="04 / The person in the system" title="I like the messy middle." />
          <div className="about-statement">
            <p>
              I am drawn to ambiguous product problems where interfaces, APIs, data, models, tools, and operations all
              need to become one dependable system.
            </p>
            <p>
              I build AI systems as complete products, not isolated model demos. That means owning the full-stack
              services, interfaces, data contracts, security boundaries, and operations that make intelligence useful.
            </p>
          </div>
        </div>

        <aside className="operator-card" aria-label={`About ${profile.name}`}>
          <div className="operator-card-top">
            <div className="operator-avatar">
              <span>AM</span>
              <i />
            </div>
            <div>
              <small>Operator profile</small>
              <strong>{profile.name}</strong>
              <span>{profile.role}</span>
            </div>
          </div>
          <div className="operator-values">
            <span>
              <MapPin size={15} aria-hidden="true" />
              Based in {profile.location}
            </span>
            <span>
              <BrainCircuit size={15} aria-hidden="true" />
              Builder · systems thinker · product owner
            </span>
            <span>
              <BookOpen size={15} aria-hidden="true" />
              4+ years shipping production software
            </span>
            <span>
              <Sparkles size={15} aria-hidden="true" />
              Product UI · backend · AI · operations
            </span>
          </div>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            More of the professional story
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </aside>
      </div>

      <div className="about-footnote">
        <span>What connects the work</span>
        <p>
          I care about the handoff between engineering and business: how interface choices affect adoption, how system
          design affects operating cost, how retrieval affects trust, and how automation saves time without weakening control.
        </p>
      </div>
    </section>
  );
}
