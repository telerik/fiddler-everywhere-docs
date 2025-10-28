---
title: Data Sanitization
description: "Configure data sanitization in Fiddler Everywhere to automatically remove sensitive information from captured HTTPS traffic before saving, exporting, or sharing with the MCP server."
slug: fe-sanitization
position: 40
---

# Data Sanitization

The Fiddler Everywhere application provides data sanitization capabilities to automatically remove sensitive information from captured HTTPS traffic. This feature helps protect confidential data before performing actions such as saving sessions, exporting snapshots, or passing information to the Fiddler Everywhere MCP server.

Data sanitization is configurable through the **Settings > Sanitization** section. By default, the sanitization process is enabled only for MCP output.

>important Fiddler Everywhere attempts to sanitize HTTP(S) traffic, but complete removal of sensitive data is not guaranteed. Unstructured, encrypted, compressed, obfuscated, or binary data may bypass the sanitization process. Each user is responsible for verifying the sanitization results and preventing unintended disclosure of sensitive information.

## Configuring Sanitization

The **Sanitization** settings screen provides comprehensive options to control how and when your captured traffic data is sanitized.

### Mask Value

- **Mask** - Specifies the string value used to replace sanitized data. The default mask is typically `***SANITIZED***`, but you can customize it to any value that suits your needs.

### When to Sanitize

Control when sanitization occurs by enabling or disabling sanitization for specific actions:

- **On Save** - Automatically sanitizes session snapshots before any save operation in Fiddler Everywhere. Enable this option to ensure saved sessions does not contain sensitive data locally.
- **On Export** - Automatically sanitizes session snapshots before any export operation in Fiddler Everywhere. Enable this option when sharing exported files with team members or external parties.
- **On MCP Output** - Automatically sanitizes session snapshots before data is sent to the Fiddler Everywhere MCP server. This option is **enabled by default** to protect sensitive information from being processed by AI models.

>tip Enable all three sanitization options if you regularly work with highly sensitive data or need to comply with strict data protection policies.

### Parts of the Session to Sanitize

Specify which components of the HTTP(S) traffic should be sanitized. Sanitization applies both default rules and custom rules configured in the **Additional Settings** section:

- **Sanitize URL** - Masks sensitive parameters and path segments in request URLs (e.g., API keys, tokens, user IDs).
- **Sanitize Headers** - Masks sensitive HTTP headers such as `Authorization`, `Cookie`, `X-API-Key`, and other custom headers containing credentials or tokens.
- **Sanitize Cookies** - Masks cookie values that may contain session identifiers, authentication tokens, or user-specific data.
- **Sanitize Request Body** - Masks sensitive data within HTTP request bodies, such as passwords, credit card numbers, personal information, or proprietary data.
- **Sanitize Response Body** - Masks sensitive data within HTTP response bodies, including user data, API responses containing secrets, or any confidential information returned by servers.
- **Strip Request Body** - Completely removes all HTTP request bodies from sessions. Use this option when request bodies consistently contain highly sensitive data that should not be stored at all.
- **Strip Response Body** - Completely removes all HTTP response bodies from sessions. Use this option when response bodies consistently contain highly sensitive data that should not be stored at all.

>important The difference between "Sanitize" and "Strip" options: Sanitization replaces sensitive values with the mask string while preserving the structure of the data. Stripping completely removes the entire body content, which may affect your ability to debug or analyze the traffic later.

### Additional Settings

Enhance the sanitization process by defining custom rules to target specific sensitive data patterns:

- **Headers** - Add custom HTTP header names that should always be sanitized, beyond the default headers. Useful for application-specific authentication headers or proprietary security tokens.
- **Keywords** - Specify keywords or phrases that should be masked wherever they appear in URLs, headers, or bodies. Examples include company names, project codenames, or specific sensitive terms.
- **Regular Expression Patterns** - Define regex patterns to match and sanitize complex data formats such as:
  - Credit card numbers: `\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b`
  - Email addresses: `\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b`
  - Social security numbers, phone numbers, or other sensitive identifiers

>tip Test your custom sanitization rules with sample traffic to ensure they correctly identify and mask sensitive data without over-sanitizing useful debugging information.

## Best Practices

When using data sanitization in Fiddler Everywhere, consider the following best practices:

- **Always verify sanitization results** - Review sanitized sessions before sharing to confirm that all sensitive data has been properly masked.
- **Enable MCP sanitization by default** - Keep the "On MCP Output" option enabled to prevent inadvertent exposure of sensitive data to AI models.
- **Use appropriate sanitization scope** - Balance security needs with debugging requirements. Over-sanitization may hinder troubleshooting efforts.
- **Combine with password protection** - Use sanitization in conjunction with [password-protected sessions]({%slug fe-security-highlights%}#saving-traffic) for multiple layers of security.
- **Document custom rules** - Maintain documentation of custom sanitization rules, especially regex patterns, for team collaboration and compliance audits.
- **Regular rule review** - Periodically review and update sanitization rules as your application evolves and new sensitive data types are introduced.

## Sanitization Policies

Fiddler Everywhere Enterprise provides managed application policies that enable IT administrators to centrally control sanitization settings across their organization. The `DefaultSanitizationSettings` and `DisableSanitizationSettingsUpdate` policies allow administrators to enforce consistent data protection standards and prevent users from modifying sanitization configurations.

### Policy Configuration Keys

The following policies are available for managing sanitization behavior:

- **DefaultSanitizationSettings** - Defines the default sanitization configuration applied when users launch Fiddler Everywhere. This policy allows administrators to pre-configure sanitization options including the mask value, which traffic components to sanitize, when to sanitize, and custom sanitization rules.
  
- **DisableSanitizationSettingsUpdate** - When enabled, this policy locks the sanitization settings and prevents end users from modifying the configuration through the Fiddler Everywhere user interface. This ensures compliance with organizational data protection policies.

### Windows Configuration

IT teams managing Windows systems can apply sanitization policies using Group Policy, registry scripts, or endpoint management tools. Set the following registry values under:

```txt
HKEY_CURRENT_USER\SOFTWARE\Policies\Progress\Fiddler Everywhere
```

| Key Name | Value Type | Description | Example Value |
|:---------|:-----------|:------------|:--------------|
| `DefaultSanitizationSettings` | REG_SZ (string) | JSON object defining default sanitization configuration. All properties are optional; omitted properties use Fiddler Everywhere defaults. | See JSON structure below |
| `DisableSanitizationSettingsUpdate` | REG_DWORD | Locks sanitization settings to prevent user modifications. Set to `1` to enable, `0` to disable. | `0x00000001` (1) |

#### DefaultSanitizationSettings JSON Structure

The `DefaultSanitizationSettings` value accepts a JSON object with the following optional properties:

```JSON
{ 
    "mask": "***SANITIZED***",
    "sanitizeUrl": true,
    "sanitizeHeaders": true,
    "sanitizeCookies": true,
    "sanitizeRequestBody": true,
    "sanitizeResponseBody": true,
    "stripRequestBody": false,
    "stripResponseBody": false,
    "sanitizeOnSave": false,
    "sanitizeOnExport": false,
    "sanitizeMcpOutput": true,
    "additionalHeaders": "X-Custom-Auth, X-Internal-Token, X-My-Test-Header",
    "additionalKeywords": "confidential, proprietary, test",
    "additionalRegexes": "\\b\\d{3}-\\d{2}-\\d{4}\\b"
}
```

**Property Descriptions:**

- `mask` - String value used to replace sanitized data (default: `"***SANITIZED***"`)
- `sanitizeUrl`, `sanitizeHeaders`, `sanitizeCookies`, `sanitizeRequestBody`, `sanitizeResponseBody` - Boolean values controlling which traffic components are sanitized
- `stripRequestBody`, `stripResponseBody` - Boolean values controlling whether to completely remove body content
- `sanitizeOnSave`, `sanitizeOnExport`, `sanitizeMcpOutput` - Boolean values controlling when sanitization occurs
- `additionalHeaders` - Array of custom header names to sanitize (can be `null` or omitted)
- `additionalKeywords` - Array of keywords to mask throughout traffic (can be `null` or omitted)
- `additionalRegexes` - Array of regular expression patterns for advanced sanitization (can be `null` or omitted)

>tip When setting registry values programmatically, ensure the JSON string is properly escaped. For manual registry editing, paste the JSON as a single-line string value.

### macOS Configuration

IT teams managing macOS systems can apply sanitization policies using Mobile Device Management (MDM) solutions such as Jamf Pro, Microsoft Intune, or Apple's Profile Manager. Configure the following managed preferences:

| Key Name | Value Type | Description | Example Value |
|:---------|:-----------|:------------|:--------------|
| `DefaultSanitizationSettings` | String | JSON object defining default sanitization configuration. All properties are optional; omitted properties use Fiddler Everywhere defaults. | See JSON structure above |
| `DisableSanitizationSettingsUpdate` | Integer | Locks sanitization settings to prevent user modifications. Set to `1` to enable, `0` to disable. | `1` |

The JSON structure and property descriptions for `DefaultSanitizationSettings` are identical to the Windows configuration described above.

>important Managed preferences on macOS require proper MDM enrollment and configuration profile deployment. Test policy application in a non-production environment before enterprise-wide rollout.

For comprehensive information on deploying managed application configurations, refer to the [Managed Application Policies]({%slug fe-restrict-policies%}) article.

## See Also

- [Security Highlights](slug://fe-security-highlights)
- [Using the Fiddler MCP Server](slug://fiddler-mcp-server) 