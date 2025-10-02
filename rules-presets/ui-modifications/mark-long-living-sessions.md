---
title: Mark Long-Living Sessions
description: "Learn how to mark long-living sessions with Fiddler's rules."
slug: adv_marking_long_living_sessions
position: 10
---

# Marking Long-Living Sessions

You can dynamically change the Fiddler Everywhere user interface based on your preferences. You can highlight matched sessions through the **Mark Sessions** action and set their background and text color.

## Creating a "Mark Long-Living Sessions" Rule

Create a "Mark Long-Living Sessions" rule by setting the following actions through the [Rules Builder](slug://modify-traffic-get-started).

1. Create a matching condition that uses the "When **any of these conditions** are met **any number of times**" pattern.
1. Match by a **Protocol** that uses string values that match the desired session types. For example: **WebSocket**, **gRPC**, **RPC**, **Socket.IO**, and **Server-Side Events** sessions.
1. Create a **Mark Session** action and set the preferred background and foreground (text) colors.
    ![Creating "Mark Long-Living Sessions" rule](./images/mark-long-living-sessions.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

>tip You can create the rule and then use the **Play** button to immediately apply the new UI effect to all captured sessions in the **Live Traffic** grid.

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/mark-long-living-sessions" target="_blank">"Mark Long-Living Sessions"</a> rule as a FARX file, which you can import through the Rules toolbar.

## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...](slug://modify-traffic-get-started)
* [Learn more about all rules presets in Fiddler Everywhere here...](slug://adv_techniques_fiddler)
* [Learn more on how to organize your rules here...](slug://rulesbuilder-get-started)
* [Learn more about the matching conditions here...](slug://fiddler-rules-actions#conditions)
* [Learn more about the supported actions here...](slug://fiddler-rules-actions#actions)
* [Learn more about final and non-final rules here...](slug://fiddler-rules-actions#final-and-non-final-actions)
* [Learn more about using breakpoints here...](slug://rulesbuilder-breakpoints)