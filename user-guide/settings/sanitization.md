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

Defines custom sanitization rules applied on top of the built-in ones. Rules are organized into three tabs:

- **Headers**: Lists specific header names whose values should always be sanitized (for example, `Authorization`, `X-Api-Key`). Enter header names separated by semicolons.
- **Keywords**: Lists exact strings that should be masked wherever they appear in the session.
- **Regexes**: Lists regular expression patterns. Any match is replaced with the configured mask value.

## Reset to Default

The **Reset to Default** link in the top-right corner restores all sanitization settings to their factory defaults.

## See Also

- [MCP Server Settings](slug://settings-mcp-server)
- [Fiddler MCP Server](slug://fiddler-mcp-server)
- [Saving and Exporting Traffic](slug://saving-data)
