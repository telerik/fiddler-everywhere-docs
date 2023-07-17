---
title: First Steps on Windows
description: "Install and configure Fiddler Everywhere on Windows and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_windows
position: 1
previous_url: /get-started/quickstart-windows, /login-and-update
---

# First Steps with Fiddler Everywhere on Windows

This tutorial describes how to install and start using Fiddler Everywhere on Windows.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to using the web-debugging tool.
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

Fiddler Everywhere for Windows offers you the flexibility to select the installation scope based on your preferences. You can opt for a **per user** installation, limiting access to the currently logged-in user, or choose a **per machine** installation, allowing all users on the host machine to use Fiddler Everywhere. Note that simultaneous execution of multiple instances of Fiddler Everywhere on the same host machine is not supported.

When Fiddler Everywhere is installed per machine, each individual user must log into Fiddler Everywhere with their credentials, and the generated data won't be accessible from the other users.


## Step 2: Create Your Fiddler Account

In this step, you'll register by creating your unified Telerik account.   

1. Launch the Fiddler Everywhere application. Follow the **Sign in or create an account** link.

1. Create an account using email and password or using the **Sign in with Google** option.

  >tip The [Fiddler Everywhere Enterprise subscription plan](https://www.telerik.com/purchase/fiddler) supports SSO login. Get in touch with our [support]({%slug support%}) for detailed instructions on configuring your company-specific SSO.

1. Enter the requested profile information in the Telerik form.

1. Check your inbox, open the confirmation email, and complete your account activation.

1. Return the Fiddler Everywhere application and choose whether to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link.


## Step 3: Interact with the Captured Traffic

You can now take advantage of the Fiddler Everywhere capabilities - capture, inspect, save & share, import *& export, mock and modify HTTPS traffic.

1. Capture HTTPS traffic through the preferred [capturing mode]({%slug capture-traffic-get-started%}).

1. [Inspect the captured data]({%slug inspecting-traffic-get-started%}).

1. [Save]({%slug fiddler-saving%}), [share]({%slug fiddler-sharing%}). or [export]({%slug fiddler-export-and-import%}) the captured HTTPS traffic.

1. [Modify a session through the **Composer**]({%slug composer-get-started%})

1. [Mock client and server behavior through the **Rules** tab]({%slug rulesbuilder-get-started%})

>tip The **Rules** tab is one of the most advanced features in Fiddler Everywhere. You can create and execute complex rules on your incoming traffic to mock client and server behavior without touching the client and server applications.

That's it! Now you're equipped to delve deeper into Fiddler Everywhere and make the most of its powerful functionalities.

## Next Steps

* [Learn more about the capturing options with Fiddler Everywhere]({%slug capture-traffic-get-started%})
* [Sharing captured sessions with collaborators]({% slug fiddler-sharing %})
* [Creating API requests]({% slug composer-get-started %})
* [Grouping the API requests in collections]({% slug composer-collections-get-started %})
* [Mocking server responses]({% slug rulesbuilder-get-started %})
