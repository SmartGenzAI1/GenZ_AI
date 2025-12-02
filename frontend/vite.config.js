import { defineConfig } from 'vite';
import svelte from '@sveltejs/vite-plugin-svelte'; // Ensure the import is correct

export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'dist',
  },
});
