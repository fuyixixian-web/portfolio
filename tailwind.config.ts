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
        cream: "#F5F5F0",
        softGray: "#E8E8E8",
        neon: {
          yellow: "#D4FF00",
          green: "#39FF14",
          blue: "#00D9FF",
          pink: "#FF10F0",
        },
        sky: {
          light: "#87CEEB",
          DEFAULT: "#5B9BD5",
        },
        grass: {
          light: "#90EE90",
          DEFAULT: "#7CB342",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
