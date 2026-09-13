/**
 * Our Process. The ten-stage lifecycle, plus what the client is expected to
 * provide at each point - the part most process pages leave out.
 */
import { lifecycle, processSteps, engagementModels } from "../content/company.js";
import { site, cta } from "../content/site.js";
import { icon } from "../icons.js";
import { breadcrumbSchema } from "../schema.js";
import {
  btn,
  sectionHead,
  breadcrumb,
  pageHero,
  stepList,
  checkList,
  ctaBand,
  definitionGrid,
} from "../components.js";

const trail = [{ label: "Our Process", href: "/process" }];

export const process = {
  route: "/process",
  title: "Our Development Process | How AtherIQ Delivers Projects",
  description:
    "A ten-stage delivery process from requirement discovery and architecture through development, integration, testing, deployment and ongoing support.",
  schema: [breadcrumbSchema(trail, "/process")],
  body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: "How we work",
  title: "A Development Process You Can Follow",
  lead: "Ten stages, each producing something you can read, review or run. You should never have to ask what is happening or what comes next.",
  buttons: [cta.consultation, { ...cta.quote, variant: "ghost" }],
})}

<section class="section section--sm">
  <div class="container">
    <div class="grid grid--4">
      ${processSteps
        .slice(0, 4)
        .map(
          (s) => `<article class="card card--feature reveal">
        <h2 class="card__title">${s.no} — ${s.title}</h2>
        <p class="card__text">${s.text}</p>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "The full lifecycle",
        title: "From First Conversation to Ongoing Support",
        text: "Every stage lists what it produces. If a stage has not produced its outputs, it is not finished — and we do not quietly move on from it.",
      })}
      ${stepList(lifecycle, { variant: "timeline" })}
    </div>

    <aside class="panel">
      <h2 class="panel__title">What we need from you</h2>
      <p class="text-sm">Projects run late for client-side reasons as often as supplier-side ones.
        The three that matter most:</p>
      ${checkList([
        "A decision-maker who can sign off scope",
        "Access to the people who run the current process",
        "Timely feedback at each review point",
        "Credentials and access to existing systems",
      ])}
      <p class="text-sm text-muted mt-2">We will tell you at the start roughly how much of your
        team's time each stage requires, so it can be planned rather than absorbed.</p>
      ${btn({ label: "Discuss your project", href: "/contact", variant: "link", icon: "arrow" })}
    </aside>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    ${sectionHead({
      eyebrow: "Communication",
      title: "How You Will Know What Is Happening",
      text: "Process is only useful if you can see it. Four things we commit to on every engagement.",
      wide: true,
    })}
    <div class="grid grid--4">
      ${[
        {
          icon: "users",
          title: "A named contact",
          text: "One person accountable for the engagement, who knows the technical detail rather than relaying it.",
        },
        {
          icon: "workflow",
          title: "Visible progress",
          text: "Work tracked in a shared board you can open at any time, not summarised in a monthly email.",
        },
        {
          icon: "refresh",
          title: "Regular demonstrations",
          text: "Working software at the end of each increment, on a real environment you can click through.",
        },
        {
          icon: "clock",
          title: "Early warning",
          text: "If something is going to slip, you hear it when we know — not at the deadline.",
        },
      ]
        .map(
          (c) => `<article class="card card--feature reveal">
        <div class="card__icon card__icon--plain">${icon(c.icon)}</div>
        <h3 class="card__title">${c.title}</h3>
        <p class="card__text">${c.text}</p>
      </article>`
        )
        .join("")}
    </div>
  </div>
</section>

<section class="section section--soft section--line-top">
  <div class="container">
    ${sectionHead({
      eyebrow: "Engagement models",
      title: "How the Work Is Structured",
      text: "The process is the same either way. What changes is how scope and billing are handled.",
      wide: true,
    })}
    ${definitionGrid(engagementModels)}
  </div>
</section>

<section class="section">
  <div class="container split split--reverse">
    <aside class="panel panel--brand">
      <h2 class="panel__title">Handled as standard</h2>
      ${checkList([
        "Version control and code review on every change",
        "Secrets in a managed vault, never in source",
        "Automated build and release pipelines",
        "Staging environment before production",
        "A rehearsed rollback path",
        "Monitoring and alerting from day one",
      ])}
    </aside>
    <div>
      ${sectionHead({
        eyebrow: "Change",
        title: "What Happens When Requirements Change",
      })}
      <p class="lead">They will. Treating that as a failure of planning is what makes it
        expensive.</p>
      <p class="mt-2">Changes are documented, estimated and agreed before the work starts. You see
        the cost and the schedule impact in writing, then decide whether it is worth it — including
        the option to defer it to a later phase.</p>
      <p class="mt-1">What we avoid is the pattern where small changes are absorbed silently until
        the timeline has moved by a month and nobody can point to when it happened.</p>
      ${btn({ label: "See our services", href: "/services", variant: "link", icon: "arrow" })}
    </div>
  </div>
</section>

${ctaBand({
  eyebrow: "Start here",
  heading: "Ready to Begin With Discovery?",
  text: "The first stage costs you a conversation. You will come out of it with a clearer scope whether or not you work with us.",
  buttons: [cta.consultation, { ...cta.quote, variant: "light" }],
  note: site.contact.responseTime,
})}`,
};
