

export const site = {
  name: "AtherIQ",
  tagline: "Technology. Innovation. Growth.",
  legalName: "AtherIQ",
  url: "https://www.atheriq.com", // update when the production domain is live
  locale: "en_IN",
  lang: "en",
  buildDate: new Date().toISOString().split("T")[0],
  foundingYear: 2026,

  shortDescription:
    "AtherIQ is a top-rated custom software development and IT consulting company in India, helping businesses globally build, integrate, and scale digital systems.",

  longDescription:
    "AtherIQ designs, develops, and integrates web, mobile, cloud, and enterprise applications. As a trusted technology partner in India, we work with global businesses that need offshore engineering excellence and a deep understanding of the operational systems they depend on.",

  contact: {
    phone: "6394843808",
    phoneHref: "tel:+91639484808", // E.164 for click-to-call
    phoneDisplay: "6394843808",
    email: "atheriq@outlook.com",
    emailHref: "mailto:atheriq@outlook.com",
    hours: "Monday to Friday, 10:30 AM - 7:00 PM IST",
    responseTime: "We respond to project enquiries within one business day.",
  },

  // Add profile URLs when the accounts are live. Empty entries are not rendered.
  social: [
    { label: "LinkedIn", url: "https://www.linkedin.com/company/atheriq/" },
    { label: "GitHub", url: "" },
    { label: "X", url: "" },
  ],

  primaryNav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services", megaMenu: true },
    { label: "Portfolio", href: "/portfolio" },
  { label: "Technologies", href: "/technologies" },
    { label: "Industries", href: "/industries" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],

  footerNav: [
    {
      title: "Company",
    links: [
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Portfolio", href: "/portfolio" },
     { label: "Technologies", href: "/technologies" },
  { label: "Our Process", href: "/process" },
        { label: "Careers", href: "/careers" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Development", href: "/services/web-development" },
 { label: "Mobile App Development", href: "/services/mobile-app-development" },
        { label: "Custom Software", href: "/services/custom-software-development" },
        { label: "E-Commerce Development", href: "/services/ecommerce-development" },
        { label: "Cloud Services", href: "/services/cloud" },
        { label: "Microsoft Azure", href: "/services/azure" },
  { label: "AWS", href: "/services/aws" },
   { label: "SEO Services", href: "/services/seo" },
      ],
 },
    {
      title: "Integration",
      links: [
        { label: "CRM Solutions", href: "/services/crm-integration" },
        { label: "ERP Integration", href: "/services/erp-integration" },
    { label: "API Development", href: "/services/api-integration" },
      { label: "AI & Automation", href: "/services/ai-automation" },
        { label: "Industries", href: "/industries" },
      ],
    },
    {
  title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "FAQs", href: "/contact#faqs" },
     { label: "Request a Quote", href: "/request-a-quote" },
        { label: "Contact Us", href: "/contact" },
   ],
    },
  ],

  legalNav: [
  { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};

/** Reusable call-to-action labels, so wording stays consistent site-wide. */
export const cta = {
  consultation: { label: "Get a Free Consultation", href: "/contact" },
  quote: { label: "Request a Quote", href: "/request-a-quote" },
  services: { label: "Explore Our Services", href: "/services" },
  project: { label: "Discuss Your Project", href: "/contact" },
  portfolio: { label: "View Our Work", href: "/portfolio" },
};
