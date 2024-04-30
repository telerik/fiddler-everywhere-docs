---
title: Modify Response Body
description: "Modify an HTTP Response by inserting HTML element while using Fiddler's rules."
slug: adv_modify_image_url
position: 10
---


# Modifying Response Bodies

One of the most common testing practices is quickly changing a piece of code or a resource and rebuilding it to visualize the results. However, that can be time-consuming if the rebuild means deploying your application online. With Fiddler Everywhere, you can quickly modify the content of the received HTTP responses by inserting, substituting, or entirely changing the targeted entries. This article will showcase how to create a rule that **modifies the response body by inserting custom HTML**.

## Creating a "Insert HTML" Rule

Create an "Insert HTML" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **URL** that uses a string value to match the desired URL. For demonstration purposes, we match **example.com**.

- Create an **Update Response Body** action and use the **Find and Replace** string modifier. For demonstration purposes, we will find the H1 HTML element and insert our image element like `<img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Progress_Software_logo.svg">`.

![Creating "Insert HTML" rule](../../images/advanced/adv-modify-insert-html.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Insert HTML" rule](../../images/advanced/adv-modify-insert-html-active.png)

The link below provides a ready-to-use rule for download as a FARX file, which you can import through the Rules toolbar.

[A "Insert HTML" rule as FARX file](https://github.com/telerik/fiddler-everywhere/rules/tooling/modify-insert-html)
 
 