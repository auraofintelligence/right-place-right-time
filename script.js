/*
 * Right Place, Right Time: page behaviour.
 * Lean on purpose: scroll-reveal and a back-to-top button.
 * Low-bandwidth readers first: without JS, styles.css shows every
 * .reveal panel via html:not(.js), and register.html carries the
 * full project register as static text.
 */
(() => {
  /* Scroll reveal: runs after core.js has rendered any data-driven grids.
     Anything already in the viewport shows immediately (no above-the-fold
     pop-in, and no reliance on observer delivery); the observer only
     handles what scrolls in later. */
  const revealables = Array.from(document.querySelectorAll('.reveal'));
  const inView = (el) => {
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  };
  const pending = revealables.filter((el) => {
    if (inView(el)) { el.classList.add('is-visible'); return false; }
    return true;
  });
  if (!('IntersectionObserver' in window)) {
    pending.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    pending.forEach((el) => io.observe(el));
  }

  /* Back to top */
  const top = document.createElement('button');
  top.type = 'button';
  top.className = 'back-to-top';
  top.textContent = 'Top';
  top.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(top);
  top.addEventListener('click', () => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  });
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      top.classList.toggle('is-shown', window.scrollY > 220);
    });
  }, { passive: true });
})();
