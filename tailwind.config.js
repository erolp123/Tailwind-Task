module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],

  corePlugins: {
    preflight: true, // Resets browser defaults
  },
}
