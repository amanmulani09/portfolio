const HTML_ACCEPT = "text/html";
const STATIC_PAGE_PATH = /^\/(?:work\/(?:thg-commerce|push-provisioning|hmx-interactive|chitra-ai|rag-architectures|codo)|blog(?:\/(?:react-loop-behind-ai-agents|reliable-rag-starts-outside-the-model|frontend-production-checklist|redis-caching-system-design|when-sse-beats-websockets))?)\/?$/;

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes(HTML_ACCEPT);

    if (response.status !== 404 || request.method !== "GET" || !acceptsHtml) {
      return response;
    }

    const fallbackUrl = new URL("/404.html", request.url);
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
