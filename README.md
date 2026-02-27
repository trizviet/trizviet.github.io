# Astro Blog on GitHub Pages

This repository is now an Astro-based static blog, deployed with GitHub Actions.

## Local development

1. Install Node.js 20+.
2. Install dependencies:

```bash
npm install
```

3. Start local dev server:

```bash
npm run dev
```

## Create a new post

Add a Markdown file to one of these collections:

- `src/content/posts/<slug>.md`
- `src/content/welcome/<slug>.md`

Example frontmatter:

```yaml
---
title: "My New Post"
date: "2026-02-27"
categories: [notes]
description: "Short summary"
---
```

## Build and preview

```bash
npm run build
npm run preview
```

## Deployment

- Push to `main`.
- GitHub Action `.github/workflows/publish.yml` will build with Astro and deploy `dist/` to GitHub Pages.
- In repository settings, set Pages source to **GitHub Actions**.
