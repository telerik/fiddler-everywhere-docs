---
title: Creating PEM certificate
description: "Learn how to convert the exported CRT file to a PEM certificate."
type: how-to
slug: how-to-create-pem
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [OpenSSL](https://www.openssl.org/) |
| Supported OS | Linux |

## Description

Third-party tools (like Docker) and some operating systems (some Linux distributions) accept trust certificates in PEM format. How to convert the exported FiddlerRootCertificate.crt file to PEM format?


## Converting the Fiddler Certificate to a PEM Certificate

To create a PEM certificate, export the Fiddler root certificate and convert it from CRT to PEM format.

1. [Download](https://www.openssl.org/source/) and install the OpenSSL tool.

1. Open Fiddler Everywhere and export the `FiddlerRootCertificate.crt` file through **Settings** > **HTTPS** > **Advanced Settings** > and from the drop-down use the **Export root certificate(PEM/ASCII format)**. The certificate is exported to **~/Desktop** as file with name **FiddlerRootCertificate.pem**.

1. Install and trust the exported PEM in the third-party tool while following the tool's official guidelines. 

>tip Some Linux distributions are also expecting PEM instead of CRT. You can convert the certificate to PEM and then follow the base instructions for [installing and trusting the root certificate on Linux]({%slug first_steps_linux%}#trusting-the-root-certificate).

