import redirects from "./redirects.json";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, "") || "/";
    const redirect = redirects.find((route) => route.source === pathname);
    if (redirect && (request.method === "GET" || request.method === "HEAD")) {
      return Response.redirect(new URL(redirect.destination, url), 308);
    }
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || !["GET", "HEAD"].includes(request.method) || !request.headers.get("accept")?.includes("text/html")) return response;
    const fallback = await env.ASSETS.fetch(new Request(new URL("/404.html", url), request));
    const headers = new Headers(fallback.headers);
    headers.set("X-Robots-Tag", "noindex");
    return new Response(request.method === "HEAD" ? null : fallback.body, { headers, status: 404, statusText: "Not Found" });
  },
};
