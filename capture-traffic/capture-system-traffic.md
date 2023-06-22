---
title: Capturing System Traffic
description: "Capture HTTPS traffic that goes through the operating system proxy."
slug: capture-system-traffc
publish: true
position: 5
previous_url: /user-guide/live-traffic
---


This article describes how to use Fiddler's system capturing mode where the term **system traffic** refers to all HTTP, HTTPS, WebSocket, and gRPC traffic that is directed to go through the operating system proxy. settings.

## Capturing System Traffic

Once [Fiddler Everywhere is installed]({%slug login-and-update%}), and it's [root certificate trusted]({%slug trust-certificate%}), you can use the web-traffic capturing of the proxy client.

The client logs all HTTP and HTTPS traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;Google Chrome, Firefox, various desktop application, CLI applications, and virtually any other application that respect the OS proxy settings. You can use the captured traffic to debug issues, mock HTTP requests and responses, identify performance bottlenecks, share it with collaborators, and more.

To capture system traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. 

1. Enable system capturing as described in our get started tutorials for [Windows]({%slug first_steps_windows%}#capture-system-traffic), [macOS]({%slug first_steps_macos%}#capture-system-traffic), or [Linux]({%slug first_steps_linux%}#capture-system-traffic).

>tip When the switch **System Proxy** is toggle on, open a browser and type an arbitrary web address. As a result, Fiddler Everywhere will immediately intercept the request, and **Live Traffic** grid will be populated.


## Enable and Disable System Capturing

You can manually enable and disable the system proxy capturing mode.

1. Start Fiddler Everywhere.

1. Open the **Live Traffic** pane.

1. Toggle the **System Proxy** switch ON or OFF to enable and disable the system capturing mode.

>important Fiddler Everywhere needs to install its root CA to the operating system certificate manager to capture secure traffic. You can do that by [following the get started steps tutorials](#capturing-system-traffic) or by manually installing the Fiddler root CA through **Settings > HTTPS > Trust Root Certificate** and then by enabling **Settings > HTTPS > Capture HTTPS Traffic**.

