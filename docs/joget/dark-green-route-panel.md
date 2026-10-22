# Dark Green Sidebar & Responsive Route Panel

**Search tags:** Joget, DX9, CSS, sliding side panel, slider, responsive form, mobile Data List, green sidebar, lime active menu, noAjax, push layout

**[View/download complete Dark Green Route Panel CSS](../code/css/dark-green-route-panel.css)**

## Main features

- Dark green sidebar and lime active menu with `#0B2416` and `#9FD545`.
- Underlined Data List links with chevron indicators for `.dataList td a.noAjax`.
- Mobile Data List card treatment and hidden helper-column suppression.
- `.slider-container` responsive widths and `.slider-container.open` positioning.
- Inputs and submit buttons expand for touch layouts; panel grids scroll horizontally.
- Panels hide route-specific Data List headers, export links, counts, and pagination.
- On extremely wide screens (2200px+), an open `#slider` pushes `#main` aside rather than overlaying it.

## Critical distinction

This code **styles a slider** but **does not create the panel, load records, or attach open/close event handlers**. Those depend on separate Joget/JavaScript implementation.

## Reuse notes

- Review globally hidden `.editCrudButton` columns and table headings.
- The submit-button width rule affects forms beyond the slider at narrow widths.
- Target structure such as `#dataList_routePanelStops`, `#page`, `#main`, and `.slider-container.open` must be verified in your project.

**Best GRC reuse:** Risk register / incident list with an optional detail panel; retain the default left Joget navigation outside the panel.
