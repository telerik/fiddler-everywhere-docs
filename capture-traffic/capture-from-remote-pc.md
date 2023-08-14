---
title: Capturing Traffic from Remote Devices
description: "Use Fiddler Everywhere to capture remote HTTPS traffic from other computers, consoles, tablets, and other smart devices."
slug: fiddler-capture-other-computers
publish: true
previous_url: /knowledge-base/how-to-capture-traffic-from-another-pc, /knowledge-base/capturing-from-remote-pc
---



# Capturing Traffic from Remote Devices

The Fiddler Everywhere proxy can capture HTTP/HTTPS traffic from virtually any remote device (like a computer, console, smartphone, smart TV, and other smart devices) on the same network as the Fiddler Everywhere host machine. This articles covers the instructions for setting up a generic remote device that allows you to provide custom proxy configuration and to install user CA (certificate authority). In case, you want to configure the Fiddler proxy on smartphone, then please use the dedicated documentation articles for [Android]({%slug capture-mobile-android-traffic%}) or [iOS]({%slug capture-mobile-ios-traffic%}).



## Prerequisites

- Install [the latest version of Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

- Use a configurable smart device within the same local network as the Fiddler Everywhere host.

>important It's common for many company networks to be restricted by security tooling or administrative policies. To capture remote traffic, ensure that your system administrators does not limit the network discovery and usage, or consider using a public hotspot for your Fiddler host and remote device. The Fiddler Everywhere host and the remote device must have the Fiddler proxy port opened which by default is port **8866**.

The requirement for using the same network is actually not a must. However, most remote networks, like those managed by ISPs (Internet service providers), use firewalls and explicitly close most ports and blocks access from remote networks. That makes configuring and using Fiddler over the internet virtually impossible (as few providers that allows you to open a random port or to apply custom administrative policies). If you are the administrator of two separate networks, you must ensure that the Fiddler proxy port is open and that both host and target machines are seeing each other (successful ping).

## Capturing Remote Windows Traffic

Fiddler Everywhere provides an automated guide to configure remote Windows capturing through the following steps:

1. Start Fiddler Everywhere. 

1. Open the **Home** pane.

1. Open the **Remote Devices** screen.

1. Open the **Windows** tutorial and follow the instructions.



## Capturing Remote macOS Traffic

Fiddler Everywhere provides an automated guide to configure remote macOS capturing through the following steps:

1. Start Fiddler Everywhere. 

1. Open the **Home** pane.

1. Open the **Remote Devices** screen.

1. Open the **macOS** tutorial and follow the instructions.


## Configuring Other Generic Devices

You can manually configure Fiddler Everywhere and a remote host. Notice that the instructions below apply only to remote hosts that allow configuring manual proxy and installing the Fiddler CA (certificate authority).

### Configuring the Fiddler Everywhere Host

1. Enable the remote connections of Fiddler Everywhere through **Settings** > **Connections** > **Allow remote computers to connect**.

1. Check the local IP address of the Fiddler Everywhere application host. You can use [the connection status on the lower right-hand side]({%slug connections-section%}) to get the host IP address. Alternatively, you can get the host IP address while using a terminal command like **ipconfig**/ **ifconfig** (depending on the OS).

    ![Host local IP address](../images/kb/host-ip.png)

1. Ensure that the **Settings > HTTPS > Capture HTTPS traffic** option is enabled. 


## Configuring the Fiddler proxy on the Remote Device

1. On the target machine, go to the operating system proxy settings.

    >tip The proxy settings location of the target machine will differ depending on the used OS (it can be macOS, Windows, Ubuntu, [Android]({%slug capture-mobile-android-traffic%}), [iOS]({%slug capture-mobile-ios-traffic%}), or any other third-party operating system.).

1. Open the manual proxy settings:

    - Enter the IP address of the Fiddler Everywhere host&mdash;for example, `192.168.148.39` (demo IP only).

    - Enter the Fiddler Everywhere proxy port. By default, the port is `8866`.

    - Apply and save the above settings.

1. Open a browser on the iOS device and type the `http://192.168.148.39:8866` echo service address of Fiddler Everywhere. 

1. Click the Fiddler root certificate link to download it.

1. Open your client's certificate manager (like Keychain App on macOS or Certificate Manager on Windows), install, and trust the downloaded Fiddler CA.
