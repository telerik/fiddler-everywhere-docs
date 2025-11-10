---
title: Fiddler Debugging Assistant
page_title: Fiddler Debugging Assistant
description: "Use the Fiddler Everywhere Debugging Assistant alongside your preferred LLM model to enhance your HTTP traffic analysis and debugging workflow."
slug: fiddler-assistant
publish: true
position: 1
---

# Fiddler Debugging Assistant

The Fiddler Debugging Assistant lets you use large language models (LLMs) to reach new levels of developer productivity. The Debugging Assistant is a built-in chat feature that enables you to receive additional insights by leveraging your preferred AI model alongside Fiddler's powerful functionalities.

## Prerequisites

- The latest version of Fiddler Everywhere.
- An API key with access to one of the supported language models. Currently, Fiddler Everywhere supports the following providers:
    * OpenAI
    * Anthropic
    * Azure OpenAI
    * Google Gemini

>important Once configured, the Fiddler Debugging Assistant will consume tokens for each generated inquiry. Note that the price per token varies depending on your LLM provider's pricing plan, so use the assistant only after carefully reviewing the third-party pricing options.

## Configuring the Debugging Assistant

The Debugging Assistant is accessible through the **Ask Assistant** button in the Fiddler toolbar. To use the Fiddler Debugging Assistant, you must provide a valid API key for one of the supported AI providers.

You can select your preferred LLM provider and set its API key through **Settings > Assistant**. 

![Configuring the debugging assistant API key](./images/fiddler_assistent_settings.png)

Once the API key is set, use the **Test Connection** button to confirm the connection is properly established.

![Testing and verifying the LLM connection](./images/fiddler_assistent_settings_002.png)

## Using the Debugging Assistant

To start using the Debugging Assistant:

1. Open the Fiddler Everywhere application.
2. Select the **Traffic** pane.
3. Click the **Ask Assistant** button.
4. Use natural language to ask questions related to Fiddler or the captured traffic data.

![Debugging assistant chat overview](./images/fiddler_assistent_chat.png)

## Limitations

When working with the Debugging Assistant, consider the following limitations:

- The current version of the Debugging Assistant does not have access to the internet.
- The current version of the Debugging Assistant does not have access to captured traffic in live sessions or saved snapshots.

## Debugging Assistant Access Policies

Fiddler Everywhere provides managed application policies through its Enterprise tier. License administrators can use these policies to restrict access to the Fiddler Debugging Assistant for licensed users.

For more information about configuring enterprise policies, refer to the [Managed App Configuration](slug://fe-restrict-policies) documentation.

<!-- TODO: Add specific policy configuration examples for Windows and macOS -->