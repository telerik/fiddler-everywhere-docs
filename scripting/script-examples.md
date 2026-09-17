---
title: Common Scripting Examples
page_title: Common Scripting Examples - Scripting | Fiddler Everywhere
description: "Practical C# script examples for Fiddler Everywhere Scripting that modify requests and responses through the Session object, including headers, redirects, body rewriting, and blocking traffic."
slug: fiddler-script-examples
publish: true
position: 25
---

# Common Scripting Examples

This article collects practical examples that use the `Session` object (`oSession`) inside the `OnBeforeRequest` and `OnBeforeResponse` [script hooks](slug://fiddler-script-hooks) to inspect and modify traffic. Use them as a starting point for your own scripts.

>tip **`OnBeforeRequest`** runs before a request is sent to the server, so only the request (`oSession.oRequest`) exists yet. **`OnBeforeResponse`** runs after a response is received, so both the request and the response (`oSession.oResponse`) are available&mdash;but any change you make to the request at that point is no longer sent to the server, since the server has already replied.

>tip These examples are adapted from the equivalent [FiddlerScript examples for Fiddler Classic](https://www.telerik.com/fiddler/fiddler-classic/documentation/knowledge-base/fiddlerscript/modifyrequestorresponse), translated to plain C# and to the `OnBeforeRequest`/`OnBeforeResponse` hooks used by Fiddler Everywhere. Use the script editor's autocomplete (type `.` after `oSession`) to explore the members available on `Session` in your installed version.

## Add a Request Header

```csharp
void OnBeforeRequest(Session oSession)
{
    // Runs when a client request is received, before it is sent to the server.
    oSession.oRequest["NewHeaderName"] = "New header value";
}
```

## Remove a Response Header

```csharp
void OnBeforeResponse(Session oSession)
{
    oSession.oResponse.headers.Remove("Set-Cookie");
}
```

## Replace Text in an HTML Response

Decode the response so it is no longer compressed or chunked, then search and replace within the body:

```csharp
void OnBeforeResponse(Session oSession)
{
    // Runs when a server response is received, before it is returned to the client.
    if (oSession.HostnameIs("example.com") && oSession.oResponse.headers.ExistsAndContains("Content-Type", "text/html"))
    {
        oSession.utilDecodeResponse();
        oSession.utilReplaceInResponse("<title>", "<u>");
        oSession.utilReplaceInResponse("</title>", "</u>");
    }
}
```

## Change the Path of a Request on the Same Server

```csharp
void OnBeforeRequest(Session oSession)
{
    if (oSession.PathAndQuery == "/version1.css")
    {
        oSession.PathAndQuery = "/version2.css";
    }
}
```

## Redirect All Requests for a Host to a Different Host

```csharp
void OnBeforeRequest(Session oSession)
{
    if (oSession.HostnameIs("www.example.com"))
    {
        oSession.hostname = "test.example.com";
    }
}
```

## Redirect All Requests for a Host and Port to a Different Host and Port

```csharp
void OnBeforeRequest(Session oSession)
{
    if (oSession.host == "www.example.com:8080")
    {
        oSession.host = "test.example.com:9090";
    }
}
```

## Redirect a Host, Including HTTPS Tunnels

Changing `hostname` redirects plain HTTP traffic. To also redirect HTTPS traffic to the same host, the `CONNECT` tunnel itself must be retargeted:

```csharp
void OnBeforeRequest(Session oSession)
{
    if (oSession.HTTPMethodIs("CONNECT") && oSession.PathAndQuery == "www.example.com:443")
    {
        oSession.PathAndQuery = "beta.example.com:443";
    }

    if (oSession.HostnameIs("www.example.com"))
    {
        oSession.hostname = "beta.example.com";
    }
}
```

## Retarget a Host Without Changing the Host Header

This simulates an entry in the operating system's HOSTS file: the request is sent to a different IP address, but the `Host` header the server sees is unchanged.

```csharp
void OnBeforeRequest(Session oSession)
{
    if (oSession.HostnameIs("subdomain.example.com"))
    {
        oSession.bypassGateway = true; // Skip any configured upstream proxy for this request.
        oSession["x-overrideHost"] = "128.123.133.123"; // DNS name or IP address of the target server.
    }
}
```

## Retarget a Single URL, Changing the Host Header

```csharp
void OnBeforeRequest(Session oSession)
{
    if (oSession.url == "www.example.com/live.js")
    {
        oSession.url = "dev.example.com/workinprogress.js";
    }
}
```

## Remove Cookies from Outgoing Requests

```csharp
void OnBeforeRequest(Session oSession)
{
    oSession.oRequest.headers.Remove("Cookie");
}
```

## Flag Responses That Contain a Search Term

```csharp
void OnBeforeResponse(Session oSession)
{
    if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "text/html") && oSession.utilFindInResponse("searchfor", false) > -1)
    {
        // Add a custom header so the match is easy to spot in the Inspector.
        oSession.oResponse["X-Contains-Searchfor"] = "true";
    }
}
```

## Remove All `<div>` Tags from an HTML Response

```csharp
void OnBeforeResponse(Session oSession)
{
    if (oSession.oResponse.headers.ExistsAndContains("Content-Type", "html"))
    {
        oSession.utilDecodeResponse();
        var oBody = System.Text.Encoding.UTF8.GetString(oSession.responseBodyBytes);

        var oRegEx = new System.Text.RegularExpressions.Regex(
            "<div[^>]*>(.*?)</div>",
            System.Text.RegularExpressions.RegexOptions.Singleline | System.Text.RegularExpressions.RegexOptions.IgnoreCase);
        oBody = oRegEx.Replace(oBody, "");

        oSession.utilSetResponseBody(oBody);
    }
}
```

## Spoof the User-Agent Header

```csharp
void OnBeforeRequest(Session oSession)
{
    oSession.oRequest["User-Agent"] = "Googlebot/2.X (+http://www.googlebot.com/bot.html)";
}
```

## Request Content in a Specific Language

```csharp
void OnBeforeRequest(Session oSession)
{
    oSession.oRequest["Accept-Language"] = "he";
}
```

## Block Requests That Match a Condition

```csharp
void OnBeforeRequest(Session oSession)
{
    if (oSession.uriContains(".css"))
    {
        oSession.oRequest.FailSession(404, "Blocked", "Fiddler Everywhere blocked this CSS file.");
    }
}
```

## See Also

- [Scripting Overview](slug://fiddler-script)
- [Script Hooks Reference](slug://fiddler-script-hooks)
- [Scripting Settings and Limits](slug://fiddler-script-settings)
- [Scripting Security Considerations](slug://fiddler-script-security)
