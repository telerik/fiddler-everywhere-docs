---
title: Using Filters in Fiddler Everywhere for Advanced Search
description: Learn how to use filters in Fiddler Everywhere to search for specific values within request and response bodies and headers.
type: how-to
page_title: Using Filters in Fiddler Everywhere for Advanced Search
slug: using-filters-in-fiddler-everywhere-for-advanced-search
tags: fiddler-everywhere, search, filters, request body, response body, headers
res_type: kb
---

## Environment

|----------|-------|
| Product  | Fiddler Everywhere |
| Version  | 5.0.0 and above |

## Description

Fiddler Everywhere's global search option is designed to search only within the HTTP headers of captured traffic. This is because the application is optimized for performance and user experience. Searching through the potentially large HTTP body content in each captured session would be inefficient and slow.

However, you can use the filters option in Fiddler Everywhere to create your own filter and search for specific values within the request body, response body, and headers. Filters allow you to quickly narrow down your search results and find the desired information.

## Solution

To use filters for advanced search in Fiddler Everywhere, follow these steps:

1. Open Fiddler Everywhere.
1. Open the **Traffic** Pane.
1. In the toolbar, click on the "Filters" button.
1. In the filter panel, specify the match conditions for the request body, response body, and headers. For example, you can set the filter to match a specific value in both the request and response bodies.
1. Save the filter by giving it a name and clicking the "Save" button (top-right corner).
1. Apply the filter by clicking the "Apply" button (bottom-right corner).

All captured sessions will be immediately filtered based on the specified conditions, leaving only the desired results. You can turn filters on or off anytime by clicking the checkbox next to their names in the filters panel. Filters can also be edited or deleted as needed.

By using filters in Fiddler Everywhere, you can easily search for specific values within request and response bodies, providing a more targeted and efficient search experience.

## Notes

- Filters in Fiddler Everywhere allow you to create complex match conditions using various operators and logical expressions.

- Saved filters can be reused across different sessions and projects, saving you time and effort in defining filters for each search.

## See Also
- [Filterting traffic in Fiddler Everywhere](https://docs.telerik.com/fiddler-everywhere/modify-and-filter-traffic/filter-traffic)
- [Inspecting traffic with Fiddler Everywhere](https://docs.telerik.com/fiddler-everywhere/inspect-traffic/inspect-traffic)
