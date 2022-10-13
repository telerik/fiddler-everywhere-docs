---
title: Capturing Traffic from Other Devices
description: "Capture HTTP and HTTPS traffic from other devices on the same network."
type: how-to
slug: fiddler-capture-other-computers
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, Linux  |


## Description

How to capture HTTP/HTTPS traffic from a client that is on the same network as the Fiddler Everywhere host?


## Solution

The Fiddler Everywhere proxy can capture HTTP/HTTPS traffic from virtually any device (like computer, smartphone, smart tv, etc.) that is on the same network as the Fiddler Everywhere host. Prior to configuring the proxy on the client machine and on the host, you must consider the following prerequisites:

- Both the Fiddler Everywhere host and the client using the Fiddler Everywhere proxy must be on the same network.
- Both the Fiddler Everywhere host and the client using the Fiddler Everywhere proxy must be discoverable on the network. There must be no administrative limitations or security policies that are preventing the device discovery on the local network.

>tip If you are able to ping the Fiddler host from the client device, and the other way around that would indicate that both devices are "seeing" each other.

## Configuring Fiddler Everywhere (Host) 

1. Enable the remote connections of Fiddler Everywhere through **Settings** > **Connections** > **Allow remote computers to connect**.

1. Check the local IP address of the Fiddler Everywhere application host. You can use [the connection status on the lower right-hand side]({slug connections-section}) to obtain the host IP address. Alternatively, you can obtain the IP address while using  **ipconfig**/ **ifconfig** (depending on the OS).

    ![Host local IP address](../images/kb/host-ip.png)

1. Enable [system capturing]({%slug capture-traffic-get-started%}#system-capturing).

## Configuring Fiddler Everywhere (Client)

1. On the target machine, go to the system proxy settings 

1. Open the device's manual proxy settings:

     - Enter the IP address of the Fiddler Everywhere host&mdash;for example, **192.168.148.39**.
     
     - Enter the Fiddler Everywhere proxy port. By default, the port is **8866**.

    _Example of setting the Fiddler host as proxy on macOS_
    ![Example of setting the Fiddler host as proxy on macOS]()

1. 
