# Vendored anti-slop Oxlint plugin

Source: the `install-anti-slop` Claude Code skill bundled at
`~/.agents/skills/install-anti-slop` (surfaced as `~/.claude/skills/install-anti-slop`),
copied from its `assets/anti-slop/` tree via `scripts/install.mjs` on 2026-09-12.

Upstream revision: **unknown**. The skill directory is not a git checkout and carries no
version or commit marker, so no upstream repository commit can be recorded. The copied
tree is identified instead by the digest of its file contents at install time:

```
# over all files in tools/oxlint/anti-slop/ excluding this UPSTREAM.md
sha256(sorted per-file sha256 list) = c5255401fb1b6bcda057ec8a0f29eced8f3180b55d2d6c5a6904fad799fb9585
```

Nested provenance for the one third-party file group is recorded separately in
`vendor/eslint-stylistic/UPSTREAM.md` (ESLint Stylistic, commit
`435c3ea0fd26a5fef9042c4b36b6e165fbbf8d08`, MIT, LICENSE retained verbatim).

## Installed paths

- Generic plugin entry point: `tools/oxlint/anti-slop/index.ts` — registered in
  `oxlint.config.ts` as `jsPlugins` name `anti-slop`, all 18 generic rules at `"error"`,
  paired with the native `oxc/no-accumulating-spread`.
- Effect plugin entry point: `tools/oxlint/anti-slop/effect/index.ts` — copied but
  **not registered**. This repository declares no direct `effect` dependency.

## Intentional deviations

- No local rule, diagnostic, or configuration edits: the copy is pristine as installed.
- `tools/oxlint/anti-slop/**` is ignored by both `oxlint.config.ts` and `.oxfmtrc.json`
  so the vendored source is neither linted nor reformatted by this repository's tooling.
- No rule tests were copied; the skill's asset tree ships rules only.
