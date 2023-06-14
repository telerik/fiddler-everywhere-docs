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

You can install the Fiddler Everywhere root certificate on Windows automatically. For the step-by-step guide, refer to the [First Steps with Fiddler Everywhere on Windows article]({%slug first_steps_windows%}#start-system-capturing).

If the automatic installation and enabling of the trust certificate do not work, you can manually install the trust certificate:

1. Make sure you already have `FiddlerRootCertificate.crt` file on your machine. To export the certificate from Fiddler Everywhere, use the [Export root certificate]({%slug decrypt-https-traffic%}) option.

1. Go to the __Desktop__ and double-click the `FiddlerRootCertificate.crt` file.

1. Click the __Install Certificate...__ button.

1. Select the __Local Machine__ store location and click __Next__.

1. Select the __Place all certificates in the following store__ option and click __Browse...__.

1. Choose the __Trusted Root Certification Authorities__ folder and click __OK__.

1. Click __Next__ to go to the final step of __Certificate Import Wizard__.

1. Click __Finish__. The Fiddler root certificate is now installed in your Windows certificate manager.

1. Open the Fiddler Everywhere application, go to __Settings > HTTPS__ and check the **Capture HTTPS traffic** checkbox.

1. Restart Fiddler Everywhere and start capturing HTTPS traffic.


If you are still unable to capture HTTPS traffic after the steps above, consider troubleshooting your configuration by looking up for possible errors logged in [the Fiddler log files]({%slug fiddler-log-files%}) or contacting the Fiddler Everywhere support (through the **Help > Contact Support** option).

## Contact us

In case you have more questions or need assistance configuring the root certificate on WIndows, then you can reach out to our support team through the [**Contact Support**]({%slug file-menu%}#contact-support) option.