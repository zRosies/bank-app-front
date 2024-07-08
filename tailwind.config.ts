import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#933EC8",
        light: "#F1F1FF",
      },
      animation: {
        loading: "loading .8s linear infinite",
        up: "up 0.2s linear ",
      },
      keyframes: {
        loading: {
          "0%": {
            transform: "rotate(0)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        up: {
          "0%": {
            top: "0%",
          },
          "100%": {
            top: "50%",
          },
        },
      },
    },
  },

  plugins: [],
};
export default config;
