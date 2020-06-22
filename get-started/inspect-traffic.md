---
title: Inspecting Traffic
slug: inspecting-traffic-get-started
tags: inspecting web traffic, inspect sessions,analyzing captured traffic, Fiddler inspectors
publish: true
position: 50
---

## First Steps in Inspecting Web traffic

With traffic already captured, the process of analyzing has begun. The first place where we can extract information about the captured sessions is the [**Web Sessions List**]({%slug web-sessions-list%}). Each session (a session is the request/response entry) is listed in a row with multiple column fields. You can extract useful information like the returned status code, the host and the URL, type of used protocol (HTTP vs. HTTPS), body sizer in bytes, used HTTP method (like GET or POST), and more (learn more about [the Web Sessions List fields]({%slug web-session-summary%}).

Selecting a session (by clicking on the session row) is opening additional information about the session request and response in [the Fiddler Inspectors]({%slug inspector-types%}). The request and response inspectors are powerful tools that will allow you to deep-dive in each session so you and your teammates can debug it or find performance bottlenecks. In case, the HTTPS capturing is enabled, and the [**Decode**]({%slug web-sessions-toolbar%}#decode) option is activated, you will also be able to analyze encoded content (removes all HTTP Content and Transfer encoding from requests and responses).