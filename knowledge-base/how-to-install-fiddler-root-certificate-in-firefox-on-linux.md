---
title: Installing the Fiddler Root CA in Firefox
description: "Learn how to manually install the root certificate for Fiddler Everywhere  in Firefox."
type: how-to
slug: how-to-install-fiddler-root-certificate-in-firefox-on-linux
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| OS | Linux, macOS, Windows |

## Description

How can I manually install the Fiddler's CA (certificate authority) in Firefox?

## Solution

1. Export the Fiddler CA to your **Desktop** folder through the options in **Settings > HTTPS > Advanced**.

1. Open Firefox.

1. Go to **Preferences** > **Privacy & Security**.

1. Click the **View Certificates** button to open the Firefox's **Certificate Manager**.

1. Within the **Certificate Manager**, select the **Authorities** tab.

1. Click the **Import...** button and choose the `Fiddler_Root_Certificate_Authority.crt` file from your **Desktop** folder.

1. Select the **Trust this CA to identify websites.** checkbox and click **OK**.

The Fiddler CA is now installed.
