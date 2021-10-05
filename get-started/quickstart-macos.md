---
title: First Steps on macOS
description: "Install and configure Fiddler Everywhere on macOS and learn how to capture, inspect, and modify the HTTPS traffic to analyze data effectively."
slug: first_steps_macos
position: 2
---

# First Steps with Fiddler Everywhere on macOS

This tutorial describes how to install and start using Fiddler Everywhere on macOS.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to effectively using the web-debugging tool.
* Then, you will switch the default Light theme with the Dark one.
* Finally, you will see how to capture, inspect, and modify traffic.

## Prerequisites

- Install macOS High Sierra (10.13+) x64.
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
1. Select **Download for OS X** to download the installer.
1. Run the **Fiddler Everywhere** `dmg` file to start the installation process.

## Creating Your Fiddler Account

In this step you'll register by creating your personal Fiddler Everywhere account and become a trial user.   

1. Launch the Fiddler Everywhere client. Select the **New User? Sign up** button.
1. On the **Create Account** screen, enter the requested information and accept the terms of the agreement. The email you provide here will be later on used by your collaborators for sharing sessions, collections, and notifications.
1. Open the confirmation email and verify your Fiddler registration by entering the unique code.
1. Fill in the required information and proceed through the **Let's Go** button.
1. On the next screen, choose whether you want to become a trial user or purchase a subscription plan by selecting either the **Start Free Trial** or the **BUY NOW** link. For the purposes of this tutorial, you'll become a trial user by selecting the **Start Free Trial** option. You are all set to start using the full-scale functionalities Fiddler Everywhere delivers.

## Trusting the Root Certificate

Now you can track non-secure HTTP traffic with Fiddler Everywhere. To be able to handle HTTPS traffic, however, you'll have to install a trust certificate.

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Click the **Trust Root Certificate** button.
1. In the window that appears, enter your machine administrative credentials.

    ![Enter Keychain credentials to trust the root certificate](../images/settings/settings-https-mac-keychain.png)

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
