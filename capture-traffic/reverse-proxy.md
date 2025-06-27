---
title: Reverse Proxy
description: "Use Fiddler Everywhere as a reverse proxy for servers."
type: how-to
slug: fiddler-reverse-proxy
publish: true
position: 70
previous_url: /knowledge-base/fiddler-as-reverse-proxy
---

# Reverse Proxy Mode

Fiddler Everywhere can act as a reverse proxy, allowing you to inspect, debug, and modify HTTP(S) requests sent to your server. This is especially useful for developers, QA, and support engineers who need to analyze how their server handles client requests without the complexity of setting up a dedicated reverse proxy solution.

This article explains how to use Fiddler Everywhere as a reverse proxy, either through the built-in **Reverse Proxy** feature (recommended) or by creating a custom rule. You'll also find a demo setup and troubleshooting tips.

> **Tip:** For most users, the built-in Reverse Proxy feature is the simplest and most robust approach.

## Demo: Client and Server Applications

Before configuring Fiddler, here's a simple example of a web application making HTTP requests to a local server on port `8443`.

**Client Example:**

```javascript
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

**Server Example:**

```javascript
const http = require('http');
const server = http.createServer((req, res) => {
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
            preferences: { theme: 'dark', rememberMe: true }
        };
        res.end(JSON.stringify(returnData));
    } 
});
server.listen(8443);
```

By default, Fiddler will not capture traffic on port 8443 unless configured as a reverse proxy.

---

## Using Fiddler's Reverse Proxy (Recommended)

The built-in **Reverse Proxy** feature lets you quickly set up a reverse proxy for localhost or remote servers. Follow these steps:

1. **Start Fiddler Everywhere.**
2. Click the **Reverse Proxy** button.
3. Enter a custom port in the `Client Port` field (e.g., `8877`).
4. Select the client protocol (default: `HTTP/HTTPS`).
5. Enter the remote host and port (e.g., `localhost:8443`).
6. Select the remote protocol (default: `HTTP/HTTPS`).
7. Choose whether to preserve the host header (default: `No`).
8. Save your changes.

![Reverse proxy setup in Fiddler Everywhere](../images/reverse/reverse-proxy-setup-001.png)

**Update your client application to use the new port:**

```javascript
xmlHttp.open("GET", 'http://localhost:8877/jsonData', false);
```

> **Note:** When both the client and server run on the same host, you must use a custom port for the client app.

![Captured traffic through reverse proxy](../images/reverse/reverse-proxy-setup-002.png)

### Reverse Proxy Options Explained

- **Client Port:** Port for client requests (use a custom port for localhost scenarios).
- **Client Protocol:** Protocol used by the client (HTTP, HTTPS, or both).
- **Remote Host:** Address and port of the target server.
- **Remote Protocol:** Protocol used by the server.
- **Preserve Host:** Whether to keep the original `Host` header (set to `Yes` only if required by your server).

## Creating a Reverse Proxy Rule (Alternative)

If you need more control or want to proxy only specific requests, you can create a custom rule. This method works for HTTP/1.x traffic.

1. Change your client app to use Fiddler's default port (e.g., `8866`):
    ```javascript
    xmlHttp.open("GET", 'http://localhost:8866/jsonData', false);
    ```
2. In Fiddler, open the **Traffic** pane and go to the **Rules** tab.
3. Click **Add Rule** and create a rule to redirect requests from port `8866` to your server's port (`8443`).
4. Enable the rule and the **Rules** tab.
5. Start your server on port `8443` and run your client app.

![Reverse proxy rule for HTTP requests](../images/kb/reverse-proxy/reverse-proxy-http.png)

### For HTTPS Servers

To test HTTPS servers without changing your client to use HTTPS:

- Use the same steps as above, but add an action in your rule to change HTTP requests to HTTPS.
- Start your HTTPS server on port `8443`.
- Run your client app with HTTP and port `8866`.

![Reverse proxy rule for HTTPS requests](../images/kb/reverse-proxy/reverse-proxy-https.png)

> **Tip:** To avoid certificate errors, enable **Ignore server certificate errors (unsafe)** in **Settings > HTTPS**.

## Troubleshooting & Best Practices

- Always use a custom client port for localhost reverse proxy scenarios.
- Ensure Fiddler is running before sending requests.
- For HTTPS, trust the Fiddler root certificate or use the "Ignore server certificate errors" option.
- The custom rule approach works only for HTTP/1.x traffic.
- Double-check port numbers in your client and server code.
- If traffic is not captured, verify that the correct port and protocol are set in Fiddler's Reverse Proxy settings.

## Additional Resources

- [Demo App and Server on GitHub](https://github.com/NickIliev/fiddler-reverse-demo)
- [Fiddler's Capturing Modes Explained]({%slug capture-traffic-get-started%})
