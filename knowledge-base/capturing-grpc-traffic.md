---
title: Capturing and Inspecting GRPC Traffic
description: "Learn how to capture and inspect GRPC traffic in Fiddler Everywhere."
type: how-to
slug: capture-grpc-traffic
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product version | Fiddler Everywhere 4.2.0 and above  |
| 3rd-party tools | [GRPC](https://en.wikipedia.org/wiki/GRPC) |
| Supported OS | macOS, Linux, Windows, iOS, Android |

## Description

My client application utilizes the GRPC framework. What exactly is GRPC? Can I capture and inspect GRPC traffic with Fiddler Everywhere?


## Capturing GRPC in Fiddler Everywhere


[GRPC](https://grpc.io/) is an open-source, cross-platform Remote- Procedure Call (RPC) framework. One of its common usages is to connect services in and across servers with pluggable support for tracing, load balancing, and authentication. 

Fiddler Everywhere captures GRPC traffic out-of-the-box through [all capturing modes]({%slug capture-traffic-get-started%}) with the clarification that as GRPC is utilizing HTTP/2, you need to ensure that HTTP/2 capturing is enabled in Fiddler Everywhere. With Fiddler's proxy, you can capture GRPC traffic with all supported streaming modes - unary RPC (no streaming), server-streaming RPC, client-streaming RPC, and bi-directional streaming RPC. [Learn more about the streaming modes in GRPC here...](https://grpc.io/docs/what-is-grpc/core-concepts/#unary-rpc)

To capture GRPC traffic with Fiddler Everywhere, the following conditions must be satisfied:

1. Enable HTTP/2 capturing in Fiddler Everywhere through **Settings** > **Connections** > **Enable HTTP/2 support (BETA)**.

2. Configure the client using the GRPC framework to go through the Fiddler proxy. The execution of this step differs depending on the client's application. Here are some setup guidelines for different clients:

    - Chromium Browsers&mdash;Most modern-day browsers respect the system proxy by default. Use [system capturing or preconfigured browser capturing]({%slug capture-traffic-get-started%})).

    - Firefox&mdash;Has the option to set a manual proxy (like [Firefox proxy settings](https://support.mozilla.org/en-US/kb/connection-settings-firefox)). Use [system capturing]({%slug capture-traffic-get-started%}#system-capturing)).

    - Safari&mdash;Respects the system proxy settings. Use [system capturing]({%slug capture-traffic-get-started%}#system-capturing)).

    - Terminals&mdash;A terminal and shells can be configured to go through the Fiddler proxy explicitly. [Learn how to capture traffic from a terminal here...]({%slug fiddler-terminal-explicit%})

    - Bash&mdash;A bash application can be configured to go through the Fiddler proxy explicitly. [Learn how to capture traffic from Bash here...]({%slug fiddler-terminal-explicit%})

    - Node.js&mdash;A Node.js application can be configured to explicitly go through the Fiddler proxy. [Learn how to capture traffic from Node.js here...]({%slug fiddler-nodejs-traffic%})

    - Python&mdash;Python application can be configured to go through the Fiddler proxy explicitly. [Learn how to capture traffic from Python applications here...]({%slug fiddler-python-traffic%})

    - Java&mdash;A Java application can be configured to explicitly go through the Fiddler proxy. [Learn how to capture traffic from Java applications here...]({%slug configure-java-fiddler-everywhere%})

    - All other GRPC clients&mdash;In case your GRPC client utilizes a different technology stack, you need to find the appropriate method for configuring its proxy settings and set Fiddler's address (by default, http://127.0.0.1:8866) as an HTTP and HTTPS proxy.

3. Start capturing! That's it! Fiddler Everywhere will start capturing GRPC immediately.

## Inspecting GRPC Traffic

Fiddler Everywhere introduces a specific user interface to ease the inspection of GRPC traffic. [The GRPC inspectors]({%slug inspector-types%}#websocket-and-grpc-inspectors) are pretty similar to the inspectors used for capturing WebSocket traffic with one exception - the new GRPC Response inspector called **Trailer** (part of the **Handshake** tab). You can use the **Trailer** inspector to examine the specific trailers the server sends or mock particular GRPC behavior. For example, you can modify (through a rule) the **grpc_status** trailer header and test how your application behaves in unexpected scenarios like unexpected errors in the stream.


![GRPC traffic and related Fiddler's inspectors](../images/kb/grpc/grpc-traffic-inspection.png)
