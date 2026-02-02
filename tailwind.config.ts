import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f4f7fc',
          100: '#e6eef9',
          200: '#ccdff3',
          300: '#b3cfec',
          400: '#9abfe4',
          500: '#91adda', // your target color
          600: '#7898c9',
          700: '#5f7fb3',
          800: '#4a6390',
          900: '#364a6d',
        },
        accent: {
          50:  '#ffffff',
          100: '#fafbfc',
          200: '#f6f7f8',
          300: '#f0f2f3',
          400: '#ebedef',
          500: '#f2f4f5', // your target
          600: '#dde1e4',
          700: '#c7ccd1',
          800: '#a5abb1',
          900: '#7a8087',
        },
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(96, 165, 250, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(96, 165, 250, 0.8), 0 0 30px rgba(96, 165, 250, 0.6)' },
        },
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config


