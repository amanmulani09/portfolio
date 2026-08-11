import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(projectDirectory, "dist", "client");
const buildEnvironment = loadEnv("production", projectDirectory, "");
const configuredSiteUrl = process.env.VITE_SITE_URL
  || buildEnvironment.VITE_SITE_URL
  || "https://aman-mulani.vercel.app/";
const expectedSiteUrl = new URL(configuredSiteUrl);
expectedSiteUrl.pathname = `${expectedSiteUrl.pathname.replace(/\/+$/, "")}/`;
expectedSiteUrl.search = "";
expectedSiteUrl.hash = "";
const expectedSite = expectedSiteUrl.toString();
const failures = [];

function getMetaContent(document, attribute, key) {
  const tag = (document.match(/<meta[\s\S]*?>/g) ?? []).find((candidate) =>
    candidate.includes(`${attribute}="${key}"`),
  );
  return tag?.match(/content="([^"]*)"/)?.[1] ?? null;
}

function getSchemas(document, filePath) {
  return [...document.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap(
    ([, value]) => {
      try {
        return [JSON.parse(value)];
      } catch (error) {
        failures.push(`${filePath}: invalid JSON-LD (${error.message})`);
        return [];
      }
    },
  );
}

function schemaNodes(schema) {
  return schema["@graph"] ?? [schema];
}

const [sitemap, robots] = await Promise.all([
  readFile(resolve(outputDirectory, "sitemap.xml"), "utf8"),
  readFile(resolve(outputDirectory, "robots.txt"), "utf8"),
]);

const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url);
if (sitemapUrls.length === 0) failures.push("sitemap.xml: contains no URLs");
if (new Set(sitemapUrls).size !== sitemapUrls.length) failures.push("sitemap.xml: contains duplicate URLs");
if (!robots.includes(`Sitemap: ${new URL("sitemap.xml", expectedSiteUrl).toString()}`)) {
  failures.push("robots.txt: missing canonical sitemap declaration");
}

for (const pageUrl of sitemapUrls) {
  if (!pageUrl.startsWith(expectedSite)) {
    failures.push(`sitemap.xml: non-canonical origin ${pageUrl}`);
    continue;
  }

  const pathname = new URL(pageUrl).pathname;
  const relativePath = pathname === "/"
    ? "index.html"
    : `${pathname.replace(/^\/+|\/+$/g, "")}/index.html`;
  const filePath = resolve(outputDirectory, relativePath);
  let document;

  try {
    document = await readFile(filePath, "utf8");
  } catch {
    failures.push(`${relativePath}: sitemap route has no generated HTML`);
    continue;
  }

  const title = document.match(/<title>(.*?)<\/title>/s)?.[1];
  const description = getMetaContent(document, "name", "description");
  const robotsValue = getMetaContent(document, "name", "robots");
  const canonical = document.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const ogUrl = getMetaContent(document, "property", "og:url");
  const ogImage = getMetaContent(document, "property", "og:image");
  const ogType = getMetaContent(document, "property", "og:type");
  const schemas = getSchemas(document, relativePath);

  if (!title) failures.push(`${relativePath}: missing title`);
  if (!description) failures.push(`${relativePath}: missing meta description`);
  if (robotsValue?.includes("noindex")) failures.push(`${relativePath}: sitemap route is noindex`);
  if (canonical !== pageUrl) failures.push(`${relativePath}: canonical does not match sitemap URL`);
  if (ogUrl !== pageUrl) failures.push(`${relativePath}: og:url does not match canonical URL`);
  if (!ogImage?.startsWith(expectedSite)) failures.push(`${relativePath}: Open Graph image is not absolute`);

  const isArticle = pathname.startsWith("/work/") || pathname.startsWith("/blog/");
  if (isArticle && ogType !== "article") failures.push(`${relativePath}: article route has wrong og:type`);

  if (pathname.startsWith("/blog/")) {
    const posting = schemas.flatMap(schemaNodes).find((node) => node["@type"] === "BlogPosting");
    if (!posting?.datePublished) failures.push(`${relativePath}: BlogPosting lacks datePublished`);
    if (!posting?.author?.url) failures.push(`${relativePath}: BlogPosting lacks author URL`);
  }
}

const notFoundDocument = await readFile(resolve(outputDirectory, "404.html"), "utf8");
if (!getMetaContent(notFoundDocument, "name", "robots")?.includes("noindex")) {
  failures.push("404.html: missing noindex");
}
if (notFoundDocument.includes('rel="canonical"')) failures.push("404.html: must not declare a canonical URL");

if (failures.length > 0) {
  throw new Error(`SEO validation failed:\n- ${failures.join("\n- ")}`);
}

console.log(`SEO validation passed for ${sitemapUrls.length} indexable routes.`);
