---
title: Connections
description: Changing the default Fiddler proxy port and allowing remote connections in Fiddler Everywhere
slug: connections-submenu
publish: true
position: 20
previous_url: /user-guide/settings/connections/allow-remote-connections
---

# Connections Menu

The **Connections** menu exposes options that allow for granular control over proxy settings and remote connection.

![Act as a system proxy on startup setting](../../images/settings/settings-connections.png)

## Setting Proxy Port

The **Fiddler listens on port** option defines the port that Fiddler Everywhere uses to listen for web traffic. The default port used by the Fiddler Everywhere client is **8866**.

## Act as a System Proxy on Startup

The **Act as a system proxy on startup** option controls whether Fiddler Everywhere will be registered as the system proxy during startup. Some browsers and many applications use the system proxy by default and are notified when it changes.

## Allow Remote Computers to Connect

The **Allow remote computers to connect** option controls whether inbound connections to Fiddler Everywhere are allowed. Enable this option to capture traffic from remote devices.

## Bypass Fiddler for URLs that starts with

The **Bypass Fiddler for URLs that starts with:** option allows you to add addresses that the Fiddler Everywhere proxy will explicitly bypass. One common scenario for using this option is [setting up a VPN connection alongside Fiddler Everywhere]({%slug configure-vpn-fiddler%}). You can separate the individual addresses with a comma, semicolon, new line, or white space. The option will set the bypass list in the related OS settings (for example, on Windows 10, that will be **Proxy Settings > Proxy > Manual Proxy > Use proxy server except for addresses ...**).