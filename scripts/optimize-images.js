/**
 * Compress and resize JPGs/PNGs in public/images for faster page loads.
 * Overwrites originals in place after writing to a temp file.
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGE_DIR = path.join(__dirname, '..', 'public', 'images');
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 72;
const PNG_QUALITY = 80;

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null;

  const before = fs.statSync(filePath).size;
  const tempPath = `${filePath}.tmp-opt`;

  let pipeline = sharp(filePath, { failOn: 'none' }).rotate();
  const meta = await pipeline.metadata();

  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({
      width: MAX_WIDTH,
      withoutEnlargement: true,
    });
  }

  if (ext === '.png') {
    await pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toFile(tempPath);
  } else {
    await pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(tempPath);
  }

  const after = fs.statSync(tempPath).size;
  if (after < before) {
    fs.renameSync(tempPath, filePath);
    return { before, after, saved: before - after };
  }

  fs.unlinkSync(tempPath);
  return { before, after: before, saved: 0 };
}

async function main() {
  const files = fs.readdirSync(IMAGE_DIR);
  let totalSaved = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const file of files) {
    const filePath = path.join(IMAGE_DIR, file);
    if (!fs.statSync(filePath).isFile()) continue;

    try {
      const result = await optimizeFile(filePath);
      if (!result) continue;
      totalBefore += result.before;
      totalAfter += result.after;
      totalSaved += result.saved;
      const pct = result.before
        ? Math.round((1 - result.after / result.before) * 100)
        : 0;
      console.log(
        `${file}: ${(result.before / 1024).toFixed(0)}KB → ${(result.after / 1024).toFixed(0)}KB (${pct}%)`
      );
    } catch (err) {
      console.error(`Failed: ${file}`, err.message);
    }
  }

  console.log(
    `\nDone. ${(totalBefore / 1024 / 1024).toFixed(1)}MB → ${(totalAfter / 1024 / 1024).toFixed(1)}MB (saved ${(totalSaved / 1024 / 1024).toFixed(1)}MB)`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
