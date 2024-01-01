import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#171718",
        secondary: "#050609",
        cta: "#6C3483",
      },
    },
  },
  plugins: [],
} satisfies Config;
