/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fdf2e7', 100: '#fbe5cf', 200: '#f7cba0', 300: '#f3b270',
          400: '#ef9841', 500: '#e49239', 600: '#d67d24', 700: '#b8681f',
          800: '#9b531a', 900: '#7d3e15',
        },
        'saffron-light': '#e49239',
        'saffron-dark': '#d67d24',
        blue: {
          50: '#f0f7ff', 100: '#e1effe', 200: '#c3e0fd', 300: '#a5d0fb',
          400: '#86c1fa', 500: '#03345f', 600: '#022d53', 700: '#022647',
          800: '#01203b', 900: '#01192f',
        },
        'custom-blue': { light: '#f0f7ff', DEFAULT: '#03345f', dark: '#022647' },
      },
    },
  },
  plugins: [],
}

