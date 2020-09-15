---
title: HTTPS
slug: decrypt-https-traffic
tags: https, https traffic, SSL, decrypt https, https decryption, capturing HTTPS, trust certificate
publish: true
position: 10
previous_url: /user-guide/settings/https/https-decryption
---

## HTTPS Settings Menu

After the initial startup, the Fiddler Everywhere application could only capture non-secure traffic (HTTP) while SSL traffic is not captured. To enable capturing and decrypting HTTPS traffic, you will need to explicitly install a root trust certificate via the __HTTPS__ sub-menu in __Settings__.

![default https settings](../../images/settings/settings-https.png)

## Trust Root Certificate

The button installs and trusts the Fiddler root certificate (macOS and Windows only).

## Capture HTTPS traffic

The option defines if Fiddler Everywhere should capture HTTPS traffic or skip it. By default, this option is disabled. To enable the HTTPS traffic capturing, first you need to confirm whether the root certificate is trusted. If it is trusted you can simply enable the capture option.

## Export Root Certificate to Desktop and Trust Certificate

Expand __Advanced Settings__ drop-down to show the __Export Root Certificate to Desktop and Trust Certificate__ button. Click the button to export Fiddler the root certificate to the Desktop folder for manual import and trusting of the certificate.

## Additional Resources

* [How to install Fiddler root certificate on Windows]({% slug how-to-install-fiddler-root-certificate-on-windows %})
* [How to install Fiddler root certificate on Mac OS]({% slug how-to-install-fiddler-root-certificate-on-mac-os %})
* [How to install Fiddler root certificate in Firefox on Linux]({% slug how-to-install-fiddler-root-certificate-in-firefox-on-linux %})
