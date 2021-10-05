---
title: Logging In with Google on Brave Browser
description: "Learn how to fix issues with the Google authentication on the Brave browser when working with the Fiddler Everywhere web-debugging client."
type: how-to
slug: fiddler-everywhere-brave
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product  | Version |
| Fiddler Everywhere |  1.0.0 and above  |
| Brave Browser | all versions |

## Description

Fiddler Everywhere provides an option to use a unique Fiddler account or Google authentication. When using the Google authentication option with the Brave browser when set as the default OS browser, the fallback might fail silently due to the default adblock filters applied by the Brave configuration. How can I use Google authentication with Brave set as the default OS browser?

## Solution

You can configure a custom adblock filter in the Brave browser configuration. Use a filter exception to bypass the Fiddler endpoint and, as a result, complete the Google authentication process successfully.

To add an exception filter for the Fiddler Everywhere endpoint:

1. Open the Brave browser and in type `brave://adblock` in the address field. Brave opens the **Additional filters** configuration page.

1. Scroll down to the **Custom Filters** option. Type the following exception rule on a new line:

    ```Shell
    @@||localhost^$domain=getfiddler.com
    ```

1. Exit the page and restart Brave.

1. Start Fiddler Everywhere and use the Google authentication with Brave as a default OS browser.

## Alternative Solution

If adding an exception filter is a no-go, you can work around the issue by temporarily switching the default browser to another browser (for example, Chrome, Edge, Vivaldi, and so on), completing the Google authentication, and switching back the default OS browser to Brave.

To change the default browser on Windows 10:

1. Open the **Start** menu and type **Default Apps**.
1. Scroll to the **Web Browser** option and select your preferred web browser through the drop-down.

To change the default browser on macOS:

1. Choose **Apple menu** > **System Preferences**. Click **General**.
1. Click the **Default web browser** pop-up menu and select your preferred web browser through the drop-down.

To change the default browser on Ubuntu:

1. Open the **Settings** utility and move to the **Details** tab.
1. Click the **Default Applications** and select your preferred web browser through the drop-down.
