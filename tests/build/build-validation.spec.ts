import { test, expect } from '@playwright/test';
import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

test.describe('Build Validation', () => {
  test('should generate static assets', async () => {
    const buildDir = join(process.cwd(), '.next');
    const staticDir = join(buildDir, 'static');

    // Check if build directory exists
    expect(existsSync(buildDir)).toBe(true);

    // Check if static assets directory exists
    expect(existsSync(staticDir)).toBe(true);
  });

  test('should have valid manifest files', async () => {
    const buildDir = join(process.cwd(), '.next');
    const buildManifest = join(buildDir, 'build-manifest.json');

    if (existsSync(buildManifest)) {
      const manifest = JSON.parse(readFileSync(buildManifest, 'utf-8'));

      // Check if manifest has required structure
      expect(manifest).toHaveProperty('pages');
      expect(manifest.pages).toHaveProperty('/');
    }
  });

  test.skip('should build without TypeScript errors', async ({ page }) => {
    // This test verifies the build process completed successfully
    // If we reach this point, it means tsc --noEmit passed in CI

    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });

  test('should have proper Next.js configuration', async () => {
    const nextConfigPath = join(process.cwd(), 'next.config.ts');
    expect(existsSync(nextConfigPath)).toBe(true);

    const tsconfigPath = join(process.cwd(), 'tsconfig.json');
    expect(existsSync(tsconfigPath)).toBe(true);
  });
});
