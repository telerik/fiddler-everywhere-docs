---
title: Trust Fiddler Certificate Authority
description: "Install and trust the Fiddler's root CA in your operating system and learn how it relates to enabling the HTTPS capturing of system traffic."
slug: trust-certificate
position: 20
publish: true
previous_url: /installation-and-update/trust-certificate-configuration
---

# Trust Fiddler's Certificate Authority

This article provides additional information about the options for installing the Fiddler Everywhere certificate authority (CA) in your operating system. The proper certificate installation is a crucial step when using Fiddler Everywhere to [capture system  HTTPS traffic]({%slug capture-traffic-get-started%}#system-capturing). Note that the certificate authority installation is not mandatory if you choose to use the [independent browser capturing]({%slug capture-traffic-get-started%}#independent-browser-capturing) or [terminal capturing]({%slug capture-traffic-get-started%}#terminal-capturing) modes.


## Install & Trust the Fiddler's Certificate Authority (Recommended Automated Approach)

The recommended approach for installing and trusting the Fiddle CA is through the in-app system capturing mode wizards. Follow the articles below for detailed instructions n how to use the built-in wizards to install the Fiddler CA.

* [Installing the Fiddler Everywhere CA on Windows]({% slug first_steps_windows %}#capturing-system-traffic)
* [Installing the Fiddler Everywhere CA on macOS]({% slug first_steps_macos %}#capturing-system-traffic)
* [Installing the Fiddler Everywhere CA on Linux]({% slug first_steps_linux %}#capturing-system-traffic)

Once Fiddler CA installs successfully, you can capture and analyze HTTPS traffic. The CA install once and remains valid until it is explicitly uninstalled. The CA name as listed within the operating system certificate manager is `Fiddler Root Certificate Authority`.

## Install & Trust the Fiddler's Certificate Authority (Manual Approach)

Fiddler Everywhere provides the option to manually go through the certificate authority installation and enable the HTTPS system traffic capture. In most cases, to capture the operating system HTTPS traffic, you can use the [recommended automated installation of the Fiddler CA](#install--trust-the-fiddlers-certificate-authority-recommended-automated-approach) through our wizards. 

>important Use the manual approach only if the automated approach fails or you want to control and track the different steps of the CA installation.

As Fiddler Everywhere is a cross-platform web-debugging proxy available for Windows, macOS, and Linux, you must follow the respective approach for installing the tool.


### Windows

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**.

1. Click the **Trust Fiddler CA** button. Confirm your choice and add the certificate in the popup that appears.

    >tip The **Trust Fiddler CA** option automatically exports and installs the Fiddler CA in the Windows **user store**. If you wan't to install the Fiddler CA in the Windows **machine store** (to be globally used from different users) then use the **Trust Fiddler CA in the Machine Store** from the [**Advanced Options**]({%slug decrypt-https-traffic%}).

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox. Click **Save**.

1. Back on the foremost Fiddler Everywhere screen, toggle ON the **System Proxy** to start capturing HTTP and HTTPS system traffic.

### macOS

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Click the **Trust Fiddler CA** button.

1. In the window that appears, enter your machine's administrative credentials.

    ![Enter Keychain credentials to trust the root certificate](../images/settings/settings-HTTPS-mac-keychain.png)

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox. Click **Save**.

1. Back on the foremost Fiddler Everywhere screen, enable the **Live Traffic** to toggle to start capturing HTTP and HTTPS system traffic.

### Linux

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Expand the **Advanced Settings** sub-menu and use the **Export Fiddler CA(DER/Binary format)** from the drop-down menu. The certificate is exported to **~/Desktop** as a file with the name **Fiddler_Root_Certificate_Authority.crt**.

1. To import and trust the exported certificate, perform the following steps.

    >important (For localized Linux distributions only) Some Linux distributions, such as Ubuntu, use localized paths&mdash;for example, the name of the **Desktop** folder translates into the locale language. To resolve this issue, create a folder named **Desktop** in your root through `mkdir ~/Desktop`. Then, export the certificate to the newly-created directory. Once the certificate is installed, you can safely remove that directory.

    1. Create a directory and copy the exported certificate by running the following commands.
        ```shell
        $ sudo mkdir /usr/share/ca-certificates/extra
        $ sudo cp ~/Desktop/Fiddler_Root_Certificate_Authority.crt /usr/share/ca-certificates/extra

        // Starts the tool and upgrades the certificates.
        $ sudo dpkg-reconfigure ca-certificates
        ```

        >tip In case your Linux distribution does not use the `dpkg` library, then refer to your OS documentation for alternative ways to handle the CA installation or use our dedicated [Fedora, CentOS, RedHat]({%slug iddler-fedora-centos%}) and [XFCE]({%slug fiddler-xfce%}) instructions.

    1. From the prompt, select **Yes** to install new certificates.

        ![Add new certificate](../images/configuration/cert_ubunto_002.png)

    1. Choose the `Fiddler_Root_Certificate_Authority.crt` file (while using the **Space** bar) and click **OK**.

        ![Add Fiddler certificate](../images/configuration/cert_ubunto_003.png)

    1. The certificates are now updated.

        ![Add Fiddler certificate](../images/configuration/cert_ubunto_004.png)

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox and clicking **Save**.

1. Back in the foremost Fiddler Everywhere screen, toggle ON the **System Proxy** to capture HTTP and HTTPS system traffic.

Fiddler Everywhere enables you to control the certificate installation and HTTPS system capture. Use the [**HTTPS** menu]({%slug decrypt-https-traffic%}) for more advanced features and options related to the root trust certificate and the HTTPS system capture.

>tip Fiddler Everywhere provides the [independent browser capturing mode]({%slug capture-traffic-get-started%}#independent-browser-capturing-browser-capturing), which enables you to skip the system capturing configuration. The predefined browser-capturing option comes in handy when you generate captured traffic only from a browser, lack administrative rights to install certificates and modify the system proxy, or when third-party VPNs and security tools collide with the Fiddler Everywhere proxy.


## Exporting the Fiddler CA

The automatic installation of the trust certificate can fail due to security restrictions, compatibility issues, limited read/write rights, corporate policies, etc. In that case, the Fiddler Everywhere application presents an error message that notifies the user that the certificate installation has failed. You can export the Fiddler certificate and install it to solve similar issues manually.

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS** > **Advanced Settings**.

1. Choose the proper certificate format (**DER/Binary**, **PEM/ASCII**, and **PKCS 12**) and click the **Export Fiddler CA** button. The export option will export the certificate to a root folder called **Desktop**, so ensure that such a folder exists in your file system.

1. Add the exported certificate to the desired certificate manager (for example, on [Linux]({%slug how-to-install-fiddler-root-certificate-in-firefox-on-linux%}), [macOS]({%slug how-to-install-fiddler-root-certificate-on-mac-os%}), custom application, etc.).

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox. Click **Save**.

1. Back in the **Traffic** pane, enable the **System Proxy** to start capturing HTTP and HTTPS system traffic.

