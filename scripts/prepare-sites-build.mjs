import { mkdir, readFile, readdir, rename, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { loadEnv } from "vite";

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const projectDirectory = resolve(scriptDirectory, "..");
const buildOutputDirectory = resolve(projectDirectory, "dist");
const clientOutputDirectory = resolve(buildOutputDirectory, "client");
const serverOutputDirectory = resolve(buildOutputDirectory, "server");
const buildEnvironment = loadEnv("production", projectDirectory, "");
const defaultSiteUrl = "https://aman-mulani.vercel.app/";
const configuredSiteUrl = process.env.VITE_SITE_URL || buildEnvironment.VITE_SITE_URL || defaultSiteUrl;

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

function addPageMetadata(sourceDocument, {
  title,
  description,
  pageUrl,
  schema,
  ogType = "website",
  publishedTime,
  articleAuthorUrl,
  articleSection
}) {
  let document = sourceDocument.replace(/<title>.*?<\/title>/is, `<title>${title}</title>`);
  document = replaceMeta(document, "name", "description", description);
  document = replaceMeta(document, "property", "og:type", ogType);
  document = replaceMeta(document, "property", "og:title", title);
  document = replaceMeta(document, "property", "og:description", description);
  document = replaceMeta(document, "name", "twitter:title", title);
  document = replaceMeta(document, "name", "twitter:description", description);

  const tags = [];
  if (pageUrl) {
    tags.push(`<link rel="canonical" href="${escapeAttribute(pageUrl)}" />`);
    tags.push(`<meta property="og:url" content="${escapeAttribute(pageUrl)}" />`);
  }
  if (publishedTime) {
    tags.push(`<meta property="article:published_time" content="${escapeAttribute(publishedTime)}" />`);
  }
  if (articleAuthorUrl) {
    tags.push(`<meta property="article:author" content="${escapeAttribute(articleAuthorUrl)}" />`);
  }
  if (articleSection) {
    tags.push(`<meta property="article:section" content="${escapeAttribute(articleSection)}" />`);
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
    .replace(/"url"\s*:\s*"\/"/g, `"url":${JSON.stringify(homepageUrl)}`)
    .replace(/"@id"\s*:\s*"#website"/g, `"@id":"${homepageUrl}#website"`)
    .replace(/"@id"\s*:\s*"#profile-page"/g, `"@id":"${homepageUrl}#profile-page"`)
    .replace(/"@id"\s*:\s*"#person"/g, `"@id":"${homepageUrl}#person"`);
}

let homepageDocument = addAbsoluteSiteReferences(baseDocument);

if (siteUrl) {
  const homepageUrl = siteUrl.toString();
  homepageDocument = addPageMetadata(homepageDocument, {
    title: "Aman Mulani | AI & Full-Stack Engineer",
    description: "Aman Mulani is an AI & Full-Stack Engineer building multi-agent systems, RAG architectures, backend services, and product interfaces.",
    pageUrl: homepageUrl
  });
}

await writeFile(sourceDocumentPath, homepageDocument);

const notFoundDocument = addPageMetadata(addAbsoluteSiteReferences(baseDocument), {
  title: "Page not found | Aman Mulani",
  description: "The requested page could not be found on Aman Mulani's portfolio.",
  pageUrl: null,
  schema: null
}).replace(
  'name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"',
  'name="robots" content="noindex, follow"',
);

const seoWrites = [
  writeFile(resolve(serverOutputDirectory, "index.js"), (await readFile(resolve(projectDirectory, "server/index.js"), "utf8")).replace('import redirects from "./redirects.json";', `const redirects = ${await readFile(resolve(projectDirectory, "src/data/redirects.json"), "utf8")};`)),
  writeFile(resolve(clientOutputDirectory, "404.html"), notFoundDocument)
];

if (siteUrl) {
  const sitemapUrls = [siteUrl.toString()];
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
