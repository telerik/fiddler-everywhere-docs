---
title: Capturing Traffic from Remote Devices
description: "Use Fiddler Everywhere to capture remote HTTPS traffic from other computers, consoles, tablets, and other smart devices."
slug: fiddler-capture-other-computers
publish: true
position: 60
previous_url: /knowledge-base/how-to-capture-traffic-from-another-pc, /knowledge-base/capturing-from-remote-pc, /knowledge-base/how-to-track-different-devices
---

# Capturing Traffic from Remote Devices

The Fiddler Everywhere proxy can capture HTTP/HTTPS traffic from virtually any remote device (like a computer, console, smartphone, smart TV, and other smart devices) on the same network as the Fiddler Everywhere host machine. This article covers the instructions for setting up a generic remote device that allows you to provide a custom proxy configuration and install Fiddler's Certificate Authority (CA). In case you want to configure the Fiddler proxy on a smartphone, then please use the dedicated documentation articles for [Android]({%slug capture-mobile-android-traffic%}) or [iOS]({%slug capture-mobile-ios-traffic%}).

## Prerequisites

- Install [the latest version of Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

- Use a configurable device within the same local network as the Fiddler Everywhere host.

>important It's common for many company networks to be restricted by security tooling or administrative policies. To capture remote traffic, ensure that your system administrators do not limit the network discovery and usage, or consider using a public hotspot for your Fiddler host and remote device. The Fiddler Everywhere host and the remote machine must have the Fiddler proxy port opened, which is port **8866** by default.

The requirement for using the same network is actually not a must. However, most remote networks, like those managed by ISPs (Internet service providers), use firewalls, explicitly close most ports, and block access from remote networks. That makes configuring and using Fiddler over the internet virtually impossible (as few providers allow you to open a random port or apply custom administrative policies). If you are the administrator of two separate networks, you must ensure that the Fiddler proxy port is open and that both host and target machines see each other (successful ping).


## Capturing Remote Windows Traffic

Fiddler Everywhere provides an automated guide to configure remote Windows capturing through the following steps:

1. Start Fiddler Everywhere. 

1. Open the **Home** pane.

1. Open the **Remote Devices** screen.

1. Open the **Windows** tutorial and follow the instructions.

The tutorial requires administrative privileges for the current user (on the remote host) to install Fiddler's CA and to set the system proxy. Once the steps are executed, you can immediately capture traffic from the remote Windows device.


## Capturing Remote macOS Traffic

Fiddler Everywhere provides an automated guide to configure remote macOS capturing through the following steps:

1. Start Fiddler Everywhere. 

1. Open the **Home** pane.

1. Open the **Remote Devices** screen.

1. Open the **macOS** tutorial and follow the instructions.

The tutorial requires administrative privileges for the current user (on the remote host) to install Fiddler's CA and to set the system proxy. Once the steps are executed, you can immediately capture traffic from the remote macOS device.


## Configuring Other Generic Devices (Manual Setup)

You can manually configure both the Fiddler Everywhere and the remote device. Notice that the instructions below apply only to remote devices that allow configuring manual proxy and installing the Fiddler certificate authority (CA).

1. [Prepare Fiddler Everywhere host for capturing remote traffic](#configuring-the-fiddler-everywhere-host).

1. [Configure the Fiddler Everywhere proxy on remote device](#configuring-the-fiddler-proxy-on-the-remote-device).


### Configuring the Fiddler Everywhere Host

1. Enable the remote connections of Fiddler Everywhere through **Settings** > **Connections** > **Allow remote devices to connect**. Combine it with **Keep it ON after app restart** if you want to persist the setting for subsequent application startups.

    >tip Behind the scenes, enabling the **Allow remote devices to connect** option opens the Fiddler Everywhere port on the host machine for inbound connections. The default port is **8866**, but you can change its value through the **Settings > Connections > Fiddler listens on port** option. 

1. Check the local IP address of the Fiddler Everywhere application host. You can use [the connection status on the lower right-hand side]({%slug connections-section%}) to get the host IP address. Alternatively, you can get the host IP address using a terminal command like **ipconfig**/ **ifconfig** (depending on the OS).


### Configuring the Fiddler proxy on the Remote Device

1. Open a browser on the remote device and type the `http://<fiddler-host-IP>:8866` echo service address of Fiddler Everywhere. 

1. Click the Fiddler CA link to download it.

1. Open your client's certificate manager (like Keychain App on macOS or Certificate Manager on Windows), install, and trust the downloaded Fiddler CA.

1. Go to the operating system proxy settings on the target machine.

    >tip The proxy settings location of the target machine will differ depending on the used OS (it can be macOS, Windows, Ubuntu, [Android]({%slug capture-mobile-android-traffic%}), [iOS]({%slug capture-mobile-ios-traffic%}), or any other third-party operating system.).

1. Open the manual proxy settings:

    - Enter the IP address of the Fiddler Everywhere host&mdash;for example, `<fiddler-host-IP>` (for example, it could be an IP address like `192.168.100.1`).

    - Enter the Fiddler Everywhere proxy port. By default, the port is `8866`.

    - Apply and save the above settings.
