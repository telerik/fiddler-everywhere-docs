---
title: Live Traffic 
description: "Learn how to limit the captured session listed in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: live-traffic-submenu
publish: true
position: 35
---

# Live Traffic Menu


The **Live Traffic** sub-menu provides options for limiting the captured traffic visible in the [**Live Traffic** grid]({%slug web-sessions-list%}#live-traffic-grid).


The following options are available as **Sessions List Length**:

- **Keep all sessions in the list**&mdash;The default selection will list all sessions in the **Live Traffic** grid.

- **Keep only last <value> sessions**&mdash;Lists only the specified number of sessions in the **Live Traffic** grid. The possible value is a minimum of ten (10) saved sessions and a maximum of ten thousand (10000) sessions.

Note that sessions that are already explicitly hidden by an active filter won't appear in the **Live Traffic** grid.

>tip Suppose you use Fiddler Everywhere for a prolonged period. In that case, it will get overloaded with sessions, making finding useful information almost impossible and possibly causing performance issues if your OS runs out of RAM. With the **Sessions List Length**, you can define a limit of sessions to be kept, so once it is reached, the oldest sessions in the list are deleted. This way, you can use Fiddler Everywhere all day long without worrying about how they'll find the sessions they need when they get back to it later.