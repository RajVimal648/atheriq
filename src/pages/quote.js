/**
 * Request a Quote.
 *
 * Asks the questions we would otherwise cover on a first call, so the reply can
 * contain something useful rather than a request for more information. Same
 * security posture as the contact form: no endpoint or credential in the front
 * end - see the note in assets/js/main.js.
 */
import { site, cta } from "../content/site.js";
import { services } from "../content/services.js";
import { engagementModels } from "../content/company.js";
import { icon } from "../icons.js";
import { breadcrumbSchema } from "../schema.js";
import {
  btn,
  sectionHead,
  breadcrumb,
  pageHero,
  form,
  field,
  consentField,
  checkList,
  contactStrip,
  ctaBand,
  definitionGrid,
} from "../components.js";

const trail = [{ label: "Request a Quote", href: "/request-a-quote" }];

/**
 * Budget bands are ranges, not prices - a quotation follows the written scope.
 * Edit these to match your commercial positioning.
 */
const budgets = [
  "Under ₹1,00,000",
  "₹1,00,000 – ₹5,00,000",
  "₹5,00,000 – ₹15,00,000",
  "Above ₹15,00,000",
  "Not yet decided",
];

const timelines = ["As soon as possible", "Within 1–3 months", "Within 3–6 months", "Planning ahead / flexible"];

const fields = [
  field({ name: "name", label: "Full name", required: true, autocomplete: "name", placeholder: "Your name" }),
  field({
    name: "email",
    label: "Work email",
    type: "email",
    required: true,
    autocomplete: "email",
    placeholder: "name@company.com",
  }),
  field({ name: "phone", label: "Phone", type: "tel", required: true, autocomplete: "tel", placeholder: "Best number to reach you" }),
  field({ name: "company", label: "Company", autocomplete: "organization", placeholder: "Company name" }),
  field({
    name: "service",
    label: "Service required",
    required: true,
    options: [...services.map((s) => s.name), "Multiple services", "Not sure yet"],
    placeholder: "Select a service",
  }),
  field({ name: "budget", label: "Approximate budget", options: budgets, placeholder: "Select a range" }),
  field({ name: "timeline", label: "Timeline", options: timelines, placeholder: "Select a timeline" }),
  field({
    name: "existing",
    label: "What exists today?",
    placeholder: "e.g. a WordPress site, an ERP, nothing yet",
  }),
  field({
    name: "message",
    label: "Project description",
    required: true,
    full: true,
    rows: 7,
    hint: "What the project needs to do, who uses it, and which systems it has to work with. Detail here means a more accurate quotation.",
    placeholder: "Describe the project, the problem it solves and anything already in place.",
  }),
  `<div class="field field--full">${consentField()}</div>`,
].join("");

export const quote = {
  route: "/request-a-quote",
  title: "Request a Quote | Project Estimate from AtherIQ",
  description:
    "Request a quotation for web, mobile, custom software, cloud, CRM, ERP, API or SEO work. Share your requirement and receive a written scope and estimate.",
  schema: [breadcrumbSchema(trail, "/request-a-quote")],
  body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: "Request a quote",
  title: "Tell Us About Your Project",
  lead: "The more you can share, the more specific our response. Everything below except the description is optional if you would rather talk it through first.",
  variant: "plain",
})}

<section class="section section--sm">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "Project brief",
        title: "Request a Quotation",
        text: "We reply with questions, a written scope or an estimate — depending on how settled the requirement is.",
      })}
      ${form({
        id: "quote-form",
        statusId: "quote-status",
        legend: "Project details",
        fields,
        submit: "Request quote",
        note: site.contact.responseTime,
        status: {
          title: "Thank you — your brief has been noted.",
          text: "This site is not yet connected to a mail server, so please send your project details directly to us using the contact details on this page and we will respond within one business day.",
          meta: `Email ${site.contact.email} · Phone ${site.contact.phoneDisplay}`,
        },
      })}
    </div>

    <aside>
      <div class="panel panel--brand">
        <h2 class="panel__title">What you get back</h2>
        ${checkList([
          "A reply within one business day",
          "Clarifying questions where the scope is open",
          "A written scope you can compare against others",
          "An estimate with the assumptions stated",
          "An honest answer if we are not the right fit",
        ])}
      </div>

      <div class="panel mt-3">
        <h2 class="panel__title">Prefer to talk first?</h2>
        ${contactStrip()}
        <div class="btn-row mt-2">
          ${btn({ label: "Get a Free Consultation", href: "/contact", variant: "ghost" })}
        </div>
      </div>
    </aside>
  </div>
</section>

<section class="section section--soft section--line-top">
  <div class="container">
    ${sectionHead({
      eyebrow: "Commercial models",
      title: "How Quotations Are Structured",
      text: "Which model we quote against depends on how settled the requirements are and whether the work has a defined end.",
      wide: true,
    })}
    ${definitionGrid(engagementModels)}
    <p class="text-sm text-muted mt-3">Budget ranges on the form are indicative bands to help us
      match the approach to the investment. They are not prices — a quotation follows a written
      scope.</p>
  </div>
</section>

${ctaBand({
  eyebrow: "Questions first",
  heading: "Not Ready for a Quote Yet?",
  text: "A consultation is a better starting point when the requirement is still taking shape.",
  buttons: [cta.consultation, { label: "Explore Our Services", href: "/services", variant: "light" }],
  note: site.contact.responseTime,
})}`,
};
