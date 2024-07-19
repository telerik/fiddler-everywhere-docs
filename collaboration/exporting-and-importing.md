---
title: Exporting and Importing HTTPS Traffic
description: "Export and import captured traffic in multiple formats with the Fiddler Everywhere web-debugging proxy application."
slug: fiddler-export-and-import
publish: true
position: 30
---

# Exporting and Importing HTTP Traffic with Fiddler Everywhere

Fiddler Everywhere allows the export and import of captured traffic in various known formats such as [SAZ (Fiddler Archive)]({%slug fiddler-saz-format%}), HTTPArchive, WCAT, MeddlerScript, cURLScript, and more.

## Exporting

The **Export** context menu option allows you to export the captured traffic in various formats.

- Select one or more sessions from the sessions grid.

- Right-click to invoke the context menu and choose **Export**.

- Use the **Choose Format** to export the desired sessions in the preferred file format.

- Set a snapshot name (the current timestamp is the default snapshot name).

- (Optional) Set a password by enabling AES-256 encryption.

## Importing

Use the **Import Snapshot** option (within the saved **Snapshots** tree) to load sessions kept in various formats such as `*.saz` (Fiddler Archive), `*.har` (HTTPrchive), `*.tstest` (TestStudio LoadTest), `*.cap` (Packet Capture), `*.xml` (IE F12 NetXML).

![Saved sessions import](../images/sessions/saved-sessions-import.png)