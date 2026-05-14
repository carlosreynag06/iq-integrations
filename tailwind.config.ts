import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--text-primary)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        "accent-cyan": "var(--accent-cyan)",
        "accent-electric": "var(--accent-electric)",
        "accent-lime": "var(--accent-lime)",
      },
      fontFamily: {
        sans: ["var(--font-display)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
};

export default config;
