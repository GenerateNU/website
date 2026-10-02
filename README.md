# Generate Website

[![CI](https://github.com/GenerateNU/website/actions/workflows/ci.yml/badge.svg)](https://github.com/GenerateNU/website/actions/workflows/ci.yml)

The website for [Generate](https://generatenu.com), Northeastern's student-led product development studio.

Built with React, TypeScript and Vite. Content such as directors, teams, showcases and copy comes from [Sanity](https://www.sanity.io).

## Getting started

### Prerequisites

- [Bun](https://bun.sh) 1.4.2 or newer
- [Node.js](https://nodejs.org) 22.18 or newer (used by the lint and test tools). With [nvm](https://github.com/nvm-sh/nvm), run `nvm install` in the repo to install and switch to the right version.
- [just](https://github.com/casey/just) (optional, for the shortcuts below): `brew install just`

### Setup

```sh
git clone https://github.com/GenerateNU/website.git
cd website
nvm install            # install and switch to the Node version in .nvmrc
cp .env.example .env   # then fill in the values
just install
just dev
```

The site runs at http://localhost:5173.

### Environment variables

| Variable                   | Used by       | Description                        |
| -------------------------- | ------------- | ---------------------------------- |
| `VITE_SANITY_PROJECT_ID`   | Website       | Sanity project the site reads from |
| `VITE_SANITY_DATASET`      | Website       | Sanity dataset the site reads from |
| `VITE_API_URI`             | Website       | Not currently used                 |
| `SANITY_STUDIO_PROJECT_ID` | Sanity Studio | Sanity project the Studio edits    |
| `SANITY_STUDIO_DATASET`    | Sanity Studio | Sanity dataset the Studio edits    |

Ask the [infra team](https://github.com/orgs/GenerateNU/teams/infra) for the values.

## Commands

Run `just` to list every command. Each one is a shortcut for a `bun run` script, so you can use either.

| Command                 | What it does                                          |
| ----------------------- | ----------------------------------------------------- |
| `just dev`              | Start the dev server                                  |
| `just build`            | Build the site for production into `build/`           |
| `just preview`          | Serve the production build locally                    |
| `just check`            | Type-check, lint and check formatting                 |
| `just ci`               | Run everything CI runs: checks, build and smoke tests |
| `just typecheck`        | Type-check with TypeScript                            |
| `just lint`             | Lint with oxlint                                      |
| `just lint-fix`         | Lint and apply safe auto-fixes                        |
| `just format`           | Format all files with oxfmt                           |
| `just format-check`     | Check formatting without changing files               |
| `just knip`             | Find unused files, exports and dependencies           |
| `just test-e2e`         | Run the Playwright smoke tests                        |
| `just install-browsers` | Install the browser the smoke tests use               |

### Sanity Studio

The content editor lives in [`sanity/`](sanity) and has its own dependencies.

| Command                 | What it does                |
| ----------------------- | --------------------------- |
| `just studio`           | Start the Studio locally    |
| `just studio-typecheck` | Type-check the Studio       |
| `just studio-build`     | Build the Studio            |
| `just studio-deploy`    | Deploy the Studio to Sanity |

## Project structure

```
src/
  component/   Shared components (NavBar, Footer, buttons) and some pages
  pages/       Page components (landing, apply, teams)
  data/        Static content and types
  services/    Data fetching (useSanity)
  shared/      Small hooks and helpers
  assets/      Images, icons and SVG components
sanity/        Sanity Studio and content schemas
e2e/           Playwright smoke tests
```

## Conventions

- **Imports:** use the `@/` alias for anything outside the current folder (`@/shared/useWebsite`), and `./` for files in the same folder.
- **Components:** one exported component per file. Small private helper components can live in the same file.
- **Before you push:** run `just check`. A pre-commit hook formats staged files automatically.

## CI and deployment

Every pull request runs type checking, lint, a format check, a production build and the Playwright smoke tests ([workflow](.github/workflows/ci.yml)). All of them must pass before merging.

The site is deployed on Netlify. Every pull request also gets a deploy preview, so you can check your changes on a live URL before merging:

```
https://deploy-preview-<PR number>--sprightly-manatee-243873.netlify.app
```

Replace `<PR number>` with your pull request's number. For example, PR #268's preview is at https://deploy-preview-268--sprightly-manatee-243873.netlify.app.
