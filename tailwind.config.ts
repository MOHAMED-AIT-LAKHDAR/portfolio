import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#0b1230", panel: "#111a3d", edge: "#1f2d63", accent: "#8b7cf6", glow: "#22d3ee" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], sans: ["var(--font-body)", "sans-serif"] },
      keyframes: { float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-18px)" } } },
      animation: { float: "float 9s ease-in-out infinite" },
    },
  },
  plugins: [],
};
export default config;
