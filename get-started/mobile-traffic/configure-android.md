---
title: Capture and Inspect Android Traffic
description: Capture and inspect traffic from Android device while using Fiddler Everywhere
type: how-to
slug: capture-mobile-android-traffic
publish: true
position: 10
previous_url: /knowledge-base/configure-android
---

# How to Capture and Inspect Android Traffic

You can use Fiddler Everywhere to capture and inspect traffic that comes from Android devices and emulators. This article describes the required steps.

>caption Environment

|   |   |
|---|---|
| Product   |
| Fiddler Everywhere | 1.0.0 and above  |
| Android | All versions  |

## Prerequisites

- [Fiddler Everywhere client](https://www.telerik.com/download/fiddler-everywhere) installed on your machine.
- The machine running Fiddler Everywhere and the Android device must be **discoverable** on the same network, for example, 192.168.0.0

## Configure Fiddler Everywhere

1. Enable the remote connections in Fiddler Everywhere through **Settings > Connections > Allow remote computers to connect**

2. Note the IP address of the machine where Fiddler Everywhere is running. You can use built-in OS tools to obtain the IP address (like **ipconfig** on Windows or **ifconfig** on Linux) or the Fiddler Everywhere connection status icon on the lower right-hand side of the client.
For demonstration purposes, let's assume that the local IP of the Fiddler Everywhere machine is **192.168.0.101**

>important Depending on the environment, an Android **emulator** might not be able to support ICMP, used for "ping". 

## Configure Android Device

The following steps are applicable for **real devices** and **emulators** (also known as AVDs) with some minor differences as described below.

1. Check Android device IP address 
    1. Open the connected Wifi and tap on **Settings**.
    1. Expand **Advanced Settings**.
       - (**Real devices only**) Note the IP address of the real Android device. For demonstration purposes, let's assume the device IP is **192.168.0.222**
       - (**Android emulators only**) Note the IP address of the emulator. In most cases, the Android emulator IP is of kind **10.0.2.XXX** (Note: For GenyMotion emulator, the IP by default is **10.0.3.XXX**).

1. Modify Android device Proxy
    1. Open the connected Wifi and tap on **Settings**.
    1. Select **Edit** and expand **Advanced Settings**. You might have to touch and hold the connected network's name on older Android versions and then tap on **Modify** and expand **Advanced Settings**.
    1. On **Proxy**, select **Manual proxy**.
       - (**Real devices only**) Enter the IP address of the computer running Fiddler Everywhere, for example, **192.168.0.101**.
       - (**Android emulators only**) Enter the IP address of the emulator's gateway. In most cases, the Android emulator gateway IP is **10.0.2.2** (Note: For the GenyMotion emulator, the default gateway IP is **10.0.3.2**).
    1. Enter the proxy port. Use the port configured in the Fiddler Everywhere client. The default port is **8866** (it can be changed from the Fiddler Everywhere [connections settings]({%slug connections-submenu%}#setting-proxy-port)).
    1. Tap **_Save_**.

1. Install the Fiddler root certificate on the Android device.
    1. Open a browser on the Android device and type the Fiddler echo service address: **http://ipv4.fiddler:8866**
    1. Tap the option to download the certificate.
    1. In the prompt window, enter a certificate name and press **Save**.
    1. Install the downloaded Fiddler certificate in the device certificate storage (the settings location depends on the Android version but usually is located under **Settings_ > Security > Encryption and Credentials > Install a certificate**)

## Inspect Browser Traffic

With all of the above done, you can immediately monitor HTTP/HTTPS traffic from mobile browsers. For example, open a Chrome browser on your Android device, type an address of your choice, and observe the traffic being captured in the **Live Traffic** section of Fiddler Everywhere.

>tip Once you’re done debugging, don’t forget to remove the WiFi proxy from your Android device.

## Inspect Android Application Traffic

You can monitor traffic from apps in active development (an application for which you have access to the codebase). For Android API 24 and above, you also need to add the following code to the app:

1. Add this to **Android/src/main/res/xml/network_security_config.xml**:

    ```XML
    <?xml version="1.0" encoding="utf-8"?>
    <network-security-config>
        <base-config>
            <trust-anchors>
            <!-- Trust preinstalled CAs -->
            <certificates src="system" />
            <!-- HERE: Additionaly trus user added CAs -->
            <certificates src="user"/>
        </trust-anchors>
        </base-config>
    </network-security-config>
    ```

1. In the **_AndroidManifest.xml_** file, reference the `network-security-config` from step 1 through a parameter in the `application` tag:

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

1. Rebuild the app, and you can start monitoring its HTTP/HTTPS traffic.

>tip Want to learn more about using Fiddler Everywhere to debug mobile apps? Check out our [webinar on mobile app debugging](https://www.telerik.com/webinars/fiddler/how-to-debug-ios-and-android-mobile-apps-with-fiddler) with Fiddler!
