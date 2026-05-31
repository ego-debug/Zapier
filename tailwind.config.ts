import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Page background (warm dark)
        cream: {
          DEFAULT: "#141110",
          50: "#0C0A09",
          100: "#141110",
          200: "#1A1714",
          300: "#221E1A",
        },
        // Primary text (bone, light on dark)
        ink: {
          DEFAULT: "#EDE7DA",
          900: "#FAF6E8",
          800: "#EDE7DA",
          700: "#D5CCB9",
          600: "#A89F92",
          500: "#7C7468",
          400: "#5E5852",
          300: "#3E3933",
        },
        // Elevated dark panel (callout surface)
        forest: {
          DEFAULT: "#1F1B16",
          900: "#0E0C0A",
          800: "#15120F",
          700: "#1A1714",
          600: "#1F1B16",
          500: "#2A2520",
        },
        // Subtle accent (warm bone, not gold/green)
        accent: {
          DEFAULT: "#BFB39E",
          gold: "#BFB39E",
          warm: "#D4C9B0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        // Headline face — kept as `pixel` class for compat. Now JetBrains Mono.
        pixel: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out both",
        "slide-up": "slideUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
