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
    { id: 3, title: 'Placeholder', category: 'Logo Design', client: 'Placeholder', role: 'Placeholder', timeline: 'Placeholder', tools: 'Placeholder' },
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
    project.gallery.forEach(function () {
      var wrapper = document.createElement('div');
      wrapper.className = 'reveal';
      var block = document.createElement('div');
      block.className = 'thumb-block';
      wrapper.appendChild(block);
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
