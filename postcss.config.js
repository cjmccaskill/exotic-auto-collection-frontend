module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  // '@tailwindcss/jit' has a bug that causes an error - TypeError: Cannot read property 'theme' of undefined
};
