---
title: Capturing and Inspecting Android Traffic
description: "Capture and inspect traffic from Android devices while using the Fiddler Everywhere web-debugging HTTP-proxy tool."
type: how-to
slug: capture-mobile-android-traffic
publish: true
position: 50
previous_url: /knowledge-base/configure-android, /get-started/mobile-traffic/configure-android
---

# Capturing and Inspecting Android Traffic

This article describes how use Fiddler Everywhere to capture and inspect traffic that comes from Android devices and emulators.

To capture and inspect traffic on Android devices, perform the following steps:

1. [Provide the prerequisites](#prerequisites).
1. [Configure Fiddler Everywhere](#configuring-fiddler-everywhere).
1. [Configure the Android device](#configuring-the-android-device).
1. [Inspect the browser traffic](#inspecting-the-browser-traffic).
1. [Inspect the Android application traffic](#inspecting-the-android-application-traffic).

## Prerequisites

- Install [Fiddler Everywhere v. 1.0.0 and above](https://www.telerik.com/download/fiddler-everywhere).
- Install Android.
- Make sure that the machine on which Fiddler Everywhere and the Android device run is discoverable on the same network&mdash;for example, 192.168.0.0.

## Configuring Fiddler Everywhere

1. Enable the remote connections in Fiddler Everywhere through **Settings** > **Connections** > **Allow remote computers to connect**.
2. Check the IP address of the machine where Fiddler Everywhere is running. To obtain the IP address, for example, **ipconfig** on Windows or **ifconfig** on Linux, you can use the built-in OS tools or the Fiddler Everywhere connection status icon on the lower right-hand side of the client. For demonstration purposes, let's assume that the local IP of the Fiddler Everywhere machine is 192.168.0.101.

>important Depending on the environment, an Android emulator might not support ICMP, which is used for "ping".

## Configuring the Android Device

The following steps are applicable for real devices and emulators (also known as AVDs) with some minor differences as described below.

1. Check the IP address of the Android device.

    1.1 Open the connected Wi-Fi and tap **Settings**.

    1.2 Expand **Advanced Settings**.

       - (Real devices only) Check the IP address of the actual Android device. For demonstration purposes, let's assume the device IP is 192.168.0.222.

       - (Android emulators only) Check the IP address of the emulator. In most cases, the IP of the Android emulator is of the 10.0.2.XXX type. For the GenyMotion emulator, the default IP is of the 10.0.3.XXX type.

1. Modify the proxy of the Android device.

    2.1 Open the connected Wi-Fi and tap **Settings**.

    2.2 Select **Edit** and expand **Advanced Settings**. For previous Android versions you might have to touch and hold the name of the connected network, then tap **Modify**, and expand **Advanced Settings**.

    2.3 On **Proxy**, select **Manual proxy**.

       - (Real devices only) Enter the IP address of the computer on which Fiddler Everywhere runs&mdash;for example, 192.168.0.101.

       - (Android emulators only) Enter the IP address of the emulator gateway. In most cases, the IP of the Android emulator gateway is 10.0.2.2. For the GenyMotion emulator, the default gateway IP is 10.0.3.2.

    2.4 Enter the proxy port. Use the port configured in the Fiddler Everywhere client. The default port is 8866. To change it, go to the Fiddler Everywhere [connections settings]({%slug connections-submenu%}#setting-proxy-port)).

    2.5 Tap **Save**.

1. Install the root certificate of Fiddler Everywhere on the Android device.

    3.1 Open a browser on the Android device and type the http://ipv4.fiddler:8866 echo service address of Fiddler Everywhere.

    3.2 Tap the option to download the certificate.

    3.3 In the prompt window, enter a certificate name and tap **Save**.

    3.4 Install the downloaded Fiddler certificate in the device certificate storage. The settings location depends on the Android version but is usually located under **Settings_** > **Security** > **Encryption and Credentials** > **Install a certificate**.

## Inspecting the Browser Traffic

Now you can immediately monitor HTTP/HTTPS traffic from mobile browsers. For example, open a Chrome browser on your Android device, type an address of your choice, and observe the captured traffic in the **Live Traffic** section of Fiddler Everywhere.

>tip Once you’re done debugging, remove the Wi-Fi proxy from your Android device.

## Inspecting the Android Application Traffic

You can monitor traffic from applications that are in active development, which means that you have access to the codebase of that application.

1. For Android API 24 and above, add the following code to the `Android/src/main/res/xml/network_security_config.xml` file:

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

For more information on debugging mobile applications with Fiddler Everywhere, check out the [webinar on mobile app debugging](https://www.telerik.com/webinars/fiddler/how-to-debug-ios-and-android-mobile-apps-with-fiddler).
