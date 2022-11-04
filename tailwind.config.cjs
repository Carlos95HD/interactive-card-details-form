module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': "url('./src/assets/images/bg-main-desktop.png')",
      }
    },
  },
  plugins: [],
}