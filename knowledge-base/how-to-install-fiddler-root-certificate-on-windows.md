---
title: Manually Installing the Root Certificate on Windows
description: "Learn how to manually install the root certificate for Fiddler Everywhere on Windows."
type: how-to
slug: how-to-install-fiddler-root-certificate-on-windows
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| OS | Windows |

## Description

How can I manually install the Fiddler root certificate on Windows?

## Solution

It is recommended that you install the Fiddler Everywhere root certificate on Windows automatically. For the step-by-step guide, refer to the [First Steps with Fiddler Everywhere on Windows article]({%slug first_steps_windows%}#start-system-capturing).

If the automatic installation and enabling of the trust certificate do not work, you can manually install the trust certificate:

1. Make sure you have `FiddlerRootCertificate.crt` file on your machine. To download the certificate, refer to the [Export Root Certificate]({%slug decrypt-https-traffic%}#export-root-certificate) article.
1. Go to the __Desktop__ and double-click the `FiddlerRootCertificate.crt` file.
1. Click the __Install Certificate...__ button.
1. Select the __Local Machine__ store location and click __Next__.
1. Select the __Place all certificates in the following store__ option and click __Browse...__.
1. Choose the __Trusted Root Certification Authorities__ folder and click __OK__.
1. Click __Next__ to go to the final step of __Certificate Import Wizard__.
1. Click __Finish__.

The Fiddler root certificate is now installed.
