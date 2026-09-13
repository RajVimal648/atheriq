/**
 * Reusable UI components. Each function returns an HTML string and takes plain
 * data - no component reaches into content files directly, so these port
 * cleanly to Razor partials or React components.
 */
import { icon } from "./icons.js";
import { site } from "./content/site.js";

/** Escape text that lands inside an attribute or JSON payload. */
export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* ------------------------------------------------------------------ buttons */

/**
 * @param {{label:string, href:string, variant?:'primary'|'ghost'|'dark'|'light'|'link', icon?:string, wide?:boolean}} o
 */
export const btn = (o) => {
  const variant = o.variant ?? "primary";
  const external = /^https?:/.test(o.href);
  return `<a class="btn btn--${variant}${o.wide ? " btn--wide" : ""}" href="${esc(o.href)}"${
    external ? ' rel="noopener" target="_blank"' : ""
  }>${esc(o.label)}${o.icon ? icon(o.icon, { class: "btn__icon", size: 18 }) : ""}</a>`;
};

export const btnRow = (buttons, { center = false } = {}) =>
  `<div class="btn-row${center ? " btn-row--center" : ""}">${buttons.map(btn).join("")}</div>`;

/* ------------------------------------------------------------- section heads */

/**
 * @param {{eyebrow?:string, title:string, text?:string, align?:'left'|'center', level?:1|2|3, id?:string, wide?:boolean}} o
 */
export const sectionHead = (o) => {
  const H = `h${o.level ?? 2}`;
  return `<header class="section-head${o.align === "center" ? " section-head--center" : ""}${
    o.wide ? " section-head--wide" : ""
  }"${o.id ? ` id="${esc(o.id)}"` : ""}>
  ${o.eyebrow ? `<p class="eyebrow">${o.eyebrow}</p>` : ""}
  <${H} class="section-head__title">${o.title}</${H}>
  ${o.text ? `<p class="section-head__text">${o.text}</p>` : ""}
</header>`;
};

export const eyebrow = (text) => `<p class="eyebrow">${text}</p>`;

/* -------------------------------------------------------------------- cards */

/** Service card used on the home page, /services and related-service rows. */
export const serviceCard = (s, { index } = {}) => `
<article class="card card--service">
  <div class="card__icon">${icon(s.icon)}</div>
  ${index != null ? `<span class="card__index">${String(index).padStart(2, "0")}</span>` : ""}
  <h3 class="card__title"><a class="stretched" href="/services/${s.slug}">${s.name}</a></h3>
  <p class="card__text">${s.card}</p>
  <span class="card__more">Read more ${icon("arrow", { class: "card__arrow", size: 16 })}</span>
</article>`;

/** Compact link-only variant for related-service rows and footers of pages. */
export const serviceLinkCard = (s) => `
<a class="link-card" href="/services/${s.slug}">
  <span class="link-card__icon">${icon(s.icon, { size: 20 })}</span>
  <span class="link-card__body">
    <span class="link-card__title">${s.name}</span>
    <span class="link-card__text">${s.card}</span>
  </span>
  ${icon("arrow", { class: "link-card__arrow", size: 18 })}
</a>`;

export const projectCard = (p) => `
<article class="card card--project">
  <div class="card--project__visual" aria-hidden="true">
    <span class="card--project__mark">${icon(p.icon, { size: 28 })}</span>
    <span class="card--project__grid"></span>
  </div>
  <div class="card--project__body">
    <p class="tag">${p.category}</p>
    <h3 class="card__title"><a class="stretched" href="/portfolio#${p.slug}">${p.title}</a></h3>
    <p class="card__text">${p.summary}</p>
    <ul class="chips" aria-label="Technologies used">${p.stack
      .slice(0, 4)
      .map((t) => `<li class="chip">${t}</li>`)
      .join("")}</ul>
  </div>
</article>`;

export const postCard = (p, { categoryLabel, featured = false } = {}) => `
<article class="card card--post${featured ? " card--post-featured" : ""}">
  <div class="card--post__meta">
  <span class="tag tag--brand">${categoryLabel(p.category)}</span>
    <time datetime="${p.date}">${formatDate(p.date)}</time>
    <span class="dot" aria-hidden="true"></span>
    <span>${p.readingTime} min read</span>
  </div>
  <h3 class="card__title"><a class="stretched" href="/blog/${p.slug}">${p.title}</a></h3>
  <p class="card__text">${p.excerpt}</p>
  <span class="card__more">Read article ${icon("arrow", { class: "card__arrow", size: 16 })}</span>
</article>`;

/** Generic feature/benefit card. */
export const featureCard = (f) => `
<article class="card card--feature">
  ${f.icon ? `<div class="card__icon card__icon--plain">${icon(f.icon)}</div>` : ""}
  <h3 class="card__title">${f.title}</h3>
  <p class="card__text">${f.text}</p>
</article>`;

/* ------------------------------------------------------------------- lists */

export const checkList = (items, { columns = 1 } = {}) => `
<ul class="check-list${columns > 1 ? ` check-list--cols-${columns}` : ""}">
  ${items.map((i) => `<li>${icon("check", { class: "check-list__icon", size: 18 })}<span>${i}</span></li>`).join("")}
</ul>`;

/** Definition-style list for "What We Provide" blocks. */
export const definitionGrid = (items) => `
<div class="def-grid">
  ${items
    .map(
 (i) => `<div class="def">
    <h3 class="def__title">${i.title}</h3>
    <p class="def__text">${i.text}</p>
  </div>`
    )
    .join("")}
</div>`;

export const stepList = (steps, { variant = "" } = {}) => `
<ol class="steps${variant ? ` steps--${variant}` : ""}">
  ${steps
    .map(
      (s) => `<li class="step">
    <span class="step__no">${s.no}</span>
    <div class="step__body">
      <h3 class="step__title">${s.title}</h3>
      <p class="step__text">${s.text}</p>
    ${s.outputs ? `<ul class="step__outputs">${s.outputs.map((o) => `<li>${o}</li>`).join("")}</ul>` : ""}
    </div>
  </li>`
    )
    .join("")}
</ol>`;

export const chips = (items, label = "Technologies") =>
  `<ul class="chips" aria-label="${esc(label)}">${items.map((t) => `<li class="chip">${t}</li>`).join("")}</ul>`;

/* --------------------------------------------------------------------- faq */

/** Native <details> accordion - keyboard accessible with no JavaScript. */
export const faqList = (items, { name = "" } = {}) => `
<div class="faq">
  ${items
    .map(
      (f) => `<details class="faq__item"${name ? ` name="${esc(name)}"` : ""}>
    <summary class="faq__q">${f.q}<span class="faq__marker" aria-hidden="true"></span></summary>
    <div class="faq__a"><p>${f.a}</p></div>
  </details>`
    )
    .join("")}
</div>`;

/* -------------------------------------------------------------- breadcrumbs */

/** @param {{label:string, href?:string}[]} trail - excludes Home, which is added */
export const breadcrumb = (trail) => {
  const items = [{ label: "Home", href: "/" }, ...trail];
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><div class="container"><ol>
  ${items
      .map((i, n) =>
   i.href && n < items.length - 1
     ? `<li><a href="${esc(i.href)}">${i.label}</a></li>`
          : `<li><span aria-current="page">${i.label}</span></li>`
      )
      .join("")}
  </ol></div></nav>`;
};

/* ------------------------------------------------------------------- bands */

/**
 * @param {{eyebrow?:string, heading:string, text?:string, buttons:object[], variant?:'dark'|'light'|'brand', note?:string}} o
 */
export const ctaBand = (o) => `
<section class="cta-band cta-band--${o.variant ?? "dark"}">
  <div class="container cta-band__inner">
    <div class="cta-band__copy">
      ${o.eyebrow ? `<p class="eyebrow">${o.eyebrow}</p>` : ""}
      <h2 class="cta-band__title">${o.heading}</h2>
      ${o.text ? `<p class="cta-band__text">${o.text}</p>` : ""}
    </div>
    <div class="cta-band__actions">
      ${btnRow(o.buttons)}
      ${o.note ? `<p class="cta-band__note">${o.note}</p>` : ""}
    </div>
  </div>
</section>`;

/** Page hero used by every page except the home page. */
export const pageHero = (o) => `
<section class="page-hero${o.variant ? ` page-hero--${o.variant}` : ""}">
  <div class="container page-hero__inner">
    <div class="page-hero__copy">
  ${o.eyebrow ? `<p class="eyebrow">${o.eyebrow}</p>` : ""}
      <h1 class="page-hero__title">${o.title}</h1>
    ${o.lead ? `<p class="lead">${o.lead}</p>` : ""}
      ${o.buttons ? btnRow(o.buttons) : ""}
 ${o.meta ?? ""}
 </div>
    ${o.aside ? `<div class="page-hero__aside">${o.aside}</div>` : ""}
  </div>
</section>`;

/* -------------------------------------------------------------------- forms */

/**
 * One form control.
 *
 * `options` renders a <select>, `rows` a <textarea>, otherwise an <input> of
 * the given type. `data-label` is what the client-side validator uses in its
 * error message, so it reads as a sentence.
 *
 * @param {{name:string, label:string, type?:string, required?:boolean,
 *          full?:boolean, hint?:string, placeholder?:string, autocomplete?:string,
 *          options?:string[], rows?:number}} f
 */
export const field = (f) => {
  const id = `f-${f.name}`;
  const errorId = `${id}-error`;
  const hintId = f.hint ? `${id}-hint` : "";
  const describedBy = [hintId, errorId].filter(Boolean).join(" ");

  const attrs = [
    `id="${id}"`,
    `name="${esc(f.name)}"`,
    `data-label="${esc(f.label)}"`,
    `aria-describedby="${describedBy}"`,
    f.required ? "required" : "",
    f.autocomplete ? `autocomplete="${esc(f.autocomplete)}"` : "",
    f.placeholder ? `placeholder="${esc(f.placeholder)}"` : "",
  ]
    .filter(Boolean)
    .join(" ");

  let control;
  if (f.options) {
    control = `<select ${attrs}>
      <option value="">${esc(f.placeholder ?? "Please select")}</option>
      ${f.options.map((o) => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}
    </select>`;
  } else if (f.rows) {
    control = `<textarea ${attrs} rows="${f.rows}"></textarea>`;
  } else {
    control = `<input type="${esc(f.type ?? "text")}" ${attrs}>`;
  }

  return `<div class="field${f.full ? " field--full" : ""}">
  <label for="${id}">${f.label}${f.required ? '<span class="req" aria-hidden="true">*</span>' : ""}</label>
  ${f.hint ? `<p class="field__hint" id="${hintId}">${f.hint}</p>` : ""}
  ${control}
  <p class="field__error" id="${errorId}" role="alert"></p>
</div>`;
};

/** Consent checkbox. Required so the enquiry carries an explicit opt-in. */
export const consentField = (name = "consent") => `
<div class="checkbox">
  <input type="checkbox" id="f-${name}" name="${name}" data-label="Consent" required
         aria-describedby="f-${name}-error">
  <label for="f-${name}">I agree that AtherIQ may use these details to respond to my enquiry,
    as described in the <a href="/privacy-policy">Privacy Policy</a>.</label>
  <p class="field__error" id="f-${name}-error" role="alert" style="grid-column:1/-1"></p>
</div>`;

/**
 * Form shell. `statusId` links the form to the success panel that main.js
 * reveals on a valid submit.
 *
 * The action is intentionally empty: this front end holds no endpoint, key or
 * credential. Point `action` at your own server route when the backend exists.
 *
 * @param {{id:string, statusId:string, legend?:string, fields:string, submit:string,
 *          note?:string, status:{title:string, text:string, meta?:string}}} o
 */
export const form = (o) => `
<form class="form" id="${esc(o.id)}" data-validate data-status="${esc(o.statusId)}"
      method="post" action="" novalidate>
  ${o.legend ? `<fieldset><legend>${o.legend}</legend>` : ""}
  <div class="form__grid">${o.fields}</div>
  ${o.legend ? "</fieldset>" : ""}
  <div class="form__footer">
    <button class="btn btn--primary" type="submit">${esc(o.submit)}</button>
    ${o.note ? `<p class="form__note">${o.note}</p>` : ""}
  </div>
</form>

<div class="form-status" id="${esc(o.statusId)}" role="status">
  <h3>${o.status.title}</h3>
  <p>${o.status.text}</p>
  ${o.status.meta ? `<p class="form-status__meta">${o.status.meta}</p>` : ""}
</div>`;

/* -------------------------------------------------------------------- misc */

export const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/** Inline contact strip reused on contact, quote and careers pages. */
export const contactStrip = () => `
<ul class="contact-strip">
  <li><span class="contact-strip__icon">${icon("phone", { size: 18 })}</span>
    <span><span class="contact-strip__label">Phone</span>
    <a href="${site.contact.phoneHref}">${site.contact.phoneDisplay}</a></span></li>
  <li><span class="contact-strip__icon">${icon("mail", { size: 18 })}</span>
    <span><span class="contact-strip__label">Email</span>
    <a href="${site.contact.emailHref}">${site.contact.email}</a></span></li>
  <li><span class="contact-strip__icon">${icon("clock", { size: 18 })}</span>
    <span><span class="contact-strip__label">Hours</span>${site.contact.hours}</span></li>
</ul>`;
