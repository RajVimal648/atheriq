/**
 * Site footer: navigation columns, contact block, legal links.
 * Ports to Views/Shared/_Footer.cshtml.
 */
import { site } from "../content/site.js";
import { icon } from "../icons.js";
import { esc } from "../components.js";

const year = new Date().getFullYear();

export const footer = () => `
<footer class="site-footer">
  <div class="container">
    <div class="site-footer__top">
      <div class="site-footer__brand">
        <a class="logo logo--footer" href="/" aria-label="${site.name} home">
          <img src="/assets/img/atheriqlogolight.png" alt="${site.name}" class="logo__img" width="auto" height="48" loading="lazy">
        </a>
        <p class="site-footer__desc">${site.longDescription}</p>
        <ul class="site-footer__contact">
      <li>${icon("phone", { size: 17 })}<a href="${site.contact.phoneHref}">${site.contact.phoneDisplay}</a></li>
   <li>${icon("mail", { size: 17 })}<a href="${site.contact.emailHref}">${site.contact.email}</a></li>
       <li>${icon("clock", { size: 17 })}<span>${site.contact.hours}</span></li>
        </ul>
        ${
          site.social.some((s) => s.url)
       ? `<ul class="site-footer__social">${site.social
             .filter((s) => s.url)
                .map(
                  (s) =>
                    `<li><a href="${esc(s.url)}" rel="noopener noreferrer" target="_blank">${s.label}</a></li>`
    )
                .join("")}</ul>`
            : ""
        }
      </div>

      <nav class="site-footer__nav" aria-label="Footer">
        ${site.footerNav
       .map(
        (col) => `<div class="site-footer__col">
          <h2 class="site-footer__heading">${col.title}</h2>
          <ul>${col.links
            .map((l) => `<li><a href="${esc(l.href)}">${l.label}</a></li>`)
            .join("")}</ul>
        </div>`
          )
          .join("")}
      </nav>
    </div>

    <div class="site-footer__cta">
      <p><strong>Have a project in mind?</strong> Tell us what you need to build, improve or integrate.</p>
      <div class="btn-row">
        <a class="btn btn--primary btn--sm" href="/contact">Get a Free Consultation</a>
        <a class="btn btn--light btn--sm" href="/request-a-quote">Request a Quote</a>
      </div>
    </div>

    <div class="site-footer__bottom">
      <p>&copy; ${year} ${site.legalName}. All Rights Reserved.</p>
      <ul class="site-footer__legal">
        ${site.legalNav.map((l) => `<li><a href="${esc(l.href)}">${l.label}</a></li>`).join("")}
      </ul>
    </div>
  </div>
</footer>`;
