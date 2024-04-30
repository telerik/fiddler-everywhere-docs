---
title: Map Remote URL
description: "Creating a transparent redirect to remote location (a.k.a. mapping remote URL) while using Fiddler's rules."
slug: adv_map_remote_url
position: 10
---

# Mapping Remote Sources


Developers often need to test partial changes to a site from testing (staging) environments to production and via verse. Deploying small changes can be a burden, especially if you have complex infrastructure and the build time takes longer. With a proxy tool in the middle, you can map local and remote resources, which enables you to quickly and efficiently test (mock) changes on the fly. With Fiddler Everywhere, you can easily create a rule that redirects or maps traffic to and from remote hosts while enabling you to mock HTTP responses so that they are transparently served to client applications.

## Creating a "Map Remote (URLs)" Rule

Create a "Map Remote (URLs)" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **URL** that uses a string value to match the desired URL (for demonstration purposes, **example.com**, but it could also match **localhost** or a more specific path).

- Create an **Update URL** action and set the desired new target URL (for demonstration purposes, **google.com**, but it could also match **localhost** or another more specific path).

This example rule matches all sessions where the host is **example.com** and redirects (maps) to **google.com**.

![Creating "Map Remote (URLs)" rule](../../images/advanced/adv-map-remote-urls.png)


Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Map Remote (URLs)" rule](../../images/advanced/adv-map-remote-urls-active.png)

The link below provides a ready-to-use rule for download as a FARX file, which you can import through the Rules toolbar.

[A "Map Remote (URLs)" rule as FARX file](https://github.com/telerik/fiddler-everywhere/rules/tooling/rmap-remote-utls)
 
 