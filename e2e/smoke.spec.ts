import { expect, test } from '@playwright/test';

const routes = [
  '/',
  '/apply',
  '/culture',
  '/teams',
  '/projects',
  '/teams-expanded/management',
  '/teams-expanded/operations',
  '/teams-expanded/software',
  '/teams-expanded/hardware',
  '/teams-expanded/engagement',
  '/positions/software/0',
  '/positions/hardware/0',
];

test.beforeEach(async ({ page }) => {
  await page.route(/\.sanity\.io\//, route => route.fulfill({ json: { result: [] } }));
});

for (const path of routes) {
  test(`${path} renders without errors`, async ({ page }) => {
    const errors: string[] = [];

    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      if (message.type() === 'error') {
        errors.push(message.text());
      }
    });

    await page.goto(path, { waitUntil: 'networkidle' });

    await expect(page.locator('#root')).not.toBeEmpty();
    expect(errors).toEqual([]);
  });
}
