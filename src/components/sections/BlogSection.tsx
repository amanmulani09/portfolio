import { ArrowRight } from "lucide-react";
import { linkedinPosts } from "../../data/resume";
import { BlogCard } from "../ui/BlogCard";
import { SectionHeading } from "../ui/SectionHeading";

export function BlogSection() {
  return (
    <section className="content-section blog-section" id="blog">
      <div className="section-intro-grid">
        <SectionHeading
          eyebrow="06 / Writing"
          title="Notes on AI and engineering."
          description="Expanded editions of my LinkedIn posts on agent reliability, model behavior, backend architecture, and practical software decisions."
        />
        <a className="blog-profile-link" href="/blog">
          Browse all articles
          <ArrowRight size={15} aria-hidden="true" />
        </a>
      </div>

      <div className="blog-grid">
        {linkedinPosts.slice(0, 3).map((post, index) => (
          <BlogCard post={post} featured={index === 0} key={post.slug} />
        ))}
      </div>
    </section>
  );
}
