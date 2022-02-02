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

Each Android device and emulator uses special alias like 10.0.2.2 (might differ on different emulators) to your host loopback interface (i.e., 127.0.0.1 on your development machine). In order to direct the traffic generated from the alias address
