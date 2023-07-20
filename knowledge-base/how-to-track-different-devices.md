---
title: Capture Traffic from Remote Devices
description: "Learn how to capture traffic from multiple devices and differentiate the traffic based on the device IP."
type: how-to
slug: fiddler-multiple-devices
publish: true
res_type: kb
previous_url: /knowledge-base/how-to-track-different-devices
---



Fiddler Everywhere can simultaneously capture HTTPS traffic from multiple remote computers and devices (like computers on the local network, smartphones, tablets, etc.).

## Capturing from Remote Computers


To capture traffic from a remote computer, execute the following steps.

- On the Fiddler host computer:

    1. Start Fiddler Everywhere on the host computer. 

    1. Go to **Settings**  > **Connections** and enable **Allow remote computers to connect**.

    1. Toggle on the **System Proxy** switch to enable the system capturing mode.

    1. (Optional) In Fiddler Everywhere, filter the remote traffic through the **Client IP** column while using the local address of the connected remote computer.

        ![Filtering by Client IP](../images/kb/client-ip/filter-by-client-ip.png)

- On the remote computer:

    1. Open the operating system proxy settings.

    1. Set manual proxy settings to the Fiddler Everywhere IP address and port. As an IP address, use the local IP of the Fiddler host computer, and the Fiddler proxy port is **8866**. For example, if your Fiddler host local IP address is **192.168.0.1**, then set the manual proxy to **192.168.0.1:8866**.

    1. Open a browser and type in the following address:

        ```
        http://ipv4.fiddler:8866
        ```

    1. Download, install and trust the Fiddler Everywhere root CA from the loaded page.       

The above configuration lets you capture HTTPS traffic from remote computers within the local network. Note that it will work only for computers that have the proxy port opened and the IP accessible, so in case you are not able to access the Fiddler host consult your network administrator and ask them to provide access to the Fiddler host machine address and port. Capturing traffic from online sources (IP addresses not within the local network) is unsupported.

## Capturing from Mobile Devices

Fiddler Everywhere can capture traffic from mobile devices with Android and iOS operating systems. Use the following links to learn more about the specific configuration for each mobile operating system.

[Capturing from Android devices]({%slug capture-mobile-android-traffic%})

[Capturing from iOS devices]({%slug capture-mobile-ios-traffic%})

