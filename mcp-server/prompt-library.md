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


``` Use Browser Capturing Mode
#fiddler Start capturing HTTP traffic in Fiddler using Chrome
```
```ts
```

``` Use Terminal Capturing Mode
#fiddler Start capturing HTTP traffic in Fiddler using a Terminal
```
```ts
```

``` Set Reverse Proxy
#fiddler Аdd a reverse proxy, listening on {clientPort} and forwarding traffic to {remoteHost}
```
```ts
```

``` Unset Reverse Proxy
#fiddler Disable the reverse proxy
```
```ts
```

``` Add a localhost filter
#fiddler apply a filter to capture traffic that contains localhost
```
```ts
```

``` Add a specific filter
#fiddler apply a filter to capture traffic that contains {keyword}
```
```ts
```

``` Add a specific filter
#fiddler apply a filter to capture traffic that contains {keyword}
```
```ts
```

``` Show filtered sessions
#fiddler show filtered sessions
```
```ts
```

``` Clear All Filters
#fiddler clear all filters
```
```ts
```


## Common Usage Prompts


``` Analyze the Captured Traffic
#fiddler Analyze the captured HTTP traffic
```
```ts
```

``` Analyze Specific Session
#fiddler Analyze session with ID 188
```
```ts
```

``` Check for Sanitization
#fiddler Does the filtered sessions contain sanitized data
```
```ts
```

``` Conduct Security Analysis
#fiddler Analyze the captured sessions for leaked sensitive data
```
```ts
```

``` Conduct Security Analysis (2)
#fiddler analyze the captured sessions and suggest security optimizations
```
```ts
```

``` Conduct Performance Analysis
#fiddler analyze the captured sessions and suggest performance optimizations
```
```ts
```

``` Generate Statistical Report
#fiddler extract statistical data and timings from the traffic related to docs.telerik.com
```
```ts
```

## See Also

* [Fiddler Everywhere MCP Server Overview]({%slug fiddler-mcp-server%})