import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: "0.0625rem",
      },
      fontFamily: {
        body: ["tenon", "sans-serif"],
      },
      colors: {
        "my-black": "#212124",
        "my-gray": "#828282",
        "my-light-gray": "#F0F2FF",
        "my-super-light-gray": "#FAFBFF",
      },
    },
  },
  plugins: [],
};
export default config;
