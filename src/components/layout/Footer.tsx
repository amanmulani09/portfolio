import { ArrowUpRight } from "lucide-react";
import { profile } from "../../data/resume";

export function Footer() {
  return <footer className="site-footer page-width"><span>© {new Date().getFullYear()} {profile.name}</span><div><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a><a href="#top">Back to top ↑</a></div></footer>;
}
