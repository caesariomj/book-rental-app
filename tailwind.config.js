/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cerulean-blue': {
          '50': '#ecf9ff',
          '100': '#d4f0ff',
          '200': '#b2e7ff',
          '300': '#7ddaff',
          '400': '#40c2ff',
          '500': '#14a0ff',
          '600': '#007eff',
          '700': '#0066ff',
          '800': '#0052cd',
          '900': '#0848a0',
          '950': '#0a2c61',
        },
        'alabaster': {
          '50': '#f8f9fa',
          '100': '#eceff2',
          '200': '#d6dce1',
          '300': '#b2bec7',
          '400': '#889ba8',
          '500': '#697e8e',
          '600': '#546775',
          '700': '#45535f',
          '800': '#3c4750',
          '900': '#353d45',
          '950': '#23292e',
        },
        'dark': '#001f3f',          
      }
    },
  },
  plugins: [],
}

