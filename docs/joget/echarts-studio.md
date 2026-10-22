# ECharts Studio — Dashboard & Help Page CSS

**Search tags:** Joget, CSS, dashboard, KPI tiles, hero, responsive grid, cards, status pill, help, step-by-step, ECharts, form heading

**[View/download the complete ECharts Studio CSS](../code/css/echarts-studio.css)**

## Main features

- Dark green `.ecs-hero` banner and `.ecs-cta` button.
- Dashboard tiles `.ecs-tile` and `.ecs-tile-value` (large KPI numbers).
- Reusable `.ecs-card`, `.ecs-grid`, `.ecs-grid-3`, `.ecs-grid-4` responsive card layouts.
- Status styling `.ecs-status-pill` and `.ecs-dot` (dot colour supplied separately).
- Numbered guide cards via `.ecs-steps`, expandable FAQ/help panels via `.ecs-details`, and screenshots via `.ecs-shot`.
- Limited page-title hiding on selected pages, and title-hiding when `.ecs-form-title` is present.

## Cautions

- This CSS **does not implement the ECharts charting library or data fetching**. It styles the surrounding interface only.
- Repeated breakpoint rules need simplification before adaptation.
- A later `:only-child` rule may keep a lone card at half width on small screens.
- Screenshot `object-fit: cover` can crop the displayed image when dimensions constrain it.

**Best GRC reuse:** Dashboard tiles, responsive information cards, user guides, and help pages.
