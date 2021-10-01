---
title: HTTPS
description: "Learn how to use the HTTPS menu and use the secure traffic capturing and root certificate options in the Fiddler Everywhere web-debugging HTTP-proxy client."
slug: decrypt-https-traffic
publish: true
position: 10
---

# HTTPS Menu

By default, after the initial startup, Fiddler Everywhere captures only non-secure traffic (HTTP).

To enable the capturing and decrypting of HTTPS traffic, you need to install the Fiddler root certificate through the **HTTPS** sub-menu under **Settings**.

* **Trust root certificate**&mdash;Installs and trusts the Fiddler root certificate. The option is available only on [macOS]({% slug first_steps_macos %}#trusting-the-root-certificate) and [Windows]({% slug first_steps_macos %}#trusting-the-root-certificate). On Linux, you have to [export and trust the root certificate manually]({% slug first_steps_linux %}#trusting-the-root-certificate). After you install the certificate, you are ready to [enable the capturing of HTTPS traffic](#capture-https-traffic).
* **Capture HTTPS traffic**&mdash;Defines if Fiddler Everywhere will capture HTTPS traffic or skip it. By default, this option is disabled. Before you enable the capturing of HTTPS traffic, you must trust the Fiddler root certificate.
* **Ignore server certificate errors**&mdash;Controls whether Fiddler Everywhere will warn you if an HTTPS server presents a certificate that cannot be validated. Do not check this box when surfing the Internet because of a possible spoofing security threat.

    A typical use case for the **Ignore server certificate errors** option will be certificate validation errors on macOS while trying to access `*.icloud.com` domains. Use the option to ignore the validation error and continue the debugging process.

* **Advanced Settings**&mdash;A drop-down menu which provides the following additional options related to the Fiddler root certificate:

    * **Export Root Certificate**&mdash;Click the button to export the Fiddler root certificate to the **Desktop** folder. Then, you can manually import and trust the Fiddler Everywhere certificate. The name of the exported file is `FiddlerRootCertificate.crt`.

    Note that some operating systems might not have a folder named **Desktop**. In such cases, you need to create this folder to export the certificate successfully.

    * **Reset root certificate**&mdash;Click the button to remove the currently trusted root certificate, generate a new one, and trust it. Several OS prompts will be shown, and you have to accept all of them.

    * **Remove Root Certificate**&mdash;Click the button to remove the currently trusted root certificate from the OS certificate store. As a result, the capturing of HTTPS traffic will be disabled.

The following figure displays the default settings of the **HTTPS** menu.  

![default https settings](../../images/settings/settings-https.png)
