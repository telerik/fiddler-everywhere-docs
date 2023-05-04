---
title: Troubleshoot Fiddler Everywhere not Capturing Traffic
description: "Cases where Fiddler Everywhere might fail to capture your HTTP(S) traffic and steps to resolve them."
type: how-to
slug: troubleshoot-cno-traffic
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product  | all versions of Fiddler Everywhere  |
| Supported OS | Windows, macOS, Linux |


## Description

Once Fiddler Everywhere is up and running, you might find that it is unable to capture HTTP(S) traffic. This article lists some of the possible reasons why this behavour might occur and provides guidance on how possible solutions.




## System Capturing Not Working

**Observations:** 
- The Fiddler Everywhere application is up and running.
- The Fiddler root CA is installed.
- The system capturing is toggled ON (through the **Live Traffic** switch).

**Result**: No HTTP(S) traffic appears in the Live Traffic grid.

## Independent Browser Instance Capturing Not Working

**Observations:** 
- The Fiddler Everywhere application is up and running.
- The **Browser** option opens new browser instance.

**Result**: No HTTP(S) traffic appears in the Live Traffic grid.

## Terminal Instance Capturing Not Working

**Observations:** 
- The Fiddler Everywhere application is up and running.
- The **Terminal** option opens new terminal instance.

**Result**: An HTTP(S) request made through the terminal instance does not appear in the Live Traffic grid.


## Capturing Only HTTP Traffic (Fails to Capture HTTPS)

**Observations:** 
- Fiddler Everywhere captures only non-secure HTTP traffic and CONNECT Tunnels. 
- The proxy fails to capture HTTPS traffic. 
- The client application returns errors related to failed TLS handshake.
- The client application returns errors related to security risks and possible MITM attack.

**

By default, Fiddler Everywhere acts as a HTTP proxy and is able to capture only non-secure HTTP traffic. To be able to capture and decryped HTTPS traffic, Fiddler Everywhere needs to act as a TLS proxy. For that to happen you need to [install and trust the Fiddler root CA]({%slug trust-certificate%}) (certificate authority). 

_Fiddler Everywhere indicators that HTTPS capturing is disabled_
![Fiddler Everywhere indicators that HTTPS capturing is disabled](../images/kb/no-capture/no-https-indicators.png)