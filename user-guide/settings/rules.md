---
title: Rules
description: "Learn how to use the Rules menu and change the behavour of sessions that are not matching active rules"
slug: rules-settings-submenu
publish: true
position: 60
---

# Rules Menu


The **Rules** sub-menu provides an option for setting the behavior of requests that are not matching the active rules.

The **Umatched Requests Passthrough** checkbox allows you to set a default behavior for all requests, which are not matching any of the active rules. By disabling this option, all sessions that are not matching the active rules will be blocked and will returng **404 Not Found** error to the client that executed the request.

By default, the passthrough of unmatchaed request is enabled.

The following figure displays the settings of the **Rules** menu.

![Composer settings](../../images/settings/settings-composer.png)
