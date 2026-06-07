# Faculty Opportunities — Office of Curricular Affairs

A single-page, static job board for open faculty roles across medical education
at the Icahn School of Medicine at Mount Sinai (ASCEND Curriculum).

Built as plain HTML/CSS/vanilla JS — no build step, no dependencies to install.
Fonts load from Google Fonts at runtime.

## Files

| File | Purpose |
|------|---------|
| `index.html` | The whole page — markup, styles, and the rendering/filter logic. |
| `jobs-data.js` | All role + category content. **Edit this to add or change postings.** |
| `assets/` | Logos (Icahn Mount Sinai, ASCEND Curriculum). |

## Run locally

It's a static site — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy on GitHub Pages

1. Push these files to a repo.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Pick your branch and the `/ (root)` folder, then save.
4. The site publishes at `https://<user>.github.io/<repo>/`.

## Editing content

Open `jobs-data.js`:

- **`window.CATEGORIES`** — the sidebar filter groups. Each has a `name`, a short
  label, and a `color` key (`cyan`, `magenta`, `navy`, `teal`, `violet`, `amber`,
  `coral`, `grey`). Empty categories (no matching roles) show a friendly empty state.
- **`window.JOBS`** — one object per posting. Set `category` to a category id, plus
  `title`, `type`, `body` (program/committee), `badge`, `summary`, `meta`,
  `responsibilities`, `qualifications`, and `reports`. New roles render automatically.

No other files need to change — counts, the hero stat, and filters all update from the data.
