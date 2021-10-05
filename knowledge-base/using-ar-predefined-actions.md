---
title: Using the Predefined Actions of the Rules Tab
description: "Learn how to use the predefined actions of he Rules tab for mocking different HTTP responses when working with the Fiddler Everywhere web-debugging client."
type: how-to
slug: fiddler-ar-actions
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product  |
| Product Version | 1.5.0 and above  |
| Operating System | macOS, Windows, and Linux |

## Description

The [**Rules** tab]({%slug rules-general%}) is a powerful debugging functionality in Fiddler Everywhere. How can I use each of the predefined actions in the **Actions** drop-down as DAT files and customize a rule by adding a [**Custom response file**](#custom-response-file) or a [**Manual Response**](#custom-manual-response)?

## Solution

The main idea behind the **Rules** tab is to provide a set of rules based on match rules and actions, which quickly mock a server response and behavior without the need to modify the server. Within seconds, you can execute many complex and different rules, and test your site against multiple scenarios.

>important All response modification actions are final. Final actions will immediately stop any other consecutive actions and rules from execution.

### Using the Predefined Actions in Rule Builder

The **Actions** drop-down menu provides several options named **XXX.dat** where **XXX** is a descriptive name of the response.

The content of each predefined DAT file is as follows:

* `200_FiddlerGif.dat`

    ```HTTP
    HTTP/1.1 200 OK
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    FiddlerTemplate: True
    Content-Length: 308
    Content-Type: image/gif

    GIF89a# #encoded string for a sample GIF follows here
    ```

* `200_SimpleHTML.dat`

    ```HTTP
    HTTP/1.1 200 OK
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Content-Length: 51

    This is a simple Fiddler-returned <B>HTML</B> page.
    ```

* `200_TransPixel.dat`

    ```HTTP
    HTTP/1.1 200 OK
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    FiddlerTemplate: True
    Content-Type: image/gif
    Content-Length: 49

    GIF89a #encoded string for a transparent GIF follows here
    ```

* `204_NoContent.dat`

    ```HTTP
    HTTP/1.1 204 No Content
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Content-Length: 0
    ```

* `302_Redirect.dat`

    ```HTTP
    HTTP/1.1 302 Redirect
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Location: http://www.fiddler2.com/sandbox/FormAndCookie.asp
    Content-Length: 0
    ```

* `303_RedirectWithGet.dat`

    ```HTTP
    HTTP/1.1 303 Redirect Using GET
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Location: http://www.fiddler2.com/sandbox/FormAndCookie.asp
    Content-Length: 0
    ```

* `304_NotModified.dat`

    ```HTTP
    HTTP/1.1 304 Not Modified
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Content-Length: 0
    ```

* `307_RedirectWithMethod.dat`

    ```HTTP
    HTTP/1.1 307 Redirect using same Method
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Location: http://www.fiddler2.com/sandbox/FormAndCookie.asp
    Content-Length: 0
    ```

* `401_AuthBasic.dat`

    ```HTTP
    HTTP/1.1 401 Authentication Required
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    WWW-Authenticate: Basic realm="Fiddler"
    Content-Type: text/html
    Content-Length: 520

    Fiddler: HTTP/401 Basic Server Auth Required.    
    ```

* `401_AuthDigest.dat`

    ```HTTP
    HTTP/1.1 401 Authentication Required
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    WWW-Authenticate: Digest realm="realm@example.com",qop="auth,auth-int",nonce="dcd98b7102dd2f0e8b11d0f600bfb0c093",opaque="5ccc069c403ebaf9f0171e9517f40e41"
    Content-Type: text/html
    Content-Length: 520

    Fiddler: HTTP/401 Digest Server Auth Required.
    ```

* `403_AuthDeny.dat`

    ```HTTP
    HTTP/1.1 403 Access Denied
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Content-Length: 520

    Fiddler: HTTP/403 Access Denied.   
    ```

* `404_Plain.dat`

    ```HTTP
    HTTP/1.1 404 Not Found
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Content-Type: text/html
    Content-Length: 520

    Fiddler: HTTP/404 Not Found
    ```

* `407_ProxyAuthBasic.dat`

    ```HTTP
    HTTP/1.1 407 Proxy Auth Required
    FiddlerTemplate: True
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    Proxy-Authenticate: Basic realm="Fiddler (just hit Ok)"
    Content-Type: text/html
    Content-Length: 520

    Fiddler: HTTP/407 Proxy Auth Required.
    ```

* `502_Unreachable.dat`

    ```HTTP
    HTTP/1.1 502 Unreachable Server
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    FiddlerTemplate: True
    Content-Type: text/html
    Content-Length: 520

    Fiddler: HTTP/502 unreachable server.
    ```

### Using the Custom Response File

The **Actions** drop-down of the **Rule Builder** provides an option to load your own custom DAT file with an entirely custom HTTP response:

1. Scroll the drop-down **Actions** menu and select **Response file**.
1. In the file selection window, load the DAT file with the custom HTTP response.
1. Click **Save** to create or update the rule.

![Response file](../images/kb/dat-files/kb-rules-response-file.png)

### Using the Custom Manual Response

Another option that the **Rule Builder** provides is to create the mocked custom HTTP response manually:

1. Scroll the drop-down **Actions** menu and select **Manual Response**.
1. Write the custom HTTP response in the text field.
1. Click **Save** to create or update the rule.

![Response file](../images/kb/dat-files/kb-rules-response-manul.png)
