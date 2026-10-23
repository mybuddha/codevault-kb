# Joget Hash Variables — Practical Guide (DX9)

**Category:** Joget DX9 · Forms · Lists · Custom HTML · Dynamic Data  
**Search tags:** Hash Variable, list hash variable, datalist, display list in form, embed list, filter list, dynamic HTML, #datalist.html.ID#, currentUser, list count, record count, GRC  
**Status:** Syntax based on official Joget DX7/DX8 documentation; **test in your local DX9 environment** before adopting. Examples below use fictional form/list IDs.

## 1. What is a Hash Variable?

A **Hash Variable** is a special placeholder that Joget evaluates at runtime. It can display information from the current user, a form record, a workflow, a system variable, or a **List**.

Example:

```text
#currentUser.username#
```

In supported Joget configuration fields, this is replaced with the logged-in user's username.

Common places where Hash Variables are supported include Form Builder, List Builder, UI Builder, and certain supported plugin properties. A **Custom HTML** element in a Form is one practical place to show a generated List.

> **Property Assistant:** In DX8 documentation, press **Ctrl + Shift + 3** inside a supported property to browse available variables. Check the corresponding control in DX9.

## 2. Display a Joget List inside a Form (most useful)

### Prerequisites

You need a **Form** containing data (e.g., GRC risk records) and a **List** built from that Form. The List should already render correctly when opened normally.

### Step-by-step

1. In **App Composer → Form Builder**, create or confirm a form with fields such as Risk Title, Owner and Status.
2. Open **List Builder**, create a List from that Form, select the columns, and **save** the List.
3. Note the **List ID** from List Builder. For this example, assume the ID is **risk_register**.
4. Open the **Form Builder** screen where you want to embed the List (for example, a GRC dashboard form).
5. Drag a **Custom HTML** element into the Form.
6. In **Custom HTML** content, enter:

```html
<h3>Risk Register</h3>
#datalist.html.risk_register#
```

7. Save your Form and preview it from the running application. The generated HTML representation of the List should appear where that hash variable is evaluated.

**Result:** A List is rendered **within the containing Form**, using the existing List definition. There is no need to manually build an HTML table for every record.

### Important distinctions

- **risk_register** is a sample **List ID**. Replace it with the actual saved List ID; it is **not** the UI Menu ID.
- Rendering a List through the Hash Variable is different from placing a normal **List Menu** in the UI Builder.
- The exact controls, formatting, links and row limits depend on your List configuration and runtime context; do not assume it behaves exactly like a full List Menu.
- Do not paste the raw hash expression into a standalone HTML file that is not processed by Joget.

## 3. List output reference

Replace **myList** with your actual List ID.

| Need | Hash Variable | Meaning |
|---|---|---|
| Display List as HTML | `#datalist.html.myList#` | Generates HTML for List records |
| CSV data | `#datalist.csv.myList#` | Returns a CSV representation |
| JSON data | `#datalist.json.myList#` | Returns JSON (documented in DX8) |
| Count using filters | `#datalist.size.myList#` | Number of records with List filtering applied |
| Total record count | `#datalist.total.myList#` | Count regardless of List filters |
| Column aggregation | `#datalist.col.sum.myList.column_0#` | Sum of first List column (DX8 feature; requires suitable numeric data) |

The `column_0` reference means the **first defined List column**, counting from zero and excluding the standard checkbox column.

## 4. Display only matching records with filters

First, configure the required filter in **List Builder**.

In that filter's properties, find the **URL Request Parameter** value. It may look like `d-1338250-fn_status` (example only).

Then supply the **exact real parameter name**, with the value, inside square brackets:

```text
#datalist.html.risk_register[d-1338250-fn_status=Open]#
```

### Filter based on the logged-in user

If the List has a user/owner filter, you can use a **nested Hash Variable** as the filter value:

```text
#datalist.html.risk_register[d-123456-fn_owner={currentUser.username}]#
```

In this example:

- `d-123456-fn_owner` is a **placeholder**, not a universal filter name.
- `{currentUser.username}` is the inner (nested) Hash Variable; use braces for the inner expression, rather than surrounding it with `#` signs.
- Match the owner field to the type of user identity actually saved (username versus user ID).

Multiple filters can be passed using `&` as the separator:

```text
#datalist.html.risk_register[d-123456-fn_owner={currentUser.username}&d-654321-fn_status=Open]#
```

**Security:** List filters are for selecting records, **not a substitute for permissions**. Restrict access to sensitive GRC records using Joget's proper permission and data-access controls. Do not rely solely on a URL filter.

## 5. Example: a simple risk dashboard count

To show the number of records in a List named `risk_register` in Custom HTML:

```html
<div class="grc-stat">
  <div>Risks in this list</div>
  <strong>#datalist.size.risk_register#</strong>
</div>
```

This is an **illustrative UI snippet**. Use your own CSS for `.grc-stat` and test what records are counted in your particular List.

## 6. What about the Marketplace Datalist Hash Variable Plugin v6?

**Do not install the legacy v6 plugin just to use Data List Hash Variables in Joget DX9.**

The Marketplace entry is for Joget **v5/v6** and explicitly warns that Joget **DX** already provides a built-in Datalist Hash Variable.

| Version | Example syntax | Notes |
|---|---|---|
| Legacy v6 plugin | `#list.ExpensesList#` | Old plugin syntax; **not for DX9** |
| Built into Joget DX | `#datalist.html.ExpensesList#` | Recommended starting point for DX |

The Marketplace description includes a **"datelist"** spelling in one note; the main Joget DX documentation consistently uses **`datalist`**. Use the documentation's `#datalist.html.ID#` pattern.

[Legacy Marketplace plugin reference](https://marketplace.joget.com/jw/web/userview/mp/mpp/_/vad?id=list_hash_variable_v6)

## 7. Common problems and fixes

| Problem | What to check |
|---|---|
| Literal `#datalist.html.myList#` displayed | The field may not process Hash Variables; test in a supported Custom HTML property. |
| Nothing appears | Confirm the exact List ID, that it is saved/published, and that records exist. |
| Wrong records | Confirm filter URL Request Parameter names and field values. |
| Count differs from total | `size` respects List filtering while `total` ignores filters. |
| Current user filter fails | Check whether the stored owner is a username or user ID, and whether you used nested braces correctly. |
| Layout doesn't match regular List Menu | Embedded HTML output may not provide every List Menu feature; test paging, actions and permissions separately. |
| Data seems exposed | Fix List and Form permissions. Visual hiding or client-side filters are not security controls. |

## 8. Related Hash Variables

| Type | Typical example | Use |
|---|---|---|
| Current user | `#currentUser.username#` | Logged-in username |
| Form data | `#form.TABLE.FIELD#` | Value from stored form data (table/field depend on your app) |
| Request parameter | `#requestParam.id#` | Reads a request value; untrusted input should be escaped for its output context |
| Data List | `#datalist.html.myList#` | Display saved List records |
| System variables (DX8.2+) | `#sysVariable.KEY#` | Read configured system-wide variables where available |

For user-provided data inside scripts or queries, consult Joget's escape keywords (for example `?javascript` or `?sql`) and apply the correct escaping or parameterisation for the context.

## 9. Can a Hash Variable display the full interactive List with all options?

**No documented Datalist Hash Variable renders the complete List Menu or CRUD Menu experience.** The `#datalist.html.myList#` Hash Variable returns HTML for a List. Do not expect all the search boxes, filters, sorting, pagination, export, New/Edit/Delete buttons and page navigation of a real Joget UI Menu.

| What you need | Recommended method |
|---|---|
| Simple table of records inside Custom HTML or an email | `#datalist.html.myList#` |
| Searchable, sortable, filterable List with pagination and exports | **UI Builder → List Menu** |
| List with **New / Edit / Delete** record handling | **UI Builder → CRUD Menu**, configured with the correct form, List and actions |
| Full menu display within an existing Form or another page | Embed the **List Menu / CRUD Menu URL in an iframe** |

### Example: embed a real List or CRUD Menu in a Form

1. Create and test a List in **List Builder**.
2. In **UI Builder**, add a **List Menu** (for viewing/filtering/exporting) or **CRUD Menu** (for create/edit/delete).
3. Open that UI menu normally and copy its real address.
4. Open the Form where the List should appear. Add a **Custom HTML** element.
5. Paste the following, replacing the example `src` path with the real menu URL:

```html
<iframe
  src="/jw/web/userview/grc/v/_/risk_register?embed=true"
  width="100%"
  height="600"
  style="border:0"
  title="Risk Register">
</iframe>
```

**Important:** `grc`, `v`, and `risk_register` are *examples* for the App ID, UI ID and **UI Menu ID**. For the iframe you need the **UI Menu ID**, whereas the Hash Variable uses the **List ID**. They may be different.

Joget's official tutorial uses `?embed=true` when embedding a List/CRUD interface in an iframe, so the parent UI shell is not repeated.

### Limitations and checks

- The iframe displays a separate UI page; it is **not** a new kind of Hash Variable.
- Menu links, Edit screens, delete actions, popups and form redirects may navigate **inside the iframe** or elsewhere, depending on configuration; test each required action.
- Fixed iframe heights can cause inner scroll bars. Adjust the height or use a documented, tested resizing solution.
- The user still needs actual Joget access permissions to the embedded menu and its records.
- The official iframe and CRUD-in-Form examples are primarily documented for **DX8**; verify behaviour in the exact **DX9** version used locally.

**Official references:**

- [Joget List Menu](https://kb.on.joget.cloud/jw/web/userview/jdocs/docs/DX8/list-menu)
- [Joget Generate CRUD](https://kb.on.joget.cloud/jw/web/userview/jdocs/docs/DX8/generate-crud)
- [Joget — Expand Nested Datalist in an iFrame](https://kb.on.joget.cloud/jw/web/userview/jdocs/docs/DX8/expand-nested-datalist-in-an-iframe)
- [Joget — Embed CRUD List Menu Into Form](https://confluence.joget.org/community/display/DX8/Embed+CRUD+List+Menu+Into+Form)

## 10. Reference documents

- [Joget DX8 Hash Variable reference](https://confluence.joget.org/community/display/DX8/Hash+Variable) — detailed Data List variants, nesting and filtering.
- [Joget DX7 Hash Variable reference](https://confluence.joget.org/community/display/DX7/Hash+Variable) — built-in Data List syntax and filtered counts.
- [Joget Custom HTML](https://kb.on.joget.cloud/jw/web/userview/jdocs/docs/DX8/custom-html) — configuring Custom HTML in Forms.
- [Legacy Marketplace plugin](https://marketplace.joget.com/jw/web/userview/mp/mpp/_/vad?id=list_hash_variable_v6) — historical plugin; installation warning for DX.

---

**DX9 validation checklist:** Verify the rendering, the actual List ID, user-specific filters, record-level permissions, available output formats, and whether the HTML representation includes all required columns and actions in **your local DX9 version**.
