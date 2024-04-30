---
title: Create Redirect 307
description: "Creating a temporary redirect (HTTP status code 307) while using Fiddler's rules."
slug: adv_temp+redirect_307
position: 60
---

# 307 Internal Redirect

The redirect status codes (3xx) are indicators that a page or resource has been moved (temporarily or permanently) from its original destination. During server updates, redesigns, and other application changes, developers often use the [temporary redirect **307**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307) also known as internal redirect. The 307 redirect points users to new URLs while using the `location` header, while at the same time indicating (to search engines) that the change is only temporary, which helps in improving the SEO results. With Fiddler Everywhere, you can easily create a rule that redirects traffic with status code 307.

## Creating a "Redirect to URL with 307" Rule

Create a "Redirect to URL with 307" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **Method** where the string value equals the desired HTTP method. In the example below, we'll match a **GET** method.

- Match by a **Method** where the string value defines the targeted hosts. In the example below, we'll use a regular expression that matches the **example.com** domain.

- Create an **Update Status Code** action and set **307 Internal Redirect**.

- Create an **Update Response Header** action and set the **Location** header to the desired new value. In the example below, we'll match `https://www.example.com`.

This example rule matches all sessions where the host is **example.com** and then creates a temporary redirect 307.

![Creating "Redirect to URL with 307" rule](../../images/advanced/adv-redirect-utl-307.png)


Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Redirect to URL with 307" rule](../../images/advanced/adv-redirect-utl-307-active.png)

The link below provides a ready-to-use rule for download as a FARX file, which you can import through the Rules toolbar.

[A "Redirect to URL with 307" rule as FARX file](https://github.com/telerik/fiddler-everywhere/rules/tooling/redirect-utl-307)
 
 