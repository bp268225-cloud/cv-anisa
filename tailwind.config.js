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
        navy: {
          DEFAULT: '#102A56',
          dark: '#0A1B38',
          light: '#1B3C73'
        },
        royal: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          light: '#3B82F6'
        },
        softblue: '#DBEAFE',
        skyblue: '#38BDF8',
        offwhite: '#F8FAFC',
        darktext: '#172033',
        // Lily Pink Theme
        lily: {
          50: '#FDF2F8',
          100: '#FCE7F3',
          200: '#FBCFE8',
          300: '#F472B6',
          400: '#E11D48',
          500: '#DB2777',
          600: '#BE185D',
          700: '#9D174D',
          800: '#831843',
          900: '#500724',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(16, 42, 86, 0.06), 0 4px 10px -3px rgba(16, 42, 86, 0.04)',
        'soft-hover': '0 20px 40px -10px rgba(16, 42, 86, 0.12), 0 8px 16px -4px rgba(16, 42, 86, 0.06)',
        'lily-soft': '0 10px 30px -5px rgba(190, 24, 93, 0.08), 0 4px 10px -3px rgba(190, 24, 93, 0.05)',
      }
    },
  },
  plugins: [],
}
