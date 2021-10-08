---
title: Capturing Traffic
description: "Capture HTTP and HTTPS live traffic with the cross-platform, web-debugging, HTTP-proxy Telerik Fiddler Everywhere tool."
slug: capture-traffic-get-started
publish: true
position: 10
previous_url: /get-started/capture-traffic, /knowledge-base/capture-and-inspect-web-traffic
---

# Capturing Traffic

Fiddler Everywhere provides out-of-the-box automatic capture though the [preconfigured browser capturing](#preconfigured-browser-capturing) and advanced [system capturing](@system-capturing) options. The following table depicts the major differences between the two functionaliities.

| Feature | Preconfigured Browser Capturing | System Capturing |
|:-----------------|:--------------------------------|:-----------------|
| Additional Configuration Needed | No  | Yes|
| Modifies System Proxy | No | Yes |
| Explicit Adding of the Trust Certificate | No | Yes |
| Capture Browser Traffic | Yes - All Chromium browsers | Yes - All browsers |
| Capture Other Applications Traffic |  No | Yes (virtually any that uses system proxy) |



## Preconfigured Browser Capturing

1. Install Google Chrome (or other Chromium browser).

1. Start Fiddler Everywhere. No additional configuration needed. To prevent poluting the **Live Traffic** list, you cam disable the **Live Traffic** toggle.

1. Click on **Open Browser** from the **Live Traffic** toolbar.

  ![the "Open Browser" option for opening preconfigured browser for automatic capture](../images/get-started/get-started-open-browser.png)

1. Enter the URL in the newly opened Chrome window.


## System Capturing

Once Fiddler Everywhere is installed and its root certificate trusted, you can utilize the web-traffic capturing of the proxy client.

The client logs all HTTP and HTTPS traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;Google Chrome, Firefox, Microsoft Teams, Outlook, and more. You can use the captured traffic to debug issues and identify performance bottlenecks, or share it with your teammates.

To capture traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. Make sure that it is properly configured as described in the First Steps tutorials.

1. Switch **Live Traffic** to **Capturing**. Your incoming and outgoing traffic will be immediately captured and displayed in the [Live Traffic]({%slug saved-sessions-tab%}).

    ![Enabling Live Traffic](../../images/livetraffic/websessions/websessions-live-traffic-capturing.png)

>tip When you switch **Live Traffic** to **Capturing**, open a browser and type an arbitrary web address. As a result, Fiddler Everywhere will immediately intercept the request and **Live Traffic** will be populated. The **Result** field for that arbitrary web address will return **200** which means that your first request is successfully captured with Fiddler Everywhere.

## Additional Resources

- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Modifying Traffic]({%slug modify-traffic-get-started%})
- [Capturing and Inspecting iOS Traffic]({%slug capture-mobile-ios-traffic%})
- [Capturing and Inspecting Android Traffic]({%slug capture-mobile-android-traffic%})
