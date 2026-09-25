# Portfolio theme

A minimal, image-led portfolio theme for GitHub Pages, in the style of a
designer/maker portfolio: a masonry grid of project thumbnails on the
homepage, a project page per piece of work with a click-to-zoom gallery,
and a data-driven About page with an experience/education timeline.

Everything you'd want to change day-to-day lives in plain YAML or
Markdown files — no HTML/CSS editing required for routine updates.

## Quick start

1. **Put your info in `_config.yml`** — name, tagline, nav links, and
   social links are all at the top of that file.
2. **Write your About page** — edit the bio paragraphs directly in
   `about.md`, and edit your experience/education/press lists in
   `_data/about.yml`.
3. **Add your projects** — copy `_projects/example-project.md`,
   rename it, fill in the front matter (title, type, year, cover
   image, gallery images), and write the case study below the `---`.
   Delete the four sample projects (`tiles.md`, `voyage.md`,
   `camac.md`, `lx-30.md`) once you have real work in place — they're
   just there so the grid isn't empty on first run.
4. **Replace the placeholder images** in `assets/images/projects/`
   with your own photos/renders (any image format works — the sample
   projects use `.svg` placeholders, yours can be `.jpg`/`.png`).

## What's editable where

| To change...                         | Edit...                          |
|---------------------------------------|-----------------------------------|
| Site name, tagline, nav links, socials | `_config.yml`                    |
| About page bio text                    | `about.md`                       |
| Experience / education / press list    | `_data/about.yml`                |
| A project's title, images, write-up    | `_projects/<project>.md`         |
| Colors, fonts, spacing                 | `_sass/theme.scss`               |
| Header/footer markup                   | `_includes/header.html`, `footer.html` |

Adding a project automatically adds it to the homepage grid — no other
file needs to change. The grid order follows each project's `order`
value in its front matter (lower numbers first).

## Running locally

Requires [Ruby](https://www.ruby-lang.org/) and Bundler.

```bash
bundle install
bundle exec jekyll serve
```

Then open `http://localhost:4000`.

## Publishing to GitHub Pages

This repo includes a GitHub Actions workflow
(`.github/workflows/pages.yml`) that builds and deploys the site on
every push to `main`.

1. Push this project to a new GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` — the workflow builds the site and publishes it.
   Your site will be live at `https://<username>.github.io/<repo>/`
   (or `https://<username>.github.io/` if the repo is named
   `<username>.github.io`).
5. Set `url` (and `baseurl` if it's a project site, i.e. not named
   `<username>.github.io`) in `_config.yml` to match, so links and the
   sitemap resolve correctly.

### Using a custom domain

Add a `CNAME` file to the repo root containing just your domain
(e.g. `example.com`), then point your DNS at GitHub Pages per
[GitHub's custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Notes

- The lightbox (click-to-zoom gallery on project pages) is plain
  vanilla JS in `assets/js/main.js` — no dependencies.
- The homepage grid is a CSS multi-column masonry layout, so images of
  different aspect ratios naturally stagger, just like the reference
  site this theme is modeled after.
