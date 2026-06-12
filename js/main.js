// ===========================
// AtherIQ — Shared JS
// ===========================

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {

  // Highlight active nav link
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.style.color = 'var(--ink)';
      link.style.fontWeight = '700';
    }
  });

  // Password toggle visibility
  document.querySelectorAll('[data-toggle-pw]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.querySelector(btn.dataset.togglePw);
      if (!input) return;
      const isText = input.type === 'text';
      input.type = isText ? 'password' : 'text';
      btn.textContent = isText ? '👁' : '🙈';
    });
  });

  // Form validation helper
  window.validateForm = function(formEl) {
    let valid = true;
    formEl.querySelectorAll('[required]').forEach(field => {
      const errEl = formEl.querySelector(`[data-err="${field.name}"]`);
      if (!field.value.trim()) {
        if (errEl) errEl.textContent = 'This field is required.';
        field.style.borderColor = 'var(--error)';
        valid = false;
      } else {
        if (errEl) errEl.textContent = '';
        field.style.borderColor = '';
      }
    });
    // Email format
    const emailField = formEl.querySelector('[type="email"]');
    if (emailField && emailField.value) {
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value);
      const errEl = formEl.querySelector('[data-err="email"]');
      if (!ok) {
        if (errEl) errEl.textContent = 'Enter a valid email address.';
        emailField.style.borderColor = 'var(--error)';
        valid = false;
      }
    }
    return valid;
  };

  // Password strength meter
  const pwField = document.querySelector('#password');
  const strengthBar = document.querySelector('#strength-bar');
  const strengthText = document.querySelector('#strength-text');
  if (pwField && strengthBar) {
    pwField.addEventListener('input', () => {
      const val = pwField.value;
      let score = 0;
      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;
      const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
      const colors = ['', '#EF4444', '#F59E0B', '#3B82F6', '#10B981'];
      strengthBar.style.width = (score * 25) + '%';
      strengthBar.style.background = colors[score] || '#e5e7eb';
      if (strengthText) strengthText.textContent = score > 0 ? labels[score] : '';
    });
  }

  // Smooth scroll CTA
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
