---
title: First Steps on Windows
description: "Install and configure Fiddler Everywhere on Windows and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_windows
position: 20
previous_url: /get-started/quickstart-windows
---

# First Steps with Fiddler Everywhere on Windows

This tutorial describes how to install and start using Fiddler Everywhere on Windows.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to effectively using the web-debugging tool.
* Then, you will switch the default Light theme with the Dark one.
* Finally, you will see how to capture, inspect, and modify traffic.

## Prerequisites

- Install  Windows 8 x64, Windows 10 x64. or Windows 11 x64.
- Install [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/install/windows#additional-deps).
- Make sure you have 400MB+ free disk space.
- Create an account with administrative rights which you'll need for capturing and decoding HTTPS traffic.
- Provide an active Internet connection with access to the following URLs:
```curl
  https://*.telerik.com/
  https://*.getfiddler.com/
  https://fiddler-backend-production.s3-accelerate.amazonaws.com
```
- Ensure that Fiddler Everywhere's proxy port is open and unrestricted by a firewall/security tool. By default, that's **port 8866**, but it can be changed from **Settings > Connections > Fiddler listens on port**.

## Step 1: Install Fiddler Everywhere on Your Machine

You'll first have to install the latest version of Fiddler Everywhere on your machine.

1. Navigate to the [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) download page.

1. Select **Download for Windows** to download the installer.

1. Run the **Fiddler Everywhere** exe file to go through the installation process.


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

* [Install and trust the Fiddler Everywhere CA on Windows through the instructions here...]({%slug trust-certificate%}#install--trust-the-root-certificate-settings)

That's it! Fiddler Everywhere is now ready to capture and decrypt any secure HTTPS traffic that goes through the proxy.


## Step 5: Fiddle with the Traffic

That was it! Now you are ready to dive more deeply into Fiddler Everywhere and take full advantage of its slick functionalities! Now that Fiddler Everywhere is ready, you can proceed with capturing, inspecting, modifying, and composing HTTP(S) traffic:

* [**Capture** HTTP(S) traffic through the capturing mode that suits you best]({%slug capture-traffic-get-started%})
* [**Extract** various information from a captured session]({%slug inspecting-traffic-get-started%})
* [**Modify** traffic and accomplish client and server mocking on the fly]({%slug rulesbuilder-get-started%})
* [**Compose** custom API requests]({%slug composer-get-started%})


## Next Steps

* [Sharing captured sessions with collaborators]({% slug collaboration-get-started %})
* [Creating API requests]({% slug composer-get-started %})
* [Grouping the API requests in collections]({% slug composer-collections-get-started %})
* [Mocking server responses]({% slug rulesbuilder-get-started %})
