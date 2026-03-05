import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/svg-to-code-converter/',
  vite: {
    build: {
      target: 'esnext',
      minify: 'esbuild',
    },
  },
});
