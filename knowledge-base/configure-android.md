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

1. Enable the remote connecions in Fiddler Everywhere client via _Settings_ > _Connections_ > _Allow remote computers to connect_

2. Remember the IP address of the machine on which Fiddler Everywhere is running. You can use build-in OS tools to obtain the IP adress (like **ipconfig** on Windows or **ifconfig** on Linux) or the Fiddler Everywhere popup status on the bottom right part of the client. For demonstration purposes let's assume that the local IP used by the machine (which runs Fiddler Everywher) is 192.168.0.109

### Configure Android Device

1. Check Android device IP address 


- Open the connected Wifi and tap on "Settings"
- Extended "Advanced Settigns"
- Get the IP address of the device e.g. 192.168.0.101

2. Modify Android device Proxy
- Open the connected Wifi and tap on "Settings"

- Press "Edit" and expand "Advanced settings". 
On older Android version make a long-press on network name and tap on "Modify" and expand "Advanced settings"

- On "Proxy" select "Manual proxy"
  - As IP address put the adress of the computer (on which Fiddler Everywhere client is running) e.g. 192.168.0.6
  - As port use the port set in Fiddler Everywhere client. By default it is 8866
  - Tap "Save"

3. Install the certificate on the Android device
- open a browser on the device and type http://ipv4.fiddler
- Tap to download the certificate
- Enter a certificate name and press Save

## Inspect Browser Traffic

1. Start monitoring HTTP/HTTPS traffic from the browsers

## Inspect Application Traffic

1. You will be able to monitor traffic from apps that are actively developed (or to where you have access to the codebase)
- For API24  and above an additional code needs to be introduced to the app

- Put in Android/src/main/res/xml/network_security_config.xml

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

- Then in AndroidManiFiddler Everywhere clientst.xml add the above file under application

android:networkSecurityConfig="@xml/network_security_config"

- rebuild the app and you can start monitoring its HTTP/HTTPS traffic



> Note: Want to learn more about using Fiddler Everywhere to debug mobile apps? Check out our [webinar on mobile app debugging](https://www.telerik.com/webinars/fiddler/how-to-debug-ios-and-android-mobile-apps-with-fiddler) with Fiddler! 