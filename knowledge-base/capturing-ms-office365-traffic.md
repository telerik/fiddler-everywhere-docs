---
title: Capturing Traffic from Microsoft Apps (Outlook and MSTeams)
description: "Learn how to capture traffic from Microsoft applications using Microsoft Edge WebView 2 (like MSTeams, Outlook, and others)."
type: how-to
slug: fiddler-capture-ms-traffic
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product | Fiddler Everywhere |
| 3rd-party application | Office 365 applications, Microsoft Outlook, MS Teams |
| Operating System | Windows, macOS |

## Description

How can I capture traffic from Microsoft applications like MS Teams and Outlook?

## Solution - Using System Capturing Mode

You can use the [system capturing mode](slug://capture-system-traffic) to capture traffic from Microsoft applications.

- Stop the Fiddler Everywhere system capturing.
- Stop and close all targeted Microsoft applications.
- Start Fiddler Everywhere and enable the [system capturing mode](slug://capture-system-traffic) or the [network capturing mode](slug://capture-network-traffic).
- Start all targeted Microsoft applications.

## Solution - Using Fiddler's Terminal

Sometimes, you might be unable to use the system capturing mode (for example, due to local network/system restrictions or administrative policies). In that case, you can [use Fiddler's terminal](slug://capture-terminal-traffic) to capture traffic from all Microsoft applications that use MS Edge WebView 2.

- Stop and close all targeted Microsoft applications.
- Start the [Fiddler's terminal instance](slug://capture-terminal-traffic).
- Start the Microsoft application from within the started terminal instance.

## Related Links

* [Bypassing Traffic from Microsoft Applications](slug://fiddler-and-outlook)

