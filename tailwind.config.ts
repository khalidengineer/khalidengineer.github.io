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
        background: "#070706",
        "bg-dark": "#070706",
        "bg-darker": "#050504",
        "bg-elevated": "#0D0D0B",
        surface: {
          DEFAULT: "#11110E",
          primary: "#11110E",
          secondary: "#141410",
          card: "#12120F",
          elevated: "#181812",
          hover: "#1A1A14",
        },
        gold: {
          light: "#FFE08A",
          bright: "#FFC95A",
          DEFAULT: "#F4B83F",
          primary: "#F4B83F",
          dark: "#9C6B18",
          amber: "#D99B26",
          glow: "rgba(244, 184, 63, 0.15)",
        },
        text: {
          main: "#F5F5F2",
          secondary: "#A7A79E",
          muted: "#73736C",
        },
        success: "#73D7A1",
        border: {
          subtle: "rgba(255, 255, 255, 0.06)",
          DEFAULT: "rgba(255, 255, 255, 0.09)",
          gold: "rgba(244, 184, 63, 0.25)",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
        signature: ["'Brush Script MT'", "cursive", "sans-serif"],
      },
      maxWidth: {
        container: "1220px",
      },
      boxShadow: {
        card: "0 10px 40px -10px rgba(0, 0, 0, 0.5)",
        "card-hover": "0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 30px rgba(244, 184, 63, 0.08)",
        "gold-glow": "0 0 25px rgba(244, 184, 63, 0.35)",
        "gold-glow-lg": "0 0 45px rgba(244, 184, 63, 0.45)",
      },
      animation: {
        "spin-slow": "spin 25s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
