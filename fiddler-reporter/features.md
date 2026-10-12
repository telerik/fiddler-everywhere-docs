---
title: Features
page_title: Features - Reporter | Fiddler Everywhere
description: "Using the different capturing modes in the Fiddler Everywhere Reporter tool and learning more about the available configuration options."
slug: reporter-features
publish: true
position: 10
---

# Fiddler Everywhere Reporter Features

The Fiddler Everywhere Reporter presents several capturing modes to best suit different environment scenarios. The application also provides options to configure the default browser instance, control the Fiddler certificate authority (CA) file installation, and set additional capturing settings. By default, the application lists every captured HTTP(S) session in the **Details** view as soon as it is captured.

## Capturing Modes

The Fiddler Everywhere Reporter has four different capturing modes, which you can use depending on your needs and environment. The options are as follows:

- [**Start Capturing Browser**](#capturing-browser-option) - this option in Reporter corresponds to the browser capturing mode in Fiddler Everywhere. It captures traffic from a sandboxed browser instance.

- [**Start Capturing Everything**](#capturing-everything-option) - this option corresponds to the system capturing mode. It sets the Fiddler Everywhere Reporter proxy as the operating system upstream proxy. This option requires the explicit installation and trust of the Fiddler certificate authority file.

- [**Start Capturing Terminal**](#capturing-terminal-option) - this option corresponds to the terminal capturing mode. It captures traffic from a sandboxed terminal instance.

- [**Manual Setup (Advanced)**](#manual-setup-option) - this option corresponds to the explicit capturing mode. You can use this option to configure a specific client application alongside the Fiddler Everywhere Reporter proxy address and port. This option requires the explicit installation and trust of the Fiddler certificate authority file.

### Capturing Browser Option

The **Start Browser Capturing** is the default option that allows HTTPS traffic to be captured from a sandboxed browser instance. As a result, the Fiddler Everywhere Reporter starts an independent browser instance preconfigured to respect the Fiddler proxy and
trust its Root Certificate Authority (CA). The HTTPS traffic generated will appear in Fiddler Everywhere
Reporter. Currently, the tool supports independent browser capturing only for Chrome and Edge browsers. The Google Chrome browser opens by default if both exist on the machine. macOS users need to manually quit the browser instance from the dock even after the Fiddler Everywhere Reporter tool is closed.

Use the browser option as follows:

1. Start the Fiddler Everywhere Reporter application.

1. Click the **Start Capturing Browser** button.

1. Capture the targeted traffic in the sandboxed browser instance opened from the Fiddler Everywhere Reporter tool.

1. Click the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Capturing Everything Option

The **Start Capturing Everything** option will log all HTTP, HTTPS, WebSocket, SSE, and gRPC traffic between the
computer and the Internet. It works by setting the system proxy and capturing all incoming and outgoing
traffic from any application that supports a proxy - browsers, desktop applications, CLI tools, and others. This
option requires installing and trusting the operating system's Fiddler Root Certificate Authority (CA).

Use the capture everything option as follows:

1. Start the Fiddler Everywhere Reporter application.

1. Click the **Start Capturing Everything** button (available through a drop-down).

    >warning If that is your first time using this mode, then you will need to export and install the Fiddler certificate authority file explicitly while using [the **Certificate** > **Trust Root Certificate** option](#configuring-the-fiddler-certificate) or by manually exporting and installing the Fiddler CA.

1. Capture the targeted traffic from the targeted client application.

1. Click the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Capturing Terminal Option

The **Start Capturing Terminal** option will launch a new, clean terminal instance and route traffic only from this
instance through Fiddler Everywhere Reporter. It will open PowerShell on Windows and the default Terminal
on Mac. The option currently supports capturing traffic from cURL, Node.js, and Python out of the box. If you need to capture traffic from .NET applications, you must manually install and trust the Fiddler Root Certificate Authority (through the **Tools** menu). The terminal capturing mode lets you use the proxy in a sandboxed environment without changing the global OS proxy settings.

Use the capturing terminal option as follows:

1. Start the Fiddler Everywhere Reporter application.

1. Click the **Start Capturing Terminal** button.

1. Capture the targeted traffic in the sandboxed terminal instance opened from the Fiddler Everywhere Reporter tool.

1. Click the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

### Manual Setup Option

When this mode is selected, Fiddler Everywhere Reporter will start listening to the address and port printed at the top of the application (labeled **Capturing at**). The address can be copied and used to specify the proxy registry setting of your application and
manually configure it to send incoming and outgoing traffic to Fiddler Everywhere Reporter. In addition, the
Fiddler Root Certificate must be trusted from the Tools menu or manually exported and trusted.

Use the manual setup  option as follows:

1. Configure your client application to use the Fiddler proxy address (127.0.0.1), port (8877).

1. To capture and decrypt secure traffic (HTTPS), export and install the Fiddler CA certificate within your client application.

1. Start the Fiddler Everywhere Reporter application.

1. Click the **Manual Setup (Advanced)** button.

1. Capture the targeted traffic from your client application. At this point, the application already respects the Fiddler Everywhere Reporter proxy address, port, and certificate.

1. Click the **Stop Capture** button. 

1. Click the **Save Capture** option, set a password, and choose a location to store your SAZ file.

>note The **Tools** and **Certificate** menus are hidden until you accept the Fiddler Everywhere Reporter End User License Agreement (EULA). Once the EULA is accepted, both menus become visible and remain available for the rest of your session.

## Tools

Use the **Tools** section within the application menu to set the default browser (for the [**Start Capturing Browser**](#capturing-browser-option) option), configure data sanitization, and explicitly allow remote devices to connect.

- **Default Browser** - This option allows you to set the default browser that Fiddler Everywhere Reporter uses to create a sandboxed browser instance. Currently, Google Chrome and Microsoft Edge are supported browsers.

- **Sanitization Options…** - Opens the [Sanitization](#sanitization) dialog, where you can configure automatic masking of sensitive data in captured traffic before it is exported.

- **Allow Remote Devices to Connect** - Controls whether inbound connections to Fiddler Everywhere Reporter are allowed. Enable this option to capture traffic from remote devices. Behind the scenes, the option opens (or closes) the Fiddler Everywhere Reporter port for inbound connections on the host machine.

## Sanitization

The Fiddler Everywhere Reporter provides data sanitization capabilities to automatically mask or remove sensitive information in captured traffic before it is exported as a SAZ file. This is useful when sharing captures with a licensed Fiddler Everywhere user (such as a support or triage team) who was not involved in the original capture. Because every organization names its own sensitive data fields differently (for example, `Name`, `Address`, `DiseaseStatus`, or any other application-specific field), the **Keywords** rule lets you define exactly which field names should be scrubbed instead of relying on a fixed built-in list.

>important Fiddler attempts to sanitize HTTP(S) traffic, but complete removal of sensitive data is not guaranteed. Unstructured, encrypted, compressed, obfuscated, or binary data may bypass sanitization. You are responsible for verifying outputs and preventing unintended disclosure of sensitive information.

Open the **Sanitization Options…** dialog from the **Tools** menu to configure the rules. The dialog contains the following settings:

### Mask

The **Mask** field defines the placeholder text that replaces sanitized values. The default value is `!!!sanitized!!!`. You can change this to any string that suits your workflow.

>note Unlike the Fiddler Everywhere desktop application, the Reporter dialog does not expose **When to Sanitize** toggles (**On Save**, **On Export**, **On MCP Output**). Instead, sanitization is applied (or skipped) per export through the **Enable Sanitization** checkbox described below.

### Parts of the Session to Sanitize

Controls which parts of a captured session are processed by the sanitization rules. By default, **Sanitize URL**, **Sanitize headers**, **Sanitize cookies**, **Sanitize request body**, and **Sanitize response body** are enabled, while **Strip request body** and **Strip response body** are disabled.

- **Sanitize URL** - Masks sensitive parameters and path segments in request URLs (for example, API keys, tokens, user IDs).
- **Sanitize headers** - Masks sensitive HTTP headers such as `Authorization`, `X-API-Key`, and other custom headers containing credentials or tokens.
- **Sanitize cookies** - Masks cookie values that may contain session identifiers, authentication tokens, or user-specific data.
- **Sanitize request body** - Masks sensitive data within HTTP request bodies, such as passwords, credit card numbers, personal information, or proprietary data.
- **Sanitize response body** - Masks sensitive data within HTTP response bodies, including user data, API responses containing secrets, or any confidential information returned by servers.
- **Strip request body** - Completely removes all HTTP request bodies from sessions instead of masking individual values. Use this option when request bodies consistently contain highly sensitive data that must not be stored at all.
- **Strip response body** - Completely removes all HTTP response bodies from sessions instead of masking individual values. Use this option when response bodies consistently contain highly sensitive data that must not be stored at all.

>note **Sanitizing large or complex HTML response bodies.** Selective masking of elements within an HTML body (for example, matching a specific tag by keyword) is a best-effort feature and is not guaranteed for large or untrusted HTML - especially when the sensitive text sits inside raw-text elements such as `<script>` or `<style>`, where markup-like strings in the element's own content can confuse tag matching and leave some values unmasked. If your goal is to guarantee that no sensitive data remains in the body rather than to mask specific values within it, use **Strip response body** instead.

### Additional Settings

Defines custom sanitization rules applied on top of the built-in ones. Rules are organized into three tabs, and each depends on the corresponding **Parts of the Session to Sanitize** toggle being enabled to take effect.

>important All three tabs (**Headers**, **Keywords**, and **Regexes**) always parse every semicolon-separated entry as a [.NET (C#) regular expression](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference), not JavaScript, PCRE, POSIX, or any other regex flavor - there is no separate "plain text" mode. A simple alphanumeric value such as `Authorization` or `DiseaseStatus` has no special regex meaning, so it is matched literally and does not require any regex knowledge to use. Characters with special meaning in .NET regex (for example `. * + ? [ ] ( ) ^ $ | \`) are interpreted as regex syntax, not literal characters - escape them with a backslash (for example `\.`) if you need to match them literally. Matching is always case-insensitive.

- **Headers** - Enter application-specific header-name patterns separated by semicolons, for example `^X-Org-Reference$;^X-Partner-Id$`. When a request or response header name matches, its entire value is replaced with the configured mask; the header name itself remains unchanged. Use `^` and `$` to match an exact name.

    >important **Sanitize headers** must be enabled for this rule to apply. This setting does not search header *values* - it matches header *names* only. Cookies are controlled separately through **Sanitize cookies**.

- **Keywords** - Enter field-name patterns separated by semicolons, for example `Name;Address;DiseaseStatus;HighlySecureInfo`. A pattern without anchors (`^`/`$`) can match part of a field name. When a supported field name matches in a URL query parameter or a structured body, its entire value is replaced with the mask.

    Keywords do not search arbitrary body text or HTTP headers - they match *field names*, not free text. Enable **Sanitize URL** for query parameters, or the corresponding **Sanitize request body** / **Sanitize response body** setting for body fields. In a JSON body, this rule covers string values and named objects or arrays, but not numeric or boolean values.

    For example, with the keywords above and body sanitization enabled, the JSON `{"Name":"Jane Doe","Address":"123 Main St","DiseaseStatus":"active","status":"ok"}` becomes `{"Name":"!!!sanitized!!!","Address":"!!!sanitized!!!","DiseaseStatus":"!!!sanitized!!!","status":"ok"}`. This lets you define your own custom field names, since Fiddler cannot maintain a built-in list covering every application's data model.

- **Regexes** - Enter value patterns separated by semicolons, for example `INV-[0-9]{6}`. In a plain-text body, only the matching text is replaced, for example `Invoice INV-123456 approved` becomes `Invoice !!!sanitized!!! approved`. In a JSON string, XML element, form field, or URL query parameter, a match masks the *entire* field value instead of just the matched substring.

    >important The relevant **Sanitize URL**, **Sanitize request body**, or **Sanitize response body** toggle must be enabled for a regex pattern to be applied to that part of the session. Regexes do not inspect HTTP header values - use **Headers** to mask header contents instead.

### Reset to Default

A link in the dialog that restores all sanitization settings to their factory defaults. The link is only active (clickable) when the current settings differ from the defaults.

### Enabling Sanitization on Export

Sanitization rules configured here are applied when you export a capture: click **Save Capture**, then select the **Enable Sanitization** checkbox in the save dialog before confirming the export. The checkbox value is persisted only when you confirm the save - the next time you open the save dialog, it remembers its last confirmed value. If you change the checkbox and then dismiss the dialog with **Cancel** or by closing it, the change is discarded and the previously saved value is kept. Leaving the checkbox cleared saves the capture without sanitizing it, regardless of the configured rules.

## Configuring Fiddler Certificate

Use the **Certificate** section within the application menu to trust, export, reset, and remove the Fiddler certificate authority (CA) or ignore server certificate errors. The options are as follows:

- **Trust CA Certificate** - Installs and trusts the Fiddler root certificate authority (CA) in one of the following certificate stores:
    * **in the User Store** of the operating system certificate manager.

    * **in the Machine Store** of the operating system certificate manager.

- **Export CA Certificate** - Exports the Fiddler Everywhere Reporter CA to your `Desktop` folder. The format varies depending on the operating system. 

- **Remove CA Certificate** - Removes the currently trusted CA from the OS certificate store. 

- **Reset CA Certificate** - Removes the currently trusted CA, generates a new one, and trusts it.

- **Capture HTTPS Traffic** -  Configures Fiddler Reporter to capture secure HTTP traffic (it requires an installed and trusted certificate).

- **Ignore Server Certificate Errors (unsafe)** - Configures Fiddler Everywhere Reporter to automatically ignore all server certificate errors.

## See Also

- [Sanitization Settings](slug://settings-sanitization)
- [Data Sanitization](slug://fe-sanitization)
