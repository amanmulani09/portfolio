import { ArrowLeft, ArrowUpRight, Linkedin } from "lucide-react";
import { useEffect } from "react";
import { linkedinPosts, profile } from "../../data/resume";
import { BlogCard } from "../ui/BlogCard";

export function BlogIndexPage() {
  useEffect(() => {
    const pageTitle = `Blog | ${profile.name}`;
    const description =
      "Expanded notes from Aman Mulani's LinkedIn posts on AI agents, RAG, frontend releases, Redis caching, and backend streaming.";
    const pageUrl = `${window.location.origin}/blog`;
    const setMeta = (selector: string, value: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
    };

    document.title = pageTitle;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', pageUrl);
    setMeta('meta[name="twitter:title"]', pageTitle);
    setMeta('meta[name="twitter:description"]', description);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", pageUrl);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <main className="blog-page" id="main-content">
      <section className="blog-page-hero">
        <div className="blog-page-hero-inner">
          <a className="case-back-link" href="/">
            <ArrowLeft size={16} aria-hidden="true" />
            Portfolio home
          </a>
          <span className="case-eyebrow">Writing by Aman Mulani</span>
          <h1>Field notes from building.</h1>
          <p>
            Expanded editions of posts from my LinkedIn profile—AI systems, engineering
            trade-offs, and lessons worth keeping beyond a feed.
          </p>
          <div className="blog-page-summary">
            <span>{linkedinPosts.length} articles</span>
            <span>AI + engineering</span>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} aria-hidden="true" />
              Aman on LinkedIn
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="blog-library" aria-labelledby="blog-library-title">
        <div className="blog-library-heading">
          <span>Archive</span>
          <h2 id="blog-library-title">All articles</h2>
          <p>Every article links back to its original post. Reaction figures are dated public snapshots.</p>
        </div>
        <div className="blog-grid blog-page-grid">
          {linkedinPosts.map((post, index) => (
            <BlogCard post={post} featured={index === 0} key={post.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
