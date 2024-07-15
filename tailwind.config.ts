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
        secondary: "#7222A3",
      },
      animation: {
        loading: "loading .8s linear infinite",
        left: "left .1s ease-in ",
        skelAnimation: "skelAnimation 1s infinite ",
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
        left: {
          "0%": {
            left: "30%",
          },
          "100%": {
            left: "50%",
          },
        },
        right: {
          "0%": {
            left: "80%",
          },
          "100%": {
            left: "50%",
          },
        },
        skelAnimation: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
      },
    },
  },

  plugins: [],
};
export default config;
