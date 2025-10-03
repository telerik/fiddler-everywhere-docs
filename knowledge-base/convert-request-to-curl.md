---
title: Converting Composed Fiddler Everywhere Requests to cURL
description: "Learn how to convert composed requests to cURL through the Fiddler Everywhere web-debugging application."
type: how-to
slug: how-to-convert-request-to-curl
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |  Fiddler Everywhere  |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [cURL](https://curl.se/) |
| Supported OS | macOS, Linux, Windows |

## Description

Many developers, support engineers, and end-users are familiar with the [cURL](https://curl.se/) as a fast tool for executing and managing requests. How can I easily convert a request that was generated in the [**Composer**](slug://composer-tab) to a cURL script?

## Solution

Fiddler Everywhere version 4.0.0 and above provides an automated export as cURL script through the [Live Traffic grid context menu](slug://web-sessions-list#context-menu-options).

To export a session as cURL:

- Select the captured session.
- Open the context menu and choose **Copy > Copy as cURL**

>tip The "Copy as cURL" command will copy request bodies only when the request header Content-Type is set to `application/x-www-form-urlencoded` or `multipart/form-data` and will intentionally skip all other request and response bodies. The main reason for this is that the content of the HTTP body can be (and often is) quite large, which makes it impossible to put it in the clipboard. To transfer HTTP bodies of other sessions use the **Save Request Body to file** and **Save Response Body to file** inspector options.

## Solution (Obsolete)

The [**Composer**](slug://composer-tab) provides options for creating and executing your requests. Each executed request is added to the [**Live Traffic** grid](slug://web-sessions-list) as a new session entry.

To convert a request created in the **Composer**:

1. [Create and execute your request in the **Composer**](slug://composer-get-started).
1. Open the [**Live Traffic** grid](slug://web-sessions-list) and select the generated session from the executed request above.
1. Open the context menu by right-clicking the session entry and go to **Export** > **Selected Sessions**.
1. From the drop-down menu, choose **cURL Script** and click **Next**.
1. Choose a name and extension for the file. Click **Save**. By default, the file name is the current date and the extension is BAT.

By default, Fiddler Everywhere saves the outputted cURL script as [a BAT file](https://fileinfo.com/extension/bat), which is appropriate for Windows usage. Linux and macOS users might want to change the default extension with the proper format for the OS&mdash;for example, to `*.sh` for the Shell script.

A cURL output generated from Fiddler Everywhere looks similar to the following sample:

```sh
curl -k -i --raw -o 0.dat "http://httpbin.org/get?theAnswer=42" -H "User-Agent: Fiddler Everywhere" -H "Host: httpbin.org"
```

- The `-k` flag allows insecure server connections when using SSL. Fiddler Everywhere adds the flag to ensure that the cURL script can be executed even with the Fiddler proxy and its certificate in place.
- Fiddler Everywhere internally uses the `-o <x>.dat` to generate different DAT files for each selected session.
- Fiddler Everywhere adds the **User-Agent** header automatically for all requests made with the **Composer**.

You are free to modify, remove and change the generated flags and parameters as per your technical requirements.
