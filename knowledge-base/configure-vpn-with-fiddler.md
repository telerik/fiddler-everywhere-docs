---
title: Configuring Fiddler Everywhere alongside Cisco AnyConnect
description: "Learn how to use Cisco AnyConnect alongside the Fiddler Everywhere web-debugging client."
type: how-to
slug: configure-vpn-fiddler
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.1.0 and above  |
| 3rd-party tool| [Cisco AnyConnect](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html) |

## Description

How can I configure Fiddler Everywhere to use VPN software like [Cisco AnyConnect](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html)?

## Solution

To handle this issue, follow the steps in the suggested approach.

### Prerequisites

- Install the latest version of [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere) on your machine.
- Provide the VPN software with pre-configured VPN network access. The article covers the steps needed for [**Cisco AnyConnect**](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html).

### Configuration

Executing the steps in the exact order suggested in this section is crucial for the proper setup of Cisco AnyConnect alongside Fiddler Everywhere.

1. Make sure your Cisco AnyConnect client is disconnected.

1. Start Fiddler Everywhere and turn on the **Capturing** mode.

1. Open the **Settings** > **HTTP** menu, add the trust certificate, and check the **Capture HTTPS traffic** box.

1. Open the **Settings** > **Connections** menu and, in **Bypass Fiddler for URLs that starts with:**, add the VPN addresses of your VPN servers. Click the **Save** button to preserve the bypass list.

    ![Bypassing VPN addresses](../images/kb/vpn/vpn-cisco-bypass.png)

    As a separator for multiple addresses in the bypass list, you can use a comma, semicolon, new line, and white space. All separators will be converted to the OS supported separator after saving the values. Once the addresses in **Bypass Fiddler for URLs that starts with:** are set, the values are persisted and used by Fiddler Everywhere to set the OS bypass list. For example, you can open the **Proxy Settigns** on Windows OS and check that the values are persisted in the **Use the proxy server except for addresses that starts with..** textbox.

1. Start the Cisco VPN client and connect to the VPN network.

1. Start capturing the traffic with Fiddler Everywhere.

1. To ensure that the proper OS network configuration is preserved, refer to the [Reusing the VPN](#reusing-the-vpn) section.

### Reusing the VPN

To prevent Cisco AnyConnect from using cached proxy information, first stop the Cisco VPN software, and then close Fiddler Everywhere or pause its **Capturing** mode.

The workflow for Cisco AnyConnect alongside Fiddler Everywhere is as follows:

1. Start Fiddler Everywhere and enable the **Capturing** mode.

1. Connect the Cisco AnyConnect client.

1. Capture the traffic.

1. Disconnect the Cisco AnyConnect client.

1. Disable the **Capturing** mode and stop Fiddler Everywhere.
