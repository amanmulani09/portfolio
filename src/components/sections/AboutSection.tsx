import { ArrowUpRight, BookOpen, BrainCircuit, MapPin, Sparkles } from "lucide-react";
import { profile } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="content-section about-section" id="about">
      <div className="about-layout">
        <div>
          <SectionHeading eyebrow="04 / About" title="I like turning unclear problems into working products." />
          <div className="about-statement">
            <p>
              I am drawn to product problems where the user experience, API, data, AI model, and release process all
              need to work together.
            </p>
            <p>
              I build AI systems as complete products, not isolated model demos. That means owning the interface,
              backend, data contracts, security checks, and production behavior.
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
              Builder · systems thinker · product-minded engineer
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
          I care about how engineering choices affect the business: whether users adopt the interface, whether systems
          stay affordable, whether AI answers can be trusted, and whether automation saves time without weakening control.
        </p>
      </div>
    </section>
  );
}
