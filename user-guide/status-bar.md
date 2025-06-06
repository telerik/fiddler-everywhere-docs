---
title: Status Bar
description: "Learn how to use the status bar in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: connections-section
tags: Fiddler Connections section, Fiddler Everywhere IP addresses, Fiddler Everywhere active network
position: 20
publish: true
previous_url: /user-guide/connections, /user-guide/connections-field
---

# Status Bar

The **Status Bar** section is located at the bottom-left corner of Fiddler Everywhere. It contains information about the state of the connection, the network configuration, the traffic sources, and session count info.

The section pops up on mouse interaction and lists the following information:

- **Connection Status**&mdash;Shows the state of the network that provides the Internet connectivity.

- **Host**&mdash;Outputs the machine's hostname that Fiddler Everywhere runs on.

- **Domain**&mdash;Outputs the machine's domain name that Fiddler Everywhere runs on.

- **Machine IPs**&mdash;A list of the IPv6 and IPv4 addresses of the active network adapters on the machine that hosts Fiddler Everywhere.

    ![The connection status](../images/status-bar/connection-details.png)

- **Traffic Sources**&mdash;A list of all available Fiddler Everywhere traffic sources that highlights the active ones.

    ![The traffic sources](../images/status-bar/traffic-sources.png)

- **Fiddler Port State**&mdash;Indicates if the Fiddler Everywhere proxy port is opened/closed for remote connections. You can control the state through the **Settings > Connections > Allow remote devices to connect** option.

    ![State of the Fiddler port](../images/status-bar/remote-connections-status.png)

- **Rules Count**&mdash;A popup that shows counters of all enabled rules.

    ![The rules count](../images/status-bar/rules-count.png)

- **Breakpoints Count**&mdash;A popup that shows counters of all rules paused by a breakpoint rule.

    ![The breakpoints count](../images/status-bar/breakpoints-count.png)

- **Sessions Count**&mdash;A popup that shows live counters of **total** captured, **visible** (counts only the non-filtered) and **selected** sessions.

    ![The sessions count](../images/status-bar/sessions-count.png)
