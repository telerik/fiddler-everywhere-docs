---
title: First Steps on Linux
description: "Install and configure Fiddler Everywhere on Linux and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_linux
position: 3
---

# First Steps with Fiddler Everywhere on Linux

This tutorial describes how to install and start using Fiddler Everywhere on Linux.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to effectively using the web-debugging tool.
* Then, you will switch the default Light theme with the Dark one.
* Finally, you will see how to capture, inspect, and modify traffic.

## Prerequisites

- Install Ubuntu 18+ x64.
- Provide 300MB of free disk space.
- Create an account with administrative rights which you'll need for capturing and decoding HTTPS traffic.
- Provide an active internet connection with access to the following URLs:
```curl
  https://*.getfiddler.com/
  https://*.amazonaws.com/
```

## Installing Fiddler Everywhere on Your Machine

You'll first have to install the latest version of Fiddler Everywhere on your machine.

1. Navigate to the [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) download page.
1. Select **Download for Linux** to download the installer.
1. Install the downloaded package. On most Linux distributions, you need to set the installation file as executable before starting the installation. To achieve this, either use the command line or the GUI of the desired distribution:
    - Setting the installation plan as executable through the command-line:

        3.1 Open a terminal.

        3.2 Navigate to the folder where the installation file resides.

        3.3 Type `sudo chmod +x filename.appimage`. You can omit the `sudo` command if the currently logged user is the one that downloaded the executable.

        3.4 If prompted, enter your username and password. Press the **Enter** key.

    - Setting the installation plan as executable through the GUI.

        For the Gnome distribution

          ![Gnome setting executable](../images/installation/exec-gnome.jpg)

        For the Cinnamon distribution

          ![Cinnamon setting executable](../images/installation/exec-cinnamon.jpg)

        For the KDI distribution

          ![KDE setting executable](../images/installation/exec-kde.jpg)

## Creating Your Fiddler Account

In this step you'll register by creating your personal Fiddler Everywhere account and become a trial user.   

1. Launch the Fiddler Everywhere client. Select the **New User? Sign up** button.
1. On the **Create Account** screen, enter the requested information and accept the terms of the agreement. The email you provide here will be later on used by your collaborators for sharing sessions, collections, and notifications.
1. Open the confirmation email and verify your Fiddler registration by entering the unique code.
1. Fill in the required information and proceed through the **Let's Go** button.
1. On the next screen, choose whether you want to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link. For the purposes of this tutorial, you'll become a trial user by selecting the **Start Free Trial** option. You are all set to start using the full-scale functionalities Fiddler Everywhere delivers.

## Trusting the Root Certificate

Now you can track non-secure HTTP traffic with Fiddler Everywhere. To be able to handle HTTPS traffic, however, you'll have to install a trust certificate.

As the Linux distributions use different security features and approaches for trusting a root certificate, Fiddler Everywhere enables you to export the certificate and manually import it into your Linux OS.

>important The approach for trusting the Fiddler root certificate in this tutorial assumes that your Linux distribution uses the `dkpg-reconfigure` command. If this is not the case, refer to the article on [configuring the Fiddler certificate on Fedora, CentOS, and RedHat]({%slug fiddler-fedora-centos%}).  

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Expand the **Advanced Settings** sub-menu and click  the **Export Root Certificate to Desktop** button.
1. To import and trust the exported certificate, perform the following steps.
    >important (For localized Linux distributions only) Some Linux distributions, such as Ubuntu, use localized paths&mdash;for example, the name of the **Desktop** folder is translated into the locale language. As this may cause an error, specifically create a folder named **Desktop** in your root `mkdir ~/Desktop` directory. Then, export the certificate to the newly created directory. Once the certificate is installed, you can safely remove that directory.

    2.1 Create a directory and copy the exported certificate by running the following commands.
      ```shell
      $ sudo mkdir /usr/share/ca-certificates/extra
      $ sudo cp ~/Desktop/FiddlerRootCertificate.crt /usr/share/ca-certificates/extra

      // Starts the tool and upgrades the certificates.
      $ sudo dpkg-reconfigure ca-certificates
      ```

    2.2 From the prompt, select **Yes** to install new certificates.

      ![Add new certificate](../images/configuration/cert_ubunto_002.png)

    2.3 Choose the `FiddlerRootCertificate.crt` file and click **OK**.

      ![Add Fiddler certificate](../images/configuration/cert_ubunto_003.png)

    2.4 The certificates are now updated.

      ![Add Fiddler certificate](../images/configuration/cert_ubunto_004.png)

1. Enable the capturing of the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox and clicking **Save**.

## Styling the Tool

Now let's add more elegance to Fiddler Everywhere and change its default Light theme with the Dark one&mdash;just go to the **Themes** menu, select the Dark theme, and click **Save**. That's it!

## Fiddling with the Traffic

Let's now continue with capturing and inspecting some HTTPS traffic:

1. Inspect each session's request and response data through the **Inspectors** tab.
1. Extract more details and statistical data by using the **Overview** tab.

Now you'll extract a captured session:

1. Go to the **Live Traffic** tab and select a request/response entry from under the **sessions list**.
1. Double-click to open the **Inspectors** tab and inspect the detailed session request/response data.
1. Switch to the **Overview** tab to observe technical and statistical data.

Let's modify that session!

1. Right-click the session of your request to open the context menu of the entry. From there, select **Edit in Composer**.
1. When the session opens in a new **Composer** window, modify its headers. For example, add new HTTP header with the `isTest` key and the `true` value.
1. Click the **tick** to add the new HTTP header.
1. Click the **Execute** button to replay the modified request.

That was it! Now you are ready to dive more deeply into Fiddler Everywhere and take full advantage of its slick functionalities!

## Next Steps

* [Sharing captured sessions with collaborators]({% slug collaboration-get-started %})
* [Creating API requests]({% slug composer-get-started %})
* [Grouping the API requests in collections]({% slug composer-collections-get-started %})
* [Mocking server responses]({% slug rulesbuilder-get-started %})
