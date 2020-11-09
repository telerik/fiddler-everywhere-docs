---
title: How to Install Fiddler Root Certificate on Mac OS
description: An example on how to install Fiddler root certificate on Mac OS
type: how-to
slug: how-to-install-fiddler-root-certificate-on-mac-os
tags: https, install, root certificate
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| OS | macOS |

#### Description

To capture secure traffic (HTTPS), Fiddler Everywhere needs to install a root trust certificate in the Keychain Access application. The certificate is called **DO_NOT_TRUST_FiddlerRoot**. This article provides detailed instructions for installing the trust certificate automatically (recommended) or manually (for troubleshooting and some specific corner cases).

## Installing the Certificate Automatically (recommended)

1. Open **Fiddler Everywhere** and go to **_Settings > HTTPS_**.

2. Click on the **Trust root certificate** button. **Fiddler root certificate is now installed and trusted.**

3. Open **Fiddler Everywhere** and start capturing secure traffic.

## Installing the Certificate Manually

In some cases, the automatic installation and enabling of the trust certificate might not work. For similar cases, you could manually add the Fiddler Everywhere trust certificate to your keychain.

1. Open **Fiddler Everywhere** and go to **_Settings > HTTPS_** and expand the **_Advanced Settings_** menu.

2. Click on **_Export root certificate to Desktop_**. As a result a file **FiddlerRootCertificate.crt** will be created on **Desktop** folder.

3. Go to the **Desktop** folder and click on **FiddlerRootCertificate.crt**. The **Keychain Access** application will start and open the **Certificates** section.

4. Double-click on **DO_NOT_TRUST_FiddlerRoot** certificate to open it.

5. Expand the **Trust** section and choose **Always Trust** in the **When using this certificate** dropdown.

    ![Manually trusting the certificate](../images/kb/mac-certificate/trusting-certificate.png)

    **Fiddler root certificate is now installed and trusted.**

6. Open **Fiddler Everywhere** and start capturing secure traffic.


