---
title: Capturing Traffic
description: "Capture HTTP and HTTPS live traffic with the cross-platform, web-debugging, HTTP-proxy Telerik Fiddler Everywhere tool."
slug: capture-traffic-get-started
publish: true
position: 10
previous_url: /get-started/capture-traffic
---

# Capturing Traffic

Once Fiddler Everywhere is installed and its root certificate trusted, you can utilize the web-traffic capturing of the proxy client.

The client logs all HTTP and HTTPS traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;Google Chrome, Firefox, Microsoft Teams, Outlook, and more. You can use the captured traffic to debug issues and identify performance bottlenecks, or share it with your teammates.

To capture traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. Make sure that it is properly configured as described in the First Steps tutorials.

2. Switch **Live Traffic** to **Capturing**. Your incoming and outgoing traffic will be immediately captured and displayed in the [Live Traffic]({%slug web-sessions-list%}).

    ![Enabling Live Traffic](../images/livetraffic/websessions/websessions-live-traffic-capturing.png)

>tip When you switch **Live Traffic** to **Capturing**, open a browser and type an arbitrary web address. As a result, Fiddler Everywhere will immediately intercept the request and **Live Traffic** will be populated. The **Result** field for that arbitrary web address will return **200** which means that your first request is successfully captured with Fiddler Everywhere.

## Additional Resources

- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Modifying Traffic]({%slug modify-traffic-get-started%})
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%})
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%})
