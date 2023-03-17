---
title: Capturing GRPC Traffic
description: "Learn how to capture and inspect GRPC traffic with Fiddler Everywhere."
type: how-to
slug: capture-grpc-traffic
publish: false
res_type: kb
---


## The state of GRPC today

The initialism GRPC is around us more and more often each day. We are hearing that large companies like Google use GRPC (expected as the G in GRPC stands for Google), plus others like Netflix, Spotify, Salesforce, IBM, Cisco, Dropbox, and Slack - the list can go on and on. So what exactly is GRPC, and how does it helps developers today?

Technically the [GRPC](https://grpc.io) is a Remote Procedure Call (RPC) framework that can run in any environment. It can also be referred to as an architectural style similar to REST, GraphQL, SOAP, WebSockets, and others. While most applications in the wild still rely primarily on REST, it became apparent that the REST API is far from perfect, and relying only on it could be problematic as your business grows. The mass adoption of the microservices architecture style also showed the need for a different technology to solve various problems. This is where GRPC came in! The GRPC framework is efficient, has high performance (some say up to seven times faster than REST), is cross-platform, has a native code compiler, and is ideal for microservices and data streaming. GRPC is not here to replace REST, but should be considered as an alternative for solving specific problems.

Looking into the framework itself, the first thing that we can notice that it uses the [Protobuf format](https://protobuf.dev/) (instead of JSON or XML). The pros of the format are that it is lightware and compressed (here is where the GRPC gains high performance). The cons are that Protocol Buffers messages are not human readable. Fiddler Everywhere can help with that for developers that own the .proto file - each Protobuf message is available with Fiddler and can be used for deep-dive investiagation.


## GRPC Support in Fiddler Everywhere

As GRPC gains popularity, it became apparent that developers need a debugging tool to help them capture and inspect GRPC traffic. The tool has to support HTTP/2 (as GRPC is based on HTTP/2 trand is not compatible with HTTP/1.1), and also has to be ready visualize the information from specific GRPC channels including handshake, messages, trailer headers, etc. 

**Fiddler Everywhere!**

![The Fiddler Everywhere ninja to the resque](../images/temp/fe-ninja.png)

After the Fiddler's team recently introduced the support for HTTP/2 and TLS 1.3 so it was natural to go ahead with GRPC support. Now with Fiddler Everywhere version 4.2.0 and above the GRPC support is reality and one can start capturing and inspecting GRPC traffic out-of-the-box. Ok, not exactly out-of-the-box - because GRPC relays on HTTP/2, you must ensure that your Fiddler Everywhere application has HTTP/2 capturing enabled through **Settings > Connections > Enable HTTP/2 Support (BETA)**.

![Enabling HTTP/2 capturing in Fiddler Everywhere](../images/temp/fe-enable-http2.png)

That's all you need from Fiddler Everywhere's side! 

The next step is to tell your GRPC client application to respect the Fiddler's proxy for its HTTP and HTTPS requests. The specific proxy configuration entirely depends on the used client's application technology (for example different appraoches if it is a browser, or a Python app, GO app, Java app, and so on). [Learn more on how to set Fiddler Everywhere as a proxy for your technology here ...](https://docs.telerik.com/fiddler-everywhere/knowledge-base/capturing-grpc-traffic)

## GRPC Inspection

Upon capturing a GRPC session, Fiddler Everywhere shows opened and closed GRPC channels in the Live Traffic list. A green badge in the ID column (by default, the first column on the left) indicates an active GRPC channel, while a red bad indicates that the GRPC channel is closed. 

![Captured GRPC sessions in the Live Traffic list of Fiddler](../images/temp/fe-grpc-sessions.png)

You can select a session with a single click to observe the **Handshake** tab and its details. The **Handshake** tab contains information about the used HTTP headers and the specific traliers. The server sends trailers to the client after processing the request. A typical scenario is for trailers to contain information common to all service methods.

![Inspecting GRPC session through the Handshake tab](../images/temp/fe-grpc-handshake-tab.png)

You can open the **Messages** tab by double-clicking on the selected session (or manually selecting the tab) and inspect each streamed message in the GRPC channel. Each GRPC message uses [the Protobuf format](https://protobuf.dev/overview/), which is in unreadable form and received as binary. Fiddler Everywhere provides instruments to partially decode text content that is part of the Protobug message, but not that this will be a mutated content of the Protobuf message. Only the creator & owner of the .proto scheme can fully decode a Protobuf message.

![Inspecting GRPC session through the Messages tab](../images/temp/fe-grpc-messages-tab.png)