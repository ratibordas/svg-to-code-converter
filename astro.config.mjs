import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    build: {
      target: 'esnext',
      minify: 'esbuild',
    },
  },
});
