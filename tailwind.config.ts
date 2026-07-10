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
        // === Brand: Hijau Islami ===
        primary: {
          50: "#f0faf5",
          100: "#d4f2e5",
          200: "#a9e4cb",
          300: "#6fcfa0",
          400: "#3bb878",
          500: "#1fa05c",
          600: "#178249",
          700: "#1a6b44",
          800: "#155436",
          900: "#0d3321",
          950: "#071a11",
        },
        // === Aksen: Emas Islami ===
        gold: {
          50: "#fefce8",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#f9c12d",
          500: "#d4af37",
          600: "#b8962e",
          700: "#9a7a24",
          800: "#7c6019",
          900: "#5f480f",
        },
        // === Neutral ===
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, var(--tw-gradient-stops))",
        "hero-pattern":
          "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231a6b44' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "brand-sm": "0 2px 8px 0 rgba(26, 107, 68, 0.12)",
        "brand-md": "0 4px 20px 0 rgba(26, 107, 68, 0.18)",
        "brand-lg": "0 8px 40px 0 rgba(26, 107, 68, 0.24)",
        "gold-sm": "0 2px 8px 0 rgba(212, 175, 55, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
