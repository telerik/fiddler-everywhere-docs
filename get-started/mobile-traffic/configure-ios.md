---
title: Capture and Inspect iOS Traffic
description: An article on how to capture and inspect traffic from iOS device while using Fiddler Everywhere
type: how-to
slug: capture-mobile-ios-traffic
tags: capture iOS traffic, inspect iOS traffic, mobile traffic, https, iOS application, Fiddler Everywhere iOS
publish: true
position: 20
previous_url: /knowledge-base/configure-ios
---

#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |

#### Description

Fiddler Everywhere can be used to capture and inspect traffic that comes from iOS devices and simulators.

## Configure Fiddler Everywhere

1. Enable the remote connections in Fiddler Everywhere client via **_Settings_ > _Connections_ > _Allow remote computers to connect_**
2. Remember the IP address of the machine on which Fiddler Everywhere is running. You can use built-in OS tools to obtain the IP address (like **ipconfig** on Windows or **ifconfig** on Linux) or the Fiddler Everywhere popup status on the bottom right part of the client.
For demonstration purposes, let's assume that the local IP used by the machine (which runs Fiddler Everywhere) is **192.168.0.101**

## Configure iOS Device

With the current setup, you should be able to capture HTTP traffic. However, if you try to open any HTTPS website, you'll get the **_This site's security certificate is not trusted!_** error. To fix this, you should trust the Fiddler root certificate.


1. Go to **_Settings > WiFi_** on your iOS device.
2. Find your current network and click the **i** icon.
3. Scroll to the bottom and choose **Manual** in the **_Configure Proxy_** option.
4. Type your IP address (for example, **192.168.0.101**) in the **Server** field.
5. Type the Fiddler Everywhere listening port (8866 by default) in the **Port** field and finally tap on **Save**.
    >tip With the current setup, you should be able to capture non-secure HTTP traffic. However, if you try to open any **HTTPS** website, you'll get the This site's security certificate is not trusted! error. To fix this, you should trust the Fiddler root certificate.
6. Open a browser on the iOS device and type the Fiddler echo service address: **http://ipv4.fiddler:8866**
7. Click on the Fiddler root certificate link to download it.
8. On your iOS device, open **_General_** and install the certificate via the **_Profile Downloaded_**. Note that this option will appear only after the certificate is downloaded.
9. (iOS 10.3+) Go to **_General > About > Certificate Trust Settings_** and enable full trust for the **DO_NOT_TRUST_FiddlerRoot** certificate. Note that you will see the **DO_NOT_TRUST_FiddlerRoot** certificate only after completing the previous step. 

## Inspect Traffic

With all of the above done, you can immediately monitor HTTP/HTTPS traffic from your iOS device. For example, open a Safari browser on your iOS device, type an address of your choice, and observe the traffic being captured in the **_Live Traffic_** section of Fiddler Everywhere.

>tip Once you're done debugging, don't forget to remove the WiFi proxy from your iOS device.