---
title: Main Menu
previous_url: /user-guide/file-menu
slug: file-menu
tags: main menu, Fiddler's menu, Fiddler Everywhere file menu, Fiddler Everywhere help menu
publish: true
position: 10
---

## Main Menu

The main menu in Fiddler Everywhere is placed at the top and consists of several areas that provide multiple functionalities, settings, and information. To the left, you could find the [**File**](#file), [**View**](#view), and [**Help**](#help) submenus plus [a **Plan** information options](#plan-information). To the right, you will find [**Links**](#links), [**Notifications**](#notifications), [**Settings**](#settings), and current user [**Sign Out** option](#sign-out).

![Fiddler Everywhere main menu](../images/menu/main-menu-all.png)

## File

The **File** menu contains commands to load and store captured traffic. The menu provides options to create and load an archive that includes the whole captured traffic (creates a SAZ file) and an option to import/export only specific sessions.

![Load archive option](../images/menu/menu-load-archive.png)

### Load Archive

The **Load Archive** command allows you to reload previously-captured traffic stored as a **SAZ** file. The content will be loaded in the **Sessions** list.

### Save Archive

The **Save Archive** sub-menu exposes options that allow you to save traffic to **SAZ** files. You can save all current sessions or just the selected sessions. 

After selecting an option, a **Save** prompt will appear. The dialog provides opportunities to use encryption (AES256) to create a password-protected archive.
   
![Save archive option](../images/menu/menu-save-archive-002.png)

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

![Export session formats](../images/menu/menu-export-sessions-002.png)

## View

The **View** menu provides options to change the overall Fiddler Everywhere UI size using zoom in and zoom out.

- **Actual Size** option.Keyboard shortcut: __Cmd and 0__ (Mac), __Ctrl and 0__ (Windows). 
- **Zoom In** option. Keyboard shortcut: __Cmd and +__ (Mac), __Ctrl and +__ (Windows). 
- **Zoom Out** option. Keyboard shortcut: __Cmd and -__ (Mac), __Ctrl and -__ (Windows). 

![View menu with zoom options](../images/menu/main-menu-view.png)

## Help

The **Help** menu provides several options for version update and information, fast access to forums, documentation and support channel. The support option is available only for [Fiddler Everywhere PRO]({%slug introduction%}#fiddler-everywhere-pro) verison.

![Check for updates](../images/menu/menu-help-update.png)

### Check for Updates

The **Check For Updates** option contacts a web service to determine whether this is the latest version of Fiddler. If not, you can choose to install the newest version immediately or on Fiddler Everywhere next start.

### Forums

The **Forums** option opens a new browser tab with the [Fiddler Everywhere forums portal](https://community.getfiddler.com/support/discussions). Use the forums to search for information about possible use cases, report issues and bugs, and request features.

### Documentation

The **Documentation** option opens a new browser tab with the [Fiddler Everywhere documentation website](https://docs.telerik.com/fiddler-everywhere/).

### Open Application Logs Folder

The **Open Application Logs Folder** option opens the local folder that contains the Fiddler Everywhere log files. Learn more [here]({%slug fiddler-log-files%}) about how to use the log files for troubleshooting your local setup.

### About

The **About** command opens a dialog window that provides information about the Fiddler Everywhere client's current version and build date.

![About dialog](../images/menu/menu-help-about.png)


### Contact Support

The **Contact Support** option is available only for [Fiddler Everywhere PRO]({%slug introduction%}#fiddler-everywhere-pro) version (including the Trial PRO version).
. Click on the command to send us your support query.

## Plan Information

The plan information window will provide information about the current user plan usage limits and quotas. The plan button and windows will differ depending on whether the currently logged user uses **Free**, **Trial**, or **Pro** plan. 

- **Free plan** window. Invoke the plan details window via the orange drop-down arrow. Use the **Upgrade** button to load [the **Upgrade to Pro plan** page](https://dashboard.getfiddler.com/purchase?source=fe).

    ![Free plan window and button](../images/menu/free-plan-window.png)

- **Pro plan** window. Invoke the plan details window via the green drop-down arrow. Use the **PRO Plan** button to load [the account dashboard page](https://dashboard.getfiddler.be/myaccount). Find more information about the dashboard options [here]({%slug fiddler-dashboard%}).

    ![Pro plan window and button](../images/menu/pro-plan-window.png)

>tip Refer to [the comparison table]({%slug introduction%}#fiddler-everywhere-pro) to uncover the perks of using the Fiddler Everywhere Pro version.

## Links

The **Links** menu provides several useful fast links.

![Useful links for Fiddler Everywhere](../images/menu/menu-all-links.png)

- A **Forums** link to the Fiddler Everywhere community forums at https://community.getfiddler.com/support/discussions
- A **Documentation** link to the Fiddler Everywhere official documentation at https://docs.telerik.com/fiddler-everywhere/
- A **Contact Support** link (available only for PRO & Trial versions) for posting a support ticket to the Fiddler Everywhere support team. More about Fiddler Everywhere PRO support [here]({%slug support-page%}).

## Notifications

The **Notifications** button shows a drop-down list that contains the most recently received notifications. The Fiddler Everywhere client will send and receive notifications upon using the collaboration functionalities (like sharing session logs, composer collections, and Auto Responder rulesets).

![Example notifications in Fiddler Everywhere](../images/menu/menu-notifications.png)

## Settings

The **Settings** button opens a window that allows you to manage core Fiddler Everywhere functionalities like secure traffic enablement, remote connections, bypassing addressews, privacy and more. Refer to the detailed documentation articles to learn more about each section in the **Settings** window.

- [**HTTPS** section]({%slug decrypt-https-traffic%})
- [**Connections** section]({%slug connections-submenu%})
- [**Gateway** section]({%slug gateway-submenu%})
- [**Privacy** section]({%slug privacy-submenu%})
- [**Composer** section]({%slug composer-settings-submenu%})

## Sign Out

The **Sign Out** button allows you to logout of the currently logged user. Click on the button to logout and navigate to [an intro page]({%slug installation%}#create-an-account) that provides options to create a new user or use another existing account.