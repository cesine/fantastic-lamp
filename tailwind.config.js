module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-spring-green': '#1E6E26',
        'dark-goldenrod': '#B58B2A',
        'federal-blue': '#1e293b',
        'federal-blue-200': '#2b3650',
        'federal-blue-300': '#384265',
        'federal-blue-400': '#45547a',
        'federal-blue-500': '#62728f',
        'federal-blue-600': '#62728f',
        'federal-blue-700': '#7f90a4',
        'federal-blue-800': '#9caeb9',
        'federal-blue-900': '#9caeb9',
        claret: '#832232',
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
