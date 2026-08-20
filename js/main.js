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

// ---------- Animated skill bars ----------
var skillFills = Array.prototype.slice.call(document.querySelectorAll('.skill-fill'));
if (skillFills.length && 'IntersectionObserver' in window) {
  var skillObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        el.style.width = el.getAttribute('data-width') + '%';
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  skillFills.forEach(function (el) { skillObserver.observe(el); });
}

// ---------- Portfolio filters ----------
var filterButtons = Array.prototype.slice.call(document.querySelectorAll('.filter-btn'));
var portfolioCards = Array.prototype.slice.call(document.querySelectorAll('.portfolio-card'));
if (filterButtons.length && portfolioCards.length) {
  filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filterButtons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      portfolioCards.forEach(function (card) {
        var show = filter === 'all' || card.getAttribute('data-category') === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });
}

// ---------- Testimonial slider ----------
var testiCards = Array.prototype.slice.call(document.querySelectorAll('.testi-card'));
var testiDotsWrap = document.getElementById('testiDots');
if (testiCards.length && testiDotsWrap) {
  var testiIndex = 0;
  testiCards.forEach(function (_, i) {
    var dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dot.setAttribute('aria-label', 'Show testimonial ' + (i + 1));
    dot.addEventListener('click', function () { showTesti(i); });
    testiDotsWrap.appendChild(dot);
  });
  var testiDots = Array.prototype.slice.call(testiDotsWrap.children);

  function showTesti(i) {
    testiIndex = i;
    testiCards.forEach(function (card, idx) { card.classList.toggle('active', idx === i); });
    testiDots.forEach(function (dot, idx) { dot.classList.toggle('active', idx === i); });
  }

  setInterval(function () {
    showTesti((testiIndex + 1) % testiCards.length);
  }, 6000);
}

// ---------- Contact form (static demo) ----------
var contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var status = document.getElementById('formStatus');
    var required = Array.prototype.slice.call(contactForm.querySelectorAll('[required]'));
    var allFilled = required.every(function (field) { return field.value.trim() !== ''; });
    var emailField = document.getElementById('email');
    var emailValid = emailField ? emailField.checkValidity() : true;

    if (!allFilled || !emailValid) {
      status.textContent = 'Please fill in all fields with a valid email address.';
      status.className = 'form-status error';
      return;
    }

    status.textContent = "Thanks! This is a static demo form, so nothing was actually sent — connect it to Formspree or a backend to go live.";
    status.className = 'form-status success';
    contactForm.reset();
  });
}
