module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor:{
        'textPrimary':'#e21960',
      },
      backgroundColor:{
        'bgPrimary':'#e21960',
      },
      borderColor:{
        'borderPrimary':'#e21960'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
