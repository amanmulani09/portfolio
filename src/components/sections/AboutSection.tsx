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
              I am drawn to ambiguous product problems where models, retrieval, tools, APIs, interfaces, and operations
              all need to become one dependable system.
            </p>
            <p>
              That is where production AI engineering matters. I turn the moving parts into reliable products that
              remain simple to use and practical to operate at scale.
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
              Production AI · full-stack · end to end
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
          I care about the handoff between engineering and business: how retrieval quality affects trust, how system
          design affects operating cost, and how automation gives teams useful time back without weakening control.
        </p>
      </div>
    </section>
  );
}
