---
title: Capturing CURL Traffic with Fiddler Everywhere
description: An article on how to capture CURL traffic using Fiddler Everywhere
type: how-to
slug: how-to-capture-curl-traffic
tags: Fiddler curl,  Fiddler explicit proxy, CURL, 
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [curl](https://curl.se/docs/manpage.html) |
| Supported OS | macOS, Linux, Windows |


#### Description

Some 3rd-party tools like [curl](https://curl.se/docs/manpage.html) doesn't use the OS system proxy by default. To intercept traffic generated from similar applications, we will need to explicitly set the Fiddler Everywhere proxy.

## CURL

When executing a request through **curl** (that needs to be captured by Fiddler), use the optional parameter **-x** to pass the Fiddler Everywhere proxy. The **ssl-no-revoke** option tells curl to disable certificate revocation checks. The **-v** parameter is to show verbose logs after the command is executed.

```curl
curl --url https://www.example.com/ -x 127.0.0.1:8866 --ssl-no-revoke -v
```

>tip Alternatively, you could [set the proxy settings for your terminal app]({%slug fiddler-macos-terminal%}) (which runs the **curl** app) to use the Fiddler Everywhere proxy.