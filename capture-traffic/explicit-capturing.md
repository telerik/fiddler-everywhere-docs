---
title: Explicit Capturing
page_title: Explicit Capturing - Capture Traffic | Fiddler Everywhere
description: "Capture HTTPS traffic from any application by manually configuring it to use the Fiddler Everywhere proxy. Inspect and analyze sessions in real time without changing OS-wide proxy settings."
slug: explicit-capturing
publish: true
position: 35
---

# Explicit Capturing Mode

The **explicit capturing mode** in Fiddler Everywhere lets you capture traffic from any application that supports manual HTTP proxy configuration. Unlike [system capturing](slug://capture-system-traffic), explicit capturing does not modify your operating system proxy settings&mdash;only applications you explicitly point at the Fiddler proxy are captured. This gives you surgical control over which traffic appears in the Live Traffic grid.

## When to Use Explicit Capturing

Use explicit capturing when:

- You want to capture traffic from a **single application** without intercepting system-wide traffic.
- Your environment restricts changes to the OS proxy (for example, corporate policy or VPN software that resets proxy settings).
- You are testing a **remote device** or a specific CLI tool and want to route only that traffic through Fiddler.
- System capturing conflicts with other tools on your machine (for example, a local development proxy or a VPN client).

For general desktop debugging where capturing all applications is acceptable, prefer [system capturing](slug://capture-system-traffic). For browser-only scenarios without certificate setup, prefer [independent browser capturing](slug://capture-browser-traffic).

## Prerequisites

- [Install and trust the Fiddler CA certificate](slug://trust-certificate) on the machine or device running the target application.
- Note the Fiddler proxy port. The default is `8866`; verify or change it through **Settings** > **Connections** > **Fiddler listens on port**.

## Fiddler Proxy Address

When Fiddler Everywhere is running, it exposes a local HTTP(S) proxy at:

```
127.0.0.1:8866
```

Point your target application to this address to start capturing its traffic. The port number is configurable through **Settings** > **Connections** > **Fiddler listens on port**.

>tip To find your machine's local IP address for remote device scenarios, open **Settings** > **Connections**. The panel displays the address remote clients should use (for example, `192.168.1.105:8866`).

## Capturing from CLI Tools

### curl

Pass the `-x` flag to route a curl request through Fiddler:

```bash
curl --url https://api.example.com/v1/orders -x 127.0.0.1:8866 --ssl-no-revoke -v
```

The `--ssl-no-revoke` flag prevents certificate revocation errors on Windows. On macOS and Linux, use `--proxy-cacert` or trust the Fiddler CA system-wide instead.

### wget

```bash
wget -e use_proxy=yes -e http_proxy=127.0.0.1:8866 -e https_proxy=127.0.0.1:8866 https://api.example.com/v1/products
```

### PowerShell (Invoke-WebRequest)

```powershell
$proxy = New-Object System.Net.WebProxy("http://127.0.0.1:8866", $true)
$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$session.Proxy = $proxy
Invoke-WebRequest -Uri "https://api.example.com/v1/inventory" -WebSession $session
```

## Capturing from Desktop Applications

Most GUI applications expose a **proxy** or **network** settings panel. Configure it with:

| Field | Value |
|---|---|
| Proxy host | `127.0.0.1` |
| Proxy port | `8866` (or your custom port) |
| Protocol | HTTP |

Examples of applications that support manual proxy settings: Postman, Insomnia, Charles Proxy clients, Java applications using system properties, and most browsers in non-system-proxy mode.

## Capturing from Python Applications

Route `requests` library calls through Fiddler without changing system environment variables:

```python
import requests

proxies = {
    "http": "http://127.0.0.1:8866",
    "https": "http://127.0.0.1:8866",
}

response = requests.get(
    "https://api.example.com/v1/shipments",
    proxies=proxies,
    verify=False  # Only use during local debugging; remove in production
)

print(response.json())
```

>important Setting `verify=False` disables TLS verification. Use this only for local debugging sessions with Fiddler. In production code, always validate TLS certificates.

For production-safe verification, point the `verify` parameter to the exported Fiddler CA certificate file instead of disabling verification entirely:

```python
response = requests.get(
    "https://api.example.com/v1/shipments",
    proxies=proxies,
    verify="/path/to/FiddlerRootCertificate.crt"
)
```

## Capturing from Node.js Applications

Set the `https-proxy-agent` package to route Node.js HTTPS requests through Fiddler:

```javascript
import https from "https";
import { HttpsProxyAgent } from "https-proxy-agent";

const agent = new HttpsProxyAgent("http://127.0.0.1:8866");

https.get(
  "https://api.example.com/v1/transactions",
  { agent },
  (res) => {
    let data = "";
    res.on("data", (chunk) => { data += chunk; });
    res.on("end", () => console.log(JSON.parse(data)));
  }
);
```

>tip For applications using the `axios` library, pass the proxy configuration directly through the `proxy` option in the request config object.

## Capturing from Remote Devices

Explicit capturing is the foundation for all remote device setups. Configure the remote device to use the Fiddler host machine's IP address as its proxy:

1. Find your Fiddler host machine's local IP (for example, `192.168.1.105`) through **Settings** > **Connections**.
1. On the remote device, set the HTTP proxy to `192.168.1.105:8866`.
1. Install and trust the Fiddler CA certificate on the remote device.
1. Trigger traffic from the remote device; it appears immediately in the Fiddler Live Traffic grid.

For device-specific instructions, see:

- [Android device setup](slug://capture-mobile-android-traffic)
- [iOS device setup](slug://capture-mobile-ios-traffic)
- [Remote PC setup](slug://fiddler-capture-other-computers)

## Verifying the Configuration

After pointing your application at the Fiddler proxy:

1. Start Fiddler Everywhere.
1. Open the **Traffic** pane.
1. Trigger a request from your target application.
1. Confirm the request appears in the **Live Traffic** grid.

If no traffic appears, check the following:

- Fiddler Everywhere is running and listening on the expected port.
- The application proxy settings use the exact address and port Fiddler reports in **Settings** > **Connections**.
- The Fiddler CA certificate is installed and trusted on the capturing device.
- A firewall or security tool is not blocking the connection to `127.0.0.1:8866`.

## See Also

- [Capturing Modes Overview](slug://capture-traffic-get-started)
- [Capturing System Traffic](slug://capture-system-traffic)
- [Capturing from Android Devices](slug://capture-mobile-android-traffic)
- [Capturing from iOS Devices](slug://capture-mobile-ios-traffic)
- [Trusting the Fiddler CA Certificate](slug://trust-certificate)
