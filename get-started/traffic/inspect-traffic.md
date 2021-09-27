---
title: Inspecting Traffic
description: "Inspect the headers and bodies of the captured session through the Inspectors tab when working with Telerik Fiddler Everywhere web-debugging HTTP client proxy."
slug: inspecting-traffic-get-started
publish: true
position: 20
previous_url: /get-started/inspect-traffic
---

# Inspecting Traffic

When the traffic is already captured, you can start analyzing the data.

To extract information about the captured sessions, go to the [**Live Traffic**]({%slug web-sessions-list%}) tab where each request/response entry (session) is listed in a row with multiple column fields in the **sessions list**. There you can extract useful data such as the returned status code, the host and the URL, the type of the used protocol (HTTP or HTTPS), the body sizer in bytes, the used HTTP method (GET or POST), and more.

To open structured information about the session timings, sizes, request, and response details in the [**Overview** tab]({%slug overview-tab%}), single-click a session or select multiple sessions.

![Live Traffic and session overview](../images/livetraffic/websessions/websessions-list-all-overview.png)

To load [the request and response inspectors]({%slug inspector-types%}), double-click a session. The [**Inspectors** tab]({%slug inspector-types%}) is a powerful tool that allows you to deep-dive in each session so you and your teammates can debug it or find performance bottlenecks.

![Live Traffic and Inspectors](../images/livetraffic/websessions/websessions-list-all.png)

**Save** a selected session or multiple selected sessions [through the context menu]({%slug web-sessions-list%}#save), or, alternatively, use a keyboard shortcut. Saved sessions are available in the [**Sessions list**]({%slug saved-sessions-tab%}) from which they can be reloaded or shared with collaborators.

Inspecting sessions is often done with teammates or external collaborators. **Share** a selected session or multiple selected sessions directly from the [__Live Traffic__ list]({%slug web-sessions-list%}#share) or by using the [__Sessions__ list]({%slug saved-sessions-tab%}).

## Additional Resources

- [Modifying Traffic]({%slug modify-traffic-get-started%})
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%})
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%})
