  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'beige-50': '#F7F2E7',
          'beige-100': '#E6D8C6',
          'beige-200': '#E5D4BE',
          'beige-700': '#746D5F',
          'beige-800': '#5A5247',
        },
        fontFamily: {
          'times': ['"Times New Roman"', 'serif'],
          'arial': ['Arial', 'sans-serif'],
          'roboto': ['Roboto', 'sans-serif'],
          'open-sans': ['Open Sans', 'sans-serif'],
          'lora': ['Lora', 'serif'],
          'mono': ['"IBM Plex Mono"', 'monospace'],
        },
      },
    },
    plugins: [],
  }
