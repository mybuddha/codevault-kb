# Joget Theme UI JavaScript Helpers

**Search tags:** Joget, DX9, JavaScript, jQuery, initials avatar, chosen attendees placeholder, MutationObserver, grid action add, new meeting

This script was supplied as a single minified block. The stored `.js` version is reformatted to make it easier to read. It is designed to work with CSS classes from the calmViolet theme.

## What it does

| Function | Selector | Behaviour |
|---|---|---|
| Attendees placeholder | `#attendees`, `#attendees_chosen` | Displays "Pick who was in the room" |
| Initials avatar | `header.navbar li.user-link` | Creates `.ma-avatar` containing up to two initials |
| Meeting button positioning | `.ma-newmeeting-bottom` | Moves the element under `<body>` |
| Add button cleanup | `.grid-action-add` | Removes selected inline styles and rechecks during DOM changes |

**[Download the complete JavaScript](../code/javascript/joget-theme-ui.js)**

## Integration

Place JavaScript in the Joget Userview theme's custom JavaScript area, subject to your theme options. The relevant UI elements and jQuery must be available for a visible effect. Style `.ma-avatar` and `.ma-newmeeting-bottom` using compatible CSS.

!!! caution
    The MutationObserver watches the full page DOM for child changes and `style` updates; this can be expensive on large dynamic forms. The code does not add or remove actual form records.
