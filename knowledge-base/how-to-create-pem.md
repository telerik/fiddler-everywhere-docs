---
title: Creating PEM certificate
description: "Learn how to convert the exported CRT file to PEM certificate"
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

Amazon Web Services (AWS) is a popular tool that provides multiple options for configuring and managing computing power, database storage, content delivery, and others through the [AWS CLI](https://aws.amazon.com/cli/). How can I set up Fiddler Everywhere to track requests made from the AWS CLI?


Third-party tools (like Docker) and some operating systems (some Linux distributions) accept trust certificates in PEM format.  How to convert the exported FiddlerRootCertificate.crt file to PEM format?


## Solution


### Converting the Fiddler certificate to PEM certificate 


To create a PEM certificate, you need to export the Fiddler root certificate and convert it from CRT format to PEM format.


1. Open Fiddler Everywhere and export the `FiddlerRootCertificate.crt` file through **Settings** > **HTTPS** > **Advanced Settings** > **Export root certificate to Desktop**.

1. Use the [OpenSSL toolkit](https://www.openssl.org/) to generate `FiddlerRootCertificate.pem` from the exported `FiddlerRootCertificate.crt`. The `~/Desktop/FiddlerRootCertificate.crt` sample path might differ on your side, depending on the used operating system.
    ```Shell
    openssl x509 -inform DER -in ~/Desktop/FiddlerRootCertificate.crt -out ~/Desktop/FiddlerRootCertificate.pem
    ```

1. Install and trust the generated PEM in the third-party tool while following the tool's official guidelines. 

>tip Some Linux distributions are also expecting PEM instead of CRT. You can convert the certificate to PEM and then follow the base instructions for [installing and trusting the root certificate on Linux]({%slug first_steps_linux%}#trusting-the-root-certificate)


