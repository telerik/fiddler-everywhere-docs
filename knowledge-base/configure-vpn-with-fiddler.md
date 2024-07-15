---
title: Configuring Fiddler Everywhere alongside Cisco AnyConnect
description: "Learn how to use Cisco AnyConnect alongside the Fiddler Everywhere web-debugging client."
type: how-to
slug: configure-vpn-fiddler
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.1.0 and above  |
| 3rd-party tool| [Cisco AnyConnect](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html) |

## Description

How can I configure Fiddler Everywhere to use VPN software like [Cisco AnyConnect](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html)?

## Solution

To handle this issue, follow the steps in the suggested approach.

### Prerequisites

- Install the latest version of [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).
- Provide the VPN software with pre-configured VPN network access. The article covers the steps needed for [Cisco AnyConnect](https://www.cisco.com/c/en/us/products/security/anyconnect-secure-mobility-client/index.html).

### Configuration for System Capturing Mode

The following section showcases how to use Cisco VPN alongside [the Fiddler's **system capturing mode**]({%slug capture-system-traffic%}). Executing the steps in the exact order suggested in this section is crucial for properly setting up Cisco AnyConnect alongside Fiddler Everywhere.

1. Make sure your Cisco AnyConnect client is disconnected.

1. Start Fiddler Everywhere and toggle on the **System Proxy** switch (system capturing mode).

1. Open the **Settings** > **HTTP** menu, trust the Fiddler's certificate, and check the **Capture HTTPS traffic** box.

1. Open the **Settings** > **Connections** menu and, in **Bypass Fiddler for URLs that starts with:**, add the VPN addresses of your VPN servers. Click the **Save** button to preserve the bypass list.

 ![Bypassing VPN addresses](../images/kb/vpn/vpn-cisco-bypass.png)

 You can use a comma, semicolon, new line, and white space as a separator for multiple addresses in the bypass list. All separators will be converted to the OS-supported separator after saving the values. Once the addresses in **Bypass Fiddler for URLs that start with:** are set, the values persist and are used by Fiddler Everywhere to set the OS bypass list. For example, you can open the **Proxy Settings** on Windows OS and check that the values are persisted in the **Use the proxy server except for addresses that start with..** textbox.

1. Start the Cisco VPN client and connect to the VPN network.

1. Start capturing the traffic with Fiddler Everywhere using the system capturing mode.

1. To preserve the proper OS network configuration, refer to the [Reusing the VPN](#reusing-the-vpn) section.

## Reusing the VPN

To prevent Cisco AnyConnect from using cached proxy information, stop the Cisco VPN software and close Fiddler Everywhere or pause its system capturing mode.

The workflow for Cisco AnyConnect alongside Fiddler Everywhere is as follows:

1. Start Fiddler Everywhere and toggle on the **System Proxy** switch (system capturing mode).

1. Connect the Cisco AnyConnect client.

1. Capture the traffic.

1. Disconnect the Cisco AnyConnect client.

1. Toggle off the **System Proxy** switch and stop the Fiddler Everywhere application.


### Configuration for Network Capturing Mode

The following section showcases how to use Cisco VPN alongside [the Fiddler's **network capturing mode**]({%slug capture-network-traffic%}). Executing the steps in the exact order suggested in this section is crucial for properly setting up Cisco AnyConnect alongside Fiddler Everywhere.

1. Make sure your Cisco AnyConnect client is disconnected.

1. Start Fiddler Everywhere and enable the network capturing mode.

1. Open the **Settings** > **HTTP** menu, trust the Fiddler's certificate, and check the **Capture HTTPS traffic** box.

1. Create a **Do Not Decrypt** rule to bypass the VPN endpoints.

    - Open **Traffic** pange and go to the **Rules** tab.

    - Use **Add Rule** to open the **Rule Builder**.

    - Create a match condition through **Add Condition** and match the targeted VPN host (for example, match `vpn.mycompany.com`). Additionally, match all sessions that use **CONNECT** HTTP methods (to match the so called proxy tunnels).

    - Create a new action through **Add Action**. Select the **Do Not Decrypt** action.

 ![Example rule that uses the "Do Not Decrypt" action](../images/kb/vpn/vpn-do-not-decrypt.png)

    - Save and enable the rule.

1. Start the Cisco VPN client and connect to the VPN network.

1. Start capturing the traffic with Fiddler Everywhere using the network capturing mode.
