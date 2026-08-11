import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      colors: {
        ink: "#070807",
        carbon: "#10130f",
        panel: "#151a14",
        zincLine: "#2c332a",
        circuit: "#8be28c",
        signal: "#58d7cf",
        amberCore: "#f2b84b",
        magentaPulse: "#ff6bb5"
      },
      boxShadow: {
        circuit: "0 0 24px rgba(139, 226, 140, 0.24)",
        signal: "0 0 28px rgba(88, 215, 207, 0.22)"
      }
    }
  },
  plugins: []
} satisfies Config;
