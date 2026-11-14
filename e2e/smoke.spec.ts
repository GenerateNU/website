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
    await expect(page.getByRole('alert')).toHaveCount(0);
    expect(errors).toEqual([]);
  });
}

test('/about redirects to /', async ({ page }) => {
  await page.goto('/about', { waitUntil: 'networkidle' });

  await expect(page).toHaveURL(/\/$/);
});

for (const path of ['/test-link', '/TEST-Link/']) {
  test(`short link ${path} redirects to its external url`, async ({ page }) => {
    await page.route(/\.sanity\.io\//, route =>
      route.fulfill({ json: { result: [{ slug: 'test-link', url: 'https://example.com/target' }] } })
    );
    await page.route('https://example.com/**', route =>
      route.fulfill({ contentType: 'text/html', body: '<html><body>target</body></html>' })
    );

    // The loader redirects before the app page finishes loading, so only wait for the first commit.
    await page.goto(path, { waitUntil: 'commit' });

    await expect(page).toHaveURL('https://example.com/target');
  });
}

test('unknown paths fall back to the landing page when Sanity is down', async ({ page }) => {
  await page.route(/\.sanity\.io\//, route => route.abort());

  await page.goto('/not-a-real-page', { waitUntil: 'networkidle' });

  await expect(page.getByRole('alert')).toHaveCount(0);
});
