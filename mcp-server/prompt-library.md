---
title: Prompt Library
page_title: Fiddler Everywhere AI Prompt Library
description: "Explore built-in and custom AI prompts for the Fiddler Everywhere MCP server to analyze HTTP traffic, debug applications, optimize performance, and enhance your development workflow."
slug: fiddler_ai_prompt_library
position: 10
---

# Fiddler Everywhere Prompt Library

Welcome to the Fiddler Everywhere Prompt Library—your comprehensive resource for AI-powered HTTP traffic analysis and debugging.

This library provides ready-to-use prompts optimized for the Fiddler Everywhere [MCP Server](slug://fiddler-mcp-server). Whether you're performing web debugging, security analysis, performance optimization, or data extraction, these prompts will help you maximize productivity by leveraging AI assistance with your captured HTTPS traffic.

>important **Understanding Result Variability**: The quality, accuracy, and format of outputs generated using these prompts can vary significantly based on several factors:
>
>- **LLM Selection**: Different Large Language Models (Claude, GPT-4, Gemini, etc.) have distinct capabilities, strengths, and limitations. Some models excel at code generation, while others may be better suited for analysis or explanation tasks.
>- **Prompt Formulation**: How you phrase your request dramatically impacts the response. More specific prompts with clear context and constraints typically yield better results than vague or ambiguous requests.
>- **Model Version**: Even within the same LLM family, different versions (e.g., Claude Sonnet 4 vs. Claude Sonnet 4.5) may produce different outputs for identical prompts.
>- **Context Window**: The amount of captured traffic data and conversation history can affect the model's ability to provide comprehensive analysis.
>
>**Best Practice**: Always review, validate, and test AI-generated outputs before implementing them in your workflow. Consider iterating on your prompts if initial results don't meet your expectations.

>tip Start with the [built-in prompts](#built-in-mcp-prompts) for quick actions, or explore [custom prompts](#custom-prompts) for advanced scenarios.

## Built-in MCP Prompts

The Fiddler Everywhere MCP server includes predefined system prompts for common operations. These built-in prompts provide quick access to Fiddler's core functionality directly from your AI-powered IDE.

### How to Use Built-in Prompts

1. Start your AI-powered IDE in **agent mode**.
2. Type `/mcp.fiddler.` to display all available built-in prompts.
3. Select the desired prompt or continue typing to autocomplete.

### Available Built-in Prompts

#### Authentication and Status

```bash
/mcp.fiddler.initiate-login
```
Initiates the login process to authenticate with Fiddler Everywhere.

```bash
/mcp.fiddler.is-user-logged-in
```
Checks the current authentication status to verify if the user is logged in to Fiddler Everywhere.

```bash
/mcp.fiddler.get-status
```
Retrieves the current operational status of Fiddler Everywhere, including capturing state and connection information.

#### Certificate Management

```bash
/mcp.fiddler.open-trust-root-certificate-dialog
```
Opens the system dialog for trusting the Fiddler root certificate, required for HTTPS traffic decryption.

#### Traffic Capturing

```bash
/mcp.fiddler.start-capture-with-terminal
```
Starts a new Terminal instance with Fiddler proxy settings automatically configured for capturing command-line traffic.

```bash
/mcp.fiddler.start-capture-with-chrome
```
Launches a new Chrome browser instance with Fiddler proxy settings pre-configured for capturing web traffic.

#### Session Management

```bash
/mcp.fiddler.get-sessions-count
```
Returns the total number of currently captured sessions in Fiddler Everywhere.

```bash
/mcp.fiddler.get-sessions
```
Retrieves the currently captured sessions with optional filters applied for targeted analysis.

```bash
/mcp.fiddler.get-session-details
```
Fetches detailed information about a specific session. You will be prompted to provide the session ID.

```bash
/mcp.fiddler.clear-sessions
```
Clears all currently captured sessions from Fiddler Everywhere.

#### Reverse Proxy Operations

```bash
/mcp.fiddler.add-reverse-proxy-port
```
Configures a reverse proxy in Fiddler. You will be prompted for:
- Client port to listen on (1025-65535)
- Remote host to forward traffic to

```bash
/mcp.fiddler.remove-reverse-proxy-port
```
Removes a previously configured reverse proxy port. You will be prompted for the client port number.

```bash
/mcp.fiddler.enable-reverse-proxy
```
Activates the reverse proxy functionality in Fiddler Everywhere.

```bash
/mcp.fiddler.disable-reverse-proxy
```
Deactivates the reverse proxy functionality in Fiddler Everywhere.

## Custom Prompts

Beyond the built-in prompts, you can use natural language to create custom prompts tailored to your specific debugging and analysis needs. The Fiddler Everywhere MCP server understands conversational queries and can perform complex operations based on your instructions.

All custom prompts in this library use the `#fiddler` handle to target the [MCP Server](slug://fiddler-mcp-server). Ensure you have [installed and enabled the MCP Server](slug://fiddler-mcp-server#installation) before using these prompts.

### How to Use Custom Prompts

1. **Browse** the prompt library to find a prompt that matches your use case.
2. **Copy** the prompt text, including the `#fiddler` handle.
3. **Customize** (optional) the prompt for your specific scenario, replacing placeholders like `{keyword}`, `{clientPort}`, or `{remoteHost}` with actual values.
4. **Run** the prompt in your AI-powered IDE's agent mode.

>warning Always review and validate the code, configurations, and solutions proposed by AI-powered tools before applying them to your production environment.

### Capture and Session Management

Start capturing traffic and manage your sessions with these essential prompts:

```txt
#fiddler Start capturing HTTP traffic in Fiddler using Chrome
```

```txt
#fiddler Start capturing HTTP traffic in Fiddler using a Terminal
```

```txt
#fiddler Add a reverse proxy, listening on {clientPort} and forwarding traffic to {remoteHost}
```

```txt
#fiddler Disable the reverse proxy
```

```txt
#fiddler Apply a filter to capture traffic that contains localhost
```

```txt
#fiddler Apply a filter to capture traffic that contains {keyword}
```

```txt
#fiddler Show filtered sessions
```

```txt
#fiddler Clear all filters
```

```txt
#fiddler Clear all captured sessions
```

### Traffic Analysis

Analyze captured HTTP traffic to understand application behavior and identify issues:

```txt
#fiddler Analyze the captured HTTP traffic
```

```txt
#fiddler Analyze session with ID {sessionId}
```

```txt
#fiddler Summarize all API calls made to {domain}
```

```txt
#fiddler Show me all failed requests (status codes 4xx and 5xx)
```

```txt
#fiddler List all sessions with response times greater than 2 seconds
```

```txt
#fiddler Extract all unique domains from the captured traffic
```

### Security Analysis

Identify security vulnerabilities and sensitive data exposure:

```txt
#fiddler Does the filtered sessions contain sanitized data
```

```txt
#fiddler Analyze the captured sessions for leaked sensitive data
```

```txt
#fiddler Analyze the captured sessions and suggest security optimizations
```

```txt
#fiddler Check for insecure HTTP connections in the captured traffic
```

```txt
#fiddler Identify sessions with weak or missing security headers
```

```txt
#fiddler Find all sessions containing authentication tokens or API keys
```

### Performance Analysis

Optimize application performance by analyzing timing and resource usage:

```txt
#fiddler Analyze the captured sessions and suggest performance optimizations
```

```txt
#fiddler Extract statistical data and timings from the traffic related to {domain}
```

```txt
#fiddler Identify the slowest API endpoints in the captured traffic
```

```txt
#fiddler Show me all sessions with large response bodies (>1MB)
```

```txt
#fiddler Analyze caching efficiency for the captured sessions
```

```txt
#fiddler Calculate the total bandwidth consumed by the captured traffic
```

### Rules and Automation

Create and manage rules to modify traffic behavior:

```txt
#fiddler Create a rule to match all sessions from {domain} and replace "{oldText}" with "{newText}" in the response bodies
```

```txt
#fiddler Delete all rules created from the MCP
```

```txt
#fiddler Create a rule to add a custom header "X-Debug-Mode: true" to all requests to {domain}
```

### Comprehensive Reporting

Generate detailed reports combining multiple analysis aspects:

```txt
#fiddler Analyze the captured session related to {domain} and create a comprehensive report that covers site purposes, used technologies, security highlights, and possible technical and performance optimizations
```

```txt
#fiddler Create a detailed API documentation based on the captured REST API calls to {domain}
```

```txt
#fiddler Generate a security audit report for all sessions captured from {domain}
```

```txt
#fiddler Create a performance benchmark report showing response times, payload sizes, and optimization recommendations
```

### Debugging and Troubleshooting

Use these prompts to diagnose and resolve issues:

```txt
#fiddler Help me debug why my application can't connect to {endpoint}
```

```txt
#fiddler Explain the CORS errors in the captured traffic
```

```txt
#fiddler Show me the request/response chain for session ID {sessionId}
```

```txt
#fiddler Compare the headers between session {sessionId1} and session {sessionId2}
```

```txt
#fiddler Find all redirect chains in the captured traffic
```

### Data Extraction

Extract specific information from captured traffic for further analysis:

```txt
#fiddler Extract all GraphQL queries from the captured sessions
```

```txt
#fiddler List all WebSocket connections and their messages
```

```txt
#fiddler Export all POST request bodies from sessions to {domain}
```

```txt
#fiddler Extract all JSON responses from the captured API calls
```

## Tips for Creating Effective Custom Prompts

When crafting your own custom prompts, consider these best practices:

- **Be specific**: Include domain names, session IDs, or specific criteria to narrow down the analysis.
- **Use filters**: Apply filters before complex analysis to reduce processing time and improve accuracy.
- **Combine operations**: Ask for multiple related tasks in a single prompt (e.g., "analyze and create a report").
- **Leverage context**: Reference previous prompts or analyses to build on earlier work.
- **Iterate**: Start with broad questions and refine based on the results.

## See Also

* [Fiddler Everywhere MCP Server Overview](slug://fiddler-mcp-server)
* [Security Highlights](slug://fe-security-highlights)
* [Data Sanitization](slug://fe-sanitization)