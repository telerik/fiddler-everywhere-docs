---
title: Configuring Fiddler Everywhere alongside Cisco AnyConnect
description: "Learn how to use Cisco AnyConnect alongside the Fiddler Everywhere web-debugging client."
type: how-to
slug: configure-vpn-fiddler
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.1.0 and above  |
| 3rd-party tool| [Cisco AnyConnect](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html) |

#### Description

The article covers the specific configuration needed to use Fiddler Everywhere with VPN software like [Cisco AnyConnect](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html).

## Prerequisites

- [Fiddler Everywhere client **version 1.1.0 and above**](https://www.telerik.com/download/fiddler-everywhere) installed on your machine.
- VPN software with pre-configured VPN network access. The article covers the steps needed for [**Cisco AnyConnect**](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html).

## Configuration Steps

>important The steps' executing order is crucial for the proper setup of the Cisco AnyConnect alongside Fiddler Everywhere.

1. Make sure your Cisco AnyConnect client is disconnected.

2. Start Fiddler Everywhere and turn on the **Capturing** mode.

3. Open the **_Settings > HTTP_** menu, add the trust certificate and check the **_Capture HTTPS traffic_** box.

4. Open the **_Settings > Connections_** menu and in **_Bypass Fiddler for URLs that starts with:_** add the VPN addresses of your VPN servers. Press the **Save** button to preserve the bypass list.

    ![Bypassing VPN addresses](../images/kb/vpn/vpn-cisco-bypass.png)

    >tip As a separator for multiple addresses in the bypass list, you can use a comma, semicolon, new line, and white space. All separators will be converted to the OS supported separator after saving the values. Once the addresses in **_Bypass Fiddler for URLs that starts with:_** are set, the values are persisted and used by Fiddler Everywhere to set the OS’s bypass list (for example, you can open the **_Proxy Settigns_** on Windows OS and check that the values are persisted in **_Use the proxy server except for addresses that starts with.._** textbox).

5. Start the Cisco VPN client and connect to the VPN network.

6. Start capturing traffic with Fiddler Everywhere.

7. To ensure proper OS network configuration is preserved, refer to the [Disconnection VPN](#disconnecting-vpn) section.

>important Due to some architectural differences in how VPN is set on macOS, you will need to strictly follow the order of

## Reusing VPN

To prevent Cisco AnyConnect from using cached proxy information, you must first stop the Cisco VPN software and then close Fiddler Everywhere (or pause Capturing mode). The workflow for Cisco AnyConnect alongside Fiddler Everywhere is as follows:

1. Start Fiddler Everywhere and enable Capturing mode.

2. Connect the Cisco AnyConnect client.

3. Capture traffic.

4. Disconnect the Cisco AnyConnect client.

5. Stop Fiddler Everywhere with disabled Capturing mode.

>important Preserving the order of execution of the above steps is mandatory for macOS users.
