---
title: Security
description: "Learn more about the Fiddler Everywhere security highlights and check out the related technical information about sharing and capturing functionalities."
slug: fe-security
publish: true
position: 75
---

# Fiddler Everywhere Security

The Fiddler Everywhere application acts as a MITM proxy that uses its unique certificate. It will capture ongoing internet activities, and you need to be careful not to share any sensitive data as it might pose a threat to you or your company. This article highlights the primary security concerns and provides technical information about how Fiddler Everywhere acts as a MITM and what you should consider when handling the Fiddler root trust certificate and captured data.

## Fiddler Everywhere Security Highlights

Fiddler Everywhere is an HTTP/HTTPS proxy that runs on your Windows, Linux, or Mac computer. It stands between your client application (for example a browser or other application that sends HTTP/HTTPS requests) and the server (that receives the HTTP/HTTPS requests). The HTTP/HTTPS responses are returned to the Fiddler Everywhere proxy, which passes the traffic back to the client application.

This type of proxy configuration is known as a MITM proxy (coming from man-in-the-middle, meddler-int-the-middle, etc.). It uses the MITM-attack approach to intercept communication between the client and the server. All modern applications use additional security layers like [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) to protect the user's data and prevent MITM attacks. This way, even if a third party executes a MITM attack, it will capture encrypted content protected by a cryptographic algorithm.

The above explains why Fiddler Everywhere can capture only non-secure HTTP after the application installation. To enable capturing of secure traffic over HTTPS, you need to explicitly elevate the trust by [installing and enabling the Fiddler's root trust certificate]({%slug trust-certificate%}).

When installing and enabling the Fiddler Everywhere, consider the following security indicators and highlights:

- Only the user that has access to the Fiddler Everywhere application and to the Fiddler's saved sessions will have access to thew captured data. The Fiddler Everywhere team doesn't have access to that information, and can access it or restore it in any way.

- Fiddler Everywhere generates unique trust certificate

- In its initial state, Fiddler Everywhere will capture only non-secure HTTP traffic. This traffic can still expose sensetive information like visited URLs, internal API endpoints