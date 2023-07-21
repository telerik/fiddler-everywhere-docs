---
title: Manually Removing Fiddler Everywhere Certificate
description: "Learn how to remove the Fiddler Everywhere web-debugging client certificate from Windows and macOS manually."
type: how-to
slug: how-to-remove-fiddler-everywhere-certificate-manually
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |

## Description

The Fiddler Everywhere certificate is installed to inspect network traffic and debug it. I don't want the traffic monitoring anymore, so how can I remove the HTTPS certificate from my system?

## Solution

To remove the root certificate, follow the steps in each of the sections below depending on the OS you use.

### On macOS

1. In your system, open the Keychain Access application. Select the **login** keychain from the list and **All Items** from the category list.

2. Scroll to the **Fiddler_Root_Certificate_Authority** certificate and press **Delete**.

    ![macOS 1st and 2nd Step](../images/kb/remove-manually/keychain-access-login-and-do-not-trust-fiddlerroot-delete.png)

3. Clicking the **Delete** button prompts a window asking for a confirmation. In the popup window, answer **Yes** and enter your system **Password**. This will update the Keychain settings.

    ![macOS 3rd Step to delete Fiddler Everywhere Certificate](../images/kb/remove-manually/select-yes-to-delete-fiddler-everywhere-certificate-from-macos.png)

### On Windows

1. In the search bar of your Windows system, open the **Manage User Certificates** menu.

    ![Manage User Certificates](../images/kb/remove-manually/manage-user-certificate-using-start-menu.png)

2. A window opens where you can see list of **Certificates - Current User**. In the list, expand the **Trusted Root Certification Authorities** item and select **Certificates**. In the list on the right, search for **Fiddler Root Certificate Authority**.

    ![Certificates - Current User](../images/kb/remove-manually/certificates-current-user-trusted-root-certification.png)

3. Select **Fiddler_Root_Certificate_Authority** and delete the certificate. Click **Yes** in both prompts that will appear. As a result, the certificate will be removed from your system.

    ![Delete Fiddler Everywhere](../images/kb/remove-manually/select-do-not-trust-fiddlerroot-and-press-yes.png)
