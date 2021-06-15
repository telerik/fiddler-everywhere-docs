---
title: Inspect Traffic
description: Use the Inspectors tab to deep-dive in the captured session's headers and bodies.
slug: inspecting-traffic-get-started
publish: true
position: 50
---

# Inspect Traffic

With traffic already captured, the process of analyzing has begun. The first place where we can extract information about the captured sessions is the [**Live Traffic**]({%slug web-sessions-list%}). Each session (a session is the request/response entry) is listed in a row with multiple column fields in the __sessions list__. You can extract useful information like the returned status code, the host and the URL, type of used protocol (HTTP vs. HTTPS), body sizer in bytes, used HTTP method (like GET or POST), and more.

**Select** a session (by clicking on the session row) to open additional information about the session request and response in the Fiddler inspectors. [The request and response inspectors]({%slug inspector-types%}) are powerful tools that will allow you to deep-dive in each session so you and your teammates can debug it or find performance bottlenecks. 

![Live Traffic and Inspectors](../images/livetraffic/websessions/websessions-list-all.png)

Learn more about all [the Fiddler Inspectors]({%slug inspector-types%}) 

>tip In case, the HTTPS capturing is enabled, and the [**Decode**]({%slug web-sessions-list%}#decode) option is activated, you will also be able to analyze encoded content (removes all HTTP Content and Transfer encoding from requests and responses).

**Save** a selected session or multiple selected sessions [via the context menu]({%slug web-sessions-list%}#save) (alternatively via a keyboard shortcut). Saved sessions are available in the [**Sessions list**]({%slug saved-sessions-tab%}) from which they can be reloaded or shared with collaborators.

Inspecting sessions is often done with teammates or external collaborators. **Share** a selected session or multiple selected sessions directly from the [__Live Traffic__ list]({%slug web-sessions-list%}#share) or via the [__Sessions__ list]({%slug saved-sessions-tab%}).

## Additional Resources

- [Create an API request via the Composer]({%slug composer-get-started%})
- [Modify traffic]({%slug modify-traffic-get-started%})
- [Mock server response]({%slug rulesbuilder-get-started%})
- [Organize requests]({%slug composer-collections-get-started%})
- [Share captured traffic with collaborators]({%slug collaboration-get-started%}).
