---
title: Application Menu
description: "Use the application menu to customize your Fiddler's user interface and access support and help-related features."
slug: app-menu-section
tags: Fiddler help menu, Fiddler Everywhere support, fiddler application logs, zoom interface
position: 10
publish: true
previous_url: /user-guide/application-menu
---

# Application Menu

The Fiddler application menu is located at the top-left corner of Fiddler Everywhere. It contains a [**View**](#view) section to customize the application and a [**Help**](#help) section with support resources. On macOS, the application also contains specific OS menus called **Fiddler Everywhere** and **Edit**

## Fiddler Everywhere (macOS only)

This menu is available only on the macOS version of Fiddler Everywhere. It contains the following options:

- **About**&mdash;Opens an application dialog with detailed information about the currently installed version of Fiddler Everywhere.
- **Setttings**&mdash;A fast link to the Fiddler Everywhere **Settings** menu.
- **Hide Fiddler Everywhere**
- **Hide Others**
- **Show All**
- **Quit Fiddler Everywhere**

## Edit (macOS only)

This menu is available only on the macOS version of Fiddler Everywhere. It contains the following options for generic UI interaction:

- **Undo**
- **Redo**
- **Cut**
- **Copy**
- **Paste**
- **Select All**

## View

The **View** section contains various options, as described below. Note that some of the possibilities are OS-specific.

- **Preferences**&mdash;A fast link to the Fiddler Everywhere **Settings** menu. The option on macOS is available in the menu's **Fiddler Everywhere** section.

- **Minimize**&mdash;(macOS only)Minimizes the Fiddler Everywhere application.

- **Toogle Full Screen**&mdash;(macOS only)Enables or disables the full-screen mode on macOS.

- **Actual Size**&mdash;Resets the Fiddler Everywhere UI to 100% zoom level.

- **Zoom In**&mdash;Zooms in the Fiddler Everywhere UI. The maximum supported zoom level is 150%.

- **Zoom Out**&mdash;Zooms out the Fiddler Everywhere UI. The minimum supported zoom level is 70%.

- **Select Previous Tab**&mdash;Switches back to any actively opened tabs (in the **Live Traffic** pane, or in the **Composer** pane).

- **Select Next Tab**&mdash;Switches forward to any actively opened tabs (in the **Live Traffic** pane, or in the **Composer** pane).

## Certificate

- **Trust Root Certificate**&mdash;Automatically installs and trusts the Fiddler certificate authority (CA) in the user certificate store of the operating system certificate manager. The option is available on [macOS](slug://first_steps_macos) and [Windows](slug://first_steps_windows). On Linux, you have to [export and trust the Fiddler CA certificate manually](slug://first_steps_linux). After you install the CA, you are ready to enable the capturing of HTTPS traffic.

- **Export Root Certificate**&mdash;Automatically exports the Fiddler Everywhere CA file in a format specific to the operating system used. The certificate is exported to the `Desktop` folder. Use the **Settings > HTTPS** section to export the certificate explicitly in a specific format.

- **Reset Certificate**&mdash;Removes the currently installed CA, generates a new one, and adds it to the user certificate store. It requires elevated privileges for the Fiddler Evedrywhere application.

- **Remove Certificate**&mdash;Completely removes the currently installed FIddler CA. Requires elevated privilegies for the Fiddler Evedrywhere application.

- **Capture HTTPS Traffic**&mdash;Defines whether Fiddler Everywhere will capture HTTPS traffic or skip it. By default, this option is disabled, and Fiddler will capture only non-secure HTTP traffic. The Fiddler certificate authority must be installed and trusted to use this option.

- **Ignore Server Errors (Unsage)**&mdash;Controls whether Fiddler Everywhere warns you if an HTTPS server presents a certificate that cannot be validated.

>tip All options from the **Certificate** menu, are available through the Fiddler's **Settings** > **HTTPS** section.

## Help

The **Help** section contains various options, as described below. Note that some of the options are OS-specific.

- **Release Notes**&mdash;Opens a list of the recent versions of Fiddler Everywhere and links to the release notes.

- **Check for Updates**&mdash;Automatically checks and downloads the latest version of Fiddler Everywhere.

- **Forums**&mdash;Direct link to the Fiddler Everywhere forums.

- **Documentation**&mdash;Direct link to the Fiddler Everywhere documentation.

- **Open Application Logs Folder**&mdash;Opens the Fiddler's application folder that contains [the application logs files](slug://fiddler-log-files).

- **About**&mdash;Opens an application dialog with detailed information about the currently installed version of Fiddler Everywhere. On macOS, this option is available in the menu's **Fiddler Everywhere** section.

- **Privacy Center**&mdash;Opens the Progress privacy center page.

- **Contact Support**&mdash;Opens the Telerik's [**Support Center**](https://www.progress.com/legal/privacy-center) landing page.