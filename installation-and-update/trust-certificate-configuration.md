---
title: Trust Root Certificate
description: "Learn more about how to install and trust the root certificate in your operating system and how it relates to enabling the HTTPS capturing of system traffic."
slug: trust-certificate
position: 20
---

# Trust Root Certificate

This article provides additional information about the options for installing the Fiddler Everywhere root trust certificate in your operating system. The proper certificate enablement is a crucial step when using Fiddler to [capture secure system traffic]({%slug capture-traffic-get-started%}#system-capturing). Note that the certificate installation is not mandatory if you choose the [preconfigured browser capturing]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing) option.


## Install & Trust the Root Certificate (Quickstart)

The quickstart certificate installation options of Fiddler Everywhere for each platform are part of the getting started step-by-step tutorials:

* [Installing the Fiddler Everywhere root certificate on Windows]({% slug first_steps_windows %}#capturing-secure-traffic)
* [Installing the Fiddler Everywhere root certificate on macOS]({% slug first_steps_macos %}#capturing-secure-traffic)
* [Installing the Fiddler Everywhere root certificate on Linux]({% slug first_steps_linux %}#capturing-secure-traffic)


## Install & Trust the Root Certificate (Settings)

Fiddler Everywhere provides the option to manually go through the certificate installation and enable the HTTPS system traffic capture.

As Fiddler Everywhere is a cross-platform web-debugging proxy available for Windows, macOS, and Linux, you need to follow the respective approach for installing the tool.

### For Windows

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**.

1. Click the **Trust Root Certificate** button. Confirm your choice and add the certificate in the popup that appears.

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox. Click **Save**.

1. Back on the foremost Fiddler Everywhere screen, enable the **Live Traffic** toggle to start capturing HTTP and HTTPS system traffic.


### For macOS

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Click the **Trust Root Certificate** button.

1. In the window that appears, enter your machine administrative credentials.

    ![Enter Keychain credentials to trust the root certificate](../images/settings/settings-HTTPS-mac-keychain.png)

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox. Click **Save**.

1. Back on the foremost Fiddler Everywhere screen, enable the **Live Traffic** toggle to start capturing HTTP and HTTPS system traffic.

### For Linux

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Expand the **Advanced Settings** sub-menu and use the **Export root certificate(DER/Binary format)** from the drop-down menu. The certificate is exrpoted to **~/Desktop** as file with name **FiddlerRootCertificate.crt**.

1. To import and trust the exported certificate, perform the following steps.
    >important (For localized Linux distributions only) Some Linux distributions, such as Ubuntu, use localized paths&mdash;for example, the name of the **Desktop** folder is translated into the locale language. To resolve this issue, create a folder named **Desktop** in your root through `mkdir ~/Desktop`. Then, export the certificate to the newly-created directory. Once the certificate is installed, you can safely remove that directory.

    1. Create a directory and copy the exported certificate by running the following commands.
        ```shell
        $ sudo mkdir /usr/share/ca-certificates/extra
        $ sudo cp ~/Desktop/FiddlerRootCertificate.crt /usr/share/ca-certificates/extra

        // Starts the tool and upgrades the certificates.
        $ sudo dpkg-reconfigure ca-certificates
        ```

    1. From the prompt, select **Yes** to install new certificates.

        ![Add new certificate](../images/configuration/cert_ubunto_002.png)

    1. Choose the `FiddlerRootCertificate.crt` file and click **OK**.

        ![Add Fiddler certificate](../images/configuration/cert_ubunto_003.png)

    1. The certificates are now updated.

        ![Add Fiddler certificate](../images/configuration/cert_ubunto_004.png)

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox and clicking **Save**.

1. Back in the foremost Fiddler Everywhere screen, enable the **Live Traffic** toggle to start capturing HTTP and HTTPS system traffic.

Fiddler Everywhere enables you to control the certificate installation and HTTPS system capture. Use the [**HTTPS** menu]({%slug decrypt-https-traffic%}) for more advanced features and options related to the root trust certificate and the HTTPS system capture.

>tip Fiddler Everywhere provides the [preconfigured browser-capturing option]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing), which enables you to skip the system capturing configuration. The predefined browser-capturing option comes in handy when you generate captured traffic only from a browser, lack administrative rights to install certificates and modify the system proxy, or when third-party VPNs and security tools collide with the Fiddler Everywhere proxy.
