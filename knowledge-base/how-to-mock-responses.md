---
title: How to Create Custom Responses
description: An article on creating manually crafted responses, mock status codes, and use external files with predefined responses.
type: how-to
slug: using-custom-responses
tags: Fiddlermanually crafted response, Fiddler Everywhere dat file, mocking status codes, modifying server response, Auto Responder files, DAT files
publish: true
res_type: kb
---


#### Environment

|   |   |
|---|---|
| Product  | Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |

#### Description

As developers, you frequently need to simulate and test various user conditions to ensure the client-side experience doesn't suffer due to unexpected issues. With **Fiddler Everywhere**, you could modify the current response (HTML, JS, JSON) previously returned by the server. This article explains how to achieve that via **Return manually crafted response** or via **Choose saved response file...** actions of the [**Auto Responder**]({%slug auto-responder-general%}).

## Manually crafted response


1. Open the [**Auto Responder**]({%slug auto-responder-general%})
2. Create a new rule via the **Add new rule** button.
3. Add the **MATCH** condition (e.g., https://www.example.com)
4. Add the **ACTION** rule. In this case choose **Return manually crafted response** from the dropdown and enter the following:
    ```JSON
    HTTP/1.1 502 Unreachable Server
    Date: Fri, 25 Jan 2013 16:49:29 GMT
    FiddlerTemplate: True
    Content-Type: text/html
    Content-Length: 114

    Fiddler: HTTP/502 unreachable server.      

    {"errors": "Hey, hey - the server is unreachable at this moment!"}
    ```
    The newly created rule should look like this:
    ![Manually crafted response to mock 502 status code and error message](../images/kb/dat-files/manually-crafted-502.png)

5. Finally, enable the Auto Responder, activate the newly created rule, and send the request. As a result, the request to https://www.example.com will now return status code 502 with your custom error message. Congratulations - you have just mocked a 502 status code response!
    ![Manually crafted response to mock 502 status code and error message](../images/kb/dat-files/manually-crafted-502-inspector.png)

## DAT Files