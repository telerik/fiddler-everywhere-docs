---
title: Localhost Traffic Capturing 
description: An article on how to capture and inspect localhost traffic using Fiddler Everywhere
type: how-to
slug: how-to-capture-localhost-traffic
publish: true
res_type: kb
---

#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |

#### Description

Traffic sent to [http://localhost](http://localhost) or [http://127.0.0.1](http://127.0.0.1) is not captured when using some browsers like Google Chrome or Firefox even though Fiddler Everywhere **Capturing** is turned on.

## Solution

To solve this issue, use either of the following approaches:

- [Use the machine name](#using-machine-name) instead of **localhost**. 
- [Use one of the specially provided aliases](#using-aliases) in Fiddler Everywhere. 

>Both solutions require that Fiddler Everywhere [Capturing]({%slug capture-traffic-get-started%}) is enabled.

## Using Machine Name

Use the **machine name** as an alias for _localhost_ or _127.0.0.1_ loopback addresses.

For example, let's assume the machine name is _myrootuserid_
Instead of using _localhost_ like this:
```Shell
http://localhost:8081/mytestpage.aspx
```

**Use the machine name** as follows:
```Shell
http://myrootuserid:8081/mytestpage.aspx
```

## Using Aliases

Depending on the specific scenario, you can replace _localhost_ or _127.0.0.1_ with one of the following special Fiddler aliases:

* **ipv4.fiddler** for connections using Internet Protocol version 4.
* **ipv6.fiddler** for connections using Internet Protocol version 6.
* **localhost.fiddler** to hit _localhost_ in the _Host_ header (applicable for IIS Express).

For example, traffic sent to the following URL may not be captured:

```Shell
http://localhost:8081/mytestpage.aspx
```

To capture the traffic with Fiddler Everywhere:

* replace _localhost_ with the **ipv4.fiddler** alias to hit _localhost_ on an **IPv4** adapter:

    ```Shell
    http://ipv4.fiddler:8081/mytestpage.aspx
    ```

* replace _localhost_ with the **ipv6.fiddler** alias to hit _localhost_ on an **IPv6** adapter:

    ```Shell
    http://ipv6.fiddler:8081/mytestpage.aspx
    ```

* replace _localhost_ with the **localhost.fiddler** alias to hit _localhost_ in the _Host_ header:

    ```Shell
    http://ipv4.fiddler:8081/mytestpage.aspx
    ```

## Filter Localhost Traffic

While using one of the above solutions to capture localhost requests, the traffic will be captured in the Live Traffic list, and as host name, the loopback address will be displayed (usually **127.0.0.1**). To filter by the **Host** column so that only localhost traffic is displayed, you will need to enter the loopback address as host value and not the aliases used in the browsers.

![Example Localhost filtering](../images/kb/localhost-filtering.png)