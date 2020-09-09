---
title: Installation
redirect_from:
  - /getting-started/installation
  - /installation/installation-procedure
slug: installation
tags: installation, accounts, updates
publish: true
position: 10
---

# Installation

Fiddler Everywhere being a cross-platform web debugging proxy allows you to inspect network traffic and debug it. It is available for Windows, macOS and Linux. In this page, we'll discuss about the system required to run Fiddler Everywhere.

## System Requirements

Fiddler Everywhere utilizes built-in .NET Core (cross-platform version .NET framework).

- macOS High Sierra (10.13+) x64, Windows 7 (with the [.NET Core requirements](https://docs.microsoft.com/en-us/dotnet/core/install/windows#additional-deps) met) or newer x64 version, or Ubuntu 18+ x64
- 300MB of free disk space
- Account with administrative rights. Needed for capturing and decoding HTTPS traffic.
- Active internet connection with access to the following URLs:

```
    https://login.getfiddler.com/
    https://api.getfiddler.com/
    https://auth.getfiddler.com/
```

## Install Fiddler Everywhere
 
Steps to install Fiddler Everywhere client on your system (macOS, Windows, or Linux)

>tip By default, the standard installation will allow you to track only non-secure HTTP traffic. To enable tracking and decoding of HTTPS, you will need to install a trusted certificate, as shown in the [HTTPS]({%slug decrypt-https-traffic%}) article.

### macOS

1. The Fiddler Everywhere installer is available for download on the [Progress website](https://www.telerik.com/download/fiddler-everywhere).

2. Click **Download for OS X** to start downloading the installer

3. Run the **Fiddler Everywhere** dmg file to start the installation process.

### Windows

1. The Fiddler Everywhere installer is available for download on the [Progress website](https://www.telerik.com/download/fiddler-everywhere).

2. Click **Download for Windows** to start downloading the installer

3. Run the **Fiddler Everywhere** exe file to start the installation process.

### Linux

1. The Fiddler Everywhere installer is available for download on the [Progress website](https://www.telerik.com/download/fiddler-everywhere).

2. Click **Download for Linux** to start downloading the installer

3. Install the downloaded package

    On most **Linux** distributions before the installation can be started, the user needs to set the installation file as executable. This can be achieved via the command line or via the GUI.

    - **Command line instructions**

        - Open a terminal
        - Navigate to the folder where the installation file resides.
        - Type `sudo chmod +x filename.appimage`. You can omit the `sudo` command if the currently logged user is the one that downloaded the executable.
        - Enter your username and password (if prompted) and press **Enter**.

    - **GUI Instructions**

        Alternatively, many Linux distributions are providing options to set the file executable rights via the used GUI.

        **Gnome**

        ![Gnome setting executable](../images/installation/exec-gnome.jpg)

        **Cinnamon**

        ![Cinnamon setting executable](../images/installation/exec-cinnamon.jpg)

        **KDE**

        ![KDE setting executable](../images/installation/exec-kde.jpg)

## Create an Account

Signing in is mandatory for both Free and Pro versions of the Fiddler Everywhere client. You can sign up by [creating an unique Fiddler account](#create-fiddler-account) or by [using existing Google account](#use-google-account). The Fiddler Everywhere account enables you to save and share sessions with collaborators and additionally provides access to the Pro features (if Pro version is purchased).

### Create Fiddler Account

1. Launch the Fiddler Everywhere client. The **Create Account** screen loads. Enter the requested information and accept the terms of the agreement. Note that the valid email provided here is the one that is later used for sharing and receiving sessions and notifications.

    ![Create new account - Step 2](../images/login/create-account-screen.jpg)

2. Fiddler sends a confirmation email to the provided address.

3. Open the confirmation email and follow the instructions to complete the registration.

### Use Google Account

Alternatively, you can directly sign in with an existing Google account.

1. Launch the Fiddler Everywhere client. 

2. Click on **Sign in with Google** button.

## Update

Steps to update Fiddler Everywhere to the latest version:

1. Start __Fiddler Everywhere__.

2. From the main menu, choose _Help_ > _Check for Update_. If a newer version is available, a notification will ask for your agreement to download and install it.

3. Fiddler Everywhere will restart and automatically update to the latest version.

>important Once the Fiddler Everywhere client is installed, updated and started with user account, you can review its [default configuration]({%slug configuration-get-started%}).
