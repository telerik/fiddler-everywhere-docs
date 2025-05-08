---
title: Capturing from Mobile Firefox Browser
description: "Configure the mobile version of Firefox to work alongside the Fiddler Everywhere proxy and CA."
type: how-to
slug: capture-from-mobile-firefox
publish: true
res_type: kb
---
## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, Linux  |
| 3rd-party tools | Python |

## Capturing HTTPS from Firefox for Android

By default, the Android version of Firefox does not respect and trust the Fiddler Certificate Authority (CA). As a result, once the [proxy configuration]({%slug capture-mobile-ios-traffic%}) is in place, you will see a warning in Firefox for Android that prevents any further browsing due to security concerns. To resolve that issue and to be able to capture HTTPS traffic from Firefox for Android, you need to explicitly instruct the mobile browser to trust user-installed CAs through the following steps:

1. On your mobile device, open Firefox for Android and go to **Settings**.

1. Tap on **About Firefox**

1. Tap the Firefox logo seven times

1. Go up one level. You can now access the **Secret Settings** (near the bottom of the **Settings** menu).

1. Within the **Secret Settings** toggle on the **Use third party CA certificates**.

1. Restart Firefox for Android.

>tip The described workflow works in Firefox for Android version 90.0 and above.

Now that Firefox for Android is configured to trust user-installed CA, you can capture its HTTPS traffic with Fiddler Everywhere.