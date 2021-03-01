---
title: Connections
previous_url: /user-guide/settings/connections/allow-remote-connections
slug: connections-submenu
tags: remote connections, remote traffic, system proxy, network port
publish: true
position: 20
---

# Connections Menu

The __Connections__ menu exposes options that allow for granular control over proxy settings and remote connection.

![Act as a system proxy on startup setting](../../images/settings/connections-act-as-proxy.png)

## Setting Proxy Port

The __Fiddler listens on port__ option defines the port that Fiddler Everywhere uses to listen for web traffic. The default port used by the Fiddler Everywhere client is **8866**.

## Act as a System Proxy on Startup

The __Act as a system proxy on startup__ option controls whether Fiddler Everywhere will be registered as the system proxy during startup. Some browsers and many applications use the system proxy by default and are notified when it changes.

## Allow Remote Computers to Connect

The __Allow remote computers to connect__ option controls whether inbound connections to Fiddler Everywhere are allowed. Enable this option to capture traffic from remote devices.

## Bypass Fiddler for URLs that starts with

The **_Bypass Fiddler for URLs that starts with:_** option allows you to add addresses that the Fiddler Everywhere proxy will explicitly bypass. One common scenario for using this option is [setting up a VPN connection alongside Fiddler Everywhere]({%slug configure-vpn-fiddler%}). You can separate the individual addresses with a comma, semicolon, new line, or white space. The option will set the bypass list in the related OS settings (for example, on Windows 10, that would be **_Proxy Settings > Proxy > Manual Proxy > Use proxy server except for addresses ..._**).