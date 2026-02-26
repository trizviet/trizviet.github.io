# Quarto Blog on GitHub Pages

This repository is configured as a Quarto blog and deployed with GitHub Actions.

## Local development

1. Install Quarto: https://quarto.org/docs/get-started/
2. Preview locally:

```bash
quarto preview
```

## Create a new post

Add a new folder under `posts/` with an `index.qmd` file containing front matter, for example:

```yaml
---
title: "My New Post"
date: "2026-02-26"
categories: [notes]
---
```

## Deployment

- Push to `main`.
- GitHub Action `.github/workflows/publish.yml` will render and deploy to GitHub Pages.
- In GitHub repo settings, set Pages source to **GitHub Actions**.
