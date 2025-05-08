---
title: Compose SOAP requests
description: "Learn how to compose SOAP requests with the Fiddler Everywhere Composer."
type: how-to
slug: fiddler-composer-soap
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product | Fiddler Everywhere |
| Operating System | Windows, macOS, Linux |

## Description

How to make a SOAP request in Fiddler Everywhere?

## Solution 

- Open [the Composer]({%slug composer-tab%}).

- Select **POST** from the request [HTTP methods drop-down menu]({%slug composer-tab%}#http-methods).

- Enter the SOAP request endpoint. For example:
    ```cURL
    http://www.dneonline.com/calculator.asmx
    ```

- Add the SOAP body.

    ```XML
    <?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
            <Divide xmlns="http://tempuri.org/">
                <intA>42</intA>
                <intB>2</intB>
            </Divide>
        </soap:Body>
    </soap:Envelope>
    ```

- Add the required headers. By default, the Fiddler's Composer automatically adds the **Content-Type** header with value **text/xml**. Change this header with the appropriate value as requested by the SOAP endpoint.

- Click **Execute** to send your SOAP request. That's it!