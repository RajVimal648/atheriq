/**
 * Technologies. Grouped rather than presented as a logo wall, because the
 * useful information is what each technology is used for - not that we can
 * spell it.
 */
import { techGroups } from "../content/technologies.js";
import { site, cta } from "../content/site.js";
import { icon } from "../icons.js";
import { breadcrumbSchema } from "../schema.js";
import { btn, sectionHead, breadcrumb, pageHero, ctaBand, checkList } from "../components.js";

const trail = [{ label: "Technologies", href: "/technologies" }];

const group = (g) => `
<article class="tech-group reveal" id="${g.id}">
  <div class="tech-group__head">
    <span class="tech-group__icon">${icon(g.icon, { size: 20 })}</span>
    <h2 class="card__title">${g.title}</h2>
  </div>
  <p class="tech-group__blurb">${g.blurb}</p>
  <ul class="tech-list">
    ${g.items.map((i) => `<li><b>${i.name}</b><span>${i.note}</span></li>`).join("")}
  </ul>
</article>`;

export const technologies = {
  route: "/technologies",
  title: "Technologies We Work With | AtherIQ Technology Stack",
  description:
    "The stack AtherIQ supports in production: React, Angular, .NET, Node.js, Python, SQL Server, PostgreSQL, Azure, AWS, Docker, Kubernetes and REST APIs.",
  schema: [breadcrumbSchema(trail, "/technologies")],
  body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: "Technology",
  title: "The Stack We Support in Production",
  lead: "We list what we genuinely build, deploy and maintain for clients. A shorter list, supported properly, is worth more to you than a longer one nobody on the team has run at scale.",
  buttons: [cta.consultation, { ...cta.services, variant: "ghost", icon: "arrow" }],
})}

<section class="section">
  <div class="container">
    <nav class="filters" aria-label="Technology categories">
      ${techGroups.map((g) => `<a class="filter" href="#${g.id}">${g.title}</a>`).join("")}
    </nav>
    <div class="grid grid--2">
      ${techGroups.map(group).join("")}
    </div>
  </div>
</section>

<section class="section section--soft section--line-top">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "How we choose",
        title: "Why This List and Not a Longer One",
      })}
      <p class="lead">The best technology for your project is usually the one that is well
        understood, well supported and easy to hire for — not the one that was released last
        quarter.</p>
      <p class="mt-2">We choose a stack against four questions: does it fit the workload, can it be
        operated by whoever runs it after us, is there a real support and security track record,
        and does it lock you into a single vendor unnecessarily.</p>
      <p class="mt-1">Where something newer genuinely solves a problem the established option
        cannot, we will make that case explicitly and explain the trade-off. What we will not do is
        introduce an unfamiliar framework to a client project as a learning exercise.</p>
    </div>
    <aside class="panel">
      <h2 class="panel__title">Working with what you already have</h2>
      <p class="text-sm">If your systems run on something not listed here, that is not
        automatically a problem. We regularly integrate with platforms we would not choose to build
        on.</p>
      ${checkList([
        "Legacy databases and internal applications",
        "Third-party SaaS with a documented API",
        "ERP and CRM platforms of most vendors",
        "Existing codebases from a previous team",
      ])}
      <p class="text-sm text-muted mt-2">We will review it honestly and tell you if maintaining it
        is a poor use of your budget.</p>
    </aside>
  </div>
</section>

${ctaBand({
  eyebrow: "Architecture",
  heading: "Not Sure Which Stack Fits Your Project?",
  text: "Bring the requirements and constraints. We will recommend an architecture and explain why — including the trade-offs.",
  buttons: [cta.consultation, { ...cta.quote, variant: "light" }],
  note: site.contact.responseTime,
})}`,
};
