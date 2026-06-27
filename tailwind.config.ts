import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: "#080B14",
          card: "#0F1629",
          elevated: "#151D35",
        },
        brand: {
          blue: "#3B5BFF",
          violet: "#7B3FE4",
          cyan: "#00E5FF",
          "blue-light": "#6B84FF",
        },
        text: {
          primary: "#F0F4FF",
          secondary: "#8B97C4",
          muted: "#4A5478",
        },
        border: {
          DEFAULT: "#1E2A4A",
          subtle: "#141D33",
        },
        success: "#00D395",
        danger: "#FF4757",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-brand":
          "linear-gradient(135deg, #3B5BFF 0%, #7B3FE4 100%)",
        "gradient-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,91,255,0.25) 0%, transparent 70%)",
        "gradient-card":
          "linear-gradient(145deg, rgba(59,91,255,0.08) 0%, rgba(123,63,228,0.04) 100%)",
        "gradient-hero":
          "radial-gradient(ellipse 100% 80% at 60% -10%, rgba(59,91,255,0.3) 0%, rgba(123,63,228,0.15) 40%, transparent 70%)",
      },
      animation: {
        ticker: "ticker 30s linear infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite 1s",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-16px) rotate(1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 40px rgba(59,91,255,0.35)",
        "glow-violet": "0 0 40px rgba(123,63,228,0.3)",
        card: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)",
        "card-hover":
          "0 8px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
