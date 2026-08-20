/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#06090E',
          card: '#0D131F',
          elevated: '#131B2E',
          subtle: '#090E17',
          surface: '#111827',
          glass: 'rgba(13, 19, 31, 0.75)'
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          strong: 'rgba(255, 255, 255, 0.15)',
          glow: 'rgba(56, 189, 248, 0.35)'
        },
        brand: {
          50: '#F0F7FF',
          100: '#E0EFFF',
          200: '#BAE0FF',
          300: '#7CC4FA',
          400: '#38BDF8',
          500: '#0EA5E9',
          600: '#0284C7',
          700: '#0369A1',
          800: '#075985',
          900: '#0C4A6E',
          electric: '#2563EB',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          emerald: '#10B981',
          amber: '#F59E0B'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)",
        'mesh-gradient': "radial-gradient(at 0% 0%, rgba(14, 165, 233, 0.15) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(99, 102, 241, 0.15) 0px, transparent 50%)",
        'radial-hero': "radial-gradient(circle 800px at 50% -100px, rgba(14, 165, 233, 0.18), transparent 70%)"
      },
      boxShadow: {
        'neon-blue': '0 0 25px -5px rgba(14, 165, 233, 0.3)',
        'neon-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.35)',
        'neon-indigo': '0 0 30px -5px rgba(99, 102, 241, 0.35)',
        'subtle-glow': '0 4px 20px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.07)'
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.02)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
}
