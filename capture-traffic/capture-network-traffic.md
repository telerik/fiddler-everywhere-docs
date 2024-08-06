---
title: Capturing Network Traffic
description: "Capture all network traffic that goes thorugh the active network adapter and uses the TCP protocol"
slug: capture-network-traffic
publish: true
position: 15
---

# Network Capturing

>important The network capturing mode is a feature in BETA state and is subject to change in the future. Currently, the functionality is available only for the **macOS** version of Fiddler Everywhere and works only for IPv4 protocol.

This article describes using Fiddler's **network capturing mode**, where "network traffic" refers to all outgoing TCP traffic. The feature requires the installation of a network extension, which requires explicit administrative privileges.

In nature, the network capturing mode is a more powerful way to capture network traffic on a lower level than an HTTPS(S) proxy works (which is how Fiddler works in the **System Capturing** mode or all other available capturing modes). 

The benefits of the network capturing mode are as follows:

- Works on a lower level compared to HTTP(S) proxies.

- Captures all outgoing TCP traffic from the active network adapter. 

- No limitations related to frameworks, applications, operating systems, and other configuration specifics that you usually must handle when using an HTTP(S) proxy.

- Allows you to control the IP addresses and processes to monitor seamlessly.

## Prerequisites & Limitations

### Prerequisites

You must meet the following prerequisites to use the network capturing mode.

- [Installed the latest version of Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

- [Installed and trusted Fiddler's Certificate Authority]({%slug trust-certificate%}).

- Administrative privileges to install/uninstall the network extension on macOS.


### Limitations

The **Network Capture** mode is in Beta state and, currently, has some known limitations as follows:

- The network extension that enables the network capturing mode is available only on the macOS version of Fiddler Everywhere. The development for the counterpart Windows & Linux features is ongoing.

- The network capturing mode captures IPv4 traffic, while capturing IPv6 traffic is not yet supported.

- Specific VPN tools are closing the VPN connection if a third-party network extension is detected. You can try to workaround that by making the VPN connection **before** starting Fiddler Everywhere and then enabling its network capturing mode.

- To use a VPN connection alongside Fiddler you often need to bypass specific VPN endpoints (for example, like `vpn.mycompany.com`). However the **HTTPS > Connections > Bypass Fiddler for URLs that starts with:** option is incompatible with the **Network Capture** mode. When using network capturing mode, you must bypass targeted VPN endpoints [by creating a Fiddler rule that executes the **Do Not Decrypt** action]({%slug configure-vpn-fiddler%}#configuration-for-network-
capturing-mode).

- The network capturing mode can capture only outbound traffic. Currently, inbound traffic from remote devices is not captured. For such cases, use our alternative capturing modes for [Android]({%slug capture-mobile-android-traffic%}), [iOS]({%slug capture-mobile-ios-traffic%}), or [remote PCs]({%slug fiddler-capture-other-computers%}).

## Using the Network Capturing Mode

The network capturing mode is accessible in the Fiddler's **Live Traffic** menu options through the **Network Capture** option.

![the "Network Capture" feature](../images/livetraffic/websessions/websessions-toolbar-network-capture-beta.png)

Once the **Network Capture** is enabled, you can capture all TCP traffic. As noted in the benefits section, the main perk of using the network capturing mode is that you don't need to change the operating system proxy or set the client's proxy. That lets you quickly capture traffic from processes that otherwise have trouble using HTTP(S) proxies.

To use the **Network Capture**, you need to set the IP address explicitly, the TCP/IP ports, and the (optionally) process name. At least one rule that sets the IP address (or range of IP addresses) alongside the related TCP/IP port must be specified for the capturing to work.

### Start Network Capture

To start the network capturing mode, execute the following steps:

1. Click on the **Network Capture (BETA)** button from the **Live Traffic** menu.

1. Click on the **Enable Capture** from the **Network Capture Settings (BETA)** screen.

>tip The capturing will use the pre-configured rules. [Instructions on how to modify the default capturing rules or add additional rules here...](#modify-network-capture-rules)

If this is the first time you are starting the network capturing mode on your macOS, then you will need to install and allow the usage of the Fiddler's network extension. To do so, proceed with the following steps:

Immediately after pressing **Enable Capture**, you will see the following native macOS popup.

1. In the macOS popup, choose **Open System Settings**. In the opened macOS system settings, scroll down to the message that the Fiddler extension is blocked.

1. Allow the Fiddler Everywhere extension.

1. Enter your credentials to install the extension.

1. Click **Allow** to confirm the Fiddler Everywhere network extension installation.

### Stop Network Capture

To stop the network capturing mode, execute the following steps:

1. Click on the **Network Capture** button from the **Live Traffic** menu.

1. Click on the **Disable Capture** from the **Network Capture Settings (BETA)** screen.

## Modify Network Capture Rules

By default, the network capturing mode has the default active rules to capture traffic from all IP addresses and processes working on ports 80 (HTTP) and 443 (HTTPS). An additional rule also enables the capturing from localhost (`127.0.0.1`) on port 3000 - this rule demonstrates how you can add specific capturing rules within the **Network Capture Settings (BETA)** screen.

The **Network Capture Settings (BETA)** screen has a **Basic** view that simplifies the setup of the rules. Alternatively, use the **Advanced** view to create more complex capturing rules.

Through the advanced view, you can manually control what traffic to capture through the following options:

- **IP Address**&mdash;Sets the value of the IP address or starting address of the IP range (in case the [CIDR-notated](#cidr-notation-for-setting-ip-addresses) subnet mask differs from 32).

- **Subnet Mask**&mdash;Sets the subnet mask, which will determine the range of IP addresses. Accepts [Classless Inter-Domain Routing (CIDR) notation](#cidr-notation-for-setting-ip-addresses).

- **Port****&mdash;Sets the TCP/IP port. By default, most client applications use port 80 for HTTP and port 443 for HTTPS. However, it is common for some applications to use different ports for staging and testing purposes (for example, custom ports for demo applications running on localhost)

- **Filter additionally by PID or process name**&mdash;Use this field to specify multiple PID (process identifiers) or process name values by separating them with a space. If your process name contains more than one word, add quotation marks (for example, "Google Chrome Helper"). You can use the macOS "Activity Monitor" application to determine any active application's specific PID or process name.

### CIDR Notation for Setting Network Addresses

The **Subnet Mask** field accepts [a CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) value between 0 and 32. For example, A value of 32 (equal to subnet mask `255.255.255.255`) means that only the host address, as set through the **IP Address** field, will be monitored. Conversely, a value of 0 (equal to subnet mask `0.0.0.0`) means that all IP addresses from the range will be monitored.

The default capturing rules for port 80 (HTTP) and 443 (HTTPS) use  **IP Address** set as `0.0.0.0` and **Subnet Mask** set as `0` (`0.0.0.0`). That entry translates to all available IPv4 addresses because it starts from `0.0.0.0` and adds a mask covering the entire IPv4 range (all 4,294,967,296 available addresses). The default rules also adds the above range as IPv6 entry (**IP Address** set as `::` and **Subnet Mask** set as `0` on ports `80` and `443`).

In addition, the default rules are also adding a localhost IPv4 address (**IP Address** set as `127.0.0.0` and **Subnet Mask** set as `8`, plus localhost IPv6 address through **IP Address** set as `::1` and **Subnet Mask** set as `128` on port `3000`) that demonstrates how to set localhost capturing on port 3000. 

## Troubleshooting the macOS Network Extension

Consider the following tips to troubleshoot the Fiddler's network extension on macOS:

- Ensure that the currently logged user on macOS has administrative privileges that allow installation and enablement of network extensions.

If you experience trouble installing and enabling the Fiddler's network extension for macOS, don't hesitate to contact us through [the Telerik Support Center](https://www.telerik.com/account/support-center). 

## Removing the macOS Network Extension

Once the Fiddler's network extension installs, you can enable or disable the network capturing more quickly. However, it's essential to note that disabling the feature doesn't remove the network extension from your operating system. Suppose you want to remove the network extension from your macOS system. In that case, you can achieve that by [manually removing the extension](#manual-removal) or by [uninstalling the Fiddler Everywhere application](#removal-through-application-uninstall).

### Manual Removal

You can manually remove the extension by executing the following steps:

1. Open the macOS **System Settings**.

1. Navigate to the **Network** section.

1. Click on **Filters**.

1. Select the Fiddler Everywhere extension.

    - Use the dropdown on the right side to turn off the network extension (you can re-enable it later).

    - Use the "-" sign to uninstall and remove the network extension.

### Removal through Application Uninstall

Uninstalling the Fiddler Everywhere application also triggers the deletion of the Fiddler's network extension. To proceed with that option, execute the following steps.

- Open the **Applications** folder on macOS.

- Drag and drop the Fiddler Everywhere icon to the macOS bin.

- In the prompted macOS warning, choose **Continue** to confirm the application and extension removal.

On some macOS systems, the removal of Fiddler Everywhere can fail initially. In such cases, close Fiddler Everywhere, ensure no Fiddler processes run in the background, and then re-try the uninstall process.