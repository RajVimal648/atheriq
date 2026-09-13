/**
 * Portfolio. Case detail is rendered inline (anchored by slug) rather than on
 * separate routes, because there are four projects - splitting them would give
 * four thin pages competing for the same keywords.
 *
 * No metrics or client names appear here that were not supplied by the client.
 */
import { projects } from "../content/projects.js";
import { serviceBySlug } from "../content/services.js";
import { site, cta } from "../content/site.js";
import { icon } from "../icons.js";
import { breadcrumbSchema, itemListSchema } from "../schema.js";
import {
  btn,
  sectionHead,
  breadcrumb,
  pageHero,
  projectCard,
  chips,
  ctaBand,
} from "../components.js";

const trail = [{ label: "Portfolio", href: "/portfolio" }];

const caseBlock = (p) => `
<article class="case" id="${p.slug}">
  <div class="case__head">
    <p class="tag">${p.category}</p>
    <h2 class="case__title">${p.title}</h2>
  </div>

  <p class="lead measure">${p.summary}</p>

  <div class="case__grid mt-3">
    <div class="case__block">
      <h3>The problem</h3>
      <p>${p.problem}</p>
    </div>
    <div class="case__block">
      <h3>What we built</h3>
      <p>${p.solution}</p>
    </div>
    <div class="case__block">
      <h3>The outcome</h3>
      <p>${p.outcome}</p>
    </div>
    <div class="case__block">
      <h3>Technology</h3>
      ${chips(p.stack, `${p.title} technology stack`)}
    </div>
  </div>

  <div class="case__foot">
    <ul class="chips" aria-label="Services involved">
      ${p.services
        .map((slug) => serviceBySlug[slug])
        .filter(Boolean)
        .map((s) => `<li class="chip"><a href="/services/${s.slug}">${s.name}</a></li>`)
        .join("")}
    </ul>
    ${btn({ label: "Discuss a similar project", href: "/contact", variant: "link", icon: "arrow" })}
  </div>
</article>`;

export const portfolio = {
  route: "/portfolio",
  title: "Portfolio | Software, Cloud & Integration Projects | AtherIQ",
  description:
    "Selected AtherIQ projects across AI tooling, Azure application platforms, e-commerce and CRM integration — the problem, the build and the result.",
  schema: [
    breadcrumbSchema(trail, "/portfolio"),
    itemListSchema(
      projects.map((p) => ({ name: p.title, href: `/portfolio#${p.slug}` })),
      "/portfolio",
      "AtherIQ projects"
    ),
  ],
  body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: "Our work",
  title: "Projects We Have Designed, Built and Integrated",
  lead: "Each project below sets out the problem, the approach we took and what changed as a result. Where a figure is not published here, it is because we do not have the client's permission to share it.",
  buttons: [cta.project, { ...cta.services, variant: "ghost", icon: "arrow" }],
})}

<section class="section section--sm">
  <div class="container">
    <div class="grid grid--2">
      ${projects.map((p) => `<div class="reveal">${projectCard(p)}</div>`).join("")}
    </div>
  </div>
</section>

<section class="section section--sm">
  <div class="container">
    ${sectionHead({
      eyebrow: "Case detail",
      title: "How These Projects Were Delivered",
      text: "Longer form, for anyone evaluating whether we have handled something comparable.",
      wide: true,
    })}
    ${projects.map(caseBlock).join("")}
  </div>
</section>

<section class="section section--soft section--line-top">
  <div class="container measure center-block">
    ${sectionHead({
      eyebrow: "A note on numbers",
      title: "Why You Will Not See Percentages Here",
      align: "center",
    })}
    <p>Performance claims are only meaningful with a baseline, a measurement
      method and the client's agreement to publish them. Rather than print figures we cannot
      substantiate, we describe what was built and what it enables. On a call we can walk you
      through the technical detail of any project above.</p>
    <div class="btn-row btn-row--center mt-3">
      ${btn({ label: "Ask about a project", href: "/contact" })}
    </div>
  </div>
</section>

${ctaBand({
  eyebrow: "Your project",
  heading: "Have Something Similar in Mind?",
  text: "Tell us what you are trying to build or connect. We will tell you how we would approach it.",
  buttons: [cta.consultation, { ...cta.quote, variant: "light" }],
  note: site.contact.responseTime,
})}`,
};
