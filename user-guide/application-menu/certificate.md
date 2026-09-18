---
title: Certificate Menu
page_title: Certificate Menu - Application Menu | Fiddler Everywhere
description: "Use the Certificate section of the Fiddler Everywhere application menu to trust, export, reset, or remove the Fiddler root certificate, and to control HTTPS traffic capturing."
slug: app-menu-certificate
tags: Fiddler certificate menu, Fiddler root certificate, Fiddler HTTPS capturing
position: 5
publish: true
---

# Certificate Menu

The **Certificate** section of the [application menu](slug://app-menu-section) contains the following options:

- **Trust Root Certificate**&mdash;Automatically installs and trusts the Fiddler certificate authority (CA) in the user certificate store of the operating system certificate manager. The option is available on [macOS](slug://first_steps_macos) and [Windows](slug://first_steps_windows). On Linux, you have to [export and trust the Fiddler CA certificate manually](slug://first_steps_linux). After you install the CA, you are ready to enable the capturing of HTTPS traffic.
- **Export Root Certificate**&mdash;Automatically exports the Fiddler Everywhere CA file in a format specific to the operating system used. The certificate is exported to the `Desktop` folder. Use the **Settings** > **HTTPS** section to export the certificate explicitly in a specific format.
- **Reset Certificate**&mdash;Removes the currently installed CA, generates a new one, and adds it to the user certificate store. It requires elevated privileges for the Fiddler Everywhere application.
- **Remove Certificate**&mdash;Completely removes the currently installed Fiddler CA. Requires elevated privileges for the Fiddler Everywhere application.
- **Capture HTTPS Traffic**&mdash;Defines whether Fiddler Everywhere will capture HTTPS traffic or skip it. By default, this option is disabled, and Fiddler will capture only non-secure HTTP traffic. The Fiddler certificate authority must be installed and trusted to use this option.
- **Ignore Server Errors (Unsafe)**&mdash;Controls whether Fiddler Everywhere warns you if an HTTPS server presents a certificate that cannot be validated.

>tip All options from the **Certificate** menu are also available through the Fiddler **Settings** > **HTTPS** section.

## See Also

- [Application Menu](slug://app-menu-section)
- [HTTPS Settings](slug://decrypt-https-traffic)
- [View Menu](slug://app-menu-view)
- [Tools Menu](slug://app-menu-tools)
- [Help Menu](slug://app-menu-help)
