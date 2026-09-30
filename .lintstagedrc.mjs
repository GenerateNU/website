import { defineConfig } from 'lint-staged/config';

export default defineConfig({
  '*.{js,jsx,ts,tsx,md,html,css}': 'oxfmt --no-error-on-unmatched-pattern',
});
