---
title: Capturing Go Traffic
description: "Run GO applicaton and its capture HTTPS traffic while using the Fiddler Everywhere proxy debugging tool."
type: how-to
slug: how-to-capture-go-traffic
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [Go](https://go.dev/) |
| Supported OS | macOS, Linux, Windows |


## Description

Fiddler captures different traffic but I cannot capture localhost HTTP traffic generated from a **Go** application.


## Solution


Fiddler Everywhere respects global variables like `HTTP_PROXY` which are also used by the [HttpProxy](https://pkg.go.dev/golang.org/x/net/http/httpproxy#Config.ProxyFunc) and [useProxy](https://github.com/golang/net/blob/c0dbc17a35534bf2e581d7a942408dc936316da4/http/httpproxy/proxy.go#L172) in the Go language.

However, a known limitation is that the above Go methods won't respect the proxy variables for traffic going through `localhost` or `127.0.0.1`.

```
... As a special case, if req.URL.Host is "localhost" or a loopback address (with or without a port number), then a nil URL and nil error will be returned.
```

To overcome the above limitation, you can explicitly overwrite the `hosts` file in your operating system and provide a custom alias for the localhost traffic.

For example: 

Open the `hosts` file on macOS
```bash
open ~/etc/hosts
```

or open the `hosts` file on Windows
```bash
start c:/Windows/System32/Drivers/etc/hosts
```

Then add an alias like `local` for the localhost address `127.0.0.1`

```bash
127.0.0.1 local
```

Finally, open your Go application and substitute any mentions of `localhost` or `127.0.0.1` with the new alias `local.`

