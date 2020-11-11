---
title: Capturing AWS Traffic with Fiddler Everywhere
description: An article on how to capture and Amazon Web Services traffic using Fiddler Everywhere
type: how-to
slug: how-to-capture-aws-traffic
tags: Fiddler AWS,  Fiddler AWS Command Line INterface, Amazon Web Services traffic, Fiddler Everywhere Amazon Web Services, AWS CA Bundle, Fiddler Amazon certificate, AWS CLI Fiddler
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [AWS CLI](https://aws.amazon.com/cli/) |
| Supported OS | macOS, Linux, Windows |


#### Description

Amazon Web Services (a.k.a. AWS) is a popular tool that provides multiple options to configure and manage computing power, database storage, content delivery, and others through the [AWS CLI](https://aws.amazon.com/cli/). This article covers the setup needed for Fiddler Everywhere to track requests made from the AWS CLI.

## Configure AWS CLI alongside FIddler Everywhere

To capture traffic generated from AWS CLI commands, you need to configure the Fiddler Proxy for the preferred terminal application (where AWS CLI will be executed) and configure the `AWS_CA_BUNDLE` environment variable for the certificate bundle that will be used for HTTPS certificate validation.

1. Open the terminal app where the AWS CLI commands will run. Set the terminal app to use the Fiddler Everywhere proxy, as described in [this KB article]({%slug fiddler-macos-terminal%}).

2. Open Fiddler Everywhere and export the **FiddlerRootCertificate.crt** file via **_Settings > HTTPS > Advanced Settings > Export root certificate to Desktop_**.

3. Use [OpenSSL toolkit](https://www.openssl.org/) to generate **FiddlerRootCertificate.pem** from the exported **FiddlerRootCertificate.crt**.
    ```Shell
    openssl x509 -inform DER -in ~/Desktop/FiddlerRootCertificate.crt -out ~/Desktop/FiddlerRootCertificate.pem
    ```

>tip The sample path **~/Desktop/FiddlerRootCertificate.crt** might differ on your side, depending on the used operating system.

4. Use the generated PEM file to set the `AWS_CA_BUNDLE` environment variable.
    ```Shell
    export AWS_CA_BUNDLE=~/Desktop/FiddlerRootCertificate.pem
    ```

>tip The `AWS_CA_BUNDLE` specifies the path to a certificate bundle to use for HTTPS certificate validation. If defined, this environment variable overrides the value for the profile setting `ca_bundle`.

## Reset AWS CLI to Default Settings

After the debugging of the request made through are over, you could reset the `AWS_CA_BUNDLE` environment variable while using the `unset` command.

```Shell
unset AWS_CA_BUNDLE
```

Additionally, you might also [reset the Fiddler Proxy in your terminal application]({%slug fiddler-macos-terminal%}#reset-fiddler-proxy-(terminal-app)).
