/**
 * Privacy Policy and Terms & Conditions.
 *
 * These are structured, honest starting drafts describing what this website
 * actually does - not boilerplate claiming practices that are not in place.
 * They deliberately avoid inventing a registered address, a jurisdiction or a
 * data protection officer.
 *
 * REVIEW BEFORE LAUNCH: have these checked by a qualified adviser and replace
 * the marked placeholders with your registered business details.
 */
import { site } from "../content/site.js";
import { breadcrumbSchema } from "../schema.js";
import { breadcrumb, pageHero, formatDate } from "../components.js";

const updated = formatDate(site.buildDate);

/** Shared shell so both documents stay visually identical. */
const legal = ({ route, label, title, description, intro, sections }) => {
  const trail = [{ label, href: route }];
  return {
    route,
    title,
    description,
    schema: [breadcrumbSchema(trail, route)],
    body: `
${breadcrumb(trail)}
${pageHero({ eyebrow: "Legal", title: label, lead: intro, variant: "plain" })}

<section class="section section--sm">
  <div class="container">
    <div class="prose">
      <p class="legal-meta">Last updated ${updated}. This document describes how
        ${site.name} operates this website. It is provided in good faith and should be reviewed by
        a qualified adviser before being relied upon commercially.</p>
      ${sections
        .map(
          (s) => `<h2 id="${s.id}">${s.heading}</h2>
      ${s.body}`
        )
        .join("\n")}
      <h2 id="contact">Contact</h2>
      <p>Questions about this document can be sent to
        <a href="${site.contact.emailHref}">${site.contact.email}</a> or
        <a href="${site.contact.phoneHref}">${site.contact.phoneDisplay}</a>.</p>
    </div>
  </div>
</section>`,
  };
};

export const privacy = legal({
  route: "/privacy-policy",
  label: "Privacy Policy",
  title: "Privacy Policy | AtherIQ",
  description:
    "How AtherIQ collects, uses, stores and protects personal information submitted through this website, and the choices available to you.",
  intro: `How ${site.name} handles information submitted through this website.`,
  sections: [
    {
      id: "information-we-collect",
      heading: "Information we collect",
      body: `<p>We collect only what you choose to send us. When you submit the contact or quote
      form, that is the information you enter into it: your name, email address, phone number,
      company name, the service you are interested in and your description of the requirement.</p>
      <p>We do not require you to create an account, and we do not ask for payment details through
      this website.</p>`,
    },
    {
      id: "how-we-use-it",
      heading: "How we use your information",
      body: `<p>Information submitted through this website is used to respond to your enquiry, to
      prepare a scope or quotation where you have asked for one, and to maintain a record of our
      correspondence with you.</p>
      <p>We do not sell your information. We do not share it with third parties for their own
      marketing. We will not add you to a mailing list on the basis of a project enquiry.</p>`,
    },
    {
      id: "legal-basis",
      heading: "Why we are allowed to process it",
      body: `<p>Where you submit an enquiry, we process your information because you have asked us
      to respond and have confirmed your consent on the form, and because doing so is in our
      legitimate interest as a business responding to a potential client.</p>
      <p>You may withdraw consent at any time by contacting us using the details at the end of this
      page.</p>`,
    },
    {
      id: "cookies",
      heading: "Cookies and analytics",
      body: `<p>This website does not set advertising or tracking cookies, and does not use
      third-party advertising networks.</p>
      <p>Web fonts are loaded from Google Fonts, which means your browser makes a request to a
      Google server to retrieve them. That request is subject to Google's own privacy policy.</p>
      <p><strong>If analytics are added later</strong>, this section will be updated to name the
      provider, state what is collected and explain how to opt out, before the tool goes live.</p>`,
    },
    {
      id: "retention",
      heading: "How long we keep it",
      body: `<p>Enquiry correspondence is kept for as long as it is commercially relevant — while a
      project is under discussion, for its duration, and afterwards for the period we may need it
      for contractual or accounting purposes.</p>
      <p>If you ask us to delete your enquiry and we are not required to retain it, we will.</p>`,
    },
    {
      id: "security",
      heading: "Security",
      body: `<p>Access to enquiry information is limited to the people who need it in order to
      respond. Where we hold client data as part of a project, the handling, encryption and access
      arrangements are set out in the agreement for that project rather than here.</p>
      <p>No transmission over the internet is completely secure. If you need to send us something
      genuinely sensitive, contact us first and we will arrange a secure method rather than asking
      you to email it.</p>`,
    },
    {
      id: "your-rights",
      heading: "Your rights",
      body: `<p>You may ask us what information we hold about you, ask us to correct it if it is
      wrong, ask us to delete it, or object to how we are using it. Contact us using the details
      below and we will respond.</p>`,
    },
    {
      id: "third-parties",
      heading: "Third-party services",
      body: `<p>This website links to external sites we do not control. Their privacy practices are
      their own.</p>
      <p>Where a client project involves third-party platforms — a CRM, a payment provider, a cloud
      host — the data handling for that project is governed by the project agreement and by those
      providers' terms, not by this policy.</p>`,
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      body: `<p>If this policy changes, the updated version will be published on this page with a
      revised date at the top.</p>`,
    },
  ],
});

export const terms = legal({
  route: "/terms-and-conditions",
  label: "Terms & Conditions",
  title: "Terms & Conditions | AtherIQ",
  description:
    "The terms on which AtherIQ provides this website, including use of content, intellectual property, enquiries, liability and how project agreements take precedence.",
  intro: `The terms on which ${site.name} provides this website.`,
  sections: [
    {
      id: "about",
      heading: "About these terms",
      body: `<p>These terms apply to your use of this website. They do not govern any project we
      carry out for you — that is covered by a separate written agreement, which takes precedence
      over anything on this page.</p>`,
    },
    {
      id: "use",
      heading: "Using this website",
      body: `<p>You may read, print and share the content of this site for your own business
      purposes. You may not republish it as your own, use it to train a commercial model, or copy
      substantial parts of it into a competing offering.</p>
      <p>You agree not to attempt to gain unauthorised access to this site or any system connected
      to it, or to use it in a way that disrupts its availability for others.</p>`,
    },
    {
      id: "content",
      heading: "Accuracy of content",
      body: `<p>We keep the information on this site current and accurate as far as we reasonably
      can. Descriptions of services, technologies and approaches are general — they are not a
      commitment to deliver a specific outcome, and they are not technical advice for your
      situation.</p>
      <p>Any figure, timeline or approach discussed on this site is indicative. What we commit to
      for your project is what appears in your written scope and quotation.</p>`,
    },
    {
      id: "intellectual-property",
      heading: "Intellectual property",
      body: `<p>The content, design, code and branding of this website belong to ${site.name}
      unless stated otherwise. Third-party product names and trademarks mentioned on this site —
      including Microsoft Azure, AWS and the CRM and ERP platforms we integrate with — belong to
      their respective owners, and their use here is descriptive, not a claim of affiliation or
      endorsement.</p>
      <p>For client projects, ownership of the delivered code and assets is set out in the project
      agreement. Our standard position is that the source code, data and cloud accounts belong to
      the client.</p>`,
    },
    {
      id: "enquiries",
      heading: "Enquiries and quotations",
      body: `<p>Submitting an enquiry or a quote request does not create a contract. A project
      begins when both parties have agreed a written scope and quotation.</p>
      <p>Quotations are based on the information provided at the time. If the requirement turns out
      to be materially different, we will issue a revised quotation rather than absorb the
      difference silently.</p>`,
    },
    {
      id: "liability",
      heading: "Liability",
      body: `<p>This website is provided as it is. To the extent permitted by law, we are not
      liable for any loss arising from your reliance on general information published here, or from
      the site being temporarily unavailable.</p>
      <p>Nothing in these terms limits liability that cannot lawfully be limited. Liability
      relating to project work is addressed in the relevant project agreement.</p>`,
    },
    {
      id: "external-links",
      heading: "Links to other sites",
      body: `<p>Where we link to an external site, it is because we consider it useful. We do not
      control those sites and are not responsible for their content or availability.</p>`,
    },
    {
      id: "governing-law",
      heading: "Governing law",
      body: `<p>These terms are governed by the laws of India. <em>Replace this section with your
      registered jurisdiction and dispute resolution preference before launch, on legal
      advice.</em></p>`,
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      body: `<p>We may update these terms. The current version is always the one published on this
      page, with its revision date shown at the top.</p>`,
    },
  ],
});
