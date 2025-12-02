import adapter from '@sveltejs/adapter-node';

const config = {
  kit: {
    adapter: adapter(),
    outDir: 'build'
  }
};

export default config;
