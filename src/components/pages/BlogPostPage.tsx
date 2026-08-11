import { ArrowLeft, ArrowRight, ArrowUpRight, Linkedin } from "lucide-react";
import { useEffect } from "react";
import { linkedinPosts, profile } from "../../data/resume";
import type { LinkedInPost } from "../../types/portfolio";
import { LikeTracker } from "../ui/LikeTracker";

type BlogPostPageProps = {
  post: LinkedInPost;
};

export function BlogPostPage({ post }: BlogPostPageProps) {
  const currentIndex = linkedinPosts.findIndex((item) => item.slug === post.slug);
  const nextPost = linkedinPosts[(currentIndex + 1) % linkedinPosts.length];
  const publishedLabel = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
    year: "numeric",
  }).format(new Date(post.publishedAt));

  useEffect(() => {
    const pageTitle = `${post.title} | ${profile.name}`;
    const pageUrl = `${window.location.origin}/blog/${post.slug}`;
    const setMeta = (selector: string, value: string) => {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", value);
    };

    document.title = pageTitle;
    setMeta('meta[name="description"]', post.excerpt);
    setMeta('meta[property="og:title"]', pageTitle);
    setMeta('meta[property="og:description"]', post.excerpt);
    setMeta('meta[property="og:url"]', pageUrl);
    setMeta('meta[name="twitter:title"]', pageTitle);
    setMeta('meta[name="twitter:description"]', post.excerpt);
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", pageUrl);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [post]);

  return (
    <main className="blog-post-page" id="main-content">
      <article>
        <header className="blog-post-hero">
          <div className="blog-post-hero-inner">
            <div className="blog-post-topline">
              <a href="/blog">
                <ArrowLeft size={16} aria-hidden="true" />
                All articles
              </a>
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <Linkedin size={16} aria-hidden="true" />
                Original post
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
            <div className="blog-post-meta">
              <span>{post.category}</span>
              <span>{post.readTime}</span>
              <span>{publishedLabel}</span>
              <span>By {profile.name}</span>
            </div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        </header>

        <div className="blog-post-layout">
          <aside className="blog-post-rail" aria-label="Article sections">
            <span>In this note</span>
            <ol>
              {post.sections.map((section, index) => (
                <li key={section.heading}>
                  <a href={`#section-${index + 1}`}>{section.heading}</a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="blog-post-content">
            {post.sections.map((section, index) => (
              <section id={`section-${index + 1}`} key={section.heading}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}

            <section className="blog-takeaways" aria-labelledby="takeaways-title">
              <span>Keep</span>
              <h2 id="takeaways-title">Practical takeaways</h2>
              <ul>
                {post.takeaways.map((takeaway) => (
                  <li key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </section>

            <LikeTracker post={post} />
          </div>
        </div>
      </article>

      <section className="blog-next">
        <span>Read next</span>
        <a href={`/blog/${nextPost.slug}`}>
          <strong>{nextPost.title}</strong>
          <ArrowRight size={24} aria-hidden="true" />
        </a>
      </section>
    </main>
  );
}
