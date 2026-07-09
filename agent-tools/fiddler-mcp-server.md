---
title: Fiddler MCP Server
page_title: Fiddler Everywhere MCP Server – Connect LLM-Powered Coding Tools to Live HTTPS Traffic
description: "Install and configure the Fiddler Everywhere MCP server to give LLM-powered coding assistants (VS Code, Cursor, Claude, Windsurf) real-time access to captured HTTPS traffic for debugging, security analysis, and performance optimization."
slug: fiddler-mcp-server
publish: true
position: 1
previous_url: /mcp-server/fiddler-mcp-server
---

# Fiddler MCP Server

The Fiddler Everywhere MCP (Model Context Protocol) server lets you connect coding assistants and agent-powered tools, reaching new levels of developer productivity. The MCP server provides proprietary context to agent-powered IDEs, apps, and tools. You can use the Fiddler Everywhere MCP server for comprehensive analysis of captured HTTPS traffic, including web debugging, security highlights, performance reports, data extraction, and general usage. The Fiddler MCP enables you to successfully prompt more complex questions and tasks, and generate tailored code based on the information received from the captured HTTPS traffic.

## Prerequisites

To use the Fiddler Everywhere MCP server, you need:

- The latest version of Fiddler Everywhere.
- A Fiddler Everywhere Pro or higher subscription tier.
- An active internet connection.
- A unique API Key for the Fiddler Everywhere MCP server (generated within the application).
- A compatible MCP client (IDE, code editor, or app) that supports MCP tools.

## Installation

>tip The fastest way to configure the Fiddler MCP server in any supported coding tool is to use the **[fiddler-mcp-setup](slug://fiddler-agent-skills#fiddler-mcp-setup) agent skill**. It auto-discovers the port, retrieves your API key, writes the correct config file for your tool, and gitignores it — all in one step. If Fiddler Everywhere is not yet installed, start with the **[fiddler-download-setup](slug://fiddler-agent-skills#fiddler-download-setup) skill** instead.

### Automated Configuration via Fiddler Everywhere

Fiddler Everywhere provides a built-in one-click configuration option for the most popular coding agents. To use it:

1. Start the Fiddler Everywhere application.
2. Go to **Settings** > **MCP Server**.
3. Select the **Coding agent** tab.
4. Click the card for your coding tool (VS Code, Cursor, Claude Code, GitHub Copilot CLI, or Codex CLI).

Fiddler Everywhere automatically generates the API key, writes the correct configuration file for the selected tool, and marks it as **Configured**. No manual editing of configuration files is required.

### Manual Configuration

To configure the MCP server manually, go to **Settings** > **MCP Server** and select the **Manual setup** tab. Use the generic settings below or follow the per-tool instructions:

The generic settings for the Fiddler Everywhere MCP server are:

* **Server name handle**: `#fiddler` (default value - can be customized through **Settings** > **MCP Server** > **Manual setup**)
* **Server type**: `http`
* **Server URL**: `http://localhost:8868/mcp` (default value - the port can be customized through **Settings** > **MCP Server** > **Manual setup**)
* **Authorization**: A generated unique API key to be placed as an `Authorization` header.

### GitHub Copilot in Visual Studio Code

To enable the Fiddler Everywhere MCP server for GitHub Copilot in Visual Studio Code, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings** > **MCP Server > Manual Setup** and complete the following:
    * Set the MCP server port (default value is `8868`).
    * Generate a unique API Key.
    * Copy the generated JSON configuration from the **VSCode** tab.
3. Open your Visual Studio Code workspace and complete the following:
    * Create a `.vscode/mcp.json` file in your workspace.
    * Paste the copied Fiddler Everywhere MCP configuration. Ensure that the JSON is properly formatted and that the Fiddler MCP server is within the `servers` property.

    _example mcp.json file in VSCode with Fiddler Everywhere MCP server_
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
    Replace `FIDDLER_API_KEY_HERE` with the API key generated in step 2.
4. Add `.vscode/mcp.json` to your `.gitignore` to avoid committing the API key to source control.
5. Start the Fiddler Everywhere MCP server in Visual Studio Code.

### Cursor

To enable the Fiddler Everywhere MCP server in Cursor, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings** > **MCP Server** > **Manual setup** and complete the following:
    * Set the MCP server port (default value is `8868`).
    * Generate a unique API Key.
    * Copy the generated JSON configuration from the **Cursor** tab.
3. Open your Cursor workspace and complete the following:
    * Create a `.cursor/mcp.json` file in your workspace.
    * Paste the copied Fiddler Everywhere MCP configuration. Ensure that the JSON is properly formatted and that the Fiddler MCP server is within the `mcpServers` property.

     _example mcp.json file in Cursor with Fiddler Everywhere MCP server_
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
2. Go to **Settings** > **MCP Server** > **Manual setup** and complete the following:
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

Alternatively, you can register the server via the CLI: 

```sh
claude mcp add --transport http fiddler http://localhost:8868/mcp -H "Authorization: ApiKey FIDDLER_API_KEY_HERE"
```

### Claude Desktop

To enable the Fiddler Everywhere MCP server in Claude Desktop, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings** > **MCP Server** > **Manual setup** and complete the following:
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

### GitHub Copilot CLI

To enable the Fiddler Everywhere MCP server in GitHub Copilot CLI, follow these steps:

1. Start the Fiddler Everywhere application.
2. Go to **Settings** > **MCP Server** > **Manual setup** and complete the following:
    * Set the MCP server port (default value is `8868`).
    * Generate a unique API Key.
3. Open or create the GitHub Copilot CLI MCP configuration file at `~/.copilot/mcp-config.json`.
4. Add the Fiddler Everywhere MCP server entry to the `mcpServers` object.

    _example mcp-config.json for GitHub Copilot CLI with Fiddler Everywhere MCP server_
    ```JSON
    {
        "mcpServers": {
            "fiddler": {
                "type": "http",
                "url": "http://localhost:8868/mcp",
                "headers": {
                    "Authorization": "ApiKey FIDDLER_API_KEY_HERE"
                },
                "tools": [
                    "*"
                ]
            }
        }
    }
    ```
    Replace `FIDDLER_API_KEY_HERE` with the API key generated in step 2.

>important The `"tools": ["*"]` property is required for GitHub Copilot CLI — omitting it disables all MCP tools.

>important The configuration file `~/.copilot/mcp-config.json` is a global user-level file stored outside any repository. Keep it private and do not share or commit it, as it contains your API key in plaintext.

## Usage

To use the Fiddler Everywhere MCP server:

1. Start the Fiddler Everywhere application.
2. Configure the MCP server in your IDE:
    * [GitHub Copilot in Visual Studio Code](#github-copilot-in-visual-studio-code)
    * [GitHub Copilot CLI](#github-copilot-cli)
    * [Cursor](#cursor)
    * [Claude Code](#claude-code)
    * [Claude Desktop](#claude-desktop)
    * Or any other compatible tool that supports MCP servers.
3. Enable the **agent mode** in your IDE.
4. Start your prompt with `#fiddler` (or with `#` followed by your custom server name, if configured).

The MCP server will provide context from your captured HTTPS traffic to enhance your MCP-assisted development workflow.

>important The results and quality of outputs from the Fiddler Everywhere MCP server may vary depending on the prompt formulation and the specific language model being used. Different models have varying capabilities, and prompt quality significantly impacts the accuracy and relevance of generated responses.

>tip You can jump start your MCP journey by exploring our [prompt library](slug://fiddler_ai_prompt_library) or check the [agent skills](slug://fiddler-agent-skills) that automate common setup and analysis tasks.

### Supported Capturing Modes

The Fiddler Everywhere MCP server supports the following capturing modes:

- [Browser capturing mode](slug://capture-browser-traffic)
- [Terminal capturing mode](slug://capture-terminal-traffic)
- [Reverse proxy](slug://fiddler-reverse-proxy)
- [Network capturing mode](slug://capture-network-traffic) (via the `capture_application` tool)

## Available MCP Tools

The Fiddler Everywhere MCP server exposes the following tools. These tools can be invoked by your coding assistant (using `#fiddler` or your configured server name) to interact programmatically with the Fiddler Everywhere application.

### Authentication and Status

| Tool | Description |
|:-----|:------------|
| `get_status` | Gets the current status of Fiddler, including `IsUserLoggedIn`, `IsRootCertificateTrusted`, number of Browser and Terminal instances running, reverse proxy status and configured ports, `IsSystemProxyEnabled`, `IsNetworkCaptureEnabled`, and the number of captured and visible sessions. Useful as a health check before issuing other commands. |
| `is_user_logged_in` | Indicates whether Fiddler is currently authenticated. |
| `initiate_login` | Performs login to Fiddler. Opens a new Chrome window for authentication. Use this when `is_user_logged_in` reports that the user is not authenticated. |
| `open_trust_root_certificate_dialog` | Opens the system trust root certificate dialog. Required for HTTPS traffic interception. |

### Traffic Capture

| Tool | Description |
|:-----|:------------|
| `start_capture_with_browser` | Opens a fresh Chrome-based browser instance with Fiddler proxy settings applied. |
| `start_capture_with_terminal` | Starts a new terminal with Fiddler proxy settings applied. |
| `capture_application` | Starts network-level traffic capture scoped to a specific application. Accepts an optional process name or PID parameter — when omitted, the tool auto-detects the target from the active IDE or CLI context. Can be invoked as a natural-language prompt (`#fiddler capture traffic from my app`) or as a slash command (`/mcp.fiddler.capture-application`). If the network capture extension is not yet installed and enabled, the tool guides the user through the prerequisite setup flow, including the admin rights requirement and system-level extension approval. |

### Capturing Application Traffic (`capture_application`)

The `capture_application` tool enables a streamlined, in-chat traffic capture workflow. Instead of leaving the IDE or CLI to configure a reverse proxy or manually start a capturing session, developers can ask their coding assistant to start capturing their app's traffic and the MCP handles the rest.

The tool can target a process in two ways:

- **Auto-detect (no parameter)** — The tool reads process metadata or the active port from the model request context and scopes capture to the detected application automatically.
- **Manual targeting (process name or PID)** — You can explicitly specify the process to capture by providing its name or numeric PID. When invoking the tool as a slash command (`/mcp.fiddler.capture-application`), a prompt appears where you can enter the process name or PID directly.

**Example prompts**

```
#fiddler capture traffic from my app
```

```
/mcp.fiddler.capture-application my-process-name
```

```
/mcp.fiddler.capture-application 14732
```

#### Prerequisite: Network Capture Enablement

The `capture_application` tool relies on the [network capturing mode](slug://capture-network-traffic), which requires a system-level network extension (macOS) or kernel driver (Windows) to be installed and enabled. This setup happens automatically when you first invoke the tool, but the following constraints apply:

- **Administrator privileges are required.** The user must have admin rights on the machine. The MCP notifies the user of this requirement *before* initiating the installation prompt.
- **Extension installation approval is required.** The user must accept the system-level prompt to install the network capture extension.

**Enablement flow (triggered automatically from the MCP)**

1. User invokes `capture_application` (or the MCP detects that network capture is not yet enabled).
2. The MCP notifies the user in the chat: *"Network capture requires administrator privileges on the machine. Only users with admin rights can continue."*
3. The MCP initiates the enablement sequence — the user is directed to the system window to approve the extension installation.
4. After approval, the user is redirected back to the chat and capture proceeds automatically.

>important If the user does not have administrator rights, the flow fails gracefully with a clear message. The admin rights requirement is always communicated **before** the system prompt is shown.

### Session Management

The session management tools support both the **Live Traffic** and **Agent Calls** tabs through a required `sessionsSource` parameter. The parameter accepts two values: `LiveTraffic` and `AgentCalls`. Use `LiveTraffic` for real-time captured HTTP/HTTPS traffic. Use `AgentCalls` for LLM agent API calls. When prompting your coding assistant, explicitly specify which sessions source to target so that the `sessionsSource` parameter is set correctly.

>tip Sessions from the **Agent Calls** tab can also be inspected visually through the [**Agent Inspector**](slug://inspector-types#agent-inspector) tab in the Fiddler Everywhere UI. The Agent Inspector surfaces cost, latency, messages, tool calls, and model configuration in a structured view for each agent session.

| Tool | Description |
|:-----|:------------|
| `get_sessions` | Gets the sessions from the specified Fiddler sessions source. Active filters are applied if any. Use `LiveTraffic` for real-time captured HTTP/HTTPS traffic. Use `AgentCalls` for LLM agent API calls—each session also includes `isCached` status, the LLM model name, and a preview of the last user prompt. **Required parameter:** `sessionsSource`. |
| `get_sessions_count` | Gets the number of sessions in the specified Fiddler sessions source. **Required parameter:** `sessionsSource`. |
| `get_session_details` | Gets detailed information about a specific session in the specified Fiddler sessions source, including request and response headers, bodies, HTTP method, URL, status code, protocol, start time, duration, client and remote HTTP versions, TLS versions, and IP addresses. The session ID is the numeric value shown in the **ID** column of the traffic grid in Fiddler Everywhere. **Required parameters:** `sessionId` (integer) and `sessionsSource`. |
| `apply_filters` | Applies filters to the specified Fiddler sessions source. Selects only the sessions that match the specified criteria. Applying filters wipes all existing filters. To clear filters, call this tool with an empty filter collection. **Required parameters:** `filters` (object) and `sessionsSource`. |
| `clear_sessions` | Clears all sessions in the specified Fiddler sessions source. Agent calls are also HTTP traffic so they appear in both tabs. **Required parameter:** `sessionsSource`. |

### Agent Cache

The Agent Cache tools provide programmatic control over the [Agent Cache](slug://agent-cache) functionality, allowing you to manage cached responses for model-provider endpoint sessions directly from your coding assistant. The data exposed by these tools is also surfaced visually in the [**Agent Inspector**](slug://inspector-types#agent-inspector) tab within the Fiddler Everywhere UI, where you can review cost savings, latency gains, messages, tool calls, and model configuration for each cached session.

| Tool | Description |
|:-----|:------------|
| `cache_agent_calls` | Enables or disables caching for a specific session in the **Agent Calls** tab. Set `enableCache` to `true` to cache the session—future requests matching this session will be served from cache instead of hitting the server. Set `enableCache` to `false` to disable caching—the session remains in the Agent Calls tab but stops serving cached responses. **Required parameters:** `sessionId` (integer) and `enableCache` (boolean). |
| `check_cache_status` | Checks whether a specific session in the **Agent Calls** tab is currently cached. Returns the cache status for the requested session. **Required parameter:** `sessionId` (integer). |

### Rules

| Tool | Description |
|:-----|:------------|
| `create_rule` | Creates a rule to modify sessions in Fiddler. The rule is applied to all sessions that match the specified criteria. At least one condition must be specified. If the match criteria requires response data, it is matched after the server responds; otherwise before the request is sent. If an action updates response data (such as the status code), it executes after the response is received; other actions are applied before the request is sent. If an action is marked as final, no other actions are executed after it. Some actions are final even if not explicitly marked—`CloseGracefully`, `CloseNonGracefully`, `DoNotShow`, and `DoNotDecrypt`. These four do not require any additional parameters except for the type. Update actions need parameters: all require a `condition` and a `value`, and if the action updates a header, also a `key`. |
| `clear_rules` | Clears all rules created from the MCP server. |

### Reverse Proxy

| Tool | Description |
|:-----|:------------|
| `add_reverse_proxy_port` | Adds a reverse proxy configuration to Fiddler to forward requests from a specific port to a remote host and intercept the traffic in between. Useful for testing and debugging purposes. **Required parameters:** `clientPort` (integer — the local port to listen on) and `remoteHost` (string — the remote host to forward traffic to). |
| `remove_reverse_proxy_port` | Removes a reverse proxy configuration for a specific port from Fiddler. **Required parameter:** `clientPort` (integer). |
| `enable_reverse_proxy` | Enables the reverse proxy. |
| `disable_reverse_proxy` | Disables the reverse proxy. |

## MCP Output Sanitization

The Fiddler Everywhere application provides a sanitization tool that automatically removes sensitive data from the output passed to the MCP server. The data sanitization feature enables users to minimize the risk of disclosing specific information.

>important Even with the feature enabled, Fiddler will attempt to sanitize the captured traffic, but complete removal of sensitive data is not guaranteed. The user is responsible for verifying the output and preventing unintended disclosure.

By default, the sanitization is enabled for all data passing through the MCP server. You can control what type of data to sanitize or add more strict rules through the **Settings** > **Sanitization** section.

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

## See Also

- [Fiddler Agent Skills](slug://fiddler-agent-skills)
- [Fiddler Prompt Library](slug://fiddler_ai_prompt_library)
- [Creating Custom Skills](slug://fiddler-creating-custom-skills)