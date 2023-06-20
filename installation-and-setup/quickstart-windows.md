---
title: First Steps on Windows
description: "Install and configure Fiddler Everywhere on Windows and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_windows
position: 1
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
- Make sure you have 400MB+ free disk space.
- Create an account with administrative rights, which you'll need for capturing and decoding HTTPS traffic.
- Provide an active Internet connection with access to the following URLs:
```curl
  https://*.telerik.com/
  https://*.getfiddler.com/
  https://fiddler-backend-production.s3-accelerate.amazonaws.com
```
- Ensure that Fiddler Everywhere's proxy port is open and unrestricted by a firewall/security tool. The default port is **8866**, but you can change it from **Settings > Connections > Fiddler listens on port**.

## Step 1: Install Fiddler Everywhere on Your Machine

You'll first have to install your machine's latest version of Fiddler Everywhere.

1. Download and install the latest version of [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

Fiddler Everywhere for Windows offers you the flexibility to select the installation scope based on your preferences. You can opt for a **per user** installation, limiting access to the currently logged-in user, or choose a **per machine** installation, allowing all users on the host machine to utilize Fiddler Everywhere. Note that simultaneous execution of multiple instances of Fiddler Everywhere on the same host machine is not supported.

When Fiddler Everywhere is installed per machine, each individual user should log into Fiddler Everywhere with their credentials, and the generated data won't be accessible from the other users.


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

You can set Fiddler Everywhere as a system proxy and capture the HTTPS traffic of all applications that respect the operating system proxy settings. However, by default, you can only track non-secure HTTP **system** traffic with Fiddler Everywhere. Therefore, to enable the capturing of HTTPS system traffic, you'll have to install and trust the Fiddler root certificate.

1. Start Fiddler Everywhere.

1. Open the **Home** pane.

1. Click the **System Proxy** from the **Capture and Inspect Traffic** section.

1. Follow the tutorial steps to successfully install the Fiddler Everywhere CA (certificate authority) and enable it as a system proxy.

That's it! Fiddler Everywhere will immediately capture all the traffic generated from any application that uses the operating system proxy settings.

>tip: The Fiddler CA is installed in the OS certificate  manager once. After the Fiddler Everywhere CA installs successfully, you can directly load the **Live Traffic** tab and manually set/unset the system proxy.

## Step 4: Fiddle with the Traffic

Let's now continue with capturing and inspecting some HTTPS traffic:

1. Open the **Live Traffic** pane.

1. Inspect a selected session's request and response data through the **Inspectors** tab.

1. Extract technical details and statistical data using the **Overview** tab.

Now you'll extract a captured session:

1. Open the **Live Traffic** pane.

1. Focus the **Live Traffic** tab and select a request/response entry from the **Live Traffic grid**.

1. Double-click to open the **Inspectors** tab and inspect the detailed session request/response data.

1. (Optional) Switch to the **Overview** tab and inspect the technical and statistical data.

Let's modify that session!

1. Right-click on a captured session from the **Live Traffic grid**. Select **Edit in Composer** from the context menu.

1. Modify its headers When the session opens in a new **Composer** window. For example, add a new HTTP header with the `isTest` key and the `true` value.

1. Click the **tick** to save the new HTTP header.

1. Click the **Execute** button to replay the modified request.

That was it! Now you are ready to dive more deeply into Fiddler Everywhere and take full advantage of its slick functionalities!

What about mocking traffic, one might ask?

1. Right-click on a captured session from the **Live Traffic grid**. Select **Add New Rule** from the context menu.

1. Use the **Rules Builder** to create your mock behavior. Add different matching conditions, and apply various actions. Once ready - save the new rule.

1. Enable the **Rules** tab and toggle on the rules you want to execute.

1. Select the captured session. Click on the **Replay > Reissue Requests** from the context menu.

>tip The **Rules** tab is one of the most advanced features in Fiddler Everywhere. You can create and execute complex rules on your incoming traffic to mock actual client and server behavior without actually touching the client and server applications.

## Next Steps

* [Learn more about the capturing options with Fiddler Everywhere]({%slug capture-traffic-get-started%})
* [Sharing captured sessions with collaborators]({% slug collaboration-get-started %})
* [Creating API requests]({% slug composer-get-started %})
* [Grouping the API requests in collections]({% slug composer-collections-get-started %})
* [Mocking server responses]({% slug rulesbuilder-get-started %})
