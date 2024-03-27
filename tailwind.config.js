module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    

    extend: {
      
      colors: {
        'dark-spring-green': '#1E6E26',
        "dark-goldenrod": '#B58B2A',
        'federal-blue': '#080547',
        'claret': '#832232',
      },


      screens: {
        short: { raw: '(max-height: 650px)' },
        xshort: { raw: '(max-height: 560px)' },
        xxshort: { raw: '(max-height: 490px)' },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
