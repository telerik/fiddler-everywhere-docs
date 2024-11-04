---
title: Capturing Git Traffic
description: "Learn how to capture Git HTTPS traffic while using the Fiddler Everywhere proxy application."
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

1. Disable the SSL/TLS verification by setting `http.sslVerify` to `false`. 

    ```
    git config --global http.sslVerify false
    ```

Setting `http.sslVerify` to `false` can help you quickly setup your environment alongside a man-in-the-middle HTTPS proxy. However, its usage is insecure as it will disable the validation of all self-signed certificates. Alternatively, you could install the Fiddler root CA to the certificate chain and specify it with either `http.sslCAInfo` or `http.sslCAPath`.


```JS
// File containing the certificates to verify the peer when fetching or pushing over HTTPS. The `GIT_SSL_CAINFO` environment variable can override it.
http.sslCAInfo <path-to-CA-file>

// Path containing files with the CA certificates to verify the peer when fetching or pushing over HTTPS. Can be overridden by the `GIT_SSL_CAPATH` environment variable
http.sslCAPath <path-to-folder-containing-CAs>
```

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