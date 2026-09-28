/**
 * Contact Us.
 *
 * The form posts nowhere yet by design: this front end holds no endpoint, key
 * or credential. main.js validates client-side and reveals the status panel.
 * Wiring it to a backend means setting the form action to your own server
 * route, which then talks to email/CRM using server-side secrets.
 */
import { site, cta } from "../content/site.js";
import { services } from "../content/services.js";
import { faqs } from "../content/faqs.js";
import { icon } from "../icons.js";
import { breadcrumbSchema, contactPageSchema, faqSchema } from "../schema.js";
import {
  btn,
  sectionHead,
  breadcrumb,
  pageHero,
  contactStrip,
  faqList,
  form,
  field,
  consentField,
  ctaBand,
  checkList,
} from "../components.js";

const trail = [{ label: "Contact", href: "/contact" }];

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
  field({ name: "phone", label: "Phone", type: "tel", autocomplete: "tel", placeholder: "Optional" }),
  field({ name: "company", label: "Company", autocomplete: "organization", placeholder: "Company name" }),
  field({
    name: "service",
    label: "What can we help with?",
    full: true,
    options: [...services.map((s) => s.name), "Something else / not sure"],
    placeholder: "Select a service",
  }),
  field({
    name: "message",
    label: "Tell us about your requirement",
    required: true,
    full: true,
    rows: 6,
    hint: "What you are trying to build, improve or connect — and anything already in place.",
    placeholder: "A few sentences is enough to start.",
  }),
  `<div class="field field--full">${consentField()}</div>`,
].join("");

export const contact = {
  route: "/contact",
  title: "Contact AtherIQ | Talk to Our Development Team",
  description:
    "Contact AtherIQ about web, mobile, cloud, CRM or ERP work. Call 6394848080, email Raj.vimal@AtherIQ.com or send an enquiry for a response within one business day.",
  schema: [breadcrumbSchema(trail, "/contact"), contactPageSchema("/contact"), faqSchema(faqs, "/contact")],
  body: `
${breadcrumb(trail)}
${pageHero({
  eyebrow: "Contact",
  title: "Talk to Our Team",
  lead: "Tell us what you are trying to build, improve or integrate. If we are not the right fit, we will say so — and where we can, point you somewhere better.",
  variant: "plain",
})}

<section class="section section--sm">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "Send an enquiry",
        title: "Start With a Free Consultation",
        text: "No cost, no obligation and no sales script. Usually a 30-minute call is enough to establish whether there is a project here.",
      })}
      ${form({
        id: "contact-form",
        statusId: "contact-status",
        legend: "Your details",
        fields,
        submit: "Send enquiry",
        note: site.contact.responseTime,
        status: {
          title: "Thank you — your enquiry has been received.",
          text: "We have received your message and will get back to you within one business day.",
          meta: `Email ${site.contact.email} · Phone ${site.contact.phoneDisplay}`,
        },
      })}
    </div>

    <aside>
      <div class="panel">
        <h2 class="panel__title">Direct contact</h2>
        ${contactStrip()}
        <p class="text-sm text-muted mt-2">${site.contact.responseTime}</p>
      </div>

      <div class="panel panel--brand mt-3">
        <h2 class="panel__title">What happens next</h2>
        ${checkList([
          "We read the enquiry and reply within one business day",
          "A short call to understand the requirement",
          "If it is a fit, a written scope and quotation",
          "If it is not, an honest answer and a suggestion",
        ])}
      </div>
    </aside>
  </div>
</section>

<section class="section section--soft section--line-top" id="faqs">
  <div class="container split split--wide-left">
    <div>
      ${sectionHead({
        eyebrow: "FAQs",
        title: "Questions We Are Asked Most Often",
        text: "Covering capability, ownership, engagement and how projects usually begin.",
      })}
      ${faqList(faqs, { name: "contact-faq" })}
    </div>
    <aside class="panel">
      <h2 class="panel__title">Prefer to send a brief?</h2>
      <p class="text-sm">If you already know the scope, the quote form asks the questions we would
        otherwise cover on the first call — budget range, timeline and what exists today.</p>
      <div class="btn-row mt-2">
        ${btn({ label: "Request a Quote", href: "/request-a-quote" })}
      </div>
    </aside>
  </div>
</section>

${ctaBand({
  eyebrow: "Or call directly",
  heading: "Would Rather Just Talk?",
  text: `Call ${site.contact.phoneDisplay} during ${site.contact.hours}.`,
  buttons: [
    { label: `Call ${site.contact.phoneDisplay}`, href: site.contact.phoneHref },
    { label: "Email us", href: site.contact.emailHref, variant: "light" },
  ],
})}`,
};
