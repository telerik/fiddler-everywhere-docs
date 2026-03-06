---
title: Agent Cache
description: "Use the Agent Calls tab in Fiddler Everywhere to capture, inspect, and cache model-provider endpoint responses and eliminate repeated token usage during development."
slug: agent-cache
publish: true
position: 57
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

## Supported Endpoints

The **Agent Calls** tab automatically detects and displays sessions targeting the following model-provider and inference-gateway endpoints. No manual configuration is required.

### Model Providers

| Provider | Host | Paths |
|:---------|:-----|:------|
| OpenAI | `api.openai.com` | `/v1/chat/completions`, `/v1/completions`, `/v1/responses`, `/v1/embeddings`, `/v1/images`, `/v1/audio`, `/v1/moderations` |
| Anthropic | `api.anthropic.com` | `/v1/messages`, `/v1/complete` |
| Google – Gemini / Vertex AI | `generativelanguage.googleapis.com` | All paths |
| Google – Gemini / Vertex AI | `aiplatform.googleapis.com` | All paths |
| Google – AI Studio | `aistudio.google.com` | `/api/` |
| Mistral AI | `api.mistral.ai` | `/v1/chat/completions`, `/v1/completions`, `/v1/embeddings` |
| Cohere | `api.cohere.ai`, `api.cohere.com` | `/v1/chat`, `/v1/generate`, `/v1/embed`, `/v2/chat` |
| AI21 Labs | `api.ai21.com` | `/studio/v1/`, `/v1/chat/completions` |
| xAI (Grok) | `api.x.ai` | `/v1/chat/completions`, `/v1/completions` |
| Meta Llama | `api.llama.com`, `api.llama-api.com` | All paths |
| Perplexity | `api.perplexity.ai` | `/chat/completions` |
| DeepSeek | `api.deepseek.com` | `/v1/chat/completions`, `/v1/completions` |
| Zhipu AI (GLM) | `open.bigmodel.cn` | `/api/paas/` |
| Moonshot / Kimi | `api.moonshot.cn` | `/v1/chat/completions` |
| Minimax | `api.minimax.chat` | All paths |
| 01.AI (Yi) | `api.01.ai` | `/v1/chat/completions` |
| Reka | `api.reka.ai` | All paths |
| Aleph Alpha | `api.aleph-alpha.com` | `/complete`, `/evaluate`, `/embed` |
| Writer | `api.writer.com` | `/v1/chat`, `/v1/completions` |

### Inference and Gateway Providers

| Provider | Host | Paths |
|:---------|:-----|:------|
| Azure OpenAI | `*.openai.azure.com` | `/openai/deployments/` |
| Amazon Bedrock | `bedrock-runtime.amazonaws.com`, `bedrock.amazonaws.com` | All paths |
| OpenRouter | `openrouter.ai` | `/api/v1/chat/completions`, `/api/v1/completions` |
| Hugging Face | `api-inference.huggingface.co` | All paths |
| Hugging Face | `huggingface.co` | `/api/models/` |
| Together AI | `api.together.xyz`, `api.together.ai` | `/v1/chat/completions`, `/v1/completions`, `/v1/embeddings`, `/inference` |
| Fireworks AI | `api.fireworks.ai` | `/inference/` |
| Replicate | `api.replicate.com` | `/v1/predictions`, `/v1/models/` |
| Groq | `api.groq.com` | `/openai/v1/chat/completions`, `/openai/v1/completions` |
| Cerebras | `api.cerebras.ai` | `/v1/chat/completions` |
| SambaNova | `api.sambanova.ai` | `/v1/chat/completions` |
| Lepton AI | `api.lepton.ai` | All paths |
| Anyscale | `api.endpoints.anyscale.com` | `/v1/chat/completions`, `/v1/completions` |
| DeepInfra | `api.deepinfra.com` | `/v1/openai/chat/completions`, `/v1/openai/completions`, `/v1/inference/` |
| OVH AI Endpoints | `ai.endpoints.ovh.net` | All paths |
| Cloudflare Workers AI | `api.cloudflare.com` | `/client/v4/accounts/`, `/v1/chat/completions` |
| IBM watsonx.ai | `*.ml.cloud.ibm.com` | `/ml/v1/text/generation`, `/ml/v1/text/chat` |
| NVIDIA NIM / NGC | `integrate.api.nvidia.com` | `/v1/chat/completions`, `/v1/completions`, `/v1/embeddings` |
| Databricks | `databricks.com` | `/serving-endpoints/`, `/api/2.0/serving-endpoints/` |
| Oracle OCI Generative AI | `inference.generativeai.oci.oraclecloud.com` | All paths |

### Local Runners

| Provider | Host | Paths |
|:---------|:-----|:------|
| Ollama | `localhost:11434`, `127.0.0.1:11434` | `/api/generate`, `/api/chat`, `/api/embeddings`, `/v1/chat/completions` |
| LM Studio | `localhost:1234`, `127.0.0.1:1234` | `/v1/chat/completions`, `/v1/completions`, `/v1/embeddings` |

>tip "All paths" means Fiddler matches any request path to that host. Where specific paths are listed, only requests matching those path prefixes are included.

### Adding Custom Endpoints

If your agent calls a provider or endpoint that is not automatically recognized, you can manually promote any session from the **Live Traffic** grid to **Agent Calls**. Right-click the session in **Live Traffic** and select the option to add it to **Agent Calls** from the context menu. The session then appears in the **Agent Calls** tab and can be cached like any automatically detected session.

This is useful when you work with self-hosted models, internal gateway services, or newer providers that are not yet included in the built-in endpoint list.

## The Agent Calls Tab

The **Agent Calls** grid includes the same key columns as **Live Traffic**—for example, **#**, **Host**, **URL**, **Method**, **Status**, **Body**, and **Duration**—giving you full visibility into each captured endpoint call.

Additional behaviors to keep in mind:

- Sessions appear in **Agent Calls** deterministically when Fiddler detects traffic to supported agentic endpoints.
- If two or more identical endpoints are cached (for example `https://api.anthropic.com/v1/messages`), Fiddler returns the response from the first cached session.
- Fiddler rules apply only to non-cached sessions. Cached responses are returned as-is without rule evaluation.
- After a session is cached, subsequent requests to that endpoint appear only in **Live Traffic**. **Agent Calls** shows the original non-cached requests.

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

## How It Works

The following diagram shows the request flow when Agent Cache is active.

```
┌─────────────┐   HTTPS (proxied)   ┌──────────────────────┐   HTTPS   ┌────────────────────┐
│  Your Agent │ ──────────────────► │  Fiddler Everywhere  │ ────────► │  Model Provider    │
│             │                     │  (Agent Calls tab)   │           └────────────────────┘
│             │ ◄────────────────── │                      │ ◄──────── response
└─────────────┘   response          └──────────────────────┘
                                            │
                                     Cache switch ON?
                                            │
                                    ┌───────▼────────┐
                                    │ Return cached  │
                                    │ response.      │
                                    │ No new call to │
                                    │ the provider.  │
                                    └────────────────┘
```

1. Your agent routes HTTPS traffic through Fiddler Everywhere, either by configuring a proxy in code, by using system proxy settings, or by launching the agent from Fiddler's built-in terminal.
2. Fiddler captures the call and displays it in the **Agent Calls** tab.
3. When the **Cache** switch is enabled for that session, Fiddler replays the stored response for any matching subsequent call.
4. The provider endpoint never receives the duplicate request—no tokens are charged.

## Managed App Configuration

IT administrators can disable the **Agent Calls** tab entirely through the **Managed App Configuration** policy `DisableLLMSessionsTab`. When this policy is enabled, the tab is hidden from the **Traffic** pane for all users governed by the policy.

| Platform | Key | Type | Value |
|:---------|:----|:-----|:------|
| macOS | `DisableLLMSessionsTab` | integer | `1` to disable, `0` to enable |
| Windows | `DisableLLMSessionsTab` | DWORD-32 (hexadecimal) | `1` to disable, `0` to enable |

For details on applying managed configuration policies, see [Managed App Configuration](slug://fe-restrict-policies).

## Notes

- Agent Cache is intended for development and verification workflows where deterministic responses are required.
- Matching is based on the captured request details. If your agent changes the request payload, headers, or target path, capture and cache the updated variant separately.
- Review cached sessions periodically to keep the stored responses aligned with your current workflow expectations.
- Cached sessions are stored within the current Fiddler Everywhere session. Closing and reopening the application clears the cache state.

## Feedback

We welcome your feedback on Agent Cache and any other features you would like to see. You can reach the team by:

- Emailing [fiddler-support@progress.com](mailto:fiddler-support@progress.com)
- Opening a GitHub issue at [https://github.com/telerik/fiddler-everywhere/issues](https://github.com/telerik/fiddler-everywhere/issues)
