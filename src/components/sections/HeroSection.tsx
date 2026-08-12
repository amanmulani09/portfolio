import { ArrowDownRight, ArrowUpRight, FileText, MapPin } from "lucide-react";
import { profile } from "../../data/resume";
import { ElasticMesh } from "../react-bits/ElasticMesh/ElasticMesh";
import { Magnet } from "../react-bits/Magnet";
import { SignalMap } from "../ui/SignalMap";
import { ImpactMetrics } from "./ImpactMetrics";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-frame">
        <ElasticMesh className="hero-elastic-mesh" stiffness={0.04} damping={0.91} grabRadius={260} pull={0.012} />
        <div className="hero-grid">
          <div className="hero-copy hero-copy-enter">
            <div className="hero-kicker">
              <span className="availability-dot" />
              <span>{profile.name}</span>
              <i />
              <span>{profile.role}</span>
            </div>

            <h1>
              I build <em>AI products</em>
              <br />
              people can <span>depend on.</span>
            </h1>

            <p className="hero-summary">{profile.introduction}</p>

            <div className="hero-actions">
              <Magnet padding={64} magnetStrength={8} wrapperClassName="hero-action-magnet">
                <a className="primary-action" href="#work">
                  View selected work
                  <ArrowDownRight size={18} aria-hidden="true" />
                </a>
              </Magnet>
              <a className="secondary-action" href={profile.resume} target="_blank" rel="noopener noreferrer">
                <FileText size={17} aria-hidden="true" />
                Open résumé
              </a>
            </div>

            <p className="hero-cta-note">
              Looking for an engineer who can build AI features and the product around them?{" "}
              <a href={`mailto:${profile.email}`}>Let&apos;s talk.</a>
            </p>
          </div>

          <SignalMap />
        </div>
      </div>

      <div className="hero-below-fold">
        <div className="hero-location">
          <MapPin size={15} aria-hidden="true" />
          {profile.location}
          <span>·</span>
          {profile.availability}
        </div>

        <div className="current-strip" aria-label={`What ${profile.name} is currently doing`}>
          <div className="current-strip-label">
            <span>Now</span>
            <small>2026 / active</small>
          </div>
          {profile.currently.map((item) => (
            <div className="current-item" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${profile.name}'s LinkedIn profile`}
          >
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>

        <ImpactMetrics />
      </div>
    </section>
  );
}
