(function () {
  var projects = [
    {
      id: 1,
      title: 'Nimbus Finance Dashboard',
      category: 'Web Design',
      summary: 'A clean, data-dense dashboard that helps small businesses track cash flow at a glance.',
      cover: 'images/project-1.svg',
      client: 'Nimbus Finance',
      role: 'Product Designer',
      timeline: '6 weeks',
      tools: 'Figma, HTML/CSS',
      overview: 'Nimbus Finance needed a dashboard that made complex financial data approachable for non-technical founders, without hiding the detail power users relied on.',
      challenge: 'The existing tool buried key numbers behind multiple clicks, and new users regularly missed overdue invoices until it was too late.',
      solution: 'I redesigned the information hierarchy around three questions users asked most: what changed, what needs attention, and what happens next. Key metrics moved to a single glanceable summary row.',
      highlights: ['Redesigned the dashboard around task-based priorities', 'Introduced a reusable component library for future features', 'Simplified the invoice creation flow from 5 steps to 2'],
      results: 'Time-to-first-insight dropped noticeably in usability testing, and the team shipped the new dashboard in two design sprints.',
      gallery: ['images/project-1.svg', 'images/project-4.svg']
    },
    {
      id: 2,
      title: 'Orbit Fitness App',
      category: 'Mobile App',
      summary: 'A mobile training companion focused on habit-building rather than raw workout tracking.',
      cover: 'images/project-2.svg',
      client: 'Orbit',
      role: 'UX Designer',
      timeline: '8 weeks',
      tools: 'Figma, Principle',
      overview: 'Orbit wanted an app that kept casual users motivated past the first two weeks, historically their biggest drop-off point.',
      challenge: 'Early users found onboarding overwhelming, with too many choices presented before they had built any momentum.',
      solution: 'I designed a progressive onboarding that only asked for one goal up front, then introduced features gradually as streaks built up.',
      highlights: ['Cut onboarding steps from 9 screens to 4', 'Designed a streak system to reinforce daily habits', 'Built a lightweight design system for the dev team'],
      results: 'Onboarding completion improved substantially, and day-7 retention rose in the following release cycle.',
      gallery: ['images/project-2.svg', 'images/project-5.svg']
    },
    {
      id: 3,
      title: 'Coral Coffee Co.',
      category: 'Branding',
      summary: 'A full identity refresh for a neighbourhood coffee roaster expanding to three new locations.',
      cover: 'images/project-3.svg',
      client: 'Coral Coffee Co.',
      role: 'Brand Designer',
      timeline: '4 weeks',
      tools: 'Illustrator, Photoshop',
      overview: 'Coral Coffee Co. had outgrown their original hand-drawn logo and needed a system that could scale across packaging, signage, and a new website.',
      challenge: 'The existing brand felt inconsistent across touchpoints, with no shared colour palette, type system, or logo lockups.',
      solution: 'I built a flexible identity system anchored around a simplified mark, a warm colour palette, and clear usage guidelines for packaging and signage.',
      highlights: ['Designed a scalable logo system with three lockups', 'Created packaging templates for six product lines', 'Delivered a concise brand guideline document'],
      results: 'The new identity rolled out across all locations smoothly, with the owner reporting stronger recognition from regular customers.',
      gallery: ['images/project-3.svg', 'images/project-6.svg']
    },
    {
      id: 4,
      title: 'Northstar Agency Site',
      category: 'Web Design',
      summary: 'A portfolio website for a small creative agency, built to load fast and convert visitors into leads.',
      cover: 'images/project-4.svg',
      client: 'Northstar Studio',
      role: 'Designer & Developer',
      timeline: '5 weeks',
      tools: 'Figma, HTML/CSS/JS',
      overview: 'Northstar needed a site that showcased their case studies clearly while keeping page weight low for mobile visitors.',
      challenge: 'Their previous site took over 6 seconds to load on mobile and buried contact details several clicks deep.',
      solution: 'I rebuilt the site with a lightweight static stack, restructured case studies around outcomes, and surfaced contact details on every page.',
      highlights: ['Cut page weight significantly by dropping unused libraries', 'Restructured case studies around measurable outcomes', 'Added persistent contact CTA across all pages'],
      results: 'Load times improved dramatically on mobile, and inbound inquiries increased in the following quarter.',
      gallery: ['images/project-4.svg', 'images/project-1.svg']
    },
    {
      id: 5,
      title: 'Pocket Budgeting App',
      category: 'Mobile App',
      summary: 'A minimalist budgeting app aimed at people who find spreadsheets and complex tools intimidating.',
      cover: 'images/project-5.svg',
      client: 'Pocket',
      role: 'Product Designer',
      timeline: '7 weeks',
      tools: 'Figma, Framer',
      overview: 'Pocket set out to make budgeting approachable for people who had never successfully stuck with a budgeting app before.',
      challenge: 'User interviews showed most people abandoned budgeting apps within a week because logging expenses felt like a chore.',
      solution: 'I designed a quick-entry flow that logged an expense in under five seconds, paired with gentle, non-judgmental spending summaries.',
      highlights: ['Reduced expense logging to a single tap plus amount', 'Designed friendly, non-judgmental spending summaries', 'Prototyped and user-tested three onboarding variants'],
      results: 'Weekly active logging increased in beta testing compared to the previous version of the app.',
      gallery: ['images/project-5.svg', 'images/project-2.svg']
    },
    {
      id: 6,
      title: 'Lumen Studio Identity',
      category: 'Branding',
      summary: 'Brand identity and launch site for a boutique lighting design studio.',
      cover: 'images/project-6.svg',
      client: 'Lumen Studio',
      role: 'Brand & Web Designer',
      timeline: '6 weeks',
      tools: 'Illustrator, Figma',
      overview: 'Lumen Studio was launching publicly for the first time and needed a brand and site that felt as considered as their lighting work.',
      challenge: 'With no existing brand assets, everything needed to be built from a short set of mood references and a single conversation.',
      solution: 'I developed a minimal identity built around light and shadow motifs, then translated it into a single-page launch site.',
      highlights: ['Designed a mark built around light/shadow motifs', 'Built a one-page launch site ahead of their opening', 'Delivered a compact style guide for future collateral'],
      results: 'The studio launched on schedule with a cohesive identity across their site, business cards, and social presence.',
      gallery: ['images/project-6.svg', 'images/project-3.svg']
    }
  ];

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  var id = parseInt(getParam('id'), 10) || 1;
  var index = projects.findIndex(function (p) { return p.id === id; });
  if (index === -1) index = 0;
  var project = projects[index];
  var prev = projects[(index - 1 + projects.length) % projects.length];
  var next = projects[(index + 1) % projects.length];

  function setText(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  document.title = project.title + ' — Senith Perera';
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

  var cover = document.getElementById('projectCover');
  if (cover) { cover.src = project.cover; cover.alt = project.title + ' cover image'; }

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
    project.gallery.forEach(function (src) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = project.title + ' gallery image';
      gallery.appendChild(img);
    });
  }

  var prevLink = document.getElementById('prevProject');
  var nextLink = document.getElementById('nextProject');
  if (prevLink) prevLink.href = 'project.html?id=' + prev.id;
  if (nextLink) nextLink.href = 'project.html?id=' + next.id;
  setText('prevTitle', prev.title);
  setText('nextTitle', next.title);
})();
