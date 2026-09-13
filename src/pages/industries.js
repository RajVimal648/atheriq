/**
 * Industries. Capability-based descriptions only - we do not claim clients in
 * a sector we have not worked in.
 */
import { industries } from "../content/company.js";
import { site, cta } from "../content/site.js";
import { icon } from "../icons.js";
import { breadcrumbSchema, itemListSchema } from "../schema.js";
import { btn, sectionHead, breadcrumb, pageHero, ctaBand } from "../components.js";

const trail = [{ label: "Industries", href: "/industries" }];

const card = (i) => `
<article class="industry reveal" id="${i.slug}">
  <div class="industry__head">
    <span class="industry__icon">${icon(i.icon, { size: 20 })}</span>
    <h2 class="card__title">${i.name}</h2>
  </div>
  <p class="industry__text">${i.text}</p>
  <ul class="industry__needs">
    ${i.needs.map((n) => `<li>${n}</li>`).join("")}
  </ul>
</article>`;

export const industriesPage = {
  route: "/industries",
  title: "Industries We Serve | AtherIQ Software & Integration",
  description:
    "AtherIQ works with e-commerce, education, healthcare, finance, manufacturing, startups, agencies, SMBs and enterprise teams on software and integration.",
  schema: [
    breadcrumbSchema(trail, "/industries"),
    itemListSchema(
      industries.map((i) => ({ name: i.name, href: `/industries#${i.slug}` })),
      "/industries",
      "Industries served by AtherIQ"
    ),
  ],
  body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: "Industries",
  title: "Sectors We Build For",
  lead: "The engineering is broadly the same across sectors. What differs is the vocabulary, the compliance expectations and which failure modes are unacceptable — and that is what we take time to understand.",
  buttons: [cta.consultation, { ...cta.portfolio, variant: "ghost", icon: "arrow" }],
})}

<section class="section">
  <div class="container">
    <div class="grid grid--3">
      ${industries.map(card).join("")}
    </div>
  </div>
</section>

<section class="section section--soft section--line-top">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "Not listed?",
        title: "Sector Experience Is Not the Same as Domain Understanding",
      })}
      <p class="lead">A supplier who has built ten systems in your industry may still not
        understand how your business runs — because the interesting parts are usually specific to
        the company, not the sector.</p>
      <p class="mt-2">What transfers between projects is the engineering: how to model data
        properly, where integrations break, how to handle access control, and how to keep an
        application maintainable. What does not transfer is your process, and we learn that from
        you at the start of every project regardless of sector.</p>
      <p class="mt-1">If your industry is not listed above, it is worth a conversation. The
        question we will ask is what your process actually looks like — not which vertical you
        file under.</p>
      ${btn({ label: "Tell us about your business", href: "/contact", variant: "link", icon: "arrow" })}
    </div>
    <aside class="panel panel--brand">
      <h2 class="panel__title">Common across every sector</h2>
      <p class="text-sm">Whatever the industry, the same four requirements come up in almost every
        engagement:</p>
      <ul class="industry__needs mt-2">
        <li>Systems that do not talk to each other</li>
        <li>A manual process nobody has time to redesign</li>
        <li>Reporting assembled by hand from several sources</li>
        <li>An application that has outgrown how it was built</li>
      </ul>
    </aside>
  </div>
</section>

${ctaBand({
  eyebrow: "Get started",
  heading: "Let's Build Something That Works for Your Business.",
  text: "Describe the process you want to improve. We will tell you what the software side of it looks like.",
  buttons: [cta.consultation, { ...cta.quote, variant: "light" }],
  note: site.contact.responseTime,
})}`,
};
