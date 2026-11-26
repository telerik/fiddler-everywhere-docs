---
title: Security Highlights
page_title: Security Highlights - Security | Fiddler Everywhere
description: "Learn about security considerations and safeguards in Fiddler Everywhere, including captured data protection, script integrity, sanitization, and MCP server security."
slug: fe-security-highlights
publish: true
position: 30
---

# Security Highlights

When using Fiddler Everywhere, consider the following security highlights:

- With the initial state for [the system capturing option](slug://capture-traffic-get-started#system-capturing), Fiddler Everywhere will capture only non-secure HTTP traffic. This traffic is not encrypted and can expose sensitive information like visited URLs and internal API endpoints.
- With the initial state for [the independent browser capturing option](slug://capture-traffic-get-started#independent-browser-capturing), Fiddler Everywhere will capture both non-secure HTTP and secure HTTPS traffic. The Fiddler Everywhere application will decrypt the HTTPS traffic.
- Fiddler Everywhere generates a unique root CA (certificate authority). Protect its private key and only trust the certificate on devices you control.
- When HTTPS capturing is enabled, the captured data will contain readable, usually decrypted information. Share that data with trusted parties only and carefully consider what the requests and responses include.
- All users accessing the Fiddler Everywhere application or saved sessions can also access the captured data.
- Fiddler supports password protection for saved sessions stored locally or in the cloud. Sessions are stored as SAZ files; enabling password protection adds 256-bit AES encryption. Anyone with access to an unprotected SAZ file can open it.
- Fiddler Everywhere does not store captured data in its cloud unless you explicitly upload it through the **Snapshots** collections, **Requests** collections, or **rules**, or share it with collaborators. Integrations such as the [Fiddler MCP server](#using-fiddler-mcp-server) can separately provide captured traffic to connected tools, which may send it to model providers. Signing in verifies your credentials in the cloud.
- Sessions uploaded to the Fiddler Everywhere cloud space are encrypted when password protection is enabled. All uploaded sessions are stored in the cloud as [Fiddler archives](slug://fiddler-saz-format).
- Fiddler Everywhere can be installed per machine on Windows OS (macOS and Linux installation is only per user). In that case, each Fiddler user logs into the application with their credentials, and the generated data is accessible to the other users.
- Fiddler Everywhere is [SOC 2 compliant](#soc-compliance).

## Application Analytics

By default, Fiddler Everywhere collects application usage data to improve product stability and the user experience. The collected information is stored on an external server and does not include captured traffic or session data. To opt out, navigate to **Settings** > **Privacy** and disable **Automatically send data to help us improve the product**.

## Using Captured Traffic Securely

Fiddler Everywhere provides options for securely saving and sharing captured traffic.

### Saving Traffic

You can [save captured sessions for later use](slug://web-sessions-list#saving). Consider the following security highlights before saving sessions:

- Saved sessions are stored locally as SAZ files (Fiddler Sessions Archive ZIP). The path depends on the operating system and the unique ID of the signed-in user:

    * Windows path

        ```sh
        %userprofile%\.fiddler\<unique-fiddler-user-GUID>\Snapshots
        ```
    * macOS path

        ```sh
        ~/.fiddler/<unique-fiddler-user-GUID>/Snapshots
        ```
    * Linux path

        ```sh
        ~/.fiddler/<unique-fiddler-user-GUID>/Snapshots
        ```

- The `.fiddler` folder remains after Fiddler Everywhere is uninstalled. Previously saved sessions remain on the host machine until explicitly removed. Removing the `.fiddler` folder removes the locally saved sessions in the Snapshots folders. Consider keeping a cloud backup before removing the folder.
- Other users can open any unprotected SAZ file at any time by getting access to the SAZ file. Consider using password protection for your captured traffic to add 256-bit AES encryption to the saved SAZ files and prevent unauthorized access to sensitive data.

    Fiddler Everywhere provides the following options to add password protection for your sessions:

    * Setting a password when saving the session.
    * Setting a password for already saved sessions.

- Sessions saved in the cloud also remain locally in the `.fiddler` folder until explicitly removed. Removing the local SAZ files removes them from the Fiddler Everywhere UI.
- A deleted session or SAZ file can be recovered by downloading its cloud copy, if one exists. Consider saving sessions to the Fiddler Everywhere cloud as a backup.
- Sessions are stored in Fiddler Everywhere cloud space as SAZ files. Consider protecting sensitive data by adding password protection for all cloud saves, which adds 256-bit AES encryption.

### Sharing Traffic

Fiddler Everywhere comes with [collaboration in mind](slug://fiddler-sharing) and provides sharing functionalities. Consider the following security highlights when sharing sessions:

- A session is saved before sharing. Thus, consider the [saving-related security highlights](#saving-traffic).
- Enable [data sanitization]({%slug fe-sanitization%}) to help remove sensitive information before sharing sessions. Sanitization does not guarantee complete removal, so review the results before sharing.
- Sharing an unprotected session can expose your sensitive data to unauthorized third parties. Always consider adding password protection to your sessions before sharing them.

## Using Scripts Securely

Fiddler Everywhere uses a trusted hash to detect changes to script content. If a script cannot be verified, including when it has changed outside the supported save workflow, Fiddler marks it as unverified and prevents it from running. An active script is disabled. Review and confirm the script before enabling it. Script source code is not uploaded as part of these checks.

Hashing verifies integrity; it does not encrypt scripts or restrict access to files on your computer. Only run scripts you trust. For more information, see [Scripting Security Considerations](slug://fiddler-script-security).

## Using Fiddler MCP Server

Fiddler Everywhere provides an [MCP (Model Context Protocol) server]({%slug fiddler-mcp-server%}) that enables integration with intelligent IDEs and coding tools for analyzing captured HTTPS traffic. Consider the following security highlights when using the MCP server:

- The MCP server runs locally on your machine (default port `8868`) and provides captured traffic data to connected coding tools and IDEs. Any application with access to your API key can retrieve your captured traffic data.
- Protect your MCP server API key. This key grants access to all captured traffic data. Do not share the API key or commit it to version control systems. Regenerate the API key immediately if you suspect it has been compromised.
- By default, [data sanitization]({%slug fe-sanitization%}) is enabled for MCP output to help prevent exposure of sensitive information to language models. Verify that **Settings** > **Sanitization** > **On MCP Output** is enabled before using the MCP server.
- Be aware that captured traffic data sent to the MCP server will be processed by language models (such as those provided by your IDE). Review your model provider's data handling and privacy policies to understand how your data may be used, stored, or retained.
- The MCP server provides access to all captured sessions available in Fiddler Everywhere. Consider clearing old or unnecessary sessions before enabling the MCP server to limit data exposure.
- Only enable the MCP server when actively using it. Stop the server when not in use to minimize the window of potential unauthorized access.
- When using the MCP server on shared or multi-user machines, be particularly cautious as other users may attempt to access the MCP endpoint if they discover your API key.
- Enterprise administrators can completely disable the MCP server for licensed users through the `DisableMCP` managed application policy. This policy can be applied via registry settings on Windows or device management solutions on macOS. For more information, refer to the [MCP Access Policies]({%slug fiddler-mcp-server%}#mcp-access-policies) documentation.

## SOC Compliance

The Fiddler Everywhere application is certified by an independent third party to comply with the service organization control standards (SOC 2) developed by the Association of International Certified Professional Accountants (AICPA). Compliance with SOC 2 is a testament that Progress has established a comprehensive set of internal procedures and controls to ensure the security, confidentiality, and availability of its cloud services and software development infrastructure, increasing the level of trust and confidence organizations have when choosing to rely on Progress services and products.

## See Also

* [Single Sign-On (SSO) and SCIM Provisioning Setup](slug://fe-sso-setup)
* [Managed App Configuration](slug://fe-restrict-policies)
* [Applying sanitization for captured traffic in Fiddler Everywhere](slug://fe-sanitization)
* [Scripting Security Considerations](slug://fiddler-script-security)