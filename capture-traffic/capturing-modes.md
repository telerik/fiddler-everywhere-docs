---
title: Capturing Modes
description: "Capturing modes in Fiddler Everywhere as forward HTTPS proxy."
slug: capture-traffic-get-started
publish: true
position: 5
previous_url: /get-started/capture-traffic, /knowledge-base/capture-and-inspect-web-traffic, /get-started/traffic/capture-traffic, /traffic/capture-traffic
---


Fiddler Everywhere is a local forward proxy that captures HTTP(S), WebScoket, and gRPC traffic.

The application supports capturing modes such as automatic [system capturing](#system-capturing), the [independent browser capturing](#independent-browser-capturing), and the [independent terminal capturing](#independent-terminal-capturing). Upon startup, Fiddler Everywhere will also capture traffic from any application [explicitly set to use Fiddler's address and port as an HTTP proxy](#explicit-capturing).

## Capturing Modes Comparison

The following table demonstrates the significant differences between the two functionalities.

| Feature          | System Capturing | Independent Browser Capturing  | Independent Terminal Capturing | Explicit Capturing
|:-----------------|:----------------|:-----------------|:-----------------|:-----------------
| Does it need additional configuration?       | Requires installation of the Fiddler CA | No additional configuration is needed | No additional configuration is needed * | Requires installation of the Fiddler CA
| Does it modifies the system proxy? | Yes - Modifies the OS proxy settings | No - Automatically configures the proxy for the browser instance | No - Automatically configures the proxy for the terminal instance | No - You need to manually set the Fiddler proxy within the client application
| Does it need installation of the Fiddler CA? | Yes - Automated configuration available | No - Automatically configures the independent browser | No - Automatically configures the terminal. | Yes - Requres manaul installation of the Fiddler CA within the app's prefered certificate manager
| Does it capture browser traffic?   | Supports all browsers  | Support for all Chromium browsers | N/A | Only if the client app is a browser 
| Does it capture  desktop applications traffic? | Yes - will capture traffic from any application that respects the system proxy | N/A | Yes (if the application is started through the terminal instance) | Yes 
| Does it require administrative access? | Requires elevated rights for installing and trusting the Fiddler CA and modifying the OS proxy settings  | Requires user rights for starting a Chromium browser with custom parameters | Requires user rights for starting terminal with custom parameters | Depends on the client app requirments
| Is it compatible with VPN?     | limited VPN support | Supports multiple VPN tooling out-of-the-box. | Supports multiple VPN tooling out-of-the-box. | Depends on the client app requirments
| What does it captures?                | Captures traffic that goes through the system proxy. | Captures traffic from the independent browser instance. | Captures traffic from the terminal and from any child processes. |  Captures traffic form the client application
! Which protocols are supported? | HTTP, HTTPS, WebSocket, gRPC | HTTP, HTTPS, WebSocket  | HTTP, HTTPS, WebSocket, gRPC | HTTP, HTTPS, WebSocket, gRPC


## System Capturing

Once [Fiddler Everywhere is installed]({%slug login-and-update%}), and it's [root certificate trusted]({%slug trust-certificate%}), you can use the web-traffic capturing of the proxy client.

The client logs all HTTP, HTTPS,  WebSocket, and gRPC traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;browsers, desktop applications, CLI tools, and others. You can use the captured traffic to debug issues, identify performance bottlenecks, or share it with your teammates.

To capture system traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. 

1. Enable system capturing as described in the [First Steps tutorials for Windows]({%slug first_steps_windows%}#capture-system-traffic), [macOS]({%slug first_steps_macos%}#capture-system-traffic), or [Linux]({%slug first_steps_linux%}#capture-system-traffic).

[Learn more about the system capturing mode here...]({%slug capture-system-traffc%})


## Independent Browser Capturing

The independent browser capturing is a feature that allows you to capture traffic from a sandboxed browser instance. Currently, Fiddler Everywhere supports independent browser capturing only for Chromium browsers.

[Learn more on how to capture traffic from an independent browser instance here...]({%slug capture-browser-traffic%}#capturing-from-terminal)

## Independent Terminal Capturing

Similarly to the independent browser capturing option, Fiddler lets you use a independent terminal instance to capture traffic from your preferred terminal on-the-fly. The option is accessible through the **>_ Terminal** button and enables you to capture and inspect traffic from **Node.js** libraries and **curl** quickly.

![Use the "Terminal" button to capture traffic from Node.js or other terminal application](../images/get-started/get-started-terminal.png)

[Learn more on how to capture traffic from an independent terminal here...]({%slug fiddler-terminal-explicit%}#capturing-from-terminal)


## Explicit Capturing

The **Fiddler Everywhere** application acts as a proxy from the moment it starts, and by default, its proxy address is 127.0.0.1:8866. Any application explicitly directed to go through the Fiddler Everywhere proxy address will have its HTTP/HTTPS/WebSocket traffic immediately captured, even if the [system capturing](#system-capturing) is turned off.

Example for explicitly making a curl request that goes through the Fiddler Everywhere proxy:

```curl
curl --url https://www.example.com/ -x 127.0.0.1:8866 --ssl-no-revoke -v
```

## HTTP Version Specifics

Fiddler Everywhere supports HTTP/1.x and HTTP/2 traffic capture and composing. Note the following specifics when handling HTTP/2 requests.

- By default, the HTTP/2 support in Fiddler Everywhere is disabled and needs to be [explicitly enabled through the **Connections** menu]({%slug connections-submenu%}).

- With the **Enable HTTP/2 support (BETA)** option, the connection between a client and a server will default to HTTP/2 if both support it. When the option is disabled, Fiddler Everywhere forces the communication to go through HTTP/1.1.

- Even with HTTP/2 support enabled, Fiddler Everywhere cannot guarantee that all requests will use HTTP/2. If a client only supports HTTP/1.1 or lower, Fiddler will only communicate using the client's version. If the client works with HTTP/2 but the server does not, Fiddler will allow the HTTP/2 request, but internally it will translate the request to HTTP/1.1 when communicating with the server.

- Some browsers will share a single HTTP/2 connection to a website between tabs and keep a connection open even after a tab is closed. That can lead to unexpected behavior with the beta HTTP/2 support in Fiddler Everywhere, so if you experience similar issues, try to restart the browser.

- Fiddler shows the HTTP/2 pseudo-headers in their original order as they are sent/received. Some client applications are further modifying the pseudo-header order, which can cause different behavior for some corner cases.


## WebSocket Capturing


The [WebSocket protocol](https://en.wikipedia.org/wiki/WebSocket) provides full-duplex communication channels over a TCP connection. WebSocket is distinct from the HTTP protocol. Both protocols are located at OSI layer seven and depend on TCP at OSI layer four. Although different, WebSocket is designed to work over HTTP ports 443 and 80 and support HTTP proxies and intermediaries, thus making it compatible with HTTP.

Fiddler Everywhere supports WebSocket capturing out-of-the-box (through a system, independent browser, or explicit capturing modes). The application provides dedicated [WebSocket inspectors]({%slug inspector-types%}#websocket-and-grpc-inspectors) to examine and extract data from the WebSocket session's [handshake]({%slug inspector-types%}#handshake-tab), [metadata]({%slug inspector-types%}#metadata-inspector), and [messages]({%slug inspector-types%}#messages-tab).


## gRPC Capturing

[gRPC](https://grpc.io/) stands for Google Remote Procedure Call, and while created by Google, now an open-source framework. gRPC utilizes multiple technologies, including HTTP/2, which makes it incompatible with HTTP/1.1 and older versions. Similar to other RPC frameworks, one of its most common usage to directly call methods on remote clients. The main benefits of gRPC are its performance, added security, and the possibility to generate code efficiently. Some well-known usage scenarios are creating microservices application architecture and connecting mobile clients to backend services.

Fiddler Everywhere supports gRPC capturing out-of-the-box (through a system, independent browser, or explicit capturing modes). The Fiddler application provides dedicated [gRPC inspectors]({%slug inspector-types%}#websocket-and-grpc-inspectors) to examine and extract data from the gRPC session's [handshake]({%slug inspector-types%}#handshake-tab), and [messages]({%slug inspector-types%}#messages-tab).

>important To capture gRPC, you must enable HTTP/2 support in Fiddler Everywhere through **Settings > Connections > Enable HTTP/2 support (BETA)**. This requirement comes from prerequisites of the gRPC framework, which utilizes their HTTP/2 protocol.

