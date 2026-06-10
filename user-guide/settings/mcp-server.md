---
title: MCP Server
page_title: MCP Server - Settings | Fiddler Everywhere
description: "Learn how to configure the Fiddler Everywhere MCP server. Set up one-click coding agent integration or manually configure the server port, API key, and JSON configuration for your IDE."
slug: settings-mcp-server
publish: true
position: 24
---

# MCP Server Settings

The **MCP Server** settings section lets you connect coding assistants and agent-powered IDEs to Fiddler Everywhere through the [Model Context Protocol (MCP)](slug://fiddler-mcp-server). The section contains two tabs: **Coding agent** for one-click automated setup, and **Manual setup** for manual configuration.

The **MCP Output Sanitization is Enabled** indicator in the top-right corner shows whether output sanitization is active. You can control sanitization rules through [**Settings** > **Sanitization**](slug://settings-sanitization).

## Coding Agent Tab

The **Coding agent** tab provides one-click configuration for the most popular coding tools. The following clients are supported:

- **VS Code** (GitHub Copilot in Visual Studio Code)
- **Cursor**
- **Claude Code**
- **GitHub Copilot CLI**
- **Codex CLI**

Click the card for your tool to automatically generate an API key and write the correct MCP configuration file. Once configured, the card displays a **Configured** status indicator.

## Manual Setup Tab

The **Manual setup** tab exposes the raw server settings and per-tool JSON configuration snippets for manual integration.

- **Listens on port**: The local port the MCP server listens on. Default value is `8868`. Changing this port requires restarting the MCP server.

- **Server URL**: The full URL of the MCP server endpoint derived from the configured port (for example, `http://localhost:8868/mcp`). Use this URL when configuring MCP clients manually.

- **API Key**: A unique key used to authenticate MCP client requests. Click **Generate** to create a new key. Copy the key using the copy icon before navigating away, as it is not shown again in full.

- **Configuration**: Per-tool JSON configuration snippets ready to paste into your client's MCP configuration file. Select the tab for your tool (**VS Code**, **Cursor**, **Claude Code**, **GitHub Copilot CLI**, or **Codex CLI**) and copy the displayed JSON.

## See Also

- [Fiddler MCP Server](slug://fiddler-mcp-server)
- [Sanitization Settings](slug://settings-sanitization)
- [Fiddler Agent Skills](slug://fiddler-agent-skills)
