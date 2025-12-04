---
title: Fiddler MCP Server
page_title: Fiddler MCP Server
description: "Learn how to install, configure, and use the Fiddler Everywhere MCP server to integrate captured HTTPS traffic analysis with AI-powered IDEs and development tools."
slug: fiddler-mcp-server
publish: true
position: 1
---

# Fiddler MCP Server

The Fiddler Everywhere MCP (Model Context Protocol) server lets you interact with LLM models and reach new levels of developer productivity. The MCP server provides proprietary context to AI-powered IDEs, apps, and tools. You can use the Fiddler Everywhere MCP server for comprehensive analysis of captured HTTPS traffic, including web debugging, security highlights, performance reports, data extraction, and general usage. The Fiddler MCP enables you to successfully prompt more complex questions and tasks, and generate tailored code based on the information received from the captured HTTPS traffic.

## Prerequisites

To use the Fiddler Everywhere MCP server, you need:

- The latest version of Fiddler Everywhere.
- A Fiddler Everywhere Pro or higher subscription tier.
- An active internet connection.
- A unique API Key for the Fiddler Everywhere MCP server (generated within the application).
- A compatible MCP client (IDE, code editor, or app) that supports MCP tools.

## Installation

The generic settings for the Fiddler Everywhere MCP server are:

* **Server name handle**: `#fiddler` (default value - can be customized through **Settings > MCP Server**)
* **Server type**: `http`
* **Server URL**: `http://localhost:8868/mcp` (default value - the port can be customized through **Settings > MCP Server**)
* **Authorization**: A generated unique API key to be placed as an `Authorization` header.

### Visual Studio Code

To enable the Fiddler Everywhere MCP server in Visual Studio Code, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings > MCP Server** and complete the following:
    * Set the MCP server port (default value is `8868`).
    * Generate a unique API Key.
    * Copy the generated JSON configuration from the **VSCode** tab.
3. Open your Visual Studio Code workspace and complete the following:
    * Create a `.vscode/mcp.json` file in your workspace.
    * Paste the copied Fiddler Everywhere MCP configuration. Ensure that the JSON is properly formatted and that the Fiddler MCP server is within the `servers` property.

    _example mcp.json file in VSCode with Fiddler Evereywhere MCP server_
    ```JSON
    {
        "servers": {
            "fiddler": {
            "type": "http",
            "url": "http://localhost:8868/mcp",
                "headers": {
                    "Authorization": "ApiKey FIDDLER_API_KEY_HERE"
                }
            }
        }
    }
    ```
4. Start the Fiddler Everywhere MCP server in Visual Studio Code.

### Cursor

To enable the Fiddler Everywhere MCP server in Cursor, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings > MCP Server** and complete the following:
    * Set the MCP server port (default value is `8868`).
    * Generate a unique API Key.
    * Copy the generated JSON configuration from the **Cursor** tab.
3. Open your Cursor workspace and complete the following:
    * Create a `.cursor/mcp.json` file in your workspace.
    * Paste the copied Fiddler Everywhere MCP configuration. Ensure that the JSON is properly formatted and that the Fiddler MCP server is within the `mcpServers` property.

     _example mcp.json file in Cursor with Fiddler Evereywhere MCP server_
    ```JSON
    {
        "mcpServers": {
            "fiddler": {
            "url": "http://localhost:8868/mcp",
                "headers": {
                    "Authorization": "ApiKey FIDDLER_API_KEY_HERE"
                }
            }
        }
    }
    ```
4. Start the Fiddler Everywhere MCP server in Cursor.

## Usage

To use the Fiddler Everywhere MCP server:

1. Start the Fiddler Everywhere application.
2. Configure the MCP server in your IDE:
    * [Visual Studio Code](#visual-studio-code)
    * [Cursor](#cursor)
    * Or any other compatible IDE that supports MCP servers with tools.
3. Enable the **agent mode** in your IDE.
4. Start your prompt with `#fiddler` (or with `#` followed by your custom server name, if configured).

The MCP server will provide context from your captured HTTPS traffic to enhance your MCP-assisted development workflow.

>important The results and quality of outputs from the Fiddler Everywhere MCP server may vary depending on the prompt formulation and the specific Large Language Model (LLM) being used. Different LLMs have varying capabilities, and prompt quality significantly impacts the accuracy and relevance of generated responses.

>tip You can jump start your MCP journey by exploring our [prompt library](slug://fiddler_ai_prompt_library)

### Supported Capturing Modes

The Fiddler Everywhere MCP server supports the following capturing modes:

- [Browser capturing mode](slug://capture-browser-traffic)
- [Terminal capturing mode](slug://capture-terminal-traffic)
- [Reverse proxy](slug://fiddler-reverse-proxy)

## MCP Output Sanitization

The Fiddler Everywhere application provides a sanitization tool that automatically removes sensitive data from the output passed to the MCP server. The data sanitization feature enables users to minimize the risk of disclosing specific information.

>important Even with the feature enabled, Fiddler will attempt to sanitize the captured traffic, but complete removal of sensitive data is not guaranteed. The user is responsible for verifying the output and preventing unintended disclosure.

By default, the sanitization is enabled for all data passing through the MCP server. You can control what type of data to sanitize or add more strict rules through the **Settings > Sanitization** section.

## MCP Access Policies

The Fiddler Everywhere application provides managed application policies through its Fiddler Everywhere Enterprise tier. The `DisableMCP` policy enables license administrators to completely restrict access to the Fiddler Everywhere MCP server for licensed users.

### Windows

IT teams managing Windows systems can apply app configuration keys using their preferred administrative tooling by setting values in the following registry path:

```txt
HKEY_CURRENT_USER\SOFTWARE\Policies\Progress\Fiddler Everywhere
```

| Key Name | Description | Value Type | Value Example |
|:---------|:------------|:-----------|:--------------|
| `DisableMCP` | Enables or disables the Fiddler Everywhere MCP server | DWORD-32 (hexadecimal) | `1` |

### macOS

IT teams managing macOS systems can apply app configuration using their preferred device management solution (such as Jamf, Intune, or similar) by setting the following keys:

| Key Name | Description | Value Type | Value Example |
|:---------|:------------|:-----------|:--------------|
| `DisableMCP` | Enables or disables the Fiddler Everywhere MCP server | integer | `1` |

For more information on using managed application configurations, refer to the [Managed Application Policies](slug://fe-restrict-policies) article.