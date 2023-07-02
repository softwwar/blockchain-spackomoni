/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: 'var(--mont)',
        poppins: 'var(--poppins)',
      },
      colors: {
        blue: '#001132',
        darkBlue: '#091830',
        lightBlue: '#111f36',
        primary: '#219dea',
        text: '#686f7e',
      },
    },
  },
  plugins: [],
};
