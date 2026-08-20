// ---------- Footer year ----------
document.querySelectorAll('#year').forEach(function (el) {
  el.textContent = new Date().getFullYear();
});

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

  setInterval(function () {
    showSlide((slideIndex + 1) % evangelizingSlides.length);
  }, 6000);
}
