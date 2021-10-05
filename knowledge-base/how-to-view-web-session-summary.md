---
title: Viewing Web Session Summaries
description: "Learn how to capture and inspect web traffic by using the Fiddler Everywhere web-debugging client."
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

Each __Session__ captured by Fiddler Everywhere has multiple attributes ordered in columns. Where can I find a detailed list of the columns available in **Live Traffic** and the information extracted from the value of each column? How can I use them to identify HTTP-related issues, track, and debug my website performance, and leave custom comments?

## Solution

This section lists the available **Live Traffic** columns and the type of information their data provides.

### ID(#)

An auto-generated identification number for the currently listed sessions.

### Result

Indicates the HTTP status codes of the response. A server issues the status codes in response to a client's request in the form of a three-digit number. The first digit of the status code specifies one of five standard classes of responses.

- __1xx__ informational response&mdash;The request was received, a continuing process.
- __2xx__ successful&mdash;The request was successfully received, understood, and accepted.
- __3xx__ redirection&mdash;Further action needs to be taken to complete the request.
- __4xx__ client error&mdash;The request contains bad syntax or cannot be fulfilled.
- __5xx__ server error&mdash;The server failed to fulfill a valid request.

The full list of all response status code is available in the [HTTP/1.1 status code definition article](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).

### Protocol

Indicates the used protocol, which can be __HTTP__ (Hypertext Transfer Protocol) or __HTTPS__ (secure HTTP). The __HTTPS__ is HTTP but with an added secure layer, which is usually TLS (or SSL). The secure layer encrypts the standard HTTP requests and responses, making them far more reliable than the plain-text HTTP.

Fiddler can decode the encrypted content, but you have to install a trust root certificate to enable this scenario. Once you install it and the HTTPS capturing is enabled, Fiddler is effectively a "man-in-the-middle" and can decode encrypted sessions by switching on the __Decode__ button.

### Host

The column inicates the hostname and the port of the server to which the request was sent.

### URL

The column contains the URL path, file, and query string from the request.

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

### Body

The column shows the number of bytes in the response body.

### Caching

The column displays the values (if any) from the __Cache-Control__ and __Expires__ headers. If both headers are present, the column will display first the values from __Cache-Control__ and then the values for the __Expires__ header, separated by a semicolon.

The __Cache-Control__ header contains instructions for caching (for both requests and responses).

The following example demonstrates a standard __Cache-Control__ header.

```
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
```

The __Expires__ header contains the date/time after which the response is considered invalid. When the __Expires__ header has an invalid date value (for example, __0__ or __-1__), the expiration date is in the past and the resource is already considered expired.

The following example demonstrates a standard __Expires__ header.

```
Expires: Fri, 20 Apr 2020 19:00:00 GMT
```

In a scenario where a __Cache-Control__ header with __max-age__ or __s-maxage__ is set, the value from __Expires__ will be ignored.

### Content-Type

The __Content-Type__ is the header which originates from the response.

The __Content-Type__ header is an indication of the media type of the resource. It is used with requests of the __POST__ and __PUT__ types where the client indicates to the server the type of data that is sent. The __Content-Type__ header supports the __media-type__, __charset__, and __boundary__ directives whose values are separated in the column by a semicolon. An example for a __Content-Type__ header is `Content-Type: application/json;charset=UTF-8`.

You can use different `media-type` values to set the type of the passed resource explicitly. For more information, refer to the [common `media-types`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) variants.

### Process

__Process__ is the local OS process from which the traffic has originated.

The following example lists sample __Process__ values.

```
Process: chrome:54000
Process: outlook: 12564
Process: teams:18352
```

### Comments

__Comments__ is the field for showing the custom comment.

This column will have a value only if the comment was previously added, for example, when looking into a list of [shared sessions]({%slug saved-sessions-tab%}) with already added comments, or when you explicitly add a comment through [__Comment__ in the context menu]({%slug web-sessions-list%}#comment).
