---
title: WebSocket Capturing with macOS Safari
description: WebSocket Captured Successfully with the macOS Safari browser
type: how-to
page_title: WebSocket Capturing with Safari on macOS
slug: ws-capture-safari
tags: WebSockets capture Safari, WebSocket capture, websocket safari, WSS Safari, WSS proxy capture, WSS proxy traffic
res_type: kb
---

## Environment

|----------|-------|
| Product  | Fiddler Everywhere |
| Version  | 5.2.0 and above |
| Tags | WebSockets capture Safari |

## Description

WebSockets are not captured from Mac Safari when a proxy tool is used. What causes the issue, and how can it be solved?

The issue is caused by [a reported bug in the Apple implementation of WebSockets in Safari](https://discussions.apple.com/thread/253885692?sortBy=best), where the WebSocket traffic is never going through an HTTP(S) proxy even for scenarios where the proxy is explicitly set.

## Solution

While the issue will resurface when any HTTPS proxy tool is used, Fiddler Everywhere solves it through its **Network Capturing** mode. This mode works on a lower level (than an HTTP proxy) and thus automatically captures the WebSocket traffic that goes through the active network adapter.

[Learn more on how to enable and use the **Network Capturing** mode here...]({%slug capture-network-traffic%})

With the **Network Capturing** mode turned on, Fiddler Everywhere automatically captures all WebSocket traffic including one coming from the macOS Safari browser.


## See Also

[Learn more about WebSocket capturing with Fiddler Everywhere here...]({%slug apture-traffic-get-started%}#websocket-capturing)