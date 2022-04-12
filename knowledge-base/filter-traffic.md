---
title: Filtering Traffic
description: "Learn how to filter the traffic to minimize the output in Live Traffic"
type: how-to
slug: how-to-filter-traffic
publish: true
res_type: kb
---

## Environment

|   |   |
|---|---|
| Product   |
| Product Version | Fiddler Everywhere 1.0.0 and above  |


## Description


When the [system capturing]({%slug capture-traffic-get-started%}#system-capturing) is enabled, Fiddler Everywhere sets itself as a system proxy. That means that all HTTP/HTTPS/WebSocket traffic from client applications that respect the system proxy will be captured and output as session entries in the [**Live Traffic list**]({%slug web-sessions-list%#live-traffic-list). Modern applications are often generating hundreds and even thousands of requests, which might pollute your list with a lot of unwanted information. This article reveals some of the options you can use to filter the captured traffic.


## Solution

### Column Filters

Each column from the [**Live Traffic list**]({%slug web-sessions-list%#live-traffic-list) has its own [filtering menu]([%slug web-sessions-list%]#filtering-options). Each filter condition contains different logical operations (for example, **contains**, **starts with**, **ends with**, **is equal to**, etc.) to combine with the filter value (string, number, booleand depwending on the column type). You can apply up-to two filter conditions per each column filter.

Below, you will find some column filters examples and a short description of their use.

#### Filter by URL Column

Perhaps, one of the most common scenarios is to observe traffic from a single API endpoint or single domain name.

![Filter by URL](../images/kb/filters/fcolumn-url.png)


#### Filter by Process Column

Use the **Process** column to filter traffic from a specific application.

![Filter by Process](../images/kb/filters/fcolumn-process.png)


#### Filter by Client IP Column

When Fiddler Everywhere captures traffic only from the host machine, the **Client IP** column will always have an identical value (usually localhost address such as **:ffff:127.0.0.1**). However, that is not the case when Fiddler captures traffic from multiple hosts (through **Allow remote computers to connect** and the remote machines are set to sue the Fiddler proxy). Here is where filtering by the **Client IP** column is beneficial - it allows you to filter the traffic that comes from a specific IP.

![Filter by Client IP](../images/kb/filters/fcolumn-client-ip.png)


#### Filter by Remote IP Column

When you filter by domain name or specific API endpoint, you can still observe some sessions (containing the filter term) coming from third parties like Google Analytics, click trackers, etc. You can further restrict the output by explicitly filtering by the **Remote IP** column, which indicates the server's IP address used for this request.

![Filter by Remote IP](../images/kb/filters/fcolumn-remote-ip.png)



### Advanced Filters

You can apply complex filtering solutions with the **Advanced Filters** toolbar option. You can create multiple filtering conditions and combine them with logical operations (when all/any/none conditions are met), use regular expressions, and track in real-time if the filters match captured sessions.

![Multiple advanced filter conditions](../images/kb/filters/adv-filters.png)

The example above demonstrates five filter conditions that match 18 sessions in the current Live Traffic tab. The filter is applied when all conditions are satisfied, and each condition does the following:
- The first condition ( _URL > contains > fiddler-everywhere_ ) match when the URL address contains the _fiddler-everywhere_ term.
- The second condition ( _Client IP > is equal to > :ffff:127.0.0.1_) will match only the localhost IP address. The :ffff: is a subnet prefix for IPv4 (32 bit) addresses that are placed inside an IPv6 (128 bit) space.
- The third condition (_Remote IP > is equal to > ::1) will match only when the request comes from the localhost. The ::1 is the loopback address in IPv6. This specific condition is useful when testing HTTP/HTTPS sessions from a localhost development environment, but it can also be applied to any real-life IP server address.
- The fourth condition (_Response Body > Regular Expression > filter|column|ip|url_) will match only a session where the Response Body contains any terms set through the regular expression. The used regex can be interpreted as `regexp/filter|column|ip|url`
- The fifth condition (_Process > Contains > brave_) will match only requests coming from a client application in which the local OS process name contains **brave**.


### Using Predefined Browser Capturing

The [predefined browser capturing]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing) opens a separate instance of your default Chromium browser and captures traffic from that instance only. Using this option while Live traffic capturing is paused will ensure that only traffic from the browser instance is output in the Live traffic list. All additional columns and advanced filters are still applicable. 
