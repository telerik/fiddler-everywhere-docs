---
title: Main Menu
previous_url: /user-guide/file-menu
slug: file-menu
tags: main menu, Fiddler's menu, Fiddler Everywhere file menu, Fiddler Everywhere help menu
publish: true
position: 10
---

The main menu in Fiddler Everywhere is placed at the top toolbar and consists of **File** and **Help** submenus.

## File Menu

The **File** menu contains commands to load and store captured traffic. The menu provides options to create and load an archive that includes the whole captured traffic (creates a SAZ file) and an option to import/export only specific sessions.

![load-archive](../images/menu/menu-load-archive.png)

### Load Archive

The **Load Archive** command allows you to reload previously-captured traffic stored as a **SAZ** file. The content will be loaded in the **Sessions** list.

### Save Archive

The **Save Archive** sub-menu exposes options that allow you to save traffic to **SAZ** files. You can save all current sessions or just the selected sessions. 

After selecting an option, a **Save** prompt will appear. The dialog provides opportunities to use encryption (AES256) to create a password-protected archive.
   
![save-archive-choose-format](../images/menu/menu-save-archive-002.png)

### Import Sessions

The **Import Sessions** command allows you to import previously-captured traffic from various file formats.

### Export Sessions

The **Export Sessions** sub-menu exposes options to export traffic in various file formats. You can export all current sessions or just the selected sessions. 

After selecting an option, a **Choose Format** prompt will appear. The supported formats are as follows:
- WCAT Script
- MeddlerScript
- cUrl Script
- Raw File
- HttpArchive v1.1
- HttpArchive v1.2

![export-sessions-choose-format](../images/menu/menu-export-sessions-002.png)

## Help Menu

The **Help** menu provides several options for version update and information, fast access to forums, documentation and support channel. The support option is available only for [Fiddler Everywhere PRO]({%slug introduction%}#fiddler-everywhere-pro) verison.

![check-for-update](../images/menu/menu-help-update.png)

### Check for Updates

The **Check For Updates** option contacts a web service to determine whether this is the latest version of Fiddler. If not, you can choose to install the newest version immediately or on Fiddler Everywhere next start.

### Forums

The **Forums** option opens a new browser tab with the [Fiddler Everywhere forums portal](https://community.getfiddler.com/support/discussions). Use the forums to search for information about possible use cases, report issues and bugs, and request features.

### Documentation

The **Documentation** option opens a new browser tab with the [Fiddler Everywhere documentation website](https://docs.telerik.com/fiddler-everywhere/).

### Show Logs

The **Show Logs** option opens the local folder that contains the Fiddler Everywhere log files. Learn more [here]({%slug fiddler-log-files%}) about how to use the log files for troubleshooting your local setup.

### About

The **About** command opens a dialog window that provides information about the Fiddler Everywhere client's current version and build date.

![the About dialog](../images/menu/menu-help-about.png)


### Contact Support

The **Contact Support** option is available only for [Fiddler Everywhere PRO]({%slug introduction%}#fiddler-everywhere-pro) version (including the Trial PRO version).
. Click on the command to send us your support query.