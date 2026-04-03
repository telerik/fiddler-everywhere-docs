---
title: Fiddler MCP Server
page_title: Fiddler MCP Server
description: "Learn how to install, configure, and use the Fiddler Everywhere MCP server to integrate captured HTTPS traffic analysis with LLM-powered IDEs and development tools."
slug: fiddler-mcp-server
publish: true
position: 1
---

# Fiddler MCP Server

The Fiddler Everywhere MCP (Model Context Protocol) server lets you interact with LLM models and reach new levels of developer productivity. The MCP server provides proprietary context to LLM-powered IDEs, apps, and tools. You can use the Fiddler Everywhere MCP server for comprehensive analysis of captured HTTPS traffic, including web debugging, security highlights, performance reports, data extraction, and general usage. The Fiddler MCP enables you to successfully prompt more complex questions and tasks, and generate tailored code based on the information received from the captured HTTPS traffic.

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

### Claude Code

To enable the Fiddler Everywhere MCP server in Claude Code, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings > MCP Server** and complete the following:
    * Set the MCP server port (default value is `8868`).
    * Generate a unique API Key.
3. In your project directory, create an `.mcp.json` file with the following configuration:

    _example .mcp.json file for Claude Code with Fiddler Everywhere MCP server_
    ```JSON
    {
        "mcpServers": {
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
    Replace `FIDDLER_API_KEY_HERE` with the API key generated in step 2.
4. Add `.mcp.json` to your `.gitignore` to avoid committing the API key to source control.
5. Start Claude Code from your project directory. The Fiddler MCP server will be available automatically.

>tip Alternatively, you can register the server via the CLI: `claude mcp add --transport http fiddler http://localhost:8868/mcp -H "Authorization: ApiKey FIDDLER_API_KEY_HERE"`

### Claude Desktop

To enable the Fiddler Everywhere MCP server in Claude Desktop, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings > MCP Server** and complete the following:
    * Set the MCP server port (default value is `8868`).
    * Generate a unique API Key.
3. Open the Claude Desktop configuration file for your operating system:
    * **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
    * **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
4. Add the Fiddler Everywhere MCP server entry to the `mcpServers` object. Create the file if it does not exist.

    _example claude_desktop_config.json file with Fiddler Everywhere MCP server_
    ```JSON
    {
        "mcpServers": {
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
    Replace `FIDDLER_API_KEY_HERE` with the API key generated in step 2.
5. Restart Claude Desktop to apply the configuration.

### Windsurf

To enable the Fiddler Everywhere MCP server in Windsurf, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings > MCP Server** and complete the following:
    * Set the MCP server port (default value is `8868`).
    * Generate a unique API Key.
3. Open the Windsurf MCP configuration file located at:
    * **macOS / Linux**: `~/.codeium/windsurf/mcp_config.json`
    * **Windows**: `%USERPROFILE%\.codeium\windsurf\mcp_config.json`
4. Add the Fiddler Everywhere MCP server entry to the `mcpServers` object. Create the file if it does not exist.

    _example mcp_config.json file in Windsurf with Fiddler Everywhere MCP server_
    ```JSON
    {
        "mcpServers": {
            "fiddler": {
                "serverType": "http",
                "url": "http://localhost:8868/mcp",
                "headers": {
                    "Authorization": "ApiKey FIDDLER_API_KEY_HERE"
                }
            }
        }
    }
    ```
    Replace `FIDDLER_API_KEY_HERE` with the API key generated in step 2.
5. Restart Windsurf or reload the MCP configuration to apply the changes.

## Usage

To use the Fiddler Everywhere MCP server:

1. Start the Fiddler Everywhere application.
2. Configure the MCP server in your IDE:
    * [Visual Studio Code](#visual-studio-code)
    * [Cursor](#cursor)
    * [Claude Code](#claude-code)
    * [Claude Desktop](#claude-desktop)
    * [Windsurf](#windsurf)
    * Or any other compatible tool that supports MCP servers.
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

## Available MCP Tools

The Fiddler Everywhere MCP server exposes the following tools. These tools can be invoked by your LLM agent (using `#fiddler` or your configured server name) to interact programmatically with the Fiddler Everywhere application.

### Authentication and Status

| Tool | Description |
|:-----|:------------|
| `get_status` | Returns the current status of the Fiddler Everywhere application, including login state, certificate trust status, proxy configuration, and captured session counts. Useful as a health check before issuing other commands. |
| `is_user_logged_in` | Checks whether the current user is authenticated with Fiddler Everywhere. Returns a boolean result. |
| `initiate_login` | Triggers the Fiddler Everywhere login flow by opening the authentication page. Use this when `is_user_logged_in` reports that the user is not authenticated. |
| `open_trust_root_certificate_dialog` | Opens the Fiddler Everywhere dialog for trusting the root CA certificate. Trusting the certificate is required for HTTPS traffic decryption and interception. |

### Traffic Capture

| Tool | Description |
|:-----|:------------|
| `start_capture_with_browser` | Launches a browser instance (Chrome) with the Fiddler Everywhere proxy settings pre-configured, enabling immediate capture of browser HTTP/HTTPS traffic. |
| `start_capture_with_terminal` | Opens a terminal session with the Fiddler Everywhere proxy environment variables pre-set, enabling capture of traffic from CLI tools, scripts, or applications started within that terminal. |

### Session Management

| Tool | Description |
|:-----|:------------|
| `get_sessions` | Retrieves the list of captured HTTP/HTTPS sessions, optionally limited by any active filters. Returns session metadata such as URLs, methods, status codes, and timing. |
| `get_sessions_count` | Returns the total number of currently captured sessions. Useful for quickly assessing session volume without fetching the full session list. |
| `get_session_details` | Fetches full details for a specific captured session by its ID, including request and response headers, request and response body, HTTP method, URL, status code, protocol, start time, duration, client and remote HTTP versions, TLS versions, and IP addresses. The session ID is the numeric value shown in the **ID** column of the **Live Traffic** grid in Fiddler Everywhere. |
| `apply_filters` | Applies filter criteria (such as URL pattern, status code, or HTTP method) to the active session list to narrow down the sessions visible to subsequent tool calls. |
| `clear_sessions` | Permanently removes all currently captured sessions from the Fiddler Everywhere session list. |

### Rules

| Tool | Description |
|:-----|:------------|
| `create_rule` | Creates a traffic manipulation rule with configurable match conditions and actions. Rules can be used to modify request or response headers, redirect URLs, inject content, simulate latency, and more. |
| `clear_rules` | Removes all rules that were created through the MCP server during the current session. |

### Reverse Proxy

| Tool | Description |
|:-----|:------------|
| `add_reverse_proxy_port` | Adds a reverse proxy mapping that forwards traffic arriving on a specified local port to a designated remote host and port. Useful for intercepting traffic from applications that do not honor system proxy settings. |
| `remove_reverse_proxy_port` | Removes a previously configured reverse proxy port mapping by its local port number. |
| `enable_reverse_proxy` | Enables the Fiddler Everywhere reverse proxy feature so that active port mappings start forwarding traffic. |
| `disable_reverse_proxy` | Disables the Fiddler Everywhere reverse proxy feature, stopping all active port mappings from forwarding traffic. |

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