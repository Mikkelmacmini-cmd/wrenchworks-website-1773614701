import fs from 'fs';
import path from 'path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const a = process.argv[2];
const b = process.argv[3];
const out = process.argv[4] || 'diff.png';

const img1 = PNG.sync.read(fs.readFileSync(a));
const img2 = PNG.sync.read(fs.readFileSync(b));
const { width, height } = img1;
const diff = new PNG({ width, height });
const num = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.12 });
fs.writeFileSync(out, PNG.sync.write(diff));
console.log('diff pixels:', num);
