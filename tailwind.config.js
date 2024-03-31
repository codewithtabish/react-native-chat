/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          // Light theme colors
          lightBackground: '#ffffff',
          lightText: '#333333',
          lightPrimary: '#33CC66',
          lightSecondary: '#128C7E',
          lightAccent: '#25D366',
          lightInactive: '#9E9E9E',
          lightDivider: '#E0E0E0',
        },
        dark: {
          // Dark theme colors
          darkBackground: '#1a1a1a',
          darkText: '#ffffff',
          darkPrimary: '#ffffff',
          darkSecondary: '#128C7E',
          darkAccent: '#25D366',
          darkInactive: '#9E9E9E',
          darkDivider: '#424242',
        },
      },
    },
  },
  plugins: [],
};
