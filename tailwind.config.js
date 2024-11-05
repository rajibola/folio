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
        black: "#19191a",
        white: "#fbfbfb",
        accent: {
          light: "#86608e",
          dark: "#140F14",
        },

        primary: "#9147ff",
        "primary-content": "#ffffff",
        "primary-dark": "#7314ff",
        "primary-light": "#af7aff",

        secondary: "#ff4759",
        "secondary-content": "#470007",
        "secondary-dark": "#ff142b",
        "secondary-light": "#ff7a87",

        background: "#19191a",
        foreground: "#262527",
        border: "#3f3e41",

        copy: "#fbfbfb",
        "copy-light": "#d9d8da",
        "copy-lighter": "#a5a4a8",

        success: "#47ff47",
        warning: "#ffff47",
        error: "#ff4747",

        "success-content": "#004700",
        "warning-content": "#474700",
        "error-content": "#ffffff",
      },
    },
  },
  plugins: [],
};
