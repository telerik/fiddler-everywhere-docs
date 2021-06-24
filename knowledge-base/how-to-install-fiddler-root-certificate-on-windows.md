---
title: How to Install Fiddler Root Certificate on Windows
description: An example on how to install Fiddler root certificate on Windows
type: how-to
slug: how-to-install-fiddler-root-certificate-on-windows
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| OS | Windows |

#### Description

How to install the Fiddler root certificate on Windows manually.

>tip Fiddler Everywhere provides an [option to install the trusted root certificate automatically]({%slug decrypt-https-traffic%}#trust-root-certificate). Follow the steps described in the [Solution](#solution) section below only if you need to add the certificate manually.

## Prerequisites

You need the __FiddlerRootCertificate.crt__ file. For the instructions to download the certificate, see [Export Root Certificate]({%slug decrypt-https-traffic%}#export-root-certificate).

## Solution

1. Go to your __Desktop__ and double-click  the __FiddlerRootCertificate.crt__ file.
2. Click the __Install Certificate...__ button.
3. Select the __Local Machine__ Store Location and click __Next__.
4. Select the __Place all certificates in the following store__ option and click __Browse...__.
5. Choose the __Trusted Root Certification Authorities__ folder and click __OK__.
6. Click __Next__ to go to the final step of __Certificate Import Wizard__.
7. Click __Finish__.

The Fiddler root certificate is now installed.
