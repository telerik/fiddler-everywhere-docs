---
title: HTTPS
description: "Learn how to use the HTTPS settings menu in the Fiddler Everywhere web-debugging proxy tool."
slug: decrypt-https-traffic
publish: true
position: 10
---

# HTTPS Menu

After the initial startup, Fiddler Everywhere default captures only non-secure traffic (HTTP).

To enable the capturing and decrypting of HTTPS traffic, you need to install the Fiddler root CA (certificate authority) through the **HTTPS** sub-menu under **Settings**.

- **Trust Fiddler CA**&mdash;Installs and trusts the Fiddler root Certificate authority (CA) in the **user store** of the operating system certificate manager. The option is available on [macOS]({% slug first_steps_macos %}#start-system-capturing) and [Windows]({% slug first_steps_windows %}#start-system-capturing). On Linux, you have to [export and trust the Fiddler CA manually]({% slug first_steps_linux %}#start-system-capturing). After you install the CA, you are ready to [enable the capturing of HTTPS traffic](#capture-https-traffic).

- **Capture HTTPS traffic**&mdash;Defines if Fiddler Everywhere will capture HTTPS traffic or skip it. By default, this option is disabled. Before you enable the capturing of HTTPS traffic, you must trust the Fiddler root certificate.

- **Ignore server certificate errors**&mdash;Controls whether Fiddler Everywhere warns you if an HTTPS server presents a certificate that cannot be validated. Do not check this box when surfing the Internet because of a possible [spoofing security threat](https://en.wikipedia.org/wiki/Spoofing_attack). 

    * The **Ignore server certificate errors** checkbox is active (with a tick), but the ignore list is left blank&mdash;Fiddler will automatically ignore all server certificate errors. 

    * The **Ignore server certificate errors** checkbox is active (with a tick), and the ignore list is populated with specific endpoints&mdash;Fiddler will ignore only server certificate errors for the listed endpoints. Adding endpoints to the ignore list works only for new connections.

    * The **Ignore server certificate errors** checkbox is inactive (no tick)&mdash;Fiddler won't ignore server certificate errors, and upon hitting one, will present a special Fiddler's page that informs the user about the insecure connection. The custom Fiddler's page also provides a quick link to add the specific endpoint to the ignore list.

- **Advanced Settings**&mdash;A drop-down menu that provides the following additional options related to the Fiddler root CA (certificate authority):

    - **Trust Fiddler CA in the Machine Store**&mdash;Installs and trusts the Fiddler CA in the **machine store** of the operating system certificate manager. The option is available only on [Windows]({% slug first_steps_windows %}#start-system-capturing).

    - **Export Fiddler CA**&mdash;A drop-down menu to select a format and export the Fiddler root CA to the operating system **Desktop** folder. Some operating systems do not have a default folder named **Desktop**. In such cases, you must create this folder (`~/Desktop` for macOS and Linux distributions) to export the certificate successfully. Fiddler Everywhere provides options to export the following formats:
        * **Export Fiddler CA(DER/Binary format)**&mdash;Exports the Fiddler Everywhere CA in binary format as `Fiddler_Root_Certificate_Authority.crt`.
        * **Export Fiddler CA(PEM/ASCII format)**&mdash;Exports the Fiddler Everywhere CA in ASCII format as `Fiddler_Root_Certificate_Authority.pem`.
        * **Export Fiddler CA(PKCS 12 format)**&mdash;Exports the Fiddler Everywhere CA in PKCS 12 format as `Fiddler_Root_Certificate_Authority.p12`.

    - **Reset Fiddler CA**&mdash;Click the button to remove the currently trusted CA, generate a new one, and trust it.
    
    - **Remove Fiddler CA**&mdash;Click the button to remove the currently trusted CA from the OS certificate store. As a result, the capturing of HTTPS traffic will be disabled.

The following figure displays the default settings of the **HTTPS** menu.  

![default https settings](../../images/settings/settings-https.png)

## Inline Notifications

If the Fiddler root CA is not yet trusted, an inline notification will warn you that the [system HTTPS capture]({%slug capture-traffic-get-started%}#system-capturing) is disabled. This notification will hide if you use the [independent browser capturing option]({%slug capture-traffic-get-started%}#independent-browser-capturing) and will re-appear once you close the active independent browser instance.

![inline notification](../../images/get-started/notification.png) 