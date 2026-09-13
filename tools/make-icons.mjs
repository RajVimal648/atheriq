/**
 * Generates assets/img/apple-touch-icon.png.
 *
 * iOS does not accept SVG for apple-touch-icon, so this is the one raster
 * asset the site needs. Rather than commit an opaque binary nobody can edit,
 * the icon is drawn from the same geometry as the logo SVG and encoded here.
 *
 * Run with: node tools/make-icons.mjs
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SIZE = 180;
const SS = 3; // supersample factor per axis, for antialiased edges
const BRAND = [0x15, 0x54, 0xc0];
const WHITE = [0xff, 0xff, 0xff];

/*
 * "A" glyph, taken directly from the logo path in src/partials/header.js on its
 * native 32x32 grid. The outer outline minus the counter (the enclosed gap).
 */
const OUTER = [
  [9, 22.5], [15.1, 9.5], [17, 9.5], [23, 22.5],
  [19.9, 22.5], [18.58, 19.5], [13.4, 19.5], [12.1, 22.5],
];
const COUNTER = [[14.42, 17.1], [17.62, 17.1], [16, 13.35]];

/** Standard ray-casting point-in-polygon test. */
function inPolygon(x, y, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

/** Glyph coverage at a pixel, 0..1, by supersampling the 32-unit geometry. */
function coverage(px, py) {
  const scale = 32 / SIZE;
  let hits = 0;
  for (let sy = 0; sy < SS; sy++) {
    for (let sx = 0; sx < SS; sx++) {
      const x = (px + (sx + 0.5) / SS) * scale;
      const y = (py + (sy + 0.5) / SS) * scale;
      if (inPolygon(x, y, OUTER) && !inPolygon(x, y, COUNTER)) hits++;
    }
  }
  return hits / (SS * SS);
}

/* ------------------------------------------------------------- PNG encoding */

const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(buf) {
  let c = 0xffffffff;
  for (const byte of buf) c = CRC_TABLE[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body));
  return Buffer.concat([len, body, crc]);
}

// Opaque RGB. iOS masks the corners itself, so the icon is drawn full-bleed.
const raw = Buffer.alloc(SIZE * (1 + SIZE * 3));
for (let y = 0; y < SIZE; y++) {
  const rowStart = y * (1 + SIZE * 3);
  raw[rowStart] = 0; // filter type: none
  for (let x = 0; x < SIZE; x++) {
    const a = coverage(x, y);
    const off = rowStart + 1 + x * 3;
    for (let c = 0; c < 3; c++) {
      raw[off + c] = Math.round(BRAND[c] + (WHITE[c] - BRAND[c]) * a);
    }
  }
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(SIZE, 0);
ihdr.writeUInt32BE(SIZE, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // colour type: truecolour RGB
// bytes 10-12 stay zero: deflate, adaptive filtering, no interlace

const png = Buffer.concat([
  Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "assets", "img", "apple-touch-icon.png");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, png);
console.log(`  apple-touch-icon.png  ${SIZE}x${SIZE}  ${png.length} bytes`);
