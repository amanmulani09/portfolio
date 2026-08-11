const HTML_ACCEPT = "text/html";
const STATIC_PAGE_PATH = /^\/(?:work\/(?:chitra-ai|rag-architectures|codo|pgkhata|shodh)|blog(?:\/(?:llms-align-more-than-they-decide|tdd-for-ai-agents|inside-an-ai-coding-tool|when-sse-beats-websockets|isolating-python-dependency-conflicts))?)\/?$/;

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes(HTML_ACCEPT);

    if (response.status !== 404 || request.method !== "GET" || !acceptsHtml) {
      return response;
    }

    const fallbackUrl = new URL("/", request.url);
    const isStaticPage = STATIC_PAGE_PATH.test(new URL(request.url).pathname);

    if (isStaticPage) {
      const staticPageUrl = new URL(request.url);
      staticPageUrl.pathname = `${staticPageUrl.pathname.replace(/\/$/, "")}/index.html`;
      const staticPageResponse = await env.ASSETS.fetch(new Request(staticPageUrl, request));
      if (staticPageResponse.status !== 404) return staticPageResponse;
    }

    const fallbackResponse = await env.ASSETS.fetch(new Request(fallbackUrl, request));

    const headers = new Headers(fallbackResponse.headers);
    headers.set("X-Robots-Tag", "noindex");

    return new Response(fallbackResponse.body, {
      headers,
      status: 404,
      statusText: "Not Found",
    });
  }
};
