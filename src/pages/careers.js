/**
 * Careers.
 *
 * The listed roles are open-application areas, not fabricated vacancies -
 * `type: "Open application"` in the content file, surfaced plainly here so
 * nobody applies to a job that does not exist. JobPosting schema is
 * deliberately NOT emitted for the same reason.
 */
import { careers } from "../content/company.js";
import { site } from "../content/site.js";
import { icon } from "../icons.js";
import { breadcrumbSchema } from "../schema.js";
import {
  btn,
  sectionHead,
  breadcrumb,
  pageHero,
  featureCard,
  checkList,
  ctaBand,
  contactStrip,
} from "../components.js";

const trail = [{ label: "Careers", href: "/careers" }];

const applyHref = (role) =>
  `${site.contact.emailHref}?subject=${encodeURIComponent(`Application: ${role}`)}`;

const job = (o) => `
<article class="job">
  <div>
    <div class="job__meta">
      <span>${o.area}</span>
      <span>${o.type}</span>
      <span>${o.location}</span>
    </div>
    <h3 class="job__title">${o.title}</h3>
    <p class="job__text">${o.text}</p>
  </div>
  ${btn({ label: "Apply by email", href: applyHref(o.title), variant: "ghost" })}
</article>`;

export const careersPage = {
  route: "/careers",
  title: "Careers at AtherIQ | Software, Cloud & Engineering Roles",
  description:
    "Open applications for developers, cloud and DevOps engineers, mobile developers and SEO specialists. Engineering-led work with direct client contact.",
  schema: [breadcrumbSchema(trail, "/careers")],
  body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: "Careers",
  title: "Work With Us",
  lead: careers.intro,
  buttons: [{ label: "Send an open application", href: applyHref("Open application") }],
})}

<section class="section">
  <div class="container">
    ${sectionHead({
      eyebrow: "Culture",
      title: "How It Is to Work Here",
      text: "Written plainly, because job pages that promise a family atmosphere tend to mean something else.",
      wide: true,
    })}
    <div class="grid grid--2">
      ${careers.culture.map((c) => `<div class="reveal">${featureCard(c)}</div>`).join("")}
    </div>
  </div>
</section>

<section class="section section--soft section--line-top">
  <div class="container">
    ${sectionHead({
      eyebrow: "Opportunities",
      title: "Areas We Accept Applications In",
      text: "We are not advertising specific vacancies at the moment. The areas below are where we review open applications, and we do read them.",
      wide: true,
    })}
    <div class="mt-3">
      ${careers.openings.map(job).join("")}
    </div>
    <p class="text-sm text-muted mt-3">Marked <strong>Open application</strong> — these are
      capability areas rather than confirmed vacancies. If a role opens in one of them, applications
      already on file are the first place we look.</p>
  </div>
</section>

<section class="section">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "Applying",
        title: "What to Send",
      })}
      <p class="lead">A CV is fine. Something you have built is better.</p>
      ${checkList([
        "A short note on what you want to work on and why",
        "Your CV, or a profile link that covers the same ground",
        "A repository, project or piece of work you can talk through",
        "Where you are based and how you prefer to work",
      ])}
      <p class="mt-2">We reply to applications we can take forward and, where time allows, to
        those we cannot. Our interview is a technical conversation about a real problem, not a
        whiteboard puzzle with a memorised answer.</p>
    </div>
    <aside class="panel">
      <h2 class="panel__title">Send it here</h2>
      ${contactStrip()}
      <p class="text-sm text-muted mt-2">Use the subject line "Application" and the area you are
        interested in.</p>
    </aside>
  </div>
</section>

${ctaBand({
  eyebrow: "Get in touch",
  heading: "Think You Would Fit Here?",
  text: "Send an open application. We keep them on file and review them when a role opens.",
  buttons: [
    { label: "Email your application", href: applyHref("Open application") },
    { label: "Learn about AtherIQ", href: "/about", variant: "light" },
  ],
})}`,
};
