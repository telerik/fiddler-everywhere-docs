---
title: Capture & Inspect Web Traffic
slug: capture-observe-traffic
tags: Fiddler Everywhere traffic, capture traffic, observe HTTPS sessions, inspect web traffic, inspect web sessions
position: 10
---

## Capture and Inspect Web Traffic

Fiddler Everywhere main feature is to capture and inspect web traffic through HTTP and HTTPS. Checking the captured traffic allows you to debug your web application while using [the Fiddler's Request and Response Inspectors]({%slug inspector-types%}).

## Capturing Web Traffic

Fiddler Everywhere can capture web traffic (for example, from a browser) made via HTTP or HTTPS. The captured traffic is listed as __Web Sessions__ (or just __sessions__) in the [__Web Sessions List__]({%slug web-sessions-list%}).

Follow these steps to capture web traffic:

- Open Fiddler Everywhere and focus the main [__Web Session List__ section.]({%slug web-sessions-general%}). Make sure that __Live Traffic__ is set to __Capturing__. To stop capturing the live traffic, switch it back to __Paused__.

>tip By default, Fiddler Everywhere can capture only non-secure traffic (HTTP). If you want to enable capturing of secure traffic (HTTPS) then follow the steps described in the [_Settings > HTTPS_ article]({%slug decrypt-https-traffic%}).

- With the __Live Traffic__ being set to __Capturing__, open a browser, enter the HTTP address and make the request. Alternatively, if you are not making the HTTP/HTTPS request through a browser, open the application and make the web request.

_For example:_ Open Google Chrome browser and enter `https://docs.telerik.com/fiddler-everywhere`

- Go back to Fiddler Everywhere. In the __Live Traffic__ section, you will notice the live traffic being captured.

>tip Any new outgoing requests and upcoming responses (for example, after navigating deeper into a website or opening new website) will be continuously captured in the __Live Traffic__ panel. Switch back to __Paused__ to stop the live capturing and investigate specific sessions without polluting your __Web Sessions List__. You could also select one or more sessions from the __Web Sessions List__ and save and share them or remove them from the list.

## Inspect Web Traffic

Fiddler Everywhere provides functionality to inspect the already captured sessions. The live traffic sessions are composed of HTTP/HTTPS requests and responses. Each HTTP request can be observed through the **Request Inspector**. Each HTTP response can be observed through the **Response Inspector**. Both inspectors are powerful tools that can visualize the received content via different I [nspector types]({%slug inspector-types%}).

Follow these steps to start inspecting a request & response:

- Open Fiddler Everywhere and capture traffic (as described [here](#capturing-web-traffic))
- Select a session row in the __Web Sessions List__.
- To the right, at the top, is located the __Request Inspector__. You could choose a different inspector type to visualize the requested content. The default one is __Headers__.
- To the right, at the bottom, is located the __Response Inspector__. You could choose a different inspector type to visualize the requested content. The default one is __Headers__.