/**
 * Site header: logo, primary navigation with services mega-menu, header CTAs
 * and the mobile navigation panel.
 *
 * Ports to Views/Shared/_Header.cshtml - `current` is the active route so the
 * nav can mark the current page.
 */
import { site } from "../content/site.js";
import { serviceGroups, servicesIn } from "../content/services.js";
import { icon } from "../icons.js";
import { esc } from "../components.js";

const isActive = (href, current) =>
  href === "/" ? current === "/" : current === href || current.startsWith(`${href}/`);

const logo = () => `
<a class="logo" href="/" aria-label="${site.name} home">
  <span class="logo__mark" aria-hidden="true">
    <svg viewBox="0 0 32 32" width="32" height="32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="currentColor"/>
      <path d="M9 22.5 15.1 9.5h1.9L23 22.5h-3.1l-1.32-3H13.4l-1.3 3H9Zm5.42-5.4h3.2L16 13.35 14.42 17.1Z" fill="#fff"/>
    </svg>
  </span>
  <span class="logo__text">
    <span class="logo__name">Ather<span class="logo__accent">IQ</span></span>
    <span class="logo__tagline">${site.tagline}</span>
  </span>
</a>`;

const megaMenu = () => `
<div class="mega" id="mega-services" hidden>
  <div class="container mega__inner">
    <div class="mega__cols">
   ${serviceGroups
        .map(
          (g) => `<div class="mega__col">
        <p class="mega__heading">${g.title}</p>
        <ul class="mega__list">
          ${servicesIn(g.id)
            .map(
   (s) => `<li><a href="/services/${s.slug}">
            <span class="mega__icon">${icon(s.icon, { size: 18 })}</span>
       <span><span class="mega__label">${s.name}</span></span></a></li>`
   )
            .join("")}
   </ul>
      </div>`
        )
        .join("")}
    </div>
    <div class="mega__promo">
   <p class="eyebrow">Not sure where to start?</p>
      <p class="mega__promo-title">Tell us what you are trying to build or fix.</p>
      <p class="mega__promo-text">A short conversation is usually enough to establish the right approach and a realistic cost.</p>
      <a class="btn btn--primary btn--wide" href="/contact">Get a Free Consultation</a>
      <a class="mega__promo-link" href="/services">View all services ${icon("arrow", { size: 16 })}</a>
    </div>
  </div>
</div>`;

const navItems = (current, { mobile = false } = {}) =>
  site.primaryNav
    .map((item) => {
      const active = isActive(item.href, current);
      if (item.megaMenu && !mobile) {
        return `<li class="nav__item nav__item--has-mega">
   <button type="button" class="nav__link nav__link--toggle${active ? " is-active" : ""}"
      aria-expanded="false" aria-controls="mega-services" data-mega-toggle>
    ${item.label}${icon("arrow", { class: "nav__chevron", size: 14 })}
        </button>
      </li>`;
      }
      return `<li class="nav__item"><a class="nav__link${active ? " is-active" : ""}" href="${esc(item.href)}"${
     active ? ' aria-current="page"' : ""
      }>${item.label}</a></li>`;
    })
    .join("");

const mobilePanel = (current) => `
<div class="mobile-nav" id="mobile-nav" hidden>
  <div class="mobile-nav__scroll">
    <ul class="mobile-nav__list">${navItems(current, { mobile: true })}</ul>

    <details class="mobile-nav__group">
      <summary>All services${icon("arrow", { class: "mobile-nav__chev", size: 16 })}</summary>
      <div class="mobile-nav__services">
        ${serviceGroups
          .map(
            (g) => `<p class="mobile-nav__heading">${g.title}</p>
        <ul>${servicesIn(g.id)
        .map((s) => `<li><a href="/services/${s.slug}">${s.name}</a></li>`)
              .join("")}</ul>`
          )
       .join("")}
      </div>
    </details>

    <div class="mobile-nav__actions">
      <a class="btn btn--primary btn--wide" href="/contact">Get a Free Consultation</a>
      <a class="btn btn--ghost btn--wide" href="/request-a-quote">Request a Quote</a>
    </div>

    <ul class="mobile-nav__contact">
      <li>${icon("phone", { size: 16 })}<a href="${site.contact.phoneHref}">${site.contact.phoneDisplay}</a></li>
      <li>${icon("mail", { size: 16 })}<a href="${site.contact.emailHref}">${site.contact.email}</a></li>
    </ul>
  </div>
</div>`;

export const header = (current = "/") => `
<div class="topbar">
  <div class="container topbar__inner">
    <p class="topbar__msg">${site.shortDescription}</p>
    <ul class="topbar__contact">
      <li><a href="${site.contact.phoneHref}">${icon("phone", { size: 15 })}${site.contact.phoneDisplay}</a></li>
      <li><a href="${site.contact.emailHref}">${icon("mail", { size: 15 })}${site.contact.email}</a></li>
    </ul>
  </div>
</div>

<header class="site-header" data-header>
  <div class="container site-header__inner">
    ${logo()}

    <nav class="nav" aria-label="Primary">
      <ul class="nav__list">${navItems(current)}</ul>
    </nav>

    <div class="site-header__actions">
      <a class="btn btn--ghost btn--sm" href="/request-a-quote">Request a Quote</a>
      <a class="btn btn--primary btn--sm" href="/contact">Get a Free Consultation</a>
    </div>

    <button type="button" class="hamburger" aria-expanded="false" aria-controls="mobile-nav"
     aria-label="Open menu" data-nav-toggle>
      <span class="hamburger__bars" aria-hidden="true"></span>
    </button>
  </div>
  ${megaMenu()}
</header>
${mobilePanel(current)}`;
