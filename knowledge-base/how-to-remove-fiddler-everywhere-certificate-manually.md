---
title: How to Remove Fiddler Everywhere Certificate Manually
description: Steps to remove Fiddler Everywhere certificate from windows and macOS manually
type: how-to
slug: how-to-remove-fiddler-everywhere-certificate-manually
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |

#### Description

Fiddler Everywhere certificate is installed to inspect network traffic and debug it. If you don't want the traffic monitoring anymore, you can remove the Fiddler Everywhere HTTPS certificate from your system. The steps to remove the Fiddler Everywhere HTTPS certificate are given below: 

## macOS 

1. In your system, open the **Keychain Access** application. Select the **login** keychain from the list and **All Items** from the category list. 

2. Scroll to the **DO_NOT_TRUST_FiddlerRoot** certificate and press **Delete**.

    ![macOS 1st and 2nd Step](../images/kb/remove-manually/keychain-access-login-and-do-not-trust-fiddlerroot-delete.png)

3. Pressing the **Delete** button prompts a window asking for a confirmation. In the pop-up window, answer **Yes** and enter your system **Password** in the prompt window. This will update the Keychain settings. 

    ![macOS 3rd Step to delete Fiddler Everywhere Certificate](../images/kb/remove-manually/select-yes-to-delete-fiddler-everywhere-certificate-from-macos.png)

Following the above steps will remove the Fiddler Everywhere HTTPS certificate from your macOS. 

## Windows 

1. In the search bar of your Windows system, open the **Manage User Certificates** menu.

    ![Manage User Certificates](../images/kb/remove-manually/manage-user-certificate-using-start-menu.png)

2. A window opens where you can see list of **Certificates - Current User**. In the list, expand the **Trusted Root Certification Authorities** item and select **Certificates**. In the list on the right, search for **DO_NOT_TRUST_FiddlerRoot**.

    ![Certificates - Current User](../images/kb/remove-manually/certificates-current-user-trusted-root-certification.png)

3. Select **DO_NOT_TRUST_FiddlerRoot** and delete the certificate. When trying to delete the certificate, you will come across couple of prompts. Click **Yes** in both the prompts. It will completely remove the certificate from your system. 

    ![Delete Fiddler Everywhere](../images/kb/remove-manually/select-do-not-trust-fiddlerroot-and-press-yes.png)

Following the above steps will remove the Fiddler Everywhere HTTPS certificate from your Windows system. 