import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";

const redirects = JSON.parse(await readFile(new URL("../src/data/redirects.json", import.meta.url), "utf8"));
const workerSource = (await readFile(new URL("../server/index.js", import.meta.url), "utf8"))
  .replace('import redirects from "./redirects.json";', `const redirects = ${JSON.stringify(redirects)};`);
const { default: worker } = await import(`data:text/javascript;base64,${Buffer.from(workerSource).toString("base64")}`);

test("every legacy route redirects consistently on Sites and Vercel", async () => {
  const config = JSON.parse(await readFile(new URL("../vercel.json", import.meta.url), "utf8"));
  assert.deepEqual(config.redirects.map(({ source, destination }) => ({ source, destination })), redirects);
  for (const route of redirects) {
    for (const suffix of ["", "/"]) {
      const response = await worker.fetch(new Request(`https://portfolio.test${route.source}${suffix}`), {});
      assert.equal(response.status, 308);
      assert.equal(response.headers.get("location"), new URL(route.destination, "https://portfolio.test").href);
    }
  }
});

test("unknown HTML routes return a real 404; missing assets stay 404", async () => {
  const env = { ASSETS: { fetch: async (request) => new URL(request.url).pathname === "/404.html" ? new Response("Not found page") : new Response("missing", { status: 404 }) } };
  const html = await worker.fetch(new Request("https://portfolio.test/no-such-page", { headers: { accept: "text/html" } }), env);
  assert.equal(html.status, 404);
  assert.equal(html.headers.get("x-robots-tag"), "noindex");
  assert.equal(await html.text(), "Not found page");
  const asset = await worker.fetch(new Request("https://portfolio.test/missing.png"), env);
  assert.equal(asset.status, 404);
  assert.equal(await asset.text(), "missing");
});
