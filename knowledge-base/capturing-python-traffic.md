---
title: Setting Fiddler alongside Python applications
description: "Learn how to capture traffic from Python applications."
type: how-to
slug: fiddler-python-traffic
publish: true
res_type: kb

---

## Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, Linux  |
| 3rd-party tools | Python |

## Description

How can I capture traffic from Python applications?


## Setting Fiddler Proxy through Environment Variables

For Fiddler Everywhere to capture traffic from a Python application, the application must be set to respect the Fiddler Everywhere proxy. You can achieve that by setting the environment variables `http_proxy` and `https_proxy`. The `export` command (for macOS and Linux) or the `set` command (for Windows). The `export` command will generate an environment variable that will be included in a child process environment. It does not affect other already-existing settings.

The following example demonstrates how to define the proxy settings through environmental variables on **macOS** and **Linux**. Note that you need to have the Fiddler root CA exported to the Desktop folder through **Settings > HTTPS > Advanced > Export Root Certificate (PEM/ASCII)**.

**
```bash
export http_proxy=http://127.0.0.1:8866
export https_proxy=http://127.0.0.1:8866
export SSL_CERT_FILE=~/Desktop/FiddlerRootCertificate.pem
export REQUESTS_CA_BUNDLE=~/Desktop/FiddlerRootCertificate.pem
```

The following example demonstrates how to define the proxy settings through environmental variables on **Windows**. Note that you need to have the Fiddler root CA exported to the Desktop folder through **Settings > HTTPS > Advanced > Export Root Certificate (PEM/ASCII)**.

```bash
set http_proxy=http://127.0.0.1:8866
set https_proxy=http://127.0.0.1:8866
set SSL_CERT_FILE=~/Desktop/FiddlerRootCertificate.pem
set REQUESTS_CA_BUNDLE=~/Desktop/FiddlerRootCertificate.pem
```

Once the Fiddler Everywhere proxy is set, you can immediately capture traffic through the Python application.

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


## Setting Fiddler Proxy through Python Code

You can set the Fiddler proxy explicitly through the Python application's codebase.

```py
import requests

proxies = {'http': '127.0.0.1:8866', 'https': '127.0.0.1:8866'}
r = requests.get('https://reqbin.com/echo', proxies=proxies)
```


