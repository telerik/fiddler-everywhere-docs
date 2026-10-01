---
title: Sanitization
page_title: Sanitization - Settings | Fiddler Everywhere
description: "Learn how to configure the Sanitization settings in Fiddler Everywhere to automatically remove or mask sensitive data from captured HTTP traffic before saving, exporting, or passing it to the MCP server."
slug: settings-sanitization
publish: true
position: 26
---

# Sanitization Settings

The **Sanitization** settings section lets you configure automatic masking of sensitive data in captured HTTP traffic. You can control when sanitization is applied, which parts of a session are sanitized, and define custom rules based on headers, keywords, or regular expressions.

>important Fiddler attempts to sanitize HTTP traffic, but complete removal of sensitive data is not guaranteed. Unstructured, encrypted, compressed, obfuscated, or binary data may bypass sanitization. You are responsible for verifying outputs and preventing unintended disclosure.

## Mask

The **Mask** field defines the placeholder text that replaces sanitized values. The default value is `!!!sanitized!!!`. You can change this to any string that suits your workflow.

## When to Sanitize

Controls the events that trigger sanitization. Multiple options can be active simultaneously.

- **On Save**: Sanitizes session data when saving to a Fiddler archive.
- **On Export**: Sanitizes session data when exporting traffic.
- **On MCP Output**: Sanitizes data before it is passed to the MCP server. Enabled by default.

## Parts of the Session to Sanitize

Controls which parts of a captured session are processed by the sanitization rules.

- **Sanitize URL**: Masks sensitive values found in the request URL.
- **Sanitize request body**: Masks sensitive values in the request body.
- **Strip request body**: Removes the entire request body instead of masking individual values.
- **Sanitize headers**: Masks sensitive values in request and response headers.
- **Sanitize response body**: Masks sensitive values in the response body.
- **Strip response body**: Removes the entire response body instead of masking individual values.
- **Sanitize cookies**: Masks cookie values in both requests and responses.

## Additional Settings

Defines custom sanitization rules applied on top of the built-in ones. Rules are organized into three tabs, and each depends on the corresponding **Parts of the Session to Sanitize** toggle being enabled to take effect.

>important All three tabs (**Headers**, **Keywords**, and **Regexes**) use the [.NET (C#) regular-expression syntax](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference), not JavaScript, PCRE, POSIX, or any other regex flavor. Matching is always case-insensitive.

- **Headers**: Enter application-specific header-name patterns separated by semicolons, for example `^X-Org-Reference$;^X-Partner-Id$`. Patterns use the .NET (C#) regular-expression syntax and are matched case-insensitively. When a request or response header name matches, its entire value is replaced with the configured mask; the header name itself remains unchanged. Use `^` and `$` to match an exact name.

    >important **Sanitize headers** must be enabled for this rule to apply. This setting does not search header *values* - it matches header *names* only. Cookies are controlled separately through **Sanitize cookies**.

- **Keywords**: Enter field-name patterns separated by semicolons, for example `projectCode;^x-[a-z]+-code$`. Patterns use the .NET (C#) regular-expression syntax and are matched case-insensitively. A pattern without anchors (`^`/`$`) can match part of a field name. When a supported field name matches in a URL query parameter or a structured body, its entire value is replaced with the mask.

    Keywords do not search arbitrary body text or HTTP headers - they match *field names*, not free text. Enable **Sanitize URL** for query parameters, or the corresponding **Sanitize request body** / **Sanitize response body** setting for body fields. In a JSON body, this rule covers string values and named objects or arrays, but not numeric or boolean values.

    For example, with the keywords above and body sanitization enabled, the JSON `{"projectCode":"bluejay","X-team-code":"abc123","status":"active"}` becomes `{"projectCode":"!!!sanitized!!!","X-team-code":"!!!sanitized!!!","status":"active"}`.

- **Regexes**: Enter value patterns separated by semicolons, for example `INV-[0-9]{6}`. Patterns use the .NET (C#) regular-expression syntax and are matched case-insensitively.

    >important The relevant **Sanitize URL**, **Sanitize request body**, or **Sanitize response body** toggle must be enabled for a regex pattern to be applied to that part of the session. Regexes do not inspect HTTP header values - use **Headers** to mask header contents instead.

    In a plain-text body, only the matching text is replaced, for example `Invoice INV-123456 approved` becomes `Invoice !!!sanitized!!! approved`. In a JSON string, XML element, form field, or URL query parameter, a match masks the *entire* field value instead of just the matched substring.

## Reset to Default

The **Reset to Default** link in the top-right corner restores all sanitization settings to their factory defaults.

## See Also

- [MCP Server Settings](slug://settings-mcp-server)
- [Fiddler MCP Server](slug://fiddler-mcp-server)
- [Data Sanitization](slug://fe-sanitization)
- [Sanitization in the Fiddler Everywhere Reporter](slug://reporter-features#sanitization)
