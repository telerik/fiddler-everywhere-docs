---
title: First Steps on Linux
description: "Install and configure Fiddler Everywhere on Linux and learn how to capture, inspect, and modify the HTTPS traffic, create API requests, mock server responses, and collaborate to analyze data more effectively."
slug: first_steps_linux
position: 3
---

# First Steps with Fiddler Everywhere on Windows

This tutorial describes how to install and start using Fiddler Everywhere on Linux.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to effectively using the web-debugging tool.
* Then, you will learn how to capture, inspect, and modify traffic as well as share the sessions with collaborators.
* Finally, you will deep-dive into the HTTP proxy client and create API requests with the API Composer and mock server responses.

## Prerequisites

- Install Ubuntu 18+ x64.
- Provide 300MB of free disk space.
- Create an account with administrative rights which you'll need for capturing and decoding HTTPS traffic.
- Provide an active internet connection with access to the following URLs:

    ```
        https://*.getfiddler.com/
        https://*.amazonaws.com/
    ```

## Installing Fiddler Everywhere on Your Machine

You'll first have to install the latest version of Fiddler Everywhere on your machine.

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

## Trusting the Root Certificate

Now you can track non-secure HTTP traffic with Fiddler Everywhere. To be able to handle HTTPS traffic, however, you'll have to install a trust certificate.

As the Linux distributions use different security features and approaches for trusting a root certificate, Fiddler Everywhere enables you to export the certificate and manually import it into your Linux OS.

>important The approach for trusting the Fiddler root certificate in this tutorial assumes that your Linux distribution uses the `dkpg-reconfigure` command. If this is not the case, refer to the article on [configuring the Fiddler certificate on Fedora, CentOS, and RedHat]({%slug fiddler-fedora-centos%}).  

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Expand the **Advanced Settings** sub-menu and click  the **Export Root Certificate to Desktop** button.
1. To import and trust the exported certificate, perform the following steps.

    >important (For localized Linux distributions only) Some Linux distributions, such as Ubuntu, use localized paths&mdash;for example, the name of the **Desktop** folder is translated into the locale language. As this may cause an error, specifically create a folder named **Desktop** in your root `mkdir ~/Desktop` directory. Then, export the certificate to the newly created directory. Once the certificate is installed, you can safely remove that directory.

    1. Create a directory and copy the exported certificate by running the following commands.

      ```shell
      $ sudo mkdir /usr/share/ca-certificates/extra
      $ sudo cp ~/Desktop/FiddlerRootCertificate.crt /usr/share/ca-certificates/extra

      // Starts the tool and upgrades the certificates.
      $ sudo dpkg-reconfigure ca-certificates
      ```

    1. From the prompt, select **Yes** to install new certificates.

      ![Add new certificate](../images/configuration/cert_ubunto_002.png)

    1. Choose the `FiddlerRootCertificate.crt` file and click **OK**.

      ![Add Fiddler certificate](../images/configuration/cert_ubunto_003.png)

    1. The certificates are now updated.

      ![Add Fiddler certificate](../images/configuration/cert_ubunto_004.png)

1. Enable the capturing of the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox and clicking **Save**.

## Creating Your Fiddler Account

In this step you'll register by creating your personal Fiddler Everywhere account and become a trial user.   

1. Launch the Fiddler Everywhere client. Select the **New User? Create Account** button.
1. On the **Create Account** screen, enter the requested information and accept the terms of the agreement. The email you provide here will be later on used by your collaborators for sharing sessions, collections, and notifications.
1. Open the confirmation email and verify your Fiddler registration by entering the unique code.
1. Fill in the required information and proceed through the **Let's Go** button.
1. On the next screen, choose whether you want to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link. For the purposes of this tutorial, you'll become a trial user by selecting the **Start Free Trial** option. You are all set to start using the full-scale functionalities Fiddler Everywhere delivers.

## Fiddling with the Traffic

Let's now continue with capturing and inspecting some HTTPS traffic and, then, with modifying a captured session.

1. Switch **Live Traffic** to **Capturing** and the **Live Traffic** list will immediately start capturing and displaying your incoming and outgoing traffic.
1. Now you'll extract a captured session&mdash;go to the **Live Traffic** tab and select a request/response entry from under the **sessions list**. ....
1. Let's modify that session! Right-click the session of your request to open the context menu of the entry. From there, select **Edit in Composer**. When the session opens in a new window, modify its headers&mdash;or example, change ... to ...

## Sharing the Captured Session

After all that traffic information has been captured, inspected, and modified, it's time to share it with your collaborators and analyze it more effectively.

1. Go to ...
1.
1.

Here you go! Let's move on to the API Composer feature and create some API requests.

## Creating API Requests

1. Go to the **Composer** tab. Select an **HTTP method** and enter the endpoint URL, for example,..... Let's enter an additional header, for example, ... Click **Execute** to send the composed API request.
1. Go to the **Response inspector** tab to inspect the result&mdash;the optional header is now visible...
1. Click **Save** to save the API request. It will be loaded in the **Requests** list.

## Grouping the Requests in a Collection

In this step, you'll take a set of composed requests and organize them so that they are displayed as a collection.  

1. Create a new API request by clicking the **+** button. When the new **Composer** tab opens, add a name for it, for example, **My grouped requests**, and click **Save**.
1. Select the collection in which the request will be saved. Click **Save** to close the dialog and add the request to the collection.

## Mocking a Server Response

To mock a server response, you'll need to implement a rule which will set a condition for a selected session.

1. Go to the ... tab and...

That was it! Now you are ready to dive more deeply into Fiddler Everywhere and take full advantage of its slick functionalities!
