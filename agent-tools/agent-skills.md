---
title: Agent Skills
page_title: Fiddler Everywhere Agent Skills – Automate MCP Setup and Traffic Analysis in AI Coding Tools
description: "Install and use the official Fiddler Everywhere agent skills to automate MCP server configuration, HTTPS traffic analysis, and Fiddler installation in AI-powered IDEs such as GitHub Copilot, Claude Code, Cursor, Windsurf, and OpenAI Codex CLI."
slug: fiddler-agent-skills
publish: true
position: 15
---

# Agent Skills

Agent skills are instruction files that extend your coding assistant with the ability to interact with Fiddler Everywhere through its [MCP server](slug://fiddler-mcp-server). Once loaded, your coding tool can capture, inspect, and analyze live HTTPS traffic without you having to leave your editor.

The official Fiddler Everywhere skills are hosted in the [fiddler-agent-tools](https://github.com/telerik/fiddler-agent-tools) GitHub repository and cover three common workflows out of the box:

| Skill | Purpose |
|:------|:--------|
| `fiddler-download-setup` | Download, install, and launch Fiddler Everywhere from scratch, then automatically configure the MCP server. |
| `fiddler-mcp-setup` | Connect your coding assistant to the Fiddler MCP server. |
| `fiddler-feature-verification` | Verify that a feature's HTTP calls completed correctly by analyzing captured traffic. |

>tip You can also [create your own custom skills](slug://fiddler-creating-custom-skills) to tailor Fiddler-powered workflows to your specific needs.

## Prerequisites

- Fiddler Everywhere **Pro** or higher subscription.
- A supported coding tool (see [Supported Tools](#supported-tools)).
- **Node.js** installed — required when using Claude Desktop (the `npx mcp-remote` bridge).
- Git or a browser — to clone or download the repository.

## Installation

Clone or download the [fiddler-agent-tools](https://github.com/telerik/fiddler-agent-tools) repository to your local machine:

```bash
git clone https://github.com/telerik/fiddler-agent-tools.git
```

Each skill lives as a `SKILL.md` file inside its own folder under `skills/`:

```
fiddler-agent-tools/
  skills/
    fiddler-download-setup/SKILL.md
    fiddler-mcp-setup/SKILL.md
    fiddler-feature-verification/SKILL.md
```

After cloning, point your coding tool at the skill files using the configuration steps for your tool below.

## Supported Tools

### GitHub Copilot in VS Code

Skills are loaded as [custom instructions](https://docs.github.com/en/copilot/customizing-copilot/adding-custom-instructions-for-github-copilot). Add the skill files to your workspace's `.github/` folder or reference them via your user-level instructions file.

1. Create or edit `.github/copilot-instructions.md`, then paste or append the contents of the `SKILL.md` files you want to use, or reference the original `SKILL.md` files using the `files` directive in your Copilot configuration.
2. Open the Copilot Chat panel, switch to **Agent** mode, and activate the `@workspace` agent.
3. Invoke a skill by describing the task in natural language (see [Invoking Skills](#invoking-skills)).

### GitHub Copilot CLI

Add the skill files to your Copilot CLI configuration directory (`~/.copilot/`):

1. Create or edit `~/.copilot/mcp-config.json` and add the Fiddler MCP server entry (the `fiddler-mcp-setup` skill generates this file for you automatically).
2. Reference skill content by passing it as context when running `gh copilot suggest` or `gh copilot explain`.

### Claude Code

Claude Code loads skills automatically when a `SKILL.md` is placed in a `.claude/skills/` folder inside your project directory, or when you register the skill path in the project's Claude config.

1. Create a `.claude/skills/` directory in your project and copy the skill folders there:
   ```bash
   mkdir -p .claude/skills
   cp -r /path/to/fiddler-agent-tools/skills/* .claude/skills/
   ```
2. Start (or restart) Claude Code from your project directory. The skills are loaded automatically.
3. Add `.claude/skills/` to `.gitignore` if the skills folder should stay local.

### Claude Desktop

Claude Desktop uses a bridge (`npx mcp-remote`) to connect to the Fiddler HTTP MCP server. The `fiddler-mcp-setup` skill generates the correct configuration.

1. Ensure **Node.js** is installed (`node --version`).
2. Run the `fiddler-mcp-setup` skill (see [Invoking Skills](#invoking-skills)) — it will write the configuration to the Claude Desktop config file automatically.
3. Restart Claude Desktop to apply the changes.

### Cursor

Cursor supports agent skills placed in the `.cursor/` folder of your project.

1. Copy the skill folders into `.cursor/skills/`:
   ```bash
   mkdir -p .cursor/skills
   cp -r /path/to/fiddler-agent-tools/skills/* .cursor/skills/
   ```
2. Restart Cursor or reload the project. The skills are available in Composer and the Chat panel.

### Windsurf

Place the skill files in your Windsurf workspace and reference them as custom context:

1. Copy the skill folders into a `.windsurf/skills/` directory in your project.
2. In the Windsurf Cascade panel, use **Add context** to attach the relevant `SKILL.md` when you want to invoke a skill.

### OpenAI Codex CLI

Codex CLI loads skills from `~/.codex/` or from a project-local `.codex/` directory.

1. Copy the skill folders into `.codex/skills/`:
   ```bash
   mkdir -p .codex/skills
   cp -r /path/to/fiddler-agent-tools/skills/* .codex/skills/
   ```
2. Codex picks up the skills automatically on the next invocation.

## Invoking Skills

Skills are triggered by describing your intent in natural language. Each skill includes a description that helps the agent recognize when it should be applied. The table below shows the typical trigger phrases for each skill.

| Skill | When the Agent Invokes It | Example Trigger Phrase |
|:------|:--------------------------|:-----------------------|
| `fiddler-download-setup` | Fiddler Everywhere is not installed | *"Download and install Fiddler Everywhere"* / *"Set up Fiddler from scratch"* / *"Get started with Fiddler"* |
| `fiddler-mcp-setup` | MCP tools are unavailable, auth errors, first-time setup | *"Set up Fiddler MCP"* / *"Connect Fiddler to my IDE"* / *"I cannot see Fiddler tools"* |
| `fiddler-feature-verification` | After running a feature you want to verify via HTTP traffic | *"Verify the HTTP calls my feature made"* / *"Check what requests my app sent"* |

---

## Available Skills

### fiddler-download-setup

**Purpose**: Automates the complete first-time installation of Fiddler Everywhere on macOS, Linux, or Windows — from downloading the installer to launching the application. Once Fiddler is running, the skill automatically chains into MCP configuration so your coding tool can start using Fiddler tools immediately.

**What it does**:
1. Checks whether Fiddler Everywhere is already installed.
2. Detects the operating system and resolves the latest version from the official manifest.
3. Downloads the installer for your platform.
4. Runs a silent installation (with a native macOS privilege prompt where required).
5. Launches Fiddler Everywhere.
6. Automatically chains into the `fiddler-mcp-setup` workflow to configure the MCP server for your coding tool.

**When to use**: Use this skill when a developer does not have Fiddler Everywhere installed yet and wants to go from zero to a running, MCP-connected Fiddler instance in one step.

**Typical invocation**: *"Download Fiddler Everywhere"*, *"Install Fiddler for me"*, *"Get started with Fiddler"*, *"Set up Fiddler from scratch"*

---

### fiddler-mcp-setup

**Purpose**: Connects your coding assistant to the Fiddler Everywhere MCP server. It discovers the correct port, retrieves or generates an API key, writes the right config file for your tool, and gitignores it to keep the key out of source control.

**What it does**:
1. Verifies Fiddler Everywhere is installed and running.
2. Detects the current coding tool (VS Code, Claude Code, Cursor, and others) from directory markers.
3. Checks whether a Fiddler MCP config already exists.
4. Discovers the MCP port (default `8868`) and confirms it is reachable.
5. Calls the Fiddler key-management endpoint to retrieve or generate a unique API key.
6. Probes the server with the key to confirm the connection is valid.
7. Writes the correct config file for the detected tool with the right JSON (or TOML) schema.
8. Appends the config file to `.gitignore` if the file is inside a project directory.
9. Initiates the Fiddler login flow if the user is not yet authenticated.

**When to use**: Use this skill whenever the Fiddler MCP tools are not available in a session, on first-time setup, or when you encounter authentication errors connecting to Fiddler.

**Typical invocation**: *"Set up Fiddler MCP"*, *"I cannot see Fiddler tools"*, *"Connect Fiddler to VS Code"*, *"tool not found error"*

---

### fiddler-feature-verification

**Purpose**: Analyzes the HTTPS traffic captured by Fiddler Everywhere after you run a feature or user flow, and produces a structured report grouped by endpoint — flagging failures, auth errors, retries, and slow calls.

**What it does**:
1. Calls `get_status` to confirm Fiddler is reachable and capturing.
2. Calls `get_sessions_count` to check that traffic was captured.
3. Calls `get_sessions` to retrieve the captured session list.
4. Optionally uses `apply_filters` to narrow a large or noisy capture to the relevant traffic.
5. Groups sessions by endpoint (host + normalized path).
6. Calls `get_session_details` for failures, slow calls, and representative successful requests.
7. Produces a plain-language verification report with verdict, endpoint summary, timing, status-code distribution, and a flagged issues list.

**Output format**:
```
Feature Verification

Overall verdict: [Feature appears healthy / partially successful / likely failed / Inconclusive]

Traffic window: [description of the analyzed capture window]

Endpoint summary:
- METHOD HOST /normalized/path
  Calls: N  |  Statuses: 200 x3, 401 x1  |  Timing: avg Xms, max Yms
  What happened: [plain-language summary]

Possible issues:
- ⚠️ [Endpoint] [Issue name] — [explanation]

Conclusion:
- [Short answer on whether the feature appears to work correctly]
```

**When to use**: Run this skill after executing a feature, clicking a UI flow, or running an integration test — whenever you want to confirm that the HTTP calls your application made look correct.

**Typical invocation**: *"Verify the HTTP calls my feature made"*, *"Check what requests my app sent"*, *"Did my login flow work correctly?"*, *"Are there any errors in the captured traffic?"*

## See Also

* [Fiddler Everywhere MCP Server](slug://fiddler-mcp-server)
* [Prompt Library](slug://fiddler_ai_prompt_library)
* [Creating Custom Skills](slug://fiddler-creating-custom-skills)
