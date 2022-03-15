module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
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
      width: {
        128: "32rem",
        256: "64rem",
      },
      spacing: { "screen-mobile": "calc(var(--vh) * 100)" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
