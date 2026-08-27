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
      clientUrl: 'https://www.facebook.com/Athirilli/',
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
        { src: 'images/work/athirilli/01-primary-logo-lockup.jpg', caption: 'Primary logo' },
        { src: 'images/work/athirilli/02-swing-tag-mockup.jpg', caption: 'Swing tag — front and back' },
        { src: 'images/work/athirilli/03-swing-tag-reversed.jpg', caption: 'Logo — reverse white on black, for dark backgrounds' },
        { src: 'images/work/athirilli/05-product-tag-mockup.jpg', caption: 'Product tag — front and back, on packaging' }
      ]
    },
    {
      id: 4,
      title: 'Conditional Formatting for IFS Cloud',
      category: 'UX & Product',
      summary: 'Users had no self-serve way to visually flag important rows in dense IFS Cloud lists — any change needed a developer. I designed and shipped a simple rule builder, phased basic conditions first and validated with real usage data before scoping complex logic, then refined it post-launch.',
      client: 'IFS Cloud',
      role: 'Experience Design Lead',
      timeline: 'Two-phase rollout',
      tools: 'Figma, Microsoft Teams, Confluence, Jira',
      overview: 'IFS Cloud\'s list views had no formatting capability at all — every row looked the same regardless of what it meant, and the only way to visually flag anything (an overdue order, a high-value line) was to ask a developer to hard-code it. As Experience Design Lead, I owned this end-to-end: research synthesis, interaction design, visual design, design-system alignment, delivery, and post-launch iteration, working alongside a Product Manager, Program Manager, Technical Design Lead, two developers, and a QA Lead.',
      challenge: 'IFS Cloud lists can hold hundreds of dense rows, and users had no self-serve way to visually flag what mattered — an overdue order, a high-value line, a record in a given state — without scanning every column, every time. The goal: let end users define their own visual rules, background color and text style, based on field values, applied to a single field or an entire row, built entirely from existing design-system colors, and reusable rather than one-off.',
      solution: 'I added "New Formatting" and "Manage Formatting" as two entries inside the existing Column Chooser menu — a pattern users already knew, rather than introducing new navigation. Building a rule is a 3-step accordion: pick the attribute, set the condition using the same operators used elsewhere in IFS Cloud (=, ≠, <, >), then choose a style from the existing design-system palette and decide whether it applies to the field or the entire row. Rules are saved, listed, and editable or deletable from a single panel, including multi-condition (AND) rules — formatting is a reusable, visible setting per view, not a one-off action. Basic single-condition rules shipped first and were validated with real users before complex, multi-attribute AND/OR logic followed in a later release. The rule builder is built entirely from IFS Cloud\'s existing design-system components, so responsive behavior came from those components directly rather than requiring bespoke work.',
      highlights: ['Added inside the existing Column Chooser menu — no new navigation to learn', '3-step rule builder: attribute → condition → style, reusing IFS Cloud\'s existing operators and design-system colors', 'Basic single-condition rules shipped first; complex AND/OR logic followed in a later release once validated with real users'],
      results: 'Shipped with no developer involvement required per rule, and no new colors added to the design system — validated with real usage data, showing strong completion on the lightweight flow and steady, ongoing use of the fuller rule-management dialog.',
      research: 'Research ran in two tracks. I benchmarked against the standard way conditional formatting is handled across enterprise-grade tools broadly — Excel and Smart Sheet among the reference points — looking at the category-level pattern (attribute → operator → value/style) rather than any single product\'s implementation, then decided how much of that model IFS Cloud actually needed. Before any screens were built, I also mapped the interaction using a flow-diagramming technique — screen, user reaction, and an arrow to the next screen and action — covering both basic and complex condition paths up front, including multi-attribute AND/OR logic. That map was used to scope the proof-of-concept with engineering before a single screen was designed. What I deliberately didn\'t carry over from tools like Excel: the depth. IFS Cloud\'s version needed to be the simplest version of that same idea, validated with real users before any of that power was added.',
      rejected: {
        intro: 'Every scope decision came from one governing principle, applied consistently: ship the simplest validated version first, then let real usage data — not assumptions — justify each expansion. Explored and deliberately deferred, all under that reasoning:',
        items: [
          'Complex, multi-condition rules (AND/OR logic) — mapped in full during flow work, phased into a later release once basic conditions were validated with real users.',
          'OR conditions — only AND-combined conditions shipped in the first release (e.g. "Price > 2000 AND State = Planned"); OR logic was scoped out with the rest of complex-condition support.',
          'Condition hierarchy / reordering — deferred alongside complex conditions rather than built in isolation.',
          'Text formatting (color applied to text, not just backgrounds) — explicitly ruled out on principle: applying color to text risked real readability issues.',
          'User-defined/custom colors and a themeable color picker — the initial formatting engine only supported a small, fixed color palette; I proposed a themeable option as a separate future direction rather than blocking the release on a bigger technical change.',
          'Context substitution variables (e.g. dynamic user/company fields) and CSV-style dynamic values — kept out of the initial release, to extend later based on technical possibility.'
        ]
      },
      outcomes: [
        'Strong completion on the lightweight New Formatting flow, with the large majority of users who opened it going on to apply a rule.',
        'Steady, ongoing use of the full rule-management dialog over the measurement window.',
        'A smaller group moved back and forth between fields and settings before exiting the fuller dialog — a signal it may be harder to navigate than the lightweight path.'
      ],
      keyLearnings: 'Shipping self-serve conditional formatting meant users could flag what mattered themselves for the first time, with no developer involvement and no new colors added to the design system. Complex, multi-attribute conditions followed in a later release, validated before extending it, not assumed. Two real defects were caught and resolved after launch: a light-theme link-visibility issue, and a formatting-vs-edit-mode conflict resolved with badge-based indicators that hold up outside the input\'s own chrome. The color-token constraint was documented rather than hidden, with a themeable palette proposed for future consideration instead of quietly worked around.'
    },
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
    p.clientUrl = p.clientUrl || null;
    p.research = p.research || null;
    p.rejected = p.rejected || null;
    p.outcomes = p.outcomes || null;
    p.keyLearnings = p.keyLearnings || null;
    p.whatsNext = p.whatsNext || null;
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
  var metaClientEl = document.getElementById('metaClient');
  if (metaClientEl) {
    if (project.clientUrl) {
      var clientLink = document.createElement('a');
      clientLink.href = project.clientUrl;
      clientLink.target = '_blank';
      clientLink.rel = 'noopener noreferrer';
      clientLink.textContent = project.client;
      metaClientEl.textContent = '';
      metaClientEl.appendChild(clientLink);
    } else {
      metaClientEl.textContent = project.client;
    }
  }
  setText('metaRole', project.role);
  setText('metaTimeline', project.timeline);
  setText('metaTools', project.tools);
  setText('projectOverview', project.overview);
  setText('projectChallenge', project.challenge);
  setText('projectSolution', project.solution);
  setText('projectResults', project.results);

  // Optional deeper-dive sections — only rendered for projects that
  // actually provide the data, so shorter case studies don't show empty
  // headings.
  var extraEl = document.getElementById('projectExtraSections');
  if (extraEl) {
    function addHeading(text) {
      var h2 = document.createElement('h2');
      h2.textContent = text;
      extraEl.appendChild(h2);
    }
    function addParagraph(text) {
      var p = document.createElement('p');
      p.textContent = text;
      extraEl.appendChild(p);
    }
    function addList(items) {
      var ul = document.createElement('ul');
      items.forEach(function (item) {
        var li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
      });
      extraEl.appendChild(ul);
    }

    if (project.research) {
      addHeading('Research & Approach');
      addParagraph(project.research);
    }
    if (project.rejected) {
      addHeading('What I Left Out');
      addParagraph(project.rejected.intro);
      addList(project.rejected.items);
    }
    if (project.outcomes) {
      addHeading('Outcomes');
      addList(project.outcomes);
    }
    if (project.keyLearnings) {
      addHeading('Key Learnings');
      addParagraph(project.keyLearnings);
    }
    if (project.whatsNext) {
      addHeading('What\'s Next');
      addParagraph(project.whatsNext);
    }
  }

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
