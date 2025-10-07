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

``` Use Browser Capturing Mode
#fiddler Start capturing HTTP traffic in Fiddler using Chrome
```


``` Use Terminal Capturing Mode
#fiddler Start capturing HTTP traffic in Fiddler using a Terminal
```


``` Set Reverse Proxy
#fiddler Аdd a reverse proxy, listening on {clientPort} and forwarding traffic to {remoteHost}
```


``` Unset Reverse Proxy
#fiddler Disable the reverse proxy
```


``` Add a localhost filter
#fiddler apply a filter to capture traffic that contains localhost
```


``` Add a specific filter
#fiddler apply a filter to capture traffic that contains {keyword}
```


``` Add a specific filter
#fiddler apply a filter to capture traffic that contains {keyword}
```


``` Show filtered sessions
#fiddler show filtered sessions
```


``` Clear All Filters
#fiddler clear all filters
```


</div>

## Common Usage Prompts

<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr;">

``` Analyze the Captured Traffic
#fiddler Analyze the captured HTTP traffic
```


``` Analyze Specific Session
#fiddler Analyze session with ID 188
```


``` Check for Sanitization
#fiddler Does the filtered sessions contain sanitized data
```


``` Conduct Security Analysis
#fiddler Analyze the captured sessions for leaked sensitive data
```


``` Conduct Security Analysis (2)
#fiddler analyze the captured sessions and suggest security optimizations
```


``` Conduct Performance Analysis
#fiddler analyze the captured sessions and suggest performance optimizations
```


``` Generate Statistical Report
#fiddler extract statistical data and timings from the traffic related to docs.telerik.com
```


</div>

## See Also

* [Fiddler Everywhere MCP Server Overview]({%slug fiddler-mcp-server%})