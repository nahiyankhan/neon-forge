import type { Config } from "tailwindcss";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--theme-bg) / <alpha-value>)",

        textInverse: "hsl(var(--text-inverse) / <alpha-value>)",
        textProminent: "hsl(var(--text-prominent) / <alpha-value>)",
        textStandard: "hsl(var(--text-standard) / <alpha-value>)",
        textSubtle: "hsl(var(--text-subtle) / <alpha-value>)",

        divider: "hsl(var(--border-divider) / <alpha-value>)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
