import { ArrowUpRight, MessageSquareText } from "lucide-react";
import { profile, testimonials } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function LinkedInProofSection() {
  return (
    <section className="proof-section">
      <div className="content-section">
        <div className="proof-heading-row">
          <SectionHeading
            eyebrow="07 / Measured impact"
            title="What changed after shipping."
            description="Selected outcomes from production systems described in my résumé."
          />
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            View full profile on LinkedIn
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <article className="recommendation-card" key={testimonial.name}>
              <div className="quote-mark">
                <MessageSquareText size={24} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <p>{testimonial.quote}</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>{testimonial.context}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
