---
title: Creating Custom Skills
page_title: Creating Custom Fiddler Agent Skills – Build AI-Powered HTTP Analysis Workflows
description: "Learn how to build custom Fiddler Everywhere agent skills that combine MCP tools with your own analysis logic. Extend AI coding assistants like GitHub Copilot, Claude, and Cursor with tailored LLM-driven HTTPS traffic workflows and share them with your team."
slug: fiddler-creating-custom-skills
publish: true
position: 20
---

# Creating Custom Skills

The [official Fiddler agent skills](slug://fiddler-agent-skills) cover the most common workflows, but you can write your own skills to automate any Fiddler-powered analysis or debugging task that is specific to your application or team.

A **skill** is a plain Markdown file (`SKILL.md`) that instructs a coding assistant on how to perform a specific task. The file describes what the skill does (for automatic invocation), lists the operating rules the agent must follow, and documents the step-by-step procedure including which Fiddler MCP tools to call and what output to produce.

## Skill File Structure

A well-formed `SKILL.md` has three parts: **YAML frontmatter**, **operating rules**, and **procedure steps**.

```markdown
---
name: my-skill-name
description: >
  Short description of when and why this skill should be invoked.
  Write it so that the agent's skill-matching logic can recognize
  the right moment to load this skill automatically.
---

# Skill Title

One-sentence summary of what this skill accomplishes.

## Operating rules

- Rule 1 — a constraint that must always hold (for example, "Use MCP tools only; do not grep local files for traffic data.")
- Rule 2 — another invariant

## Steps

1. First step.
2. Second step.
...

## Output format

Describe the exact shape of the final output the agent produces.
```

### Frontmatter fields

| Field | Required | Description |
|:------|:---------|:------------|
| `name` | Yes | Unique identifier for the skill (kebab-case). Used for logging and disambiguation. |
| `description` | Yes | Plain-language description of the skill's purpose and the situations in which it should be activated. This text is used by the agent to decide whether to load the skill. The more specific it is, the more reliably the skill is invoked. |

## Using Fiddler MCP Tools in a Skill

Skills interact with Fiddler Everywhere through its MCP tools. When writing a skill, instruct the agent to call these tools by name instead of using shell commands, file reads, or other workarounds.

The most useful tools for custom skills are:

| Tool | What it returns | Typical use |
|:-----|:----------------|:-----------|
| `get_status` | Login state, capturing status, session count | Health check at the start of a skill |
| `get_sessions` | List of captured sessions with metadata | Identify which sessions belong to the feature under analysis |
| `get_sessions_count` | Total session count | Quick sanity check before heavier calls |
| `get_session_details(id)` | Full request/response headers and body | Inspect specific sessions in depth |
| `apply_filters` | (modifies the active session view) | Narrow a large capture to relevant traffic before calling `get_sessions` |
| `create_rule` | (creates a traffic manipulation rule) | Automate response modification, header injection, redirect, and others. |
| `clear_sessions` | (clears all captured sessions) | Reset state at the start of a clean test run |
| `start_capture_with_browser` | (launches a browser with proxy pre-set) | Automate a browser-based capture |
| `start_capture_with_terminal` | (opens a proxied terminal) | Automate a CLI-based capture |

Refer to the [Fiddler MCP Server](slug://fiddler-mcp-server#available-mcp-tools) article for the complete tool reference.

### Tips for writing reliable skill steps

- **Start with `get_status`** — always confirm Fiddler is reachable and the user is logged in before proceeding.
- **Use `apply_filters` before `get_sessions`** when the capture may be noisy — this reduces the data the agent must reason about.
- **Limit `get_session_details` calls** — call it only for sessions that genuinely need deep inspection (failures, slow calls, key representative requests). Avoid calling it for every session.
- **Be explicit about output format** — define the exact shape of the report the agent produces. This makes the skill's output consistent and easy to consume.
- **Keep operating rules short and unambiguous** — every rule must be a hard constraint, not advice.

## Walkthrough: A Custom Security Header Check Skill

The following example builds a skill that checks all captured sessions for missing or misconfigured security response headers, then produces a prioritized findings list.

### 1. Create the skill folder and file

```bash
mkdir -p .claude/skills/fiddler-security-header-check
touch .claude/skills/fiddler-security-header-check/SKILL.md
```

### 2. Write the SKILL.md

```markdown
---
name: fiddler-security-header-check
description: >
  Analyze captured HTTPS sessions for missing or misconfigured security
  response headers (Content-Security-Policy, Strict-Transport-Security,
  X-Frame-Options, X-Content-Type-Options, Referrer-Policy).
  Use this skill when a developer asks to check security headers, audit
  response headers, or verify that hardening headers are present.
---

# Security Header Check

Inspect captured HTTPS traffic and report missing or misconfigured
security response headers across all relevant endpoints.

## Operating rules

- Use Fiddler MCP tools for all traffic inspection. Do not read local files.
- Call get_session_details only for sessions with status 2xx or 3xx responses
  and only up to 20 sessions. Prioritize unique hosts.
- Do not report OPTIONS preflight sessions — skip them.

## Steps

1. Call get_status. Confirm Fiddler is reachable and the user is logged in.
   If session count is 0, stop and ask the user to capture traffic first.
2. Call get_sessions to retrieve the session list.
3. Filter to unique (host, path) pairs — ignore query strings.
   Deduplicate by host to keep the analysis manageable.
4. For each unique host (up to 10), call get_session_details for the
   most recent successful (2xx/3xx) session.
5. For each response, check for the presence and correctness of:
   - Content-Security-Policy
   - Strict-Transport-Security (HSTS)
   - X-Frame-Options
   - X-Content-Type-Options
   - Referrer-Policy
6. Produce the output report described below.

## Output format

Security Header Report

Hosts analyzed: N

| Header | Status | Details |
|:-------|:-------|:--------|
| Content-Security-Policy | ✅ Present / ❌ Missing / ⚠️ Misconfigured | [value or reason] |
| Strict-Transport-Security | ... | ... |
| X-Frame-Options | ... | ... |
| X-Content-Type-Options | ... | ... |
| Referrer-Policy | ... | ... |

Findings:
- ❌ [HOST] Missing Content-Security-Policy — all responses lacked this header.
- ⚠️ [HOST] Weak HSTS max-age — max-age=300 is below the recommended 31536000.

Recommendation:
[Short actionable summary of the most important fixes]
```

### 3. Load and invoke the skill

Place the `SKILL.md` in `.claude/skills/fiddler-security-header-check/` and restart your
coding tool. Then ask:

> *"Check the security headers in my captured traffic"*

The agent will recognize the request, load the skill, and run the steps above against your current Fiddler capture.

## Sharing and Contributing Skills

If you build a skill that could benefit other developers:

1. Fork the [fiddler-agent-tools](https://github.com/telerik/fiddler-agent-tools) repository.
2. Add your skill folder under `skills/your-skill-name/SKILL.md`.
3. Update the `README.md` skills table.
4. Open a pull request with a clear description of what the skill does and when it is invoked.

## See Also

* [Agent Skills](slug://fiddler-agent-skills)
* [Fiddler Everywhere MCP Server](slug://fiddler-mcp-server)
* [Prompt Library](slug://fiddler_ai_prompt_library)
