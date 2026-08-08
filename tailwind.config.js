export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#000000',
          800: '#000000',
          700: '#0b0b0b',
          600: '#161616',
          500: '#262626',
        },
        accent: {
          400: '#C1856D',
          500: '#A8745F',
        },
        slateish: {
          100: '#f2f2f2',
          200: '#dcdcdc',
          400: '#9a9a9a',
          500: '#6f6f6f',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
}
