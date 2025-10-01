---
title: Using Custom Certificates in Fiddler Everywhere
description: Learn how to use and create custom certificates with Fiddler Everywhere.
type: how-to
slug: using-custom-certs
res_type: kb
---

## Environment

|----------|-------|
| Product  | Fiddler Everywhere |
| Version  | 6.5.0 and above |

## Description

I want to capture and decrypt traffic using a custom certificate authority. How do you supply the custom certificate in Fiddler Everywhere?

## Solution

The Fiddler Everywhere application can use a custom certificate through its [managed app configuration](slug://fe-restrict-policies) options.

You must apply the following policies by adding the following keys and values to the registry editor.

- Add a key `CustomCACertificate` that contains the DER certificate as a Base64 string
- Add a key `CustomCACertificatePrivateKey` that contains the DER certificate as a Base64 string


### Example for Settings Custom Certificate on Windows

- Convert both the certificate and the private key to DER

 ```sh
    openssl x509 -in ca.crt -outform DER -out ca.der.crt # converting CRT to DER
    openssl rsa -in ca.key -outform DER -out ca.der.key # converting private key to DER
 ```

- Convert both the DER certificate and the DER private key to Base64

 ```sh
    base64 -i ca.der.key -o ca.der.key.b64
    base64 -i ca.der.crt -o ca.der.crt.b64
 ```

- (Windows) Open `regedit` and set the certificate policies by passing the produced base64 as string values.

 ```sh
    HKEY_CURRENT_USER\SOFTWARE\Policies\Progress\Fiddler Everywhere\CustomCACertificate 
    HKEY_CURRENT_USER\SOFTWARE\Policies\Progress\Fiddler Everywhere\CustomCACertificatePrivateKey
 ```

 Then trust the certificate on Windows while using the `certutil` tool.

 ```sh
    certutil -user -addstore Root "<path-to-the-ca.der.crt-file>"
 ```

- (macOS) Open the preferred management tool and set the certificate policies by passing the produced base64 as a string value. In the example below, the Fiddler policies are applied while using the macOS `defaults` tool.

 ```sh
    defaults write com.progress-telerik.fiddler CustomCACertificate "<cert-as-base64-string-here>"
    defaults write com.progress-telerik.fiddler CustomCACertificatePrivateKey "<private-key-as-base64-string-here>"
 ```

 Then trust the certificate on macOS.

 ```sh
    security add-trusted-cert -d -r trustRoot -k ~/Library/Keychains/login.keychain-db "<path-to-the-ca.der.crt-file>"
 ```

Once the custom certificate is installed and trusted, the Fiddler Everywhere application shows the custom certificate in **Settings > HTTPS**.