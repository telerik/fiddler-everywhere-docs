---
title: How to Install Fiddler Root Certificate on Windows
description: An example on how to install Fiddler root certificate on Windows
type: how-to
slug: how-to-install-fiddler-root-certificate-on-windows
tags: https, install, root certificate
publish: true
res_type: kb
---

## Description
How to install Fiddler root certificate on Windows

>tip Fiddler Everywhere provides automatic option to install the root trust certtificate (administrative account still needed). Use [this documentation section]({%slug decrypt-https-traffic%}) as a reference and use the method below only if you need to add the certificate manually.

## Solution
1. Go to your __Desktop__ and double click on __FiddlerRootCertificate.crt__.
2. Click the __Install Certificate...__ button.
3. Choose the Store Location and click __Next__.
4. Select the __Place all certificates in the following store__ option and click __Browse...__.
5. Choose the __Trusted Root Certification Authorities__ folder and click __OK__.
6. Click __Next__ to go to the final step of __Certificate Import Wizard__.
7. Click __Finish__.

__Fiddler root certificate is now installed.__
