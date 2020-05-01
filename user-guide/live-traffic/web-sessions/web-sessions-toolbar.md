---
title: Web Sessions Toolbar
slug: web-sessions-toolbar
tags: web sessions toolbar, fiddler toolbar, share sessions
publish: true
position: 20
---

# Web Sessions Toolbar

The Web Sessions toolbar provides various functionalities like streaming mode, decoding content, filtering by criteria, saving, and sharing sessions.

![Web Sessions Toolbar](../../../images/livetraffic/websessions/websessions-toolbar-all.png)

To use capture Web Sessions, you need to enable __Live Traffic__ capturing via the switch. Enabling the __Live Traffic__ switch will continuously capture all web traffic. You can use the off switch state to turn off (pause) the traffic capturing.

![Enabling Live Traffic](../../../images/livetraffic/websessions/websessions-live-traffic-capturing.png)

## Stream

By default, Fiddler Everywhere uses __buffering mode__, which means that the responses are fully collected before any part is sent to the client. Buffering alters the responses (for example, an image won't begin to download until the containing page download is complete). With __streaming mode__, the server's responses are immediately returned to the client as it is downloaded. In streaming mode, tampering with the response body is not possible.

Enable/Disable the streaming mode by toggling the __Stream__ button.

![Stream Toggle](../../../images/livetraffic/websessions/websessions-toolbar-stream-toggle.png)

Streaming mode is useful for low-level network timing scenarios (for example, by design some browsers will parse partially-downloaded HTML, and that would start downloading external resources in parallel before the remote server has finished delivering the content).

![Buffering mode vs Streaming Mode](../../../images/livetraffic/websessions/websessions-toolbar-streaming-mode.png)

 Streaming mode is also useful in cases where a site delivers audo or video streams. These kind of never-ending streams can't be buffered by Fiddler Everywhere.

## Decode

Enable __Decode__ toggle  to remove all HTTP content and Transfer enconding from requests and responses.

![Decode Toggle](../../../images/livetraffic/websessions/websessions-toolbar-decode-toggle.png)

_Example HTTP response with_ *Decode* _toggled to OFF_
![Decode OFF](../../../images/livetraffic/websessions/websessions-toolbar-decode-off.png)

_Example HTTP response with_ *Decode* _toggled to ON_
![Decode ON](../../../images/livetraffic/websessions/websessions-toolbar-decode-on.png)

_content goes here_


## Filter

_content goes here_

## Save

_content goes here_

## Share

_content goes here_

## Remove All / Remove Single

_content goes here_