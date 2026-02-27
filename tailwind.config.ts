import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        dira: {
          red: "#d5202a",
          yellow: "#f1c730",
          cream: "#fff9eb",
          dark: "#111111"
        }
      }
    }
  },
  plugins: []
};

export default config;
