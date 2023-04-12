---
title: Capturing Browser Traffic
description: "Learn how to capture HTTP(S) traffic from preconfigired browser instances."
slug: fiddler-browser-preconfigured
publish: true
position: 20
---


# Capturing Traffic from Preconfigured Browser

The preconfigured browser capturing is a feature that allows you to capture traffic from a specific browser instance. Currently, Fiddler Everywhere supports preconfigured browser capturing only for Chromium browsers.

The feature is useful when capturing browser traffic, but your environment doesn't allow you to change the system proxy or install and trust root certificates. It also solves compatibility issues with VPN and third-party security tools, which modify the system proxy. Additionally, it allows you to focus your capturing on a sandboxed browser instance and prevent capturing other system traffic.

To start the preconfigured browser capturing with Fiddler Everywhere:

1. Install Google Chrome or other Chromium browsers.

1. Start Fiddler Everywhere. No additional configuration is needed. To prevent polluting the **Live Traffic** list, you can disable the **Live Traffic** toggle.

1. Click **Open Browser** from the **Live Traffic** toolbar.

  ![the "Open Browser" option for opening the preconfigured browser for automatic capture](../images/get-started/get-started-open-browser.png)

1. Enter the URL in the newly opened Chrome window. Fiddler Everywhere immediately starts capturing all the traffic generated from the preconfigured browser.

To change the preconfigured browser, from the [**Browsers** sub-menu]({% slug browsers-settings-submenu %}), either assign a path to third-party Chromium browsers, like Edge, Brave and Vivaldi or change the default path to the Google Chrome browser.

## Additional Resources

[Learn more about the different capturing modes in Fiddler Everywhere here...]({%slug capture-traffic-get-started%})