/**
 * Services hub (/services) and the twelve service detail pages.
 *
 * Detail pages are generated from src/content/services.js - adding a service
 * there publishes a page here with no template change. In an MVC port this
 * file becomes ServicesController with Index() and Detail(slug) actions.
 */
import { services, serviceGroups, servicesIn, serviceBySlug } from "../content/services.js";
import { site, cta } from "../content/site.js";
import { icon } from "../icons.js";
import { breadcrumbSchema, serviceSchema, faqSchema, itemListSchema } from "../schema.js";
import {
  btn,
  btnRow,
  sectionHead,
  serviceCard,
  serviceLinkCard,
  breadcrumb,
  pageHero,
  checkList,
  definitionGrid,
  faqList,
  chips,
  featureCard,
  ctaBand,
} from "../components.js";

/* ------------------------------------------------------------- services hub */

const hubTrail = [{ label: "Services", href: "/services" }];

/** Short editorial note per group, kept out of the content file as page copy. */
const groupNotes = {
  development:
    "We build the front end, the back end and the database as one piece of work, so nobody is waiting on a third party to finish their half of the contract.",
  cloud:
    "We support Azure and AWS properly rather than listing every provider. Infrastructure is defined as code, so environments can be rebuilt rather than repaired.",
  integration:
    "Integration is where most of our work ends up, because it is where most business systems fail. We agree ownership and failure behaviour before writing the connector.",
  growth:
    "Because we build the sites we optimise, SEO findings become commits instead of a PDF someone else has to action.",
  intelligent:
    "We look for the repetitive task with a measurable cost first. If there is not one, we will tell you that AI is not worth the spend.",
};

export const servicesIndex = {
  route: "/services",
  title: "IT Services & Software Development Solutions | AtherIQ",
  description:
    "Web, mobile and custom software development, cloud services on Azure and AWS, CRM and ERP integration, API development, SEO and AI automation.",
  schema: [
    breadcrumbSchema(hubTrail, "/services"),
    itemListSchema(
      services.map((s) => ({ name: s.name, href: `/services/${s.slug}` })),
      "/services",
      "AtherIQ services"
    ),
  ],
  body: `
${breadcrumb(hubTrail)}
${pageHero({
  eyebrow: "Services",
  title: "Technology Services for Growing Businesses",
  lead: "Twelve service areas across development, cloud, integration and growth. Most projects use several — which is why we keep them in one team rather than handing them between suppliers.",
  buttons: [cta.consultation, { ...cta.quote, variant: "ghost" }],
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrow: "All services",
      title: "What We Deliver",
      text: "Each service page sets out what is included, the technology involved and the questions clients ask before starting.",
      wide: true,
    })}
    <div class="grid grid--3">
      ${services.map((s, i) => `<div class="reveal">${serviceCard(s, { index: i + 1 })}</div>`).join("")}
    </div>
  </div>
</section>

${serviceGroups
  .map(
    (g, i) => `
<section class="section${i % 2 === 0 ? " section--soft" : ""} section--line-top">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({ eyebrow: `0${i + 1} — ${g.title}`, title: g.blurb })}
      <div class="grid">
        ${servicesIn(g.id)
          .map((s) => serviceLinkCard(s))
          .join("")}
      </div>
    </div>
    <aside class="panel">
      <h3 class="panel__title">${g.title} at AtherIQ</h3>
      <p class="text-sm">${groupNotes[g.id]}</p>
      ${btn({ label: "Discuss this work", href: "/contact", variant: "link", icon: "arrow" })}
    </aside>
  </div>
</section>`
  )
  .join("")}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrow: "How engagements start",
      title: "Not Sure Which Service You Need?",
      text: "Most enquiries arrive as a business problem rather than a service name. That is the better starting point.",
      align: "center",
      wide: true,
    })}
    <div class="grid grid--3">
      ${[
        {
          icon: "compass",
          title: "Start with the problem",
          text: "Describe what is slow, manual, unreliable or missing. We will map it to the work that actually fixes it — which is occasionally less than you expected.",
        },
        {
          icon: "file",
          title: "Get it in writing",
          text: "You receive a written scope, an architecture outline and a quotation against it, so you can compare like with like rather than a headline price.",
        },
        {
          icon: "workflow",
          title: "Deliver in phases",
          text: "Work is sequenced so something useful ships early and the budget stays proportionate to what has been proven to work.",
        },
      ]
        .map((c) => `<div class="reveal">${featureCard(c)}</div>`)
        .join("")}
    </div>
  </div>
</section>

${ctaBand({
  eyebrow: "Next step",
  heading: "Let's Build Something That Works for Your Business.",
  text: "A consultation costs nothing and usually clarifies the scope faster than another round of internal discussion.",
  buttons: [cta.consultation, { ...cta.quote, variant: "light" }],
  note: site.contact.responseTime,
})}`,
};

/* ------------------------------------------------------- service detail page *//** Sidebar "at a glance" block - deliberately free of invented statistics. */
const facts = (s) => `
<dl class="facts">
  <div><dt>Service area</dt><dd>${serviceGroups.find((g) => g.id === s.group).title}</dd></div>
  <div><dt>Typical start</dt><dd>Discovery and written scope</dd></div>
  <div><dt>Delivery</dt><dd>Phased, with reviewable increments</dd></div>
  <div><dt>After launch</dt><dd>Support arrangement available</dd></div>
</dl>`;

const detailPage = (s) => {
  const trail = [
    { label: "Services", href: "/services" },
    { label: s.name, href: `/services/${s.slug}` },
  ];
  const related = s.related.map((slug) => serviceBySlug[slug]).filter(Boolean);

  return {
    route: `/services/${s.slug}`,
    title: s.metaTitle,
    description: s.metaDescription,
    schema: [breadcrumbSchema(trail, `/services/${s.slug}`), serviceSchema(s), faqSchema(s.faqs, `/services/${s.slug}`)],
    body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: serviceGroups.find((g) => g.id === s.group).title,
  title: s.name,
  lead: s.lead,
  buttons: [cta.consultation, { ...cta.quote, variant: "ghost" }],
  meta: facts(s),
})}

<section class="section">
  <div class="container split split--wide-left">
    <div class="measure">
      ${sectionHead({ eyebrow: "Overview", title: `${s.name} at AtherIQ` })}
      ${s.overview.map((p) => `<p${p === s.overview[0] ? ' class="lead"' : " class=\"mt-1\""}>${p}</p>`).join("")}
    </div>
    <aside class="panel">
      <h2 class="panel__title">Talk it through first</h2>
      <p class="text-sm">Bring the problem rather than a specification. We will tell you what the
        work involves, where the risk sits and roughly what it costs before you commit to anything.</p>
      ${btnRow([cta.consultation])}
      <p class="text-sm text-muted mt-2">
        <a href="${site.contact.phoneHref}">${site.contact.phoneDisplay}</a> ·
        <a href="${site.contact.emailHref}">${site.contact.email}</a>
      </p>
    </aside>
  </div>
</section>

<section class="section section--soft section--line-top">
  <div class="container">
    ${sectionHead({
      eyebrow: "What we provide",
      title: "Included in This Service",
      text: "The concrete deliverables. Where something is out of scope for your budget, we say so before the quotation rather than after.",
      wide: true,
    })}
    ${definitionGrid(s.capabilities)}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrow: "Business benefits",
      title: "Why It Matters Commercially",
      text: "Outcomes rather than a restatement of the feature list.",
      wide: true,
    })}
    <div class="grid grid--2">
      ${s.benefits.map((b) => `<div class="reveal">${featureCard(b)}</div>`).join("")}
    </div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${sectionHead({
      eyebrow: "Technology",
      title: `What We Build ${s.name} With`,
      text: "The stack we support in production for this service. We will recommend against anything on this list if it is wrong for your case.",
      wide: true,
    })}
    ${chips(s.stack, `${s.name} technologies`)}
    <div class="btn-row mt-3">
      ${btn({ label: "See our full stack", href: "/technologies", variant: "ghost", icon: "arrow" })}
    </div>
  </div>
</section>

<section class="section">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({ eyebrow: "Questions", title: "Frequently Asked Questions" })}
      ${faqList(s.faqs, { name: `faq-${s.slug}` })}
    </div>
    <aside class="panel panel--brand">
      <h2 class="panel__title">Ready to scope it?</h2>
      <p class="text-sm">Send us what you have — a brief, a wireframe, a spreadsheet of the current
        process, or just a description of what is not working.</p>
      ${btnRow([cta.quote])}
      <p class="text-sm text-muted mt-2">${site.contact.responseTime}</p>
    </aside>
  </div>
</section>

${
  related.length
    ? `<section class="section section--soft section--line-top">
  <div class="container">
    ${sectionHead({ eyebrow: "Related services", title: "Often Delivered Alongside", wide: true })}
    <div class="grid grid--2">
      ${related.map((r) => serviceLinkCard(r)).join("")}
    </div>
  </div>
</section>`
    : ""
}

${ctaBand({
  eyebrow: "Next step",
  heading: `Talk to Us About ${s.name}`,
  text: "A short conversation is usually enough to establish whether this is the right service and what it would take.",
  buttons: [cta.consultation, { ...cta.quote, variant: "light" }],
  note: site.contact.responseTime,
})}`,
  };
};

/** All twelve detail pages. build.mjs spreads exported arrays. */
export const serviceDetailPages = services.map(detailPage);
