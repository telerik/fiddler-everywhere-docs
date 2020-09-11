---
title: Troubleshoot Mac Proxy Settings
description: Troubleshooting Mac Proxy Settings will help isolate Issues
type: troubleshooting
slug: troubleshoot-mac-proxy-settings
page_title: Verifying Mac Proxy Settings
tags: troubleshooting, apple, mac, proxy
ticketid: 1388381
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |

#### Description

Verifying and troubleshooting Mac proxy settings changes.

## Solution

In order to troubleshoot common Mac scenarios, it is important to verify the Mac proxy settings.

For example, after [Installing Fiddler Everywhere on a Mac](https://docs.telerik.com/fiddler-everywhere/getting-started/installation), some users have reported that Fiddler Everywhere doesn't capture. This can be caused from many different reasons and requires troubleshooting.

In order to troubleshoot this, it is recommended to perform the following steps:

1. [Reset the Fiddler Everywhere Settings to the default values](how-to-reset-fiddler-everywhere-settings-to-default)
2. Close Fiddler Everywhere
3. [Verify the Mac Proxy Settings](#verifying-mac-proxy-settings)
4. Open Fiddler Everywhere
5. [Verify the Mac Proxy Settings](#verifying-mac-proxy-settings)

## Verifying Mac Proxy Settings

Apple Mac Proxy Settings can be found in **System Preferences** -> **Network** -> **Advanced**.

**NOTE:** Each Network Adapter will have Proxy Settings. For example, if internet is available through an Ethernet Port and a WiFi Connection there will be two adapters each with separate proxy settings.

The Fiddler Everywhere default settings will **Act as a System Proxy on Startup**. This will turn configure the Proxy Settings Automatically when Fiddler Everywhere is Running and will clear the Configuration when Fiddler Everywhere is closed.

### Proxy Settings Off

When Fiddler Everywhere is closed with the default settings, the System Proxy Settings will look like the following.

![mac proxy settings no proxy](../images/kb/mac-proxy-settings-no-proxy.png)

### Proxy Settings On

When Fiddler Everywhere is open with the default settings, the System Proxy Settings will look like the following.

![mac proxy settings with proxy](../images/kb/mac-proxy-settings-proxy-on.png)

## See Also

*	[How-To Installing Fiddler Everywhere on a Mac](https://docs.telerik.com/fiddler-everywhere/getting-started/installation)
*	[How-To Reset Fiddler Everywhere Settings to Default](how-to-reset-fiddler-everywhere-settings-to-default)