# SVG to CSS URL Encoder

Encode SVG for use in CSS as a data URI. Works in all browsers when used in `background-image`, `border-image`, or `mask`.

## Features

- **Insert SVG** — Paste or drop an SVG file; use **Example** to load a sample.
- **Encoded result** — Live encoded output; copy or paste encoded SVG here to decode.
- **Ready for CSS** — Full `background-image: url(...)` line ready to copy.
- **Preview** — See the result with white, silver, or black background.
- **Quote style** — Choose single or double quotes for the generated CSS.

## Tech stack

- [Astro](https://astro.build) (static site)
- Vite + esbuild (build and minification)

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. `http://localhost:4321/svg-to-code-converter/`).
