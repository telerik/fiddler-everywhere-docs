---
title: Inspector Types
slug: inspector-types
tags: Fiddler inspectors types, request, response, HTTP headers, secure requests, headers, textview, webforms, cookies, raw, XML
publish: true
position: 20
---

# Inspector Types

Fiddler's Inspectors are displaying the **request** and the **response** for the selected session in the __Web Sessions__ list. The inspectors are situated in the right panel with the Request inspectors above the Response inspectors.

1. Double-click or press __Enter__ on a session (from the __Web Sessions__ list on the left). Request inspectors are shown at the top and Response inspectors are shown at the bottom (on the right panel)
![Inspectors for Traffic Monitoring](../../../images/livetraffic/inspectors/inspectors-all.png)

2. Click on desired Inspector's name (for example __Image__ or __Raw__) to switch the loaded inspector.
![Inspector types](../../../images/livetraffic/inspectors/inspectors-all-types.png)

The Inspectors allow you to view the content of each session's request and response in a variety of different formats. Fiddler supports multiple inspector types for the sessions' request (at the top) and response (at the bottom).

## Headers

The __Headers__ inspector, allows you to view the HTTP headers of the request and the response.
![Headers Inspector](../../../images/livetraffic/inspectors/inspectors-headers.png)

There are some conceptual differences between Request Headers and Response Headers, as listed below.

- Request Headers

Every HTTP request begins with plaintext headers that describe what resource or operation is sought by the client.The first line of the request (the _"Request line"_) contains three values: the HTTP method (for example __GET__), the URL path which is being requested (for example __"/index.html"__), and the HTTP version (for example __"HTTP/1.2"__). Request line can consist of one or more rows containing name-value pairs of metadata about the request and the client, such as the _User-Agent_ and _Accept-Language_.

- Response Header

Similar to an HTTP request, every HTTP response begins with plaintext headers that describe the result from the request. The first line of the response (the _"Status line"_) contains the HTTP version (for example __"HTTP/1.1"__), the response status code (for example __"200"__), and the response status text (for example __"OK"__). Following the _Status line_ are one or more lines containing name-value pairs of metadata about the response and the server, such as the length of the response file, the Content-Type, and information about how the response may be cached.


## Text

The __Text__ inspector allows you to view the request and response bodies as text. The  __Text__ inspector truncates the data it shows at the first null byte it finds, which makes it inappropriate choice for displaying binary content.

Most of the inspector is a large text area that displays the body text interpreted using the character set detected using the headers, the byte-order-marker, or an embedded META tag declaration.

![Text Inspector](../../../images/livetraffic/inspectors/inspectors-textview.png)


## Image

The __Image__ inspector (__Response only__) allows you to view the response bodies as an image. The inspector can display most common web image formats, including JPEG, PNG, and GIF, as well as less common formats like cursors, WebP, JPEG-XR, bitmaps, TIFF. The inspector does not support displaying SVG graphics (SVG responses can be viewed using the __Web__ inspector).

![Image Inspector](../../../images/livetraffic/inspectors/inspectors-image.png)


## WebForms

The __WebForms__ inspector (__Request only__) parses the request's query string and body for any HTML form-data. If a form is found, it is parsed, and the name/value pairs are displayed in the grid view. The inspector works best with _application/x-www-form-urlencoded_ data used by most simple web forms.

![WebForms Inspector](../../../images/livetraffic/inspectors/inspectors-webforms.png)


## Web

The __Web__ inspector (__Response only__) allows you to view responses in a web browser control, which provides a quick preview of how a given response may appear in a browser. The web browser control is configured to prevent additional downloads when rendering the response (to avoid flooding the __Web Sessions__ list), meaning that most images and styles will not be displayed. Additionally, scripting and navigating are blocked, providing a read-only preview.


## Cookies

The __Cookies__ inspector displays the contents of any outbound `Cookie` and `Cookie2` request headers and any inbound `Set-Cookie`, `Set-Cookie2` and `P3P` response headers.

![Cookies Inspector](../../../images/livetraffic/inspectors/inspectors-cookies.png)


## Raw

The __Raw__ inspector allows you to view the complete request and response, including headers and bodies, as text.

Most of the inspector is a large text area that displays the body text interpreted using the character set detected using the headers, the byte-order-marker, or an embedded META tag declaration.

![Raw Inspector](../../../images/livetraffic/inspectors/inspectors-raw.png)

## JSON

The __JSON__ inspector interprets the selected request or response body as a JavaScript Object Notation (JSON) formatted string, showing a tree view of the JSON object's nodes. In case when the body can't be interpreted as JSON, the tree view will remain empty (as demonstrated for the request in the screenshot below). The JSON inspector can render the data even if the request/response is compressed or has HTTP chunked encoding applied.

The inspector provides __Expand All / Collapse All__ toggle button that will expand or collapse all nodes of the JSON tree.

![JSON Inspector](../../../images/livetraffic/inspectors/inspectors-json.png)

>important If the JSON data is malformed (if, for instance, the name component of a name/value pair is unquoted), the JSON inspector will show a warning in the footer.

## XML

The __XML__ inspector interprets the selected request or response body as an Extensible Markup Language (XML) document, showing a tree view of the XML document's nodes. If the body can't be interpreted as XML, the tree view will remain empty (as demonstrated for the request in the screenshot below). Each XML element is represented as a node in the tree, and the attributes of the element are displayed in square brackets after the element's name.

![XML Inspector](../../../images/livetraffic/inspectors/inspectors-xml.png)
