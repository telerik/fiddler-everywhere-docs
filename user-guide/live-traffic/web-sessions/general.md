---
title: Live Traffic Tab
slug: web-sessions-general
tags: sessions, fiddler sessions, share sessions, http sessions
publish: true
position: 10
---

## Live Traffic

The __Live Traffic__ tab is one of the most important feature of Fiddler Everywhere. It display a short summary of each captured session (in the Live Traffic list) and provides functionalities to work with these sessions (via the Live Traffic toolbar and the Inspectors tabs). Fiddler Everywhere enables sessions saving and sharing.

The main instruments that the section provides are:

- The [Live Traffic Toolbar]({%slug web-sessions-toolbar%})

- The [Live Traffic List]({%slug web-sessions-list%})

>tip A session (a.k.a. web session) represents a single transaction between a client and a server, sometimes known as request/response pair. Each Session appears as a single entry in the Live Traffic (refer to the images below). Each Session object has a Request and a Response, representing what the client sent to the server and what the server returned to the client. The Session object also maintains a set of Flags that record metadata about the Session, and a Timers object that stores timestamps logged in the course of processing the Session.

![Live Traffic toolbar and list](../../../images/livetraffic/websessions/websessions-toolbar-list-full.png)

>tip To use capture sessions, you need to enable __Live Traffic__ capturing via the switch.

![Enabling Live Traffic](../../../images/livetraffic/websessions/websessions-live-traffic-capturing.png)
