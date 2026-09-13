/**
 * AtherIQ static site builder.
 *
 * Zero dependencies. Reads src/pages/*.js, wraps each in src/layout.js, writes
 * clean-URL HTML into dist/ (e.g. /services/azure -> dist/services/azure/index.html).
 *
 * Porting notes:
 *   src/layout.js      -> Views/Shared/_Layout.cshtml
 *   src/partials/*.js  -> Views/Shared/_Header.cshtml, _Footer.cshtml
 *   src/components.js  -> Razor partials / tag helpers / React components
 *   src/content/*.js   -> database tables, CMS collections or appsettings
 *   src/pages/*.js     -> Controller actions + Views
 */
import { readdir, mkdir, writeFile, rm, cp } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { site } from "./src/content/site.js";
import { layout } from "./src/layout.js";

const root = dirname(fileURLToPath(import.meta.url));
const outDir = join(root, "dist");
const pagesDir = join(root, "src", "pages");

/** Route -> file on disk. Clean URLs, no .html extension in links. */
const outputFile = (route) =>
  route === "/" ? join(outDir, "index.html") : join(outDir, route.slice(1), "index.html");

async function loadPages() {
  const files = (await readdir(pagesDir)).filter((f) => f.endsWith(".js")).sort();
  const pages = [];

  for (const file of files) {
    const mod = await import(pathToFileURL(join(pagesDir, file)).href);
    for (const exported of Object.values(mod)) {
      // A module exports either one page object or an array of them
    // (service detail pages and blog posts are generated from content data).
   if (Array.isArray(exported)) pages.push(...exported.filter((p) => p?.route));
      else if (exported?.route) pages.push(exported);
    }
  }

  const seen = new Set();
  for (const p of pages) {
    if (seen.has(p.route)) throw new Error(`Duplicate route: ${p.route}`);
 if (!p.title || !p.description) throw new Error(`Missing title/description on ${p.route}`);
    if (p.description.length > 165) throw new Error(`Meta description too long on ${p.route}`);
    seen.add(p.route);
  }
  return pages.sort((a, b) => a.route.localeCompare(b.route));
}

const priorityFor = (route) =>
  route === "/" ? "1.0" : route.split("/").length > 2 ? "0.7" : "0.8";

const sitemap = (pages) =>
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((p) => !p.noindex)
  .map(
    (p) => `  <url>
    <loc>${site.url}${p.route}</loc>
    <lastmod>${site.buildDate}</lastmod>
    <changefreq>${["/", "/blog"].includes(p.route) ? "weekly" : "monthly"}</changefreq>
    <priority>${priorityFor(p.route)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const robots = () => `# robots.txt - ${site.name}
User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap.xml
`;

const notFound = {
  route: "/404",
  title: "Page Not Found",
  description: "The page you requested could not be found on the AtherIQ website.",
  noindex: true,
  body: `<section class="section">
    <div class="container measure-narrow center-block">
      <p class="eyebrow">Error 404</p>
<h1>This page could not be found</h1>
    <p class="lead">The link may be outdated or the address mistyped. Use the navigation above, or head back to the homepage.</p>
  <p class="btn-row btn-row--center"><a class="btn btn--primary" href="/">Back to home</a><a class="btn btn--ghost" href="/contact">Contact us</a></p>
    </div>
</section>`,
};

async function build() {
  const started = process.hrtime.bigint();
  await rm(outDir, { recursive: true, force: true });
  await mkdir(outDir, { recursive: true });

  const pages = await loadPages();
  for (const page of pages) {
    const file = outputFile(page.route);
    await mkdir(dirname(file), { recursive: true });
    await writeFile(file, layout(page), "utf8");
  }

  await cp(join(root, "assets"), join(outDir, "assets"), { recursive: true });
  await writeFile(join(outDir, "sitemap.xml"), sitemap(pages), "utf8");
  await writeFile(join(outDir, "robots.txt"), robots(), "utf8");
  await writeFile(join(outDir, "404.html"), layout(notFound), "utf8");

  const ms = Number(process.hrtime.bigint() - started) / 1e6;
  console.log(`\n  ${site.name}: ${pages.length} pages -> dist/  (${ms.toFixed(0)}ms)\n`);
  for (const p of pages) console.log(`  ${p.route}`);
  console.log("");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
