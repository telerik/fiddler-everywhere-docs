---
title: First Steps on Linux
description: "Install and configure Fiddler Everywhere on Linux and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_linux
position: 40
previous_url: /get-started/quickstart-linux
---

# First Steps with Fiddler Everywhere on Linux

This tutorial describes how to install and start using Fiddler Everywhere on Linux.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to effectively using the web-debugging tool.
* Then, you will switch the default Light theme with the Dark one.
* Finally, you will see how to capture, inspect, and modify traffic.

## Prerequisites

- Install Ubuntu 18+ x64.
- Provide 400MB of free disk space.
- Create an account with administrative rights, which you'll need for capturing and decoding HTTPS traffic.
- Provide an active internet connection with access to the following URLs:
```curl
  https://*.telerik.com/
  https://*.getfiddler.com/
  https://fiddler-backend-production.s3-accelerate.amazonaws.com
```
- Ensure that Fiddler Everywhere's proxy port is open and unrestricted by a firewall/security tool. By default, that's **port 8866**, but it can be changed from **Settings > Connections > Fiddler listens on port**.

## Step 1: Install Fiddler Everywhere on Your Machine

Install the latest version of Fiddler Everywhere on your machine.

1. Navigate to the [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) download page.

1. Select **Download for Linux** to download the installer.

1. Install the downloaded package. On most Linux distributions, you need to set the installation file as executable before starting the installation. To achieve this, either use the command line or the GUI of the desired distribution:

    - Setting the installation plan as executable through the command-line:

        1. Open a terminal.

        1. Navigate to the folder where the installation file resides.

        1. Type `sudo chmod +x filename.appimage`. You can omit the `sudo` command if the currently logged user is the one that downloaded the executable.

        1. If prompted, enter your username and password. Press the **Enter** key.

    - Setting the installation plan as executable through the GUI.

        For the Gnome distribution

          ![Gnome setting executable](../images/installation/exec-gnome.jpg)

        For the Cinnamon distribution

          ![Cinnamon setting executable](../images/installation/exec-cinnamon.jpg)

        For the KDI distribution

          ![KDE setting executable](../images/installation/exec-kde.jpg)


## Step 2: Create Your Fiddler Account

In this step you'll register by creating your unified Telerik account and become a trial user.   

1. Launch the Fiddler Everywhere application. Follow the **Sign in or create an account** link.

1. On the **Enter Your Email to Sign in or Create an Account** screen, enter the requested information. The email you provide here will be later on used by your collaborators for sharing sessions, collections, and notifications.

1. Check your inbox and open the confirmation email to complete your account activation.

1. Return back to the Fiddler Everywhere application and accept the license agreement.

1. On the next screen, choose whether you want to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link. For the purposes of this tutorial, you'll become a trial user by selecting the **Start Free Trial** option. You are all set to start using the full-scale functionalities Fiddler Everywhere delivers.


## Step 3: Style the Tool

Now let's add more elegance to Fiddler Everywhere and change its default Light theme with the Dark one&mdash;just go to the **Themes** menu, select the Dark theme, and click **Save**. That's it!


## Step 4: Capture Secure Traffic

Fiddler Everywhere can capture all HTTP and HTTPS traffic between your computer and the Internet from virtually any application that supports a system proxy.

However, you can only track non-secure HTTP system traffic with Fiddler Everywhere by default. Therefore, to capture HTTPS system traffic, you'll have to install and trust the Fiddler root certificate. As the Linux distributions use different security features and approaches for trusting a root certificate, Fiddler Everywhere enables you to export the certificate and manually import it into your Linux OS.

>important The approach for trusting the Fiddler root certificate in the tutorial below assumes that your Linux distribution uses the `dkpg-reconfigure` command. If this is not the case, refer to the article on [configuring the Fiddler certificate on Fedora, CentOS, and RedHat]({%slug fiddler-fedora-centos%}).  

* [Install and trust the Fiddler Everywhere CA on Linux through the instructions here...]({%slug trust-certificate%}#install--trust-the-root-certificate-settings)

That's it! Fiddler Everywhere will start immediately to capture all the traffic generated from any application that uses the operating system proxy settings.

>tip Fiddler Everywhere provides the [preconfigured browser-capturing option]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing), which enables you to skip the system capturing configuration from this step. The predefined browser-capturing option comes in handy when you generate captured traffic only from a browser, lack administrative rights to install certificates and modify the system proxy, or when third-party VPNs and security tools collide with the Fiddler Everywhere proxy.

## Step 5: Fiddle with the Traffic

That was it! Now you are ready to dive more deeply into Fiddler Everywhere and take full advantage of its slick functionalities! Now that Fiddler Everywhere is ready, you can proceed with capturing, inspecting, modifying, and composing HTTP(S) traffic:

* [**Capture** HTTP(S) traffic through the capturing mode that suits you best]({%slug capture-traffic-get-started%})
* [**Extract** various information from a captured session]({%slug inspecting-traffic-get-started%})
* [**Modify** traffic and accomplish client and server mocking on the fly]({%slug rulesbuilder-get-started%})
* [**Compose** custom API requests]({%slug composer-get-started%})

## Next Steps

* [Configuring Fiddler Everywhere on Fedora, CentOS, or RedHat]({%slug fiddler-fedora-centos%})
* [Configuring Fiddler Everywhere on XFCE]({%slug fiddler-xfce%})
* [Creating PEM certificate]({%slug how-to-create-pem%})
* [Setting Up the Root Certificate for Electron Applications on Ubuntu]({%slug ubuntu-ca-electron%})
* [Sharing captured sessions with collaborators]({% slug collaboration-get-started %})
* [Creating API requests]({% slug composer-get-started %})
* [Grouping the API requests in collections]({% slug composer-collections-get-started %})
* [Mocking server responses]({% slug rulesbuilder-get-started %})
