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

- **Fiddler listens on port**&mdash;Defines the port that Fiddler Everywhere uses to listen for web traffic. The default port is **8866**.

- **Act as a system proxy on startup**&mdash;Controls whether Fiddler Everywhere will be registered as the system proxy during startup. Some browsers and many applications use the system proxy by default and are notified when it changes.

- **Allow remote computers to connect**&mdash;Controls whether inbound connections to Fiddler Everywhere are allowed. Enable this option to capture traffic from remote devices.

- **Enable HTTP/2 support (BETA)**&mdash;Enables capture of traffic through the HTTP/2 protocol. 

    >important With the **Enable HTTP/2 support (BETA)** option, the connection between a client and a server will default to HTTP/2, if both support it. When the option is disabled, Fiddler Everywhere forces the communication to go through HTTP/1.1. [Read more about the HTTP/2 support in Fiddler Everywhere...]({%slug capture-traffic-get-started%}#http-version-specifics)

- **Bypass Fiddler for URLs that starts with:**&mdash;Allows you to manually add addresses that the Fiddler Everywhere proxy will explicitly bypass.
    A common scenario for using this option is [setting up a VPN connection alongside Fiddler Everywhere]({%slug configure-vpn-fiddler%}). You can separate the individual addresses with a comma, semicolon, new line, or white space. The option will set the bypass list in the related OS settings&mdash;for example, on Windows 10, that will be **Proxy Settings** > **Proxy** > **Manual Proxy** > **Use proxy server except for addresses...**. You can also quickly add domains while selecting a session from the Live Traffic list and using the [context menu]({%slug web-sessions-list%}#bypassing-the-proxy).

    Bypassing in Fiddler works in the following cases:

    - [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **ON**
    - Both [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) and [Preconfigured Browser Capturing]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing) are **ON**
    - [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **OFF** and [Preconfigured Browser Capturing]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing) **ON**
    - Capturing traffic from Android device with [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **OFF** (shows only CONNECT tunnels for bypassed URLs)
    - Capturing traffic from iOS device with [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **OFF** (shows only CONNECT tunnels for bypassed URLs)
    - Expicit browser manual proxy settigns (to Fiddler's proxy address:port) with [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **OFF**

    >tip (**macOS only**) Fiddler Everywhere automatically adds the following system endpoints to the macOS proxy bypass list: `*.apple.com, *.itunes.com, *mzstatic.com`. These system endpoints use certificate pinning (meaning they won't trust third-party certificates like the Fiddler certificate at all). If not explicitly bypassed, some services (that depend on them) might misbehave or not work.

The following figure displays the startup settings of the **Connections** menu.

![Act as a system proxy on startup setting](../../images/settings/settings-connections.png)
