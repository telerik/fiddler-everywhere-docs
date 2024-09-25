---
title: Capturing Modes
description: "Capturing modes in Fiddler Everywhere as forward HTTPS proxy."
slug: capture-traffic-get-started
publish: true
position: 5
previous_url: /get-started/capture-traffic, /knowledge-base/capture-and-inspect-web-traffic, /get-started/traffic/capture-traffic, /traffic/capture-traffic
---

# Capturing Modes

The Fiddler Everywhere application is a local forward TLS proxy that can capture HTTP(S), WebSocket, Server-Sent Events (SSE), and gRPC traffic. The captured traffic can come from locally installed applications or remote devices (within the same local network).

The application supports different capturing modes such as automatic [system capturing](#system-capturing), [network capturing](#network-capturing), [independent browser capturing](#independent-browser-capturing), and [terminal capturing](#terminal-capturing). Upon startup, Fiddler Everywhere will also capture traffic from any application [explicitly set to use Fiddler's address and port as an HTTP proxy](#explicit-capturing), which can include [traffic from remote devices](#remote-traffic-capturing).

## Capturing Modes Comparison

The various capturing modes in Fiddler Everywhere cover different scenarios. Whether to use a specific mode depends on the traffic you would like to capture, your network environment, the targeted applications, etc. Use the diagram below to preview which mode will benefit you the most.

![When and why to use a specific capturing mode](../images/capturing-modes/capturing-modes-diagram.png)

The following table demonstrates the supported functionalities and differences between the Fiddler's capturing modes.

| Feature          | System Capturing | Network Capturing | Independent Browser Capturing  | Terminal Capturing | Explicit Capturing 
|:-----------------|:----------------|:----------------|:-----------------|:-----------------|:-----------------
| Capture browser traffic   | Yes  | Yes  | Yes (Chromium browsers) | n/a | Yes 
| Capture application traffic | Yes | Yes | Browsers only | Terminals only | Yes
| Capture remote traffic | Yes  | No  | n/a | n/a | Yes 
| Capture Android traffic | Yes |  No | n/a | n/a | Yes
| Capture iOS traffic | Yes | No | n/a | n/a | Yes
| Capture HTTPS from  | The system proxy | The active network adapter | Dedicated browser | Dedicated terminal and its child processes |  Specific client application
| Options to modify, mock and map traffic | Yes | Yes | Yes  | Yes | Yes
| Using breakpoints | Yes | Yes | Yes  | Yes | Yes
| Supported protocols  | HTTP, HTTPS, WebSocket, SSE, gRPC, Socket.IO | HTTP, HTTPS, WebSocket, SSE, gRPC, Socket.IO | HTTP, HTTPS, WebSocket, SSE, Socket.IO | HTTP, HTTPS, WebSocket, SSE, gRPC, Socket.IO | HTTP, HTTPS, WebSocket, SSE, gRPC, Socket.IO
| Support for HTTP/2   | Yes | Yes | Yes  | Yes | Yes
| Support for TLS 1.3  | Yes | Yes | Yes  | Yes | Yes
| Support for IPv4  | Yes | Yes | Yes  | Yes | Yes
| Support for IPv6  | Yes | No | Yes  | Yes | Yes
| Supported OS  | Windows, macOS, Linux | macOS | macOS  | Windows, macOS, Linux | Windows, macOS, Linux
| VPN compatibility  | Yes * | Yes * | Yes | Yes | Depends on the app
| Proxy Modification | Yes (modifies the system proxy) | No (uses network extension) | Sets a proxy within a browser instance | Sets a proxy for a terminal instance | Manual proxy configuration 
| Needs Configuration | Requires Fiddler CA | Requires Fiddler CA | No additional configuration needed | No additional configuration needed | Requires Fiddler CA 
| Needs Certificate Authority (CA) | Yes - automated & manual CA installation | Yes - automated & manual CA installation | No - uses preconfigured CA  | No - uses preconfigured CA  | Yes - needs manual CA installation

* The VPN support depends on the specific VPN tools and might require [additional configuration]({%slug configure-vpn-fiddler%}).

### License Tiers Comparision

The Fiddler Everywhere license model offers three commercial tiers, each with a specific set of features to best suit your needs. [The purchase comparison table](https://www.telerik.com/purchase/fiddler) provides detailed information on each tier and its supported features.

## System Capturing

The client logs all HTTP, HTTPS,  WebSocket, SSE, and gRPC traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;browsers, desktop applications, CLI tools, and others. You can use the captured traffic to debug issues, identify performance bottlenecks, or share it with your teammates.

To capture system traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. 

1. Enable system capturing as described in the following OS-specific articles:

    - [Enable the system capturing mode on **Windows**]({%slug first_steps_windows%}#capture-system-traffic)
    - [Enable the system capturing mode on **macOS**]({%slug first_steps_macos%}#capture-system-traffic)
    - [Enable the system capturing mode on **Linux**]({%slug first_steps_linux%}#capture-system-traffic).

![Use the "System Proxy" switch to toggle on and off the system capturing mode](../images/get-started/get-started-toggle.png)

[Learn more about the system capturing mode here...]({%slug capture-system-traffic%})

## Network Capturing

The Fiddler Everywhere version 5.2.0 introduced the network capturing mode as a BETA feature for macOS. The mode works on a lower level than an HTTP(S) proxy and allows you to capture TCP traffic from all applications that use the active network adapter without changing the system or client proxy. 

[Learn more about the network capturing mode here...]({%slug capture-network-traffic%})

The network capturing mode in Fiddler has many advantages over traditional HTTPS proxy capturing. The main differences are:
- You don't need to change or set an HTTPS proxy on your operating system or client applications.
- You have more control over which network segment or processes to monitor.
- It brings additional value in overcoming known HTTPS proxy limitations in specific operating systems and clients. 

One of the brightest examples of network capturing benefits is the infamous case [where Safari on macOS ignores the proxy settings for WebSocket traffic](https://discussions.apple.com/thread/253885692?sortBy=best). Because of that known issue, there is no way to debug WebSocket traffic that goes through a proxy (on Safari) while using HTTPS proxy tools. However, with the network capturing mode, you can capture WebSocket and all TCP traffic on a lower level, making the issue obsolete. 

## Independent Browser Capturing

Independent browser capturing is a feature that allows you to capture traffic from a sandboxed browser instance. Currently, Fiddler Everywhere supports independent browser capturing only for Chromium browsers.

![Use the "Browser" button to capture traffic from independent browser instance](../images/get-started/get-started-open-browser.png)

[Learn more on how to capture traffic from an independent browser instance here...]({%slug capture-browser-traffic%}#capturing-from-terminal)

## Terminal Capturing

Similarly to the independent browser capturing option, Fiddler lets you use a dedicated terminal instance to capture traffic from your preferred terminal on the fly. The option is accessible through the **>_ Terminal** button, enabling you to quickly capture and inspect traffic from terminal applications like **Node.js** libraries and **curl**.

![Use the "Terminal" button to capture traffic from Node.js or other terminal application](../images/get-started/get-started-terminal.png)

[Learn more on how to capture traffic from a terminal here...]({%slug capture-terminal-traffic%}#capturing-from-terminal)

## Explicit Capturing

The **Fiddler Everywhere** application acts as a proxy from the moment it starts, and by default, its proxy address is `127.0.0.1:8866`. Any application (including apps from remote PCs, mobile devices, etc.) explicitly directed to go through the Fiddler Everywhere proxy address will have its traffic captured, even when the [system capturing](#system-capturing) is turned off.

Example for explicitly making a curl request that goes through the Fiddler Everywhere proxy:

```curl
curl --url https://www.example.com/ -x 127.0.0.1:8866 --ssl-no-revoke -v
```

## Remote Traffic Capturing

Fiddler Everywhere can capture traffic from remote devices on the same local network. That includes remote PCs, gaming consoles, IoT devices, smartphones, tablets, etc. All you need to do is set the Fiddler proxy address and port as a manual proxy on the remote machine (similar to the [explicit capturing mode](#explicit-capturing)) and install the Fiddler certificate authority within the remote device certificate manager. 

>tip If you only need to capture remote traffic, then there is no need to install the Fiddler CA on the Fiddler host machine. You only need to download and install the Fiddler CA on the remote device. Once the proxy configuration is in place, Fiddler Everywhere will automatically capture and decrypt the remote HTTPS traffic.


Below, you will find some detailed guides for different scenarios:

[Learn more on how to capture traffic from an Android device here...]({%slug capture-mobile-android-traffic%})

[Learn more on how to capture traffic from an iOS device here...]({%slug capture-mobile-ios-traffic%})

[Learn more on how to capture traffic from generic remote devices here...]({%slug fiddler-capture-other-computers%})


## HTTP Version Specifics

Fiddler Everywhere supports HTTP/1.x and HTTP/2 traffic capture and composing. When handling HTTP/2 requests, note the following specifics.

- The HTTP/2 support in Fiddler Everywhere is enabled by default. If needed, it can be disabled [through the **Connections** menu]({%slug connections-submenu%}).

- With the **Enable HTTP/2 support** option, the connection between a client and a server will default to HTTP/2 if both support it. When the option is disabled, Fiddler Everywhere forces the communication to go through HTTP/1.1.

- Even with HTTP/2 support enabled, Fiddler Everywhere does not guarantee that all requests will use HTTP/2. Fiddler will only communicate using the client's version if a client only supports HTTP/1.1 or lower. If the client works with HTTP/2 but the server does not, Fiddler will allow the HTTP/2 request, but internally, it will translate the request to HTTP/1.1 when communicating with the server.

- Some browsers will share a single HTTP/2 connection to a website between tabs and keep a connection open even after a tab is closed. That can lead to unexpected behavior with the HTTP/2 support in Fiddler Everywhere, so if you experience similar issues, try to restart the browser.

- Fiddler shows the HTTP/2 pseudo-headers as they are sent/received in their original order. Some client applications further modify the pseudo-header order, which can cause different behavior for some corner cases.


## WebSocket Capturing

The [WebSocket protocol](https://en.wikipedia.org/wiki/WebSocket) provides full-duplex communication channels over a TCP connection. WebSocket is distinct from the HTTP protocol. Both protocols are located at OSI layer seven and depend on TCP at OSI layer four. Although different, WebSocket is designed to work over HTTP ports 443 and 80 and support HTTP proxies and intermediaries, thus making it compatible with HTTP.

Fiddler Everywhere supports WebSocket capturing out-of-the-box through all capturing modes. The application provides dedicated [WebSocket inspectors]({%slug inspector-types%}#websocket-grpc-sse-and-socketio-inspectors) to examine and extract data from the WebSocket session's [handshake]({%slug inspector-types%}#handshake-tab), [metadata]({%slug inspector-types%}#metadata-inspector), and [messages]({%slug inspector-types%}#messages-tab). Encoded WebSocket messages are automatically decoded (if possible) and presented in human-readable form in the related WebSocket inspector.


## Server-Sent Events

The [Server-Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_eventsp) is a server technology that enables a client application to receive updates from a server through the HTTP protocol. With server-sent events, a server can send new data to the client anytime by pushing messages.

Fiddler Everywhere supports SSE capturing out-of-the-box for HTTP/2 through all capturing modes. The Fiddler application allows dedicated SSE inspectors to examine and extract data from the SSE session's handshake and messages.

## gRPC Capturing

[gRPC](https://grpc.io/) stands for Google Remote Procedure Call, and while created by Google, now an open-source framework. gRPC utilizes multiple technologies, including HTTP/2, which makes it incompatible with HTTP/1.1 and older versions. Similar to other RPC frameworks, one of its most common usage to directly call methods on remote clients. The main benefits of gRPC are its performance, added security, and the possibility of generating code efficiently. Some well-known usage scenarios are creating microservices application architecture and connecting mobile clients to backend services.

Fiddler Everywhere supports gRPC capturing out-of-the-box through all capturing modes. The Fiddler application provides dedicated [gRPC inspectors]({%slug inspector-types%}#websocket-grpc-sse-and-socketio-inspectors) to examine and extract data from the gRPC session's [handshake]({%slug inspector-types%}#handshake-tab), and [messages]({%slug inspector-types%}#messages-tab).

>important To capture gRPC, you must enable HTTP/2 support in Fiddler Everywhere through **Settings > Connections > Enable HTTP/2 support**. This requirement comes from prerequisites of the gRPC framework, which utilizes their HTTP/2 protocol.

[Learn more on how to capture and inspect gRPC traffic with Fiddler Everywhere here...]({%slug capture-grpc-traffic%})

## Socket.IO Capturing

[Socket.IO](https://socket.io) is a technology that provides bidirectional, low-latency, and event-based communication between a client application and a server.

Fiddler Everywhere supports Socket.IO, capturing out-of-the-box through all capturing modes. The Fiddler application provides dedicated [Socket.IO inspectors]({%slug inspector-types%}#socketio-inspectors) to examine and extract data from the gRPC session's [handshake]({%slug inspector-types%}#handshake-tab), and [messages]({%slug inspector-types%}#messages-tab).