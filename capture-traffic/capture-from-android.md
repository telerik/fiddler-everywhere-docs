---
title: Capturing Android Traffic
description: "Capture HTTPS traffic from Android devices while using the Fiddler Everywhere web-debugging proxy tool."
type: how-to
slug: capture-mobile-android-traffic
publish: true
position: 50
previous_url: /knowledge-base/configure-android, /get-started/mobile-traffic/configure-android, /get-started/traffic/configure-android, /traffic/configure-android
---

# Capturing Android Traffic

This article describes using Fiddler Everywhere to capture HTTPS traffic from Android devices and emulators.

To capture and inspect traffic on Android devices, perform the following steps:

1. [Provide the prerequisites](#prerequisites).
1. [Configure Fiddler Everywhere](#configuring-fiddler-everywhere-host).
1. [Configure the Android device](#configuring-android-devices).
1. [Capture browser traffic](#capture-browser-traffic).
1. [Capture the Android application traffic](#capture-android-application-traffic).

## Prerequisites

- Install the latest version of [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

- Connect an Android device to the same network or use an Android emulator on the Fiddler Everywhere host machine. Ensure that the machine on which Fiddler Everywhere and the Android device run is discoverable on the same network.

## Configuring Fiddler Everywhere Host

1. Enable the remote connections in Fiddler Everywhere through **Settings** > **Connections** > **Allow remote computers to connect**.

1. Check the local IP address of the Fiddler Everywhere application host. You can use [the connection status on the lower right-hand side]({slug connections-section}) to obtain the host IP address. Alternatively, you can get the IP address using a terminal command like  **ipconfig**/ **ifconfig** (depending on the OS). For demonstration purposes, let's assume that the local IP of the Fiddler Everywhere host machine is **192.168.100.50**. 

1. Ensure that the Fiddler root certificate is installed and the [**Capture HTTPS traffic** option]({%slug decrypt-https-traffic%}) is enabled.

## Configuring Android Devices

The following steps apply to real Android devices with access to the Internet through the same network as the Fiddler Everywhere host machine.

1. Set the Fiddler Everywhere proxy on the Android device or emulator.

    1. Open **Settings** > active WiFi connection > **Proxy**.

    1. From the **Proxy** option, select **Manual proxy**.

     - Enter the IP address of the Fiddler Everywhere host&mdash;for example, **192.168.100.50**.

     - Enter the Fiddler Everywhere proxy port. By default, the port is **8866**.

     >important Ensure that all VPNs from the Fiddler host and the Android devices are turned off or bypassed.

1. Install the root certificate of Fiddler Everywhere on the Android device.

    1. Open a mobile browser on the Android device and type the http://ipv4.fiddler:8866 echo service address of Fiddler Everywhere.

    1. Tap the option to download the certificate.
            
    1. Install the downloaded Fiddler certificate in the device certificate storage. The settings location depends on the Android version but is usually under **Settings** > **Security** > **Encryption and Credentials** > **Install a certificate** > **CA Certificate**.

    1. Ensure the Fiddler Everywhere certificate is installed and trusted through the **Settings** > **Security** > **Encryption & Credentials** > **Trusted Credentials** > **User** tab.

You can capture traffic from your Android mobile browser with the above setup. Test your configuration as follows:

1. In Fiddler Everywhere, ensure that **Settings** > **Connections** > **Allow remote computers to connect** is checked and that **Live Traffic** capturing mode is turned ON.

1. On your emulator, open **Google Chrome** (or any other mobile browser that respects the proxy settings) and type [https://example.com](https://example.com)

1. Observe the secure traffic being captured back in Fiddler Everywhere.


## Configuring the Android Emulator

The Android Virtual Devices (a.k.a. AVDs or Android emulators) can use Fiddler Everywhere as a proxy by directly configuring the Android operating system (like the actual device). The crucial difference is that the Fiddler Everywhere proxy address will be the loopback address of the emulator. Check the emulator documentation for the IP address used as a loopback address. In most cases, the loopback alias of the Android emulator is the **10.0.2.2**. Note that some third-party emulators are using different alias for the loopback address.

1. Start the emulator, open the simulated WiFi, tap **Settings**, and expand **Advanced Settings**.

1. Select **Edit** and expand **Advanced Settings**. For some older Android versions, you have to touch and hold the name of the connected network, then tap **Modify**, and expand **Advanced Settings**.

1. Open **Proxy**, and then select **Manual proxy**.

    - Enter the emulator loopback address as a proxy address. For the state Android emulators, the address is **10.0.2.2**.

    - Enter the proxy port. Use the port configured in the Fiddler Everywhere application (configurable through **Settings** > **Connections** > **Fiddler listens on port...** ). The default port is **8866**.

1. Install the root certificate of Fiddler Everywhere on the Android device.

    1. Open a mobile browser on the Android device and type the http://ipv4.fiddler:8866 echo service address or http://10.0.2.2:8866.

    1. Tap the option to download the certificate. Then save and install as follows:

        1. Install the downloaded Fiddler certificate in the device certificate storage. The settings location depends on the Android version but is usually located under **Settings** > **Security** > **Encryption and Credentials** > **Install a certificate** > **CA Certificate**.

    1. Ensure that the Fiddler Everywhere certificate is installed as a user certificate in the **Settings** > **Security** > **Encryption & Credentials** > **User** tab.


With the above setup, you can capture traffic from your Android mobile browser. Test your configuration as follows:

- In Fiddler Everywhere, ensure that **Settings** > **Connections** > **Allow remote computers to connect** is checked.

- On your emulator, open **Google Chrome** (or any other mobile browser that respects the proxy settings) and type [https://example.com](https://example.com).

- In the Fiddler Everywhere application, observe the HTTP/HTTPS traffic being captured.


## Capture Browser Traffic

Now you can immediately capture HTTP/HTTPS traffic from mobile browsers. For example, open a Chrome browser on your Android device, type an address of your choice, and observe the captured traffic in the **Live Traffic** section of Fiddler Everywhere. 

To differentiate the traffic that comes from the mobile device from the one that is being captured from the Fiddler Everywhere host machine, you can apply a **Client IP** column filter (for example, while using the mobile device IP) or a **Process** column filter (while using the device process name).

>important When you've finished debugging, remove the WiFi proxy from your Android device to regain connectivity.

## Capture Android Application Traffic

Most production-ready applications explicitly restrict user-installed certificates' usage, which means that Fiddler Everywhere won't complete the TLS handshake and decrypt their HTTPS traffic. However, you can capture traffic from applications in active development, which means you have access to the code of that application. 

1. (For Android API 24 and later) Add the following code to the `Android/src/main/res/xml/network_security_config.xml` file:

    ```XML
    <?xml version="1.0" encoding="utf-8"?>
    <network-security-config>
        <base-config>
            <trust-anchors>
            <!-- Trust preinstalled CAs -->
            <certificates src="system" />
            <!-- HERE: Additionally trus user-added CAs -->
            <certificates src="user"/>
        </trust-anchors>
        </base-config>
    </network-security-config>
    ```

1. In the `AndroidManifest.xml_` file, reference the `network-security-config` from the previous step through a parameter in the `application` tag:

    ```XML
    android:networkSecurityConfig="@xml/network_security_config"
    ```

    For example:

    ```XML
        <application
            android:name="com.tns.NativeScriptApplication"
            android:allowBackup="true"
            android:icon="@drawable/icon"
            android:networkSecurityConfig="@xml/network_security_config">
            ...
    ```

1. Rebuild the application. Now you can start monitoring its HTTP/HTTPS traffic.

## Additional Resources

* [Directing localhost Requests from Mobile Application through the Fiddler Proxy]({%slug fiddler-localhost-android%})
* [Debugging Mobile Applications with Fiddler Everywhere (Webinar)](https://www.telerik.com/webinars/fiddler/how-to-debug-ios-and-android-mobile-apps-with-fiddler)


## Contact us

If you have more questions or need help configuring your iOS device alongside Fiddler Everywhere, then you can reach out to our support team through the [**Contact Support**]({%slug file-menu%}#contact-support) option.