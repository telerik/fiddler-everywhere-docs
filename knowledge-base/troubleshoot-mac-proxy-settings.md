---
title: Troubleshooting Mac Proxy Settings
description: "Learn how to troubleshoot Mac proxy settings to isolate issues related to starting up the Fiddler Everywhere web-debugging client."
type: troubleshooting
slug: troubleshoot-mac-proxy-settings
page_title: Verifying Mac Proxy Settings
ticketid: 1388381
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |

## Description

How can I verify and troubleshoot changes in the Mac proxy settings?

## Solution

To troubleshoot common Mac scenarios, verify the Mac proxy settings. For example, after [installing Fiddler Everywhere on a Mac]({% slug first_steps_macos %}), Fiddler Everywhere may not be able to start capturing traffic. This issue may be caused by various reasons and, therefore, may require troubleshooting.

To troubleshoot this issue:

1. [Reset the Fiddler Everywhere settings to their default values]({% slug how-to-reset-fiddler-everywhere-settings-to-default %}).
1. Close Fiddler Everywhere.
1. [Verify the Mac proxy settings](#verifying-the-mac-proxy-settings).
1. Open Fiddler Everywhere.
1. [Verify the Mac proxy settings](#verifying-the-mac-proxy-settings).

### Verifying the Mac Proxy Settings

Go to the Apple Mac proxy settings in **System Preferences** > **Network** > **Advanced**. Note that each network adapter will have proxy settings. For example, if the Internet is available through an Ethernet port and a WiFi connection, you will see two adapters each with separate proxy settings.

The default settings of Fiddler Everywhere will **Act as a System Proxy on Startup**. This will turn on **Configure the Proxy Settings Automatically** when Fiddler Everywhere is running, and will clear the **Configuration** when Fiddler Everywhere is closed.

When Fiddler Everywhere is closed with the default settings, the **System Proxy Settings** will look like the following.

![mac proxy settings no proxy](../images/kb/mac-proxy-settings/mac-proxy-settings-no-proxy.png)

When Fiddler Everywhere is open with the default settings, the **System Proxy Settings** will look like the following.

![mac proxy settings with proxy](../images/kb/mac-proxy-settings/mac-proxy-settings-proxy-on.png)

## See Also

* [Troubleshooting Fiddler Everywhere Network Access]({%slug fiddler-test-network-access-macos%})
* [Troubleshooting HTTPS Capturing on macOS]({%slug troubleshoot-capturing-traffic%})
* [Troubleshooting macOS Trust Certificate Issues]({%slug troubleshoot-certificate-error%})
*	[Installing Fiddler Everywhere on a Mac]({% slug first_steps_macos %})
*	[Resetting Fiddler Everywhere Settings to Default]({% slug how-to-reset-fiddler-everywhere-settings-to-default %})
