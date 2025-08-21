import { test, expect } from '@playwright/test';

test.describe.skip('Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check if the page loads
    await expect(page).toHaveTitle(/^Create Next App$/);

    // Check if the Next.js logo is visible
    await expect(page.locator('img[alt="Next.js logo"]')).toBeVisible();

    // Check if the main content is present
    await expect(page.getByText('Get started by editing')).toBeVisible();
    await expect(page.getByText('src/app/page.tsx')).toBeVisible();
  });

  test('should have working external links', async ({ page }) => {
    await page.goto('/');

    // Check Deploy now link
    const deployLink = page.getByRole('link', { name: /deploy now/i });
    await expect(deployLink).toBeVisible();
    await expect(deployLink).toHaveAttribute('href', /vercel\.com/);

    // Check Read our docs link
    const docsLink = page.getByRole('link', { name: /read our docs/i });
    await expect(docsLink).toBeVisible();
    await expect(docsLink).toHaveAttribute('href', /nextjs\.org\/docs/);
  });

  test('should be responsive', async ({ page }) => {
    await page.goto('/');

    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('img[alt="Next.js logo"]')).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await expect(page.locator('img[alt="Next.js logo"]')).toBeVisible();
  });
});
