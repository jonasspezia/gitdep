/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        metallic: {
          primary: '#8FA6B2',
          secondary: '#C4D1D6',
        },
        dark: {
          900: '#0a0a0a',
          800: '#1a1a1a',
        }
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(143, 166, 178, 0.18)',
      },
      backdropBlur: {
        glass: '12px',
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
