---
title: No Internet Connectivity after Closing Fiddler Everywhere
description: "Check for leaked proxy settings and restore the Internet connectivity after the Fiddler Everywhere proxy application stops unexpectedly."
type: how-to
slug: fiddler-restore-internet
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, Linux  |

## Checking for Leaked Proxy and Fixing Lost Internet Connection

By design, when the Fiddler Everywhere application is closed, it automatically restores the default operating system proxy settings. 

Occasionally, the application or the operating system can crash unexpectedly for various reasons, such as a software bug, OS interruption, hardware failure, etc. As a result, that can result in leaked proxy settings - a case where Fiddler Everywhere application is closed (after reboot) but its proxy IP and port are still present within the operating system's manual proxy configuration. This article explains how to check if your operating system has leaked proxy settings and how to restore them to their original state.


## Solution

Follow the OS-specific guidelines below to learn if your OS has leaked proxy settings and remove them so you can restore the lost Internet connectivity.


### On Windows

1. In Fiddler Everywhere, turn off the [system capturing mode]({%slug capture-system-traffic%}), and close the application.

1. Open the **Proxy settings** in Windows (through the **Start** button and type **Proxy Settings**).

1. Go to **Manual proxy setup** and ensure that the Fiddler's IP address and port are removed. By default, when your system does not use other proxies, the **Use a proxy server** is turned off with the **Address** and **Port** fields empty.  If your system uses a pre-set upstream proxy, restore it through the original settings.


### On macOS

1. In Fiddler Everywhere, disable [system capturing mode]({%slug capture-system-traffic%}) and close the application. 

1. On macOS, go to **System Preferences** > **Network** and select the active Internet adapter.

1. Go to **Advanced...** > **Proxies**.

1. Verify that the Fiddler proxy is not set for **Web Proxy (HTTP)** and **Secure Web Proxy (HTTPS)**. If the Fiddler proxy is present, remove the IP and Port, uncheck both options (or restore your default proxy settings), and click **Apply** to apply the changes.  If your system uses a pre-set upstream proxy, restore it through the original settings.

1. Click **OK** to confirm the changes.


### On Ubuntu

1. In Fiddler Everywhere, disable [system capturing mode]({%slug capture-system-traffic%}) and close the application. 

1. On Ubuntu, go to **Settings** > **Network**.

1. Verify that the **Network Proxy** option is set to **Off** (or to your default proxy settings). If the Fiddler proxy is present in the **Manual proxy**, remove it and turn off the network proxy.  If your system uses a pre-set upstream proxy, restore it through the original settings.
