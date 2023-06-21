---
title: First Steps on Linux
description: "Install and configure Fiddler Everywhere on Linux and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_linux
position: 3
previous_url: /get-started/quickstart-linux
---

# First Steps with Fiddler Everywhere on Linux

This tutorial describes how to install and start using Fiddler Everywhere on Linux.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to using the web-debugging tool.
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
- Ensure that Fiddler Everywhere's proxy port is open and unrestricted by a firewall/security tool. By default, that's **port 8866**, but you can change it from **Settings > Connections > Fiddler listens on port**.

## Step 1: Install Fiddler Everywhere on Your Machine

Install the latest version of Fiddler Everywhere on your machine.

1. Download the latest version of [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

1. Install the downloaded package. On most Linux distributions, you must set the installation file as executable before starting the installation. To achieve this, either use the command line or the GUI of the desired distribution:

    - Setting the installation plan as executable through the command line:

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

In this step, you'll register by creating your unified Telerik account.   

1. Launch the Fiddler Everywhere application. Follow the **Sign in or create an account** link.

1. Enter the requested information on the **Enter Your Email to Sign in or Create an Account** screen.

1. Check your inbox, open the confirmation email, and complete your account activation.

1. Return the Fiddler Everywhere application and choose whether to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link.


## Step 3: Capture HTTPS Traffic

Fiddler Everywhere can capture all HTTP and HTTPS traffic between your computer and the Internet from virtually any application that supports HTTPS proxies.

### Capture Browser Traffic

With Fiddler Everywhere, you can immediately capture traffic from an independent browser instance.

1. Start Fiddler Everywhere.

1. Open the **Home** pane.

1. Click the **Browser** button.

That's it! Fiddler Everywhere will immediately capture all the traffic generated from the newly opened browser instance.

>tip The independent browser capturing works only with Chromium-based browsers. To capture traffic from other browsers and applications, use the **System Proxy** mode or different capturing modes.

### Capture System Traffic

You can set Fiddler Everywhere as a system proxy and capture the HTTPS traffic of all applications that respect the operating system proxy settings. However, by default, you can only track non-secure HTTP **system** traffic with Fiddler Everywhere. Thus, to enable the capturing of HTTPS system traffic, you'll have to install and trust the Fiddler root certificate.

1. Start Fiddler Everywhere.

1. Open the **Home** pane.

1. Click the **System Proxy** from the **Capture and Inspect Traffic** section.

1. Follow the tutorial steps to successfully install the Fiddler Everywhere CA (certificate authority) and enable it as a system proxy.

  1. Click **Set System Proxy** to enable Fiddler Everywhere as a system proxy.

  1. Follow the instructions in  **Trust Fiddler CA and enable HTTPS** to install the Fiddler Everywhere CA (certificate authority) in your Linux certificate manager. 

    >tip There are various Linux distributions and theu use various approaches to handle the installation and storing of certificate authorities. [Learn more about the manual CA installation on Linux here...]({%slug trust-certificate%}#for-linux)
  
  1. Once the Fiddler CA is successfully installed, confirm by checking the **I have successfully trusted the Fiddler Certificate Authority** checkbox and then press **Next**.

  1. Click **Open Live Traffic** to navigate to the **Live Traffic grid**.

That's it! Fiddler Everywhere will immediately capture all the traffic generated from any application that uses the operating system proxy settings.

>tip: The Fiddler CA is installed in the OS certificate manager once. After the Fiddler Everywhere CA installs successfully, you can directly navigate to the **Live Traffic** tab and manually set/unset the system proxy.


## Step 4: Fiddle with the Traffic

Let's continue with capturing and inspecting HTTPS traffic:

1. Open the **Live Traffic** pane.

2. Use the **Inspectors** tab to analyze the request and response data of a selected session.

3. Use the **Overview** tab to extract technical details and statistical data.

Now let's go ahead with extracting a captured session:

1. Open the **Live Traffic** pane.

1. Switch to the **Live Traffic tab** and select a request/response entry from the **Live Traffic grid**.

1. Double-click on the entry to open the **Inspectors** tab and explore the detailed session request/response data.

1. Switch to the **Overview** tab to examine the technical and statistical information.

1. Save a session or a snapshot of multiple sessions through the **Save** option in the context menu.

1. Share a session or a snapshot of multiple sessions through the **Share** option in the context menu.

>tip Save and share options include adding password-protection to protect sensitive data. 

Let's move on to modifying a session:

1. Right-click on a captured session in the **Live Traffic grid** and select **Edit in Composer** from the context menu.

1. Once the session opens in a new **Composer** window, modify its headers as needed. For example, you can add a new HTTP header with the `isTest` key and the value `true`.

1. Save the new HTTP header by clicking the tick icon.

1. Click the **Execute** button to replay the modified request.

Now, let's discuss mocking traffic:

1. Right-click on a captured session in the **Live Traffic grid** and select **Add New Rule** from the context menu.

1. Use the **Rules Builder** to create the desired mock behavior. You can add various matching conditions and apply different actions. Once you're ready, save the new rule.

1. Enable the **Rules** tab and toggle on the rules you want to execute.

1. Select the captured session and click on **Replay > Reissue Requests** in the context menu to replay the requests according to the applied rules.

>tip The **Rules** tab is one of the most advanced features in Fiddler Everywhere. You can create and execute complex rules on your incoming traffic to mock client and server behavior without touching the client and server applications.

That's it! Now you're equipped to delve deeper into Fiddler Everywhere and make the most of its powerful functionalities.

## Next Steps

* [Learn more about the capturing options with Fiddler Everywhere]({%slug capture-traffic-get-started%})
* [Sharing captured sessions with collaborators]({% slug collaboration-get-started %})
* [Creating API requests]({% slug composer-get-started %})
* [Grouping the API requests in collections]({% slug composer-collections-get-started %})
* [Mocking server responses]({% slug rulesbuilder-get-started %})
* [Configuring Fiddler Everywhere on Fedora, CentOS, or RedHat]({%slug fiddler-fedora-centos%})
* [Configuring Fiddler Everywhere on XFCE]({%slug fiddler-xfce%})
* [Creating PEM certificate]({%slug how-to-create-pem%})
* [Setting Up the Root Certificate for Electron Applications on Ubuntu]({%slug ubuntu-ca-electron%})
