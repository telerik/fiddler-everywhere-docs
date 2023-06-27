---
title: Inspecting Traffic
description: "Inspect captured HTTPS traffic through the Live Traffic tab in the Fiddler Everywhere proxy tool."
slug: inspecting-traffic-get-started
publish: true
position: 1
previous_url: /get-started/inspect-traffic, /get-started/traffic/inspect-traffic, /traffic/inspect-traffic
---



When the traffic is already captured, you can start inspecting its HTTP requests and responses and to analyze the received data. The captured sessions can be saved and reused a later point. You can achieve all that while using the **Live Traffic** pane and its subsections the **Live Traffic** tab and the **Sessions** list.

## Inspecting HTTPS Traffic

The core function of Fiddler Everywhere is to capture HTTPS requests and responses and to visualize its content through a cognitive UI. The ongoing HTTP sessions are listed in the **Live Traffic grid** which contains multiple columns.

![Live Traffic grid in Fiddler Everywhere](../images/inspect-traffic/live-traffic-grid.png)

>tip A session in the context of Fiddler, means the combination of the **HTTP Request** sent from the client to the server and the **HTTP Response** sent from the server to the client. As Fiddler acts as an intermediate TLS proxy that stands in the middle between client and server, that can also result in different behavior compared to a connection without a proxy. [Learn more about how Fiddler Everywhere works as a intermediate TLS proxy here ...]({%slug fe-security%}#fiddler-as-an-https-proxy)

To inspect the HTTP Request and Response headers and bodies, follow these steps:


1. Capture HTTP(S) traffic while using your preferred [capturing mode]({%slug capture-traffic-get-started%}).

1. Double-click on a captured session.

The session content is immediately loaded in the Fiddler's **Inspectors**. The application automatically decides which inspector is best suited to display the request and response of the double-clicked session. Alternatively, you can use single-click on a session to preserve the last shown inspector.

![Inspectors in Fiddler Everywhere](../images/inspect-traffic/live-traffic-double-click-inspector.png)

[Deep-dive into the Fiddler's inspectors tab here ...]({%slug inspector-types%})

## Overview Traffic Statistics

To extract information about the captured sessions, go to the **Live Traffic** tab, where each request/response entry (session) is listed in a row with multiple columns fields in the **Sessions** list. There you can extract valuable data such as the returned status code, the host and the URL, the type of the used protocol (HTTP or HTTPS), the body sizer in bytes, and the HTTP method (GET or POST), and more. The output traffic can be [filtered]({%slug how-to-filter-traffic%}), [exported]({%slug web-sessions-list%}#exporting), [commented on]({%slug web-sessions-list%}#commenting), and [shared]({%slug collaboration-get-started%}) for further and detailed inspection.

To open the structured information about the session in the [**Overview** tab]({%slug overview-tab%}), follow these steps:

1. Capture HTTP(S) traffic while using your preferred [capturing mode]({%slug capture-traffic-get-started%}).

1. Select a session, and switch to the **Overview** tab.

![Sessions's overview in Fiddler Everywhere](../images/inspect-traffic/live-traffic-oveerview.png)

[Deep-dive into the Fiddler's Overview tab here ...]({%slug overview-tab%})

## Sessions List

To save a selected session or multiple selected sessions, use the [context menu]({%slug web-sessions-list%}#save) or use a keyboard shortcut. Saved sessions are available in the [**Sessions list**]({%slug saved-sessions-tab%}) from which they can be reloaded or shared with collaborators.

The inspection of sessions often happens with teammates or external collaborators. Share a selected session or multiple selected sessions directly from the [__Live Traffic__ list]({%slug web-sessions-list%}#share) or by using the [__Sessions__ list]({%slug saved-sessions-tab%}).

[Deep-dive into the Fiddler's Sessions list here ...]({%slug saved-sessions-tab%})