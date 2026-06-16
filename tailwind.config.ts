import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0f3b57",
          blue: "#1d75bd",
          sky: "#e8f5ff",
          green: "#7ccba2",
          mint: "#ecfff5",
        },
      },
      boxShadow: {
        soft: "0 14px 40px rgba(15, 59, 87, 0.10)",
      },
      animation: {
        "fade-up": "fadeUp 700ms ease both",
        "float-in": "floatIn 900ms ease both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatIn: {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
