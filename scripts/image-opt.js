const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = path.resolve(__dirname, '..', 'projects', 'wrenchworks-preview', 'images', 'storyline');
const outDir = srcDir; // overwrite next to originals (adds .webp versions)
const sizes = [320, 640, 1024, 1600];

(async ()=>{
  const files = fs.readdirSync(srcDir).filter(f=>/\.png$/.test(f));
  for (const f of files) {
    const p = path.join(srcDir, f);
    const name = path.basename(f, '.png');
    for (const w of sizes) {
      const out = path.join(outDir, `${name}-${w}.webp`);
      await sharp(p).resize({ width: w }).webp({ quality: 75 }).toFile(out);
      console.log('wrote', out);
    }
    // also write a full-width webp
    const outFull = path.join(outDir, `${name}.webp`);
    await sharp(p).webp({ quality: 75 }).toFile(outFull);
    console.log('wrote', outFull);
  }
})();
