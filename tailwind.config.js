// tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#4ECDC4',
        background: '#F7FFF7',
        text: '#333333',
        accent: '#FFD166',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': '32px',
        'h2': '28px',
        'h3': '24px',
        'paragraph': '16px',
      },
      spacing: {
        '2': '8px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
      },
      borderRadius: {
        '4': '4px',
      },
      boxShadow: {
        'card': '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
      },
      padding: {
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
      },
      margin: {
        '4': '16px',
        '8': '32px',
      },
    },
  },
  variants: {},
  plugins: [],
};
