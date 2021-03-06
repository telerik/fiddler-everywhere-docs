---
title: How to Capture Traffic from Node.js libraries
description: An article on how to capture HTTP and HTTPS traffic from Node.js libraries
type: how-to
slug: fiddler-nodejs-traffic
tags: Fiddler Everywhere NodeJS, capturing Node.js traffic, Node.js HTTP library, Fiddler NodeJS proxy settings, Fiddler Everywhere NodeJS
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
|---|---|
| Node.js Module  | http |
| Node.js Module  | request |

#### Description

Many developers are using **Node.js** libraries that make HTTP and HTTPS requests. This article explains how to proxy these requests so that you could capture and analyze them with FIddler Everywhere.

>important Some Node.js modules like [**request**](https://www.npmjs.com/package/request) are reading the proxy information from the windows environment variable ([global proxy settings](#setting-proxy-globally)). Others like the state [**HTTP** module](https://nodejs.org/api/http.html) are not respecting the global proxy configuration (of Node.js), so we need to [proxy their requests explicitly](#setting-proxy-explicitly). The sections that follow below are demonstrating a basic approach for each of the mentioned scenarios.


## Setting Proxy Globally

This scenario is useful for libraries like [request](https://www.npmjs.com/package/request) that reuse the proxy settings in the environment variables. With Node.js, we can set the proxy directly in the terminal. 

```Console
set https_proxy=http://127.0.0.1:8866 
set http_proxy=http://127.0.0.1:8866
set NODE_TLS_REJECT_UNAUTHORIZED=0
```

Once the above settings are applied, we can now call modules like [request](https://www.npmjs.com/package/request) and make the HTTP request. The request will be captured by Fiddler Everywhere. Once the capturing is over, we could revert the global proxy settings as follows:

```Console
set https_proxy=
set http_proxy=
set NODE_TLS_REJECT_UNAUTHORIZED=
```

Alternatively, instead of using the terminal, we could use a simple JavaScript to set the environment variable through code.

_Example file **fiddler-everywhere-test.js**_
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
    env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
};
const removeFiddlerProxy = () => {
    env.http_proxy = "";
    env.https_proxy = "";
    env.NODE_TLS_REJECT_UNAUTHORIZED = "";
};


setFiddlerPorxy();

// ... make requests with libraries that are reusing the global proxy settings

removeFiddlerProxy();
```

## Setting Proxy Explicitly

The [global proxy settings](#settingproxy-globally) won't work for modules like the [HTTP module](https://nodejs.org/api/http.html), where we need to proxy each individual HTTP request to Fiddler Everywhere. One way to solve that is to explictly set the proxy through the code.


_Example file **fiddler-everywhere-test.js**_
```JavaScript
"use strict";

const url = require("url");
const http = require("http");

const fiddlerEverywhereProxy = {
    protocol: "http:",
    hostname: "127.0.0.1",
    port: 8866,
};

const setFiddlerProxy = (options) => {
    if (typeof options === "string") { // options can be URL string.
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

With the above, we can test the request through the terminal.

```Console
node fiddler-everywhere-test.js
```

As a result, Fiddler Everywhere will capture the request and the response.

![Successfully captured NodeJS traffic](../images/kb/nodejs/success-capture-nodejs.png)