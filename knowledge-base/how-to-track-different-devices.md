---
title: Capture traffic from Multiple Devices
description: "Learn how to capture traffic from multiple devices and how to differentiate the traffic based on the device IP."
type: how-to
slug: fiddler-multiple-devices
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Fiddler Everywhere | 1.0.0 and above |
| Operating System | Windows, macOS, Linux |

## Description

Fiddler Everywhere can simultaneously capture traffic from multiple remote computers and devices (like Android and iOS smartphones).  What is the needed configuration, and how can I differentiate the traffic from each individual device?

## Solution (for Remote Computers)


Before you start, verify that the host and the remote computer are on the same network, and they "see" each other (no firewall restrictions).

To capture traffic from a remote computer:

1. Start Fiddler Everywhere on the host computer and enable **Live Traffic** (system capture). 

1. Ensure your are [ready to capture system traffic]({%slug capture-traffic-get-started%}#system-capturing).

1. Go to **Settings**  > **Connections** and ensure **Allow remote computers to connect** is checked.

1. On the remote computer, set manual OS proxy settings to the Fiddler address (IP:port). As an IP use the the local IP of the Fiddler host machine. By default, the Fiddler proxy port is **8866**.

1. In Fiddler Everywhere, filter the traffic through the **Client IP** column while using the local address of the connected remote computer.

    ![Filtering by Client IP](../images/kb/client-ip/filter-by-client-ip.png)


## Solution (for Mobile Devices)

- The Fiddler host and the remote mobile device must both be on the same network, and they must "see" each other (no firewall restrictions).

To capture traffic from a remote mobile device, follow this steps:

1. Start Fiddler Everywhere on the host computer and enable **Live Traffic** (system capture). 

1. Ensure your are [ready to capture system traffic]({%slug capture-traffic-get-started%}#system-capturing).

1. Go to **Settings**  > **Connections** and ensure **Allow remote computers to connect** is checked.

1. Follow the specific instructions for the different mobile operating systems as described here:

    - [Instructions for Android]({%slug capture-mobile-android-traffic%}#configuring-the-android-device)

    - [Instructions for iOS]({%slug capture-mobile-ios-traffic%}#configure-the-ios-device)

1. In Fiddler Everywhere, filter the traffic through the **Client IP** column while using the local address of the connected remote mobile device.

    ![Filtering by Client IP](../images/kb/client-ip/filter-by-client-ip.png)