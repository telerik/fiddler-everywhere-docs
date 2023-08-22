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

This article describes using Fiddler Everywhere to capture HTTPS traffic from Android devices and emulators. Fiddler Everywhere provides [step-by-step tutorial to automate the configuration of the Fiddler host and the remote Android device](#capturing-remote-android-traffic-automated). Additionally, you can follow the detailed guides to [manually configure real Android devices](#capturing-remote-android-traffic-manual-setup) or [Android emulators](#configuring-the-fiddler-proxy-on-android-emulator).

## Prerequisites

- Install the latest version of [Fiddler Everywhere](https://www.telerik.com/download/fiddler-everywhere).

- Connect an Android device to the same network or use an Android emulator on the Fiddler Everywhere host machine. Ensure that the machine on which Fiddler Everywhere and the Android device run is discoverable on the same network.

>important It's common for many company networks to be restricted by security tooling or administrative policies. To capture remote traffic, ensure that your system administrators are not limiting the network discovery and usage, or consider using a public hotspot for your Fiddler host and remote device.


## Capturing Remote Android Traffic (Automated)

Fiddler Everywhere provides an automated guide to configure remote Android capturing through the following steps:

1. Start Fiddler Everywhere. 

1. Open the **Home** pane.

1. Open the **Remote Devices** screen.

1. Open the **Android** tutorial and follow the instructions.

The tutorial requires administrative privileges for the current user (on the Android device) to install Fiddler's CA (certificate authority) and to set manual proxy. Once the steps are executed, you can immediately capture HTTPS traffic from the remote Android device.


## Capturing Remote Android Traffic (Manual Setup)

### Configuring Fiddler Everywhere Host

1. Enable the remote connections in Fiddler Everywhere through **Settings** > **Connections** > **Allow remote devices to connect**. Combine it with **Keep it ON after app restart** if you want to persist the setting for subsequent application startups.

1. Check the local IP address of the Fiddler Everywhere application host. You can use [the connection status on the lower right-hand side]({%slug connections-section%}) to obtain the host IP address. Alternatively, you can get the IP address using a terminal command like  **ipconfig**/ **ifconfig** (depending on the OS). For demonstration purposes, let's assume that the local IP of the Fiddler Everywhere host machine is **192.168.100.50**. 

>tip If you only need to capture remote traffic, then there is no need to install the Fiddler CA on the Fiddler host machine. You only need to download and install the Fiddler CA on the remote device. Once the proxy configuration is in place, Fiddler Everywhere will automatically capture and decrypt the remote HTTPS traffic.

### Configuring the Fiddler proxy on Android Device

The following steps apply to real Android devices with access to the Internet through the same network as the Fiddler Everywhere host machine.

1. Install the Fiddler's Certificate Authority (CA) on the Android device.

    1. Open a mobile browser on the Android device and type the `http://<fiddler-host-IP>:8866` echo service address of Fiddler Everywhere.

        >tip Instead of the special Fiddler echo service address, you can use the Fiddler host IP as follows: `http://<fiddler-host-IP>:8866`.

    1. Tap the option to download the CA. 

        >important Do not tap the CA directly, as this won't trigger the install. Instead, go ahead with the instructions as described in the next step.
            
    1. Install the downloaded Fiddler CA in the device certificate storage. The settings location depends on the Android version but is usually under **Settings** > **Security** > **Encryption and Credentials** > **Install a certificate** > **CA Certificate**.

    1. Ensure the Fiddler CA is installed and trusted through the **Settings** > **Security** > **Encryption & Credentials** > **Trusted Credentials** > **User** tab.

1. Set the Fiddler Everywhere proxy on the Android device or emulator.

    1. Open **Settings** > active WiFi connection > **Proxy**.

    1. From the **Proxy** option, select **Manual proxy**.

     - Enter the IP address of the Fiddler Everywhere host&mdash;for example, `192.168.100.50`.

     - Enter the Fiddler Everywhere proxy port. By default, the port is `8866`.


You can capture traffic from your Android mobile browser with the above setup. Test your configuration as follows:

1. On your emulator, open **Google Chrome** (or any other mobile browser that respects the proxy settings) and type [https://example.com](https://example.com)

1. Observe the secure traffic being captured back in Fiddler Everywhere.


## Configuring the Fiddler proxy on Android Emulator

The Android Virtual Devices (a.k.a. AVDs or Android emulators) can use Fiddler Everywhere as a proxy by directly configuring the Android operating system (like on real device). The crucial difference is that the Fiddler Everywhere proxy address will be the loopback address of the emulator. Check the emulator documentation for the IP address used as a loopback address. In most cases, the loopback alias of the Android emulator is the `10.0.2.2`. Note that some third-party emulators are using different alias for the loopback address.

1. Start the emulator, open the simulated WiFi, tap **Settings**, and expand **Advanced Settings**.

1. Select **Edit** and expand **Advanced Settings**. For some older Android versions, you have to touch and hold the name of the connected network, then tap **Modify**, and expand **Advanced Settings**.

1. Open **Proxy**, and then select **Manual proxy**.

    - Enter the emulator loopback address as a proxy address. For the state Android emulators, the address is `10.0.2.2.

    - Enter the proxy port. Use the port configured in the Fiddler Everywhere application (configurable through **Settings** > **Connections** > **Fiddler listens on port...** ). The default port is `8866`.

1. Install the Fiddler Everywhere root CA on the Android device.

    1. Open a mobile browser on the Android device and type the `http://ipv4.fiddler:8866` echo service address or `http://10.0.2.2:8866`.

    1. Tap the option to download the CA. Then save and install as follows:

        1. Install the downloaded Fiddler CA in the device certificate storage. The settings location depends on the Android version but is usually under **Settings** > **Security** > **Encryption and Credentials** > **Install a certificate** > **CA Certificate**.

    1. Ensure that the Fiddler Everywhere certificate installs as a user certificate in the **Settings** > **Security** > **Encryption & Credentials** > **User** tab.


You can capture traffic from your Android mobile browser with the above setup. Test your configuration as follows:

- In Fiddler Everywhere, ensure that **Settings** > **Connections** > **Allow remote devices to connect** is checked. Combine it with **Keep it ON after app restart** if you want to persist the setting for subsequent application startups.

- On your emulator, open **Google Chrome** (or any other mobile browser that respects the proxy settings) and type [https://example.com](https://example.com).

- In the Fiddler Everywhere application, observe the HTTP/HTTPS traffic being captured.


## Capture Mobile Browser Traffic

Once the remote Android device is configured, you can immediately capture HTTP/HTTPS traffic from mobile browsers. For example, open a Chrome browser on your Android device, type an address of your choice, and observe the captured traffic in the **Live Traffic** grid. 

To differentiate the traffic that comes from the mobile device from the one that is being captured from the Fiddler Everywhere host machine, you can apply a **Client IP** column filter (for example, while using the mobile device IP) or a **Process** column filter (while using the device process name).

>important When you've finished debugging, remove the WiFi proxy from your Android device to regain connectivity.

## Capture Mobile Application Traffic

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

If you have more questions or need help configuring your iOS device alongside Fiddler Everywhere, you can contact our support team through the **Contact Support** option.