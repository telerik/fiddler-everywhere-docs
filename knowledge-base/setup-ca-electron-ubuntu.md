---
title: Setup the Fiddler certificate for Electron applications on Ubuntu
description: Electron applications CA management is different from the operating system CA management used by default by Fiddler. This article explains how to set up the CA for electron applications (like MSTeams) so that they could get the FIddler certificate (for HTTPS capturing).
type: how-to
slug: ubuntu-ca-electron
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Fiddler Everywhere | 1.0.0 and above |
| 3rd-party application | Any electron-based application |
| Operating System | Ubuntu 18.0.4 and above |

#### Description

Electron-based applications (like MSTeams) use Electron CA management, so the folder where the Fiddler Everywhere trust certificate must be installed is in **~/.pki/nssdb**. To capture HTTPS traffic, you need to move the certificate to that folder and then use the **certutil** tool to install and trust it. 

## Solution

1. Verify that your Ubuntu has the [**certutil**](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/certutil) tool. Install the tool through the following command:
    ```Shell
    sudo apt install libnss3-tools
    ```

2. Use the following command to install and trust the certificate:
    ```Shell
    certutil -A -n "ROOT-CA" -t "TCu,Cu,Tu" -i /usr/share/ca-certificates/extra/FiddlerRootCertificate.crt -d sql:/home/${USER}/.pki/nssdb
    ```

    The above command assumes that you already have the root certificate installed at **/usr/share/ca-certificates/extra**. If that is not the case, install and trust as shown in [the configuration article]({%slug configuration-get-started%}#configure-on-linux) (so that you could capture HTTPS traffic from other applications and not only from electron applications).

3. Restart Fiddler Everywhere and start capturing HTTPS traffic from MSTeams (or other electron-based applications).