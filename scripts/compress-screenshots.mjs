import sharp from "sharp";
import { readFile, writeFile, stat, unlink } from "node:fs/promises";
import { resolve } from "node:path";

const dir = resolve(process.cwd(), "public/screenshots");
const targets = ["tayibeats", "hvaclaunch"];

for (const name of targets) {
  const png = resolve(dir, `${name}.png`);
  const jpg = resolve(dir, `${name}.jpg`);

  let beforeSize = 0;
  try {
    beforeSize = (await stat(png)).size;
  } catch {
    try {
      beforeSize = (await stat(jpg)).size;
    } catch {
      console.log(`${name}: no source file found, skipping`);
      continue;
    }
  }

  const sourcePath = beforeSize ? png : jpg;
  let buf;
  try {
    buf = await readFile(png);
  } catch {
    buf = await readFile(jpg);
  }

  const out = await sharp(buf)
    .resize({ width: 1400, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true, chromaSubsampling: "4:2:0" })
    .toBuffer();

  await writeFile(jpg, out);

  // Remove the .png if it existed
  try {
    await unlink(png);
  } catch {}

  const afterSize = (await stat(jpg)).size;
  console.log(
    `${name}.jpg: ${(beforeSize / 1024).toFixed(0)}KB → ${(afterSize / 1024).toFixed(0)}KB (${((1 - afterSize / beforeSize) * 100).toFixed(0)}% smaller)`
  );
}
