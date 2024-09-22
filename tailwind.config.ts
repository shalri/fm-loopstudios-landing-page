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
        "ls-dark-gray": "var(--dark-gray)",
        "ls-very-dark-gray": "var(--very-dark-gray)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        body: ["var(--body)"],
        heading: ["var(--heading)"],
      },
    },
  },
  plugins: [],
};
export default config;
