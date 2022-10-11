---
title: Filtering Traffic
description: "Learn how to filter the captured traffic to minimize the output in Live Traffic when working with the Fiddler Everywhere application."
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

Fiddler Everywhere sets itself as the operating system proxy once the [system capturing]({%slug capture-traffic-get-started%}#system-capturing) activates. The application captures and outputs all HTTP/HTTPS/WebSocket traffic from client applications that respect the system proxy. The [**Live Traffic list**]({%slug web-sessions-list%}#live-traffic-list) displays the traffic as session entries.

Modern applications often generate hundreds or even thousands of requests, which might pollute your session list with lots of unwanted information. This article reveals some of the options you can use to filter the captured traffic or lower the amount of captured traffic.

- [Filtering through column filters](#column-filters)
- [Filtering through Filters toolbar option](#filters)
- [Turn off the global capturing and use a single browser instance](#using-predefined-browser-capturing)
- [Bypass requests to specific domains from using the Fiddler proxy](#bypassing-the-proxy)

## Column Filters

Each column from the [**Live Traffic list**]({%slug web-sessions-list%}#live-traffic-list) has its own [filtering submenu]({%slug web-sessions-list%}#filtering-options). A filter condition contains different logical operations (for example, **contains**, **starts with**, **ends with**, **is equal to**, and so on). Each logical operation combines with the filter value, which depends on the column type and can be a string, number, boolean, or predefined value. 

![column filter menu](../images/livetraffic/columns/dots-filters.png)

Applying a column filter adds a condition to your active filter (from the **Filters** toolbar option). If no active filter is present, applying a column filter adds a condition in the **Default** filter (which, in turn, automatically activates).

When you clear a column filter, it automatically deletes its condition from the active filter. If no active filter is present, the column filter removes its condition from the **Default** filter.

## Filters

The **Filters** toolbar option enables you to apply complex filtering solutions, such as creating multiple filtering conditions, combining them with logical operations, saving filters for later reuse, and more. An active [column filter](#column-filters) automatically adds as a condition in your active filter (or in the **Default** filter if no saved filters are active).

![Filters toolbar option](../images/kb/filters/traffic-filters.png)

### Using Filters

Create and apply a filter through the **Filters** toolbar option as follows:

1. Click the **Filters** button to open the filters editor window.

1. (**Optional**) Add a filter name. 

    >tip Adding a name will allow you to save and easily reuse a filter at a later point.

1. Set one of the following filter execution criteria:

    - **all these conditions**&mdash;The rule applies when all conditions are true (logical TRUE).
    - **any of these conditions**&mdash;The rule applies when any conditions are true (logical OR).
    - **none of these conditions**&mdash;The rule applies when none of the conditions is true (logical FALSE).

    >tip Learn more about the available [**match conditions**]({%slug rules-general%}#conditions), which apply to both the filters and rule creation.

1. Add one or more match conditions based on the HTTP headers, HTTP bodies, or other specific Fiddler's columns data.

1. (**Optional**) Save the filter.

    >tip Saved filters can be easily activated and deactivated, simplifying and improving their usage. You can also duplicate, edit or remove a saved filter through the **Filters** editor.

1. Click **Apply** to close the **Filters** editor and immediately apply the newly created filter.   

All condition values connected to a **Live Traffic** column are auto-completed with the auto-completion suggestions based on the captured data. Additionally, after adding a condition, a counter will show the number of matches (from the currently captured sessions).


## Using Predefined Browser Capturing

The [predefined browser capturing]({%slug capture-traffic-get-started%}#preconfigured-browser-capturing) opens a separate instance of your default Chromium browser and captures traffic from that instance only. Using this option while **Live Traffic** system capturing is paused will ensure that only traffic from the browser instance is output in the **Live Traffic** list. All additional columns and advanced filters are still applicable. 

## Bypassing the Proxy

While bypassing the proxy is not technically related to filtering, requests to specific domains may not go through the Fiddler proxy but directly through the upstream proxy. As a result, these sessions won't pollute your **Live Traffic** tab. You can set a list of domains to bypass through the [**Connections** menu]({%slug connections-submenu%}), or you can add a URL to the bypass list while using the context menu.
