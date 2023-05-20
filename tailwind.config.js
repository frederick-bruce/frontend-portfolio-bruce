/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      classNames: {
        current: "current",
      },
      colors: {
        primary: "#132C33",
        secondary: "#126E82",
        accent: "#51C4D3",
        background: "#D8E3E7",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {},
  plugins: [],
};
