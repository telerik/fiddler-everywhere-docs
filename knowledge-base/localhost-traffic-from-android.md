---
title: Capture host localhost traffic from connected Android device
description: "Learn how to direct localhost traffic from Android browser through the Fiddler Everywhere proxy"
type: how-to
slug: fiddler-localhost-android
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere |
| Product Version | 1.0.0 and above  |

## Description

How can I configure Fiddler Everywhere to direct localhost traffic from the Android loopback address to the host localhost address?

## Solution

Each Android device and emulator uses special alias like 10.0.2.2 (the actual address might differ on different emulators) to your host loopback interface (i.e., 127.0.0.1 on your development machine). In order to redirect the traffic directed to the aliased loopback address to the actual localhost and port on the developers machine, you need to [set a rule]({slug rules-general}#adding-new-rules) that will make Fiddler Everywhere acts as a reverse proxy.

By defaut, the Fiddler Everywhere proxy works on port 8866 so you need to redirect the mobile localhost alias on port 8866 to the actual endpoint address and port on the developers machine.


### Example

Let's assume that the loopback alias on the Android devie is 10.0.2.2 and your device is already[ properly configured to work alongside a Fiddler Everywhere proxy]({%slug capture-mobile-android-traffic%}). Additionally, let's also assume that your developer machine (which is also the Fiddler Everywhere host machine) is running a test web service on the localhost address with port 4000. The service is accessible from the developers machine browser through `http://localhost:4000` and you would like to test that service thought the mobile browsers with the Fiddler Everywhere proxy in the middle. 
