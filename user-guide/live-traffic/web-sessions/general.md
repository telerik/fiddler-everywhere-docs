---
title: General
slug: web-sessions-general
tags: web sessions, fiddler sessions, share sessions
publish: true
position: 10
---

# Web Sessions

The Web Session section is one of the most important feature of Fiddler Everywhere. It display a short summary of each captured session (in the Web Session list) and provides functionalities to work with these sessions (via the Web Session toolbar and the Inspectors tabs). Fiddler Everywhere enables sessions saving and sharing.

The main instruments that the section provides are:

- The [Web Session Toolbar]({%slug web-sessions-toolbar%})

- The [Web Session List]({%slug web-sessions-list%})

>tip A Web Session represents a single transaction between a client and a server, sometimes known as request/response pair. Each Session appears as a single entry in the Web Sessions List (refer to the images below). Each Session object has a Request and a Response, representing what the client sent to the server and what the server returned to the client. The Session object also maintains a set of Flags that record metadata about the Session, and a Timers object that stores timestamps logged in the course of processing the Session.

![Web Sessions toolbar and list](../../../images/livetraffic/websessions/websessions-toolbar-list-full.png)

>tip To use capture Web Sessions, you need to enable __Live Traffic__ capturing via the switch.

![Enabling Live Traffic](../../../images/livetraffic/websessions/websessions-live-traffic-capturing.png)
