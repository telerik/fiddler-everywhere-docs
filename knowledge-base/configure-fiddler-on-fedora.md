---
title: Configure Fiddler Everywhere on Fedora, CentOS, or RedHat
description: Instructions for configuring Fiddler Everywhere trust certificate on Fedora, CentOS, RedHat, or any other Linux distribution that uses shared system certificates storage.
type: how-to
slug: fiddler-fedora-centos
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [Shared System Certificates storage](https://docs.fedoraproject.org/en-US/quick-docs/using-shared-system-certificates/) |
| Supported OS | Fedora, CentOS, RedHat, and others |


#### Description

The Fiddler Everywhere [instructions for installing the trusted root certificate for Linux]({%slug configuration-get-started%}#configure-on-linux) are based on using the Debian **dkpg-reconfigure** command. However, some Linux distributions like Fedora, CentOS, RedHat, and others might lack the dkpg library or limit its usage. In this case, you will need to install and trust the Fiddler root certificate while using the **update-ca-trust** command as shown in the solution below.


## Solution

1. Install and open the Fiddler Everywhere application on Fedora, CentOS, RedHat, or other Linux distribution. In case the distribution provides the dkpg-reconfigure command, proceed with [the standard instructions]({%slug configuration-get-started%}#configure-on-linux). Otherwise, proceed to the next step.

1. Export the Fiddler Everywhere root certificate via __Settings__ > __HTTPS__ > __Advanced Settings__ > __Export Root Certificate to Desktop__.

1. Open a terminal and copy the exported certificate to the shared certificate storage directory:

    ```
    cp ~/Desktop/FiddlerRootCertificate /etc/pki/ca-trust/source/anchors/
    ```
    >tip The paths in the command above might differ on your Linux distributions - the example shows the default paths on Fedora 33.

1. Trust the certificate by updating the certificate authority via the following terminal command:
    ```
    update-ca-trust
    ```

1. Return back to the Fiddler Everywhere application and enable HTTPS capturing via __Settings__ > __HTTPS__ > __Capture HTTPS traffic__ checkbox.
