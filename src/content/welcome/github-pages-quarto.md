---
title: "Deploying Quarto to GitHub Pages with Actions"
author: "Triz"
date: "2026-02-26"
categories: [github, ci, quarto]
description: "A short checklist to ship a Quarto blog with CI deployment."
---

This note captures the minimum reliable setup to deploy a Quarto website to GitHub Pages.

## Checklist

1. Create a Quarto website project.
2. Add a GitHub Actions workflow to render and deploy `_site`.
3. Set repository Pages source to `GitHub Actions`.
4. Push to `main` and confirm the workflow succeeds.

## Why this flow

- Reproducible build in CI
- No need to commit generated site files
- Easy updates on every push
