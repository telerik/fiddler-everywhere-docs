---
title: Scripting Overview
page_title: Scripting Overview | Fiddler Everywhere
description: "Learn how to use the Scripting tab in Fiddler Everywhere to automate traffic inspection and modification with C# scripts."
slug: fiddler-script
publish: true
position: 10
---

# Scripting in Fiddler Everywhere

>important Scripting is currently a **BETA** feature, as indicated by the **BETA** badge next to the **Scripting** tab. Behavior, available hooks, and limits may change in future releases.

**Scripting** lets you write short C# scripts that hook into the traffic pipeline and application lifecycle of Fiddler Everywhere. Unlike the [**Rules**](slug://fiddler-rules-actions) tab, which uses a visual condition/action builder, the **Scripting** tab lets you write imperative code to inspect and modify sessions, WebSocket messages, and certificate validation results, and to react to Fiddler Everywhere being attached, detached, started, or shut down.

Scripting is useful when your logic is difficult or impossible to express with the Rules Builder&mdash;for example, computing a value from multiple headers, keeping state across requests, or applying conditional logic with several branches.

## The Scripting Tab

Open the **Scripting** tab to manage your scripts. The tab shows a list of scripts with the following controls:

- **Add** &mdash; creates a new script (prefilled with the [sample script](#the-sample-script) template) and opens it in the script editor.
- **Enabled toggle** (per script) &mdash; enables or disables an individual script. Enabling a script automatically disables the previously active one&mdash;**only one script can be active at a time**. If you enable a script that fails validation, the toggle reverts and an error notification is displayed.
- **Double-click a row**, or use the row's context menu **Edit** command, to open the script in the editor.
- **Duplicate** (context menu) &mdash; creates a copy of the selected script.
- **Delete** (context menu, or multi-select and delete) &mdash; removes the selected script(s) after a confirmation dialog.
- **Rename** &mdash; click the script name to edit it inline.
- **Drag to reorder** &mdash; changes the display order of scripts in the list.

A top-level **Enabled** switch controls scripting overall; when it is off, no hooks are dispatched even if a script is marked as enabled.

## Editing a Script

Double-clicking a script (or choosing **Edit**) opens it in a dedicated pop-out editor built on the Monaco editor (the same editor that powers Visual Studio Code), with:

- C# syntax highlighting.
- Inline validation diagnostics (red squiggles for errors, yellow for warnings) that update as you type.
- Autocomplete suggestions (triggered by typing `.`) for members available on the current expression's type.
- A **Save** action (also available via the editor's command palette, or the **Ctrl+S**/**Cmd+S** keyboard shortcut) that validates the script before saving. The shortcut only saves when the script form is valid and has unsaved changes, and it is scoped to the script editor pop-out window - it has no effect outside that window. A script with errors cannot be saved while it is enabled without first fixing the reported errors.

## The Sample Script

Every new script starts from a bundled sample template that demonstrates all the available [script hooks](slug://fiddler-script-hooks), including `OnBeforeRequest`, `OnBeforeResponse`, `OnPeekAtRequestHeaders`, `OnPeekAtResponseHeaders`, `OnSessionCompleted`, `OnAttach`, `OnDetach`, `OnBoot`, `OnShutdown`, `OnValidateServerCertificate`, and `OnWebSocketMessage`. Use it as a starting point and remove the hooks you do not need.

## Validation and Enabling Scripts

Before a script can be enabled or saved while active, Fiddler Everywhere:

1. Parses and compiles the script.
2. Runs a set of security guardrail checks (see [Scripting Security Considerations](slug://fiddler-script-security)).
3. Confirms that every hook method is synchronous (asynchronous hook methods are rejected).

If any check fails, the script is not enabled/saved, and the editor highlights the reported errors. For more information about runtime behavior, timeouts, and how Fiddler Everywhere protects itself from a misbehaving script once it is running, see [Scripting Settings and Limits](slug://fiddler-script-settings).

## See Also

- [Script Hooks Reference](slug://fiddler-script-hooks)
- [Common Scripting Examples](slug://fiddler-script-examples)
- [Scripting Settings and Limits](slug://fiddler-script-settings)
- [Scripting Security Considerations](slug://fiddler-script-security)
- [Using Conditions and Actions with Rules](slug://fiddler-rules-actions)
