/**
 * Minimal static file server for local preview of dist/.
 * Resolves clean URLs (/services/azure -> dist/services/azure/index.html).
 * Development only - production hosting (IIS, nginx, Netlify, Azure Static Web
 * Apps) should serve dist/ directly.
 */
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(fileURLToPath(new URL(".", import.meta.url)), "dist");
const port = Number(process.env.PORT) || 4321;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

async function resolveFile(urlPath) {
  // normalize() collapses ../ so requests cannot escape dist/
  const rel = normalize(decodeURIComponent(urlPath)).replace(/^([/\\])+/, "");
  const candidates = extname(rel)
    ? [join(dist, rel)]
    : [join(dist, rel, "index.html"), join(dist, `${rel}.html`)];

  for (const file of candidates) {
    if (!file.startsWith(dist)) continue;
    try {
  if ((await stat(file)).isFile()) return file;
    } catch {
      /* try next candidate */
    }
  }
  return null;
}

createServer(async (req, res) => {
  const path = new URL(req.url, "http://localhost").pathname;
  const file = (await resolveFile(path)) ?? join(dist, "404.html");
  try {
    const body = await readFile(file);
    res.writeHead(file.endsWith("404.html") && path !== "/404.html" ? 404 : 200, {
      "content-type": types[extname(file)] ?? "application/octet-stream",
      "cache-control": "no-cache",
  });
    res.end(body);
  } catch {
    res.writeHead(500, { "content-type": "text/plain" });
    res.end("500 - build the site first: npm run build");
  }
}).listen(port, () => console.log(`\n  AtherIQ preview -> http://localhost:${port}\n`));
