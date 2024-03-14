---
title: Installing the Fiddler certificate authority in Firefox
description: "Enable HTTPS decrypting of Firefox traffic by installing the Fiddler certificate authority in the Firefox certificate store."
type: how-to
slug: how-to-install-fiddler-root-certificate-in-firefox-on-linux
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   |
| Product Version | Fiddler Everywhere 1.0.0 and above  |
| OS | Linux, macOS, Windows |

## Description

**Q:** How can I manually install the Fiddler's Certificate Authority (CA) in Firefox?

**Q:** I want to capture and decrypt traffic only from a browser. Can I export and install the Fiddler CA in Firefox certificate store?

**Q:** I don't want to install the Fiddler CA in my operating system  certificate store. Insteasd, I wanto to export and install the Fiddler CA in Firefox certificate store. Is that possible?

## Solution

1. Export the Fiddler CA to your **Desktop** folder through the options in **Settings > HTTPS > Advanced > Export Fiddler CA**.

1. Open Firefox.

1. Go to **Settings** > **Privacy & Security**.

1. Click the **View Certificates** button to open the Firefox's **Certificate Manager**.

1. Within the **Certificate Manager**, select the **Authorities** tab.

1. Click the **Import...** button and choose the `Fiddler_Root_Certificate_Authority.crt` file from your **Desktop** folder.

1. Select the **Trust this CA to identify websites.** checkbox and click **OK**.

The Fiddler CA is now installed. You can now decrypt traffic captured from the Firefox browser.

>tip In addition to installing and Fiddler CA, you can also instruct Firefox to explicitly use the Fiddler Everywhere proxy through **Settings** > **General** > **Network Settings** > **Manual Proxy COnfiguration** and then set the Fiddler address and port (by default, IP `127.0.0.1` and port `8866`) as values for **HTTP Proxy** and **HTTPS Proxy** fields.


