import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

function inlineCriticalStyles(): Plugin {
  return {
    name: "inline-critical-styles",
    apply: "build",
    enforce: "post",
    generateBundle(_options, bundle) {
      const outputFiles = Object.values(bundle);
      const document = outputFiles.find((file) => file.type === "asset" && file.fileName === "index.html");
      const stylesheet = outputFiles.find((file) => file.type === "asset" && file.fileName.endsWith(".css"));

      if (!document || document.type !== "asset" || typeof document.source !== "string") return;
      if (!stylesheet || stylesheet.type !== "asset" || typeof stylesheet.source !== "string") return;

      document.source = document.source.replace(
        /<link rel="stylesheet" crossorigin href="\/assets\/[^\"]+\.css">/,
        `<style>${stylesheet.source}</style>`
      );
      delete bundle[stylesheet.fileName];
    }
  };
}

export default defineConfig({
  plugins: [react(), inlineCriticalStyles()],
  build: {
    target: "es2020",
    sourcemap: true
  }
});
