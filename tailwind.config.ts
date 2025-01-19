import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [
    require("tailwindcss-animate"),
    plugin(({ addComponents }) => {
      addComponents({
        ".animated-border": {
          "@apply [&::after]:absolute [&::before]:z-[-1] [&::after]:z-[-1] [&::before]:absolute [&::after]:bottom-0 [&::after]:left-0 [&::after]:h-[1px] [&::after]:w-full [&::after]:animate-[borderForward_.5s_cubic-bezier(0.55,0,1,0.45)_forwards] [&::after]:bg-divider [&::after]:content-[''] [&::before]:left-0 [&::before]:top-[0px] [&::before]:h-[1px] [&::before]:w-full [&::before]:animate-[borderForward_.5s_cubic-bezier(0.55,0,1,0.45)_forwards] [&::before]:bg-divider [&::before]:content-['']":
            {},
        },
      });
    }),
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
      keyframes: {
        dash: {
          "0%": {
            strokeDashoffset: "2000",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "70%": {
            strokeDashoffset: "0",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "85%": {
            strokeDashoffset: "0",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "90%": {
            strokeDashoffset: "0",
            stroke: "transparent",
            color: "hsl(var(--text-standard) / 1)",
            opacity: "1",
          },
          "92.5%": {
            strokeDashoffset: "0",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "95%": {
            strokeDashoffset: "0",
            stroke: "hsl(var(--border-divider) / 1)",
            color: "transparent",
            opacity: "1",
          },
          "100%": {
            strokeDashoffset: "0",
            stroke: "transparent",
            color: "hsl(var(--text-standard) / 1)",
            opacity: "1",
          },
        },
        borderForward: {
          "0%": {
            width: "0px",
          },
          "100%": {
            width: "100%",
          },
        },
      },
    },
  },
} satisfies Config;
