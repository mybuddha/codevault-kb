# CodeVault KB

A searchable knowledge base for the team's reusable code, especially Joget DX9 CSS/JavaScript themes, components and snippets.

## Contents

- `docs/joget/` — readable, searchable articles and usage guidance.
- `docs/code/css/` — original CSS and small reusable code files.
- `docs/code/javascript/` — original JavaScript.
- `mkdocs.yml` — site structure and appearance.
- `.github/workflows/deploy.yml` — automatic GitHub Pages publishing.

## Publish a website (GitHub Pages)

1. Create a GitHub repository named `codevault-kb`. Use **Public** only if all code is approved for public sharing.
2. Extract this ZIP. Upload **the contents** (including `.github`) to the repository's `main` branch. The hidden `.github` folder is important. For best results use GitHub Desktop or `git` to push the folder.
3. On GitHub, open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Open the **Actions** tab and check the `Publish CodeVault KB` workflow. If necessary, run it manually under `workflow_dispatch`.
5. The public documentation site will appear at `https://YOUR-USERNAME.github.io/codevault-kb/` (replace YOUR-USERNAME with your account or organization name).
6. Give colleagues the site link. Invite editors as GitHub collaborators (or organization team members).

The searchable website is not automatically live from this ZIP; the steps above publish it.

## Add an entry

1. Add an original code file under `docs/code/css/`, `docs/code/javascript/`, or a new category.
2. Copy `docs/guides/snippet-template.md` into the relevant docs folder and describe purpose, scope, install steps, warnings and test status.
3. Add the article's path under `nav:` in `mkdocs.yml`.
4. Commit changes; GitHub Actions republishes the site.

## Local preview (optional)

```bash
python -m pip install -r requirements.txt
mkdocs serve
```

Open `http://127.0.0.1:8000` in your browser.

## Publishing safety

Never publish passwords, access tokens, credentials, private CRM/client data, or code owned by another person/company without permission. Public GitHub Pages content is public. If your team requires a private documentation site, use an access-controlled host instead of assuming a private GitHub repository means a private Pages website.
