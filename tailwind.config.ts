import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "rgb(var(--primary-rgb) / <alpha-value>)",
          foreground: "var(--primary-foreground)",
          muted: "var(--primary-muted)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface-rgb) / <alpha-value>)",
          elevated: "var(--surface-elevated)",
          border: "var(--border)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted-rgb) / <alpha-value>)",
          foreground: "var(--muted-foreground)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["3.75rem", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-md": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        soft: "0 2px 20px -2px rgba(0, 0, 0, 0.06)",
        card: "0 4px 24px -4px rgba(0, 0, 0, 0.08)",
        glow: "0 0 40px -10px var(--primary)",
        "glow-lg": "0 0 80px -20px var(--primary)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, var(--primary-muted) 0%, transparent 50%, var(--accent) 100%)",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, var(--primary-muted) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(99, 102, 241, 0.15) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(139, 92, 246, 0.1) 0px, transparent 50%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
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
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
} satisfies Config;
