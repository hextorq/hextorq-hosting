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
          DEFAULT: '#0d1117',
          card: '#161b22',
          elevated: '#1c212c',
          subtle: '#090d13',
          surface: '#131823',
          glass: 'rgba(22, 27, 34, 0.75)'
        },
        foreground: {
          DEFAULT: '#e7e4de',
          muted: '#99a0ad',
          subtle: '#6e7787'
        },
        card: {
          DEFAULT: '#161b22',
          foreground: '#e7e4de',
          elevated: '#1a1f29'
        },
        muted: {
          DEFAULT: '#232834',
          foreground: '#99a0ad'
        },
        border: {
          DEFAULT: 'rgba(231, 228, 221, 0.09)',
          subtle: 'rgba(231, 228, 221, 0.06)',
          strong: 'rgba(231, 228, 221, 0.16)',
          glow: 'rgba(58, 129, 246, 0.35)'
        },
        primary: {
          DEFAULT: '#edeae3',
          foreground: '#0d1117'
        },
        secondary: {
          DEFAULT: '#2e3440',
          foreground: '#e7e4de'
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
          electric: '#1C4EFF',
          cyan: '#06B6D4',
          indigo: '#6366F1',
          purple: '#AC24FF',
          orange: '#FE881B',
          emerald: '#00BB7F',
          amber: '#F99C00'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      },
      backgroundImage: {
        'dot-grid': "radial-gradient(circle at 1px 1px, rgba(231, 228, 221, 0.09) 1px, transparent 0)",
        'mesh-gradient': "radial-gradient(ellipse 55% 45% at 50% 0%, rgba(76, 130, 198, 0.12), transparent 70%), radial-gradient(ellipse 75% 50% at 50% 35%, rgba(180, 162, 129, 0.08), transparent 75%)",
        'radial-hero': "radial-gradient(circle 800px at 50% -100px, rgba(58, 129, 246, 0.15), transparent 70%)"
      },
      boxShadow: {
        'elevated': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.06), 0 24px 60px -30px rgba(0, 0, 0, 0.6), 0 8px 24px -18px rgba(0, 0, 0, 0.4)',
        'soft-card': '0 3px 9.1px rgba(0, 0, 0, 0.2), 0 1px 29px rgba(0, 0, 0, 0.35)',
        'neon-blue': '0 0 25px -5px rgba(28, 78, 255, 0.3)',
        'neon-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.35)'
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'ambient-drift': 'ambientDrift 25s ease-in-out infinite alternate'
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.75', transform: 'scale(1.02)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        ambientDrift: {
          '0%': { transform: 'scale(1) translate(0px, 0px)' },
          '50%': { transform: 'scale(1.05) translate(15px, -10px)' },
          '100%': { transform: 'scale(0.98) translate(-10px, 15px)' }
        }
      }
    },
  },
  plugins: [],
}
