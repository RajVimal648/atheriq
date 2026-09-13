/**
 * About Us.
 *
 * Written to establish credibility without unverifiable claims: no client
 * counts, no years-in-business, no awards. What we can say honestly is how we
 * work and what we will tell you before you commit.
 */
import { site, cta } from "../content/site.js";
import { principles, engagementModels, differentiators } from "../content/company.js";
import { serviceGroups, servicesIn } from "../content/services.js";
import { breadcrumbSchema } from "../schema.js";
import { icon } from "../icons.js";
import {
  btn,
  btnRow,
  sectionHead,
  breadcrumb,
  pageHero,
  featureCard,
  checkList,
  ctaBand,
  definitionGrid,
} from "../components.js";

const trail = [{ label: "About Us", href: "/about" }];

const intro = () => `
<section class="section">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "Who we are",
        title: "A Technology Partner, Not a Vendor",
      })}
      <p class="lead">${site.longDescription}</p>
      <p class="mt-2">AtherIQ was founded on a straightforward observation: most business software
        problems are not really technology problems. They are the result of systems that were
        chosen separately, connected late, and never quite made to agree with each other. The code
        is rarely the hard part. Deciding what the software should do, and getting the existing
        systems to co-operate, is where projects succeed or quietly fail.</p>
      <p class="mt-1">So we work the other way round. We spend the early time on the process, the
        constraints and the exceptions before committing to an architecture. It makes the first
        conversations slower and the rest of the project considerably faster.</p>
      <p class="mt-1">We are a small, engineering-led team. That has trade-offs, and we are direct
        about them: we take on fewer projects at once, and you speak to the people who write the
        code rather than to an account layer above them.</p>
    </div>

    <aside class="panel">
      <h2 class="panel__title">What we will tell you</h2>
      <p class="text-sm">Before you commit budget, you will hear our honest read on:</p>
      ${checkList([
        "Whether an off-the-shelf product would serve you better",
        "Which requirements can wait until after launch",
        "Where your timeline is unrealistic, and why",
        "What the integration work will genuinely involve",
        "What the ongoing running and support cost looks like",
      ])}
      <p class="text-sm text-muted mt-2">We would rather lose a project at the quoting stage than
        deliver one that should not have been built.</p>
    </aside>
  </div>
</section>`;

const missionVision = () => `
<section class="section section--soft section--line-top">
  <div class="container">
    <div class="grid grid--2">
      <article class="panel reveal">
        <p class="eyebrow">Our mission</p>
        <h2 class="panel__title">Build, integrate and improve the digital systems your business relies on.</h2>
        <p class="text-sm">To deliver software that measurably reduces manual work, connects
          systems that should already be talking to each other, and holds up under daily use by
          people who did not choose it.</p>
      </article>
      <article class="panel reveal">
        <p class="eyebrow">Our vision</p>
        <h2 class="panel__title">Technology decisions a business can understand and defend.</h2>
        <p class="text-sm">To be the technology partner businesses keep, because the systems we
          build remain maintainable, extensible and understood long after the first release.</p>
      </article>
    </div>
  </div>
</section>`;

const approach = () => `
<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrow: "Our approach",
      title: "How We Make Technical Decisions",
      text: "Six principles that decide what we build, what we advise against, and what we say when a project is heading somewhere expensive.",
      align: "center",
      wide: true,
    })}
    <div class="grid grid--3">
      ${principles.map((p) => `<div class="reveal">${featureCard(p)}</div>`).join("")}
    </div>
  </div>
</section>`;

const expertise = () => `
<section class="section section--dark">
  <div class="container">
    ${sectionHead({
      eyebrow: "Capability",
      title: "What We Cover",
      text: "Five practice areas that work together on most projects — which is the reason they sit under one team rather than being subcontracted apart.",
      wide: true,
    })}
    <div class="grid grid--2">
      ${serviceGroups
        .map(
          (g) => `<article class="card card--feature reveal">
        <h3 class="card__title">${g.title}</h3>
        <p class="card__text">${g.blurb}</p>
        <ul class="chips mt-2" aria-label="${g.title} services">
          ${servicesIn(g.id)
            .map((s) => `<li class="chip"><a href="/services/${s.slug}">${s.name}</a></li>`)
            .join("")}
        </ul>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>`;

const strengths = () => `
<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrow: "Why it works",
      title: "What Clients Say Made the Difference",
      text: "Not a testimonial wall — the practical things that come up repeatedly in project reviews.",
      wide: true,
    })}
    <div class="grid grid--3">
      ${differentiators.map((d) => `<div class="reveal">${featureCard(d)}</div>`).join("")}
    </div>
  </div>
</section>`;

const engagement = () => `
<section class="section section--soft section--line-top">
  <div class="container">
    ${sectionHead({
      eyebrow: "Working together",
      title: "Engagement Models",
      text: "Three ways to work with us. The right one depends on how settled your requirements are and whether the work has an end date.",
      wide: true,
    })}
    ${definitionGrid(engagementModels)}
    <div class="grid grid--3 mt-3">
      ${engagementModels
        .map(
          (m) => `<p class="text-sm text-muted"><strong>${m.title}</strong> — best fit:
        ${m.fit}.</p>`
        )
        .join("")}
    </div>
    <div class="btn-row mt-3">
      ${btn({ label: "Discuss which model fits", href: "/contact" })}
      ${btn({ label: "Request a Quote", href: "/request-a-quote", variant: "ghost", icon: "arrow" })}
    </div>
  </div>
</section>`;

const commitment = () => `
<section class="section">
  <div class="container split split--reverse">
    <div class="panel panel--brand">
      <h2 class="panel__title">Ownership stays with you</h2>
      ${checkList([
        "Source code is yours, in your repository",
        "Cloud accounts registered to your business",
        "Domains and store listings in your name",
        "Documentation handed over as part of delivery",
        "No proprietary lock-in layer you cannot leave",
      ])}
      <p class="text-sm mt-2">This holds whether or not we keep working together.</p>
    </div>
    <div>
      ${sectionHead({
        eyebrow: "Commitments",
        title: "The Things We Do Not Negotiate",
      })}
      <p>Some parts of a project are not scope items to be traded away when a budget tightens.
        Input validation, access control, secret management, accessible markup and a tested
        rollback path are part of building the thing properly.</p>
      <p class="mt-1">We include them by default and price them in, rather than presenting them
        later as an upgrade. If the budget will not cover the work done properly, we would rather
        reduce the scope than reduce the standard.</p>
      ${btn({ label: "Read how we work", href: "/process", variant: "link", icon: "arrow" })}
    </div>
  </div>
</section>`;

export const about = {
  route: "/about",
  title: "About AtherIQ | Software Development & Integration Company",
  description:
    "AtherIQ is an engineering-led technology company building web, mobile, cloud and integrated business systems. Learn how we work and what we commit to.",
  schema: [breadcrumbSchema(trail, "/about")],
  body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: "About AtherIQ",
  title: "Engineering-Led. Business-Focused.",
  lead: site.shortDescription,
  buttons: [cta.consultation, { ...cta.portfolio, variant: "ghost", icon: "arrow" }],
})}
${intro()}
${missionVision()}
${approach()}
${expertise()}
${strengths()}
${engagement()}
${commitment()}
${ctaBand({
  eyebrow: "Get in touch",
  heading: "Let's Build Something That Works for Your Business.",
  text: "Tell us what you are trying to build, improve or integrate. We will tell you what it realistically takes.",
  buttons: [cta.consultation, { ...cta.quote, variant: "light" }],
  note: site.contact.responseTime,
})}`,
};
