---
title: Capturing Traffic
description: "Capture HTTP and HTTPS live traffic with the cross-platform, web-debugging, http-proxy Telerik Fiddler Everywhere tool."
slug: capture-traffic-get-started
publish: true
position: 40
---

# Capturing Traffic

Once Fiddler Everywhere is [installed]({%slug installation%}) and [configured]({%slug configuration-get-started%}), you can utilize the web-traffic capturing of the proxy client.

The client logs all HTTP and HTTPS traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy&mdash;Google Chrome, Firefox, Microsoft Teams, Outlook, and more. You can use the captured traffic to debug issues and identify performance bottlenecks, or share it with your teammates.

To capture traffic with Fiddler Everywhere:

1. Start Fiddler Everywhere. Make sure that it is [properly configured]({%slug configuration-get-started%}).

2. Switch **Live Traffic** to **Capturing**. Your incoming and outgoing traffic will be immediately captured and displayed in the [Live Traffic]({%slug web-sessions-list%}).

    ![Enabling Live Traffic](../images/livetraffic/websessions/websessions-live-traffic-capturing.png)

>tip When you switch **Live Traffic** to **Capturing**, open a browser and type an arbitrary web address. As a result, Fiddler Everywhere will immediately intercept the request and **Live Traffic** will be populated. The **Result** field for that arbitrary web address will return **200** which means that your first request is successfully captured with Fiddler Everywhere.

## Additional Resources

- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Creating Requests through the API Composer]({%slug composer-get-started%})
- [Modifying Traffic]({%slug modify-traffic-get-started%})
- [Mocking Server Responses]({%slug rulesbuilder-get-started%})
- [Organizing API Requests into Collections]({%slug composer-collections-get-started%})
- [Sharing Captured Traffic with Collaborators]({%slug collaboration-get-started%}).
