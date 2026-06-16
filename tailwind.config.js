/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        popx: {
          purple:     '#6C25FF',
          'purple-light': '#CBACF9',
          'purple-soft':  '#EDE9FE',
          lavender:   '#D9C8FF',
          dark:       '#1D1D1D',
          grey:       '#4D4D4D',
          'grey-light': '#B3B3B3',
          'grey-bg':  '#F7F8F9',
          bubble1:    '#6C25FF',
          bubble2:    '#8B5CF6',
          bubble3:    '#A78BFA',
          bubble4:    '#C4B5FD',
          bubble5:    '#7C3AED',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float1: 'float 3.0s ease-in-out infinite',
        float2: 'float 3.6s ease-in-out infinite 0.4s',
        float3: 'float 4.2s ease-in-out infinite 0.8s',
        float4: 'float 3.8s ease-in-out infinite 1.2s',
        float5: 'float 4.5s ease-in-out infinite 0.2s',
        float6: 'float 3.3s ease-in-out infinite 1.6s',
        float7: 'float 4.0s ease-in-out infinite 0.6s',
        float8: 'float 3.7s ease-in-out infinite 1.0s',
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
