import { ExternalLink, Heart, Linkedin, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import type { LinkedInPost } from "../../types/portfolio";

type LikeTrackerProps = {
  post: LinkedInPost;
};

const STORAGE_KEY = "aman-portfolio-blog-appreciations";

function readAppreciations() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (!value) return {};

    const parsed: unknown = JSON.parse(value);
    return parsed && typeof parsed === "object" ? (parsed as Record<string, boolean>) : {};
  } catch {
    return {};
  }
}

export function LikeTracker({ post }: LikeTrackerProps) {
  const [appreciated, setAppreciated] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAppreciated(Boolean(readAppreciations()[post.slug]));
    setReady(true);
  }, [post.slug]);

  const toggleAppreciation = () => {
    const next = !appreciated;
    const appreciations = readAppreciations();
    appreciations[post.slug] = next;

    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(appreciations));
    } catch {
      // Preference still works for this session when storage is blocked.
    }

    setAppreciated(next);
  };

  return (
    <aside className="like-tracker" aria-label="Article appreciation and LinkedIn engagement">
      <div className="like-tracker-copy">
        <span>Useful?</span>
        <strong>{appreciated ? "Saved with appreciation." : "Leave a small signal."}</strong>
        <small>Stored only on this device. No account or tracking request.</small>
      </div>

      <button
        className={appreciated ? "appreciate-button is-appreciated" : "appreciate-button"}
        type="button"
        aria-pressed={appreciated}
        disabled={!ready}
        onClick={toggleAppreciation}
      >
        <span className="appreciate-icon" aria-hidden="true">
          <Heart size={20} fill={appreciated ? "currentColor" : "none"} />
          <i />
          <i />
          <i />
          <i />
        </span>
        {appreciated ? "Appreciated" : "Appreciate"}
      </button>

      <div className="linkedin-snapshot">
        <Linkedin size={18} aria-hidden="true" />
        <div>
          {post.linkedInReactions !== null ? (
            <strong>
              <Heart size={14} aria-hidden="true" />
              {post.linkedInReactions} reactions
              {post.linkedInComments !== null ? (
                <>
                  <MessageCircle size={14} aria-hidden="true" />
                  {post.linkedInComments} comments
                </>
              ) : null}
            </strong>
          ) : (
            <strong>Live count available on LinkedIn</strong>
          )}
          <small>
            {post.linkedInReactions !== null ? `Public snapshot · ${post.engagementAsOf}` : "LinkedIn does not expose a reliable public count here."}
          </small>
        </div>
        <a href={post.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${post.title} on LinkedIn`}>
          Source
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>
      <span className="sr-only" aria-live="polite">
        {ready ? (appreciated ? "Article appreciated on this device." : "Article appreciation removed.") : ""}
      </span>
    </aside>
  );
}
