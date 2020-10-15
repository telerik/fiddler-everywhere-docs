---
title: Capture and Inspect Android Traffic with Fiddler Everywhere
description: An article on how to capture and inspect traffic from Android device while using Fiddler Everywhere
type: how-to
slug: capture-android-traffic
tags: capture Android traffic, inspect Android traffic, mobile traffic, https, Android application, Fiddler Everywhere Android
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.2 and above  |

#### Description

Fiddler Everywhere can be used to capture and inspect traffic that comes from Android devices and emulators.

## Prerequisites

- [Fiddler Everywhere client](https://www.telerik.com/download/fiddler-everywhere) installed on your machine.
- The computer (that holds Fiddler Everywhere) and the Android device should be **discoverable** on the same network.

## Configure Fiddler Everywhere

1. Enable the remote connections in Fiddler Everywhere client via **_Settings_ > _Connections_ > _Allow remote computers to connect_**
2. Remember the IP address of the machine on which Fiddler Everywhere is running. You can use built-in OS tools to obtain the IP address (like **ipconfig** on Windows or **ifconfig** on Linux) or the Fiddler Everywhere popup status on the bottom right part of the client.
For demonstration purposes, let's assume that the local IP used by the machine (which runs Fiddler Everywhere) is **192.168.0.101**

>important Depending on the environment, an Android **emulator** might not be able to support ICMP, used for "ping". 

## Configure Android Device

The steps below are applicable for **real devices** and **emulators** (a.k.a. AVDs), but there are significant differences in how emulators access the internet via the local network. Depending on whether you are using a real device or an emulator, you should apply the proper sub-step.

1. Check Android device IP address 
    - Open the connected Wifi and tap on **_Settings_**.
    - Extended **_Advanced Settings_**.
    - (**Real devices only**) Get the IP address of the real Android device. For demonstration purposes, let's assume the device IP is **192.168.0.222**
    - (**Android emulators only**) Get the IP address of the emulator. In most cases, the Android emulator IP is of kind **10.0.2.XXX** (Note: For GenyMotion emulator, the IP by default is **10.0.3.XXX**).
2. Modify Android device Proxy
    - Open the connected Wifi and tap on **_Settings_**.
    - Press **_Edit_** and expand **_Advanced Settings_**.
    You might have to do a long-press on the connected network name on older Android versions and then tap on **_Modify_** and expand **_Advanced Settings_**.
    - On **_Proxy_**, select **_Manual proxy_**.
    - (**Real devices only**) As IP address put the address of the computer (on which Fiddler Everywhere client is running), for example, **192.168.0.101** (see [above](#configure-fiddler-everywhere))
    - (**Android emulators only**) As IP address put the emulator's gateway address, In most cases, the Android emulator gateway IP is **10.0.2.2** (Note: For GenyMotion emulator, the gateway IP by default is **10.0.3.2**).
    - As port use the port set in Fiddler Everywhere client. The default port is **8866** (it could be changed from the Fiddler Everywhere [connections settings]({%slug connections-submenu%}#setting-proxy-port)).
    - Tap **_Save_**.
3. Install the trust certificate on the Android device.
    - Open a browser on the Android device and type the Fiddler echo service address: **http://ipv4.fiddler:8866**
    - Tap the option to download the certificate.
    - In the prompt windows, enter a certificate name and press **_Save_**.

## Inspect Browser Traffic

With all of the above done, you can immediately monitor HTTP/HTTPS traffic from mobile browsers. For example, open a Chrome browser on your Android device, type an address of your choice, and observe the traffic being captured in the **_Live Traffic_** section of Fiddler Everywhere.

>tip Once you’re done debugging, don’t forget to remove the WiFi proxy from your Android device.

## Inspect Android Application Traffic

You will be able to monitor traffic from apps in active development (application for which you have access to the codebase). For Android API 24 and above, an additional code needs to be introduced to the app as follows:

- Put in **_Android/src/main/res/xml/network_security_config.xml_**
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

- Then in the **_AndroidManifest.xml_** file, add the above as reference via a parameter in the **_application_** tag
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
```

- rebuild the app, and you can start monitoring its HTTP/HTTPS traffic



> Note: Want to learn more about using Fiddler Everywhere to debug mobile apps? Check out our [webinar on mobile app debugging](https://www.telerik.com/webinars/fiddler/how-to-debug-ios-and-android-mobile-apps-with-fiddler) with Fiddler! 