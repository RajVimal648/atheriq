/**
 * Blog index (/blog) and the article pages (/blog/<slug>).
 *
 * Filtering and search are progressive enhancement: the index renders every
 * post server-side, and main.js only hides cards once JavaScript is available.
 */
import { posts, sortedPosts, featuredPost, categories, categoryLabel, postBySlug } from "../content/posts.js";
import { serviceBySlug } from "../content/services.js";
import { site, cta } from "../content/site.js";
import { icon } from "../icons.js";
import { breadcrumbSchema, articleSchema, blogSchema } from "../schema.js";
import {
  btn,
  btnRow,
  sectionHead,
  breadcrumb,
  pageHero,
  postCard,
  formatDate,
  ctaBand,
  esc,
} from "../components.js";

/* ------------------------------------------------------------- blog index */

const indexTrail = [{ label: "Blog", href: "/blog" }];

/** Only offer filters for categories that actually have posts. */
const usedCategories = categories.filter((c) => posts.some((p) => p.category === c.id));

export const blogIndex = {
  route: "/blog",
  title: "Blog | Technical Articles on Development, Cloud & Integration",
  description:
    "Practical articles on ERP and CRM integration, Core Web Vitals, choosing between Azure and AWS, and when custom software is the wrong answer.",
  schema: [breadcrumbSchema(indexTrail, "/blog"), blogSchema(sortedPosts)],
  body: `
${breadcrumb(indexTrail)}
${pageHero({
  eyebrow: "Insights",
  title: "Technical Writing, Not Content Marketing",
  lead: "Articles on the problems that come up repeatedly in client work — written for the person who has to make the decision, not for a keyword.",
  variant: "plain",
})}

<section class="section section--sm">
  <div class="container">
    <div class="filters">
      <button class="filter is-active" type="button" data-filter="all" aria-pressed="true">All articles</button>
      ${usedCategories
        .map(
          (c) =>
            `<button class="filter" type="button" data-filter="${esc(c.id)}" aria-pressed="false">${c.label}</button>`
        )
        .join("")}
      <div class="search-field">
        <label class="visually-hidden" for="post-search">Search articles</label>
        ${icon("search", { size: 16 })}
        <input type="search" id="post-search" data-post-search placeholder="Search articles"
               autocomplete="off">
      </div>
    </div>

    <div class="grid grid--3" data-post-list>
      ${sortedPosts
        .map(
          (p) => `<div class="reveal" data-category="${esc(p.category)}">${postCard(p, {
            categoryLabel,
            featured: p.slug === featuredPost.slug,
          })}</div>`
        )
        .join("")}
    </div>

    <p class="no-results" data-no-results hidden>No articles match that search. Try a different
      term, or <button class="btn btn--link" type="button" data-filter="all">show all
      articles</button>.</p>
  </div>
</section>

${ctaBand({
  eyebrow: "Beyond the blog",
  heading: "Have a Question These Articles Do Not Answer?",
  text: "Most of what we write about started as a client question. Ask yours directly.",
  buttons: [cta.consultation, { ...cta.services, variant: "light" }],
  note: site.contact.responseTime,
})}`,
};

/* ------------------------------------------------------------ article page */

/** Heading text -> anchor id. Used for both the contents list and the H2s. */
const slugify = (text) =>
  text
    .replace(/<[^>]+>/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Pull H2s out of the body to build the in-page contents list. */
const headings = (body) =>
  [...body.matchAll(/<h2>(.*?)<\/h2>/g)].map((m) => ({ text: m[1], id: slugify(m[1]) }));

/** Add the matching ids to the rendered H2s so the contents list can link. */
const withAnchors = (body) =>
  body.replace(/<h2>(.*?)<\/h2>/g, (_, text) => `<h2 id="${slugify(text)}">${text}</h2>`);

const articlePage = (post) => {
  const trail = [
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];
  const toc = headings(post.body);
  const related = (post.related ?? []).map((slug) => postBySlug[slug]).filter(Boolean);

  return {
    route: `/blog/${post.slug}`,
    title: `${post.title} | AtherIQ`,
    ogType: "article",
    description: post.metaDescription ?? post.excerpt,
    schema: [breadcrumbSchema(trail, `/blog/${post.slug}`), articleSchema(post)],
    body: `
${breadcrumb(trail)}

<article>
  <header class="section section--sm">
    <div class="container">
      <div class="article-head">
        <p class="tag tag--brand">${categoryLabel(post.category)}</p>
        <h1>${post.title}</h1>
        <p class="lead mt-2">${post.excerpt}</p>
        <div class="article-meta">
          <span>${post.author}</span>
          <span class="dot" aria-hidden="true"></span>
          <time datetime="${post.date}">${formatDate(post.date)}</time>
          <span class="dot" aria-hidden="true"></span>
          <span>${post.readingTime} min read</span>
          ${
            post.updated
              ? `<span class="dot" aria-hidden="true"></span><span>Updated ${formatDate(post.updated)}</span>`
              : ""
          }
        </div>
      </div>
    </div>
  </header>

  <div class="container article-body">
    <div class="split split--wide-left split--sticky">
      <div>
        ${
          toc.length > 2
            ? `<nav class="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>${toc.map((h) => `<li><a href="#${h.id}">${h.text}</a></li>`).join("")}</ol>
        </nav>`
            : ""
        }
        <div class="prose mt-3">${withAnchors(post.body)}</div>
      </div>

      <aside class="panel">
        <h2 class="panel__title">Working on this?</h2>
        <p class="text-sm">If this article describes a problem you are dealing with, we can talk
          through your specific case — no charge and no obligation.</p>
        ${btnRow([cta.consultation])}
        <p class="text-sm text-muted mt-2">
          <a href="${site.contact.phoneHref}">${site.contact.phoneDisplay}</a><br>
          <a href="${site.contact.emailHref}">${site.contact.email}</a>
        </p>
      </aside>
    </div>
  </div>
</article>

${
  related.length
    ? `<section class="section section--soft section--line-top">
  <div class="container">
    ${sectionHead({ eyebrow: "Related reading", title: "More on This Topic", wide: true })}
    <div class="grid grid--2">
      ${related.map((r) => postCard(r, { categoryLabel })).join("")}
    </div>
  </div>
</section>`
    : ""
}

${ctaBand({
  eyebrow: "Next step",
  heading: "Let's Build Something That Works for Your Business.",
  text: "Bring us the problem behind the search that brought you here.",
  buttons: [cta.consultation, { ...cta.quote, variant: "light" }],
  note: site.contact.responseTime,
})}`,
  };
};

export const blogPostPages = posts.map(articlePage);
