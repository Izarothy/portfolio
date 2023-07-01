import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#171718",
        secondary: "#1E2A38",
      },
    },
  },
  plugins: [],
} satisfies Config;
