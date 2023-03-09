---
title: Fiddler Archive
description: "Learn more about SAZ - the native Fiddler archive format for saving captured HTTP(S) traffic."
type: how-to
slug: fiddler-saz-format
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| File Format | **SAZ** (Fiddler Archive) |
| Supported Products | Fiddler Everywhere, Fiddler Classic, FiddlerCore,  FiddlerCap |
| Supported OS | macOS, Windows, Linux |

## Description

What is a SAZ file? How do Fiddler Everywhere stores capture traffic?


## SAZ File

The SAZ abbreviation stands for **Session Archive Zip** and is the native Fiddler format used to store HTTP(S), WebSocket, and GRPC traffic. Also known as **Fiddler Archive** or **Fiddler Session Archive**, the format is officially supported by Fiddler Everywhere, Fiddler Classic, FiddlerCap, and FiddlerCore. The SAZ format uses ZIP compression and, as such, can be opened by most of the popular archiving tools. The format is backward compatible with newer versions of the SAZ format containing more information about the session snapshots.

>tip Some archiving tools like 7-Zip recognize SAZ files by default, while others need to change the file extension to ZIP.

Any SAZ files produced from Fiddler Everywhere version 4.2.0 and above contains the following:

* a **raw** folder&mdash;The **raw** folder contains several files for each captured session.

    * **sessid#_c.txt**&mdash;The file contains the raw client HTTP(S) request.

        _An example for raw client request file_
        ```txt
        GET https://expired.badssl.com/ HTTP/1.1
        Host: expired.badssl.com
        Connection: keep-alive
        sec-ch-ua: "Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"
        sec-ch-ua-mobile: ?0
        sec-ch-ua-platform: "Windows"
        Upgrade-Insecure-Requests: 1
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
        Sec-Fetch-Site: same-site
        Sec-Fetch-Mode: navigate
        Sec-Fetch-User: ?1
        Sec-Fetch-Dest: document
        Referer: https://badssl.com/
        Accept-Encoding: gzip, deflate, br
        Accept-Language: en-US,en;q=0.9,bg-US;q=0.8,bg;q=0.7
        ```

    * **sessid#_s.txt**&mdash;The file contains the raw server HTTP(S) response.

        _An example for raw server response file_
        ```xml
        HTTP/1.1 502 Bad Gateway
        Content-Length: 82269
        Connection: close
        Cache-Control: max-age=0
        Content-Type: text/html; charset=UTF-8

        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Certificate error</title>
        </head>

        <body>
            <fdl-card>
                <div class="card__background-image warning-icon"></div>
                <div class="card__background-image"></div>
            </fdl-card>
        </body>
        </html>
        ```

    * **sessid#_m.xml**&mdash;The file contains metadata, including session flags (element `SessionFlags`), certificate chain information (element `CertificateChainInfo`), socket reuse information, etc.

    * **sessid#_w.txt**&mdash;(Optional) The file contains WebSocket messages.

    * **sessid#_g.txt**&mdash;(Optional) The file contains GRPC messages.

* **[Content_Types.xml]**&mdash;A metadata file that specifies a few MIME types, so the archive is compatible with `System.IO.Packaging` or other clients that support the Open Packaging Conventions.

## Using SAZ with Fiddler Everywhere

The Fiddler Everywhere uses SAZ behind the scenes for each session explicitly saved locally or in the cloud. The application also provides options to manually export and import captured and saved traffic through the UI. 

>tip You can set the Fiddler Everywhere application as the default application for opening SAZ files through the operating system's settings (for example, on Windows 11 through **Settings > Apps > Default Apps**).

 SAZ files use the following UI options:

- Use the **Export** option from the Live Traffic context menu and then choose **Fiddler Archive (SAZ)** as format.

    ![Export SAZ from Live Traffic](../images/kb/saz/saz-export-live-traffic.png)

- Use the **Export** option from the **Sessions** list's context menu and then choose **Fiddler Archive (SAZ)** as format.

    ![Export SAZ from Lthe saved Sessions list](../images/kb/saz/saz-export-saved-sessions.png)

- Use the **Import** option from the **Sessions** list's context menu and locate the *.saz file from the OS file system.   

    ![Import SAZ into the **Sesssions** list](../images/kb/saz/saz-import-saved-sessions.png)

All session snapshots saved in the local storage are also available as SAZ files in the `.fiddler` folder. You can manually access and backup your locally saved from the following paths:

* Windows path
    ```curl
    %userprofile%\.fiddler\<unique-fiddler-user-GUID>\Snapshots
    ```

* macOS path

    ```curl
    ~/.fiddler/<unique-fiddler-user-GUID>/Snapshots
    ```

* Linux path

    ```curl
    ~/.fiddler/<unique-fiddler-user-GUID>/Snapshots
    ```

>important Deleting any SAZ files from the above local folders is irreversible and might result in data loss. Consider backing up data (manually or through the cloud save options) if you plan to delete the `.fiddler` folder or any of its subfolders.