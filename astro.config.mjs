import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/',
  vite: {
    build: {
      target: 'esnext',
      minify: 'esbuild',
    },
  },
});
