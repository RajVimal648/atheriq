/**
 * Home page.
 *
 * Section order is deliberate: what we do -> why us -> how we work -> what we
 * build with -> proof -> the two highest-intent service paths (integration and
 * SEO) -> objection handling -> conversion.
 */
import { services, serviceGroups, servicesIn } from "../content/services.js";
import { projects } from "../content/projects.js";
import { techGroups } from "../content/technologies.js";
import { differentiators, processSteps } from "../content/company.js";
import { homeFaqs } from "../content/faqs.js";
import { site, cta } from "../content/site.js";
import { icon } from "../icons.js";
import { faqSchema, itemListSchema } from "../schema.js";
import {
  btn,
  btnRow,
  sectionHead,
  serviceCard,
  projectCard,
  featureCard,
  stepList,
  checkList,
  faqList,
  ctaBand,
} from "../components.js";

/**
 * Hero visual: the layered shape of the work we actually deliver, from the
 * browser down to the systems we integrate with. Chosen over a stock
 * illustration because it says something specific about the service.
 */
const heroVisual = () => `
<div class="stack-viz" role="img"
     aria-label="Architecture diagram: web, mobile and portal clients over an API and application layer, running on Azure or AWS, integrated with CRM, ERP and payment systems.">
  <div class="stack-viz__bar" aria-hidden="true">
    <span class="stack-viz__dot"></span><span class="stack-viz__dot"></span><span class="stack-viz__dot"></span>
    <span class="stack-viz__label">Solution architecture</span>
  </div>

  <div class="stack-viz__row">
    <div class="stack-viz__node">${icon("browser", { size: 20 })}<b>Web</b></div>
    <div class="stack-viz__node">${icon("mobile", { size: 20 })}<b>Mobile</b></div>
    <div class="stack-viz__node">${icon("users", { size: 20 })}<b>Portals</b></div>
  </div>
  <span class="stack-viz__link" aria-hidden="true"></span>

  <div class="stack-viz__row stack-viz__row--2">
    <div class="stack-viz__node stack-viz__node--core">${icon("plug", { size: 20 })}<b>API layer</b></div>
    <div class="stack-viz__node stack-viz__node--core">${icon("code", { size: 20 })}<b>Applications</b></div>
  </div>
  <span class="stack-viz__link" aria-hidden="true"></span>

  <div class="stack-viz__row stack-viz__row--2">
    <div class="stack-viz__node">${icon("azure", { size: 20 })}<b>Azure</b></div>
    <div class="stack-viz__node">${icon("aws", { size: 20 })}<b>AWS</b></div>
  </div>
  <span class="stack-viz__link" aria-hidden="true"></span>

  <div class="stack-viz__row">
    <div class="stack-viz__node">${icon("users", { size: 20 })}<b>CRM</b></div>
    <div class="stack-viz__node">${icon("layers", { size: 20 })}<b>ERP</b></div>
    <div class="stack-viz__node">${icon("database", { size: 20 })}<b>Data</b></div>
  </div>

  <p class="stack-viz__caption">Every layer built, deployed and integrated by one team.</p>
</div>`;

const hero = () => `
<section class="hero">
  <div class="container hero__inner">
    <div>
      <p class="eyebrow">${site.tagline}</p>
      <h1 class="hero__title">Build Better Digital Experiences with AtherIQ</h1>
      <p class="lead hero__lead">We design, develop and integrate modern digital solutions that help
        businesses improve operations, reach customers and scale with confidence.</p>
      ${btnRow([cta.consultation, { ...cta.services, variant: "ghost", icon: "arrow" }])}
      <ul class="hero__points">
        <li>${icon("check", { size: 17 })}Web, mobile &amp; custom software</li>
        <li>${icon("check", { size: 17 })}Azure &amp; AWS cloud</li>
        <li>${icon("check", { size: 17 })}CRM &amp; ERP integration</li>
      </ul>
    </div>
    ${heroVisual()}
  </div>
</section>`;

const servicesSection = () => `
<section class="section">
  <div class="container">
    <div class="section-bar">
      ${sectionHead({
        eyebrow: "What we do",
        title: "Technology Solutions Built Around Your Business",
        text: "Twelve service areas, one delivery team. Most projects draw on several of these at once — which is the point of keeping them under one roof.",
      })}
      ${btn({ label: "View All Services", href: "/services", variant: "link", icon: "arrow" })}
    </div>
    <div class="grid grid--3">
      ${services.map((s) => `<div class="reveal">${serviceCard(s)}</div>`).join("")}
    </div>
  </div>
</section>`;

const whySection = () => `
<section class="section section--soft section--line-top">
  <div class="container">
    ${sectionHead({
      eyebrow: "Why AtherIQ",
      title: "Why Businesses Choose AtherIQ",
      text: "No award badges or invented statistics — just the things clients tell us made the difference.",
      align: "center",
      wide: true,
    })}
    <div class="grid grid--3">
      ${differentiators.map((d) => `<div class="reveal">${featureCard(d)}</div>`).join("")}
    </div>
  </div>
</section>`;

const processSection = () => `
<section class="section">
  <div class="container">
    <div class="section-bar">
      ${sectionHead({
        eyebrow: "How we work",
        title: "A Development Process You Can Follow",
        text: "Seven stages, each with something reviewable at the end. You always know what is being built and what comes next.",
      })}
      ${btn({ label: "See the full lifecycle", href: "/process", variant: "link", icon: "arrow" })}
    </div>
    ${stepList(processSteps)}
  </div>
</section>`;

/** Technology section: grouped, with the actual stack rather than a logo wall. */
const techSection = () => `
<section class="section section--dark">
  <div class="container">
    ${sectionHead({
      eyebrow: "Technology",
      title: "The Stack We Support in Production",
      text: "We list what we genuinely run and maintain for clients. If something is not here, we will tell you rather than learn it on your budget.",
      align: "center",
      wide: true,
    })}
    <div class="grid grid--4">
      ${techGroups
        .map(
          (g) => `<article class="card card--feature reveal">
        <div class="card__icon card__icon--plain">${icon(g.icon)}</div>
        <h3 class="card__title">${g.title}</h3>
        <p class="card__text">${g.items.map((i) => i.name).join(", ")}</p>
      </article>`
        )
        .join("")}
    </div>
    <div class="btn-row btn-row--center">
      ${btn({ label: "Explore our technologies", href: "/technologies", variant: "ghost", icon: "arrow" })}
    </div>
  </div>
</section>`;

const portfolioSection = () => `
<section class="section">
  <div class="container">
    <div class="section-bar">
      ${sectionHead({
        eyebrow: "Our work",
        title: "Selected Projects",
        text: "A sample of what we have designed, built and integrated. Each one includes the problem, the approach and what it changed.",
      })}
      ${btn({ label: "View all work", href: "/portfolio", variant: "link", icon: "arrow" })}
    </div>
    <div class="grid grid--2">
      ${projects.map((p) => `<div class="reveal">${projectCard(p)}</div>`).join("")}
    </div>
  </div>
</section>`;

/** High-intent integration section - CRM/ERP is a primary commercial driver. */
const integrationSection = () => `
<section class="section section--soft section--line-top">
  <div class="container split split--sticky">
    <div>
      ${sectionHead({
        eyebrow: "Integration",
        title: "Need to Connect Your CRM, ERP or Existing Applications?",
        text: "We can help integrate your CRM, ERP, APIs and existing business applications into a connected digital ecosystem — so data moves between systems without anyone re-typing it.",
      })}
      ${checkList(
        [
          "Two-way CRM synchronisation with lead source preserved",
          "ERP connected to e-commerce, portals and mobile apps",
          "Record ownership and conflict rules agreed before we build",
          "Retries, dead-letter queues and alerting on every integration",
          "Payment, logistics and accounting API integration",
          "A middleware layer, so replacing one system later is not a rebuild",
        ],
        { columns: 2 }
      )}
      ${btnRow([
        { label: "Discuss Your Integration", href: "/services/crm-integration" },
        { ...cta.quote, variant: "ghost" },
      ])}
    </div>

    <div class="panel">
      <h3 class="panel__title">Where integration usually goes wrong</h3>
      <p class="text-sm">Not in the code. It goes wrong when two systems are connected before
        anyone agreed what happens when they disagree about the same customer.</p>
      <p class="text-sm mt-1">We settle record ownership, sync frequency, identity matching and
        failure behaviour in writing first. It takes a couple of workshops and saves months.</p>
      ${btn({
        label: "Read the ERP integration checklist",
        href: "/blog/erp-integration-checklist-before-you-start",
        variant: "link",
        icon: "arrow",
      })}
    </div>
  </div>
</section>`;

const seoSection = () => `
<section class="section">
  <div class="container split split--reverse">
    <div class="panel panel--brand">
      <h3 class="panel__title">What we actually change</h3>
      ${checkList([
        "Technical SEO and indexation",
        "Core Web Vitals and page speed",
        "Mobile and responsive behaviour",
        "Search-friendly URL architecture",
        "Titles, metadata and heading structure",
        "Schema markup and rich results",
        "Sitemap and robots.txt",
        "Internal linking and content structure",
      ])}
    </div>
    <div>
      ${sectionHead({
        eyebrow: "Organic growth",
        title: "Turn Search Traffic Into Business Opportunities",
        text: "AtherIQ combines technical development with SEO-focused practices to help businesses build search-friendly websites that are structured for visibility, performance and conversions.",
      })}
      <p>Most of what holds a site back in search is structural: slow pages, a URL scheme that
        fragments authority, thin metadata, or content a crawler cannot reach. Because we build
        the site as well as optimise it, findings become commits rather than a report someone
        else has to action.</p>
      <p class="mt-1">We also prioritise queries where someone is actively looking for the
        service you sell. Ranking for terms that never convert is a vanity exercise.</p>
      ${btnRow([
        { label: "Talk to an SEO Specialist", href: "/services/seo" },
        { label: "SEO services", href: "/services/seo", variant: "ghost", icon: "arrow" },
      ])}
    </div>
  </div>
</section>`;

const faqSection = () => `
<section class="section section--soft section--line-top">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "Common questions",
        title: "Questions We Are Asked Before a Project Starts",
      })}
      ${faqList(homeFaqs, { name: "home-faq" })}
    </div>
    <div class="panel">
      <h3 class="panel__title">Still deciding?</h3>
      <p class="text-sm">A consultation costs nothing and is not a sales call. Tell us what you
        are trying to build, improve or integrate, and we will tell you what the right technical
        approach looks like — including when the answer is a product you can buy instead.</p>
      ${btnRow([cta.consultation])}
      <p class="text-sm text-muted mt-2">${site.contact.responseTime}</p>
      ${btn({ label: "See all FAQs", href: "/contact#faqs", variant: "link", icon: "arrow" })}
    </div>
  </div>
</section>`;

export const home = {
  route: "/",
  title: "AtherIQ | Web, Mobile, Cloud & CRM/ERP Integration Company",
  ogTitle: "AtherIQ | Technology. Innovation. Growth.",
  description:
    "AtherIQ builds websites, web and mobile applications, custom software and cloud solutions on Azure and AWS, with CRM, ERP, API integration and SEO services.",
  schema: [
    itemListSchema(
      services.map((s) => ({ name: s.name, href: `/services/${s.slug}` })),
      "/",
      "AtherIQ services"
    ),
    faqSchema(homeFaqs, "/"),
  ],
  body: `
${hero()}
${servicesSection()}
${whySection()}
${processSection()}
${techSection()}
${portfolioSection()}
${integrationSection()}
${seoSection()}
${faqSection()}
${ctaBand({
  eyebrow: "Next step",
  heading: "Have a Project in Mind? Let's Build It Together.",
  text: "Tell us what you are trying to build, improve or integrate. Our team can help you define the right technical approach.",
  buttons: [
    { label: "Start a Conversation", href: "/contact" },
    { ...cta.quote, variant: "light" },
  ],
  note: site.contact.responseTime,
})}`,
};
