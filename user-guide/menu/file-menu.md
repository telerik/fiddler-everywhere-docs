---
title: File Menu
slug: file-menu
tags: menu
publish: true
position: 1
---

## File Menu

The File menu contains commands to load and store captured traffics. The menu provides options to create and load an archive that includes the whole captured traffic (creates a SAZ file) as well as an option to import/export only specific sessions.

## Load Archive

The **Load Archive** command allows you to reload previously-captured traffic stored in a SAZ file.

![load-archive](../../images/menu/menu-load-archive.png)

## Save Archive

The **Save Archive** submenu exposes options that allow you to save traffic to SAZ files. You can save all current sessions or just the selected sessions. 

![save-archive](../../images/menu/menu-save-archive-001.png)

After selecting an option, a **Save** prompt will appear. The dialog provides options to use encryption (AES256) to create a password-protected archive.

![save-archive-choose-format](../../images/menu/menu-save-archive-002.png)

## Import Sessions

The **Import Sessions** command allows you to import previously-captured traffic from various file formats.

![import-sessions](../../images/menu/menu-import-sessions.png)

## Export Sessions

The **Export Sessions** submenu exposes options to export traffic in various file formats. You can export all current sessions or just the selected sessions. 

![export-sessions](../../images/menu/menu-export-sessions-001.png)

After selecting an option, a **Choose Format** prompt will appear. The supported formats are as follows:
- WCAT Script
- MeddlerScript
- cUrl Script
- Raw File
- HttpArchive v1.1
- HttpArchive v1.2

![export-sessions-choose-format](../../images/menu/menu-export-sessions-002.png)