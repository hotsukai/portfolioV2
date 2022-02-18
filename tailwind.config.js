module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDuration: {
        2000: "2000ms",
      },
      fontSize: {
        xl: "1.25rem",
        xxl: "1.5rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
