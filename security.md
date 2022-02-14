---
title: Security
description: "Learn more about the Fiddler Everywhere security highlights and check out the related technical information about sharing and capturing functionalities."
slug: fe-security
publish: false
position: 75
---

# Fiddler Everywhere Security

The Fiddler Everywhere application acts as a MITM proxy that uses its unique certificate. It will capture incoming and ongoing internet activities, and you need to be careful not to share any sensitive data as it might pose a threat to you or your company. This article highlights the primary security concerns and provides technical information about how Fiddler Everywhere acts as a MITM and what you should consider when handling the Fiddler root trust certificate and captured data.


## How Does Fiddler Everywhere Work

Fiddler Everywhere is an HTTP/HTTPS proxy that runs on your Windows, Linux, or Mac computer. It stands between your client application (for example, a browser or other application that sends HTTP/HTTPS requests) and the server (that receives the HTTP/HTTPS requests). The HTTP/HTTPS responses are returned to the Fiddler Everywhere proxy, passing the traffic back to the client application.

This type of proxy configuration is a MITM proxy (coming from man-in-the-middle, meddler-int-the-middle, etc.). It uses the MITM-attack approach to intercept communication between the client and the server.

### Fiddler as HTTP Proxy

By default, Fiddler Everywhere captures only non-secure HTTP traffic. The proxy may process this web traffic before forwarding it upstream through the [Rules tab]({%slug rules-general%}).

![Fiddler Everywhere as MITM proxy](./images/security/fe-proxy-requests-responses.png)

1. The client application (e.g., browser, Android app, or any other application that uses the system proxy and makes HTTP requests) connects to the Fiddler Everywhere proxy and makes a request.
2. The Fiddler Everywhere proxy forwards the request to the upstream server. Any active Fiddler Everywhere rules (modifying the requests) are applied here.
3. The server sends the response to the Fiddler Everywhere proxy.
4. The Fiddler Everywhere proxy forwards the response to the client application. Any active Fiddler Everywhere rules (modifying the responses) are applied here.

### Fiddler as Chained Proxy

Fiddler Everywhere will automatically chain to other system proxies and effectively works as an upstream proxy.

![Fiddler Everywhere as chained proxy](./images/security/fe-proxy-chained.png)

### Fiddler as HTTPS Proxy

All modern applications use additional security layers like [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) to protect the user's data and prevent third parties from capturing the traffic. To capture secure traffic over HTTPS with Fiddler Everywhere, you need to explicitly elevate the trust by [installing and enabling the Fiddler's root trust certificate]({%slug trust-certificate%}). By adding the Fiddler Everywhere certificate in the Trusted Certificate Authority manager of the used operating system, you allow the man-in-the-middle attack to intercept the encoded TLS data. This practically means that we can now decode the otherwise encoded HTTPS traffic.

![Fiddler Everywhere as HTTPS proxy](./images/security/fe-proxy-https.png)

The above demonstrates how Fiddler Everywhere acts as if it is the client when speaking to the server, and the other way around - it acts as if it is the server when communicating with the client applications.

## Fiddler Everywhere Security Highlights

While using Fiddler Everywhere, consider the following security indicators and highlights:

- In its initial state, Fiddler Everywhere will capture only non-secure HTTP traffic. This traffic can still expose sensitive information like visited URLs, internal API endpoints, etc.

- Fiddler Everywhere generates a unique root trust certificate. Avoid sharing this certificate with untrusted third parties as it might pose a security threat.

- When HTTPS capturing is enabled, the captured data will contain readable information that is usually encrypted. Share that data with trusted parties only and carefully consider what the requests and responses might contain.

- Only the user that has access to the Fiddler Everywhere application and to the Fiddler's saved sessions will have access to the captured data. The Fiddler Everywhere team doesn't have access to that information and can access it or restore it in any way.

- Consider using password protection to prevent unauthorized access to your saved sessions.

- Fiddler Everywhere will not store your data in the cloud if you do not use sharing or cloud capabilities. Everything is stored locally once you sign in (where we verify your credentials in the cloud). The only way to get something in the cloud is to explicitly upload saved **Sessions** collections, **Requests** collections, or **rules** or share them with collaborators. The data these cloud saves contain won't be accessible by third parties or the Fiddler team.

- Sessions uploaded to the Fiddler cloud space are encrypted by default. These sessions (and the information they contain) can't be accessed by the Fiddler team or other third parties unless the owner explicitly shares them.


## Fiddler Everywhere Application Analytics

By default, the Fiddler Everywhere application comes with an integrated Analytics solution that collects application usage data to improve product stability, UI, and UX. The collected information is stored on an external server, and it does not contain any data related to the captured traffic and the data that the sessions include. You can opt-out from the analytics data collection through **Settings > Privacy > Automatically send data to help us improve the product** option.


## Saving and Sharing Captured Traffic Securely

### Saving Traffic

Once Fiddler Everywhere captures the traffic, you have the option to [**save**]({%slug web-sessions-list%}#saving) the sessions for later usage. Consider the following security highlights before saving sessions.

- All saved sessions are stored locally on the Fiddler Everywhere host machine as SAZ files (Fiddler Sessions Archive ZIP). The absolute path is different and depends on the used OS and the unique ID of the currently logged user:

    * Windows path 

        ```curl
        C:\Users\<currently-logged-user>\.fiddler\<unique-fiddler-user-GUID>\Snapshots
        ```

    * macOS path

        ```curl
        ~\.fiddler\<unique-fiddler-user-GUID>\Snapshots
        ```

    * Linux path

        ```curl
        ~\.fiddler\<unique-fiddler-user-GUID>\Snapshots
        ```

- The **.fiddler** folder will continue to exist even when the Fiddler Everywhere application is uninstalled. Any previously saved sessions will be available on the host machine until they are explicitly removed. Explicitly removing the **.fiddler** folder permanently removes all previously saved sessions (the SAZ files in the Snapshots GUID folders) so consider keeping them in the cloud as a backup option before clearing the folder.

- Other users can open any unprotected SAZ file at any time - all they need is access to the SAZ file. Consider using **password protection** for your captured traffic to encrypt the locally saved SAZ files and prevent unauthorized access to sensitive data. Fiddler Everywhere provides several options to add password protection for your sessions:

    * [Learn how to set a password during the session's save...]({%slug web-sessions-list%}#saving)

    * [Learn how to set a password for already saved sessions...]({%slug saved-sessions-tab%}#encrypting)

Sessions saved in the cloud will continue to exist locally through the **.fiddler** folder until they are explicitly removed. Removing the SAZ files from the **./fiddler** folder will remove their presence in the Fiddler Everywhere UI. 

- The only way to recover a deleted session from the Sessions list or a deleted SAZ file from the **.fiddler** folder is to download their cloud copy. Consider using the Fiddler Everywhere cloud save as a backup option.

### Sharing Traffic

Fiddler Everywhere comes with [collaboration in mind]({%slug collaboration-get-started%}), and provides sharing functionalities. Consider the following security highlights before sharing sessions.

- Before sharing, a session is saved. Thus the [saving-related security highlights](#saving-traffic) must be considered.

- Sharing an unprotected session might expose your sensitive data to unauthorized third parties. Always consider adding a password-protection to your sessions before sharing them.
