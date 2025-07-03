---
title: Capturing Network Traffic
description: "Capture all network traffic that goes thorugh the active network adapter and uses the TCP protocol"
slug: capture-network-traffic
publish: true
position: 15
---

# Network Capturing Mode

>important The network capturing mode is a feature in BETA state and is subject to change in the future.

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

- Administrative privileges to install/uninstall the network extension.

### Limitations

The **Network Capture** mode is in Beta state and, currently, has some known limitations as follows:

- The network capturing mode is available only for Windows and macOS. The Linux version of Fiddler Everywhere does not yet support network capturing.

- Specific VPN tools are closing the VPN connection if a third-party network extension is detected. You can try to workaround that by making the VPN connection **before** starting Fiddler Everywhere and then enabling its network capturing mode.

- To use a VPN connection alongside Fiddler you often need to bypass specific VPN endpoints (for example, like `vpn.mycompany.com`). However the **HTTPS > Connections > Bypass Fiddler for URLs that starts with:** option is incompatible with the **Network Capture** mode. When using network capturing mode, you must bypass targeted VPN endpoints [by creating a Fiddler rule that executes the **Do Not Decrypt** action]({%slug configure-vpn-fiddler%}#configuration-for-network-
capturing-mode).

- The network capturing mode can capture only outbound traffic. Currently, inbound traffic from remote devices is not captured. For such cases, use our alternative capturing modes like [reserve proxy]({%slug fiddler-reverse-proxy%}) or specific capturing modes for [Android]({%slug capture-mobile-android-traffic%}), [iOS]({%slug capture-mobile-ios-traffic%}), or [remote PCs]({%slug fiddler-capture-other-computers%}).

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

If this is the first time you are starting the network capturing mode on your macOS, then you will need to install and allow the usage of the Fiddler's network extension. To do so, proceed with the following steps.

**Initial Setup on macOS**

Immediately after pressing **Enable Capture**, you will see a native macOS popup.

1. In the macOS popup, choose **Open System Settings**. In the opened macOS system settings, scroll down to the message that the Fiddler extension is blocked.

1. Allow the Fiddler Everywhere extension.

1. Enter your credentials to install the extension.

1. Click **Allow** to confirm the Fiddler Everywhere network extension installation.

Upon succesful instalation the **Network Capture** screen reloads with reverse capturing enabled.

**Initial Setup on Windows**

Immediately after pressing **Enable Capture**, the Windows OS will prompt a security popup.

1. Click **Yes** to allow the installation of the network extension.

Upon succesful instalation the **Network Capture** screen reloads with reverse capturing enabled.

### Stop Network Capture

To stop the network capturing mode, execute the following steps:

1. Click on the **Network Capture** button from the **Live Traffic** menu.

1. Click on the **Disable Capture** from the **Network Capture Settings (BETA)** screen.

## Modify Network Capture Rules

By default, network capturing mode uses active rules to capture traffic from all IP addresses and processes working on ports 80 (HTTP) and 443 (HTTPS). An additional rule enables capturing from localhost (`127.0.0.1`) on port 3000—this demonstrates how to add specific rules in the **Network Capture Settings (BETA)** screen.

The **Network Capture Settings (BETA)** screen offers a **Basic** view for simple rule setup and an **Advanced** view for more complex configurations.

In the advanced view, you can manually control what traffic to capture using these options:

- **IP Address**: Set a specific IP address or the starting address of an IP range (use [CIDR notation](#cidr-notation-for-setting-ip-addresses) for subnets).
- **Subnet Mask**: Define the subnet mask, which determines the range of IP addresses. Accepts [CIDR notation](#cidr-notation-for-setting-ip-addresses).
- **Port**: Set the TCP/IP port. Most applications use port 80 (HTTP) and 443 (HTTPS) by default, but custom ports are common for staging, testing, or local development.
- **Filter by PID or process name**: Specify one or more process IDs (PIDs) or process names, separated by spaces. For multi-word process names, use quotes (e.g., "Google Chrome Helper"). On macOS, use the Activity Monitor to find PIDs or process names.

### Reset Capturing Rules

To revert capturing rules to their defaults:

- Open the **Network Capture Settings** window.
- Switch to **Advanced** view.
- Click **Reset to Default**.

>tip If network capture properties are set via managed app policies, the reset option will revert to the rules defined by your administrator.

### CIDR Notation for Setting Network Addresses

The **Subnet Mask** field accepts [CIDR notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing) values from 0 to 32. For example:
- `32` (subnet mask `255.255.255.255`): Only the specified host address is monitored.
- `0` (subnet mask `0.0.0.0`): All IP addresses in the range are monitored.

Default rules for ports 80 and 443 use **IP Address** `0.0.0.0` and **Subnet Mask** `0`, covering all IPv4 addresses. IPv6 is also supported (e.g., **IP Address** `::` and **Subnet Mask** `0`).

A localhost rule is also included: **IP Address** `127.0.0.0` and **Subnet Mask** `8` (IPv4), or **IP Address** `::1` and **Subnet Mask** `128` (IPv6) on port 3000.

## Removing the Network Extension

Disabling network capturing does not remove the network extension from your system. To remove it:

### Removal through Application Uninstall (Windows)

1. Uninstall Fiddler Everywhere thorugh the Windows Control Panel.

### Removal through Application Uninstall (macOS)

1. Open the **Applications** folder.
2. Drag Fiddler Everywhere to the bin.
3. In the warning prompt, choose **Continue** to confirm removal.

>tip If removal fails, close Fiddler Everywhere, ensure no Fiddler processes are running, and retry the uninstall process.

### Manual Removal (macOS)

1. Open **System Settings** on macOS.
2. Go to the **Network** section.
3. Click **Filters**.
4. Select the Fiddler Everywhere extension.
    - Use the dropdown to turn off the extension (can be re-enabled later).
    - Use the "-" sign to uninstall and remove the extension.

## Troubleshooting the Network Extension

If you encounter issues with the Fiddler network extension:

- Ensure your OS user account has administrative privileges to install and enable network extensions.
- If installation or enablement fails, contact [Telerik Support Center](https://www.telerik.com/account/support-center).

## Best Practices

- Use the Basic view for simple capture needs; switch to Advanced for granular control.
- Always review and reset rules after major updates or policy changes.
- Use descriptive process names or PIDs to avoid capturing unnecessary traffic.
- For troubleshooting, start with default rules and add complexity incrementally.

## Additional Resources

- [Capturing Modes in Fiddler]({%slug capture-traffic-get-started%})
- [Fiddler as a System Proxy]({%slug capture-system-traffic%})
- [Fiddler as a Reverse Proxy]({%slug fiddler-reverse-proxy%})