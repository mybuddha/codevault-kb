# How to Add a New Code Entry

**One feature = one article + one source code file** (except full themes, which may be preserved as reference archives).

1. **Add the source:** Upload e.g. `docs/code/css/form-card.css`, with the complete working code. Do not change the preserved source unless you're deliberately making a new version.
2. **Copy the template:** Create e.g. `docs/joget/form-card.md` using the [snippet template](snippet-template.md).
3. **Describe the context:** What it does, where it goes in Joget, dependencies, versions, mobile behaviour and limitations.
4. **Link the source:** Include a relative download link to the original CSS/JS.
5. **Make it searchable:** Add plain-language search terms near the top (e.g. `Form Grid`, `add button`, `hide heading`, `sidebar`).
6. **Add to the menu:** Edit the `nav` section of `mkdocs.yml`.
7. **Review and publish:** Commit to the `main` branch or create a pull request if review is enabled. The publishing workflow updates the KB.

## Minimum quality checklist

- [ ] The source file is present.
- [ ] An article explains where to put it and how to use it.
- [ ] The article includes version/test status (including "not tested" when appropriate).
- [ ] Risky `display:none`, global selectors and `!important` overrides are explained.
- [ ] No secrets, credentials, private client data or prohibited proprietary material are included.

## Suggested workflow for the team

Use GitHub issues for code requests and pull requests for changes requiring review. A named editor or team lead can approve updates before they are published.
