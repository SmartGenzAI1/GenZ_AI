const svelte = require('@sveltejs/vite-plugin-svelte');

module.exports = {
  plugins: [svelte()],
  build: {
    outDir: 'dist',
  },
};
