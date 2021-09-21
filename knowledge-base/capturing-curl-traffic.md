---
title: Capturing cURL Traffic
description: Learn how to capture cURL traffic using Fiddler Everywhere
type: how-to
slug: how-to-capture-curl-traffic
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [curl](https://curl.se/docs/manpage.html) |
| Supported OS | macOS, Linux, Windows |


#### Description

Some 3rd-party tools like [curl](https://curl.se/docs/manpage.html) don't use the OS system proxy by default. To intercept traffic generated from similar applications, you will need to explicitly set the Fiddler Everywhere proxy.

## cURL

When executing a request through **cURL** (that needs to be captured by Fiddler), use the optional parameter **-x** to pass the Fiddler Everywhere proxy. The **ssl-no-revoke** option invokes/causes curl to disable certificate revocation checks. The **-v** parameter shows verbose logs after the command is executed.

```curl
curl --url https://www.example.com/ -x 127.0.0.1:8866 --ssl-no-revoke -v
```

>tip Alternatively, you can [set the proxy settings for your terminal app]({%slug fiddler-macos-terminal%}) (which runs the **curl** app) to use the Fiddler Everywhere proxy.