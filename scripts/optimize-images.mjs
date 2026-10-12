import sharp from "sharp";
import { glob } from "glob";
import path from "path";
import fs from "fs";

// Widths to generate for responsive images. Adjust to match your
// actual breakpoints (mobile / tablet / desktop / large desktop).
const WIDTHS = [480, 768, 1200, 1920];
const QUALITY = 80;

const SOURCE_GLOB = "public/img/**/*.{jpg,jpeg,png}";

async function run() {
  const files = await glob(SOURCE_GLOB);
  console.log(`Found ${files.length} images to optimize.\n`);

  for (const file of files) {
    const ext = path.extname(file);
    const base = file.slice(0, -ext.length);
    const metadata = await sharp(file).metadata();

    // 1. Full-size WebP (same dimensions as original)
    const fullWebp = `${base}.webp`;
    await sharp(file).webp({ quality: QUALITY }).toFile(fullWebp);
    console.log(`✓ ${fullWebp}`);

    // 2. Responsive WebP variants, skipping widths larger than the source
    for (const width of WIDTHS) {
      if (metadata.width && width >= metadata.width) continue;

      const outPath = `${base}-${width}w.webp`;
      await sharp(file).resize({ width }).webp({ quality: QUALITY }).toFile(outPath);
      console.log(`✓ ${outPath}`);
    }
  }

  console.log("\nDone.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});