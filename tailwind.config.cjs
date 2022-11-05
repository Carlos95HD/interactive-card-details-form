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
        'card-front': "url('./src/assets/images/bg-card-front.png')",
        'card-back': "url('./src/assets/images/bg-card-back.png')",
      }
    },
  },
  plugins: [],
}