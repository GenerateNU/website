# List available commands
default:
    @just --list

# Install dependencies for the website and the Sanity Studio
install:
    bun install
    cd sanity && bun install

# Start the website dev server (http://localhost:5173)
dev:
    bun run dev

# Build the website for production into build/
build:
    bun run build

# Preview the production build locally
preview:
    bun run preview

# Type-check the website
typecheck:
    bun run typecheck

# Lint the website
lint:
    bun run lint

# Lint and apply safe auto-fixes
lint-fix:
    bun run lint:fix

# Format all files
format:
    bun run format

# Check formatting without changing files
format-check:
    bun run format:check

# Find unused files, exports and dependencies
knip:
    bun run knip

# Run the Playwright smoke tests (builds the site first)
test-e2e:
    bun run test:e2e

# Install the Playwright browser used by the smoke tests
install-browsers:
    bunx playwright install chromium

# Run the fast checks: types, lint and formatting
check: typecheck lint format-check

# Run everything CI runs
ci: check build test-e2e

# Start the Sanity Studio locally
[working-directory: 'sanity']
studio:
    bun run dev

# Type-check the Sanity Studio
[working-directory: 'sanity']
studio-typecheck:
    bun run typecheck

# Build the Sanity Studio
[working-directory: 'sanity']
studio-build:
    bun run build

# Deploy the Sanity Studio
[working-directory: 'sanity']
studio-deploy:
    bun run deploy
