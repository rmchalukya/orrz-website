import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the Orrizonte logo (sunrise over water)
        orange: {
          DEFAULT: "#F47A21",
          50: "#FEF3EA",
          100: "#FDE2CC",
          500: "#F47A21",
          600: "#E0670F",
          700: "#B85209",
        },
        sky: {
          DEFAULT: "#7EC8E3",
          50: "#EEF8FC",
          100: "#D4EDF7",
          500: "#7EC8E3",
          600: "#4FB0D6",
        },
        ink: {
          DEFAULT: "#111111",
          soft: "#3A3A3A",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(-22px) translateX(12px)" },
        },
        "float-alt": {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "50%": { transform: "translateY(20px) translateX(-14px)" },
        },
        shine: {
          to: { backgroundPosition: "200% center" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        float: "float 9s ease-in-out infinite",
        "float-alt": "float-alt 12s ease-in-out infinite",
        shine: "shine 6s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
