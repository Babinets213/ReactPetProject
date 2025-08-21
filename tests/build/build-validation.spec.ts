import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

describe('Build Validation', () => {
  test('should generate static assets', () => {
    const buildDir = join(process.cwd(), '.next');
    const staticDir = join(buildDir, 'static');

    // Check if build directory exists
    expect(existsSync(buildDir)).toBe(true);

    // Check if static assets directory exists
    expect(existsSync(staticDir)).toBe(true);
  });

  test('should have valid manifest files', () => {
    const buildDir = join(process.cwd(), '.next');
    const buildManifest = join(buildDir, 'build-manifest.json');

    if (existsSync(buildManifest)) {
      const manifest = JSON.parse(readFileSync(buildManifest, 'utf-8'));

      // Check if manifest has required structure
      expect(manifest).toHaveProperty('pages');
      expect(typeof manifest.pages).toBe('object');
      expect(manifest.pages).not.toBeNull();
    }
  });

  test('should have proper Next.js configuration', () => {
    const nextConfigPath = join(process.cwd(), 'next.config.ts');
    expect(existsSync(nextConfigPath)).toBe(true);

    const tsconfigPath = join(process.cwd(), 'tsconfig.json');
    expect(existsSync(tsconfigPath)).toBe(true);
  });

  test('should have package.json with required scripts', () => {
    const packageJsonPath = join(process.cwd(), 'package.json');
    expect(existsSync(packageJsonPath)).toBe(true);

    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));
    expect(packageJson).toHaveProperty('scripts');
    expect(packageJson.scripts).toHaveProperty('build');
    expect(packageJson.scripts).toHaveProperty('dev');
    expect(packageJson.scripts).toHaveProperty('start');
  });

  test('should have TypeScript configuration', () => {
    const tsconfigPath = join(process.cwd(), 'tsconfig.json');
    expect(existsSync(tsconfigPath)).toBe(true);

    const tsconfig = JSON.parse(readFileSync(tsconfigPath, 'utf-8'));
    expect(tsconfig).toHaveProperty('compilerOptions');
    expect(tsconfig.compilerOptions).toHaveProperty('target');
    expect(tsconfig.compilerOptions).toHaveProperty('jsx');
  });

  test('should validate build output structure', () => {
    const buildDir = join(process.cwd(), '.next');

    if (existsSync(buildDir)) {
      // Check for essential build files/directories
      const serverDir = join(buildDir, 'server');
      const staticDir = join(buildDir, 'static');

      // At least one of these should exist in a successful build
      const hasServerDir = existsSync(serverDir);
      const hasStaticDir = existsSync(staticDir);

      expect(hasServerDir || hasStaticDir).toBe(true);
    }
  });
});
