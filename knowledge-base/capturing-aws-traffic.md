---
title: Capturing AWS Traffic
description: "Learn how to capture Amazon Web Services traffic by using the Fiddler Everywhere web-debugging tool."
type: how-to
slug: how-to-capture-aws-traffic
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [AWS CLI](https://aws.amazon.com/cli/) |
| Supported OS | macOS, Linux, Windows |

## Description

Amazon Web Services (AWS) is a popular tool that provides multiple options for configuring and managing computing power, database storage, content delivery, and others through the [AWS CLI](https://aws.amazon.com/cli/). How can I set up Fiddler Everywhere to track requests made from the AWS CLI?

## Solution

* [Configuring the AWS CLI](#configuring-the-aws-cli-alongside-fiddler-everywhere)
* [Configuring the AWS CLI](#resetting-the-aws-cli-to-default-settings)

### Configuring the AWS CLI alongside Fiddler Everywhere

To capture traffic generated from AWS CLI commands, you need to configure the Fiddler Proxy for the preferred terminal application (where AWS CLI will be executed) and configure the `AWS_CA_BUNDLE` environment variable for the certificate bundle that will be used for HTTPS certificate validation.

1. Open the terminal application where the AWS CLI commands will run. Set the terminal application to use the Fiddler Everywhere proxy, as described in [this KB article]({%slug fiddler-macos-terminal%}).

2. Open Fiddler Everywhere and export the `FiddlerRootCertificate.crt` file through **Settings** > **HTTPS** > **Advanced Settings** > **Export root certificate to Desktop**.

3. Use the [OpenSSL toolkit](https://www.openssl.org/) to generate `FiddlerRootCertificate.pem` from the exported `FiddlerRootCertificate.crt`. The `~/Desktop/FiddlerRootCertificate.crt` sample path might differ on your side, depending on the used operating system.
    ```Shell
    openssl x509 -inform DER -in ~/Desktop/FiddlerRootCertificate.crt -out ~/Desktop/FiddlerRootCertificate.pem
    ```

4. Use the generated PEM file to set the `AWS_CA_BUNDLE` environment variable. The `AWS_CA_BUNDLE` specifies the path to a certificate bundle to use for HTTPS certificate validation. If defined, this environment variable overrides the value for the profile setting `ca_bundle`.
    ```Shell
    export AWS_CA_BUNDLE=~/Desktop/FiddlerRootCertificate.pem
    ```

5. Start capturing the traffic generated from the AWS CLI commands.
    ```Shell
    aws sts get-caller-identity
    ```

    ![Traffic captured from AWS CLI](../images/kb/aws/aws-traffic.png)

### Resetting the AWS CLI to Default Settings

After the debugging of the request is over, reset the `AWS_CA_BUNDLE` environment variable by using the `unset` command.

```Shell
unset AWS_CA_BUNDLE
```

You can also [reset the Fiddler Proxy in your terminal application]({%slug fiddler-macos-terminal%}#reset-fiddler-proxy-(terminal-app)).
