---
title: Reverse Proxy
description: "Use Fiddler Everywhere as a reverse proxy for servers."
type: how-to
slug: fiddler-reverse-proxy
publish: true
position: 70
previous_url: /knowledge-base/fiddler-as-reverse-proxy
---

One common scenario for developers, QA, and support engineers is to test how their server behaves when a client request is received. A common technique is the usage of reverse proxies, where the proxy tool is installed on the server, and all inbound HTTP requests explicitly go through it before landing on the server. Using a standalone reverse proxy can be hard to set up and a burden to configure for cases when you want only to test and inspect the received HTTP requests. Additionally, in the usual case, developers use localhost servers to mock and test their web applications, so setting up a full-blown reverse proxy can be over complicated. 

This is where Fiddler Everywhere comes in place! With a few simple steps, you can create a reverse proxy setup and test requests from your web application to the server.

The article provides detailed technical instructions on how to use Fiddler Everywhere as a reverse proxy through the built-in **Reverse Proxy** functionality or thorugh a custom rule.

## Client and Server Demo Applications

Before setting up Fiddler Everywhere act as a reverse proxy, let's demonstrate how a web application communicates with a simple localhost server. If you have prior knowledge of that poart, you can direcly skip it and go to [the reverse proxy configuraiton instructions](#using-fiddlers-reverse-proxy-recommended-approach).

For example, let's use as a demo a web application that makes HTTP requests on port `8443`. 

```JavaScript
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xmlHttp = new XMLHttpRequest();
try {
    xmlHttp.open("GET", 'http://localhost:8443/jsonData', false); 
    /* 
        Note: With the current setup the client app directly communicates with the server.
        For the client app to go through the localhost proxy, the port must be modified (details below)
    */

    xmlHttp.setRequestHeader('content-type', 'application/json');
    xmlHttp.setRequestHeader('custom-header', 'Nick Iliev');

    xmlHttp.send(null);
    result = xmlHttp.responseText;
    console.log(`Result: ${result}`);
} catch (err) {
    console.log(`Status: ${xmlHttp.status}, Error: ${err.message}`);
}
```

The above demo sends an HTTP request to a server that works on `localhost:8443`. For example:

```JavaScript
const http = require('http');
const fs = require('fs');

http.createServer()

const server = http.createServer(null, (req, res) => {
});

server.on('error', (err) => console.error(err));
server.on('request', (req, res) => {
    const path = req.url;
    const method = req.method;

    if (path === "/jsonData" && method == 'GET') {
        res.writeHead(200, 'Success',  {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        });

        const returnData = {
            user: '90c96789-95e0-48fd-af70-43673d547d68',
            preferences: {
                theme: 'dark',
                rememberMe: true
            }
        };

        res.end(JSON.stringify(returnData));
    } 
});

server.listen(8443);

```

In the above scenario, the web application makes a GET request on port `8443`, and the server will directly handle that request as it's configured to listen on that port. If you run Fiddler Everywhere, it won't capture the ongoing traffic as it's not configured to listen on port 8443. The above demo app and server are available from [this GitHUb repository](https://github.com/NickIliev/fiddler-reverse-demo).


## Using Fiddler's Reverse Proxy (Recommended Approach) 

The built-in **Reverse Proxy** functionality in Fiddler Everywhere enables you to quickly setup a reverse proxy configuration for localhost and remote servers. The below steps illustates how to configure Fiddler alongside the [demo localhost server](#client-and-server-demo-applications) shown above.

- Start Fiddler Everywhere.

- Open on the **Reverse Proxy** button.

- Enter a custom port within the `Client Port` field. For demonstartion purposes we will use port `8877` (this port will be customized later in our demo web application).

- Choose the supported client protocols (default value `HTTP/HTTPS`).

- Enter the remote host address and port.  For demonstartion purposes we will use `localhost:8443` (the address on which our demo server works).

- Choose the supported remote protocols (default value `HTTP/HTTPS`).

- Choose whether to preserve host (default value `No`).

- Save the changes.

![Demonstration for reverse proxy setup in Fiddler Everywhere](../images/reverse/reverse-proxy-setup-001.png)

Now, we need to modify the port on which our demo application will send its requests. Note that this steps is mandatory when both the client app and the server are working on the same host as the Fiddler proxy.

- Change the default port that your application uses (in the demo above, port `8443`) to the selected custom port (in this case port `8877`). For example:

    ```JavaScript
    /* 
        The default server port is 8843 (when Fiddler is not in the reverse proxy mode the client app should use that port).
        However, in this case, set port 8877, which corresponds to the "Client Port" within the "Reverse Proxy" section
    */
    xmlHttp.open("GET", 'http://localhost:8877/jsonData', false);
    ```

![Demonstration for captured traffic through reverse proxy](../images/reverse/reverse-proxy-setup-002.png)

### Reverse Proxy Options

The built-in **Reverse Proxy** provides the following configurable options:

- **Client Port** - Sets the port on which the client application sends requests.

    >important When the client application is not on the same host as the Fiddler proxy you can use the default ports (e.g. 80 and 443). However, when creating a localhost reverse proxy it's crucial to use a custom port for your client application.

- **Client Protocol** - Sets the protocol that the client applicaiton uses. Available options **HTTP**, **HTTPS**, and **HTTP/HTTPS** (default value).

- **Remote Host** - Sets the address and port of the remote host (the targeted server).

- **Remote Protocol** - Sets the protocol that the remote host uses. Available options **HTTP**, **HTTPS**, and **HTTP/HTTPS** (default value).

- **Preserve Host** - Instructs whether Fiddler should preserve the host value or use the Fiddler host within the `Host` request header. The default value `No` overwrites the original `Host` header from the client's request while using the port set within the **Remote Host** field. When the value is set to `Yes` Fiddler preserves the original `Host` header from the client's request when forwarding the request to the server.


## Creating Reverse Proxy Rule (Alternative Approach) 

As an alternative of the built-in [**Reverse Proxy**](#using-fiddlers-reverse-proxy-recommended-approach) functionality, users can also easily create a custom reverse proxy rule. Note that the described reverse proxy rule is limited only to requests made through HTTP version 1.x (version 2.x currently does not work with the reverse proxy setup demonstrated below).

To create a reverse proxy **rule**, in which the request is first going through Fiddler Everywhere and only then landing in the localhost server, you need to modify the web application and create a Fiddler Everywhere rule as follows:

- Change the default port that your application uses (in the demo above, port `8443`) to the Fiddler Everywhere port (by default, port `8866`). For example:

    ```JavaScript
    // The application now uses Fiddler's port 8866
    xmlHttp.open("GET", 'http://localhost:8866/jsonData', false); 
    ```

- Open Fiddler Everywhere, load the **Traffic** pane and open the **Rules** tab.

- Click on **Add Rule** and create a rule to redirect all requests made to 8866 (Fiddler's port `8866`) to the server's port (`8443`).

    ![reverse proxy rule for HTTP requests](../images/kb/reverse-proxy/reverse-proxy-http.png)

- Enable both the newly created rule and the **Rules** tab.

    ![enabled rule](../images/kb/reverse-proxy/enabled-rule.png)

- Start the localhost server on its original port `8443`.

- Finally, execute the HTTP request from your web application.

As a result, the request goes through Fiddler Everywhere. You can immediately inspect, modify, replay, share the client's HTTP request, or track the server behavior on-the-fly.

### Creating Reverse Proxy Rule for HTTPS

Most developers are testing locally through HTTP, but in some cases, you are explicitly running a local HTTPS server with the sole idea of testing the secure requests. The above configuration will work for HTTPS servers, but if you prefer to skip the HTTPS configuration for your web application, then once again, you can do it with the help of Fiddler's rules.

- Change the default port that your application uses (in the demo above, that was port `8443`) to the Fiddler Everywhere port (by default, that is port `8866`). For example:

    ```JavaScript
    // The application now uses Fiddler's port 8866. It still uses the non-secure HTTP as a protocol
    xmlHttp.open("GET", 'http://localhost:8866/jsonData', false); 
    ```

- Open Fiddler Everywhere, load the **Traffic** pane and open the **Rules** tab.

- Click on **Add Rule** and create a rule to redirect all requests made to 8866 (Fiddler's port `8866`) to the server's port (`8443`). In addition, add an action to change all **HTTP** requests to **HTTPS** requests.

    ![reverse proxy rule for HTTP requests](../images/kb/reverse-proxy/reverse-proxy-https.png)

- Enable both the newly created rule and the **Rules** tab.

- Start the localhost HTTPS server on its original port `8443`.

- Finally, execute the non-secure HTTP request from your web application.

As a result, the HTTP request is directed through Fiddler Everywhere and then sent as HTTPS to the secure server. You can immediately inspect, modify, replay, share the client's HTTP request, or track the server behavior on-the-fly.

>tip: To stop receiving specific certificate errors, use Fiddler's **Ignore server certificate errors (unsafe)** option accessible from **Settings > HTTPS**.

## Additional Resources

- [GitHub Repository for the Demo App and Server](https://github.com/NickIliev/fiddler-reverse-demo)
- [Fiddler's Capturing Modes Explained]({%slug capture-traffic-get-started%})
