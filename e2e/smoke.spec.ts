import { expect, test } from '@playwright/test';

const routes = [
  '/',
  '/apply',
  '/culture',
  '/teams',
  '/projects',
  '/projects-v2',
  '/projects-v2?project=earnz',
  '/projects-v4',
  '/projects-v4?project=earnz',
  '/projects-v8',
  '/projects-v8/earnz',
  '/projects-v9',
  '/projects-v9/earnz',
  '/projects-v10',
  '/projects-v10/earnz',
  '/projects-v12',
  '/projects-v12/earnz',
  '/projects-v13',
  '/projects-v13/earnz',
  '/projects-v14',
  '/projects-v14/earnz',
  '/projects-v15',
  '/projects-v15/earnz',
  '/projects-v16',
  '/projects-v16/earnz',
  '/projects-v17',
  '/projects-v17/earnz',
  '/projects-v18',
  '/projects-v18/earnz',
  '/projects-v19',
  '/projects-v19?project=earnz',
  '/projects-v20',
  '/projects-v20?project=earnz',
  '/projects-v21',
  '/projects-v21?project=earnz',
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
