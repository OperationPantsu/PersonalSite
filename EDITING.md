# Editing this site on github.com

No local setup needed — every file below can be edited straight from
your browser. This is a cheat sheet for doing that without guessing at
syntax.

## How to edit any file

1. Open the file on github.com (e.g. [about.md](about.md)).
2. Click the pencil icon (top right of the file view) to edit.
3. Make your change.
4. Scroll down, add a short commit message, and click **Commit
   changes directly to the `main` branch**.
5. That's it — GitHub Actions rebuilds and redeploys automatically.
   Check the **Actions** tab on the repo to watch it (takes ~1 minute).
   Once it shows a green check, refresh the live site — hard-refresh
   (`Ctrl+Shift+R` / `Cmd+Shift+R`) or use a private window if you
   don't see the change, since browsers cache CSS/images aggressively.

## How to upload an image

1. Go to the folder you want it in — project photos go in
   [assets/images/projects/](assets/images/projects/).
2. Click **Add file → Upload files**.
3. Drag your image in, commit.
4. Reference it from a project's front matter as
   `/assets/images/projects/your-file-name.jpg` (see below).

## Two rules that avoid 90% of mistakes

- **Indentation matters.** YAML (the stuff between the `---` lines, and
  files like `_data/about.yml`) uses spaces, not tabs, and the exact
  indentation shown in the examples below. If something looks broken
  after a commit, check the Actions tab — a red ✗ means a YAML typo,
  and the log will usually point at the line.
- **Keep the `---` lines.** Every page/project file starts and ends
  its front matter with a line that's just `---`. Don't delete those.

## Common tasks

### Add a new project

1. Open [_projects/example-project.md](_projects/example-project.md).
2. Click the "..." menu (or the pencil, then use "Copy raw contents")
   and create a new file — easiest way: go to the
   [_projects/](_projects/) folder → **Add file → Create new file** →
   name it e.g. `_projects/my-new-thing.md` → paste this in:

   ```yaml
   ---
   title: "My New Thing"
   subtitle: "One sentence describing what it is."
   type: "Product Design"
   year: 2026
   order: 5
   cover: /assets/images/projects/my-new-thing-cover.jpg
   gallery:
     - /assets/images/projects/my-new-thing-1.jpg
     - /assets/images/projects/my-new-thing-2.jpg
   ---

   Your write-up goes here. Normal Markdown works — paragraphs,
   **bold**, *italics*, [links](https://example.com).
   ```

3. Upload the referenced images first (see above) so the filenames
   match.
4. `order` controls where it sits in the homepage grid — lower numbers
   appear first. Doesn't need to be unique, just roughly ranked.
5. Commit. It shows up on the homepage and gets its own page
   automatically — nothing else to touch.

### Remove a project

Delete its file in [_projects/](_projects/) (open it, trash-can icon
top right, commit). It disappears from the grid immediately.

### Edit your bio text

Edit [about.md](about.md) directly — everything below the second
`---` is plain Markdown, no special syntax.

### Edit your experience / education / press list

Edit [_data/about.yml](_data/about.yml). Each entry follows this
shape — copy an existing one and change the values:

```yaml
experience:
  - date: "2025–2026"
    role: "Your Role at Company"
    location: "City, Country"
    link:
      label: "Case study"     # leave both blank ("") to hide the link
      url: "https://..."
```

To add a new entry, copy one whole block (from `- date:` down to the
line before the next `- date:`) and paste it in the same list, keeping
the same indentation.

### Change your tagline, social links, or nav

All in [_config.yml](_config.yml):

```yaml
tagline_prefix: "Your one-line tagline"
tagline_link_text: ""        # leave blank if the tagline has no link
tagline_link_url: ""

social:
  - label: Email
    url: mailto:you@example.com
  - label: LinkedIn
    url: https://linkedin.com/in/you
```

Add a social link by copying a `- label: ... / url: ...` pair;
remove one by deleting its two lines.

## Quick reference

| To change...                          | Edit...                    |
|----------------------------------------|-----------------------------|
| Name, tagline, nav links, socials       | [_config.yml](_config.yml) |
| Bio text                                | [about.md](about.md)       |
| Experience / education / press          | [_data/about.yml](_data/about.yml) |
| A project's title, images, write-up     | [_projects/](_projects/)`<project>.md` |
| Colors, fonts, spacing                  | [_sass/theme.scss](_sass/theme.scss) |
