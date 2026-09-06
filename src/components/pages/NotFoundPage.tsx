import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "../../data/resume";

export function NotFoundPage() {
  return (
    <main className="not-found-page" id="main-content">
      <div className="not-found-inner">
        <span className="not-found-code">404 / Page not found</span>
        <h1>Page not found.</h1>
        <p>
          This page isn’t here. Explore my work or get in touch.
        </p>
        <div className="not-found-actions">
          <a className="primary-action" href="/">
            <ArrowLeft size={17} aria-hidden="true" />
            Back to portfolio
          </a>
          <a className="secondary-action" href={`mailto:${profile.email}`}>
            <Mail size={17} aria-hidden="true" />
            Email Aman
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </main>
  );
}
