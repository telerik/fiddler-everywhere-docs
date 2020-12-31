---
title: How to set the Fiddler proxy for terminal apps
description: An article on how to set the Fiddler Everywhere proxy for terminals
type: how-to
slug: fiddler-macos-terminal
tags: Fiddler Everywhere terminal, Fiddler Everywhere iTerm, Fiddler Everywhere iterm2, Fiddler macOS shell, Fiddler macOS terminal proxy, Fiddler command prompt
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, Linux  |
| 3rd-party tools | macOS Terminal, iTerm2, Command Prompt, Bash |

#### Description

The article explains how to set the Fiddler Everywhere proxy for commonly used command-line tools like the default [macOS Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)), [iTerm2](https://www.iterm2.com/), Command Prompt (Windows), and other terminal applications. 


## Set Fiddler Proxy (terminal app)

Terminal applications on macOS like the [Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)), [iTerm2](https://www.iterm2.com/), Command Prompt (Windows) are capable of executing HTTP and HTTPS requests thought 3rd-party tools like CURL. However, in the common case, these terminals won't use the system proxy. For Fiddler Everywhere to capture traffic that passes through them, they need to set the Fiddler Everywhere proxy explicitly. To achieve that, we could use the **export** command (macOS and Linux) or the **set** command (for Windows).

- Setting proxy settings on **macOS** and **Linux**
```bash
export http_proxy=127.0.0.1:8866
export https_proxy=127.0.0.1:8866
```

- Setting proxy settings on **Windows**
```bash
set http_proxy=127.0.0.1:8866
set https_proxy=127.0.0.1:8866
```

Once the Fiddler Everywhere proxy is set, we could immediately capture traffic through the terminal application.

_Example for requesting while using_ **_curl_** _via iTerm2 and intercepting the traffic in Fiddler Everywhere_
```Bash
curl https://docs.telerik.com/fiddler-everywhere --
```

![Result from curl request in Fiddler Everywhere](../images/kb/macos-terminal/curl-traffic.png)

>tip The **export** command makes a variable that will be included in a child process environment. It does not affect other already-existing settings.

## Reset Fiddler Proxy (terminal app)

Once our debugging with Fiddler Everywhere is done, we could reset the current environment's proxy by merely removing the Fiddler Everywhere proxy variables. To achieve that, we could use the **unset** command on macOS and Linux. On Windows, we need to set an empty string (as there is no **unset** command)

- Unsetting the proxy on **macOS** and **Linux**
```bash
unset http_proxy
unset https_proxy
```

- Unsetting the proxy on **Windows**
```bash
set http_proxy=
set https_proxy=
```

