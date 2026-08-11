const HTML_ACCEPT = "text/html";
const CASE_STUDY_PATH = /^\/work\/(?:shopping-assistant|rag-assistant|chitra-ai|codo)\/?$/;

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const acceptsHtml = request.headers.get("accept")?.includes(HTML_ACCEPT);

    if (response.status !== 404 || request.method !== "GET" || !acceptsHtml) {
      return response;
    }

    const fallbackUrl = new URL("/", request.url);
    const fallbackResponse = await env.ASSETS.fetch(new Request(fallbackUrl, request));
    const isCaseStudy = CASE_STUDY_PATH.test(new URL(request.url).pathname);

    if (isCaseStudy) {
      return fallbackResponse;
    }

    const headers = new Headers(fallbackResponse.headers);
    headers.set("X-Robots-Tag", "noindex");

    return new Response(fallbackResponse.body, {
      headers,
      status: 404,
      statusText: "Not Found",
    });
  }
};
