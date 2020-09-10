---
title: Capture and Inspect Android Traffic with Fiddler Everywhere
description: An article on how to capture and inspect traffic from Android device while using Fiddler Everywhere
type: how-to
slug: capture-android-traffic
tags: capture Android traffic, inspect Android traffic, mobile traffic, https, Android application, Fiddler Everywhere Android
publish: true
res_type: kb
---


## Prerequisites

First you have to have Fiddler Everywhere installed on your desktop machine. The PC and the Android device should be **discoverable** on the same network.

## Configuration

### Configure Fiddler Everywhere

1. Enable the remote connecions in Fiddler Everywhere client via **_Settings_ > _Connections_ > _Allow remote computers to connect_**

2. Remember the IP address of the machine on which Fiddler Everywhere is running. You can use build-in OS tools to obtain the IP adress (like **ipconfig** on Windows or **ifconfig** on Linux) or the Fiddler Everywhere popup status on the bottom right part of the client. 

For demonstration purposes let's assume that the local IP used by the machine (which runs Fiddler Everywher) is **192.168.0.101**

### Configure Android Device

1. Check Android device IP address 

- Open the connected Wifi and tap on **_Settings_**.
- Extended **_Advanced Settigns_**.
- Get the IP address of the device. For demonstration purposes let's assume the device IP is **192.168.0.222**


2. Modify Android device Proxy
- Open the connected Wifi and tap on **_Settings_**.

- Press **_Edit_** and expand **_Advanced Settigns_**.
On older Android version you might have to do a long-press on the connefcted network name and then tap on **_Modify_** and expand **_Advanced settings_**.

- On **_Proxy_** select **_Manual proxy_**.
  - As IP address put the adress of the computer (on which Fiddler Everywhere client is running), for example **192.168.0.101**
  - As port use the port set in Fiddler Everywhere client. The default port is **8866** (it could be changed from the Fiddler Everywhere settings). 
  - Tap **_Save_**.

3. Install the trust certificate on the Android device.
- Open a browser on the device and type the Fiddler echo service address: **http://ipv4.fiddler**
- Tap the option to download the certificate.
- In the prompt windows, enter a certificate name and press **_Save_**.

## Inspect Browser Traffic

WIth all of the above done, you can immediatly start monitoring HTTP/HTTPS traffic from the mobile browsers. For example open a CHrome browser on your Andorid device, type an address of your choice and observe the traffic being captured in the **_Live Traffic_** section of Fiddler Everywhere client.

## Inspect Application Traffic

1. You will be able to monitor traffic from apps that are in active development (application for which you have access to the codebase). For Android API24 and above, an additional code needs to be introduced to the app as follows:

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

For exmaple:
```XML
	<application
		android:name="com.tns.NativeScriptApplication"
		android:allowBackup="true"
		android:icon="@drawable/icon"
        android:networkSecurityConfig="@xml/network_security_config">
```

- rebuild the app and you can start monitoring its HTTP/HTTPS traffic



> Note: Want to learn more about using Fiddler Everywhere to debug mobile apps? Check out our [webinar on mobile app debugging](https://www.telerik.com/webinars/fiddler/how-to-debug-ios-and-android-mobile-apps-with-fiddler) with Fiddler! 