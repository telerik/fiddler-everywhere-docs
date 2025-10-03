---
title: Manually Installing the Root Certificate on macOS
description: "Learn how to manually install the Fiddler Everywhere web-debugging client root certificate on macOS."
type: how-to
slug: how-to-install-fiddler-root-certificate-on-mac-os
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| OS | macOS |

## Description

To capture secure traffic (HTTPS), Fiddler Everywhere needs to install a root CA, called `Fiddler Root Certificate Authority`, in the macOS Keychain Access application. How can I install the trust certificate automatically or manually?

## Automated Approach (Recommended)

The recommended approach is to install the Fiddler Everywhere root certificate on macOS automatically. For the step-by-step guide, refer to the [First Steps with Fiddler Everywhere on macOS article](slug://first_steps_macos).  

## Manual Approach

If the automatic installation and enabling of the trust certificate do not work, you can manually install the trust CA within your keychain application:

1. Open Fiddler Everywhere and go to **Settings** > **HTTPS_** and expand the **Advanced Settings** menu.
1. Use the **Export root certificate(DER/Binary format)** option from the drop-down menu. As a result, the `Fiddler_Root_Certificate_Authority.crt` file will be created in the **Desktop** folder.
1. Go to the **Desktop** folder and click `Fiddler_Root_Certificate_Authority.crt`. The Keychain Access application starts and opens the **Certificates** section.
1. Double-click the **Fiddler_Root_Certificate_Authority.crt** certificate to open it.
1. Expand the **Trust** section and choose **Always Trust** in the **When using this certificate** drop-down. The **Fiddler root certificate is now installed and trusted.** notification appears.
1. Open Fiddler Everywhere and start capturing secure traffic.
