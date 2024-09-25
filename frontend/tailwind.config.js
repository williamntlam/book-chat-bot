// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        scrolling: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Moves entire width of two sets
        },
      },
      animation: {
        scrolling: "scrolling 20s linear infinite", // Adjusted to match the content width
      },
    },
  },
  plugins: [],
};
