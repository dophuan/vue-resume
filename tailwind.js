module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-md": "url('~@/assets/images/bg_medium.svg')",
        "hero-xl": "url('~@/assets/images/bg_xlarge.svg')",
        "path-md": "url('~@/assets/images/path_small.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
