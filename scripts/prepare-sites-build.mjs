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
    id: "thg-commerce",
    title: "THG Commerce Storefront Case Study | Aman Mulani",
    description: "Résumé-backed storefront, RAG knowledge retrieval, release validation, and production engineering work within THG Ingenuity's public commerce platform context.",
    ownership: "contributor",
    sources: ["https://www.thgingenuity.com/commerce"],
    keywords: ["THG Commerce", "ecommerce engineering", "RAG", "release validation"]
  },
  {
    id: "push-provisioning",
    title: "Razorpay Push Provisioning Case Study | Aman Mulani",
    description: "Config-driven bank card activation, token provisioning, lifecycle services, and observability work within Razorpay's public Push Provisioning and TokenHQ context.",
    ownership: "contributor",
    sources: [
      "https://razorpay.com/blog/push-provisioning-a-new-era-in-card-tokenization/",
      "https://razorpay.com/blog/razorpay-token-hq-card-tokenisation-solution/"
    ],
    keywords: ["Push Provisioning", "card tokenization", "Razorpay", "FastAPI"]
  },
  {
    id: "hmx-interactive",
    title: "HMX Interactive 3D Commerce Case Study | Aman Mulani",
    description: "Mobile-first React, TypeScript, Canvas, and WebGL product experiences represented by HMX Media's public Sharp Kitchen and Royal Enfield case studies.",
    ownership: "contributor",
    sources: [
      "https://www.hmxmedia.com/case-studies/sharp-kitchen/",
      "https://www.hmxmedia.com/case-studies/royal-enfield/"
    ],
    keywords: ["WebGL", "3D configurator", "React", "HMX Media"]
  },
  {
    id: "chitra-ai",
    title: "Chitra.ai Multi-Agent System Case Study | Aman Mulani",
    description: "Multi-agent video and audio analysis pipeline built with FastAPI, GPT-4o, Whisper, Pydantic, Docker, and staged CI/CD.",
    ownership: "creator",
    sources: ["https://github.com/amanmulani09/chitra.ai"],
    keywords: ["multi-agent systems", "video analysis", "FastAPI", "GPT-4o"]
  },
  {
    id: "rag-architectures",
    title: "RAG Architecture Lab Case Study | Aman Mulani",
    description: "Public RAG implementation lab covering hybrid search, reranking, injection boundaries, vector repositories, and layered service design.",
    ownership: "creator",
    sources: ["https://github.com/amanmulani09/RAG"],
    keywords: ["RAG architecture", "hybrid search", "reranking", "retrieval engineering"]
  },
  {
    id: "codo",
    title: "Codo AI Code Review Case Study | Aman Mulani",
    description: "GitHub App that reviews pull requests, posts focused inline findings, summarizes risk, and leaves final code changes under human control.",
    ownership: "creator",
    sources: ["https://github.com/amanmulani09/codo"],
    keywords: ["AI code review", "GitHub App", "Claude", "application security"]
  }
];

const blogPages = [
  {
    slug: "react-loop-behind-ai-agents",
    title: "The Loop Behind Practical AI Agents | Aman Mulani",
    description: "How ReAct agents reason, call tools, observe results, and repeat within explicit permission and stopping boundaries.",
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7490428946996535296/",
    keywords: ["ReAct agents", "tool calling", "AI agents", "agent architecture"]
  },
  {
    slug: "reliable-rag-starts-outside-the-model",
    title: "Reliable RAG Starts Outside the Model | Aman Mulani",
    description: "Why retrieval quality, embeddings, chunking, context management, and visible evidence determine whether a RAG system is trustworthy.",
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7467431422002282496/",
    keywords: ["RAG", "retrieval engineering", "embeddings", "grounded AI"]
  },
  {
    slug: "frontend-production-checklist",
    title: "A Production Checklist for AI-Speed Frontend Work | Aman Mulani",
    description: "A practical frontend release checklist covering configuration, secrets, performance, accessibility, analytics, feature flags, and fallbacks.",
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7427354072929910784/",
    keywords: ["frontend production", "release checklist", "web performance", "accessibility"]
  },
  {
    slug: "redis-caching-system-design",
    title: "Redis Caching as a System Design Choice | Aman Mulani",
    description: "Server-side Redis caching trade-offs across database load, latency, infrastructure cost, invalidation, authorization, and resilience.",
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7426844680199229440/",
    keywords: ["Redis", "server-side caching", "system design", "backend performance"]
  },
  {
    slug: "when-sse-beats-websockets",
    title: "When Server-Sent Events Beat WebSockets | Aman Mulani",
    description: "Choosing Server-Sent Events for one-way progress, logs, notifications, and AI streaming without unnecessary WebSocket complexity.",
    source: "https://www.linkedin.com/feed/update/urn:li:activity:7424144231608352768/",
    keywords: ["Server-Sent Events", "WebSockets", "HTTP streaming", "backend architecture"]
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
      author: siteUrl
        ? { "@id": `${siteUrl.toString()}#person` }
        : { "@type": "Person", name: "Aman Mulani" },
      ...(page.ownership === "creator"
        ? {
            creator: siteUrl
              ? { "@id": `${siteUrl.toString()}#person` }
              : { "@type": "Person", name: "Aman Mulani" }
          }
        : {}),
      ...(pageUrl ? { url: pageUrl } : {}),
      sameAs: page.sources,
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
  description: "Expanded notes from Aman Mulani's LinkedIn posts on AI agents, RAG, frontend releases, Redis caching, and backend streaming.",
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
