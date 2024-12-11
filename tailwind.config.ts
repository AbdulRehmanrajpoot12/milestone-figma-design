import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        integral: ["Integral CF Bold", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"]
      }
      },
      screens:{
        "md": "390px",
        "lg": "1440px",
        "xl": "1920px"
      },
  },
  plugins: [],
};
export default config;
