---
title: Capturing cURL Traffic
description: "Learn how to capture cURL traffic while using the Fiddler Everywhere web-debugging tool."
type: how-to
slug: how-to-capture-curl-traffic
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [Curl](https://curl.se/docs/manpage.html) |
| Supported OS | macOS, Linux, Windows |


## Description

Some third-party tools like [Curl](https://curl.se/docs/manpage.html) don't use the OS system proxy by default. How can I intercept the traffic generated from Curl or similar applications?

## Solution

When executing a request that needs to be captured by Fiddler through cURL, use the optional `-x` parameter to pass the Fiddler Everywhere proxy. The `ssl-no-revoke` option invokes or causes cURL to disable certificate revocation checks. The `-v` parameter shows verbose logs after the command is executed.

```curl
curl --url https://www.example.com/ -x 127.0.0.1:8866 --ssl-no-revoke -v
```

Alternatively, you can [set the proxy settings for your terminal application]({%slug fiddler-macos-terminal%}), which runs the cURL application, to use the Fiddler Everywhere proxy.
