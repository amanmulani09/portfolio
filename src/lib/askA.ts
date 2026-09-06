import { education, experiences, profile, projects, skillGroups } from "../data/resume.ts";

export type Answer = { topic: string; text: string; links: { label: string; href: string }[] };
const link = (label: string, href: string) => ({ label, href });
const answer = (topic: string, text: string, links: Answer["links"] = []): Answer => ({ topic, text, links });
const projectAnswer = (index: number) => {
  const project = projects[index];
  return answer(project.id, `${project.title}: ${project.summary} ${project.details} ${project.extra}`, [link("See project", `/#${project.id}`), ...(project.url ? [link("GitHub repository", project.url)] : [])]);
};

const knowledge: { pattern: RegExp; reply: () => Answer }[] = [
  { pattern: /\b(salary|compensation|notice period|visa|relocat|remote|available|availability|hiring|hire|freelanc|contract|phone|call|number)\w*\b/, reply: () => answer("availability", "For availability, role preferences, or a call, please contact Aman directly. Those details aren’t confirmed in this portfolio.", [link("Email Aman", `mailto:${profile.email}`)]) },
  { pattern: /\b(resume|cv|download)\b/, reply: () => answer("resume", "Here’s Aman’s updated résumé: experience at THG Ingenuity, Razorpay, and HMX Media, plus Codo and his technical skills.", [link("Open résumé (PDF)", profile.resume)]) },
  { pattern: /\b(contact|email|reach|connect|message|talk)\b/, reply: () => answer("contact", `Email Aman at ${profile.email}. You can also connect on LinkedIn or explore his GitHub.`, [link("Email Aman", `mailto:${profile.email}`), link("LinkedIn", profile.linkedin), link("GitHub", profile.github)]) },
  { pattern: /\b(linkedin|blog|writing|articles|posts)\b/, reply: () => answer("writing", "Find Aman’s engineering posts and professional profile on LinkedIn.", [link("Visit LinkedIn", profile.linkedin)]) },
  { pattern: /\b(codo|code review|pull requests?)\b/, reply: () => projectAnswer(3) },
  { pattern: /\b(cms|content management|multi tenant|multitenant)\b/, reply: () => projectAnswer(1) },
  { pattern: /\b(razorpay|payments?|provisioning|tokenization|tokenisation)\b/, reply: () => projectAnswer(2) },
  { pattern: /\b(costs?|savings?|saved|4000|4k|impact|metrics?|brands?|shopping|assistant console|ag ui|adk)\b/, reply: () => answer("shopping-assistant", "At THG Ingenuity, Aman built and maintained an AI Shopping Assistant deployed across 10+ ecommerce brands. He owned the agent backend, client SDK, and UI integration using Google ADK, AG-UI, and FastAPI, and reduced assistant costs by $4,000+ per month. He also built a tenant-specific Assistant Console.", [link("See Shopping Assistant", "/#shopping-assistant")]) },
  { pattern: /\b(hmx|webgl|canvas|localization|localisation|3d)\b/, reply: () => answer("hmx", `${experiences[2].role} at HMX Media (${experiences[2].period}). ${experiences[2].summary} ${experiences[2].details}`, [link("View experience", "/#experience")]) },
  { pattern: /\b(stylist|multimodal)\b/, reply: () => answer("stylist", "At THG Ingenuity, Aman delivered a multimodal AI Stylist within existing ecommerce journeys.", [link("View experience", "/#experience")]) },
  { pattern: /\b(rag|retrieval|embeddings?|vector|chunking)\b/, reply: () => answer("rag", "At THG Ingenuity, Aman built RAG applications covering document ingestion, chunking, embeddings, retrieval, LLM integration, and evaluation, with attention to response quality, latency, and cost.", [link("View experience", "/#experience")]) },
  { pattern: /\b(automation|automate|n8n|workflows?)\b/, reply: () => answer("automation", "Aman automated support and operational workflows at THG using Python, APIs, n8n, and LLMs. At HMX Media, he built internal tools to automate localization workflows.", [link("View experience", "/#experience")]) },
  { pattern: /\b(thg|ingenuity|current|currently|employer)\b|\bwhere\b.*\b(work|working)\b/, reply: () => answer("thg", `${experiences[0].role} at THG Ingenuity (${experiences[0].period}). ${experiences[0].summary} ${experiences[0].details}`, [link("Selected work", "/#work")]) },
  { pattern: /\b(education|degree|bca|college|study|studied|university|graduate)\b/, reply: () => answer("education", `${education.degree} (BCA), ${education.school}, ${education.period}.`, [link("About Aman", "/#about")]) },
  { pattern: /\b(location|based|live|country|india|where)\b/, reply: () => answer("location", `Aman is based in ${profile.location}. For location preferences or opportunities, email him directly.`, [link("Email Aman", `mailto:${profile.email}`)]) },
  { pattern: /\b(experience|career|background|years|history|companies|roles|worked)\b/, reply: () => answer("experience", `Aman has been building software professionally since August 2022. ${experiences.map((item) => `${item.company}: ${item.role}, ${item.period}.`).join(" ")}`, [link("View timeline", "/#experience"), link("Open résumé", profile.resume)]) },
  { pattern: /\b(cloud|gcp|aws|docker|deploy|deployment|ci cd|grafana|testing|playwright|observability|production|delivery)\b/, reply: () => answer("production", "Aman deploys assistant services on Google Cloud Run. His résumé lists AWS (S3, CloudFront, Route 53), Docker, GitHub Actions, CI/CD, Grafana, Playwright, automated and integration testing, and production debugging.", [link("View skills", "/#about")]) },
  { pattern: /\b(python|typescript|javascript|sql|backend|front ?end|full ?stack|react|next js|astro|fastapi|node js|postgresql|redis|graphql|rest|tailwind)\b/, reply: () => answer("full-stack", "Aman works across Python, TypeScript, JavaScript, and SQL. His stack includes React, Next.js, Astro, React Native, Tailwind CSS, FastAPI, Node.js, PostgreSQL, Redis, REST APIs, and GraphQL.", [link("View skills", "/#about")]) },
  { pattern: /\b(ai|agents?|llms?|genai|langchain|langgraph|mcp|prompt|evaluation|tool calling)\b/, reply: () => answer("ai", "Aman’s applied AI work includes production shopping agents, RAG applications, a multimodal AI Stylist, and Codo. His résumé lists LLM APIs, Google ADK, AG-UI, LangChain, LangGraph, MCP, tool calling, prompt engineering, and evaluation.", [link("Explore AI work", "/#work")]) },
  { pattern: /\b(skills?|stack|technologies|toolkit|tools|languages)\b/, reply: () => answer("skills", skillGroups.map((group) => `${group.label}: ${group.skills.join(", ")}.`).join(" "), [link("View skills", "/#about"), link("Full résumé", profile.resume)]) },
  { pattern: /\b(projects?|portfolio|built|build|github|work)\b/, reply: () => answer("projects", "Explore four selected projects: an AI Shopping Assistant for 10+ brands, a multi-tenant CMS at THG, a push provisioning platform at Razorpay, and Codo, a personal AI code review agent.", [link("Selected work", "/#work"), link("GitHub", profile.github)]) },
  { pattern: /\b(about|who|introduce|yourself|aman)\b|^(hi|hello|hey|help)[!. ]*$/, reply: () => answer("about", `${profile.name} is an ${profile.role} based in ${profile.location}. ${profile.summary}`, [link("About Aman", "/#about"), link("View work", "/#work")]) },
  { pattern: /^(thank(s| you)|cheers)[!. ]*$/, reply: () => answer("thanks", "You’re welcome. If you’d like to talk about a role or project, Aman is an email away.", [link("Email Aman", `mailto:${profile.email}`)]) },
];

export function getAnswer(question: string): Answer {
  const normalized = question.slice(0, 300).normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[’']/g, "").replace(/[.\-_/]/g, " ").replace(/\s+/g, " ").trim();
  if (!normalized) return answer("empty", "Ask about Aman’s experience, projects, skills, education, or contact details.");
  // All replies are authored résumé facts. Input never becomes code, HTML, or a network request.
  return knowledge.find((item) => item.pattern.test(normalized))?.reply()
    ?? answer("unknown", "I don’t have a résumé-backed answer for that. Try asking about Aman’s experience, projects, skills, or education — or contact him directly.", [link("Email Aman", `mailto:${profile.email}`)]);
}
