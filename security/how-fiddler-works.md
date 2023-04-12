---
title: How Fiddler Everywhere Works
description: "Details on how Fiddler Everywhere works as a forward HTTP(S) proxy."
slug: fe-how-it-works
publish: true
position: 10
previous_url: /security
---


# How Fiddler Everywhere Works

The Fiddler Everywhere application acts as a MITM (man-in-the-middle, meddler-in-the-middle) proxy that uses a unique certificate per machine. It will capture the application's incoming and ongoing internet activities using system HTTP/HTTPS proxies. This article highlights the primary security concerns and provides technical information about how Fiddler Everywhere acts as a MITM and what you need to consider when handling the Fiddler root trust certificate and captured data.


Fiddler Everywhere is an HTTP/HTTPS proxy that runs on your Windows, Linux, or macOS operating systems. It stands between your client application (for example, a browser or other application that sends HTTP/HTTPS requests) and the server (that receives the HTTP/HTTPS requests). The HTTP/HTTPS responses are returned to the Fiddler Everywhere proxy, passing the traffic back to the client application. This type of proxy configuration is a MITM proxy. It uses the MITM-attack approach to intercept client and server communication.

## Fiddler as an HTTP Proxy

By default, Fiddler Everywhere captures only non-secure HTTP traffic. The proxy may process this web traffic before forwarding it upstream through the [**Rules** tab]({%slug rules-general%}).

As an HTTP proxy, Fiddler Everywhere acts in the following way:

1. The client application (for example, browser, mobile application, or any other application that uses the system proxy and makes HTTP requests) connects to the Fiddler Everywhere proxy and makes a request.

1. The Fiddler Everywhere proxy forwards the request to the upstream server. Any active Fiddler Everywhere rules (modifying the requests) are applied here.

1. The server sends the response to the Fiddler Everywhere proxy.

1. The Fiddler Everywhere proxy forwards the response to the client application. Any active Fiddler Everywhere rules (modifying the responses) are applied here.

![Fiddler Everywhere as an MITM proxy](../images/security/fe-proxy-requests-responses.png)

## Fiddler as a Chained Proxy

Fiddler Everywhere will automatically chain to other system proxies preset on the host machine by default.

![Fiddler Everywhere as chained proxy](../images/security/fe-proxy-chained.png)

## Fiddler as an HTTPS Proxy

All modern applications use additional security layers like [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) to protect user data and prevent third parties from capturing the traffic.

To capture secure traffic over HTTPS with Fiddler Everywhere, you need to explicitly elevate the trust by [installing and enabling the Fiddler root trust certificate]({%slug trust-certificate%}). Adding the Fiddler Everywhere certificate in the Trusted Certificate Authority manager of the used operating system allows the man-in-the-middle approach to intercept the encoded TLS data. The Fiddler Everywhere application can now decode the otherwise encoded HTTPS traffic.

The following image demonstrates how Fiddler Everywhere acts as if it is the client when speaking to the server, and the other way around&mdash;it works as if it is the server when communicating with the client applications.

![Fiddler Everywhere as HTTPS proxy](../images/security/fe-proxy-https.png)



## Additional Resources

- [Fiddler Everywhere Official Product Page](https://www.telerik.com/fiddler/fiddler-everywhere)
- [Fiddler Everywhere End User License Agreement](https://www.telerik.com/purchase/license-agreement/fiddler-everywhere)
- [Fiddler Everywhere Official Download Llink](https://www.telerik.com/download/fiddler-everywhere)

