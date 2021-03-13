module.exports = {
  purge: [
    './**/*.html',
    './src/js/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': ['Roboto', 'sans serif'],
    },
    extend: {
      colors: {
        gray: {
          300: '#93A1BE',
          400: '#738399',
          500: '#4B5770',
        },
        green: {
          100: '#96DFBB',
          400: '#38BCC4',
        },
        pink: {
          300: '#E788AC',
        },
        purple: {
          500: '#9E5CA3',
          700: '#5C40E0',
        },
      },
      spacing: {
        '30': '7.5rem',
      },
      strokeWidth: {
        '4': '4',
       },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
