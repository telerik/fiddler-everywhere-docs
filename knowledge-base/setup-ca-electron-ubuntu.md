---
title: Setting Up the Root Certificate for Electron Applications on Ubuntu
description: "Learn how to set up the CA for Electron applications (like MSTeams) so that they can get the certificate for HTTPS capturing of the Fiddler Everywhere web-debugging client."
type: how-to
slug: ubuntu-ca-electron
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product | Fiddler Everywhere |
| 3rd-party application | Any electron-based application |
| Operating System | Ubuntu 18.0.4 and above |

## Description

**Q** Can I capture and decrypt HTTPS traffic from Electron applications like MS Teams?

Electron applications CA management is different from the operating system CA management used by default by Fiddler. Electron-based applications use Electron CA management, so the folder where the Fiddler Everywhere trust certificate must be installed is in `~/.pki/nssdb`. You can capture and decrypt their HTTPS traffic by moving the certificate authority file to that folder and then use the `certutil` tool to install and trust it.

## Solution

1. Verify that your Ubuntu has the [`certutil`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/certutil) tool. Install the tool through the following command:

    ```Shell
    sudo apt install libnss3-tools
    ```
2. Install and trust the certificate with the following command, which assumes that the certificate is already available in `/usr/share/ca-certificates/extra`. If not, install and trust the certificate as shown in [the configuration article](slug://first_steps_linux#start-system-capturing), so that you can capture HTTPS traffic from other applications and not only from electron applications.

    ```Shell
    certutil -A -n "ROOT-CA" -t "TCu,Cu,Tu" -i /usr/share/ca-certificates/extra/Fiddler_Root_Certificate_Authority.crt -d sql:/home/${USER}/.pki/nssdb
    ```
3. Restart Fiddler Everywhere and start capturing HTTPS traffic from MS Teams or other Electron-based applications.
