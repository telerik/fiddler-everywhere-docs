---
title: HTTPS
slug: decrypt-https-traffic
tags: https, https traffic, SSL, decrypt https, https decryption, capturing HTTPS, trust certificate
publish: true
position: 10
---

## HTTPS Settings

After the initial startup, the Fiddler Everywhere application could only capture non-secure traffic (HTTP) while SSL traffic is not captured. To enable capturing and decrypting HTTPS traffic, you will need to explicitly install a root trust certificate via the __HTTPS__ submenu in __Settings__.

![default https settings](../../images/settings/settings-https.png)

#### Trust Root Certificate

The button installs and trusts the Fiddler root certificate (macOS and Windows only).

#### Capture HTTPS traffic

The option defines if Fiddler will capture HTTPS traffic or will skip it. It is inactive by default.  To active it, the root certificate should be trusted first.

#### Export Root Certificate to Desktop and Trust Certificate

Expand __Advanced Settings__ drop-down to show the __Export Root Certificate to Desktop and Trust Certificate__ button. Click the button to export Fiddler the root certificate to the Desktop folder for manual import and trusting of the certificate.

## See Also

* [How to install Fiddler root certificate on Windows]({% slug how-to-install-fiddler-root-certificate-on-windows %})
* [How to install Fiddler root certificate on Mac OS]({% slug how-to-install-fiddler-root-certificate-on-mac-os %})
* [How to install Fiddler root certificate in Firefox on Linux]({% slug how-to-install-fiddler-root-certificate-in-firefox-on-linux %})
