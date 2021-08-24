---
title: Fiddler Everywhere Google Login with Brave Browser
description: An article on how to fix an issue with the Fiddler Everywhere Google authentication now working with the Brave browser
type: how-to
slug: fiddler-everywhere-brave
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Product  | Version |
| Fiddler Everywhere |  1.0.0 and above  |
| Brave Browser | all versions |

#### Description

Fiddler Everywhere provides an option to use a unique Fiddler account or Google Authentication. When using the Google Authentication option with the Brave browser (set as default OS browser), the fallback might fail silently due to the default adblock filters applied by the Brave configuration. The issue prevents Fiddler Everywhere users from using Google Authentication with Brave set as the default OS browser.

## Solution

The user can configure a custom adblock filter in the Brave browser configuration. Use a filter exception to bypass the Fiddler endpoint and, as a result, complete the Google Authentication process successfully.

To add an exception filter for the Fiddler Everywhere endpoint, follow these steps:

- Open the Brave browser and in type **brave://adblock** in the address field. Brave opens the **Additional filters** configuration page.

- Scroll down to the **Custom Filters** option. Type the following exception rule on a new line:

    ```Shell
    @@||localhost^$domain=getfiddler.com
    ```
    
- Exit the page and restart the Brave browser.

- Start Fiddler Everywhere and use the Google Authentication with Brave as a default OS browser.

## Alternative Solution

If adding an exception filter is a no-go, you could work around the issue by temporarily switching the default browser to another browser (for example, Chrome, Edge, Vivaldi, etc.). Then complete the Google Authentication, and switch back to the default OS browser to Brave.

### Changing the default browser on Windows 10

- Open the **Start** menu and type **Default Apps**.
- Scroll to the **Web Browser** option and select your preferred web browser through the drop-down.

### Changing the default browser on macOS

- Choose Apple menu > **System Preferences**, then click **General**. 
- Click the **Default web browser** pop-up menu and select your preferred web browser through the drop-down.

### Changing the default browser on Ubuntu

- Open the **Settings** utility, and move to the **Details** tab, 
- Click on the **Default Applications** and select your preferred web browser through the drop-down.