module.exports = {
  mode: "jit",
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px"
    },
    fontFamily: {
      sans: ["halyard-display", "sans-serif"],
      serif: ["ivypresto-display", "serif"]
    },
    extend: {
      colors: {
        "apple-green": "#B6DB79",
        "dusty-orange": "#E16C00",
        "electric-pink": "#FF67D9"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
