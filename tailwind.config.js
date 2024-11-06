/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#0047B0E3",
        secondary: "#203F6E",
        blue1: '#005ADF',
        line: '#0142A4',
        lightblue: '#0088FF',
        green1: '#00BF7C',
        blue2: '#0047b0',
        blue3: '#1C5BB9',
        blue4: '#226cda',
        customPurple: '#674DFF',
        whiteGrey: '#000000'
      },
      screens : {
        'custom-1024x768': { 'raw': '(min-width: 1024px) and (min-height: 768px)' }
      }
    },
  },
  plugins: [],
};
