/* ═══════════════════════════════════════════════════════════
   RED ALERT SECURITY — script.js
   Handles: header scroll state, scroll-reveal animations
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  // ─── Header: add .scrolled class when page is scrolled ───
  const header = document.getElementById('site-header');

  function updateHeader() {
    if (window.scrollY > 8) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader(); // run once on load so state is correct on refresh

  // ─── Scroll-reveal: fade-up on feature cards + install steps ───
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
  );

  // Feature cards: stagger with CSS transition-delay
  document.querySelectorAll('.feature-card').forEach(function (el, i) {
    el.classList.add('fade-up');
    el.style.transitionDelay = (i * 0.1) + 's';
    observer.observe(el);
  });

  // Install steps: stagger
  document.querySelectorAll('.install-step').forEach(function (el, i) {
    el.classList.add('fade-up');
    el.style.transitionDelay = (i * 0.12) + 's';
    observer.observe(el);
  });

})();
