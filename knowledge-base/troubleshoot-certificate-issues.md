---
title: Troubleshoot macOS Trust Certificate Issues
description: An article on how to troubleshoot an issue related to Fiddler's root trust certificate and the related error "Fiddler root certificate NOT trusted successfully".
type: how-to
slug: troubleshoot-certificate-error
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| Supported OS | macOS |
| OS tool | Keychain Access |

#### Description

To capture secure traffic (HTTPS), Fiddler Everywhere needs to install and enable a root trust certificate in macOS's Keychain Access application. On some occasions, this process might fail, leading to an error in the Fiddler Everywhere client, which states **_"Fiddler root certificate NOT trusted successfully"_**. This article explains how to troubleshoot the certificate installation on macOS through custom bash scripts and terminal commands.

## Test Certificate Import

To test importing the Fiddler Root certificate with a Bash script, execute the following steps:

1. Create a Bash file, for example, **_import.sh_**.

2. Save the following script in the above file:
    ```Bash
    login_keychains_paths=$(security list-keychains | grep -e "\Wlogin.keychain\W");

    if [ -z "$login_keychains_paths" ]
        then
            echo "No login keychain found.";
            exit 10;
    fi
    security add-trusted-cert -k login.keychain ~/Desktop/FiddlerRootCertificate.crt;

    security_exit_code=$?;
    if [ $security_exit_code -ne 0 ]
        then
            echo "security add-trusted-cert failed with error code $security_exit_code";
    fi
    ```

3. Make the **_import.sh_** file executable.
    ```Bash
    chmod +x import.sh
    ```
- Execute the created file in your Bash shell.
    ```Bash
    ./import.sh
    ```

    After successful execution, you will be prompted for your macOS username and password. Enter the credentials, and the generated trust certificate will be added in the Keychain Access application (under **_login > Certificates_** as **DO_NOT_TRUST_FiddlerRoot**).

4. Test that the certificate generated from Fiddler is successfully **installed and trusted** by running the following command in your Bash shell:

    ```Bash
    security trust-settings-export /tmp/trustSettings.xml
    ```
    
    When successful, the command will output a success message:
    ```Bash
    ...Trust Settings exported successfully.
    ```

5. Confirm that the **DO_NOT_TRUST_FiddlerRoot** is present in the Keychain Access application (under **_login > Certificates_**). Double-click  the certificate, scroll to the bottom and note the SHA-1 value. Open the exported settings file from **_ /tmp/trustSettings.xml_** and check that the SHA-1 value is present there. For example, the certificate from your Keychain Access application (see the screenshot) will be identical to the SHA1

    _The SHA1 key in trustSettings.xml file will also be present in the Keychain Access_
    ```XML
    <key>68E0B8FE34DF4A756B664E300B067CA9A1B9DE8</key>
    ```

    ![Check SHA1 signature](../images/kb/mac-certificate/certificate-sha-check.png)

    >tip You can safely delete the **_/tmp/trustSettings.xml_** file after the troubleshooting. It is only needed to check that the SHA-1 key is properly exported.


## See Also

*   [Troubleshoot HTTPS capturing on macOS]({%slug troubleshoot-capturing-traffic%})
*   [Troubleshoot Mac Proxy Settings]({%slug troubleshoot-mac-proxy-settings%})
*	[How-To Installing Fiddler Everywhere on a Mac](https://docs.telerik.com/fiddler-everywhere/getting-started/installation)
*	[How-To Reset Fiddler Everywhere Settings to Default](how-to-reset-fiddler-everywhere-settings-to-default)