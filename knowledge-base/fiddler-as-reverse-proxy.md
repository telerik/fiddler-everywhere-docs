---
title: Using Fiddler Everywhere as a Reverse Proxy
description: "Use Fiddler Everywhere as a local reverse proxy for testing HTTP/1 server."
type: how-to
slug: fiddler-reverse-proxy
publish: true
res_type: kb
---


One common scenario for developers, QA and support engineers is to test how their server behaves when a client request is received. A common technique is the usage of reverse proxies, where the proxy tool is installed on the server and all inbound HTTP requests are explicitly going through it before landing on the server. Using a standalone reverse proxy can be hard to setup, and an overkill for cases, when you like only to test and inspect the received HTTP requests. Additionally, in the usual case, developers are using localhost servers to mock and test their web applications, so setting up a full-blown reverse proxy can be over complicated. 

This is where Fiddler Everywhere can fill in - with few simple steps and a single rule, you can create a reverse proxy setup and test requests coming from your web application to the server.

The article provides detailed technical instructions on how to use Fiddler Everywhere as a reverse proxy. Note that the described reverse proxy configuration is limited only for non-secure requests made through HTTP version 1.x (version 2.x is currently does not work with the reverse proxy setup explained below).

## Reverse Proxy Configuration

Before explaining how to create a rule that will let Fiddler Everywhere act as a reverse proxy, we will demonstrate how the web application communicates with a simple localhost server.

Let's take a look at a web application that makes HTTP requests on port `8443`. For example:

```JavaScript
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xmlHttp = new XMLHttpRequest();
try {
    xmlHttp.open("GET", 'http://localhost:8443/jsonData', false);
    xmlHttp.setRequestHeader('content-type', 'application/json');
    xmlHttp.send(null);
    result = xmlHttp.responseText;
} catch (err) {
    console.log(`Status: ${xmlHttp.status}, Error: ${err.message}`);
}
```

The above demo, sends a HTTP request to a server that works on `localhost:8443`.