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
- Provide 400MB of free disk space.
- Create an account with administrative rights, which you'll need for capturing and decoding HTTPS traffic.
- Provide an active internet connection with access to the following URLs:
```curl
  https://*.telerik.com/
  https://*.getfiddler.com/
  https://fiddler-backend-production.s3-accelerate.amazonaws.com
```

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

However, you can only track non-secure HTTP system traffic with Fiddler Everywhere by default. Therefore, to capture HTTPS system traffic, you'll have to install and trust the Fiddler root certificate.

As the Linux distributions use different security features and approaches for trusting a root certificate, Fiddler Everywhere enables you to export the certificate and manually import it into your Linux OS.

>important The approach for trusting the Fiddler root certificate in this tutorial assumes that your Linux distribution uses the `dkpg-reconfigure` command. If this is not the case, refer to the article on [configuring the Fiddler certificate on Fedora, CentOS, and RedHat]({%slug fiddler-fedora-centos%}).  

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Expand the **Advanced Settings** sub-menu and export the certificate through the **Export root certificate(DER/Binary format)** button. The certificate is exrpoted to **~/Desktop** as file with name **FiddlerRootCertificate.crt**.

1. To import and trust the exported certificate, perform the following steps.
    >important (For localized Linux distributions only) Some Linux distributions, such as Ubuntu, use localized paths&mdash;for example, the name of the **Desktop** folder is translated into the locale language. As this may cause an error, create a folder named **Desktop** in your root `mkdir ~/Desktop` directory. Then, export the certificate to the newly-created directory. Once the certificate is installed, you can safely remove that directory.

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

1. Back on the foremost Fiddler Everywhere screen, enable the **Live Traffic** toggle to start capturing HTTP and HTTPS system traffic.

That's it! Fiddler Everywhere will start immediately to capture all the traffic generated from any application that uses the operating system proxy settings.

>tip Fiddler Everywhere provides the [preconfigured browser-capturing option]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing), which enables you to skip the system capturing configuration from this step. The predefined browser-capturing option comes in handy when you generate captured traffic only from a browser, lack administrative rights to install certificates and modify the system proxy, or when third-party VPNs and security tools collide with the Fiddler Everywhere proxy.

## Step 5: Fiddle with the Traffic

Let's now continue with capturing and inspecting some HTTPS traffic:

1. Inspect each session's request and response data through the **Inspectors** tab.

1. Extract more details and statistical data by using the **Overview** tab.

Now you'll extract a captured session:

1. Go to the **Live Traffic** tab and select a request/response entry from the **sessions list**.

1. Double-click to open the **Inspectors** tab and inspect the detailed session request/response data.

1. Switch to the **Overview** tab to observe technical and statistical data.

Let's modify that session!

1. Right-click the session of your request to open the context menu of the entry. From there, select **Edit in Composer**.

1. Modify its headers when the session opens in a new **Composer** window. For example, add a new HTTP header with the `isTest` key and the `true` value.

1. Click the **tick** to add the new HTTP header.

1. Click the **Execute** button to replay the modified request.

That was it! Now you are ready to dive more deeply into Fiddler Everywhere and take full advantage of its slick functionalities!

## Next Steps

* [Learn more about the capturing options with Fiddler Everywhere]({%slug capture-traffic-get-started%})
* [Configuring Fiddler Everywhere on Fedora, CentOS, or RedHat]({%slug fiddler-fedora-centos%})
* [Configuring Fiddler Everywhere on XFCE]({%slug fiddler-xfce%})
* [Creating PEM certificate]({%slug how-to-create-pem%})
* [Setting Up the Root Certificate for Electron Applications on Ubuntu]({%slug ubuntu-ca-electron%})
* [Sharing captured sessions with collaborators]({% slug collaboration-get-started %})
* [Creating API requests]({% slug composer-get-started %})
* [Grouping the API requests in collections]({% slug composer-collections-get-started %})
* [Mocking server responses]({% slug rulesbuilder-get-started %})
