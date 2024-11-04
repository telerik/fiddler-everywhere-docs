---
title: Viewing Live Traffic Columns Summaries
description: "Learn details about each column in the Fiddler Everywhere's Live Traffic grid."
type: how-to
slug: how-to-view-web-session-summary
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |

## Description

Each __Session__ captured by Fiddler Everywhere has multiple attributes ordered in columns. Where can I find a detailed list of the columns available in **Live Traffic** grid and the information extracted from the value of each column? How can I use them to identify HTTP-related issues, track, and debug my website performance, and leave custom comments?

## Solution

This section lists the available **Live Traffic** grid and the type of information that they provide. Each colum can be explictly shown/hide through the **more** option (three vertical dots next to the column name). The column names are also identical to the filters in the [**Advanced Filters**]({%slug how-to-filter-traffic%}#advanced-filters) section.

### ID(#)

An auto-generated identification number for the currently listed sessions.

### Protocol

Indicates the used protocol, which can be __HTTP__ (Hypertext Transfer Protocol) or __HTTPS__ (secure HTTP). The __HTTPS__ is HTTP but with an added secure layer, which is usually TLS (or SSL). The secure layer encrypts the standard HTTP requests and responses, making them far more reliable than the plain-text HTTP.

Fiddler can decode the encrypted content, but you have to install the Fiddler certificate authority to enable this scenario. Once you install it and the HTTPS capturing is enabled, Fiddler acts as a "man-in-the-middle" and can decode encrypted sessions by toggling  **Click to show decoded body / Click to show original body** button.

### Host

The column indicates the hostname and the port of the server to which the HTTP Request was sent.

### URL

The column contains the URL path, file, and query string from the request.

### HTTP Version

The column indicates the version of the HTTP protocol used by the session. 

- __HTTP/1.1__&mdash;Both the client and the server are communicating in HTTP/1.1.
- __HTTP/2__&mdash;Both the client and the server are communicating in HTTP/2. 
- __HTTP/2 + HTTP/1.1__&mdash;The client uses HTTP/2 but the server response is HTTP/1.1.
- __HTTP/1.1 + HTTP/2__&mdash;The client uses HTTP/1.1 but the server response is HTTP/2.

### TLS Version

The column indicates the version of the TLS protocol used by the session. Suppose the established connection between the client and Fiddler uses a different TLS version than the one between Fiddler and the server. In that case, you will see a double value depicting the TLS-specific version for each connection stage.[Learn more about the TLS version specific with Fiddler here...]({%slug fe-security%}#tls-version-specifics)

- **SSL 2.0**
- **SSL 3.0**
- **TLS 1.0**
- **TLS 1.1**
- **TLS 1.2**
- **TLS 1.3**
- Double combination of all listed values (for example **TLS 1.3 + TLS 1.2**) for scenarios when the TLS version differs for the request and response. 

### Status Code

Indicates the HTTP status codes of the response. A server issues the status codes in response to a client's request in the form of a three-digit number. The first digit of the status code specifies one of five standard classes of responses.

- __1xx__ informational response&mdash;The request was received, a continuing process.
- __2xx__ successful&mdash;The request was successfully received, understood, and accepted.
- __3xx__ redirection&mdash;Further action needs to be taken to complete the request.
- __4xx__ client error&mdash;The request contains bad syntax or cannot be fulfilled.
- __5xx__ server error&mdash;The server failed to fulfill a valid request.

The full list of all response status code is available in the [HTTP/1.1 status code definition article](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

### Method

The column indicates the HTTP method used by the request (__GET__, __POST__, and so on). The HTTP methods are used to set the desired action that needs to be applied to a given resource.

- __GET__&mdash;The GET method requests a representation of the specified resource. Requests using GET will only retrieve data.
- __HEAD__&mdash;The HEAD method asks for a response identical to that of a GET request, but without the response body.
- __POST__&mdash;The POST method is used to submit an entity to the specified resource, often causing a change in the state or side effects on the server.
- __PUT__&mdash;The PUT method replaces all current representations of the target resource with the request payload.
- __DELETE__&mdash;The DELETE method deletes the specified resource.
- __CONNECT__&mdash;The CONNECT method establishes a tunnel to the server identified by the target resource.
- __OPTIONS__&mdash;The OPTIONS method is used to describe the communication options for the target resource.
- __TRACE__&mdash;The TRACE method performs a message loop-back test along the path to the target resource.
- __PATCH__&mdash;The PATCH method is used to apply partial modifications to a resource.

### Client IP

Indicates the client IP that sent this Request. The IP will often show the loopback address (`0.0.0.0`), but it will be different if multiple computers on the network are pointed to a single Fiddler Everywhere instance.

### Remote IP

Indicates the server's IP address used for this Request.

### Process

__Process__ indicates the local OS process from which the traffic has originated.

The following example lists sample __Process__ values.

```
Process: chrome:54000
Process: outlook: 12564
Process: teams:18352
```

### Body Size

The column shows the number of bytes in the response body.

### Caching

The column displays the values (if any) from the `Cache-Control` and `Expires` headers. If both headers are present, the column will display first the values from `Cache-Control` and then the values for the `Expires` header, separated by a semicolon.

The `Cache-Control` header contains instructions for caching (for both requests and responses).

The following example demonstrates a standard `Cache-Control` header.

```
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
```

The `Expires` header contains the date/time after which the response is considered invalid. When the `Expires` header has an invalid date value (for example, __0__ or __-1__), the end date is in the past and the resource is already considered expired.

The following example demonstrates a standard `Expires` header.

```
Expires: Fri, 20 Apr 2020 19:00:00 GMT
```

In a scenario where a `Cache-Control` header with `max-age` or `s-maxage` is set, the value from `Expires` will be ignored.

### Content-Type

The `Content-Type` is the header which originates from the response.

The `Content-Type` header is an indication of the media type of the resource. It is used with requests of the __POST__ and __PUT__ types where the client indicates to the server the type of data that is sent. The `Content-Type` header supports the `media-type`, `charset`, and `boundary` directives whose values are separated in the column by a semicolon. An example for a `Content-Type` header is `Content-Type: application/json;charset=UTF-8`.

You can use different `media-type` values to set the type of the passed resource explicitly. For more information, refer to the [common `media-types`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) variants.

### Request Time

Renders the time when the request was issued in format `HH:MM:SS:ms`.

### Request Date

Renders the date when the request was issued in format `MM:DD:YYYY`.

### Duration

Marks the duration of the session (from `ClientConnected` to `ServerGotResponse` events) in milliseconds.

### Rules Modified

### Comments

__Comments__ is the field for showing the custom comment.

This column will have a value only if the comment was previously added, for example, when looking into a list of shared sessions with already added comments, or when you explicitly add a comment through __Comment__ in the context menu.

## Custom Columns

Fiddler Everywhere enables you to [create custom columns]({%slug web-sessions-list%}#creating-custom-columns). These columns will display information from a pre-selected HTTP Request or Response.