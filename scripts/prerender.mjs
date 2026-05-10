import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'vite';

const root = process.cwd();
const distIndexPath = resolve(root, 'dist/index.html');

const vite = await createServer({
  root,
  appType: 'custom',
  mode: 'production',
  server: {
    middlewareMode: true,
  },
});

try {
  const template = await readFile(distIndexPath, 'utf-8');
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');
  const appHtml = await render();

  const html = template.replace(
    /<div id="root">[\s\S]*?<\/div>/,
    `<div id="root" data-prerendered="true">${appHtml}</div>`
  );

  if (html === template) {
    throw new Error('Could not find #root outlet in dist/index.html');
  }

  await writeFile(distIndexPath, html);
  console.log('Prerendered / to dist/index.html');
} finally {
  await vite.close();
}
