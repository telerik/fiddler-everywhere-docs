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

>tip [Go straight to the prompts ⬇️](#general-prompts)

## How to Use the Prompts

All prompts in this library target the [MCP Server]({%slug fiddler-mcp-server%}) via the `#fiddler` handle. Ensure that you have [installed and enabled the MCP Server]({%slug fiddler-mcp-server%}#installation) before attempting to run the prompts.

1. Browse the prompt library to find a prompt that suits your needs.
2. Copy the prompt text (including the `#fiddler` handle).
3. (Optional) Customize the prompt as needed for your specific use case but keep the `#fiddler` handle.
4. Run the prompt against the [MCP Server]({%slug fiddler-mcp-server%}).

>warning Always double-check the code and solutions proposed by any AI-powered tool before applying them to your project.

## General Prompts

This section provides examples of general questions related to Kendo UI for Angular.

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

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
#fiddler apply a filter to capture traffic that contains {keyword}
```

```
#fiddler show filtered sessions
```

```
#fiddler clear all filters
```
</div>

## Common Usage Prompts

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

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
#fiddler analyze the captured sessions and suggest security optimizations
```

```
#fiddler analyze the captured sessions and suggest performance optimizations
```

```
#fiddler extract statistical data and timings from the traffic related to docs.telerik.com
```

</div>

## See Also

* [Fiddler Everywhere MCP Server Overview]({%slug fiddler-mcp-server%})