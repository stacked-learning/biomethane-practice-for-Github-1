import { createWriteStream } from 'fs';
import { readdir, readFile } from 'fs/promises';
import { createRequire } from 'module';
import { join } from 'path';

const require = createRequire(import.meta.url);
const archiver = require('archiver');

const output = createWriteStream('HydrogenQuadrant_V2.0.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('ZIP file created successfully!');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

const files = await readdir('HydrogenQuadrant_Package');
for (const file of files) {
  archive.file(join('HydrogenQuadrant_Package', file), { name: file });
}

archive.finalize();
