---
title: Agent Cache
description: "Use the Agent Calls tab in Fiddler Everywhere to capture, inspect, and cache service-provider endpoint responses and eliminate repeated API usage during development."
slug: agent-cache
publish: true
position: 57
---

# Agent Cache

Reuse prior agent responses during development and testing to shorten the feedback loop and speed up iterations—while keeping execution costs under control. This is **Agent Cache**.

When building and testing automated agents that communicate with service-provider endpoints over HTTPS, every test run sends a live request and incurs costs. Agent Cache breaks that cycle by letting you cache a captured endpoint response and have Fiddler Everywhere replay it for matching calls—so your testing no longer incurs usage costs after the first capture.

## Overview

Fiddler Everywhere adds an **Agent Calls** tab in the **Traffic** pane, alongside tabs such as **Live Traffic** and **Compare Sessions**.

The **Agent Calls** tab is a focused view over sessions already captured in **Live Traffic**. It automatically filters and displays HTTPS sessions that target supported service-provider endpoints.

>important The **Agent Calls** tab reflects sessions that have already been captured. You must have active traffic capture running, or previously captured sessions present in **Live Traffic**, before any sessions appear in **Agent Calls**.

## Why Agent Cache

### Faster Iterations

Replaying a captured response is instant. Instead of waiting on a round-trip to the provider on every run, you get a result back immediately—shortening the feedback loop so you can move through prompt and code changes without unnecessary delays.

### Lower Execution Costs

Each cached run incurs zero costs on the provider side. During active development—where the same request may be triggered dozens of times across a team—this directly reduces the usage spend that accumulates before a feature is even complete.

### More Deterministic Testing

A cached response is fixed and repeatable. Running the same agent logic against the same response on every iteration makes it straightforward to verify that a code change had the intended effect, without having to account for variability in live endpoint output.

## Availability

The **Agent Calls** tab is available for:

- Trial
- Pro
- Enterprise (and higher tiers)

The feature is **not available** for Lite licenses.

## The Agent Calls Tab

The **Agent Calls** grid includes the same key columns as **Live Traffic**—for example, **#**, **Host**, **URL**, **Method**, **Status**, **Body**, and **Duration**—giving you full visibility into each captured endpoint call.

Additional behaviors to keep in mind:

- Sessions appear in **Agent Calls** automatically when Fiddler detects traffic to supported agentic endpoints.
- If two or more identical endpoints are cached, Fiddler returns the response from the first cached session.
- Fiddler rules apply only to non-cached sessions. Cached responses are returned as-is without rule evaluation.
- After a session is cached, subsequent requests to that endpoint appear only in **Live Traffic**. **Agent Calls** shows the original non-cached requests.

The grid adds one dedicated sticky column:

| Column | Description |
|:-------|:------------|
| **Caching** | A toggle switch per session. Enable it to cache the session's recorded response. Disable it to stop intercepting and resume live calls to that endpoint. 

![The "Agent Calls" tab in Fiddler](./images/caching-column.png)

When the **Caching** switch is enabled for a session, Fiddler Everywhere intercepts matching outbound calls and returns the cached response instead of forwarding the request to the remote endpoint. When the switch is disabled, requests pass through normally.

## Get Started

The following scenario demonstrates how Agent Cache eliminates redundant API usage during the development of an agent that calls a service-provider endpoint.

**Scenario:** You are building an agent that sends a structured HTTPS request to a target endpoint. During development you repeatedly trigger the same call to verify your agent's parsing and response-handling logic. Without caching, each run incurs costs.

1. Start capturing traffic in Fiddler Everywhere—click **Start Capture** in the toolbar.

1. Run your agent so that it triggers an HTTPS call to the service-provider endpoint.

1. Open **Traffic > Agent Calls**.

1. Locate the captured session in the grid (use the **Host** or **URL** columns to identify it).

1. Enable the **Caching** switch for that session in the sticky **Caching** column.
       ![The "Agent Calls" tab in Fiddler](./images/caching-column.png)

1. Run your agent again with the same request. The **Live Traffic** grid now shows the cached endpoints.
       ![The cached endpoints in Fiddler's Live Traffic grid](./images/cached-agent-calls.png)

1. Verify in the service provider that Fiddler Everywhere served the cached response—no new live call was made and no costs were incurred on the provider side.

![Result in the service provider](./images/single-agent-call-made.png)

As a result, the API service registers only the initial call. All subsequent calls are served from the local cache by Fiddler and do not reach the remote endpoint.


You can disable the **Caching** switch at any time to resume live calls to the endpoint.

## How It Works

The following diagram shows the request flow when Agent Cache is active.

```
┌─────────────────────┐
│    Your Agent       │
└──────────┬──────────┘
           │ HTTPS request (proxied)
           ▼
┌─────────────────────┐
│ Fiddler Everywhere  │
│  (Agent Calls tab)  │
└──────────┬──────────┘
           │
      Cache ON?
           │
    ┌──────┴──────┐
    │             │
   YES           NO
    │             │
    ▼             ▼
┌─────────┐  ┌─────────┐
│ Return  │  │ Forward │
│ cached  │  │ request │
│response │  └────┬────┘
└────┬────┘       │ HTTPS
     │            ▼
     │    ┌──────────────┐
     │    │   Provider   │
     │    └──────┬───────┘
     │           │ response
     │           │
     └───────────┤
                 ▼
          ┌─────────────┐
          │ Your Agent  │
          │  (response) │
          └─────────────┘
```

1. Your agent routes HTTPS traffic through Fiddler Everywhere, either by configuring a proxy in code, by using system proxy settings, or by launching the agent from Fiddler's built-in terminal.
2. Fiddler captures the call and displays it in the **Agent Calls** tab.
3. When the **Caching** switch is enabled for that session, Fiddler replays the stored response for any matching subsequent call.
4. The provider endpoint never receives the duplicate request—no costs are incurred.

## Supported Endpoints

The **Agent Calls** tab automatically detects and displays sessions targeting a broad range of service-provider and service-gateway endpoints—including major providers, cloud-hosted API services, and local runners—without any manual configuration.

If a session targeting your agent's API endpoint does not appear in **Agent Calls** automatically, you can promote it manually. Right-click the session in **Live Traffic** and select **Add to Agent Calls** from the context menu. The session then appears in the **Agent Calls** tab and can be cached like any automatically detected session.

This is useful when working with locally hosted API endpoints, internal gateway services, or newer providers not yet included in the built-in detection list.

## Notes

- Agent Cache is intended for development and verification workflows where deterministic responses are required.
- Matching is based on the captured request details. If your agent changes the request payload, headers, or target path, capture and cache the updated variant separately.
- Review cached sessions periodically to keep the stored responses aligned with your current workflow expectations.
- Cached sessions are stored within the current Fiddler Everywhere session. Closing and reopening the application clears the cache state.

## Feedback

We welcome your feedback on Agent Cache and any other features you would like to see. You can reach the team by:

- Email [fiddler-support@progress.com](mailto:fiddler-support@progress.com)
- Opening a GitHub issue at [https://github.com/telerik/fiddler-everywhere/issues](https://github.com/telerik/fiddler-everywhere/issues)

## See Also

* [Fiddler's MCP Server - Overview](slug://fiddler-mcp-server)
* [Fiddler's MCP Server - Prompt Ideas](slug://fiddler_ai_prompt_library)
* [Fiddler's Debugging Assistant](slug://fiddler-assistant)