---
title: Capture Traffic from Remote Windows Devices
description: "Capture HTTP(S) traffic from other computers, smartphones, tablets, and smart devices on your network."
type: how-to
slug: fiddler-capture-windows-computers
publish: true
previous_url: /knowledge-base/how-to-capture-traffic-from-another-pc
---


# Capturing Traffic from Remote Windows Devices

The Fiddler Everywhere proxy can capture HTTP/HTTPS traffic from virtually any device (like a computer, smartphone, smart tv, etc.) on the same network as the Fiddler Everywhere host. Before configuring the proxy on the client machine and the host, you must consider the following prerequisites:

- The Fiddler Everywhere host and the target using the Fiddler Everywhere proxy must be on the same network.

- The Fiddler Everywhere host and the target using the Fiddler Everywhere proxy must be discoverable on the network. There must be no administrative limitations or security policies that prevent device discovery on the local network.

    >tip If you can ping the Fiddler host from the target device and the other way around, that would indicate that both devices are "seeing" each other.

- The Fiddler Everywhere host and the target using the Fiddler Everywhere proxy should have the Fiddler proxy port opened. By default, Fiddler Everywhere uses port **8866** but you can be manually reconfigure the port through the **Settings > Connections > Fiddler listens on port** option.


The requirement for using the same network is actually not a must. However, most remote networks, like those managed by ISPs, use firewalls and explicitly close most ports. That makes configuring and using Fiddler over the internet virtually impossible (as there are not many ISPs that will allow you to open a random port). If you are the administrator of two separate networks, you must ensure that the Fiddler proxy port is open and that both host and target machines are seeing each other (successful ping).

## Configuring Fiddler Everywhere (Host) 

1. Enable the remote connections of Fiddler Everywhere through **Settings** > **Connections** > **Allow remote computers to connect**.

1. Check the local IP address of the Fiddler Everywhere application host. You can use [the connection status on the lower right-hand side]({slug connections-section}) to obtain the host IP address. Alternatively, you can obtain the host IP address while using a terminal command like **ipconfig**.

    ![Host local IP address](../images/kb/host-ip.png)

1. Ensure that Fiddler root certificate is installed and the [**Capture HTTPS traffic** option]({%slug decrypt-https-traffic%}) is enabled.    

## Configuring Fiddler Everywhere (Target)

1. Go to the Windows OS proxy settings on the target machine. On Windows 11, these are located under **Settings > Network & Internet > Proxy** (or open the start button, type **Proxy Settings**, and press **Enter**.)

1. Open the **Manual proxy setup** window:

    - Enter the IP address of the Fiddler Everywhere host&mdash;for example, **192.168.148.39** (demo IP only).

    - Enter the Fiddler Everywhere proxy port. By default, the port is **8866**.

    - Apply and save the above settings.

1. Open a browser on the iOS device and type the http://ipv4.fiddler:8866 echo service address of Fiddler Everywhere. 

    >tip Instead of the echo service address, you can access the Fiddler certificate download page through `host-IP-address:fiddler-port` (for example, **192.168.148.39:8866**).

1. Click the Fiddler root certificate link to download it.

1. Open your client's certificate manager (like Keychain App on macOS or Certificate Manager on Windows), install, and fully trust the downloaded Fiddler certificate.
