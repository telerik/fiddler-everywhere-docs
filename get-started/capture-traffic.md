---
title: Capturing Traffic
slug: capture-traffic-get-started
tags: capturing web traffic, capture sessions, sniffing, captured HTTPS, Fiddler Web Sessions List
publish: true
position: 40
---

## First Steps in Capturing Web Traffic

Once Fiddler Everywhere is [installed]({%slug installation%}) and [configured]({%slug configuration-get-started%}), it is time to utilize one of the main features of the proxy client - web traffic capturing. The client logs all HTTP and HTTPS traffic between your computer and the internet. You can analyze and debug the incoming & outgoing traffic from virtually any application that supports a proxy (like Google Chrome, Firefox, Microsoft Teams, Outlook, etc.). You can use the captured traffic to debug issues, find performance bottlenecks, or share it with your teammates.

Capturing traffic with Fiddler Everywhere is as easy as executing two steps:

1. Start Fiddler Everywhere. Make sure that it is [properly configured]({%slug configuration-get-started%}).

2. Switch **Live Traffic** to **Capturing**. 

That's it! Your incoming and outgoing traffic will be immediately captured and displayed in the [Web Sessions List]({%slug web-sessions-list%}).

>tip With **Live Traffic** turned on to **Capturing**, open a browser like Google Chrome and type an address (like `http://example.com`). Return to Fiddler Everywhere and you will immediatly notice that the request is intercepted and the Web Sessions List is populated. The **Result** field for that test address should return **200**. Your first request is now successfully captured with Fiddler!

## Next Steps

Now that you are capturing the traffic, the next steps are are to inspect it in detail. Learn more about [inspecting traffic with Fiddler Everywhere]({%slug inspecting-traffic-get-started%}).
