---
title: Prompt Library
page_title: Fiddler Everywhere AI Prompt Library
description: Explore a sample collection of prompts that you can use with the Fiddler Everywhere MCP server
slug: fiddler_ai_prompt_library
position: 10
---

# Fiddler Everywhere Prompt Library

Welcome to the Fiddler Everywhere Prompt Library.

The prompts provided here are intended and optimized for use with the Fiddler Everywhere [MCP Server]({%slug fiddler-mcp-server%}). They can help you kick start and empower your HTTP traffic inspection, debugging, and even coding processes.

>tip Get familiar with the [built-in prompts](#built-in-mcp-prompts) or go straight to the [custom prompts ⬇️](#custom-prompts)

## Built-in MCP Prompts

The Fiddler Everywhere MCP server comes with a set of predefined system prompts. To invoke the built-in prompts start your AI-powered IDE in agent mode and then type `/mcp.fiddler.`. This will list all available built-in prompts that can be invoked.

```sh
/mcp.fiddler.initiate-login # A prompt to perform log in to Fiddler.
```

```sh
/mcp.fiddler.is-user-logged-in # A prompt to check if the user is logged in to Fiddler.
```

```sh
/mcp.fiddler.get-status # A prompt to get the current status of Fiddler.

```

```sh
/mcp.fiddler.open-trust-root-certificate-dialog # A prompt to open the Trust Root Certificate system dialog.
```

```sh
/mcp.fiddler.start-capture-with-terminal # A prompt to start a new Terminal instance with Fiddler proxy settings applied.
```

```sh
/mcp.fiddler.start-capture-with-chrome # A prompt to start a new Chrome instance with Fiddler proxy settings applied.
```


```sh
/mcp.fiddler.get-sessions-count # A prompt to get the number of currently captured sessions in Fiddler.
```

```sh
/mcp.fiddler.get-sessions # A prompt to get the currently captured sessions in Fiddler with filters applied.
```

```sh
/mcp.fiddler.get-session-details  # A prompt to get detailed information about a specific session in Fiddler. Asks user for the ID of the session to retrieve details for.
```

```sh
/mcp.fiddler.clear-sessions # A prompt to clear all currently captured sessions in Fiddler.
```

```sh
/mcp.fiddler.add-reverse-proxy-port # A prompt to add a reverse proxy in Fiddler. Asks user for the client port to listen on. A number between 1025 and 65535 (required) and for the remote host to forward traffic to (required)
```

```sh
/mcp.fiddler.remove-reverse-proxy-port # A prompt to remove a reverse proxy port in Fiddler. Asks user for clientPort (the reverse proxy is listening on)
```

```sh
/mcp.fiddler.enable-reverse-proxy # A prompt to enable the reverse proxy in Fiddler.
```

```sh
/mcp.fiddler.disable-reverse-proxy # A prompt to disable the reverse proxy in Fiddler.
```

## Custom Prompts

Just as any other MCP, the Fiddler Everywhere MCP server can be used through common language to create your own custom prompts. All custom prompts in the below sample prompt library target the [MCP Server]({%slug fiddler-mcp-server%}) via the `#fiddler` handle. Ensure that you have [installed and enabled the MCP Server]({%slug fiddler-mcp-server%}#installation) before attempting to run the prompts.

### How to Use the Custom Prompts

1. Browse the prompt library to find a prompt that suits your needs.
2. Copy the prompt text (including the `#fiddler` handle).
3. (Optional) Customize the prompt as needed for your specific use case but keep the `#fiddler` handle.
4. Run the prompt against the [MCP Server]({%slug fiddler-mcp-server%}).

>warning Always double-check the code and solutions proposed by any AI-powered tool before applying them to your project.

### General Prompts

This section provides examples of general questions related to Kendo UI for Angular.


```
#fiddler Start capturing HTTP traffic in Fiddler using Chrome
```


```
#fiddler Start capturing HTTP traffic in Fiddler using a Terminal
```


```
#fiddler Аdd a reverse proxy, listening on {clientPort} and forwarding traffic to {remoteHost}
```


```
#fiddler Disable the reverse proxy
```


```
#fiddler apply a filter to capture traffic that contains localhost
```


```
#fiddler apply a filter to capture traffic that contains {keyword}
```


```
#fiddler show filtered sessions
```


```
#fiddler clear all filters
```



### Common Usage Prompts


```
#fiddler Analyze the captured HTTP traffic
```


```
#fiddler Analyze session with ID 188
```


```
#fiddler Does the filtered sessions contain sanitized data
```


```
#fiddler Analyze the captured sessions for leaked sensitive data
```


```
#fiddler Analyze the captured sessions and suggest security optimizations
```


```
#fiddler Analyze the captured sessions and suggest performance optimizations
```


```
#fiddler Extract statistical data and timings from the traffic related to docs.telerik.com
```


```
#fiddler Create a rule to match all sessions from telerik.com and replace "Fiddler" with "Foodler" in the response bodies.
```

```
#fiddler Delete all rules created from the MCP
```

```
#fiddler Analyze the captured session related to the Fiddler documentation site and create a comprehensive report that covers site purposes, used technologies, security highlights, and possible technical and performance optimizations
```

## See Also

* [Fiddler Everywhere MCP Server Overview]({%slug fiddler-mcp-server%})