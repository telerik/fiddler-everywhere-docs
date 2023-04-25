---
title: Capture System Traffic
description: "Learn how to capture HTTP(S) traffic from any application that respect the operating system proxy settings."
slug: fiddler-system-traffic
publish: true
position: 15
---


# Fiddler as a System Proxy

One of the main **capturing modes** in Fiddler Everywhere allows you to capture all HTTP(S) traffic that goes through the operating system. This feature is available through the **System Proxy** option.

While using **System Proxy**, Fiddler Everywhere acts as a forward proxy that captures all HTTP and HTTPS traffic between your computer and the Internet and helps you analyze and debug the incoming and outgoing traffic from virtually any application that respects the operating system proxy settings. You can use the captured traffic for various tasks such as debugging, mocking client & server behavior, identifying performance bottlenecks, and sharing with collaborators.

When **System Proxy** is switched ON, behind the scenes, Fiddler Everywhere modifies the operating system proxy settings by setting the Fiddler address and port as HTTP and HTTPS proxy (the default address is `http://127.0.0.1:8866`). For that to happen, the Fiddler application must be installed with administrative rights (that allow it to set or unset the system proxy settings). 

Almost all modern-day applications use secure connections through HTTPS, which also means that Fiddler needs administrative rights to install and trust the Fiddler root CA as a user-installed certificate authority in the operating system certificate manager. Trusting the Fiddler root CA enables Fiddler Everywhere to decrypt the otherwise encrypted HTTPS traffic while successfully establishing a TLS handshake. When Fiddler captures system traffic, it will act as an intermediate between the client application on one side and the server on the other hand. 

Pros of using the **System Proxy** capturing mode:

- Automatically captures all HTTP(S) traffic that goes through the operating system proxy.
- Captures traffic from multiple processes simultaneously.

Cons of using the **System Proxy** capturing mode:

- Needs administrative rights to set/unset the operating system proxy settings.
- Needs administrative rights to install and trust the Fiddler CA as a user-installed CA within the operating system certificate manager.
- Captures a lot of traffic from multiple processes, which might pollute your Live Traffic grid.

## Using Fiddler as System Proxy

1. Start the Fiddler Everywhere application.

1. [Install and trust the Fiddler Everywhere root CA (certificate authority)](#trusting-root-certificate-authority).

    >tip Fiddler Everywhere is a forward HTTP proxy. As such, it automatically captures non-secure HTTP traffic. However, it must act as an intermediate TLS proxy to capture and decrypt HTTPS traffic. For this to happen, Fiddler Everywhere must install its root CA (certificate authority) in the operating system keychain.

1. Switch the **System Proxy** toggle ON. 

As a result, Fiddler Everywhere captures the incoming and outgoing HTTP(S) traffic and displays the HTTP(S) sessions in the **Live Traffic grid**.

>tip When you switch **System Proxy** ON, open a browser and type an arbitrary web address like [https://example.com](https://example.com). Fiddler Everywhere immediately intercepts the request, and **Live Traffic** grid populates with the fetched HTTP sessions.


## Disabling Automatic Startup as System Proxy

By default, the Fiddler Everywhere application starts with the **System Proxy** toggle switched ON (which means it immediately changes the operating system proxy settings and starts capture of all HTTP(S) traffic). You can change that behavior by unchecking the [**Settings > Connections > Act as system proxy on startup**]({%slug connections-submenu%}) option.


## Trusting Root Certificate Authority

The proper Fiddler CA installation is a crucial step when using Fiddler Everywhere to [capture system HTTPS traffic]({%slug capture-traffic-get-started%}#system-capturing). Note that the CA installation is not mandatory if you choose to use the [preconfigured browser]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing) option or the [preconfigured terminal]({%slug fiddler-terminal-explicit%}) option.

### Install the Root Certificate Authority (Automatically)

Fiddler Everywhere can automatically install the Fiddler root CA and enable HTTPS capturing.

Follow the respective approach for installing the Fiddler CA depending on the used operating system ([Windows](#windows), [macOS](#macos), and [Linux](#linux)).

#### Windows

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**.

1. Click the **Trust Root Certificate** button. Confirm your choice and add the CA in the popup that appears.

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox. Click **Save**.

1. Back on the foremost Fiddler Everywhere screen, switch **System Proxy** ON to capture all HTTP(S) traffic that goes through the operating system proxy.


#### macOS

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Click the **Trust Root Certificate** button.

1. In the window that appears, enter your machine's administrative credentials.

    ![Enter Keychain credentials to trust the root certificate authority](../images/settings/settings-HTTPS-mac-keychain.png)

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox. Click **Save**.

1. Back on the foremost Fiddler Everywhere screen, switch **System Proxy** ON to capture all HTTP(S) traffic that goes through the operating system proxy.

#### Linux

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS**. Expand the **Advanced Settings** sub-menu and use the **Export root certificate(DER/Binary format)** from the drop-down menu. The certificate is exported to **~/Desktop** as a file named **FiddlerRootCertificate.crt**.

1. To import and trust the exported certificate, perform the following steps.
    >important (For localized Linux distributions only) Some Linux distributions, such as Ubuntu, use localized paths&mdash;for example, the name of the **Desktop** folder translates into the locale language. To resolve this issue, create a folder named **Desktop** in your root through `mkdir ~/Desktop`. Then, export the certificate to the newly-created directory. Once the certificate is installed, you can safely remove that directory.

    1. Create a directory and copy the exported certificate by executing the following commands.
        ```shell
        $ sudo mkdir /usr/share/ca-certificates/extra
        $ sudo cp ~/Desktop/FiddlerRootCertificate.crt /usr/share/ca-certificates/extra

        // Starts the tool and upgrades the certificates.
        $ sudo dpkg-reconfigure ca-certificates
        ```

    1. From the prompt, select **Yes** to install new certificate authorities.

        ![Add new certificate authority](../images/configuration/cert_ubunto_002.png)

    1. Choose the `FiddlerRootCertificate.crt` file and click **OK**.

        ![Add Fiddler certificate authority](../images/configuration/cert_ubunto_003.png)

    1. The certificates are now updated.

        ![Installedv Fiddler certificate authority](../images/configuration/cert_ubunto_004.png)

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox and clicking **Save**.

1. Back on the foremost Fiddler Everywhere screen, switch **System Proxy** ON to capture all HTTP(S) traffic that goes through the operating system proxy.

Fiddler Everywhere enables you to control the certificate authority installation and HTTPS system capture. Use the [**HTTPS** menu]({%slug decrypt-https-traffic%}) for more advanced features and options related to the root trust certificate and the HTTPS system capture.

>tip Fiddler Everywhere provides the [preconfigured browser-capturing option]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing), which enables you to skip the system capturing configuration. The predefined browser-capturing option comes in handy when you generate captured traffic only from a browser, lack administrative rights to install certificates and modify the system proxy, or when third-party VPNs and security tools collide with the Fiddler Everywhere proxy.


### Install the Root Certificate Authority (Manually)

In some specific cases, the automatic installation of the Fiddler's certificate authority might fail due to security restrictions, compatibility issues, limited read/write rights, corporate policies, etc. Fiddler Everywhere application presents an error message that notifies the user if the certificate installation has failed. To solve similar issues, you can export and install the Fiddler root CA manually:

1. Start Fiddler Everywhere and go to **Settings** > **HTTPS** > **Advanced Settings**.

1. Choose the appropriate certificate format (**DER/Binary**, **PEM/ASCII**, and **PKCS 12**) and click the **Export Root Certificate** button. The export option will export the certificate to a root folder called **Desktop**, so ensure that such a folder exists in your file system.

1. Add the exported certificate to the desired certificate manager (e.g., on [Linux]({%slug how-to-install-fiddler-root-certificate-in-firefox-on-linux%}), [macOS]({%slug how-to-install-fiddler-root-certificate-on-mac-os%}), custom application, etc.).

1. Enable capturing the HTTPS traffic by selecting the **Capture HTTPS traffic** checkbox. Click **Save**.

1. Back on the foremost Fiddler Everywhere screen, enable the **Live Traffic** to toggle to start capturing HTTP and HTTPS system traffic.



## Additional Resources

* [Learn more about the different capturing modes in Fiddler Everywhere here...]({%slug capture-traffic-get-started%})
* [Learn more about how Fiddler Everywhere works as an HTTPS proxy]({%slug fe-how-it-works%}) 
* [Learn more about how Fiddler Everywhere handles TLS versions]({%slug fe-tls-version-specifics%}).