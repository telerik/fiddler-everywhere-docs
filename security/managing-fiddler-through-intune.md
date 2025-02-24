---
title: Managing Fiddler Everywhere through Intune
description: "Manage the Fiddler Everywhere application installation through Microsoft Intune."
slug: fe-intune
publish: true
position: 40
---

# Managing Fiddler Everywhere through Intune

A common task for system and network administrators is to bundle and manage applications through a third-party management system. This article highlights the basics needed to bundle the Fiddler Everywhere application and manage its installation through [Miscrosoft Intune](https://learn.microsoft.com/en-us/mem/intune/fundamentals/what-is-intune).


1. Before you can add Fiddler Everywhere as a Win32 app to Microsoft Intune, you must prepare the application by using the [Microsoft Win32 Content Prep Tool](https://github.com/microsoft/Microsoft-Win32-Content-Prep-Tool). Use the tool to convert the Fiddler Everywhere application installation files into the `.intunewin  ` format by following the official instructions:

    [Prepare the Fiddler Everywhere app content for upload](https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-prepare)

2. After you've prepared a Win32 app to be uploaded to Intune by using the Microsoft Win32 Content Prep Tool, you can add the Fiddler Everywhere to Intune through the following steps:

    [Add the Fiddler Everywhere app content in Intune](https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add)

Upon reaching [the step for configuring the application installation and removal configuration](https://learn.microsoft.com/en-us/mem/intune/apps/apps-win32-add#step-2-program), note that the Fiddler Everywhere application supports the following command-line installation flags

* `/S` - Silent install
* `/allusers` - Installs the application for all users (requires administrative privileges)
* `/currentuser` - Installs the application for the current user only (default)
* `/D="path"` - Installs the application in the specified path