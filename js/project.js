(function () {
  var projects = [
    {
      id: 1,
      title: 'Enterprise Navigation Redesign',
      category: 'UX & Product',
      summary: 'Navigation was scattered across inconsistent panels with different interaction models, costing users time on every repeat visit. I led the end-to-end redesign of the platform\'s core navigation — consolidating bookmarks, page browsing, and recent-screen history into one consistent interaction shell — validated with real users and shipped to measurable adoption growth.',
      client: 'Enterprise Cloud Platform',
      role: 'Experience Design Lead',
      timeline: 'Two-phase rollout',
      tools: 'Figma',
      cover: 'images/work/navigation-redesign/00-cover-nav-hero.jpg',
      overview: 'Navigation on this enterprise platform was split across several separate panels — a bookmarks panel, a page navigator, a recent-screens panel, and a utility panel — each with its own trigger location, interaction pattern, and visual language. As Experience Design Lead, I owned this end-to-end: research synthesis, interaction design, visual design, and delivery, working alongside a cross-functional team spanning engineering, QA, product and program management, with a UX researcher supporting validation.',
      challenge: 'Users had no single, predictable place to look for navigation — one panel expanded horizontally, another opened full-screen, a third overlaid the working area entirely, and users couldn\'t tell what a given icon did without clicking it. Bookmarking was a particular pain point: the icon opened add/manage options without expanding the panel itself, and the collapsed state hid a user\'s full saved list. The goal: unify these into one location with a consistent interaction pattern, freeing up working-area space rather than shrinking it.',
      solution: 'I designed one shared panel shell reachable from a single icon rail, with different contents per trigger, so users learn the interaction once and it holds everywhere. The bookmarks panel now surfaces add/manage actions, a quick-access row, and a color-coded, collapsible list, staying open through navigation instead of closing on first click. The page navigator moved to the same shell with a search field, view-switcher, and drill-down list. The recent-screens panel moved from a full-screen takeover to the same consistent treatment, with substantially more visible entries and per-content-type thumbnails. I deliberately held taxonomy, labelling, panel dimensions, and drill-down logic constant throughout — this release was about making navigation consistent to reach and predictable to use, not a full rewrite users would have had to relearn.',
      highlights: ['Consolidated three inconsistent navigation panels into one shared shell with a single interaction pattern', 'Validated the redesign through moderated usability sessions across a deliberately mixed range of user experience levels', 'Preserved and improved existing accessibility compliance through the relocation, verified jointly with engineering'],
      results: 'Shipped in phases — deeper redesign work in bookmarks and recent screens first, with the page navigator\'s trigger unified into the same shell while its fuller redesign was intentionally sequenced for later. Post-launch analytics showed substantial adoption growth across all three consolidated mechanisms, with bookmarking showing the largest relative gain, consistent with it having been the most-cited friction point in research.',
      research: 'Research combined qualitative synthesis with a direct walkthrough of the existing experience. User interviews surfaced recurring frictions: navigation felt fragmented across too many similar surfaces, users described a repeated cycle of losing context while hunting for what they needed, and bookmarking specifically felt like it cost more effort to set up than it returned. I built proto-personas first, treating them as assumptions rather than findings, then rebuilt them against the research so the personas that shaped the work came out of evidence rather than going into it — three survived, representing distinct usage patterns and product-familiarity levels. I then moderated remote usability sessions against interactive prototypes with a small group of end users deliberately spread across experience levels and role types, with a UX researcher observing and taking notes. Each session ran the same three tasks matching the wayfinding mechanisms the redesign introduced, testing whether people could find a relocated trigger unprompted rather than whether they liked the layout. I also benchmarked against how a couple of comparable large-scale enterprise platforms structure primary navigation — not to copy a specific menu, but to understand that mature platforms at this scale all run several navigation mechanisms in parallel, each solving a different repeat-visit problem, and that the real issue here was inconsistency between them rather than having several to begin with.',
      rejected: {
        intro: 'Every panel went through an iteration process — early directions, an alternate approach, and a validated final direction — with real trade-offs recorded rather than presented as clean wins:',
        items: [
          'Label-less, tooltip-driven bookmark commands were explored and dropped as too likely to confuse users; a "quick edit mode" was cut for lacking a strong enough rationale.',
          'Pinning favorite navigation items to the top, and a separate "item options" panel concept, were both explored but left unresolved on feasibility rather than shipped.',
          'Removing the "set as start page" capability entirely was proposed during a related relocation, then explicitly rejected: a capability already in wide use can\'t be withdrawn on an assumption, without notice or evidence that people wouldn\'t miss it.',
          'A richer recent-screens direction with filter/sort and delete-item actions was dropped in favor of a leaner shipped version, validating the simple version first before adding more.'
        ]
      },
      outcomes: [
        'Page-navigation usage grew substantially year over year, with the same relative ranking of top destinations as before — indicating the redesign made existing workflows easier rather than redirecting behavior.',
        'Recent-screens usage grew even more sharply over the same period.',
        'Bookmarking usage saw the largest relative gain of the three, consistent with it having been the most-cited friction point in interviews.'
      ],
      keyLearnings: 'Every participant completed every task in testing, and the design still had real problems that only surfaced by going back to session recordings rather than relying on success rates alone — a bookmarking control people looked for in the wrong place, and a thumbnail treatment that helped experienced users while leaving newer ones guessing. Arguing successfully against removing an already-relied-upon capability, on the basis that usage evidence should drive removal rather than assumption, mattered as much as any individual design decision. Cross-functional delivery on something that touches the whole product shell meant working in small, constantly-communicated pieces rather than one large handoff, and adapting how the same decision was presented to engineering, QA, and product/program stakeholders in turn.'
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
      title: 'Conditional Formatting for Dense Enterprise Lists',
      category: 'UX & Product',
      summary: 'Users had no self-serve way to visually flag important rows in dense enterprise software lists — any change needed a developer. I designed and shipped a simple rule builder, phased basic conditions first and validated with real usage data before scoping complex logic, then refined it post-launch.',
      client: 'Enterprise Cloud Platform',
      role: 'Experience Design Lead',
      timeline: 'Two-phase rollout',
      tools: 'Figma',
      overview: 'This enterprise software platform\'s list views had no formatting capability at all — every row looked the same regardless of what it meant, and the only way to visually flag anything (an overdue order, a high-value line) was to ask a developer to hard-code it. As Experience Design Lead, I owned this end-to-end: research synthesis, interaction design, visual design, design-system alignment, delivery, and post-launch iteration, working alongside a small cross-functional team spanning product, engineering, and QA.',
      challenge: 'The platform\'s lists can hold hundreds of dense rows, and users had no self-serve way to visually flag what mattered — an overdue order, a high-value line, a record in a given state — without scanning every column, every time. The goal: let end users define their own visual rules, background color and text style, based on field values, applied to a single field or an entire row, built entirely from existing design-system colors, and reusable rather than one-off.',
      solution: 'I added the formatting option as new entries inside an existing settings menu users already used — a pattern they already knew, rather than introducing new navigation. Building a rule is a 3-step accordion: pick the attribute, set the condition using the platform\'s existing comparison operators, then choose a style from the existing design-system palette and decide whether it applies to the field or the entire row. Rules are saved, listed, and editable or deletable from a single panel, including multi-condition (AND) rules — formatting is a reusable, visible setting per view, not a one-off action. Basic single-condition rules shipped first and were validated with real users before complex, multi-attribute AND/OR logic followed in a later release. The rule builder is built entirely from the platform\'s existing design-system components, so responsive behavior came from those components directly rather than requiring bespoke work.',
      highlights: ['Added inside an existing settings menu — no new navigation to learn', '3-step rule builder: attribute → condition → style, reusing the platform\'s existing operators and design-system colors', 'Basic single-condition rules shipped first; complex AND/OR logic followed in a later release once validated with real users'],
      results: 'Shipped with no developer involvement required per rule, and no new colors added to the design system — validated with real usage data, showing strong completion on the lightweight flow and steady, ongoing use of the fuller rule-management dialog.',
      research: 'Research ran in two tracks. I benchmarked against the standard way conditional formatting is handled across enterprise-grade tools broadly — spreadsheet and productivity tools among the reference points — looking at the category-level pattern (attribute → operator → value/style) rather than any single product\'s implementation, then decided how much of that model this platform actually needed. Before any screens were built, I also mapped the interaction using a flow-diagramming technique — screen, user reaction, and an arrow to the next screen and action — covering both basic and complex condition paths up front, including multi-attribute AND/OR logic. That map was used to scope the proof-of-concept with engineering before a single screen was designed. What I deliberately didn\'t carry over from tools like Excel: the depth. This platform\'s version needed to be the simplest version of that same idea, validated with real users before any of that power was added.',
      rejected: {
        intro: 'Every scope decision came from one governing principle, applied consistently: ship the simplest validated version first, then let real usage data — not assumptions — justify each expansion. Explored and deliberately deferred, all under that reasoning:',
        items: [
          'Complex, multi-condition rules (AND/OR logic) — mapped in full during flow work, phased into a later release once basic conditions were validated with real users.',
          'Condition hierarchy and reordering — deferred alongside complex conditions rather than built in isolation.',
          'Text formatting (color applied to text, not just backgrounds) — explicitly ruled out on principle: applying color to text risked real readability issues.'
        ]
      },
      outcomes: [
        'Strong completion on the lightweight formatting flow, with the large majority of users who opened it going on to apply a rule.',
        'Steady, ongoing use of the full rule-management dialog over the measurement window.',
        'A smaller group moved back and forth between fields and settings before exiting the fuller dialog — a signal it may be harder to navigate than the lightweight path.'
      ],
      keyLearnings: 'Shipping self-serve conditional formatting meant users could flag what mattered themselves for the first time, with no developer involvement and no new colors added to the design system. Complex, multi-attribute conditions followed in a later release, validated before extending it, not assumed. A couple of real usability issues surfaced after launch and were resolved with targeted design fixes that held up across themes and editable states. Constraints in the underlying color system were documented rather than hidden, with further refinements considered for future releases instead of quietly worked around.'
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
