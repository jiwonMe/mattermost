#!/usr/bin/env node
/**
 * generate-stories.mjs
 * 
 * Scans webapp/channels/src/components and generates basic CSF3 Storybook stories
 * for components that don't already have a *.stories.tsx file.
 * 
 * Usage (from webapp/):
 *   node scripts/generate-stories.mjs
 *   node scripts/generate-stories.mjs --dry-run
 *   node scripts/generate-stories.mjs --path channels/src/components/widgets
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(ROOT, 'channels/src/components');

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const pathArg = args.find(a => a.startsWith('--path='));
const targetPath = pathArg ? path.resolve(ROOT, pathArg.split('=')[1]) : COMPONENTS_DIR;

function findComponentDirs(dir, results = []) {
  if (!fs.existsSync(dir)) return results;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // Skip test, snapshot, and private dirs
      if (entry.name.startsWith('__') || entry.name === 'tests') continue;
      findComponentDirs(full, results);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx'))) {
      // Potential component file
      if (entry.name.includes('.test.') || entry.name.includes('.stories.')) continue;
      results.push(full);
    }
  }
  return results;
}

function hasExistingStory(componentFile) {
  const dir = path.dirname(componentFile);
  const base = path.basename(componentFile, path.extname(componentFile));
  const candidates = [
    path.join(dir, `${base}.stories.tsx`),
    path.join(dir, `${base}.stories.ts`),
    path.join(dir, `${base}.stories.jsx`),
  ];
  return candidates.some(f => fs.existsSync(f));
}

function generateStoryContent(componentFile) {
  const dir = path.dirname(componentFile);
  const ext = path.extname(componentFile);
  const base = path.basename(componentFile, ext);
  const relativeImport = `./${base}`;

  // Simple title from path
  const relPath = path.relative(path.join(ROOT, 'channels/src/components'), dir);
  const title = 'Components/' + relPath.split(path.sep).join('/') + '/' + base;

  return `import type { Meta, StoryObj } from '@storybook/react';
import Component from '${relativeImport}';

const meta: Meta<typeof Component> = {
  title: '${title}',
  component: Component,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  args: {
    // TODO: Fill in required props
  },
};
`;
}

function main() {
  console.log(`Scanning: ${targetPath}`);
  const files = findComponentDirs(targetPath);
  console.log(`Found ${files.length} candidate component files`);

  let generated = 0;
  for (const file of files) {
    if (hasExistingStory(file)) continue;

    const storyPath = path.join(path.dirname(file), path.basename(file, path.extname(file)) + '.stories.tsx');
    const content = generateStoryContent(file);

    if (dryRun) {
      console.log(`[dry-run] Would create: ${path.relative(ROOT, storyPath)}`);
    } else {
      fs.writeFileSync(storyPath, content, 'utf8');
      console.log(`Created: ${path.relative(ROOT, storyPath)}`);
    }
    generated++;
  }

  console.log(`\n${dryRun ? 'Would generate' : 'Generated'} ${generated} story files.`);
  if (!dryRun && generated > 0) {
    console.log('Next steps:');
    console.log('  1. Review generated stories and fill in real props');
    console.log('  2. npm run storybook');
  }
}

main();
