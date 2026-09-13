/**
 * HTML document shell: meta, Open Graph, structured data, header, footer.
 * Ports to Views/Shared/_Layout.cshtml.
 *
 * A page object supplies:
 *   route, title, description   required
 *   ogType, image               optional social metadata
 *   schema                      array of JSON-LD objects merged into @graph
 *   bodyClass                   optional class on <body>
 *   body                        the page markup
 *   noindex                     excluded from sitemap and marked noindex
 */
import { site } from "./content/site.js";
import { header } from "./partials/header.js";
import { footer } from "./partials/footer.js";
import { esc } from "./components.js";

const canonical = (route) => `${site.url}${route === "/" ? "/" : route}`;

/** Organisation node referenced by every other schema entity on the site. */
const organization = () => ({
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  description: site.shortDescription,
  foundingDate: String(site.foundingYear),
  logo: {
    "@type": "ImageObject",
    "@id": `${site.url}/#logo`,
    url: `${site.url}/assets/img/atheriq-logo.svg`,
    width: 512,
    height: 512,
  },
  image: { "@id": `${site.url}/#logo` },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-6394848080",
      email: site.contact.email,
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
  ],
  sameAs: site.social.filter((s) => s.url).map((s) => s.url),
});

const website = () => ({
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.name,
  description: site.shortDescription,
  publisher: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
});

const webPage = (page) => ({
  "@type": "WebPage",
  "@id": `${canonical(page.route)}#webpage`,
  url: canonical(page.route),
  name: page.title,
  description: page.description,
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` },
  inLanguage: "en",
});

const jsonLd = (page) => {
  const graph = [organization(), website(), webPage(page), ...(page.schema ?? [])];
  // Escaping </script> is the only injection vector inside a JSON-LD block.
  return `<script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  }).replace(/</g, "\\u003c")}</script>`;
};

export function layout(page) {
  const url = canonical(page.route);
  const image = `${site.url}${page.image ?? "/assets/img/atheriq-og.svg"}`;

  return `<!doctype html>
<html lang="${site.lang}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
<link rel="canonical" href="${url}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">'}

<meta property="og:type" content="${page.ogType ?? "website"}">
<meta property="og:site_name" content="${site.name}">
<meta property="og:title" content="${esc(page.ogTitle ?? page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${image}">
<meta property="og:locale" content="${site.locale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(page.ogTitle ?? page.title)}">
<meta name="twitter:description" content="${esc(page.description)}">
<meta name="twitter:image" content="${image}">

<meta name="theme-color" content="#0B1220">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"></noscript>

<link rel="stylesheet" href="/assets/css/style.css">
<script>document.documentElement.classList.replace('no-js','js')</script>
${jsonLd(page)}
</head>
<body${page.bodyClass ? ` class="${page.bodyClass}"` : ""}>
<a class="skip-link" href="#main">Skip to main content</a>
${header(page.route)}
<main id="main">
${page.body}
</main>
${footer()}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}
