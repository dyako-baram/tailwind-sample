module.exports = {
  purge: {
    enabled: true,
    content: ['./dist/**/*.html','./dist/**/*.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        primary:'#FF6363',
        secondery:{
          100:'#E2E2D5',
          200:'#888883'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
