# calmViolet — Complete Joget Theme CSS

**Search tags:** Joget, DX9, purple theme, Inter font, sidebar, avatar, form cards, Data List, Chosen dropdown, AI summary, grid actions, mobile navigation, CSS

**Original source:** Uploaded theme stylesheet (about 349 lines). Preserved unmodified in the code folder.

**[View/download complete calmViolet CSS](../code/css/calmviolet.css)**

## Main features

- Reusable `--ma-*` design variables (accent purple `#5B3FD9`, white cards, muted text, success/warning/error colours).
- Joget header and default left sidebar styling, including active menu pills and position-specific SVG icons.
- Form cards, full-width inputs, Chosen attendee picker, AI summary and meeting notes layout.
- Data List styling, status dots, action buttons, draft cards and responsive layouts.
- Avatar and bottom meeting button designed to work with the companion [theme JavaScript](theme-javascript.md).

## Important warnings before reuse

- Globally hides `.form-cell-validator` validation messages.
- Hides `#adminControl`, row action columns, Print buttons, and the first two columns of certain Form Grid tables.
- Below 1280px, repurposes the Joget sidebar as a horizontal top menu.
- Five menu icons depend on list position using `:nth-child`; changing menu order can mismatch icons.
- Contains multiple rounds of overriding rules; some earlier declarations are superseded.

**Recommendation:** Keep the full stylesheet as reference. Extract and test *small, scoped* components for new GRC projects rather than pasting the entire file unchanged.
