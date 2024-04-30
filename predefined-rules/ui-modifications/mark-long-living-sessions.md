---
title: Mark Long Living Sessions
description: "Marking Long Living Sessions while using Fiddler's rules."
slug: adv_marking_long_living_sessions
position: 10
---

# Marking Long Living Sessions


The Fiddler Everywhere user interface can be dynamically changed based on your preferences. You can highlight matched sessions through the **Mark Sessions** action, which allows you to set the background and the text color.

## Creating a "Mark Long Living Sessions" Rule

Create an "Mark Long Living Sessions" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **Session Type** that uses string values that match the desired session's types. For demonstration purposes, we match **WebSocket**, **gRPC**, **RPC**, **Socket.IO**, and **Server-Side Events** sessions.

- Create a **Mark Session** action and set the preferred background and foreground (text) colors.

![Creating "Mark Long Living Sessions" rule](../../images/advanced/mark-long-living-sessions.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Mark Long Living Sessions" rule](../../images/advanced/mark-long-living-sessions-active.png)

>tip You can create the rule and then use the **Play** button to immediately apply the new UI effect to all captured sessions in the Live Traffic grid.

The link below provides a ready-to-use rule for download as a FARX file, which you can import through the Rules toolbar.

[A "Mark Long Living Sessions" rule as FARX file](https://github.com/telerik/fiddler-everywhere/rules/tooling/mark-long-living-sessions)
 
