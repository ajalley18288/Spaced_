module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    color: {
      'darkblue':'#08083A'
    },
    extend: {
      fontFamily: {
        aquire: ['aquire']
      },
    },
  },
  plugins: [require("daisyui")],
}
