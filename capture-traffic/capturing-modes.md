---
title: Capturing Modes
description: "Lear about the different capture modes to intercept HTTP(S) live traffic with the cross-platform Fiddler Everywhere proxy tool."
slug: capture-traffic-get-started
publish: true
position: 10
previous_url: /get-started/capture-traffic, /knowledge-base/capture-and-inspect-web-traffic, /get-started/traffic/capture-traffic, /traffic/capture-traffic
---

# Capturing Modes

Out of the box, Fiddler Everywhere provides an automatic capturing functionality through the [system proxy](#system-proxy), the [preconfigured browser](#preconfigured-browser-capturing), and the [preconfigured terminal](#preconfigured-terminal-capturing) options. Upon startup, Fiddler Everywhere can also capture traffic from any application [explicitly set to use Fiddler's address and port as an HTTP(S) proxy](#explicit-capturing).

Fiddler Everywhere is a local forward proxy that captures HTTP(S), WebSocket, and gRPC traffic.

## Capturing Mode Comparision

The table below demonstrates the major differences between the different capturing modes.

| Feature          | **System Proxy** | **Preconfigured Browser**  | **Preconfigured Terminal** | **Explicit Proxy**
|:-----------------|:----------------|:-----------------|:-----------------|:-----------------
| Additional configuration       | Requires trusting of the root CA for enabling HTTPS capturing. | No additional configuration is needed. | No additional configuration is needed.  | Requires trusting of the root CA for enabling HTTPS capturing. 
| Modification of the system proxy | Requires modification of the system proxy. | Automatically configures the Fiddler proxy for preconfigured Chromium browser. | Automatically configures the Fiddler proxy for preconfigured terminal instance. | Requires manual configuration of the client.
| Explicit installation of the trust root certificate | Requires you to add the CA to the OS keychain. | No certificate configuration is needed- automatically configuring the browser instance's root CA. | No certificate configuration needed - automatically configures the root CA for the terminal instance. | Requires you to add the CA manually as required by the client app.
| Capturing of browser traffic   | Supports all browsers.  | Support for all Chromium browsers. | n/a | Yes, if the client application is a browser.
| Capturing of other applications traffic | Yes. It supports traffic capturing on virtually any application that uses the system proxy. | n/a | n/a | Yes. You can capture traffic from any application that can be manually configured to respect the Fiddler's proxy.
| Required administrative access | Requires OS admin rights for installing and trusting a root certificate and modifying the system proxy.  | Requires user rights for starting a browser instance with custom parameters. | Requires user rights for starting a terminal instance with custom parameters. | Depends on the client application configuration. 
| Working with VPN tooling       | Supports only some VPN tools | Provides multiple VPN tooling support out-of-the-box. | Provides multiple VPN tooling support out-of-the-box. | Depends on the client application configuration. 
| Captured output                | Captures all traffic that goes through the system proxy. | Captures only the traffic from the preconfigured browser instance. | Captures only the traffic from the preconfigured terminal instance. | Captures only the traffic from the specific client applications.
| Supported protocols | HTTP, HTTPS, WebSocket, gRPC | HTTP, HTTPS, WebSocket, gRPC | HTTP, HTTPS, WebSocket, gRPC | HTTP, HTTPS, WebSocket, gRPC |
| Main Benefits | Automatically captures all HTTP(S) traffic that respect the system proxy. | Sandboxed capturing only from a specific browser instance.  | Sandboxed capturing only from a specific terminal instance.  | Sandboxed capturing only from a specific set of applications.



## System Proxy

The **System Proxy** sets Fiddler as a proxy within the operating system proxy settings.

1. Start the Fiddler Everywhere application.

1. [Install and trust the Fiddler Everywhere root CA (certificate authority)](#trusting-root-certificate-authority).

    >tip Fiddler Everywhere is a forward HTTP proxy. As such, it automatically captures non-secure HTTP traffic. However, it must act as an intermediate TLS proxy to capture and decrypt HTTPS traffic. For this to happen, Fiddler Everywhere must install its root CA (certificate authority) in the operating system keychain.

1. Switch the **System Proxy** toggle ON. 

[Learn more about the **System Proxy** capturing mode here...]({%slug fiddler-system-traffic%}).

>tip When you switch the **System Proxy** toggle ON, open a browser and type an arbitrary web address like [https://example.com](https://example.com) 
. As a result, Fiddler Everywhere intercepts the HTTP request, and **Live Traffic** grid populates with newly captured HTTP(S) sessions.


## Preconfigured Browser

The preconfigured browser capturing is a feature that allows you to capture traffic only from a specific browser instance. Currently, Fiddler Everywhere supports preconfigured browser capturing only for Chromium-based browsers.

The feature is useful when capturing browser traffic, but your environment doesn't allow you to change the system proxy or install and trust root certificates. It also solves compatibility issues with VPN and third-party security tools, which modify the system proxy. Additionally, it allows you to focus your capturing on a sandboxed browser instance and prevent capturing other system traffic.

[Learn more about the **Browser** capturing mode here...]({%slug fiddler-browser-preconfigured%})


## Preconfigured Terminal

Similarly to the preconfigured browser capturing mode, Fiddler lets you use a preconfigured terminal instance to capture traffic from your preferred terminal on-the-fly. The terminal capturing mode is accessible through the **Terminal** button and enables you to capture and inspect traffic from **Node.js** libraries and **curl** quickly.

[Learn more about the **Terminal** capturing mode here...]({%slug fiddler-terminal-explicit%})


## Explicit Capturing

The **Fiddler Everywhere** application acts as a proxy from the moment it starts, and by default, its proxy address is 127.0.0.1:8866. Any application explicitly directed to go through the Fiddler Everywhere proxy address will have its HTTP/HTTPS/WebSocket traffic immediately captured, even if the [system capturing](#system-proxy) is turned off.

[Learn more on how to explicitly capture traffic from a specific applications here...]({%slug fiddler-explicit-capturing%})


## Protocol Specifics

Fiddler Everywhere supports HTTP/1.x and HTTP/2 as transport protocols and can capture WebSocket and gRPC traffic.


### HTTP Version Specifics

Fiddler Everywhere supports HTTP/1.x and HTTP/2 traffic capture and composing. Note the following specifics when handling HTTP/2 requests.

- By default, the HTTP/2 support in Fiddler Everywhere is disabled and needs to be [explicitly enabled through the **Connections** menu]({%slug connections-submenu%}).

- With the **Enable HTTP/2 support (BETA)** option, the connection between a client and a server will default to HTTP/2 if both support it. When the option is disabled, Fiddler Everywhere forces the communication to go through HTTP/1.1.

- Even with HTTP/2 support enabled, Fiddler Everywhere cannot guarantee that all requests will use HTTP/2. If a client only supports HTTP/1.1 or lower, Fiddler will only communicate using the client's version. If the client works with HTTP/2 but the server does not, Fiddler will allow the HTTP/2 request, but internally it will translate the request to HTTP/1.1 when communicating with the server.

- Some browsers will share a single HTTP/2 connection to a website between several tabs and keep a connection open even after a tab is closed. That can lead to unexpected behavior with the beta HTTP/2 support in Fiddler Everywhere, so if you experience similar issues, try to restart the browser.

- Fiddler shows the HTTP/2 pseudo-headers in their original order precisely as they are sent/received. Some client applications are further modifying the pseudo-header order, which might cause different behavior for some corner cases.


### WebSocket Capturing


The [WebSocket protocol](https://en.wikipedia.org/wiki/WebSocket) provides full-duplex communication channels over a TCP connection. WebSocket is distinct from the HTTP protocol. Both protocols are located at OSI layer seven and depend on TCP at OSI layer four. Although different, WebSocket is designed to work over HTTP ports 443 and 80 and support HTTP proxies and intermediaries, thus making it compatible with HTTP.

Fiddler Everywhere supports WebSocket capturing out-of-the-box (through a system, preconfigured browser, or explicit capturing modes). The application provides dedicated [WebSocket inspectors]({%slug inspector-types%}#websocket-and-grpc-inspectors) to examine and extract data from the WebSocket session's [handshake]({%slug inspector-types%}#handshake-tab), [metadata]({%slug inspector-types%}#metadata-inspector), and [messages]({%slug inspector-types%}#messages-tab).


### gRPC Capturing

[gRPC](https://grpc.io/) stands for Google Remote Procedure Call, and while created by Google, it is now an open-source framework. gRPC utilizes multiple technologies, including HTTP/2, which makes it incompatible with HTTP/1.1 and older versions. Similar to other RPC frameworks, one of its most common usage to directly call methods on remote clients. The main benefits of gRPC are its performance, added security, and the possibility to generate code efficiently. Some well-known usage scenarios are creating microservices application architecture and connecting mobile clients to backend services.

Fiddler Everywhere supports gRPC capturing out-of-the-box (through a system, preconfigured browser, or explicit capturing modes). The Fiddler application provides dedicated [gRPC inspectors]({%slug inspector-types%}#websocket-and-grpc-inspectors) to examine and extract data from the gRPC session's [handshake]({%slug inspector-types%}#handshake-tab), and [messages]({%slug inspector-types%}#messages-tab).

>important To capture gRPC, you must enable HTTP/2 support in Fiddler Everywhere through **Settings > Connections > Enable HTTP/2 support (BETA)**. This requirement comes from prerequisites of the gRPC framework, which utilizes their HTTP/2 protocol.


## Additional Resources

- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Modifying Traffic]({%slug modify-traffic-get-started%}).
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%}).
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%}).
- [Filtering Traffic]({%slug how-to-filter-traffic%}).
- [Live Traffic Section in Details]({%slug web-sessions-list%}).
- [Inspecting Server Certificates]({%slug fe-cert-details%}).
