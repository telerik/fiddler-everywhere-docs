---
title: HTTPS
description: Secure traffic (HTTPS) capturing and root certificate options in the Fiddler Everywhere application
slug: decrypt-https-traffic
publish: true
position: 10
---

# HTTPS Menu

After the initial startup, the Fiddler Everywhere application captures only non-secure traffic (HTTP). SSL encrypted traffic isn't captured by default. To enable capturing and decrypting HTTPS traffic, you need to install the Fiddler root certificate via the __HTTPS__ sub-menu under __Settings__.

![default https settings](../../images/settings/settings-https.png)

## Trust root certificate

The **Trust root certificate** button installs and trusts the Fiddler root certificate. The option is available only on macOS and Windows. On Linux, you have to manually export and trust the root certificate. After you install the certificate, you are ready to [enable the capturing of HTTPS traffic](#capture-https-traffic).

## Capture HTTPS traffic

The **Capture HTTPS traffic** option defines if Fiddler Everywhere should capture HTTPS traffic or skip it. By default, this option is disabled. Before you enable the capturing of HTTPS traffic, you must [trust the Fiddler root certificate](#trust-root-certificate).

## Ignore server certificate Errors (unsafe)

The **Ignore server certificate errors** button controls whether Fiddler warns you if an HTTPS server presents a certificate that cannot be validated. You should not check this box when surfing the Internet due to the spoofing security threat.

>tip A typical use case for the **Ignore server certificate errors** option would be certificate validation errors on macOS while trying to access *.icloud.com domains. Use the option to ignore the validation error and continue the debugging process.

## Advanced Settings

The **Advanced Settings** drop-down provides several additional options related to the Fiddler root certificate.

### Export root certificate

Expand the __Advanced Settings__ drop-down to show the __Export Root Certificate__ button. Click the button to export the Fiddler root certificate to the _Desktop_ folder. Then you can manually import and trust the Fiddler Everywhere certificate. The name of the exported file is **FiddlerRootCertificate.crt**.

>tip Some operating systems might not have a folder named _Desktop_. In such cases, you need to create this folder to export the certificate successfully.

### Reset root certificate

Expand the __Advanced Settings__ drop-down to show the __Reset root certificate__ button. Click the button to remove the currently trusted root certificate, generate a new one, and trust it. Several OS prompts will be shown, and you have to accept all of them.

### Remove root certificate

Expand the __Advanced Settings__ drop-down to show the __Remove Root Certificate__ button. Click the button to remove the currently trusted root certificate from the OS certificate store. As a result, the capturing of HTTPS traffic will be disabled.

## Additional Resources

* [How to install Fiddler root certificate on Windows]({% slug how-to-install-fiddler-root-certificate-on-windows %})
* [How to install Fiddler root certificate on Mac OS]({% slug how-to-install-fiddler-root-certificate-on-mac-os %})
* [How to install Fiddler root certificate in Firefox on Linux]({% slug how-to-install-fiddler-root-certificate-in-firefox-on-linux %})
