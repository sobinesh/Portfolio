import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        surface: "#141414",
        border: "#222",
        "text-main": "#e8e3d9",
        muted: "#6b6860",
        accent: "#c8f03c",
        accent2: "#ff6b35",
      },
      fontFamily: {
        mono: ["DM Mono", "monospace"],
        serif: ["Fraunces", "serif"],
        sans: ["Syne", "sans-serif"],
      },
      animation: {
        pulse: "pulse 2s infinite",
        blink: "blink 1s infinite",
        ticker: "ticker 25s linear infinite",
        fadeUp: "fadeUp 0.6s forwards",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
