# SVG to Code Converter

Convert SVG to **CSS URL** (data URI) and to **JSX** for React. Use in `background-image`, `border-image`, `mask`, or as inline SVG components.

## Live Demo
🔗 [**Try it here**](https://ratibordas.github.io/svg-to-code-converter/)

## Features

- **Insert SVG** — Paste or drop an SVG file; use **Example** to load a sample, **Clear** to reset.
- **SVG to JSX** — Live conversion to React/JSX: `class` → `className`, kebab-case attributes → camelCase, self-closing tags. Copy the result into your component.
- **Encoded result** — Live encoded output for CSS; copy or paste encoded SVG here to decode.
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
