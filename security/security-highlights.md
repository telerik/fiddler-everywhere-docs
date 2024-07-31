---
title: Security Highlights
description: "Security considerations when using Fiddler Everywhere as a proxy."
slug: fe-security-highlights
publish: true
position: 30
---

## Security Highlights

While using Fiddler Everywhere, consider the following security indicators and highlights:

- With the initial state for [the system capturing option]({%slug capture-traffic-get-started%}#system-capturing), Fiddler Everywhere will capture only non-secure HTTP traffic. This traffic is not encrypted and can expose sensitive information like visited URLs, internal API endpoints, etc.

- With the initial state for [the independent browser capturing option]({%slug capture-traffic-get-started%}#browser-capturing), Fiddler Everywhere will capture both non-secure HTTP and secure HTTPS traffic. The Fiddler Everywhere application will decrypt the HTTPS traffic.

- Fiddler Everywhere generates a unique root CA (certificate authority). Avoid sharing this certificate with anyone as it can pose a significant security threat (for example, anyone with access to that certificate can decrypt your HTTPS traffic).

- When HTTPS capturing is enabled, the captured data will contain readable, usually decrypted information. Share that data with trusted parties only and carefully consider what the requests and responses include.

- All users accessing the Fiddler Everywhere application or saved sessions can also access the captured data.

- Fiddler enables to usage of password protection to prevent unauthorized access to saved sessions stored locally or in the cloud. Fiddler stores all saved sessions as SAZ files and, using the password protection option adds 256-bit AES encryption. Anyone with access to the SAZ file can open unprotected saves.

- Fiddler Everywhere will not store your data in the cloud if you do not use sharing or cloud capabilities. Once you sign in, everything is stored locally (your credentials are verified in the cloud). The only way to get captured data in the cloud is to upload it explicitly through user interaction from the **Snapshots** collections, **Requests** collections, or **rules** or share it with collaborators.

- Sessions uploaded to the Fiddler Everywhere cloud space are encrypted when password protection is enabled. All uploaded sessions are stored in the cloud as [Fiddler archives]({%slug fiddler-saz-format%}).

- Fiddler Everywhere can be installed per machine on Windows OS (macOS and Linux installation is only per user). In that case,  each Fiddler user logs into the application with their credentials, and the generated data is accessible to the other users.

- Fiddler Everywhere is [SOC 2 compliant](#soc-compliance).

## Application Analytics

By default, the Fiddler Everywhere application comes with an integrated Analytics solution that collects application usage data to improve product stability, UI, and UX. The collected information is stored on an external server and does not contain any data related to the captured traffic and the data that the sessions include. You can opt-out from the analytics data collection by navigating to **Settings** > **Privacy** > **Automatically send data to help us improve the product**.

## Using Captured Traffic Securely

Fiddler Everywhere provides options for securely saving and sharing captured traffic.

### Saving Traffic

Once Fiddler Everywhere captures the traffic, you have the option to [save the sessions for later usage]({%slug web-sessions-list%}#saving). Consider the following security highlights before saving sessions.

- All saved sessions are stored locally on the Fiddler Everywhere host machine as SAZ files (Fiddler Sessions Archive ZIP). The absolute path is different and depends on the used OS and the unique ID of the currently logged user:

    * Windows path
        ```curl
        %userprofile%\.fiddler\<unique-fiddler-user-GUID>\Snapshots
        ```

    * macOS path

        ```curl
        ~/.fiddler/<unique-fiddler-user-GUID>/Snapshots
        ```

    * Linux path

        ```curl
        ~/.fiddler/<unique-fiddler-user-GUID>/Snapshots
        ```

- The `fiddler` folder will continue to exist even when the Fiddler Everywhere application is uninstalled. Any previously saved sessions will be available on the host machine until explicitly removed. Explicitly removing the `.fiddler` folder removes all previously saved sessions (the SAZ files in the Snapshots `GUID` folders). Consider keeping them in the Fiddler cloud as a backup option before clearing the folder.

- Other users can open any unprotected SAZ file at any time by getting access to the SAZ file. Consider using password protection for your captured traffic to add 256-bit AES encryption to the saved SAZ files and prevent unauthorized access to sensitive data.

  Fiddler Everywhere provides the following options to add password protection for your sessions:

    * Setting a password when saving the session.

    * Setting a password for already saved sessions.

- Sessions saved in the cloud will continue locally through the `.fiddler` folder until explicitly removed. Removing the SAZ files from the `./fiddler` folder will remove their presence in the Fiddler Everywhere UI.

- The only way to recover a deleted session from the **Snapshots** tree or a deleted SAZ file from the `.fiddler` folder is to download their cloud copy. Consider using the Fiddler Everywhere clouds saving option as a backup option.

- Sessions are stored in Fiddler Everywhere cloud space as SAZ files. Consider protecting sensitive data by adding password protection for all cloud saves, which adds 256-bit AES encryption.

### Sharing Traffic

Fiddler Everywhere comes with [collaboration in mind]({%slug fiddler-sharing%}) and provides sharing functionalities. Consider the following security highlights when sharing sessions:

A session is saved before sharing. Thus, you should consider the [saving-related security highlights](#saving-traffic).

Sharing an unprotected session can expose your sensitive data to unauthorized third parties. Always consider adding password protection to your sessions before sharing them.

## SOC Compliance

The Fiddler Everywhere application is certified by an independent third party to comply with the service organization control standards (SOC 2) developed by the Association of International Certified Professional Accountants (AICPA). Compliance with SOC 2 is a testament that Progress has established a comprehensive set of internal procedures and controls to ensure the security, confidentiality, and availability of its cloud services and software development infrastructure, increasing the level of trust and confidence organizations have when choosing to rely on Progress services and products.