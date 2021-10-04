---
title: No Internet Connectivity is Available after Closing Fiddler Everywhere
description: "Check for a leaked proxy and restore the Internet connectivity after the Fiddler Everywhere web-debugging client stops unexpectedly."
type: how-to
slug: fiddler-restore-internet
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, Linux  |

#### Description

By design, when you close the Fiddler Everywhere application, it restores the default operating system proxy settings. However, on rare occasions, the application might end unexpectedly due to various reasons (software crash, OS interruption, hardware failure, etc.). If this happens, Fiddler may fail to restore the default proxy settings and you may loose Internet connectivity.

This article explains how to identify and remove leaked proxy settings so you can restore lost Internet connectivity after Fiddler Everywhere stops unexpectedly.

## Windows Solution

To check for a leaked proxy and restore the Internet connectivity on Windows 10:

1. In Fiddler Everywhere, [disable the Live Traffic capturing]({%slug web-sessions-list%}#live-traffic-toolbar), and then close the application.
1. Open the Windows 10 **Proxy settings** (type **Proxy settings** in the **Start** menu).
- Go to **Manual proxy setup** and verify that the Fiddler proxy IP and Port are removed. By default, when your system is not using other proxies, the **Use a proxy server** should be turned off with both **Address** and **Port** fields emptied.

## macOS Solution

To check & remove leaked proxy and restore the Internet connectivity on macOS, follow these steps:

- [Disable the Live Traffic capturing]({%slug web-sessions-list%}#live-traffic-toolbar) and exit the Fiddler Everywhere application.
- In macOS, go to **System Preferences** > **Network** and select the active Internet adapter.
1. Go to **Advanced...** > **Proxies**.
1. Verify that the Fiddler proxy is not set for **Web Proxy (HTTP)** and **Secure Web Proxy (HTTPS)**. If the Fiddler proxy is present, remove the IP and Port, uncheck both options (or restore your default proxy settings), and click **Apply** to apply the changes.
1. Click **OK** to confirm the changes.

## Ubuntu Solution

1. In Fiddler Everywhere, [disable the Live Traffic capturing]({%slug web-sessions-list%}#live-traffic-toolbar) and close the application.
1. In Ubuntu, go to **Settings** > **Network**.
1. Verify that the **Network Proxy** option is set to **Off** (or to your default proxy settings). If the Fiddler proxy is still present in the **Manual proxy**, remove it and disable the network proxy.
