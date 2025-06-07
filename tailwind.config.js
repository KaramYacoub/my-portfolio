/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        secondary: "#10B981",
        dark: "#1E293B",
        light: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        portfoliodark: {
          primary: "#3B82F6",
          secondary: "#374151",
          accent: "#A855F7",
          neutral: "#1E293B",
          "base-100": "#0F172A",
          info: "#38BDF8",
          success: "#22C55E",
          warning: "#FACC15",
          error: "#EF4444",
        },
        portfoliolight: {
          primary: "#2563EB",
          secondary: "#E5E7EB",
          accent: "#9333EA",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",
          info: "#38BDF8",
          success: "#22C55E",
          warning: "#FACC15",
          error: "#EF4444",
        },
      },
    ],
  },
};
