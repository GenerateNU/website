# Generate Website — Architecture Issues (draft)

> Local draft only — not pushed to GitHub. Generated from the architecture review.
> Each issue is a thin vertical slice that is independently grabbable and verifiable on its own.

> **Note:** The apply-funnel / Position-posting work — the data-source decision, the "position-intake module", and the GROQ-injection fix — is consolidated into **Issue 3**.

---

## Issue 1 — Revoke the leaked Sanity write token and remove it from the frontend

**Type:** HITL (requires a human to revoke the token in the Sanity dashboard)
**Labels:** `security` `critical`
**Impact:** 5

### What to build

A read-write Sanity token currently lives in a git-tracked `.env` and is inlined into the production bundle via the `REACT_APP_` prefix, so it is readable by any visitor in DevTools. Close the leak end-to-end.

Findings that shape the fix:

- The `generate-schema` dataset is **public**, so published content reads over the CDN need **no token at all**.
- The frontend **never writes** to Sanity (the only client call is `client.fetch`) and **never reads drafts**, so the token's write scope is entirely unused.
- Images served via `urlFor()` resolve as public `cdn.sanity.io` URLs on a public dataset, so removing the token does **not** break any images (the ~10 CDN-served images or the repo-bundled ones).

Therefore the browser client should carry **no token** — not a read-only key. The leaked token must still be revoked because it is public and write-capable today.

History handling: revoke only, do **not** rewrite git history (revocation makes every leaked copy inert; history rewriting is disruptive on a shared repo and buys nothing once the token is dead).

> The "why are some images in Sanity and some in the repo?" split is out of scope here — it is a content/asset concern tracked in Issue 8 and downstream of Issue 3.

### Acceptance criteria

- [ ] The existing read-write token is revoked in the Sanity project
- [ ] The `token` field is removed from the browser Sanity client (`useCdn: true` retained); no token is sent from the frontend
- [ ] `.env` is removed from git tracking (`git rm --cached`) and added to `.gitignore`
- [ ] A committed `.env.example` documents the required variables (`REACT_APP_API_URI`, `REACT_APP_SANITY_PROJECT_ID`, `REACT_APP_SANITY_DATASET`) with placeholders — and no token variable
- [ ] App still loads all published content (landing, teams, apply, projects) and all images after the change
- [ ] No `sk…` secret is present in a fresh production build (`grep` the built bundle)
- [ ] Git history is left intact (revoke-only; no force-push/history rewrite)

### Blocked by

- None — can start immediately

---

## Issue 2 — Deepen the Sanity content hook (loading/error/refetch)

**Type:** AFK
**Labels:** `architecture` `fix`
**Impact:** 4

### What to build

The shared Sanity hook returns bare data with no loading or error state, and its dependency array is commented out so it never refetches when the query changes. Deepen it so the interface carries `{ data, loading, error }`, refetches correctly on query/param change, and centralizes the transforms callers currently duplicate (image URL building, color `.hex` extraction, date parsing).

This makes the hook's interface the test surface for the content layer and lets consumers drop their repeated defensive guards.

### Acceptance criteria

- [ ] Hook returns loading and error state alongside data
- [ ] Dependency array is restored so changing query/params refetches
- [ ] Shared transforms (image URL, color, date) are available through the hook, not re-implemented per component
- [ ] At least one consumer renders a loading and an error state instead of blank
- [ ] Hook is unit-tested (loading → success, loading → error)

### Blocked by

- None — can start immediately

---

## Issue 3 — Retire the Position posting concept and delete dead code

**Type:** AFK
**Labels:** `architecture` `security` `chore`
**Impact:** 5

### What to build

Two jobs that turned out to be one: remove the dead/legacy page generations, **and** retire the orphaned "Position posting" concept so the apply funnel consolidates on Sanity as its single source. _(This consolidates what were originally three separate issues: the position/application data-source decision, a proposed "position-intake module", and the GROQ-injection fix.)_

**Decision captured here (no ADR, by maintainer preference):** Generate recruits via **external application forms**. The live apply funnel is `ApplyPageV2 → Sanity team / Role-opening documents → external application link`. The in-site "Position posting" detail page (`/positions/...`, backed by hand-edited static files) was never linked from the live funnel, and its rich fields (description, responsibilities, requirements, duration, commitment) never existed in Sanity. It is retired, not revived. Sanity is the sole source of truth for **Role openings**; the static seed data and the axios backend are deleted outright, not demoted to fallbacks. See `CONTEXT.md` for the Role opening / Position posting glossary.

**Delete targets — dead page generations (original scope):**

- `component/LandingPage/`
- `component/LandingPageV2/` (also contains a broken import)
- `component/AboutPage/` (its route already redirects to `/`)
- `landingPage.jsx` (root orphan)

**Delete targets — apply funnel consolidation:**

- `component/ApplyPage/` — the entire V1 tree, **including** `Position/` (the orphaned detail page), `Search/`, `TeamsRadioButton/`, `Categories/`, `positions.js`, `index.jsx`
- `data/ApplyData/*` (static seed data — stale, shown to no one)
- `services/positionService.js`, `services/categoryService.js`
- `component/position.jsx`, `component/useFetch.js` (Heroku-backed orphan)
- `App.js`: remove the `Position` import and both `/positions/:id` and `/positions/:categoryType/:index` routes (they fall through to the existing `*` catch-all → landing page)

Deleting `TeamsRadioButton` also removes the **only** GROQ-injection site. No live query interpolates user/route input, so no separate parameterization fix is needed.

### Acceptance criteria

- [ ] All listed dead directories/files are deleted
- [ ] The `/positions/*` routes and the `Position` import are removed from `App.js`
- [ ] No code imports `data/ApplyData/*`, `positionService`, `categoryService`, `useFetch`, or `position.jsx`
- [ ] The live apply funnel still works: `/apply` renders team cards from Sanity and role links open the external application forms
- [ ] All other live routes (`/`, `/teams`, `/teams-expanded`, `/culture`, `/projects`) still render
- [ ] App builds with no broken imports; no remaining reference to any deleted module
- [ ] No remaining GROQ query interpolates route/user-derived values into the query string

### Blocked by

- None — can start immediately

---

## Issue 4 — Consolidate viewport / mobile detection into one module

**Type:** AFK
**Labels:** `architecture` `chore`
**Impact:** 3

### What to build

Mobile detection is reimplemented ~31 times across three conflicting rules (`max-device-width`, `innerWidth`, `screen.width`), some with leaking listeners, plus an unused hook and an unused breakpoints constants file. Replace all of them with one viewport module exposing a single, cleaned-up hook with a consistent breakpoint, and delete the redundant implementations.

### Acceptance criteria

- [ ] One viewport hook is the single source for mobile/desktop detection
- [ ] All inline `window.matchMedia(...)` copies and the other detection hooks are replaced or removed
- [ ] The hook registers and cleans up its listener correctly
- [ ] Responsive behavior is unchanged across pages at the chosen breakpoint

### Blocked by

- Issue 3

---

## Issue 5 — Collapse duplicate scroll containers and carousels

**Type:** AFK
**Labels:** `architecture` `chore`
**Impact:** 3

### What to build

After dead code removal, collapse the near-identical desktop scroll containers (horizontal/vertical wheel-to-scroll) into one parameterized container, and standardize on a single carousel implementation for the surviving call sites. Remove the incomplete/unused carousel code.

### Acceptance criteria

- [ ] One container module covers horizontal and vertical desktop scroll via a parameter
- [ ] One carousel implementation is used by all live carousels
- [ ] Incomplete/unused carousel and container files are deleted
- [ ] Scroll and carousel behavior unchanged in the browser

### Blocked by

- Issue 3

---

## Issue 6 — Introduce design tokens for brand colors

**Type:** AFK
**Labels:** `chore` `architecture`
**Impact:** 2

### What to build

Brand colors (e.g. the blue, yellow, green, purple) are hardcoded as raw hex in ~88 CSS files with case-inconsistent duplicates, plus many inline style colors. Define CSS custom properties for the brand palette in one place and replace the repeated literals with token references.

### Acceptance criteria

- [ ] A tokens stylesheet defines the brand palette as CSS custom properties
- [ ] Repeated brand-color literals reference the tokens instead of raw hex
- [ ] Rendered colors are visually unchanged
- [ ] Changing a token in one place updates the color everywhere it's used

### Blocked by

- None — can start immediately

---

## Issue 7 — Align tooling config across root and Sanity studio

**Type:** AFK
**Labels:** `chore` `fix`
**Impact:** 2

### What to build

Prettier is configured differently in the root (`printWidth 80`) and the Sanity studio (`printWidth 100`), so the same file reformats depending on where it's edited. Unify the Prettier config, and document that the React 19 (root) vs React 18 (studio) split is intentional since they are separate apps.

### Acceptance criteria

- [ ] A single Prettier configuration governs formatting consistently
- [ ] Running the formatter produces no churn from config disagreement
- [ ] A short note documents the intentional React-version split between root and studio

### Blocked by

- None — can start immediately

---

## Issue 8 — Optimize and consolidate image assets

**Type:** AFK
**Labels:** `chore`
**Impact:** 2

### What to build

570+ MB of unoptimized images are committed and scattered across `src/`, `src/assets/`, and `public/`, with multi-MB JPEGs sitting next to code and some duplicated between locations. Consolidate to a single asset location, compress/convert large images, and remove duplicates. Note candidates that should live in Sanity instead (ties into Issue 3).

### Acceptance criteria

- [ ] Images live in one consistent location with no loose binaries beside JS components
- [ ] Large images are compressed (and/or served as WebP)
- [ ] Duplicate copies across locations are removed
- [ ] No broken image references after the move

### Blocked by

- None — can start immediately

---

## Issue 9 — Establish a real test baseline

**Type:** AFK
**Labels:** `chore` `fix`
**Impact:** 3

### What to build

The only test is the CRA stub that asserts text the app doesn't render. Replace it with a meaningful baseline: smoke-render the live routes and cover the newly deepened content hook through its interface.

### Acceptance criteria

- [ ] The stub `learn react` test is removed
- [ ] Smoke tests render each live route without crashing
- [ ] The deepened content hook has interface-level tests (loading → success, loading → error)
- [ ] `npm test` passes in CI-style (non-watch) mode

### Blocked by

- Issue 2, Issue 3

---

## Issue 10 — Cleanup pass: unused deps, stray logs, duplicate CSS

**Type:** AFK
**Labels:** `nit` `chore`
**Impact:** 1

### What to build

Sweep the small stuff that survives the deletions in Issues 3 and 4: remove the unused `react-bootstrap-validation` dependency, strip leftover `console.log` debug lines in surviving files, de-duplicate repeated CSS rules (e.g. footer/navbar), and bump the hardcoded Sanity `apiVersion`. _(Note: `useFetch.js`, `categoryService.js`, and `position.jsx` are deleted by Issue 3, not here.)_

### Acceptance criteria

- [ ] Unused `react-bootstrap-validation` removed from `package.json`
- [ ] Stray `console.log` lines removed from surviving files
- [ ] Duplicate CSS rules de-duplicated
- [ ] Sanity `apiVersion` bumped
- [ ] App builds and behaves identically

### Blocked by

- Issue 3 (so cleanup doesn't touch files slated for deletion)
