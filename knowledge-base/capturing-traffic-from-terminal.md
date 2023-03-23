---
title: Capturing Traffic for Terminal Applications
description: "Learn how to capture HTTP(S) traffic from terminals and shell applications while using the Fiddler Everywhere proxy."
slug: fiddler-terminal-explicit
publish: true
res_type: kb
previous_url: fiddler-macos-terminal, how-to-set-macos-terminal
---

## Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, Linux  |
| 3rd-party tools | macOS Terminal, iTerm2, Command Prompt, Bash, Fish, Zsh |

## Description

How can I set the Fiddler Everywhere proxy for commonly used command-line tools like the default [macOS Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)), [iTerm2](https://www.iterm2.com/), Command Prompt (Windows), [Bash](https://www.gnu.org/software/bash/) and other terminals or shell applications?


## Capturing Traffic from Preconfigured Terminal

Fiddler Everywhere now comes with an option to automatically start a preconfigured terminal instance through the **>_ Terminal** button in the **Live Traffic** toolbar.

![Use the Terminal button to start preconfigured terminal instane](../images/get-started/get-started-terminal.png)

## Setting the Fiddler Proxy Explicitly

Terminals and shell applications like the [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)), [iTerm2](https://www.iterm2.com/), Command Prompt (Windows) are capable of executing HTTP and HTTPS requests through third-party tools like CURL. However, in the typical case, the standalone instances of these tools won't use the system proxy. With Fiddler Everywhere, you van [use a preconfigured terminakl instance](#capturing-traffic-from-preconfigured-terminal), or alternatively, you can set a your terminal to use the Fiddler proxy explicitly.

For Fiddler Everywhere to capture traffic that passes through them, they need to explicitly set the Fiddler Everywhere proxy. You can use the `export` command (for macOS and Linux) or the `set` command (for Windows) to achieve that. The `export` command will generate an environmental variable that will be included in a child process environment. It does not affect other already-existing settings.

The following example demonstrates how to define the proxy settings through environmental variables on **macOS** and **Linux**.

```bash
export http_proxy=http://127.0.0.1:8866
export https_proxy=http://127.0.0.1:8866
export NODE_TLS_REJECT_UNAUTHORIZED=0
```

The following example demonstrates how to define the proxy settings through environmental variables on **Windows**.

```bash
set http_proxy=http://127.0.0.1:8866
set https_proxy=http://127.0.0.1:8866
set NODE_TLS_REJECT_UNAUTHORIZED=0
```

Once the Fiddler Everywhere proxy is set, you can immediately capture traffic through the terminal application.

The following example demonstrates how to request while using cURL through iTerm2 and intercept the traffic in Fiddler Everywhere.

```Bash
curl https://docs.telerik.com/fiddler-everywhere --
```

![Result from curl request in Fiddler Everywhere](../images/kb/macos-terminal/curl-traffic.png)

### Resetting the Fiddler Proxy

Once debugging with Fiddler Everywhere, reset the current environment proxy by removing the Fiddler Everywhere proxy variables. You can use the `unset` command on macOS and Linux to achieve that. On Windows, you need to set an empty string.

The following example demonstrates how to unset the proxy on **macOS** and **Linux**.

```bash
unset http_proxy
unset https_proxy
unset NODE_TLS_REJECT_UNAUTHORIZED
```

The following example demonstrates how to unset the proxy on **Windows**.

```bash
set http_proxy=
set https_proxy=
set NODE_TLS_REJECT_UNAUTHORIZED=
```
