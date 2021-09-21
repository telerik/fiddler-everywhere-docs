---
title: Convert composed Fiddler Everywhere requests to cURL 
description: Learn how to convert composed requests to curl through the Fiddler Everywhere application.
type: how-to
slug: how-to-convert-request-to-curl
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |
| 3rd-party tool | [cURL](https://curl.se/) |
| Supported OS | macOS, Linux, Windows |


#### Description

Many developers, support engineers, and end-users are familiar with the [cURL](https://curl.se/) as a fast tool for executing and managing requests. This article demonstrates how to easily convert a request generated in the [Composer]({%slug composer-tab%}) to a curl script.

## Convert Composed Request to cURL 

The [Composer]({%slug composer-tab%}) provides means to create and execute your requests. Each **executed** request is added in the [Live Traffic list]({%slug web-sessions-list%}) as a new session entry. To convert a request created in the Composer, execute the following steps:

- [Create and execute your request in the Composer]({%slug composer-get-started%}). 
- Open the [Live Traffic list]({%slug web-sessions-list%}) and select the generated session (from the executed request above). 
Open the context menu (right-click) with the session selected and use the **Export > Selected Sessions** option.
- From the drop-down menu, choose **cURL Script** and press **Next**.
- Choose a name and extension for the file. Press **Save**. By default, the file name is the current date and the extension is BAT.

By default, Fiddler Everywhere saves the outputted cURL script as [a BAT file](https://fileinfo.com/extension/bat), appropriate for Windows usage. Linux and macOS users might want to change the default extension with the proper format for the OS (for example, to *.sh for shell script).

## Fiddler-geneated cURL

A cURL output generated from Fiddler Everywhere looks similar to the sample below:
```cURL
curl -k -i --raw -o 0.dat "http://httpbin.org/get?theAnswer=42" -H "User-Agent: Fiddler Everywhere" -H "Host: httpbin.org"
```

- The **-k** flag allows insecure server connections when using SSL. Fiddler Everywhere adds the flag to ensure that the cURL script can be executed even with the Fiddler proxy (and its certificate) in place.
- Fiddler Everywhere internally uses the **-o <x>.dat** to generate different DAT files for each selected session.
- Fiddler Everywhere adds the **User-Agent** header automatically for all requests made through the Composer.



You are free to modify, remove and change the generated flags and parameters as per your technical requirements.
