import { copyFile, mkdir, readFile, readdir, rename, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { loadEnv } from "vite";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const buildOutputDirectory = resolve(projectDirectory, "dist");
const clientOutputDirectory = resolve(buildOutputDirectory, "client");
const serverOutputDirectory = resolve(buildOutputDirectory, "server");
const buildEnvironment = loadEnv("production", projectDirectory, "");
const configuredSiteUrl = process.env.VITE_SITE_URL ?? buildEnvironment.VITE_SITE_URL;

const caseStudyPages = [
  {
    id: "chitra-ai",
    title: "Chitra.ai Multi-Agent System Case Study | Aman Mulani",
    description: "Multi-agent video and audio analysis pipeline built with FastAPI, GPT-4o, Whisper, Pydantic, Docker, and staged CI/CD.",
    keywords: ["multi-agent systems", "video analysis", "FastAPI", "GPT-4o"]
  },
  {
    id: "rag-architectures",
    title: "RAG Architecture Lab Case Study | Aman Mulani",
    description: "Public RAG implementation lab covering hybrid search, reranking, injection boundaries, vector repositories, and layered service design.",
    keywords: ["RAG architecture", "hybrid search", "reranking", "retrieval engineering"]
  },
  {
    id: "codo",
    title: "Codo AI Code Review Case Study | Aman Mulani",
    description: "GitHub App that reviews pull requests, posts focused inline findings, summarizes risk, and leaves final code changes under human control.",
    keywords: ["AI code review", "GitHub App", "Claude", "application security"]
  },
  {
    id: "pgkhata",
    title: "PGKhata Full-Stack PWA Case Study | Aman Mulani",
    description: "Mobile-first tenant management PWA built with React, TypeScript, FastAPI, PostgreSQL, protected routes, tested APIs, and multilingual UI.",
    keywords: ["full-stack PWA", "React", "FastAPI", "PostgreSQL"]
  },
  {
    id: "shodh",
    title: "Shodh Python CLI Case Study | Aman Mulani",
    description: "Published Python CLI and library for crawling websites, detecting broken links, reporting 404s, and exporting results to CSV.",
    keywords: ["Python CLI", "website crawler", "broken links", "developer tooling"]
  }
];

const blogPages = [
  {
    slug: "llms-align-more-than-they-decide",
    title: "LLMs Align More Than They Decide | Aman Mulani",
    description: "A prompt experiment on model agreement, architectural judgment, counterarguments, and keeping evidence-based decisions under human ownership.",
    source: "https://www.linkedin.com/posts/amanmulani_you-are-absolutely-right-if-this-instantly-activity-7445516076865544192-LAL9",
    keywords: ["LLM behavior", "AI decision making", "architecture", "human oversight"]
  },
  {
    slug: "tdd-for-ai-agents",
    title: "Why Agents Make TDD Non-Negotiable | Aman Mulani",
    description: "How unit, integration, and end-to-end tests create executable boundaries and mechanical feedback loops for AI coding agents.",
    source: "https://www.linkedin.com/posts/amanmulani_agents-make-tdd-non-negotiable-activity-7469378177807872000-YsfU",
    keywords: ["AI coding agents", "test-driven development", "software testing", "agent reliability"]
  },
  {
    slug: "inside-an-ai-coding-tool",
    title: "What an AI Coding Tool Did Behind the Scenes | Aman Mulani",
    description: "A GPT image-to-SVG experiment exposing tool use, hidden execution paths, token cost, observability, and agent permission boundaries.",
    source: "https://www.linkedin.com/posts/amanmulani_today-i-was-playing-around-with-gpt-54-via-activity-7436795049650118656--5ci",
    keywords: ["AI coding tools", "agent tool use", "AI observability", "token cost"]
  },
  {
    slug: "when-sse-beats-websockets",
    title: "When Server-Sent Events Beat WebSockets | Aman Mulani",
    description: "Choosing Server-Sent Events for one-way progress, logs, notifications, and AI streaming without unnecessary WebSocket complexity.",
    source: "https://www.linkedin.com/posts/aman-mulani_i-was-building-a-feature-where-the-ui-needed-activity-7424144231608352768-pPiR",
    keywords: ["Server-Sent Events", "WebSockets", "HTTP streaming", "backend architecture"]
  },
  {
    slug: "isolating-python-dependency-conflicts",
    title: "Exploring Conflicting Python Dependencies | Aman Mulani",
    description: "A subprocess isolation experiment and its trade-offs across dependency management, IPC, serialization, observability, and security.",
    source: "https://www.linkedin.com/posts/amanmulani_softwareengineering-python-engineering-activity-7332860690837274624-FZWI",
    keywords: ["Python dependencies", "subprocess isolation", "IPC", "software architecture"]
  }
];

function normalizeSiteUrl(rawSiteUrl) {
  if (!rawSiteUrl) return null;

  try {
    const siteUrl = new URL(rawSiteUrl);
    if (!new Set(["http:", "https:"]).has(siteUrl.protocol)) return null;
    siteUrl.search = "";
    siteUrl.hash = "";
    siteUrl.pathname = `${siteUrl.pathname.replace(/\/+$/, "")}/`;
    return siteUrl;
  } catch {
    return null;
  }
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function replaceMeta(document, attribute, key, value) {
  const pattern = new RegExp(`<meta([^>]*\\b${attribute}="${key}"[^>]*)>`, "i");
  return document.replace(pattern, (tag) =>
    tag.replace(/content="[^"]*"/i, `content="${escapeAttribute(value)}"`),
  );
}

function addPageMetadata(sourceDocument, { title, description, pageUrl, schema }) {
  let document = sourceDocument.replace(/<title>.*?<\/title>/is, `<title>${title}</title>`);
  document = replaceMeta(document, "name", "description", description);
  document = replaceMeta(document, "property", "og:title", title);
  document = replaceMeta(document, "property", "og:description", description);
  document = replaceMeta(document, "name", "twitter:title", title);
  document = replaceMeta(document, "name", "twitter:description", description);

  const tags = [];
  if (pageUrl) {
    tags.push(`<link rel="canonical" href="${escapeAttribute(pageUrl)}" />`);
    tags.push(`<meta property="og:url" content="${escapeAttribute(pageUrl)}" />`);
  }
  if (schema) {
    const safeSchema = JSON.stringify(schema).replaceAll("<", "\\u003c");
    tags.push(`<script type="application/ld+json">${safeSchema}</script>`);
  }

  return tags.length > 0
    ? document.replace("</head>", `    ${tags.join("\n    ")}\n  </head>`)
    : document;
}

const siteUrl = normalizeSiteUrl(configuredSiteUrl);

await Promise.all([
  mkdir(clientOutputDirectory, { recursive: true }),
  mkdir(serverOutputDirectory, { recursive: true }),
]);

const clientEntries = (await readdir(buildOutputDirectory, { withFileTypes: true })).filter(
  (entry) => entry.name !== "client" && entry.name !== "server",
);

await Promise.all(
  clientEntries.map((entry) =>
    rename(resolve(buildOutputDirectory, entry.name), resolve(clientOutputDirectory, entry.name)),
  ),
);

const sourceDocumentPath = resolve(clientOutputDirectory, "index.html");
const baseDocument = await readFile(sourceDocumentPath, "utf8");

function addAbsoluteSiteReferences(sourceDocument) {
  if (!siteUrl) return sourceDocument;

  const homepageUrl = siteUrl.toString();
  const socialImageUrl = new URL("og.png", siteUrl).toString();
  return sourceDocument
    .replaceAll('content="/og.png"', `content="${escapeAttribute(socialImageUrl)}"`)
    .replace(/"@id"\s*:\s*"#website"/g, `"@id":"${homepageUrl}#website"`)
    .replace(/"@id"\s*:\s*"#profile-page"/g, `"@id":"${homepageUrl}#profile-page"`)
    .replace(/"@id"\s*:\s*"#person"/g, `"@id":"${homepageUrl}#person"`);
}

let homepageDocument = addAbsoluteSiteReferences(baseDocument);

if (siteUrl) {
  const homepageUrl = siteUrl.toString();
  homepageDocument = addPageMetadata(homepageDocument, {
    title: "Aman Mulani | AI + Full-Stack Engineer",
    description: "Aman Mulani is an AI + Full-Stack Engineer building multi-agent systems, RAG architectures, backend services, and product interfaces.",
    pageUrl: homepageUrl
  });
}

await writeFile(sourceDocumentPath, homepageDocument);

await Promise.all(
  caseStudyPages.map(async (page) => {
    const pageDirectory = resolve(clientOutputDirectory, "work", page.id);
    const pageUrl = siteUrl ? new URL(`work/${page.id}`, siteUrl).toString() : null;
    const schema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: page.title.replace(" Case Study | Aman Mulani", ""),
      description: page.description,
      inLanguage: "en-IN",
      creator: siteUrl
        ? { "@id": `${siteUrl.toString()}#person` }
        : { "@type": "Person", name: "Aman Mulani" },
      ...(pageUrl ? { url: pageUrl } : {}),
      keywords: page.keywords
    };
    const pageDocument = addPageMetadata(addAbsoluteSiteReferences(baseDocument), {
      title: page.title,
      description: page.description,
      pageUrl,
      schema
    });
    await mkdir(pageDirectory, { recursive: true });
    await writeFile(resolve(pageDirectory, "index.html"), pageDocument);
  }),
);

const blogIndexUrl = siteUrl ? new URL("blog", siteUrl).toString() : null;
const blogIndexDocument = addPageMetadata(addAbsoluteSiteReferences(baseDocument), {
  title: "Blog | Aman Mulani",
  description: "Original notes by Aman Mulani on AI agents, model behavior, backend architecture, Python, and production engineering.",
  pageUrl: blogIndexUrl,
  schema: {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Aman Mulani — AI and Engineering Notes",
    inLanguage: "en-IN",
    author: siteUrl ? { "@id": `${siteUrl.toString()}#person` } : { "@type": "Person", name: "Aman Mulani" },
    ...(blogIndexUrl ? { url: blogIndexUrl } : {})
  }
});
const blogIndexDirectory = resolve(clientOutputDirectory, "blog");
await mkdir(blogIndexDirectory, { recursive: true });
await writeFile(resolve(blogIndexDirectory, "index.html"), blogIndexDocument);

await Promise.all(
  blogPages.map(async (page) => {
    const pageDirectory = resolve(clientOutputDirectory, "blog", page.slug);
    const pageUrl = siteUrl ? new URL(`blog/${page.slug}`, siteUrl).toString() : null;
    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: page.title.replace(" | Aman Mulani", ""),
      description: page.description,
      inLanguage: "en-IN",
      author: siteUrl ? { "@id": `${siteUrl.toString()}#person` } : { "@type": "Person", name: "Aman Mulani" },
      ...(pageUrl ? { url: pageUrl, mainEntityOfPage: pageUrl } : {}),
      sameAs: page.source,
      keywords: page.keywords
    };
    const pageDocument = addPageMetadata(addAbsoluteSiteReferences(baseDocument), {
      title: page.title,
      description: page.description,
      pageUrl,
      schema
    });
    await mkdir(pageDirectory, { recursive: true });
    await writeFile(resolve(pageDirectory, "index.html"), pageDocument);
  }),
);

const notFoundDocument = homepageDocument.replace(
  'name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"',
  'name="robots" content="noindex, follow"',
);

const seoWrites = [
  copyFile(resolve(projectDirectory, "server", "index.js"), resolve(serverOutputDirectory, "index.js")),
  writeFile(resolve(clientOutputDirectory, "404.html"), notFoundDocument)
];

if (siteUrl) {
  const sitemapUrls = [
    siteUrl.toString(),
    ...caseStudyPages.map((page) => new URL(`work/${page.id}`, siteUrl).toString()),
    new URL("blog", siteUrl).toString(),
    ...blogPages.map((page) => new URL(`blog/${page.slug}`, siteUrl).toString())
  ];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
    .map((url) => `  <url><loc>${url.replaceAll("&", "&amp;")}</loc></url>`)
    .join("\n")}\n</urlset>\n`;
  const robots = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", siteUrl)}\n`;
  seoWrites.push(
    writeFile(resolve(clientOutputDirectory, "sitemap.xml"), sitemap),
    writeFile(resolve(clientOutputDirectory, "robots.txt"), robots),
  );
}

await Promise.all(seoWrites);
