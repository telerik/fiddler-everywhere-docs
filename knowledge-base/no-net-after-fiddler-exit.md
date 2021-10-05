---
title: No Internet Connectivity Is Available after Closing Fiddler Everywhere
description: "Check for a leaked proxy and restore the Internet connectivity after the Fiddler Everywhere web-debugging client stops unexpectedly."
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

## Description

By design, when the Fiddler Everywhere application is closed, it restores the default operating system proxy settings. However, on rare occasions, the application ends unexpectedly due to various reasons such as a software crash, OS interruption, hardware failure, and so on. In this case, how can I restore the default proxy settings and avoid losing the Internet connectivity?

## Solution

To solve the issue, identify and remove leaked proxy settings so you can restore the lost Internet connectivity after Fiddler Everywhere stops unexpectedly.

### On Windows

To check for a leaked proxy and restore the Internet connectivity on Windows 10:

1. In Fiddler Everywhere, [disable the **Live Traffic** capturing]({%slug web-sessions-list%}#live-traffic-toolbar), and close the application.
1. Go to the **Start** menu and type **Proxy settings**.
1. Go to **Manual proxy setup** and verify that the Fiddler proxy IP and Port are removed. By default, when your system is not using other proxies, the **Use a proxy server** is turned off with both the **Address** and **Port** fields empty.

### On macOS

To check and remove the leaked proxy and restore the Internet connectivity on macOS:

1. [Disable the **Live Traffic** capturing]({%slug web-sessions-list%}#live-traffic-toolbar) and exit the Fiddler Everywhere application.
1. On macOS, go to **System Preferences** > **Network** and select the active Internet adapter.
1. Go to **Advanced...** > **Proxies**.
1. Verify that the Fiddler proxy is not set for **Web Proxy (HTTP)** and **Secure Web Proxy (HTTPS)**. If the Fiddler proxy is present, remove the IP and Port, uncheck both options (or restore your default proxy settings), and click **Apply** to apply the changes.
1. Click **OK** to confirm the changes.

### On Ubuntu

1. In Fiddler Everywhere, [disable the **Live Traffic** capturing]({%slug web-sessions-list%}#live-traffic-toolbar) and close the application.
1. On Ubuntu, go to **Settings** > **Network**.
1. Verify that the **Network Proxy** option is set to **Off** (or to your default proxy settings). If the Fiddler proxy is still present in the **Manual proxy**, remove it and disable the network proxy.
