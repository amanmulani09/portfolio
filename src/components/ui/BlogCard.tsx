import { ArrowRight, Heart, MessageCircle } from "lucide-react";
import type { LinkedInPost } from "../../types/portfolio";

type BlogCardProps = {
  post: LinkedInPost;
  featured?: boolean;
};

export function BlogCard({ post, featured = false }: BlogCardProps) {
  return (
    <article className={featured ? "blog-card blog-card-featured" : "blog-card"}>
      <div className="blog-card-meta">
        <span>{post.category}</span>
        <span>{post.readTime}</span>
      </div>
      <div className="blog-card-copy">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
      <div className="blog-card-footer">
        <a href={`/blog/${post.slug}`} aria-label={`Read article: ${post.title}`}>
          Read article
          <ArrowRight size={16} aria-hidden="true" />
        </a>
        {post.linkedInReactions !== null ? (
          <span className="blog-card-reactions" title={`LinkedIn snapshot as of ${post.engagementAsOf}`}>
            <Heart size={14} aria-hidden="true" />
            {post.linkedInReactions}
            {post.linkedInComments !== null ? (
              <>
                <MessageCircle size={14} aria-hidden="true" />
                {post.linkedInComments}
              </>
            ) : null}
          </span>
        ) : (
          <span className="blog-card-reactions">LinkedIn post</span>
        )}
      </div>
    </article>
  );
}
