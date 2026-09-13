/**
 * JSON-LD builders. Pages attach these via their `schema` array and the layout
 * merges them into a single @graph.
 */
import { site } from "./content/site.js";

const abs = (path) => `${site.url}${path}`;

export const breadcrumbSchema = (trail, route) => ({
  "@type": "BreadcrumbList",
  "@id": `${abs(route)}#breadcrumb`,
  itemListElement: [{ label: "Home", href: "/" }, ...trail].map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.label,
    item: item.href ? abs(item.href) : abs(route),
  })),
});

export const serviceSchema = (service) => ({
  "@type": "Service",
  "@id": `${abs(`/services/${service.slug}`)}#service`,
  name: service.name,
  description: service.metaDescription,
  serviceType: service.name,
  url: abs(`/services/${service.slug}`),
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "Country", name: "India" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${service.name} capabilities`,
    itemListElement: service.capabilities.map((c) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: c.title, description: c.text },
    })),
  },
});

export const faqSchema = (items, route) => ({
  "@type": "FAQPage",
  "@id": `${abs(route)}#faq`,
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const articleSchema = (post) => ({
  "@type": "BlogPosting",
  "@id": `${abs(`/blog/${post.slug}`)}#article`,
  headline: post.title,
  description: post.metaDescription ?? post.excerpt,
  datePublished: post.date,
  dateModified: post.updated ?? post.date,
  author: { "@type": "Organization", name: post.author, url: site.url },
  publisher: { "@id": `${site.url}/#organization` },
  mainEntityOfPage: { "@id": `${abs(`/blog/${post.slug}`)}#webpage` },
  inLanguage: "en",
  wordCount: post.body.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length,
});

export const blogSchema = (posts) => ({
  "@type": "Blog",
  "@id": `${abs("/blog")}#blog`,
  name: `${site.name} Blog`,
  url: abs("/blog"),
  publisher: { "@id": `${site.url}/#organization` },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    url: abs(`/blog/${p.slug}`),
    datePublished: p.date,
  })),
});

export const itemListSchema = (items, route, name) => ({
  "@type": "ItemList",
  "@id": `${abs(route)}#list`,
  name,
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    url: abs(item.href),
  })),
});

/**
 * LocalBusiness is deliberately NOT emitted: it requires a verified street
 * address, and inventing one would be both wrong and an SEO liability.
 * Add it here once a registered business address is available.
 */
export const contactPageSchema = (route) => ({
  "@type": "ContactPage",
  "@id": `${abs(route)}#contactpage`,
  url: abs(route),
  name: `Contact ${site.name}`,
  mainEntity: { "@id": `${site.url}/#organization` },
});
