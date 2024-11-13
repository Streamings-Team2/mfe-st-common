module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlue: "#15ACCE",
        secondaryBlue: 'rgba(21, 172, 206, 50%)',
        primaryGreen: '#297A00',
        primaryRed: '#D00000',
        primaryYellow: '#E6B600',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
