# Senith — Portfolio Website

A personal portfolio website built with plain HTML, CSS, and JavaScript — no build step, no framework, no dependencies. Drop the files on any static host and it works.

> Note: this build could not pull the exact Figma design (`Senith - Portfolio website`) because the Figma MCP connection hit its Starter-plan rate limit / could not reach the desktop app during this session. The layout below follows the same section structure a typical personal/portfolio template of this name uses (hero, about, services, skills, portfolio grid with project detail pages, testimonials, blog, contact) with placeholder copy and abstract SVG imagery. Swap in the real Figma colors, type, spacing, and images to match pixel-for-pixel — see "Matching it to the Figma file" below.

## Structure

```
index.html        Home page (all main sections)
project.html       Project / case-study detail page (?id=1..6)
css/style.css      All styles (CSS variables at the top control the theme)
js/main.js         Shared behavior: nav, scroll-spy, reveal animations, filters, testimonial slider, contact form
js/project.js      Project data + rendering for project.html
images/*.svg       Placeholder illustrations & project thumbnails (replace with real photos/screens)
```

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths and the URL query param on `project.html` behave normally:
  ```bash
  cd personal-website
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Deploying (GitHub Pages)

1. Push this folder to a GitHub repository (root of the repo, or a `/docs` folder).
2. In the repo settings, go to **Pages** and set the source branch/folder (e.g. `main` / `/root`).
3. GitHub will publish it at `https://<username>.github.io/<repo>/`.

It's plain static files, so it also deploys as-is to Netlify, Vercel, Cloudflare Pages, or any basic web host — just upload the folder.

## Customizing

- **Content**: replace the placeholder name, bio, projects, testimonials, and blog posts directly in `index.html`; edit the `projects` array in `js/project.js` for the case-study pages.
- **Colors/fonts**: edit the CSS custom properties at the top of `css/style.css` (`:root { ... }`).
- **Images**: swap the files in `images/` with real photos/screenshots — keep the same filenames or update the `src` attributes.
- **Contact form**: the form is static (no backend). Wire it up to [Formspree](https://formspree.io), Netlify Forms, or your own endpoint by setting the `<form>`'s `action`/`method` and removing the JS `preventDefault` demo handler in `js/main.js`.

## Matching it to the Figma file

To make this pixel-accurate to the actual Figma design once Figma access is available:

1. Re-run the Figma MCP `get_design_context` tool against the two frames (`node-id=1-36` and `node-id=1-279`), or export screenshots/specs manually from Figma.
2. Update `css/style.css` colors, spacing, and typography to match the design tokens.
3. Replace the SVG placeholders in `images/` with the real exported assets.
4. Adjust section order/copy in `index.html` and `project.html` to match the two frames exactly.
