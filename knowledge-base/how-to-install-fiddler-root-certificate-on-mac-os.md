---
title: How to Install Fiddler Root Certificate on Mac OS
description: An example on how to install Fiddler root certificate on Mac OS
type: how-to
slug: how-to-install-fiddler-root-certificate-on-mac-os
tags: https, install, root certificate
publish: true
res_type: kb
---

## Description
How to install Fiddler root certificate on Mac OS.

>tip Fiddler Everywhere provides automatic option to install the root trust certificate (administrative account still needed). Use [this documentation section]({%slug decrypt-https-traffic%}) as a reference and use the method below only if you need to add the certificate manually.

## Solution
1. Go to your __Desktop__ and click on __FiddlerRootCertificate.crt__.
2. In __Keychain Access__ click on __DO_NOT_TRUST_FiddlerRoot__ certificate to open the __Trust dialog__
3. Choose __Always Trust__ in the __When using this certificate__ dropdown.

__Fiddler root certificate is now installed.__
