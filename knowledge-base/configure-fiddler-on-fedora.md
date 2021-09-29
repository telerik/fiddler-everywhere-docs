---
title: Configuring Fiddler Everywhere on Fedora, CentOS, or RedHat
description: "Learn how to configure Fiddler Everywhere and trust its root certificate on Fedora, CentOS, RedHat, or any other Linux distribution that uses a shared system certificate storage."
type: how-to
slug: fiddler-fedora-centos
publish: true
res_type: kb
---


### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [Shared System Certificates storage](https://docs.fedoraproject.org/en-US/quick-docs/using-shared-system-certificates/) |
| Supported OS | Fedora, CentOS, RedHat, and others |

### Description

The [instructions for installing the trusted root certificate for Fiddler Everywhere on Linux]({%slug first_steps_linux%}#trusting-the-root-certificate) utilize the Debian `dkpg-reconfigure` command. However, some Linux distributions like Fedora, CentOS, and RedHat might lack the `dkpg` library or limit its usage. In this case, you will need to install and trust the Fiddler root certificate while using the `update-ca-trust` command.

### Solution

1. Install and open the Fiddler Everywhere application on a shared system certificate storage Linux distribution such as Fedora, CentOS, or RedHat.

1. Export the Fiddler Everywhere root certificate through __Settings__ > __HTTPS__ > __Advanced Settings__ > __Export Root Certificate to Desktop__.

1. Open a terminal and copy the exported certificate to the shared certificate storage. The following example uses the default paths on Fedora 33.

    ```
    cp ~/Desktop/FiddlerRootCertificate /etc/pki/ca-trust/source/anchors/
    ```

1. Trust the certificate by updating the certificate authority through the following terminal command:

    ```
    update-ca-trust
    ```

1. Return to Fiddler Everywhere and enable the HTTPS capturing by selecting the __Settings__ > __HTTPS__ > __Capture HTTPS traffic__ checkbox.
