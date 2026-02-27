# Repository Guidelines

## Project Structure & Module Organization
This is an Astro static blog.
- App config: `astro.config.mjs`, `package.json`, `tsconfig.json`.
- Content schema: `src/content.config.ts`.
- Posts: `src/content/posts/*.md` and `src/content/welcome/*.md`.
- Routes: `src/pages/` (`index.astro`, `about.md`, dynamic post routes).
- Shared UI and styles: `src/layouts/` and `src/styles/global.css`.
- CI/CD: `.github/workflows/publish.yml` builds and deploys to GitHub Pages.
- Build output: `dist/` (generated; never edit directly).

## Build, Test, and Development Commands
- `npm install` installs dependencies.
- `npm run dev` starts local development server.
- `npm run build` creates production output in `dist/`.
- `npm run preview` serves the built site locally.
- `npm run check` runs Astro type/content checks.

Recommended flow before PR: `npm run check && npm run build`.

## Coding Style & Naming Conventions
- Use Markdown files with YAML frontmatter (`title`, `date`, `categories`, optional `description`, `author`).
- Use lowercase kebab-case filenames for content slugs (example: `ai-learning-shift.md`).
- Keep one article per file; avoid embedding unrelated topics in a single post.
- For Astro/TS/CSS, use 2-space indentation and keep components focused.

## Testing Guidelines
There is no dedicated unit-test suite yet. Validation is build-centric:
- Run `npm run check` to validate schema/types.
- Run `npm run build` to catch rendering errors.
- Spot-check changed pages via `npm run dev` or `npm run preview`.

CI also verifies that `dist/` and `dist/index.html` are generated.

## Commit & Pull Request Guidelines
Follow established commit prefixes:
- `Add post: <Title>` for new articles.
- `content: <brief change>` for content rewrites.
- `ci: <brief change>` for workflow/devops updates.

PRs should include:
- Clear summary of changes.
- Linked issue (if applicable).
- Screenshots for layout or style changes.
- Confirmation that `npm run check` and `npm run build` passed locally.
