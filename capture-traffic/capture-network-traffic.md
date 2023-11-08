---
title: Capturing Network Traffic
description: "Capture all HTTPS traffic that goes through the active network adapter."
slug: capture-network-traffic
publish: true
position: 10
---

# Network Capture

>note Currently, the **Network Capture** feature is in BETA state and is only available on macOS.

This article describes using Fiddler's network capturing mode, where "network traffic" refers to all HTTP, HTTPS, WebSocket, and gRPC traffic directed to the active network adapter. The feature requires the installation of a network extension, which requires explicit administrative privileges.

In nature, the **Network Capture** is more powerful way to capture network traffic on a lower level compared to the way a  HTTPS(S) proxy works (which is how Fiddler works in the **System Capturing** mode or all other available capturing modes). 

The benefits of the **Network Capture** mode are as follows:

- Works on a lower level compared to HTTP(S) proxies.

- Captures all HTTP(S) traffic from the active network adapter. 

- No limitations related to frameworks, applications, operating systems, and other configuration specifics that we usually need to handle when using an HTTP(S) proxy.

- Allows you to control the range of IP addresses and processes which must be monitored.

## Prerequisites

To use the **Network Capture** mode, you need to meet the following prerequisites.

- Installed latest version of Fiddler Everywhere.

- Administrative privileges to install the network extension on macOS.

