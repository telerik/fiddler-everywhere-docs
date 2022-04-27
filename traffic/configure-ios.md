---
title: Capturing and Inspecting iOS Traffic
description: "Capture and inspect traffic from iOS devices and simulators while using the Fiddler Everywhere web-debugging HTTP-proxy tool."
type: how-to
slug: capture-mobile-ios-traffic
publish: true
position: 40
previous_url: /knowledge-base/configure-ios, /get-started/mobile-traffic/configure-ios, /get-started/traffic/configure-ios
---

# Capturing and Inspecting iOS Traffic

This article describes how to use Fiddler Everywhere to capture and inspect traffic that comes from iOS devices and simulators.

To capture and inspect traffic on iOS devices or simulators, perform the following steps:

1. [Provide the prerequisites](#prerequisites).
1. [Configure Fiddler Everywhere](#configure-fiddler-everywhere).
1. [Configure the iOS device](#configure-the-ios-device).
1. [Configure the iOS simulator](#configure-the-ios-simulator).
1. [Inspect the traffic](#inspect-the-browser-traffic).

## Prerequisites

- Install [Fiddler Everywhere v. 1.0.0 and above](https://www.telerik.com/download/fiddler-everywhere).

- Use an iOS device or an iOS simulator within the same local network as the Fiddler Everywhere host.

## Configure Fiddler Everywhere

1. Enable the remote connections of Fiddler Everywhere through **Settings** > **Connections** > **Allow remote computers to connect**.

1. Check the IP address of the machine where Fiddler Everywhere is running. To obtain the IP address, for example, **ipconfig** on Windows or **ifconfig** on Linux, you can use the built-in OS tools or the Fiddler Everywhere popup status on the bottom-right part of the client. For demonstration purposes, let's assume that the local IP of the Fiddler Everywhere machine is 192.168.0.101.

1. Proceed with the iOS configuration. Note that [real iOS devices](#configure-the-ios-device) have different configuration than [iOS simulators](#configure-the-ios-simulator).

## Configure the iOS Device

To configure real iOS devices to work alongside a Fiddler Everywhere host, refer to the following steps. For more information on working with iOS simulators, refer to the section about [configuring iOS simulators](#configure-the-ios-simulator). Both real iOS devices and iOS simulators have to be on the same network and be discoverable.


1. On your iOS device, go to **Settings** > **WiFi**.

1. Find your current network and click the **i** icon.

1. Scroll to the bottom and choose **Configure Proxy** > **Manual**.

1. In the **Server** field, type your IP address&mdash;for example, 192.168.0.101.

1. Type the Fiddler Everywhere listening port (8866 by default) in the **Port** field. Tap **Save**.

    >tip With the current setup, you will be able to capture non-secure HTTP traffic. However, if you try to open any HTTPS website, you'll get the "This site's security certificate is not trusted!" error. To fix this issue, trust the Fiddler root certificate.

1. Open a browser on the iOS device and type the http://ipv4.fiddler:8866 echo service address of Fiddler Everywhere.

1. Click the Fiddler root certificate link to download it.

1. On your iOS device, open **General** and install the certificate through **Profile Downloaded**. Note that this option will appear only after the certificate is downloaded.

1. (For iOS 10.3+) Go to **Settings** > **General** > **About** > **Certificate Trust Settings** and enable full trust for the **DO_NOT_TRUST_FiddlerRoot** certificate. Note that you will see the **DO_NOT_TRUST_FiddlerRoot** certificate only after completing the previous step.


## Configure the iOS Simulator

The later versions of the iOS simulators, which are accessible through XCode, use the OS system proxy by default. However, due to [a security limitation](https://developer.apple.com/forums/thread/124056), the iOS simulator won't access the folders containing the trust certificates. To capture HTTPS traffic, you must manually export the Fiddler Everywhere certificate and install it on your iOS simulator.


1. In Fiddler Everywhere, go to **Settings** > **HTTPS** > **Advanced Settings**.

1. Use the **Export root certificate** to export the Fiddler Everywhere certificate to your **Desktop** folder.

1. Start the iOS simulator.

1. Drag and drop the exported certificate in the simulator.

1. In the iOS simulator, go to **Settings** > **General** > **About** > **Certificate Trust Settings** and enable full trust for the **DO_NOT_TRUST_FiddlerRoot** certificate. Note that you will see the **DO_NOT_TRUST_FiddlerRoot** certificate only after completing the previous step.

## Inspect the Traffic

Now you can immediately monitor HTTP/HTTPS traffic from your iOS device. For example, open a Safari browser on your iOS device, type an address of your choice, and observe the captured traffic in the **Live Traffic** section of Fiddler Everywhere.

>tip When you've finished debugging, remove the WiFi proxy from your iOS device.
