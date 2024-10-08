import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#262626",
        secondary: "#141414",
        grey: "#5F5F5F",
        lightGrey: "#B3B3B3",
        lighterGrey: "#CCCCCC",
        offwhite: "#FAF7F0",
      },
    },
  },
  plugins: [],
};
export default config;
