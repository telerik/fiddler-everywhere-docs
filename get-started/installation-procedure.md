---
title: Installation
description: Basic requirements and installation procedure for Fiddler Everywhere
previous_url: /getting-started/installation, /installation/installation-procedure
slug: installation
position: 10
---

# Installation

Fiddler Everywhere is a cross-platform web debugging proxy available for Windows, macOS, and Linux. This article lists the system requirements and describe the steps to install Fiddler Everywhere on all supported operating systems.

## System Requirements

Supported operating systems:

- macOS High Sierra (10.13+) x64
- Windows 7 x64, Windows 8 x64, or Windows 10 x64 (all Windows versions require the installation of [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/install/windows#additional-deps))
- Ubuntu 18+ x64

Other requirements:

- 300MB of free disk space
- An account with administrative rights. Needed for capturing and decoding HTTPS traffic.
- Active internet connection with access to the following URLs:

```
    https://*.getfiddler.com/
    https://*.amazonaws.com/
```

>tip Fiddler Everywhere v.1.1.0 and above supports predefined OS proxy settings for direct internet access. If your system is accesses the Internet through a predefined proxy, make sure you have the latest version of Fiddler Everywhere.

## Install Fiddler Everywhere

>important After the installation, Fiddler Everywhere allows you to track only non-secure HTTP traffic. To enable capturing and decoding of HTTPS traffic, you need to install a trusted certificate, as shown in the [article on configuration]({%slug configuration-get-started%}).

### macOS

1. Navigate to the [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) download page.
1. Select **Download for OS X** to download the installer.
1. Run the **Fiddler Everywhere** `dmg` file to start the installation process.
1. [Complete the HTTPS setup]({%slug configuration-get-started%}#configure-on-macos) and start capturing.

### Windows

1. Navigate to the [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) download page.
1. Select **Download for Windows** to download the installer.
1. Run the **Fiddler Everywhere** exe file to go through the installation process.
1. [Complete the HTTPS setup]({%slug configuration-get-started%}#configure-on-windows) and start capturing.

### Linux

1. Navigate to the [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) download page.
1. Select **Download for Linux** to download the installer.
1. Install the downloaded package.

    On most Linux distributions, you need to set the installation file as executable before starting the installation. To achieve this, either use the command line or the GUI of the desired distribution:

    - Setting the installation plan as executable through the command-line.

        1. Open a terminal.
        1. Navigate to the folder where the installation file resides.
        1. Type `sudo chmod +x filename.appimage`. You can omit the `sudo` command if the currently logged user is the one that downloaded the executable.
        1. If prompted, enter your username and password. Press the **Enter** key.

    - Setting the installation plan as executable through the GUI.

        * For the Gnome distribution

          ![Gnome setting executable](../images/installation/exec-gnome.jpg)

        * For the Cinnamon distribution

          ![Cinnamon setting executable](../images/installation/exec-cinnamon.jpg)

        * For the KDI distribution

          ![KDE setting executable](../images/installation/exec-kde.jpg)

1. [Complete the HTTPS setup]({%slug configuration-get-started%}#configure-on-linux) and start capturing.

## Creating an Account

Signing in is mandatory for both commercial and trial Fiddler Everywhere users. To sign up to Fiddler Everywhere, you can either [create a Fiddler account](#creating-a-fiddler-account) or [use an existing Google account](#using-a-google-account).

### Creating a Fiddler Account

1. Launch the Fiddler Everywhere client. Select the **New User? Create Account** button.
1. On the **Create Account** screen, enter the requested information and accept the terms of the agreement. The email you provide here will be later on used by your collaborators for sharing sessions, collections, and notifications.

    ![Create new account screen](../images/login/create-acc-screen.png)

1. Open the confirmation email and verify your Fiddler registration by entering the unique code.

    ![Enter verification code](../images/login/create-acc-screen-code-confirmation.png)

1. Fill in the required information and proceed through the **Let's Go** button.

    ![Enter verification code](../images/login/create-acc-screen-basic-info.png)

1. On the next screen, choose whether you want to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link.

    ![Enter verification code](../images/login/create-acc-screen-free-trial.png)

### Using a Google Account

Alternatively, you can directly sign in with an existing Google account.

1. Launch the Fiddler Everywhere client.
1. Select **Sign in with Google** and authenticate on the Google Authentication page.
1. After you successfully sign up, choose whether you want to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link.

## Update

To update Fiddler Everywhere to its latest version:

1. Start Fiddler Everywhere.
1. From the main menu, choose **Help** > **Check for Update**. If a newer version is available, a notification will ask for your agreement to download and install it.
1. Fiddler Everywhere will restart and automatically update to the latest version.

>important Once the Fiddler Everywhere client is installed, updated, and started with user account, you can review its [default configuration]({%slug configuration-get-started%}).
