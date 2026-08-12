import { ArrowUpRight, Plus } from "lucide-react";
import { fieldNotes } from "../../data/resume";
import { SectionHeading } from "../ui/SectionHeading";

export function FieldNotesSection() {
  return (
    <section className="content-section notes-section" id="notes">
      <div className="section-intro-grid">
        <SectionHeading
          eyebrow="06 / Notes"
          title="What I am thinking about."
          description="Short notes on practical AI, RAG, secure delivery, backend systems, and frontend quality."
        />
        <a
          className="notes-linkedin-link"
          href="https://www.linkedin.com/in/aman-mulani/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow the conversation on LinkedIn
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>

      <div className="notes-list">
        {fieldNotes.map((note) => (
          <details className="note-card" key={note.index}>
            <summary>
              <span className="note-index">{note.index}</span>
              <span className="note-title-group">
                <span className="note-meta">
                  {note.category} · {note.readTime}
                </span>
                <strong>{note.title}</strong>
                <span>{note.excerpt}</span>
              </span>
              <span className="note-open">
                <Plus size={18} aria-hidden="true" />
              </span>
            </summary>
            <div className="note-body">
              {note.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
