/**
 * AtherIQ site behaviour. No dependencies, no build step.
 *
 * Every feature is progressive: the page is fully usable with this file
 * blocked. Each block below is independent, so porting one into a framework
 * (or dropping one) does not affect the others.
 *
 *   1. Sticky header shadow
 *   2. Services mega-menu (desktop)
 *   3. Mobile navigation panel
 *   4. Scroll reveal
 *   5. Form validation + submission handoff
 *   6. Blog category filter + search
 */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const on = (el, ev, fn, opts) => el && el.addEventListener(ev, fn, opts);

  /* ------------------------------------------------ 1. sticky header shadow */

  const header = document.querySelector("[data-header]");
  if (header) {
    const sync = () => header.classList.toggle("is-stuck", window.scrollY > 8);
    sync();
    on(window, "scroll", sync, { passive: true });
  }

  /* --------------------------------------------------- 2. services mega-menu */

  const megaToggle = document.querySelector("[data-mega-toggle]");
  const mega = document.getElementById("mega-services");

  if (megaToggle && mega) {
    const setMega = (open) => {
      mega.hidden = !open;
      megaToggle.setAttribute("aria-expanded", String(open));
    };

    on(megaToggle, "click", () => setMega(mega.hidden));

    // Pointer users expect it to close when they leave the menu area.
    on(header, "mouseleave", () => setMega(false));

    on(document, "keydown", (e) => {
      if (e.key === "Escape" && !mega.hidden) {
        setMega(false);
        megaToggle.focus();
      }
    });

    // Click outside, and tabbing out of the menu, both close it.
    on(document, "click", (e) => {
      if (!mega.hidden && !mega.contains(e.target) && !megaToggle.contains(e.target)) setMega(false);
    });
    on(document, "focusin", (e) => {
      if (!mega.hidden && !mega.contains(e.target) && !megaToggle.contains(e.target)) setMega(false);
    });
  }

  /* ------------------------------------------------ 3. mobile navigation */

  const navToggle = document.querySelector("[data-nav-toggle]");
  const mobileNav = document.getElementById("mobile-nav");

  if (navToggle && mobileNav) {
    const setNav = (open) => {
      mobileNav.hidden = !open;
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      document.body.classList.toggle("nav-open", open);
    };

    on(navToggle, "click", () => setNav(mobileNav.hidden));

    on(document, "keydown", (e) => {
      if (e.key === "Escape" && !mobileNav.hidden) {
        setNav(false);
        navToggle.focus();
      }
    });

    // Following a link inside the panel should not leave it open behind the page.
    on(mobileNav, "click", (e) => {
      if (e.target.closest("a")) setNav(false);
    });

    // Reset when resizing up to the desktop layout, or the panel stays stuck open.
    on(window, "resize", () => {
      if (window.innerWidth > 1200 && !mobileNav.hidden) setNav(false);
    });
  }

  /* ---------------------------------------------------------- 4. scroll reveal */

  const revealables = document.querySelectorAll(".reveal");
  if (revealables.length) {
    // Without IntersectionObserver, or with reduced motion, show everything now.
    if (reduceMotion.matches || !("IntersectionObserver" in window)) {
      revealables.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      revealables.forEach((el) => io.observe(el));
    }
  }

  /* ------------------------------------------- 5. form validation + submit */

  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  /** Validate one control and write its error message. Returns true if valid. */
  const validateField = (input) => {
    const field = input.closest(".field, .checkbox");
    const slot = field && field.querySelector(".field__error");
    let error = "";

    const value = input.type === "checkbox" ? input.checked : input.value.trim();

    if (input.required && !value) {
      error =
        input.type === "checkbox"
          ? "Please confirm this to continue."
          : `${input.dataset.label || "This field"} is required.`;
    } else if (value && input.type === "email" && !EMAIL.test(input.value.trim())) {
      error = "Enter a valid email address, for example name@company.com";
    } else if (value && input.type === "tel" && input.value.replace(/[^\d]/g, "").length < 7) {
      error = "Enter a phone number we can reach you on.";
    }

    input.setAttribute("aria-invalid", error ? "true" : "false");
    if (slot) slot.textContent = error;
    return !error;
  };

  document.querySelectorAll("form[data-validate]").forEach((form) => {
    const controls = [...form.elements].filter((el) => el.name && el.type !== "submit");

    // Validate on blur once touched, and clear the error as soon as it is fixed.
    controls.forEach((input) => {
      on(input, "blur", () => validateField(input));
      on(input, "input", () => {
        if (input.getAttribute("aria-invalid") === "true") validateField(input);
      });
    });

    on(form, "submit", async (e) => {
      e.preventDefault();

      // Clear previous API error
      const prevErr = form.querySelector(".form__api-error");
      if (prevErr) prevErr.remove();

      const invalid = controls.filter((input) => !validateField(input));
      if (invalid.length) {
        // Shake every invalid field, focus the first
        invalid.forEach((input) => {
          const fieldEl = input.closest(".field, .checkbox");
          if (fieldEl) {
            fieldEl.classList.remove("field--shake");
            void fieldEl.offsetWidth; // reflow to restart animation
            fieldEl.classList.add("field--shake");
            fieldEl.addEventListener("animationend", () => fieldEl.classList.remove("field--shake"), { once: true });
          }
        });
        invalid[0].focus();
        return;
      }

      /* ── Build payload matching the API contract ── */
      const fd   = new FormData(form);
      const body = {
        fullName:     (fd.get("name")    || "").trim(),
        email:        (fd.get("email")   || "").trim(),
        phone:        (fd.get("phone")   || "").trim(),
        company:      (fd.get("company") || "").trim(),
        service:      (fd.get("service") || "").trim(),
        message:      (fd.get("message") || "").trim(),
        consentGiven: !!fd.get("consent"),
        website:      (fd.get("website") || "").trim(),
      };

      /* ── Loading state ── */
      const btn = form.querySelector("[type=submit]");
      const originalText = btn ? btn.textContent : "";
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }

      try {
        const API_BASE = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
          ? "http://localhost:5080"
          : "https://atheriqapi.runasp.net";

        const res = await fetch(`${API_BASE}/api/Contact`, {
          method:  "POST",
          headers: { "Content-Type": "application/json", "accept": "*/*" },
          body:    JSON.stringify(body),
        });

        if (!res.ok) throw new Error(`Server responded with ${res.status}`);

        /* ── Success: show overlay modal & remove form ── */
        showSuccessModal(form);

      } catch (err) {
        console.error("Contact form error:", err);
        if (btn) { btn.disabled = false; btn.textContent = originalText; }

        const errEl = document.createElement("p");
        errEl.className = "form__api-error";
        errEl.setAttribute("role", "alert");
        errEl.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Something went wrong. Please try again or email us directly.`;
        form.appendChild(errEl);
      }
    });
  });

  /* ── Success overlay modal ───────────────────────────────────── */
  function showSuccessModal(form) {
    form.hidden = true;

    const overlay = document.createElement("div");
    overlay.className = "success-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Enquiry submitted successfully");

    overlay.innerHTML = `
      <div class="success-card">
        <div class="success-card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h2 class="success-card__title">Enquiry Received!</h2>
        <p class="success-card__text">Thank you for reaching out. We&rsquo;ve received your message and will get back to you within one business day.</p>
        <button class="success-card__close" type="button">Done</button>
      </div>`;

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";

    const closeModal = () => {
      overlay.remove();
      document.body.style.overflow = "";
    };

    overlay.querySelector(".success-card__close").addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
    const onKey = (e) => { if (e.key === "Escape") { closeModal(); document.removeEventListener("keydown", onKey); } };
    document.addEventListener("keydown", onKey);
    overlay.querySelector(".success-card__close").focus();
  }

  /* ----------------------------------------------- 6. blog filter + search */

  const list = document.querySelector("[data-post-list]");
  if (list) {
    const cards = [...list.querySelectorAll("[data-category]")];
    const filters = [...document.querySelectorAll("[data-filter]")];
    const search = document.querySelector("[data-post-search]");
    const empty = document.querySelector("[data-no-results]");
    let category = "all";

    const apply = () => {
      const q = search ? search.value.trim().toLowerCase() : "";
      let shown = 0;

      cards.forEach((card) => {
        const matchesCategory = category === "all" || card.dataset.category === category;
        const matchesQuery = !q || card.textContent.toLowerCase().includes(q);
        const visible = matchesCategory && matchesQuery;
        card.hidden = !visible;
        if (visible) shown += 1;
      });

      if (empty) empty.hidden = shown > 0;
    };

    filters.forEach((btn) => {
      on(btn, "click", () => {
        category = btn.dataset.filter;
        filters.forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        apply();
      });
    });

    if (search) on(search, "input", apply);
  }
})();
