---
title: Composer
description: Setting the Fiddler Everywhere Composer to follow redirects (responses with status 3xx)
slug: composer-settings-submenu
publish: true
position: 50
---

# Composer Menu

The __Composer__ sub-menu contains an option to set the behavior for composed requests returning status code **3xx** (redirects).

![Composer settings](../../images/settings/settings-composer.png)

## Follow Redirects Automatically

The **Follow Redirects Automatically** checkbox allows you to set a default behavior for requests made by the Composer, which are returing status codes 3xx (redirects). By enabling this option, the **Composer** will show only the response from the last redirect. You will still be able to inspect each redirected response in the **Live Traffic** tab.

By default, this option is enabled.


