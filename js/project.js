(function () {
  var projects = [
    {
      id: 1,
      title: 'Navigation Redesign',
      category: 'UX & Product',
      summary: 'Simplifying wayfinding across a dense enterprise platform.',
      client: 'Enterprise Software Co.',
      role: 'Lead Product Designer',
      timeline: '6 weeks',
      tools: 'Figma, HTML/CSS',
      overview: 'The client\'s core product had grown feature-by-feature for years, and navigation no longer matched how teams actually worked. This project rebuilt the information architecture from the ground up.',
      challenge: 'Users could technically reach any feature, but rarely the fastest way — new hires took weeks to become fluent in the navigation alone.',
      solution: 'I ran card-sorting sessions with real users, restructured the primary navigation around tasks rather than features, and introduced a lightweight wayfinding system (breadcrumbs, contextual shortcuts) that scaled across the platform\'s densest screens.',
      highlights: ['Restructured navigation around user tasks, not internal feature names', 'Introduced a consistent wayfinding pattern across 40+ screens', 'Documented the new IA as a reusable pattern for future features'],
      results: 'Time-to-find-feature dropped noticeably in follow-up usability testing, and onboarding time for new users shortened as a direct result.',
      gallery: [1, 1]
    },
    { id: 2, title: 'Placeholder', category: 'Branding', client: 'Placeholder', role: 'Placeholder', timeline: 'Placeholder', tools: 'Placeholder' },
    {
      id: 3,
      title: 'Athirilli Brand Identity',
      category: 'Logo Design',
      summary: 'A logo for a Sri Lankan bed linen brand, built from mosaic tiles that echo folded sheets and a Sinhala calligraphic wordmark rooted in local identity.',
      client: 'Athirilli',
      role: 'Logo & Brand Identity Designer',
      timeline: '2014 · 2 weeks',
      tools: 'Adobe Illustrator',
      cover: 'images/work/athirilli/00-cover-packaging-mockup.jpg',
      overview: 'Athirilli is a Maharagama, Sri Lanka–based bed linen and home textiles retailer — 100% cotton sheets, pillow cases, and custom-order bedding at accessible prices. The brief was to give the brand a mark it could use as its face across Facebook and future packaging/product tags — something distinctive in a crowded local retail space.',
      challenge: 'Needed a mark that communicated "bed linen" without being a literal illustration of a bedsheet or pillow — something more abstract and brand-able. Needed to feel locally rooted (Sri Lankan) rather than generic/global, to build trust and familiarity with the target customer base. As a small business, the mark had to work simply — as a profile icon, on packaging tags, and standing alone without a lot of supporting brand system.',
      solution: 'Built the icon from a small grid of colored mosaic tiles — a visual stand-in for folded/stacked bed sheets, with each tile in a different color to nod to the multicultural, multi-ethnic customer base the brand serves. Paired the icon with the brand name hand-rendered in Sinhala calligraphy — chosen specifically to give the mark uniqueness and an emotional closeness to Sri Lankan culture, rather than a generic Latin wordmark. Built out a small variant system: full lockup, icon-only mark, and a reversed white-on-black version for dark backgrounds.',
      highlights: ['Mosaic-tile icon in four colors, standing in for folded bed linen', 'Sinhala calligraphic wordmark alongside the Latin brand name', 'Reversed white-on-black variant for dark backgrounds'],
      results: 'Adopted as the brand\'s primary mark — used as the Facebook page profile icon since 2014 and still in use over a decade later. Rolled out onto real product packaging: a fold-out product tag featuring the logo alongside wash-care instructions, a size/quantity checklist, contact details, and pricing.',
      gallery: [
        { src: 'images/work/athirilli/01-primary-logo-lockup.jpg', caption: 'Primary logo lockup' },
        { src: 'images/work/athirilli/02-swing-tag-front.jpg', caption: 'Swing tag — front, primary lockup with brand accent palette' },
        { src: 'images/work/athirilli/03-swing-tag-reversed.jpg', caption: 'Swing tag — reversed white-on-black, for dark backgrounds' },
        { src: 'images/work/athirilli/04-size-chart-card.jpg', caption: 'Swing tag — back, international size chart' },
        { src: 'images/work/athirilli/05-product-tag-spread.jpg', caption: 'Product tag / care-label spread' },
        { src: 'images/work/athirilli/06-product-tag-priced.jpg', caption: 'Product tag applied — with pricing and contact details filled in' }
      ]
    },
    { id: 4, title: 'Placeholder', category: 'UX & Product', client: 'Placeholder', role: 'Placeholder', timeline: 'Placeholder', tools: 'Placeholder' },
    { id: 5, title: 'Placeholder', category: 'Branding', client: 'Placeholder', role: 'Placeholder', timeline: 'Placeholder', tools: 'Placeholder' },
    { id: 6, title: 'Placeholder', category: 'Logo Design', client: 'Placeholder', role: 'Placeholder', timeline: 'Placeholder', tools: 'Placeholder' }
  ].map(function (p) {
    p.summary = p.summary || 'Simplifying wayfinding across a dense enterprise platform.';
    p.overview = p.overview || 'Overview copy for this project goes here.';
    p.challenge = p.challenge || 'Challenge copy for this project goes here.';
    p.solution = p.solution || 'Solution copy for this project goes here.';
    p.highlights = p.highlights || ['Placeholder highlight one', 'Placeholder highlight two', 'Placeholder highlight three'];
    p.results = p.results || 'Results copy for this project goes here.';
    p.gallery = p.gallery || [1, 1];
    p.cover = p.cover || null;
    return p;
  });

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  var id = parseInt(getParam('id'), 10) || 1;
  var index = projects.findIndex(function (p) { return p.id === id; });
  if (index === -1) index = 0;
  var project = projects[index];
  var prev = projects[(index - 1 + projects.length) % projects.length];
  var next = projects[(index + 1) % projects.length];

  function setText(elId, value) {
    var el = document.getElementById(elId);
    if (el) el.textContent = value;
  }

  document.title = project.title + ' — Senith B.';
  setText('projectCategory', project.category);
  setText('projectTitle', project.title);
  setText('projectSummary', project.summary);
  setText('metaClient', project.client);
  setText('metaRole', project.role);
  setText('metaTimeline', project.timeline);
  setText('metaTools', project.tools);
  setText('projectOverview', project.overview);
  setText('projectChallenge', project.challenge);
  setText('projectSolution', project.solution);
  setText('projectResults', project.results);

  var coverEl = document.getElementById('projectCover');
  if (coverEl && project.cover) {
    coverEl.classList.add('has-image');
    coverEl.style.backgroundImage = 'url(\'' + project.cover + '\')';
  }

  var highlightsList = document.getElementById('projectHighlights');
  if (highlightsList) {
    project.highlights.forEach(function (item) {
      var li = document.createElement('li');
      li.textContent = item;
      highlightsList.appendChild(li);
    });
  }

  var gallery = document.getElementById('projectGallery');
  if (gallery) {
    project.gallery.forEach(function (item) {
      var wrapper = document.createElement('div');
      wrapper.className = 'reveal';
      var block = document.createElement('div');
      block.className = 'thumb-block';
      if (item && typeof item === 'object' && item.src) {
        block.classList.add('has-image');
        block.style.backgroundImage = 'url(\'' + item.src + '\')';
      }
      wrapper.appendChild(block);
      if (item && typeof item === 'object' && item.caption) {
        var caption = document.createElement('p');
        caption.className = 'gallery-caption';
        caption.textContent = item.caption;
        wrapper.appendChild(caption);
      }
      gallery.appendChild(wrapper);
    });
  }

  var prevLink = document.getElementById('prevProject');
  var nextLink = document.getElementById('nextProject');
  if (prevLink) prevLink.href = 'project.html?id=' + prev.id;
  if (nextLink) nextLink.href = 'project.html?id=' + next.id;
  setText('prevTitle', prev.title);
  setText('nextTitle', next.title);
})();
