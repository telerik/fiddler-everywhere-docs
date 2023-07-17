---
title: Composer
description: "Learn how to use the Composer menu and follow redirects (responses with status 3xx) in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: composer-settings-submenu
publish: true
position: 50
---

# Composer Menu

The **Composer** sub-menu provides an option for setting the behavior of composed requests, which return a `3xx` (redirects) status code.

The **Follow Redirects Automatically** checkbox allows you to set a default behavior for requests made by the Composer, which return the `3xx` status codes for indicating redirects. By enabling this option, the **Composer** will display only the response from the last redirect. You still can inspect each redirected response in the **Live Traffic** grid.

By default, the automatic following of redirects is enabled.

The following figure displays the settings of the **Composer** menu.

![Composer settings](../../images/settings/settings-composer.png)
