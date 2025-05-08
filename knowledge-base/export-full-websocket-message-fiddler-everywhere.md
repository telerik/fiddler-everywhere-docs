---
title: Exporting the Full WebSocket Message in Fiddler Everywhere
description: Learn how to export the full WebSocket message in Fiddler Everywhere when it is cutting off the hex, preventing conversion to ASCII.
type: how-to
slug: export-full-websocket-message-fiddler-everywhere
tags: fiddler, fiddler everywhere, websocket, export, hex, ASCII
res_type: kb
---

## Environment

| --- | --- |
| Product | Fiddler Everywhere |
| Version | 5.x.x and above |

## Description

Sometimes, when using Fiddler Everywhere, you may encounter an issue where the entire WebSocket message is not exported correctly. The hex portion of the message may be cut off, making it impossible to convert it to ASCII or other known formats.

## Solution

Some WebSocket messages may be fragmented, meaning the entire context is received in multiple messages, and the client/server unfragments them as needed. To export the entire unfragmented WebSocket message in Fiddler Everywhere, follow these steps:

1. Open Fiddler Everywhere, select the WebSocket session and navigate to the **Messages** inspector.
2. Look for WebSocket messages that are fragmented, which are identified by the **Cont.** type (continuation).
3. To combine these fragmented messages with their original message, click the **Unfragment all messages** option on the **Messages** inspector toolbar. The initial unfragmented messages will be removed from the Messages list while the combined message will remain.
4. Once you have unfragmented the messages, you can export the WebSocket message for further inspection.


## See Also
- [Fiddler Everywhere Inspector Insights - Messages Tab](https://docs.telerik.com/fiddler-everywhere/inspect-traffic/inspector-insights#messages-tab)
