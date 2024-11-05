/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '0.7rem',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1200px',
        xxl: '1400px',
      }
    },
    screens: {
      sm: '575px',
      md: '767px',
      lg: '991px',
      xl: '1200px',
      xxl: '1400px',
    },
    extend: {
      colors: {
        'primary': '#3b9fde',
        'secondary': '#232323',
        'gray': {
          100: '#ebebeb57',
          200: '#eae8e8',
          300: '#676767',
          400: '#f7f7f7',
        },
        'success': '#28a745',
        'danger': '#dc3545',
        'info': '#17a2b8',
        'warning': '#ffc107',
        'light': '#f8f9fa',
        'white': '#fff',
        'black': '#000',
        'transparent': 'transparent',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  plugins: [],
}

