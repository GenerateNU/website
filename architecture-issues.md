# Generate Website — Architecture Issues (draft)

> Local draft only — not pushed to GitHub. Generated from the architecture review.
> Each issue is a thin vertical slice that is independently grabbable and verifiable on its own.

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

> The "why are some images in Sanity and some in the repo?" split is out of scope here — it is a content/asset concern tracked in Issue 11 and downstream of Issue 2.

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

## Issue 2 — Decide and record the authoritative source for position/application content

**Type:** HITL (architectural decision)
**Labels:** `architecture` `critical`
**Impact:** 5

### What to build

The "application/position" concept is currently read from three places — Sanity, static seed files under `data/ApplyData/`, and an external axios API. Decide which one is authoritative for open positions and record the decision as an ADR so future reviews don't re-litigate it.

This is a decision-only slice; implementation lands in Issue 3.

### Acceptance criteria

- [ ] A single authoritative source for position/application data is chosen
- [ ] The role of the other two sources is decided (removed, or demoted to a documented fallback)
- [ ] An ADR is written capturing the decision and its rationale
- [ ] The domain term for an open position is named consistently (added to a CONTEXT/glossary doc)

### Blocked by

- None — can start immediately

---

## Issue 3 — Build a single position-intake module

**Type:** AFK
**Labels:** `architecture`
**Impact:** 5

### What to build

Replace the scattered source-selection logic with one module that owns "what an open position is." Every consumer in the apply funnel (the apply page, the team radio selector, the position detail page) reads positions through this one interface, regardless of where the data physically comes from.

The deletion test should now pass: deleting this module would make position-fetching complexity reappear across all consumers — proving it earns its keep.

### Acceptance criteria

- [ ] One module exposes the position/application read interface
- [ ] The apply page, team selector, and position detail page all read through it
- [ ] No component imports `data/ApplyData/*` or calls axios for positions directly anymore
- [ ] The module is unit-tested through its interface (happy path + empty/missing position)
- [ ] Apply funnel behaves identically to before in the browser

### Blocked by

- Issue 2

---

## Issue 4 — Deepen the Sanity content hook (loading/error/refetch)

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

## Issue 5 — Delete dead page generations and orphaned files

**Type:** AFK
**Labels:** `architecture` `chore`
**Impact:** 4

### What to build

Remove the unrouted generations of pages and orphan files so searches and refactors stop returning stale matches. Targets confirmed unreferenced: `component/LandingPage/`, `component/LandingPageV2/` (which also has a broken import), `component/ApplyPage/` (the V1 tree, not `ApplyPageV2`), the entire `component/AboutPage/` tree (its route redirects to `/`), and the root orphan `landingPage.jsx`.

### Acceptance criteria

- [ ] All listed dead directories/files are deleted
- [ ] App builds with no broken imports
- [ ] All live routes (`/`, `/apply`, `/teams`, `/teams-expanded`, `/culture`, `/projects`) still render
- [ ] No remaining import references the deleted modules

### Blocked by

- None — can start immediately

---

## Issue 6 — Fix GROQ injection in the team application query

**Type:** AFK
**Labels:** `security` `fix`
**Impact:** 4

### What to build

The team application query interpolates the team value directly into the GROQ string. Switch it to a parameterized query (`$team`) so the value is passed as a bound parameter rather than concatenated into the query text.

### Acceptance criteria

- [ ] The team application query uses a bound GROQ parameter, not string interpolation
- [ ] Team radio selector still returns the correct applications per team
- [ ] No other query in the codebase interpolates user/route-derived values into the GROQ string

### Blocked by

- None (lighter to do after Issue 4, but not dependent)

---

## Issue 7 — Consolidate viewport / mobile detection into one module

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

- Issue 5

---

## Issue 8 — Collapse duplicate scroll containers and carousels

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

- Issue 5

---

## Issue 9 — Introduce design tokens for brand colors

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

## Issue 10 — Align tooling config across root and Sanity studio

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

## Issue 11 — Optimize and consolidate image assets

**Type:** AFK
**Labels:** `chore`
**Impact:** 2

### What to build

570+ MB of unoptimized images are committed and scattered across `src/`, `src/assets/`, and `public/`, with multi-MB JPEGs sitting next to code and some duplicated between locations. Consolidate to a single asset location, compress/convert large images, and remove duplicates. Note candidates that should live in Sanity instead (ties into Issue 2/3).

### Acceptance criteria

- [ ] Images live in one consistent location with no loose binaries beside JS components
- [ ] Large images are compressed (and/or served as WebP)
- [ ] Duplicate copies across locations are removed
- [ ] No broken image references after the move

### Blocked by

- None — can start immediately

---

## Issue 12 — Establish a real test baseline

**Type:** AFK
**Labels:** `chore` `fix`
**Impact:** 3

### What to build

The only test is the CRA stub that asserts text the app doesn't render. Replace it with a meaningful baseline: smoke-render the live routes and cover the newly deepened content hook and position-intake module through their interfaces.

### Acceptance criteria

- [ ] The stub `learn react` test is removed
- [ ] Smoke tests render each live route without crashing
- [ ] The content hook and position-intake module have interface-level tests
- [ ] `npm test` passes in CI-style (non-watch) mode

### Blocked by

- Issue 3, Issue 4

---

## Issue 13 — Cleanup pass: unused deps, dead utilities, stray logs, duplicate CSS

**Type:** AFK
**Labels:** `nit` `chore`
**Impact:** 1

### What to build

Sweep the small stuff: remove the unused `react-bootstrap-validation` dependency, delete never-imported utilities (`useFetch.js`, `categoryService.js`, the unused mobile-detection hook), remove the stale hardcoded Heroku URL in `position.jsx`, strip leftover `console.log` debug lines, de-duplicate the repeated CSS rules (e.g. footer/navbar), and bump the hardcoded Sanity `apiVersion`.

### Acceptance criteria

- [ ] Unused dependency removed from `package.json`
- [ ] Never-imported utility files deleted
- [ ] Stray `console.log` and stale hardcoded URLs removed
- [ ] Duplicate CSS rules de-duplicated
- [ ] App builds and behaves identically

### Blocked by

- Issue 5 (so cleanup doesn't touch files slated for deletion)
