import { sveltekit } from "@sveltejs/kit/vite";

const config = {
  plugins: [sveltekit()],
  build: { outDir: "dist" }
};

export default config;
