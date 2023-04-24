---
title: First Steps on macOS
description: "Install and configure Fiddler Everywhere on macOS and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_macos
position: 30
previous_url: /get-started/quickstart-macos
---

# First Steps with Fiddler Everywhere on macOS

This tutorial describes how to install and start using Fiddler Everywhere on macOS.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to effectively using the web-debugging tool.
* Then, you will switch the default Light theme with the Dark one.
* Finally, you will see how to capture, inspect, and modify traffic.

## Prerequisites

- Install macOS version 11 or above.
- Provide 400MB of free disk space.
- Create an account with administrative rights which you'll need for capturing and decoding HTTPS traffic.
- Provide an active internet connection with access to the following URLs:
```curl
  https://*.telerik.com/
  https://*.getfiddler.com/
  https://fiddler-backend-production.s3-accelerate.amazonaws.com
```
- Ensure that Fiddler Everywhere's proxy port is open and unrestricted by a firewall/security tool. By default, that's **port 8866**, but it can be changed from **Settings > Connections > Fiddler listens on port**.

## Step 1: Install Fiddler Everywhere on Your Machine

You'll first have to install the latest version of Fiddler Everywhere on your machine.

1. Navigate to the [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) download page.

1. Select **Download for OS X** to download the installer.

1. Run the **Fiddler Everywhere** `dmg` file to start the installation process.


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

However, by default, you can only track non-secure HTTP system traffic with Fiddler Everywhere. Therefore, to enable the capturing of HTTPS system traffic, you'll have to install and trust the Fiddler root certificate.

1. Start Fiddler Everywhere.

1. Open the [**Welcome** page]({% slug my-resources-section %}) and click the **Enable HTTPS Capture** button. Alternatively, follow the link **Enable HTTPS now** from the inline notification in the Fiddler UI.

  >tip You can also control the trust certificate settings manually. [Learn more about the advanced trust certificate options]({%slug trust-certificate%})

1. Click the **Trust and Enable HTTPS** button.

1. In the window that appears, enter your machine administrative credentials and confirm the certificate installation.

    ![Enter Keychain credentials to trust the root certificate](../images/settings/settings-https-mac-keychain.png)

1. Back on the main Fiddler Everywhere screen, enable the **Live Traffic** toggle to start capturing HTTP and HTTPS system traffic.

That's it! Fiddler Everywhere will start immediately to capture all the traffic generated from any application that uses the operating system proxy settings.

>tip Fiddler Everywhere provides the [preconfigured browser-capturing option]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing), which enables you to skip the system capturing configuration from this step. The predefined browser-capturing option comes in handy when you generate captured traffic only from a browser, or lack administrative right to install certificates and to modify the system proxy, or when third-party VPNs and security tools are colliding with the Fiddler Everywhere proxy.

## Step 5: Fiddle with the Traffic

That was it! Now you are ready to dive more deeply into Fiddler Everywhere and take full advantage of its slick functionalities! Now that Fiddler Everywhere is ready you can proceed with capturing, inspecting, modifying and composing HTTP(S) traffic:

* [**Capture** HTTP(S) traffic through the capturing mode that suits you best]({%slug capture-traffic-get-started%})
* [**Extract** various information from a captured session]({%slug inspecting-traffic-get-started%})
* [**Modify** traffic and accomplish client and server mocking on the fly]({%slug rulesbuilder-get-started%})
* [**Compose** custom API requests]({%slug composer-get-started%})

## Next Steps

* [Sharing captured sessions with collaborators]({% slug collaboration-get-started %})
* [Creating API requests]({% slug composer-get-started %})
* [Grouping the API requests in collections]({% slug composer-collections-get-started %})
* [Mocking server responses]({% slug rulesbuilder-get-started %})
