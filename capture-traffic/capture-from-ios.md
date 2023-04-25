---
title: Capture iOS Traffic
description: "Capture and inspect traffic from iOS devices and simulators while using the Fiddler Everywhere web-debugging HTTP-proxy tool."
type: how-to
slug: capture-mobile-ios-traffic
publish: true
position: 40
previous_url: /knowledge-base/configure-ios, /get-started/mobile-traffic/configure-ios, /get-started/traffic/configure-ios, /traffic/configure-ios
---

# Capturing iOS Traffic

This article describes how to use Fiddler Everywhere to capture and inspect traffic from iOS devices and simulators.

To capture and inspect traffic on iOS devices or simulators, perform the following steps:

1. [Provide the prerequisites](#prerequisites).
1. [Configure Fiddler Everywhere](#configuring-fiddler-everywhere-host).
1. [Configure the iOS device](#configuring-ios-devices).
1. [Configure the iOS simulator](#configuring-ios-simulator).
1. [Inspect the traffic](#inspecting-traffic).

## Prerequisites

- Install [the latest version of Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

- Use an iOS device or an iOS simulator within the same local network as the Fiddler Everywhere host.

## Configuring Fiddler Everywhere Host

1. Enable the remote connections of Fiddler Everywhere through **Settings** > **Connections** > **Allow remote computers to connect**.

1. Check the local IP address of the host where the Fiddler Everywhere application runs. You can use [the connection status on the lower right-hand side]({slug connections-section}) to obtain the host IP address. Alternatively, you can obtain the IP address while using  **ipconfig**/ **ifconfig** (depending on the OS).  For demonstration purposes, let's assume that the local IP of the Fiddler Everywhere machine is **192.168.0.101**.

1. Ensure that Fiddler root certificate is installed and the [**Capture HTTPS traffic** option]({%slug decrypt-https-traffic%}) is enabled.

## Configuring iOS Devices

To configure real iOS devices to work alongside a Fiddler Everywhere host, refer to the following steps. For more information on working with iOS simulators, refer to the section about [configuring iOS simulators](#configure-the-ios-simulator). Real iOS devices and iOS simulators must be on the same local network and be discoverable.


1. On your iOS device, go to **Settings** > **WiFi**.

1. Find your current network and click the **i** icon.

1. Scroll to the bottom and choose **Configure Proxy** > **Manual**.

     - In the **SERVER** field, enter the IP address of the Fiddler Everywhere host&mdash;for example, **192.168.0.101** (for demo purposes we assume that is the IP of the host machine where FIddler Everywhere runs).

     - In the **PORT** field, enter the Fiddler Everywhere proxy port. By default, the port is **8866**.

    >tip With the current setup, you can capture non-secure HTTP traffic. However, if you try to open any HTTPS website, you'll get the "This site's security certificate is not trusted!" error. To fix this issue, trust the Fiddler root certificate.

1. Open a browser on the iOS device and type the http://ipv4.fiddler:8866 echo service address of Fiddler Everywhere. Follow the Fiddler root certificate link to **download** the Fiddler certificate.

1. On your iOS device, open **General** > **Profile Downloaded** and install the downloaded Fiddler certificate.

1. (iOS 10.3+) Go to **Settings** > **General** > **About** > **Certificate Trust Settings** and enable full trust for the **DO_NOT_TRUST_FiddlerRoot** certificate.

>important The last step is crucial, and HTTPS browsing will fail if the certificate is not fully trusted! Newer iOS versions will show that the certificate is successfully installed. Still, HTTPS sites will fail to open due to security errors if the certificate is not explicitly enabled/fully trusted.


## Configuring iOS Simulator

The later versions of the iOS simulators, accessible through XCode, use the OS system proxy by default. However, due to [a security limitation](https://developer.apple.com/forums/thread/124056), the iOS simulator won't access the folders containing the trust certificates. To capture HTTPS traffic, you must manually export the Fiddler Everywhere certificate and install it on your iOS simulator.


1. In Fiddler Everywhere, go to **Settings** > **HTTPS** > **Advanced Settings**.

1. Use the **Export root certificate(DER/Binary format)** option from the drop-down menu. As a result, the `FiddlerRootCertificate.crt` file will be created in the **Desktop** folder.

1. Start the iOS simulator.

1. Drag and drop the exported certificate in the simulator.

1. In the iOS simulator, go to **Settings** > **General** > **About** > **Certificate Trust Settings** and enable full trust for the **DO_NOT_TRUST_FiddlerRoot** certificate.

## Inspecting Traffic

Now you can immediately monitor HTTP/HTTPS traffic from your iOS device. For example, open a Safari browser on your iOS device, type an address of your choice, and observe the captured traffic in the **Live Traffic** section of Fiddler Everywhere.

>tip When you've finished debugging, remove the WiFi proxy from your iOS device.

## Bypass the Apple Endpoints

Some Apple services like the Apple Application store and iTunes use certificate pinning as an additional layer of security. That means these services won't trust third-party certificates like the one Fiddler Everywhere installs and operates as a MITM proxy. The above causes several significant effects:  

- The TLS handshake fails, resulting in no HTTPS traffic being captured from these services.

- The services will fail if the Fiddler Everywhere proxy is set as the proxy for the active internet connection.

To prevent the Apple services from losing connectivity, the Fiddler Everywhere application automatically adds the following endpoints to the macOS proxy bypass list:

```
*.apple.com, *.itunes.com, *mzstatic.com
```

However, this is not the case for the other operating systems where these services are not commonly used. If you would like to continue using Apple services like iTunes, or AppStore on other operating system, ensure to add the above endpoints manually as follows:

- Open Fiddler Everywhere on the host machine and go to **Settings > Connections**.

- In the **Bypass Fiddler for URLS that starts with:** field, add the following Apple root domains:

    ```
    *.apple.com, *.itunes.com, *mzstatic.com
    ```

- Click **Save** to persist the change.


## Contact us

Suppose you have more questions or need assistance configuring your iOS device alongside Fiddler Everywhere, then you can reach out to our support team through the **Help** > ***Contact Support** option.


## Additional Resources

* [Learn more about the different capturing modes in Fiddler Everywhere here...]({%slug capture-traffic-get-started%})
* [Directing Localhost Requests from Mobile Application through the Fiddler Proxy]({%slug fiddler-localhost-android%})
* [Debugging Mobile Applications with Fiddler Everywhere (Webinar)](https://www.telerik.com/webinars/fiddler/how-to-debug-ios-and-android-mobile-apps-with-fiddler)
