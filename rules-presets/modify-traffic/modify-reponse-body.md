---
title: Modify Response Body
description: "Modify an HTTP Response by inserting HTML element while using Fiddler's rules."
slug: adv_modify_response_body
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

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/modify-insert-html" target="_blank">"Insert HTML"</a> rule as a FARX file, which you can import through the Rules toolbar.
 
 
 ## Creating a "Insert HTML (ReGex)" Rule

This rule effectively achives the same output as the above rule but it demonstrates how to use regular expression to parse the response body and modify its content. Create an "Insert HTML (ReGex)" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **URL** that uses a string value to match the desired URL. For demonstration purposes, we match **example.com**.

- Create an **Update Response Body** action and use the **Regular expession** modifier. For demonstration purposes, we will find the H1 HTML element thorugh the following regular expression `<div[\n\r\s\S]*?<h1>` and then insert our image element through `<div><img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Progress_Software_logo.svg"><h1>`.

![Creating "Insert HTML" rule](../../images/advanced/adv-modify-insert-html-regex.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Insert HTML" rule](../../images/advanced/adv-modify-insert-html-regex-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/modify-insert-html-regex" target="_blank">"Insert HTML via regex"</a> rule as a FARX file, which you can import through the Rules toolbar.

>tip You can combine multiple actions in a single rule, which allows you to identify different parts of the same response; note that actions are executed from top to bottom with the top action/rule with higher priority. Any final action will immediately prevent the execution of all other actions and rules that are with lower priority. However, if there are no final actions, then you can execute all actions from top to bottom, which means that the same part of the modification can be overwritten by  actions placed lower in the queue.

