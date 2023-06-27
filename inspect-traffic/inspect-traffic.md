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

The core function of Fiddler Everywhere is to capture HTTPS requests and responses and to visualize its content through a cognitive UI. The list of captured sessions

>tip A session in the context of Fiddler, means the combination of the HTTP Request sent from the client to the server and the HTTP Response sent from the server to the client. As Fiddler acts as an intermediate TLS proxy, that can also result in different behavior compared to when the connection is made without a proxy in the middle. [Learn more about how Fiddler Everywhere works as a TLS proxy here ...]({%slug fe-security%}#fiddler-as-an-https-proxy)


## Overview Traffic Statistics



To extract information about the captured sessions, go to the **Live Traffic** tab, where each request/response entry (session) is listed in a row with multiple columns fields in the **Sessions** list. There you can extract valuable data such as the returned status code, the host and the URL, the type of the used protocol (HTTP or HTTPS), the body sizer in bytes, and the HTTP method (GET or POST), and more. The output traffic can be [filtered]({%slug how-to-filter-traffic%}), [exported]({%slug web-sessions-list%}#exporting), [commented on]({%slug web-sessions-list%}#commenting), and [shared]({%slug collaboration-get-started%}) for further and detailed inspection.

To open the structured information about the session timings, sizes, requests, and response details in the [**Overview** tab]({%slug overview-tab%}), single-click a session or select multiple sessions.


To load [the request and response inspectors]({%slug inspector-types%}), double-click a session. The [**Inspectors** tab]({%slug inspector-types%}) is a powerful tool that allows you to deep-dive in each session so you and your teammates can debug it or find performance bottlenecks.

The following rules are applied when you are selecting and changing sessions and using the **Inspectors** tab:

- Double-click a session to activate the default Inspectors for a selected session. Fiddler Everywhere will automatically decide which inspector is best suited to display the request and response of the chosen session when the inspectors are activated.

- Single-click a session to activate the last shown Inspectors. This is useful when you want to inspect specific inspectors for many sessions, and you don't need Fiddler Everywhere to load the best inspector based on the requests or response data.

![Live Traffic and Inspectors](../images/livetraffic/websessions/websessions-list-all.png)

To save a selected session or multiple selected sessions, use the [context menu]({%slug web-sessions-list%}#save) or use a keyboard shortcut. Saved sessions are available in the [**Sessions list**]({%slug saved-sessions-tab%}) from which they can be reloaded or shared with collaborators.

The inspection of sessions often happens with teammates or external collaborators. Share a selected session or multiple selected sessions directly from the [__Live Traffic__ list]({%slug web-sessions-list%}#share) or by using the [__Sessions__ list]({%slug saved-sessions-tab%}).
