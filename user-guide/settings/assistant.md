---
title: Assistant
page_title: Assistant - Settings | Fiddler Everywhere
description: "Learn how to configure the Assistant settings in Fiddler Everywhere. Set up your LLM provider, API key, and model to power AI-assisted traffic analysis."
slug: settings-assistant
publish: true
position: 22
---

# Assistant Settings

The **Assistant** settings section lets you configure the language model used by the [Fiddler Debugging Assistant](slug://fiddler-assistant). You can select a supported LLM provider, supply your own API key, and choose or enter the model you want to use.

>important Requests are processed using your own API key and billed directly to your account with the LLM provider. Data usage and retention follow the provider's Terms of Service and Privacy Policy.

## Model Configuration

- **Provider**: Selects the LLM provider to use. Currently supported providers include **OpenAI**, **Anthropic**, **Azure OpenAI**, and **Google Gemini**.

- **API Key**: Your personal API key for the selected provider. The key is stored locally and is never shared. Refer to your provider's documentation for instructions on generating an API key.

- **Model**: The specific model to use for assistant requests. You can select a model from the drop-down list or type a custom model name directly in the field.

- **Test Connection**: Validates the configured provider, API key, and model by sending a test request. Use this to confirm that your credentials are correct before using the assistant.

## See Also

- [Fiddler Debugging Assistant](slug://fiddler-assistant)
- [Fiddler MCP Server](slug://fiddler-mcp-server)
