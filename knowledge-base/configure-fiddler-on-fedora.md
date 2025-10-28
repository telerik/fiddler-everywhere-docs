---
title: Configuring Fiddler Everywhere on Fedora, CentOS, or RedHat
description: "Learn how to configure Fiddler Everywhere and trust its root certificate on Fedora, CentOS, RedHat, or any other Linux distribution that uses a shared system certificate storage."
type: how-to
slug: fiddler-fedora-centos
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [Shared System Certificates storage](https://docs.fedoraproject.org/en-US/quick-docs/using-shared-system-certificates/) |
| Supported OS | Fedora, CentOS, RedHat, and others |

## Description

The [instructions for installing the trusted root certificate for Fiddler Everywhere on Linux](slug://first_steps_linux) use the Debian `dpkg-reconfigure` command. However, some Linux distributions like Fedora, CentOS, and RedHat can lack the `dpkg` library or limit its usage. How can I install and trust the Fiddler root CA (certificate authority) using the `update-ca-trust` command?

## Solution

1. Install and open the Fiddler Everywhere application on a shared system certificate storage Linux distribution such as Fedora, CentOS, or RedHat.
1. Export the Fiddler Everywhere root certificate through __Settings__ > __HTTPS__ > __Advanced Settings__ > **Export root certificate(DER/Binary format)**. The CA is exported to **~/Desktop** as a file named **Fiddler_Root_Certificate_Authority.crt**.
1. Open a terminal and copy the exported CA to the shared certificate storage. The following example uses the default paths on Fedora 33.
```sh
cp ~/Desktop/Fiddler_Root_Certificate_Authority /etc/pki/ca-trust/source/anchors/
```
1. Trust the certificate by updating the certificate authority through the following terminal command:
```sh
update-ca-trust
```
1. Return to Fiddler Everywhere and enable the HTTPS capturing by selecting the __Settings__ > __HTTPS__ > __Capture HTTPS traffic__ checkbox.
