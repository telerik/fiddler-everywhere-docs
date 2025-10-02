---
title: First Steps on macOS
description: "Install and configure Fiddler Everywhere on macOS and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_macos
position: 2
previous_url: /get-started/quickstart-macos
---

# First Steps with Fiddler Everywhere on macOS

This tutorial describes how to install and start using Fiddler Everywhere on macOS.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to using the web-debugging tool.
* Finally, you will see how to capture, inspect, and modify traffic.

## Prerequisites

- Install macOS version 12 or above.
- Provide 400MB of free disk space.
- Create an account with administrative rights which you'll need for capturing and decoding HTTPS traffic.
- Provide an active Internet connection with access to the following URLs:
  ```sh
  https://*.telerik.com/
  https://*.getfiddler.com/
  https://fiddler-backend-production.s3-accelerate.amazonaws.com
  https://challenges.cloudflare.com
  ```
  >note The Telerik site (where the Fiddler authentication form resides) uses different CDNs to load various components, styles, and cookies related to its user interface. Having limited internet access can cause the site not to load correctly.
- Ensure that Fiddler Everywhere's proxy port is open and unrestricted by a firewall/security tool. By default, that's **port 8866**, but it can be changed from **Settings > Connections > Fiddler listens on port**.

## Step 1: Install Fiddler Everywhere on Your Machine

You'll first have to install the latest version of Fiddler Everywhere on your machine.

1. Download and install the latest macOS version of [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).


## Step 2: Create Your Fiddler Account

In this step, you'll register by creating your unified Telerik account.   

1. Launch the Fiddler Everywhere application. Follow the **Sign in or create an account** link.
1. Create an account using email and password or using the **Sign in with Google** option.
  >tip The [Fiddler Everywhere Enterprise subscription plan](https://www.telerik.com/purchase/fiddler) supports SSO login. Refer to [this Telerik blog post](https://www.telerik.com/blogs/sso-telerik-kendo-ui-simpler-more-secure-access-account) for detailed instructions on configuring your company-specific SSO.
1. Enter the requested information on the **Enter Your Email to Sign in or Create an Account** screen.
1. Check your inbox, open the confirmation email, and complete your account activation.
1. Return the Fiddler Everywhere application and choose whether to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link.

After successful login into Fiddler Everywhere, you will see your personal and license information within the **Home** pane.

## Step 3: Interact with the Captured Traffic

You can now take advantage of the Fiddler Everywhere capabilities - capture, inspect, save & share, import *& export, mock and modify HTTPS traffic.

1. Capture HTTPS traffic through the preferred [capturing mode](slug://capture-traffic-get-started).
  >tip To capture and decrypt secure HTTPS traffic, you need to explicitly [install and trust the Fiddler certificate authority (CA)](slug://trust-certificate).
1. [Inspect the captured data](slug://inspecting-traffic-get-started).
1. [Save](slug://fiddler-saving), [share](slug://fiddler-sharing). or [export](slug://fiddler-export-and-import) the captured HTTPS traffic.
1. [Modify a session through the **Composer**](slug://composer-get-started#edit-captured-api-request)
1. [Mock client and server behavior through the **Rules** tab](slug://rulesbuilder-get-started)

>tip The **Rules** tab is one of the most advanced features in Fiddler Everywhere. You can create and execute complex rules on your incoming traffic to mock client and server behavior without touching the client and server applications.

That's it! Now you're equipped to delve deeper into Fiddler Everywhere and make the most of its powerful functionalities.

## Next Steps

* [Learn more about the capturing options with Fiddler Everywhere](slug://capture-traffic-get-started)
* [Learn more about installing the Fiddler CA certificate to decrypt secure HTTPS traffic](slug://trust-certificate)
* [Sharing captured sessions with collaborators](slug://fiddler-sharing)
* [Creating API requests](slug://composer-get-started)
* [Grouping the API requests in collections](slug://composer-collections-get-started)
* [Mocking server responses](slug://rulesbuilder-get-started)
