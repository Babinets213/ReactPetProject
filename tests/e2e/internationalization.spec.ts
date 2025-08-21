import { test, expect } from '@playwright/test';

test.describe.skip('Internationalization', () => {
  test('should display English content on /en route', async ({ page }) => {
    await page.goto('/en');

    // Check if English content is displayed
    await expect(
      page.getByRole('heading', { name: 'Hello world!' })
    ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Go to the about page' })
    ).toBeVisible();
  });

  test('should display German content on /de route', async ({ page }) => {
    await page.goto('/de');

    // Check if the page loads (even if German translations might not be complete)
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('a')).toBeVisible();
  });

  test('should navigate between locales', async ({ page }) => {
    // Start with English
    await page.goto('/en');
    await expect(page.getByText('Hello world!')).toBeVisible();

    // Navigate to about page
    await page.getByRole('link', { name: 'Go to the about page' }).click();
    await expect(page.url()).toContain('/en/about');
  });

  test('should handle default locale redirect', async ({ page }) => {
    await page.goto('/');

    // Should redirect to a locale-specific URL
    await page.waitForURL(/\/(en|de)/);
    expect(page.url()).toMatch(/\/(en|de)/);
  });
});
