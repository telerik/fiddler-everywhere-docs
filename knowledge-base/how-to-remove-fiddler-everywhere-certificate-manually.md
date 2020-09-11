---
title: How to Remove Fiddler Everywhere Certificate Manually
description: Steps to remove Fiddler Everywhere certificate from windows and macOS manually
type: how-to
slug: how-to-remove-fiddler-everywhere-certificate-manually
tags: https, remove, https certificate, fiddler everywhere certificate
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |

#### Description

Fiddler Everywhere certificate is installed to inspect network traffic and debug it. If you don't want the traffic monitoring anymore, you can remove the Fiddler Everywhere HTTPS certificate from your system. The steps to remove the Fiddler Everywhere HTTPS certificate are given below: 

## macOS 

1. In your system, open the __Keychain Access__ application. Select the __login__ keychain from the list and __All Items__ from the category list. 

2. Scroll to the __DO_NOT_TRUST_FiddlerRoot__ certificate and press __Delete__.

![macOS 1st & 2nd Step](../images/kb/keychain-access-login-and-do-not-trust-fiddlerroot-delete.png)

3. Pressing the __Delete__ button prompts a window asking for a confirmation. In the pop-up window, answer __Yes__ and enter your system __Password__ in the prompt window. This will update the Keychain settings. 

![macOS 3rd Step to delete Fiddler Everywhere Certificate](../images/kb/select-yes-to-delete-fiddler-everywhere-certificate-from-macos.png)

Following the above steps will remove the Fiddler Everywhere HTTPS certificate from your macOS. 

## Windows 

1. In the search bar of your Windows system, type __Manage User Certificates__. Click on it to open. 

![Manage User Certificates](../images/kb/manage-user-certificate-using-start-menu.png)

2. A window opens where you can see list of __Certificates - Current User__. In the list, expand the __Trusted Root Certification Authorities__ item and select __Certificates__. In the list on the right, search for __DO_NOT_TRUST_FiddlerRoot__.

![Certificates - Current User](../images/kb/certificates-current-user-trusted-root-certification.png)

3. Select __DO_NOT_TRUST_FiddlerRoot__ and delete the certificate. When trying to delete the certificate, you will come across couple of prompts. Click __Yes__ in both the prompts. It will completely remove the certificate from your system. 

![Delete Fiddler Everywhere](../images/kb/select-do-not-trust-fiddlerroot-and-press-yes.png)

Following the above steps will remove the Fiddler Everywhere HTTPS certificate from your Windows system. 