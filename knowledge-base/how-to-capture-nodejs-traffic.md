---
title: Capturing Traffic from Node.js Libraries
description: "Learn how to configure the Fiddler Everywhere web-debugging proxy alongside Node.js and capturing HTTPS traffic."
type: how-to
slug: fiddler-nodejs-traffic
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
|---|---|
| Node.js Module  | http |
| Node.js Module  | request |

## Description

Many developers use Fiddler Everywhere to capture traffic from Node.js libraries that make HTTP and HTTPS requests. How can I proxy these requests so that I can capture and analyze them with Fiddler Everywhere?

## Solution

Some Node.js modules, such as [`request`](https://www.npmjs.com/package/request), are reading the proxy information from the Windows environment variable ([global proxy settings](#setting-the proxy-globally)). Others like the state [`HTTP` module](https://nodejs.org/api/http.html) do not respect the global proxy configuration of Node.js and you need to [proxy their requests explicitly](#setting-the proxy-explicitly).

This section demonstrates the basic approach for each of the mentioned scenarios.

### Setting the Proxy Globally

This scenario is useful for libraries like [request](https://www.npmjs.com/package/request) that reuse the proxy settings in the environment variables. With Node.js, you can set the proxy directly in the terminal.

```Console
set https_proxy=http://127.0.0.1:8866
set http_proxy=http://127.0.0.1:8866
set NODE_TLS_REJECT_UNAUTHORIZED=0
```

Once the above settings are applied, you can now call modules like [request](https://www.npmjs.com/package/request) and make the HTTP request. The request will be captured by Fiddler Everywhere. Once the capturing is over, you can revert the global proxy settings as follows:

```Console
set https_proxy=
set http_proxy=
set NODE_TLS_REJECT_UNAUTHORIZED=
```

Alternatively, instead of using the terminal, you can use simple JavaScript to set the environment variable through code.

The following example demonstrates the `fiddler-everywhere-test.js` file.

```JavaScript
const url = require("url");
const fiddlerProxy = {
    protocol: "http:",
    hostname: "127.0.0.1",
    port: 8866,
};
const setFiddlerPorxy = () => {
    var proxyUrl = url.format(fiddlerProxy);
    env.http_proxy = proxyUrl;
    env.https_proxy = proxyUrl;
    // Use this only for debugging purposes as it introduces a security issue
    env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
};
const removeFiddlerProxy = () => {
    env.http_proxy = "";
    env.https_proxy = "";
    env.NODE_TLS_REJECT_UNAUTHORIZED = "";
};

setFiddlerPorxy();

// Make requests with libraries that reuse the global proxy settings.

removeFiddlerProxy();
```

### Setting the Proxy Explicitly

The [global proxy settings](#settingproxy-globally) won't work for modules like the [`HTTP` module](https://nodejs.org/api/http.html) where you need to proxy each HTTP request to Fiddler Everywhere. One way to solve that is to set the proxy through the code explicitly.

The following example demonstrates the `fiddler-everywhere-test.js` file.

```JavaScript
"use strict";

const url = require("url");
const http = require("http");

const fiddlerEverywhereProxy = {
    protocol: "http:",
    hostname: "127.0.0.1",
    port: 8866,
};

// Use this only for debugging purposes as it introduces a security issue.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const setFiddlerProxy = (options) => {
    if (typeof options === "string") { // Options can be URL string.
        options = url.parse(options);
    }
    if (!options.host && !options.hostname) {
        throw new Error("host or hostname must have value.");
    }
    options.path = url.format(options);
    options.headers = options.headers || {};
    options.headers.Host = options.host || url.format({
        hostname: options.hostname,
        port: options.port
    });
    options.protocol = fiddlerEverywhereProxy.protocol;
    options.hostname = fiddlerEverywhereProxy.hostname;
    options.port = fiddlerEverywhereProxy.port;
    options.href = null;
    options.host = null;
    return options;
};

const exampleUrl = "https://www.example.com";
http.request(setFiddlerProxy(exampleUrl), (res) => {
    console.log(res);
}).end(); // Through Fiddler.
```

With the above, you can test the request through the terminal.

```Console
node fiddler-everywhere-test.js
```

As a result, Fiddler Everywhere will capture the request and the response.

![Successfully captured NodeJS traffic](../images/kb/nodejs/success-capture-nodejs.png)

### Setting Fiddler Everywhere alongside the Node Proxy

After setting the proxy, either globally or explicitly, for your Node.js process, Fiddler Everywhere will immediately start capturing all of the traffic that goes through the Node proxy. You can turn off the **Live Traffic** switch to capture only the process from your Node.js libraries. Turning on the **Live Traffic** switch will set Fiddler as a system proxy and the **Live Traffic** will start capturing traffic for all applications that use the OS system proxy.
