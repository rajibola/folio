/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "fs-1": "clamp(1.35rem, calc(1.3rem + 0.26vw), 1.5rem)",
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.76, 0, 0.24, 1)",
      },

      colors: {
        black: "#000",
        white: "#fff",
        cream: "rgb(248 246 239)",
        accent: {
          light: "#86608e",
          dark: "#140F14",
        },
      },
    },
  },
  plugins: [],
};
