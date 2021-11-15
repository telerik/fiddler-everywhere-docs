---
title: Setting Up Fiddler Everywhere alongside Outlook
description: "Learn how to configure your proxy settings to bypass specific Microsoft endpoints so that you could use MS products like Outlook alongside Fiddler Everywhere."
type: how-to
slug: fiddler-and-outlook
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Fiddler Everywhere | 1.0.0 and above |
| 3rd-party application | Microsoft Outlook, Office365 |
| Operating System | Windows, macOS |

## Description

Some third-party applications like Microsoft Outlook are not working seamlessly alongside MITM proxies like Fiddler Everywhere.  How can I handle this issue?

## Solution

In some cases, the proxy usage in third-party applications is restricted when the traffic goes through the MITM proxy. In other cases, the applications are not handling well the dynamic change of the system proxy. The desktop application Microsofot Outlook is one example of an application that might stop working when Fiddler Everywhere acts as a system proxy. To resolve issues with Outlook not working when Fiddler is turned on, follow these steps:

- Close Microsoft Outlook. Make sure it is not running in the background. 

- Start Fiddler Everywhere and go to **Settings** > **Connections**.

- In the **Bypass Fiddler for URLs that start with:** field, enter the following addresses and click **Save**.

    ```curl
    *office.com;*office365.com;*live.com;*outlook.com;autodiscover.yourcompany.com
    ```

    Note that the last entry is a company-specific Officce365 endpoint and will differ for different Office365 users.

    ![bypassing Outlook endpoints in Fiddler](../images/kb/outlook-bypass.png)

- Start the **Live traffic** capturing in Fiddler Everywhere.

- Restart the **Microsoft Outlook** application.

That's it! After the above, the traffic generated from Outlook will bypass the Fiddler proxy.


>tip To entirely bypass an application, you need to know all the endpoints that the application uses. That might not be a trivial job and might require the bypassing to happen outside Fiddler Everywhere. For example, in the case of bypassing Office365, [the list of endpoints is dynamically changing](https://docs.microsoft.com/en-us/microsoft-365/enterprise/urls-and-ip-address-ranges?view=o365-worldwide), so you might want to use the PAC script generated by Microsoft and create your proxy that Fiddler Everywhere will chain to.