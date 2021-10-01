---
title: Connections
description: "Learn how to use the Connections menu, change the default proxy port, and allow remote connections in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: connections-submenu
publish: true
position: 20
previous_url: /user-guide/settings/connections/allow-remote-connections
---

# Connections Menu

The **Connections** menu exposes options that allow for granular control over proxy settings and remote connection.

* **Fiddler listens on port**&mdash;Defines the port that Fiddler Everywhere uses to listen for web traffic. The default port is **8866**.
* **Act as a system proxy on startup**&mdash;Controls whether Fiddler Everywhere will be registered as the system proxy during startup. Some browsers and many applications use the system proxy by default and are notified when it changes.
* **Allow remote computers to connect**&mdash;Controls whether inbound connections to Fiddler Everywhere are allowed. Enable this option to capture traffic from remote devices.
* **Bypass Fiddler for URLs that starts with:**&mdash;Allows you to add addresses that the Fiddler Everywhere proxy will explicitly bypass.

    A common scenario for using this option is [setting up a VPN connection alongside Fiddler Everywhere]({%slug configure-vpn-fiddler%}). You can separate the individual addresses with a comma, semicolon, new line, or white space. The option will set the bypass list in the related OS settings&mdash;for example, on Windows 10, that will be **Proxy Settings** > **Proxy** > **Manual Proxy** > **Use proxy server except for addresses...**.

The following figure displays the startup settings of the **Connections** menu. 

![Act as a system proxy on startup setting](../../images/settings/settings-connections.png)
