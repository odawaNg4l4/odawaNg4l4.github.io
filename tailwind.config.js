export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#06100c',
          800: '#0a0f0d',
          700: '#101816',
          600: '#16211e',
          500: '#1e2b27',
        },
        mint: {
          400: '#7ba894',
          500: '#688f7d',
        },
        slateish: {
          100: '#e9f2ee',
          200: '#d6e2dc',
          400: '#8fa39b',
          500: '#6d7f78',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
