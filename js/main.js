// ---------- Footer year ----------
document.querySelectorAll('#year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

// ---------- Theme toggle (dark by default) ----------
var themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  var setTheme = function (theme) {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    try { localStorage.setItem('theme', theme); } catch (e) {}
    themeToggle.setAttribute('aria-pressed', theme === 'light' ? 'true' : 'false');
    themeToggle.setAttribute('aria-label', theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme');
  };
  themeToggle.addEventListener('click', function () {
    var isLight = document.documentElement.getAttribute('data-theme') === 'light';
    setTheme(isLight ? 'dark' : 'light');
  });
  // Sync aria state with whatever the anti-flash inline script already applied.
  setTheme(document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark');
}

// ---------- Header scroll state ----------
var header = document.getElementById('siteHeader');
function updateHeaderState() {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 12);
}
updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });

// ---------- Mobile nav toggle ----------
var navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', function () {
    var isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  document.querySelectorAll('#navList a').forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---------- Scroll-spy active nav link ----------
var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
var navLinks = Array.prototype.slice.call(document.querySelectorAll('#navList a'));
if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var id = entry.target.getAttribute('id');
      navLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(function (section) { spy.observe(section); });
}

// ---------- Work filters ----------
var filterButtons = Array.prototype.slice.call(document.querySelectorAll('.filter-btn'));
var workCards = Array.prototype.slice.call(document.querySelectorAll('.work-card'));
if (filterButtons.length && workCards.length) {
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      workCards.forEach(function (card) {
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

// ---------- UX Evangelizing carousel ----------
var evangelizingSlides = Array.prototype.slice.call(document.querySelectorAll('.evangelizing-slide'));
var evangelizingDotsWrap = document.getElementById('evangelizingDots');
if (evangelizingSlides.length && evangelizingDotsWrap) {
  var slideIndex = 0;
  evangelizingSlides.forEach(function (_, i) {
    var dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Show slide ' + (i + 1));
    dot.addEventListener('click', function () { showSlide(i); });
    evangelizingDotsWrap.appendChild(dot);
  });
  var evangelizingDots = Array.prototype.slice.call(evangelizingDotsWrap.children);

  function showSlide(i) {
    slideIndex = i;
    evangelizingSlides.forEach(function (slide, idx) { slide.classList.toggle('active', idx === i); });
    evangelizingDots.forEach(function (dot, idx) { dot.classList.toggle('active', idx === i); });
  }

  var evangelizingPrev = document.getElementById('evangelizingPrev');
  var evangelizingNext = document.getElementById('evangelizingNext');
  if (evangelizingPrev) {
    evangelizingPrev.addEventListener('click', function () {
      showSlide((slideIndex - 1 + evangelizingSlides.length) % evangelizingSlides.length);
    });
  }
  if (evangelizingNext) {
    evangelizingNext.addEventListener('click', function () {
      showSlide((slideIndex + 1) % evangelizingSlides.length);
    });
  }

  setInterval(function () {
    showSlide((slideIndex + 1) % evangelizingSlides.length);
  }, 6000);
}

// ---------- Scroll reveal (staggered cascade) ----------
// Content is visible by default (see .reveal in style.css); we only arm the
// hide-until-revealed behavior once we know IntersectionObserver exists and
// the visitor hasn't asked for reduced motion, so nothing ever depends on
// this script to become visible.
var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (revealEls.length && 'IntersectionObserver' in window && !prefersReducedMotion) {
  document.querySelectorAll('[data-reveal-group]').forEach(function (group) {
    Array.prototype.slice.call(group.querySelectorAll('.reveal')).forEach(function (el, i) {
      el.style.setProperty('--reveal-i', i);
    });
  });

  document.body.classList.add('reveal-armed');

  var revealObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(function (el) { revealObserver.observe(el); });
}
