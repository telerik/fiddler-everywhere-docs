---
title: Capturing Git Traffic
description: "Learn how to capture Git HTTPS traffic while using the Fiddler Everywhere web-debugging tool."
type: how-to
slug: how-to-capture-git-traffic
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product version | Fiddler Everywhere 1.0.0 and above  |
| 3rd-party tools | [GIT](https://git-scm.com/), [GitHub](https://github.com/) |
| Supported OS | macOS, Linux, Windows |


## Description

I want to capture the traffic generated from the Git source control while making pull & push requests and cloning repositories. How to configure Git to go through the Fiddler Everywhere proxy?


## Configuring Git HTTPS Access alongside Fiddler Everywhere Proxy

1. Start your Git Bash terminal with administrative rights.

1. Configure Git (for HTTPS-accessed repositories) to use the Fiddler Everywhere proxy.

    ```
    git config --global http.proxy http://127.0.0.1:8866 
    ```

1. Disable the SSL/TLS verification by setting `http.sslVerify` to `false`. Note that this will make your connection insecure.
    ```
    git config --global http.sslVerify false
    ```

With the above, you can now clone, pull, push, or use any other Git network operations and investigate the captured traffic with Fiddler Everywhere.

## Checking Git Proxy Configuration

Check the current Git proxy configuration through the following command:

```
git config --get-regexp http.* 
```

## Reseting Git Proxy Configuration

Reset the Git proxy settings through the following commands:

```
git config --global --unset http.proxy
git config --global --unset http.sslVerify
```