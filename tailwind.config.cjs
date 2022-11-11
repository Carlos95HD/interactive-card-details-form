module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-desktop': "url('./src/assets/images/bg-main-desktop.png')",
        'main-mobile': "url('./src/assets/images/bg-main-mobile.png')",
      }
    },
  },
  plugins: [],
}