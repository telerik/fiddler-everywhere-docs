---
title: View Sessions Summary
slug: web-session-summary
tags: Web Sessions, Fiddler Everywhere sessions, captured traffic, inspect sessions, fiddler sessions, Fiddler Live Traffic
position: 20
publish: false
---

## View Sessions Summary

Each __Session__ captured by Fiddler Everywhere has multiple attributes ordered in columns. Use these to identify HTTP related issues, to track and debug your site performance, and to leave custom comments.

## \# (ID) 

An auto-generated identification number for the currently listed sessions.

## Result

Indicates the HTTP status code from the response. A server issues the status codes in response to a client's request made to the server and represented by a three-digit number. The first digit of the status code specifies one of five standard classes of responses. 

- __1xx__ informational response – the request was received, continuing process
- __2xx__ successful – the request was successfully received, understood, and accepted
- __3xx__ redirection – further action needs to be taken to complete the request
- __4xx__ client error – the request contains bad syntax or cannot be fulfilled
- __5xx__ server error – the server failed to fulfill a valid request

Full list of all response status code is available at [the HTTP/1.1 status code definition article](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)

## Protocol

Indicates the used protocol, which can be __HTTP__ (Hypertext Transfer Protocol) or __HTTPS__ (secure HTTP). The __HTTPS__ is HTTP but with an added secure layer, which is usually TLS (or SSL). The secure layer encrypts the standard HTTP requests and responses, making them far more reliable than the plain-text HTTP. Fiddler can decore the encrypted content, but for this to happen, you must install a trust root certificate. Once the trust certificate is installed and the HTTPS capturing is enabled, Fiddler is effectively a "man-in-the-middle" and can now decode encrypted sessions by switching on the __Decode__ button.

## Host

The hostname and the port of the server to which the request was sent.

## URL

The URL path, file, and query string from the request.

## Method 

The HTTP method used by the request (__GET__, __POST__, etc.). The HTTP methods are used to set the desired action that needs to be applied to a given resource. 

- __GET__: The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
- __HEAD__: The HEAD method asks for a response identical to that of a GET request, but without the response body.
- __POST__: The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
- __PUT__: The PUT method replaces all current representations of the target resource with the request payload.
- __DELETE__: The DELETE method deletes the specified resource.
- __CONNECT__: The CONNECT method establishes a tunnel to the server identified by the target resource.
- __OPTIONS__: The OPTIONS method is used to describe the communication options for the target resource.
- __TRACE__: The TRACE method performs a message loop-back test along the path to the target resource.
- __PATCH__: The PATCH method is used to apply partial modifications to a resource.

## Body

Shows the number of bytes in the response body.

## Caching

Values (if any) from __Cache-Control__ and __Expires__  headers. In case, where both headers are present, the column will display first the values from __Cache-Control__ and then the values for __Expires__ header (separated by semicolon).

The __Cache-Control__ header is containing instructions for caching (for both requests and responses). 
An example of standard __Cache-Control__ header:
```
Cache-Control: no-cache, no-store, max-age=0, must-revalidate
```

The __Expires__ header contains the date/time after which the response is considered invalid. When the __Expires__ header has invalid date value (for example, __0__ or __-1__) that means that the expiration date is in the past, and the resource is already considered expired.
An example for standard __Expires__ header:
```
Expires: Fri, 20 Apr 2020 19:00:00 GMT
```

>tip In case, where a __Cache-Control__ header with __max-age__ or __s-maxage__ is set, then the value from __Expires__ will be ignored.


## Content-Type
The Content-Type header from the response.

The __Content-Type__ header is an indication of the media type of the resource. It is used with requests of type __POST__ and __PUT__ where the client indicates to the server the type of data that is sent. The __Content-Type__ header supports three directives (__media-type__, __charset__ and __boundary__) which values are separated in the column by a semicolon.
    An example for  __Content-Type__ header:
    ```
    Content-Type: application/json;charset=UTF-8
    ```

>tip The are many different media-types values which can be used to explicitly set the type of the passed resource. See the list of the common ones [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types).

## Process
The local OS process from which the traffic originated. Examples for  __Process__ values:
```
Process: chrome:54000
Process: outlook: 12564
Process: teams:18352
```

## Comments 
A field for showing the custom comment. 

This column will have a value only if the comment was added previously (for example, when looking into a list of [shared sessions]({%slug saved-sessions-tab%}) with already added comments) or when you explicitly add a comment (via [__Comment__ in the context menu]({%slug web-sessions-list%}#comment)).