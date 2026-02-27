import { copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const outDir = join(process.cwd(), 'build');
const indexPath = join(outDir, 'index.html');
const notFoundPath = join(outDir, '404.html');

if (!existsSync(indexPath)) {
  throw new Error(`Missing build output: ${indexPath}`);
}

copyFileSync(indexPath, notFoundPath);
console.log('Created build/404.html for GitHub Pages SPA routing.');
