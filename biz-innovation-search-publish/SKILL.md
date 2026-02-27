---
name: biz-innovation-search-publish
description: Solve a business problem by chaining the local biz-innovation-fusion skill with targeted internet research, then publish the result by creating or updating repository content and committing/pushing to GitHub Pages. Use when the user wants an evidence-backed innovation recommendation and asks to ship it live.
metadata:
  argument-hint: [business-problem-or-opportunity-description]
allowed-tools:
  - Read
  - Grep
  - Glob
  - Edit
  - Write
  - Bash
  - AskUserQuestion
  - WebSearch
---

# Biz Innovation Search Publish

## Overview
Use this skill as a delivery pipeline:
1. Use `biz-innovation-fusion` to solve the business problem rigorously.
2. Validate or enrich conclusions with current external evidence from web search.
3. Turn the result into a publishable repository artifact.
4. Commit and push only the intended changes so GitHub Pages deploys.

This skill is execution-first: complete the full path from problem to published output.

## Required Dependency
Before analysis, load the skill at:
- `../biz-innovation-fusion/SKILL.md`

Use that skill as the core reasoning engine for Phase 0 through Phase 3-L3 and preserve its triage logic, contradiction methods, and output structure.

## Workflow

## Step 1: Intake and Routing
Capture the user problem in one concise statement.

Run triage using the `biz-innovation-fusion` model:
- Classify TOP-TRIZ class (1-6).
- Choose entry point (Phase 1, 2, 3-L1/L2/L3).
- State why this route is selected.

If any of these are missing and cannot be inferred safely, ask one focused clarifying question.

## Step 2: Solve with Biz Innovation Fusion
Execute the required phases from `biz-innovation-fusion`.

Minimum required outputs:
- Triage summary.
- Problem Perception Map summary (if Phase 2+).
- Clear contradiction statement (BTC/BPC when relevant).
- At least 3 solution concepts.
- Primary recommendation with rationale.

Keep the methodology explicit:
- Mention which phase generated each conclusion.
- Avoid generic strategy advice without contradiction logic.

## Step 3: Internet Evidence Layer
Use web search to validate key claims that are time-sensitive or market-dependent.

Search targets:
- Market trends and benchmarks.
- Comparable company cases.
- Regulatory or policy constraints.
- Operational or financial metrics that affect feasibility.

Evidence rules:
- Use recent, credible sources.
- Prefer primary/official sources when possible.
- Record source links for traceability.
- Distinguish sourced facts from inference.

If evidence conflicts with the initial concept, revise the recommendation and explain why.

## Step 4: Build Publishable Artifact
Default output for this repository:
- Create/update a post in `src/content/posts/<slug>.md`.

Frontmatter minimum:
- `title`
- `date`
- `categories`
- `description`

Post structure:
1. Problem context.
2. Fusion-triage summary.
3. Key contradiction.
4. Candidate concepts.
5. Recommended solution.
6. Implementation roadmap.
7. Evidence and references.

If user requests another format, adapt (for example `README` section or report file) but keep evidence and recommendation sections.

## Step 5: Quality Gate
Before git actions:
- Ensure links and file paths are valid.
- Run relevant project checks if available.
- Confirm no accidental unrelated edits are included.

For this Astro repo, run:
- `npm run build`

If checks fail, fix issues before committing.

## Step 6: Commit and Push
Perform controlled git delivery:
1. Stage only files created for this task.
2. Commit with a precise message, for example:
   - `content: publish business innovation fusion analysis for <topic>`
3. Push to `origin main`.

Never include unrelated untracked files in the commit.

## Output Contract
Return a concise delivery summary containing:
- Problem solved.
- Entry route used (Phase path).
- Files changed.
- Evidence sources used.
- Commit hash.
- Push/deploy status.

## Failure Handling
If blocked, report exact blocker and next action:
- Missing dependency skill file.
- Build failure.
- Git conflict.
- Network/source access issues.

When blocked after partial completion, preserve completed artifacts and provide the minimal recovery command path.
