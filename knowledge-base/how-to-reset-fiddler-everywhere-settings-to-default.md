---
title: Resetting Fiddler Everywhere Settings to Default
description: "Learn how to reset the Fiddler Everywhere settings to their default values to troubleshoot common issues."
type: how-to
page_title: Configure Fiddler Everywhere Default Settings
slug: how-to-reset-fiddler-everywhere-settings-to-default
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 3.0.0 and above  |

## Description

When I troubleshoot common issues, I need to reset the Fiddler Everywhere settings to their default values to facilitate the process. How can I do this?

## Solution

The following screenshots represent the default Fiddler Everywhere settings.

* Default **HTTPS** settings&mdash;Resets Fiddler Everywhere to its initial state, which means the secure traffic won't be captured until **Capture HTTPS** is checked.

  ![default https settings](../images/kb/default-settings/default-https-settings.png)

* Default **Connection** settings&mdash;Acts as a system proxy on application startup. Remote connections and HTTP2 support are disabled.

  ![default Connection settings](../images/kb/default-settings/default-connection-settings.png)

* Default **Gateway** settings&mdash;Use system proxy

  ![default Gateway settings](../images/kb/default-settings/default-gateway-settings.png)

* Default **Privacy** settings 

  ![default Privacy settings](../images/kb/default-settings/default-privacy-settings.png)

* Default **Composer** settings&mdash;Follows HTTP 3xx responses as redirects when executing requests from the Composer.

  ![default Composer settings](../images/kb/default-settings/default-composer-settings.png)

* Default **Browsers** settings&mdash;Fiddler Everywhere tries to detect the default path to the Google Chrome installation folder (to be used with the [Open Browser]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing) functionality)

  ![default Browsers settings](../images/kb/default-settings/default-browsers-settings.png)

* Default **Theme** settings&mdash;Default Light theme loads as the initial UI theme.

  ![default Theme settings](../images/kb/default-settings/default-theme-settings.png)