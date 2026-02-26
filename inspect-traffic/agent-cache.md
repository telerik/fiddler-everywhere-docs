---
title: Agent Cache
description: "Use the Agent Calls tab in Fiddler Everywhere to capture, inspect, and cache model-provider endpoint responses and eliminate repeated token usage during development."
slug: agent-cache
publish: true
position: 60
---

# Agent Cache

Reuse prior agent responses during development and testing to shorten the feedback loop and speed up iterations—while keeping execution costs under control. This is **Agent Cache**.

When building and testing automated agents that communicate with model-provider endpoints over HTTPS, every test run sends a live request and consumes tokens. Agent Cache breaks that cycle by letting you cache a captured endpoint response and have Fiddler Everywhere replay it for matching calls—so your testing no longer incurs token costs after the first capture.

## Overview

Fiddler Everywhere adds an **Agent Calls** tab in the **Traffic** pane, alongside tabs such as **Live Traffic** and **Compare Sessions**.

The **Agent Calls** tab is a focused view over sessions already captured in **Live Traffic**. It automatically filters and displays HTTPS sessions that target supported model-provider endpoints, such as OpenAI and Gemini.

>important The **Agent Calls** tab reflects sessions that have already been captured. You must have active traffic capture running, or previously captured sessions present in **Live Traffic**, before any sessions appear in **Agent Calls**.

## Why Agent Cache

**Faster Iterations**
Replaying a captured response is instant. Instead of waiting on a round-trip to the provider on every run, you get a result back immediately—shortening the feedback loop so you can move through prompt and code changes without unnecessary delays.

**Lower Execution Costs**
Each cached run consumes zero tokens on the provider side. During active development—where the same request may be triggered dozens of times across a team—this directly reduces the token spend that accumulates before a feature is even complete.

**More Deterministic Testing**
A cached response is fixed and repeatable. Running the same agent logic against the same response on every iteration makes it straightforward to verify that a code change had the intended effect, without having to account for variability in live model output.

## Availability

The **Agent Calls** tab is available for:

- Trial
- Pro
- Enterprise (and higher tiers)

The feature is **not available** for Lite licenses.

## The Agent Calls Tab

The **Agent Calls** grid includes the same key columns as **Live Traffic**—for example, **#**, **Host**, **URL**, **Method**, **Status**, **Body**, and **Duration**—giving you full visibility into each captured endpoint call.

The grid adds one dedicated sticky column:

| Column | Description |
|:-------|:------------|
| **Cache** | A toggle switch per session. Enable it to cache the session's recorded response. Disable it to stop intercepting and resume live calls to that endpoint. |

When the **Cache** switch is enabled for a session, Fiddler Everywhere intercepts matching outbound calls and returns the cached response instead of forwarding the request to the remote endpoint. When the switch is disabled, requests pass through normally.

## Get Started

The following scenario demonstrates how Agent Cache eliminates redundant token usage during the development of an agent that calls a model-provider endpoint.

**Scenario:** You are building an agent that sends a structured HTTPS request to a completion endpoint (for example, `api.openai.com`). During development you repeatedly trigger the same call to verify your agent's parsing and response-handling logic. Without caching, each run consumes tokens.

1. Start capturing traffic in Fiddler Everywhere—click **Start Capture** in the toolbar.
1. Run your agent to trigger an HTTPS call to the model-provider endpoint.
1. Open **Traffic > Agent Calls**.
1. Locate the captured session in the grid (use the **Host** or **URL** columns to identify it).
1. Enable the **Cache** switch for that session in the sticky **Cache** column.
1. Run your agent again using the same request.
1. Verify in the **Agent Calls** grid that Fiddler Everywhere served the cached response—no new live call is made and no tokens are consumed on the provider side.

You can disable the **Cache** switch at any time to resume live calls to the endpoint.

## Notes

- Agent Cache is intended for development and verification workflows where deterministic responses are required.
- Matching is based on the captured request details. If your agent changes the request payload, headers, or target path, capture and cache the updated variant separately.
- Review cached sessions periodically to keep the stored responses aligned with your current workflow expectations.
- Cached sessions are stored within the current Fiddler Everywhere session. Closing and reopening the application clears the cache state.

## Feedback

We welcome your feedback on Agent Cache and any other features you would like to see. You can reach the team by:

- Emailing [fiddler-support@progress.com](mailto:fiddler-support@progress.com)
- Opening a GitHub issue at [https://github.com/telerik/fiddler-everywhere/issues](https://github.com/telerik/fiddler-everywhere/issues)
