---
title: Block Specific Processes
description: "Blocking HTTPS traffic from specific processes while using Fiddler's rules."
slug: adv_block_traffic_processes
position: 30
---

# Blocking Traffic to Specific Processes



With Fiddler Everywhere, you can create a rule that automatically blocks traffic from any matched processes by forcibly closding the ongoing HTTP connection.

## Creating a "Block Traffic to Specific Processes" Rule

Create a "Block Traffic to Specific Processes" rule, by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

- Match by a **Process** where the string value defines the targeted process by its name. In the example below, we will match different browsers on macOS while using the following regular expression **com\.apple\.webkit|chrome|msedge**. Note that the process name might vary depending on the used operating system and version of the client application.

- Create a **Close Non Gracefuly** action.

An example rule that matches all sessions where the proces contains one of the string literals set thorugh the regular expression and closes the connection forcibly.

![Creating "Block Traffic to Specific Processes" rule](../../images/advanced/adv-block-specific-processes.png)

>tip The blocking actions are not final can be combined with other actions like **Do Not Show** which will effectively block and hide the traffic from the Fiddler's live traffic grid.

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Block Traffic to Specific Processes" rule](../../images/advanced/adv-block-specific-processes-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/block-traffic-to-specific-processes" target="_blank">"Block Traffic to Specific Processes"</a> rule as a FARX file, which you can import through the Rules toolbar.

 
 