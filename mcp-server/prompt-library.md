---
title: Prompt Library
page_title: Fiddler Everywhere AI Prompt Library
description: "Explore built-in and custom AI prompts for the Fiddler Everywhere MCP server to analyze HTTP traffic, debug applications, optimize performance, and enhance your development workflow."
slug: fiddler_ai_prompt_library
position: 10
---

# Fiddler Everywhere Prompt Library

Welcome to the Fiddler Everywhere Prompt Library—your comprehensive resource for AI-powered HTTP traffic analysis and debugging.

This library provides ready-to-use prompts optimized for the Fiddler Everywhere [MCP Server]({%slug fiddler-mcp-server%}). Whether you're performing web debugging, security analysis, performance optimization, or data extraction, these prompts will help you maximize productivity by leveraging AI assistance with your captured HTTPS traffic.

>tip Start with the [built-in prompts](#built-in-mcp-prompts) for quick actions, or explore [custom prompts](#custom-prompts) for advanced scenarios.

## Built-in MCP Prompts

The Fiddler Everywhere MCP server includes predefined system prompts for common operations. These built-in prompts provide quick access to Fiddler's core functionality directly from your AI-powered IDE.

### How to Use Built-in Prompts

1. Start your AI-powered IDE in **agent mode**.
2. Type `/mcp.fiddler.` to display all available built-in prompts.
3. Select the desired prompt or continue typing to autocomplete.

### Available Built-in Prompts

#### Authentication and Status

```sh
/mcp.fiddler.initiate-login
```
Initiates the login process to authenticate with Fiddler Everywhere.

```sh
/mcp.fiddler.is-user-logged-in
```
Checks the current authentication status to verify if the user is logged in to Fiddler Everywhere.

```sh
/mcp.fiddler.get-status
```
Retrieves the current operational status of Fiddler Everywhere, including capturing state and connection information.

#### Certificate Management

```sh
/mcp.fiddler.open-trust-root-certificate-dialog
```
Opens the system dialog for trusting the Fiddler root certificate, required for HTTPS traffic decryption.

#### Traffic Capturing

```sh
/mcp.fiddler.start-capture-with-terminal
```
Starts a new Terminal instance with Fiddler proxy settings automatically configured for capturing command-line traffic.

```sh
/mcp.fiddler.start-capture-with-chrome
```
Launches a new Chrome browser instance with Fiddler proxy settings pre-configured for capturing web traffic.

#### Session Management

```sh
/mcp.fiddler.get-sessions-count
```
Returns the total number of currently captured sessions in Fiddler Everywhere.

```sh
/mcp.fiddler.get-sessions
```
Retrieves the currently captured sessions with optional filters applied for targeted analysis.

```sh
/mcp.fiddler.get-session-details
```
Fetches detailed information about a specific session. You will be prompted to provide the session ID.

```sh
/mcp.fiddler.clear-sessions
```
Clears all currently captured sessions from Fiddler Everywhere.

#### Reverse Proxy Operations

```sh
/mcp.fiddler.add-reverse-proxy-port
```
Configures a reverse proxy in Fiddler. You will be prompted for:
- Client port to listen on (1025-65535)
- Remote host to forward traffic to

```sh
/mcp.fiddler.remove-reverse-proxy-port
```
Removes a previously configured reverse proxy port. You will be prompted for the client port number.

```sh
/mcp.fiddler.enable-reverse-proxy
```
Activates the reverse proxy functionality in Fiddler Everywhere.

```sh
/mcp.fiddler.disable-reverse-proxy
```
Deactivates the reverse proxy functionality in Fiddler Everywhere.

## Custom Prompts

Beyond the built-in prompts, you can use natural language to create custom prompts tailored to your specific debugging and analysis needs. The Fiddler Everywhere MCP server understands conversational queries and can perform complex operations based on your instructions.

All custom prompts in this library use the `#fiddler` handle to target the [MCP Server]({%slug fiddler-mcp-server%}). Ensure you have [installed and enabled the MCP Server]({%slug fiddler-mcp-server%}#installation) before using these prompts.

### How to Use Custom Prompts

1. **Browse** the prompt library to find a prompt that matches your use case.
2. **Copy** the prompt text, including the `#fiddler` handle.
3. **Customize** (optional) the prompt for your specific scenario, replacing placeholders like `{keyword}`, `{clientPort}`, or `{remoteHost}` with actual values.
4. **Run** the prompt in your AI-powered IDE's agent mode.

>warning Always review and validate the code, configurations, and solutions proposed by AI-powered tools before applying them to your production environment.

### Capture and Session Management

Start capturing traffic and manage your sessions with these essential prompts:

```
#fiddler Start capturing HTTP traffic in Fiddler using Chrome
```

```
#fiddler Start capturing HTTP traffic in Fiddler using a Terminal
```

```
#fiddler Add a reverse proxy, listening on {clientPort} and forwarding traffic to {remoteHost}
```

```
#fiddler Disable the reverse proxy
```

```
#fiddler Apply a filter to capture traffic that contains localhost
```

```
#fiddler Apply a filter to capture traffic that contains {keyword}
```

```
#fiddler Show filtered sessions
```

```
#fiddler Clear all filters
```

```
#fiddler Clear all captured sessions
```

### Traffic Analysis

Analyze captured HTTP traffic to understand application behavior and identify issues:

```
#fiddler Analyze the captured HTTP traffic
```

```
#fiddler Analyze session with ID {sessionId}
```

```
#fiddler Summarize all API calls made to {domain}
```

```
#fiddler Show me all failed requests (status codes 4xx and 5xx)
```

```
#fiddler List all sessions with response times greater than 2 seconds
```

```
#fiddler Extract all unique domains from the captured traffic
```

### Security Analysis

Identify security vulnerabilities and sensitive data exposure:

```
#fiddler Does the filtered sessions contain sanitized data
```

```
#fiddler Analyze the captured sessions for leaked sensitive data
```

```
#fiddler Analyze the captured sessions and suggest security optimizations
```

```
#fiddler Check for insecure HTTP connections in the captured traffic
```

```
#fiddler Identify sessions with weak or missing security headers
```

```
#fiddler Find all sessions containing authentication tokens or API keys
```

### Performance Analysis

Optimize application performance by analyzing timing and resource usage:

```
#fiddler Analyze the captured sessions and suggest performance optimizations
```

```
#fiddler Extract statistical data and timings from the traffic related to {domain}
```

```
#fiddler Identify the slowest API endpoints in the captured traffic
```

```
#fiddler Show me all sessions with large response bodies (>1MB)
```

```
#fiddler Analyze caching efficiency for the captured sessions
```

```
#fiddler Calculate the total bandwidth consumed by the captured traffic
```

### Rules and Automation

Create and manage rules to modify traffic behavior:

```
#fiddler Create a rule to match all sessions from {domain} and replace "{oldText}" with "{newText}" in the response bodies
```

```
#fiddler Delete all rules created from the MCP
```

```
#fiddler Create a rule to add a custom header "X-Debug-Mode: true" to all requests to {domain}
```

### Comprehensive Reporting

Generate detailed reports combining multiple analysis aspects:

```
#fiddler Analyze the captured session related to {domain} and create a comprehensive report that covers site purposes, used technologies, security highlights, and possible technical and performance optimizations
```

```
#fiddler Create a detailed API documentation based on the captured REST API calls to {domain}
```

```
#fiddler Generate a security audit report for all sessions captured from {domain}
```

```
#fiddler Create a performance benchmark report showing response times, payload sizes, and optimization recommendations
```

### Debugging and Troubleshooting

Use these prompts to diagnose and resolve issues:

```
#fiddler Help me debug why my application can't connect to {endpoint}
```

```
#fiddler Explain the CORS errors in the captured traffic
```

```
#fiddler Show me the request/response chain for session ID {sessionId}
```

```
#fiddler Compare the headers between session {sessionId1} and session {sessionId2}
```

```
#fiddler Find all redirect chains in the captured traffic
```

### Data Extraction

Extract specific information from captured traffic for further analysis:

```
#fiddler Extract all GraphQL queries from the captured sessions
```

```
#fiddler List all WebSocket connections and their messages
```

```
#fiddler Export all POST request bodies from sessions to {domain}
```

```
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

* [Fiddler Everywhere MCP Server Overview]({%slug fiddler-mcp-server%})
* [Security Highlights]({%slug fe-security-highlights%})
* [Data Sanitization]({%slug fe-sanitization%})