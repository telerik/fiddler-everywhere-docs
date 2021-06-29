---
title: Gateway
description: Gateway options for advanced proxy setup with Fiddler Everywhere
slug: gateway-submenu
publish: true
position: 30
---

# Gateway Menu

The __Gateway__ sub-menu provides options to easily configure how Fiddler Everywhere accesses the network. By default, Fiddler Everywhere "chains" to the system's default proxy. These settings allow you to overwrite that behavior.

![Example manual proxy configuration](../../images/settings/settings-gateway.png)

## Use system proxy

__Use system proxy (recommended)__ is the default selection. Fiddler uses the OS system proxy. Some browsers and many applications use the system proxy by default and are notified when it changes. 

## Manual proxy configuration

Select __Manual proxy configuration__  to specify the upstream proxy string (first textbox) and proxy bypass list (second textbox). 

__Proxy string__

To manually set the gateway proxy, enter the proxy string:

* You can enter the proxy configuration string directly.

 ```
 proxyserver:8080
 ```

* You can enter the proxy in the protocol-specific form.

 ```
 http=httpproxy:8080;https=httpsproxy:8080
 ```

__Bypass list__

The proxy bypass list supports:

* wildcards;

* the `<local>` special token, which means any host name that does not contain a period;

* the `<-loopback>` special token, which removes the default bypass for `127.0.0.1` and `localhost` host names.

```
<local>;*.extranet.example.com;
```

## No proxy

Select __No proxy__ if you want to send all traffic directly to the origin server.
