---
title: Connections
description: "Learn how to use the Connections menu, change the default proxy port, and allow remote connections in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: connections-submenu
publish: true
position: 20
previous_url: /user-guide/settings/connections/allow-remote-connections
---

# Connections Menu

The **Connections** menu exposes options allowing granular control over proxy settings and remote connection.

- **Fiddler listens on port**&mdash;Defines the port that Fiddler Everywhere uses to listen for web traffic. The default port is **8866**.

- **Allow remote computers to connect**&mdash;Controls whether inbound connections to Fiddler Everywhere are allowed. Enable this option to capture traffic from remote devices.

- **Enable HTTP/2 support**&mdash;Enables capture of traffic through the HTTP/2 protocol. 

- **Enable Streaming Mode**&mdash;With **Streaming mode** enabled, the response is immediately returned to the client as they are downloaded. Modifying the Response body (through the **Rules**) is possible only when **Streaming mode** is disabled.

- **Bypass Fiddler for URLs that starts with:**&mdash;Allows you to manually add addresses that the Fiddler Everywhere proxy will explicitly bypass.
    A common scenario for using this option is [setting up a VPN connection alongside Fiddler Everywhere]({%slug configure-vpn-fiddler%}). You can separate the individual addresses with a comma, semicolon, new line, or white space. The option will set the bypass list in the related OS settings&mdash;for example, on Windows 10, that will be **Proxy Settings** > **Proxy** > **Manual Proxy** > **Use proxy server except for addresses...**. You can also quickly add domains while selecting a session from the Live Traffic list and using the [context menu]({%slug web-sessions-list%}#bypassing-the-proxy).

    Bypassing in Fiddler works in the following cases:

    - [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **ON**
    - Both [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) and [Independent Browser Capturing]({%slug capture-traffic-get-started%}#independent-browser-capturing) are **ON**
    - [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **OFF** and [Independent Browser Capturing]({%slug capture-traffic-get-started%}#independent-browser-capturing) **ON**
    - Capturing traffic from Android device with [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **OFF** (shows only CONNECT tunnels for bypassed URLs)
    - Capturing traffic from iOS device with [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **OFF** (shows only CONNECT tunnels for bypassed URLs)
    - Explicit browser manual proxy settings (to Fiddler's proxy address:port) with [System Capturing]({%slug capture-traffic-get-started%}#system-capturing) **OFF**

    >tip (**macOS only**) Fiddler Everywhere automatically adds the following system endpoints to the macOS proxy bypass list: `*.apple.com, *.itunes.com, *mzstatic.com`. These system endpoints use certificate pinning (meaning they won't trust third-party certificates like the Fiddler certificate at all). If not explicitly bypassed, some services (that depend on them) might misbehave or not work.



### Streaming Mode

By default, Fiddler Everywhere uses the buffering mode, which means that the responses are fully collected before any part is sent to the client. Buffering alters the responses&mdash;for example, an image won't begin to download until the containing page download is complete. With the streaming mode, the server responses are immediately returned to the client as it is downloaded. In streaming mode, tampering with the response body is not possible.

The streaming mode is helpful for low-level network timing scenarios&mdash;for example, by design, some browsers will parse partially downloaded HTML, which will start the download of external resources in parallel before the remote server has finished delivering the content. The streaming mode is also helpful if a site offers audio or video streams, as Fiddler Everywhere cannot buffer such constant streams.

![Buffering mode vs. Streaming Mode](../../images/livetraffic/websessions/websessions-toolbar-streaming-mode.png)

To toggle between the buffering and the streaming mode, click the **Stream** button.