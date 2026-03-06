import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ratibordas.github.io',
  base: '/svg-to-code-converter/',
  vite: {
    build: {
      target: 'esnext',
      minify: 'esbuild',
    },
  },
});
