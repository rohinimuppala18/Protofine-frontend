/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F2F7F4',
          100: '#E2EFE7',
          200: '#C5DFD0',
          300: '#9BCAAF',
          400: '#69AD88',
          500: '#439167',
          600: '#2E744F',
          700: '#235C3E',
          800: '#1A4630',
          900: '#0F2D1F',
          950: '#081C13',
        },
        harvest: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
        earth: {
          50: '#FAF9F5',
          100: '#F4F2EB',
          200: '#E8E4D8',
          300: '#D7D1C0',
          400: '#B5ACA0',
          500: '#8C8275',
          600: '#675F55',
          700: '#4D4740',
          800: '#34302B',
          900: '#201D1A',
        },
        'warm-cream': '#FAF9F5',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft-sm': '0 1px 3px rgba(15, 45, 31, 0.05), 0 1px 2px rgba(15, 45, 31, 0.03)',
        'soft': '0 4px 20px -2px rgba(15, 45, 31, 0.06), 0 2px 6px -1px rgba(15, 45, 31, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(15, 45, 31, 0.08), 0 4px 12px -2px rgba(15, 45, 31, 0.05)',
        'soft-xl': '0 20px 40px -8px rgba(15, 45, 31, 0.12), 0 8px 16px -4px rgba(15, 45, 31, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
