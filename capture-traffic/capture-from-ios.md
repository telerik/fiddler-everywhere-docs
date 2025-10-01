---
title: Capturing iOS Traffic
description: "Capture HTTPS traffic from iOS devices and simulators while using the Fiddler Everywhere web-debugging proxy tool."
type: how-to
slug: capture-mobile-ios-traffic
publish: true
position: 40
previous_url: /knowledge-base/configure-ios, /get-started/mobile-traffic/configure-ios, /get-started/traffic/configure-ios, /traffic/configure-ios
---

# Capturing iOS Traffic

This article describes using Fiddler Everywhere to capture HTTPS traffic from iOS devices and simulators.

## Prerequisites

- Install [the latest version of Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

- Use an iOS device or an iOS simulator within the same local network as the Fiddler Everywhere host.

>important It's common for many company networks to be restricted by security tooling or administrative policies. To capture remote traffic, ensure that your system administrators are not limiting the network discovery and usage, or consider using a public hotspot for your Fiddler host and remote device.


## Capturing Remote iOS Traffic (Automated)

Fiddler Everywhere provides an automated guide to configure remote iOS capturing through the following steps:

1. Start Fiddler Everywhere. 

1. Open the **Home** pane.

1. Open the **Remote Devices** screen.

1. Open the **iOS** tutorial and follow the instructions.

The tutorial requires administrative privileges for the current user (on the iOS device) to install the Fiddler certificate authority (CA) and to set manual proxy. Once the steps are executed, you can immediately capture HTTPS traffic from the remote iOS device.


## Capturing Remote iOS Traffic (Manual Setup)

### Configuring Fiddler Everywhere Host

1. Enable the remote connections of Fiddler Everywhere through **Settings** > **Connections** > **Allow remote devices to connect**. Combine it with **Keep it ON after app restart** if you want to persist the setting for subsequent application startups.

1. Check the local IP address of the host where the Fiddler Everywhere application runs. You can use [the connection status on the lower right-hand side](slug://connections-section) to obtain the host IP address. Alternatively, you can get the IP address while using  **ipconfig**/ **ifconfig** (depending on the OS). For demonstration purposes, let's assume that the local IP of the Fiddler Everywhere machine is **192.168.0.101**.

>tip: If you only need to capture remote traffic, then there is no need to install the Fiddler CA certificate on the Fiddler host machine. You only need to download and install the Fiddler CA certificate on the remote device. Once the proxy configuration is in place, Fiddler Everywhere will automatically capture and decrypt the remote HTTPS traffic.

### Configuring the Fiddler proxy on iOS Device

Refer to the following steps to configure real iOS devices to work alongside a Fiddler Everywhere host. For more information on working with iOS simulators, refer to the section about [configuring iOS simulators](#configure-the-ios-simulator). Real iOS devices and iOS simulators must be discoverable on the same local network.

1. Install the Fiddler certificate authority (CA) on the iOS device.

    1. Open a browser on the iOS device and type the `http://<fiddler-host-IP>:8866` echo service address of Fiddler Everywhere. Follow the link to **download** the Fiddler certificate authority file.

    1. On your iOS device, open **General** > **Profile Downloaded** and install the downloaded Fiddler CA.

    1. (iOS 10.3+) Go to **Settings** > **General** > **About** > **Certificate Trust Settings** and enable full trust for the **Fiddler Root Certificate Authority**.

        >tip You can check the installed profiles in **Settings > General > VPN & Device Management**. The Fiddler CA certificate name is **Fiddler Root Certificate Authority**, but you see can be **DO_NOT_TRUST_FiddlerRoot** if the Fiddler host machine has older versions of Fiddler Everywhere installed. 

1. Set the Fiddler Everywhere proxy on the iOS device.

    1. On your iOS device, go to **Settings** > **WiFi**.

    1. Find your current network and click the **i** icon.

    1. Scroll to the bottom and choose **Configure Proxy** > **Manual**.

        - In the **SERVER** field, enter the IP address of the Fiddler Everywhere host&mdash;for example, `192.168.0.101` (for demo purposes, we assume this is the IP of the host that runs Fiddler).

        - Enter the Fiddler Everywhere proxy port in the **PORT** field. By default, the port is `8866`.

## Configuring the Fiddler proxy on iOS Emulator

The later versions of the iOS simulators, accessible through XCode, are using the macOS system proxy by default. 

1. In Fiddler Everywhere, open the **Traffic** pane and enable the system capturing mode by toggling ON the **System Proxy** switch.

    >important The iOS simulators are automatically detecting the macOS proxy settings. However, not all simulators are not dynamically detecting changes in the OS proxy settings. This step must execute before the iOS simulator starts!

1. In Fiddler Everywhere, go to **Settings** > **HTTPS** and enable **Capture HTTPS traffic**.

1. In Fiddler Everywhere, go to **Settings** > **Connections** and enable **Allow remote devices to connect**.

1. Start the iOS simulator. Restart the simulator in case it was already started before enabling the Fiddler's system capturing.

1. Open a mobile browser in the iOS simulator and type `http://ipv4.fiddler:8866`.

    1. Click on the **Download Certificate (.CER)** button. Confirm the CA download in the native iOS popup by pressing **Allow**.

    1. In the iOS simulator, go to **Settings** > **General** > **Device Management** and install the certificate named **Fiddler Root Certificate Authority**.

        >tip The CA name you see can be **DO_NOT_TRUST_FiddlerRoot** if the Fiddler host machine has older versions of Fiddler Everywhere installed.

    1. In the iOS simulator, go to **Settings** > **General** > **About** > **Certificate Trust Settings** and enable full trust for the **Fiddler Root Certificate Authority**.

    >tip Due to [a security limitation](https://developer.apple.com/forums/thread/124056), some versions of the iOS simulators won't be able to access the folders containing the certificate authority files. To capture HTTPS traffic, you must manually export and install the Fiddler Everywhere certificate on your iOS simulator. You can achieve that by dragging and dropping the exported CRT file (**Settings** > **HTTPS** > **Advanced Settings** > **Export Fiddler CA(DER/Binary format)** ) into the iOS simulator.


## Capture Mobile Traffic

Now you can immediately capture and inspect HTTP/HTTPS traffic from your iOS device. For example, open a Safari browser on your iOS device, type an address of your choice, and observe the captured traffic in the **Live Traffic** grid.

>tip When you've finished debugging, remove the WiFi proxy from your iOS device.

[Learn more about inspecting the captured HTTPS sessions here...](slug://inspecting-traffic-get-started)

## Bypass the Apple Endpoints

Some Apple services like the Apple Application store and iTunes use certificate pinning as an additional layer of security. That means these services won't trust third-party CAs like the one Fiddler Everywhere installs and operates as a MITM proxy. The above causes significant effects:  

- The TLS handshake fails, not capturing HTTPS traffic from these services.

- The services will fail if the Fiddler Everywhere proxy is set as the proxy for the active internet connection.

To prevent Apple services from losing connectivity, the Fiddler Everywhere application automatically adds the following endpoints to the macOS proxy bypass list:

```
*.apple.com, *.itunes.com, *mzstatic.com
```

However, this is not the case for the other operating systems where these services are not commonly used. If you like to continue using Apple services like iTunes or AppStore on different operating systems, ensure to add the above endpoints manually as follows:

- Open Fiddler Everywhere on the host machine and go to **Settings > Connections**.

- In the **Bypass Fiddler for URLs that starts with:** field, add the following Apple root domains:

    ```
    *.apple.com, *.itunes.com, *mzstatic.com
    ```

- Click **Save** to persist the change.


## Contact us

If you have more questions or need help configuring your iOS device alongside Fiddler Everywhere, you can contact our support team through the **Contact Support** option.
