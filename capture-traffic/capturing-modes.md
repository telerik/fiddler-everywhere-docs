---
title: Capturing Modes
description: "Capturing modes in Fiddler Everywhere as forward HTTPS proxy."
slug: capture-traffic-get-started
publish: true
position: 5
previous_url: /get-started/capture-traffic, /knowledge-base/capture-and-inspect-web-traffic, /get-started/traffic/capture-traffic, /traffic/capture-traffic
---

# Capturing Modes

Fiddler Everywhere is a local forward TLS proxy that can capture HTTP(S), WebSocket, and gRPC traffic. The traffic can be generated from locally installed applications or remote devices (within the same local network).

The application supports capturing modes such as automatic [system capturing](#system-capturing), [independent browser capturing](#independent-browser-capturing), and [terminal capturing](#terminal-capturing). Upon startup, Fiddler Everywhere will also capture traffic from any application [explicitly set to use Fiddler's address and port as an HTTP proxy](#explicit-capturing), which can include [traffic from remote devices](#remote-traffic-capturing).

## Capturing Modes Comparison

The following table demonstrates the significant differences between the two functionalities.

| Feature          | System Capturing | Independent Browser Capturing  | Terminal Capturing | Explicit Capturing 
|:-----------------|:----------------|:-----------------|:-----------------|:-----------------
| Needed Configuration       | Requires installation of the Fiddler CA | No additional configuration needed | No additional configuration needed | Requires installation of the Fiddler CA 
| OS Proxy Modification | Modifies the OS proxy settings | Configures the proxy only within the browser instance | Configures the proxy only for the terminal instance | Requires manual proxy configuration for the client application
| Fiddler CA Installation | Automated CA installation available | Configures the CA for the browser instance | Configures the CA for the terminal. | Requires manual installation of the Fiddler CA within the app's preferred certificate manager
| Browser traffic capturing   | Yes  | Yes (Chromium browsers) | n/a | Yes 
| Application traffic capturing | Yes | Browser traffic only | Terminal traffic only | Yes
| Remote traffic capturing | Yes  | n/a | n/a | Yes 
| Android traffic capturing | Yes | n/a | n/a | Yes
| iOS traffic capturing | Yes  | n/a | n/a | Yes
| Administrative access requirements | Requires rights to install the Fiddler CA and modify the OS proxy  | Requires rights to start a browser with custom parameters | Requires rights to start a terminal with custom parameters | Depends on the app requirements
|  VPN compatibility    | Limited VPN support | Yes | Yes | Depends on the app requirement
| Capturing specifics  | Captures HTTPS from the operating system proxy | Captures HTTPS from the independent browser | Captures HTTPS from a terminal and its child processes |  Captures traffic from the client application
| Supported protocols  | HTTP, HTTPS, WebSocket, gRPC | HTTP, HTTPS, WebSocket  | HTTP, HTTPS, WebSocket, gRPC | HTTP, HTTPS, WebSocket, gRPC


## System Capturing

The client logs all HTTP, HTTPS,  WebSocket, and gRPC traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;browsers, desktop applications, CLI tools, and others. You can use the captured traffic to debug issues, identify performance bottlenecks, or share it with your teammates.

To capture system traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. 

1. Enable system capturing as described in the following OS-specific articles:

    - [Enable the system capturing mode on **Windows**]({%slug first_steps_windows%}#capture-system-traffic)
    - [Enable the system capturing mode on **macOS**]({%slug first_steps_macos%}#capture-system-traffic)
    - [Enable the system capturing mode on **Linux**]({%slug first_steps_linux%}#capture-system-traffic).

![Use the "System Proxy" switch to toggle on and off the system capturing mode](../images/get-started/get-started-toggle.png)

[Learn more about the system capturing mode here...]({%slug capture-system-traffic%})


## Independent Browser Capturing

Independent browser capturing is a feature that allows you to capture traffic from a sandboxed browser instance. Currently, Fiddler Everywhere supports independent browser capturing only for Chromium browsers.

![Use the "Browser" button to capture traffic from independent browser instance](../images/get-started/get-started-open-browser.png)

[Learn more on how to capture traffic from an independent browser instance here...]({%slug capture-browser-traffic%}#capturing-from-terminal)

## Terminal Capturing

Similarly to the independent browser capturing option, Fiddler lets you use a dedicated terminal instance to capture traffic from your preferred terminal on-the-fly. The option is accessible through the **>_ Terminal** button, enabling you to quickly capture and inspect traffic from terminal applications like **Node.js** libraries and **curl**.

![Use the "Terminal" button to capture traffic from Node.js or other terminal application](../images/get-started/get-started-terminal.png)

[Learn more on how to capture traffic from a terminal here...]({%slug capture-terminal-traffic%}#capturing-from-terminal)


## Explicit Capturing

The **Fiddler Everywhere** application acts as a proxy from the moment it starts, and by default, its proxy address is `127.0.0.1:8866`. Any application (including apps from remote PCs, mobile devices, etc.) explicitly directed to go through the Fiddler Everywhere proxy address will have its traffic captured, even when the [system capturing](#system-capturing) is turned off.

Example for explicitly making a curl request that goes through the Fiddler Everywhere proxy:

```curl
curl --url https://www.example.com/ -x 127.0.0.1:8866 --ssl-no-revoke -v
```

## Remote Traffic Capturing

Fiddler Everywhere can capture traffic from remote devices on the same local network. That includes remote PCs, gaming consoles, IoT devices, smartphones, tablets, etc. All you need to do is set the Fiddler proxy address and port as a manual proxy on the remote machine (similar to the [explicit capturing mode](#explicit-capturing)) and install the Fiddler CA (certificate authority) within the remote device certificate manager. 

>tip If you only need to capture remote traffic, then there is no need to install the Fiddler CA on the Fiddler host machine. You only need to download and install the Fiddler CA on the remote device. Once the proxy configuration is in place, Fiddler Everywhere will automatically capture and decrypt the remote HTTPS traffic.


Below you will find some detailed guides for different scenarios:

[Learn more on how to capture traffic from an Android device here...]({%slug capture-mobile-android-traffic%})

[Learn more on how to capture traffic from an iOS device here...]({%slug capture-mobile-ios-traffic%})

[Learn more on how to capture traffic from generic remote devices here...]({%slug fiddler-capture-other-computers%})


## HTTP Version Specifics

Fiddler Everywhere supports HTTP/1.x and HTTP/2 traffic capture and composing. Note the following specifics when handling HTTP/2 requests.

- By default, the HTTP/2 support in Fiddler Everywhere is disabled and needs to be [explicitly enabled through the **Connections** menu]({%slug connections-submenu%}).

- With the **Enable HTTP/2 support** option, the connection between a client and a server will default to HTTP/2 if both support it. When the option is disabled, Fiddler Everywhere forces the communication to go through HTTP/1.1.

- Even with HTTP/2 support enabled, Fiddler Everywhere cannot guarantee that all requests will use HTTP/2. Fiddler will only communicate using the client's version if a client only supports HTTP/1.1 or lower. If the client works with HTTP/2 but the server does not, Fiddler will allow the HTTP/2 request, but internally it will translate the request to HTTP/1.1 when communicating with the server.

- Some browsers will share a single HTTP/2 connection to a website between tabs and keep a connection open even after a tab is closed. That can lead to unexpected behavior with the HTTP/2 support in Fiddler Everywhere, so if you experience similar issues, try to restart the browser.

- Fiddler shows the HTTP/2 pseudo-headers as they are sent/received in their original order. Some client applications further modify the pseudo-header order, which can cause different behavior for some corner cases.


## WebSocket Capturing


The [WebSocket protocol](https://en.wikipedia.org/wiki/WebSocket) provides full-duplex communication channels over a TCP connection. WebSocket is distinct from the HTTP protocol. Both protocols are located at OSI layer seven and depend on TCP at OSI layer four. Although different, WebSocket is designed to work over HTTP ports 443 and 80 and support HTTP proxies and intermediaries, thus making it compatible with HTTP.

Fiddler Everywhere supports WebSocket capturing out-of-the-box (through a system, independent browser, or explicit capturing modes). The application provides dedicated [WebSocket inspectors]({%slug inspector-types%}#websocket-and-grpc-inspectors) to examine and extract data from the WebSocket session's [handshake]({%slug inspector-types%}#handshake-tab), [metadata]({%slug inspector-types%}#metadata-inspector), and [messages]({%slug inspector-types%}#messages-tab).


## gRPC Capturing

[gRPC](https://grpc.io/) stands for Google Remote Procedure Call, and while created by Google, now an open-source framework. gRPC utilizes multiple technologies, including HTTP/2, which makes it incompatible with HTTP/1.1 and older versions. Similar to other RPC frameworks, one of its most common usage to directly call methods on remote clients. The main benefits of gRPC are its performance, added security, and the possibility to generate code efficiently. Some well-known usage scenarios are creating microservices application architecture and connecting mobile clients to backend services.

Fiddler Everywhere supports gRPC capturing out-of-the-box (through a system, independent browser, or explicit capturing modes). The Fiddler application provides dedicated [gRPC inspectors]({%slug inspector-types%}#websocket-and-grpc-inspectors) to examine and extract data from the gRPC session's [handshake]({%slug inspector-types%}#handshake-tab), and [messages]({%slug inspector-types%}#messages-tab).

>important To capture gRPC, you must enable HTTP/2 support in Fiddler Everywhere through **Settings > Connections > Enable HTTP/2 support**. This requirement comes from prerequisites of the gRPC framework, which utilizes their HTTP/2 protocol.

[Learn more on how to capture and inspect gRPC traffic with Fiddler Everywhere here...]({%slug capture-grpc-traffic%})