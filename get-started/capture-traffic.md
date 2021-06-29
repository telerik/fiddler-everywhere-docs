---
title: Capture Traffic
description: Capture HTTP/HTTPS traffic Live Traffic in Fiddler Everywhere for macOS, Windows, and Linux. 
slug: capture-traffic-get-started
publish: true
position: 40
---

# Capture Traffic

Once Fiddler Everywhere is [installed]({%slug installation%}) and [configured]({%slug configuration-get-started%}), it is time to utilize one of the main features of the proxy client - web traffic capturing. The client logs all HTTP and HTTPS traffic between your computer and the internet. You can analyze and debug the incoming and outgoing traffic from virtually any application that supports a proxy (like Google Chrome, Firefox, Microsoft Teams, Outlook, etc.). You can use the captured traffic to debug issues, find performance bottlenecks, or share it with your teammates.

Capturing traffic with Fiddler Everywhere is as easy as executing two steps:

1. Start Fiddler Everywhere. Make sure that it is [properly configured]({%slug configuration-get-started%}).

2. Switch **Live Traffic** to **Capturing**. 

    ![Enabling Live Traffic](../images/livetraffic/websessions/websessions-live-traffic-capturing.png)

That's it! Your incoming and outgoing traffic will be immediately captured and displayed in the [Live Traffic]({%slug web-sessions-list%}).

>tip With **Live Traffic** turned on to **Capturing**, open a browser like Google Chrome and type an address (like `http://example.com`). Return to Fiddler Everywhere and you will immediately notice that the request is intercepted and the Live Traffic is populated. The **Result** field for that test address will return **200**. Your first request is now successfully captured with Fiddler!

## Additional Resources

- [Inspect captured traffic]({%slug inspecting-traffic-get-started%}).
- [Create an API request through the Composer]({%slug composer-get-started%})
- [Modify traffic]({%slug modify-traffic-get-started%})
- [Mock server response]({%slug rulesbuilder-get-started%})
- [Organize requests]({%slug composer-collections-get-started%})
- [Share captured traffic with collaborators]({%slug collaboration-get-started%}).
