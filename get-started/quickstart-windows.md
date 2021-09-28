---
title: First Steps on Windows
description: "Install and configure Fiddler Everywhere on Windows and learn how to capture, inspect, and modify the HTTPS traffic, create API requests, mock server responses, and collaborate to analyze data more effectively."
slug: first_steps_windows
position: 1
---

# First Steps with Fiddler Everywhere on Windows

This tutorial describes how to install and start using Fiddler Everywhere on Windows.

* First, you will go through the installation and configuration steps.
* Next, you'll create a Fiddler account so that you can move on to effectively using the web-debugging tool.
* Then, you will learn how to capture, inspect, and modify traffic as well as share the sessions with collaborators.
* Finally, you will deep-dive into the HTTP proxy client and create API requests with the API Composer and mock server responses.

## Prerequisites

- Install Windows 7 x64, Windows 8 x64, or Windows 10 x64.
- Install [.NET Core](https://docs.microsoft.com/en-us/dotnet/core/install/windows#additional-deps).
- Make sure you have 300MB+ free disk space.
- Create an account with administrative rights which you'll need for capturing and decoding HTTPS traffic.
- Provide an active Internet connection with access to the following URLs:

    ```
        https://*.getfiddler.com/
        https://*.amazonaws.com/
    ```

## Installing Fiddler Everywhere on Your Machine

You'll first have to install the latest version of Fiddler Everywhere on your machine.

1. Navigate to the [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) download page.
1. Select **Download for Windows** to download the installer.
1. Run the **Fiddler Everywhere** exe file to go through the installation process.

## Trusting the Root Certificate

Now you can track non-secure HTTP traffic with Fiddler Everywhere. To be able to handle HTTPS traffic, however, you'll have to install a trust certificate.

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Click the **Trust Root Certificate** button&mdash;in the popup that appears, confirm your choice and add the certificate.
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
