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
| 3rd-party tools | macOS Terminal, iTerm2, Command Prompt, PowerShell, Bash, Fish, Zsh |

## Description

How can I set the Fiddler Everywhere proxy for commonly used command-line tools like [Windows PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/overview?view=powershell-7.3), [macOS Terminal](https://en.wikipedia.org/wiki/Terminal_(macOS)), [iTerm2](https://www.iterm2.com/), Command Prompt (Windows), [Bash](https://www.gnu.org/software/bash/) and other terminals or shell applications?


## Capturing Traffic from Preconfigured Terminal

Fiddler Everywhere can automatically start a preconfigured terminal instance through the **>_ Terminal** button in the **Live Traffic** toolbar.

![Use the Terminal button to start preconfigured terminal instane](../images/get-started/get-started-terminal.png)

You can set your preferred terminal application through **Settings > Terminal > Default Terminal**. The following options are available:

- **Command Prompt**&mdash;Available only on Windows.
- **Windows PowerShell**&mdash;Available only on Windows. Specfies the Windows PowerShell built on .NET Framework 4.5 and older versions.
- **PowerShell**&mdash;Available only on Windows. Specfies the PowerShell built on .NET Core or the new .NET.
- **Terminal application**&mdash;Available on macOS and Linux. This option will use the default shell environment, for example, **bash**, **zsh**, or **sh**.

The Fiddler's preconfigured terminal instance automatically proxies all requests made by **curl** or **Node.js** libraries (like **https**, **request**, **axios**, etc.) and all applications, which respect the **http_proxy** and **https_proxy** environment variables. Node.js and curl are configured to trust the Fiddler CA.

![Example request made through the Node.js HTTPS library and proxied through Fiddler's preconfigured instance](../images/kb/macos-terminal/nodejs-preconfigured-terminal-traffic.png)

>tip Only the terminal instance opened by Fiddler will respect the proxy settings, so there is no need to reset the proxy to use other terminal instances. Note that if you close the Fiddler Everywhere application and leave the preconfigured terminal open, you will lose internet connectivity only for that terminal instance.

### Localhost Traffic through a Preconfigured Terminal

Some frameworks, like the .NET Framework, are hardcoded not to send requests for localhost through any proxies, and as a proxy, Fiddler will not receive such traffic.

Because Windows PowerShell uses the .NET Framework (not to be confused with PowerShell which uses .NET Core), the localhost traffic won't be sent through the proxy. You can workaround the issue by [using the Fiddler's aliases]({%slug how-to-capture-localhost-traffic%}) or adding a dot to the end of the localhost address (for example, **localhost.:8080**).


### NET Traffic through a Preconfigured Terminal

Capturing traffic from **curl** or **Node.js** libraries does not require explicitly installing and trusting the Fiddler root CA (certificate authority) on the Fiddler host. However, this is a mandatory requirement for a NET application that executes HTTPS requests.

[Learn how to install and trust the Fiddler root CA here...]({%slug trust-certificate%})



## Setting the Fiddler Proxy Explicitly

As an alternative to [the preconfigured terminal option](#capturing-traffic-from-preconfigured-terminal) described above, you can also explcitly configure your terminal and shell applications to respect the Fiddler proxy nad trust the Fiddler CA. One way to achive that is to use the `export` command (for macOS and Linux) or the `set` command (for Windows) alongside the `http_proxy` and `https_proxy` variables. The `export` command will generate an environmental variable that will be included in a child process environment. It does not affect other already-existing settings.


>tip [The preconfigured terminal option](#capturing-traffic-from-preconfigured-terminal) allows you to quickly use a terminal alongside the Fiddler's proxy without having to worry about forgetting to unset the proxy address (so that you can continue using the terminal/shell application once Fiddler is turned off). In most cases, the preconfigured terminal should be your preferred choice as it sets the proxy only per the current session, which makes it considerably more comfortable for testing and debugging.


The following example demonstrates how to define the proxy settings through environmental variables on **macOS** and **Linux**.

```bash
export http_proxy=http://127.0.0.1:8866
export https_proxy=http://127.0.0.1:8866
```

The following example demonstrates how to define the proxy settings through environmental variables on **Windows**.

```bash
set http_proxy=http://127.0.0.1:8866
set https_proxy=http://127.0.0.1:8866
```

Once the Fiddler Everywhere proxy is set, you can immediately capture traffic through the terminal application.

The following example demonstrates how to request while using cURL through iTerm2 and intercept the traffic in Fiddler Everywhere.

```Bash
curl https://docs.telerik.com/fiddler-everywhere --
```


### Setting the Fiddler Root Certificate

Apart from setting the environment variables **http_proxy** and **https_proxy**, you can manually export and point your terminal application to explicitly use the Fiddler root certificate authority (for decrypting TLS traffic). You must use different global variables depending on the specific application/framework. For example, you could use variables like **SSL_CERT_FILE** and **REQUESTS_CA_BUNDLE** for [configuring the Fiddler's CA within a Python application]({%slug fiddler-python-traffic%}).


### Resetting the Fiddler Proxy

Once debugging with Fiddler Everywhere, reset the current environment proxy by removing the Fiddler Everywhere proxy variables. You can use the `unset` command on macOS and Linux to achieve that. On Windows, you need to set an empty string.

The following example demonstrates how to unset the proxy on **macOS** and **Linux**.

```bash
unset http_proxy
unset https_proxy
```

The following example demonstrates how to unset the proxy on **Windows**.

```bash
set http_proxy=
set https_proxy=
```
