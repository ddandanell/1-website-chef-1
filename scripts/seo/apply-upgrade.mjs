import fs from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { ALLOWED_EDIT_FILES, REPO_ROOT, readJson } from './shared.mjs';

async function main() {
  const replacements = await readJson('replacements.json');
  const files = replacements.files ?? [];

  if (files.length === 0) {
    throw new Error('No replacement files were generated.');
  }

  for (const file of files) {
    if (!ALLOWED_EDIT_FILES.includes(file.path)) {
      throw new Error(`Refusing to edit non-allowlisted file: ${file.path}`);
    }
    if (typeof file.content !== 'string' || file.content.length === 0) {
      throw new Error(`Replacement for ${file.path} is empty.`);
    }
  }

  for (const file of files) {
    const targetPath = path.join(REPO_ROOT, file.path);
    await fs.writeFile(targetPath, file.content, 'utf8');
  }

  console.log(`applied ${files.length} replacement file(s)`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
