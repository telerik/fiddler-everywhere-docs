---
title: No Internet after closing Fiddler Everywhere
description: Check for leaked proxy and restoring the Internet connectivity after Fiddler Everywhere exits.
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

By design, when the Fiddler Everywhere application is closed, it will restore the default operating system proxy settings. However, on rare occasions, the application might end unexpectedly due to multiple reasons (software crash, OS interruption, hardware failure, etc.). When this happens, it is possible that the Fiddler proxy won't be reset, which would lead to lost Internet connectivity. The article explains how to check and remove leaked proxy settings and effectively restore lost Internet connectivity after the Fiddler Everywhere application is stopped.\

## Windows Solution

To check & remove leaked proxy and restore the Internet connectivity on Windows 10, follow these steps:

- [Disable the Live Traffic capturing]({%slug web-sessions-list%}#live-traffic-toolbar) and exit the Fiddler Everywhere application.
- Open the Windows 10 **Proxy Settings** (type **Proxy Settings** in the **Start** menu).
- Go to **Manual proxy setup** and verify that the Fiddler proxy IP and Port are removed. By default, when your system is not using other proxies, the **Use a proxy server** should be turned off with both **Address** and **Port** fields emptied.

## macOS Solution

To check & remove leaked proxy and restore the Internet connectivity on macOS, follow these steps:

- [Disable the Live Traffic capturing]({%slug web-sessions-list%}#live-traffic-toolbar) and exit the Fiddler Everywhere application.
- In macOS, go to **System Preferences** > **Network** and select the active Internet adapter.
- Go to **Advanced...** > **Proxies**.
- Verify that the Fiddler proxy is not set for **Web Proxy (HTTP)** and **Secure Web Proxy (HTTPS)**. If the Fiddler proxy is present, remove the IP and Port, uncheck both options (or restore your default proxy settings), and click OK to confirm the changes.

## Linux Solution

- [Disable the Live Traffic capturing]({%slug web-sessions-list%}#live-traffic-toolbar) and exit the Fiddler Everywhere application.


