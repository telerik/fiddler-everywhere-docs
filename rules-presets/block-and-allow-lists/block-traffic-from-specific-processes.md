---
title: Block Specific Processes
description: "Blocking HTTPS traffic from specific processes while using Fiddler's rules."
slug: adv_block_traffic_processes
position: 30
---

# Blocking Traffic from Specific Processes

With Fiddler Everywhere, you can create a rule that automatically blocks traffic from any matched processes by forcibly closing the ongoing HTTP connection.

## Creating a "Block Traffic from Specific Processes" Rule

Create a "Block Traffic from Specific Processes" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

1. Create a matching condition that uses the "When **all these conditions** are met **any number of times**" pattern. 

1. Match by a **Process** where the string value defines the targeted process by its name. The process name varies depending on the used operating system and version of the client application.<br/>The example below matches different browsers on macOS while using the following regular expression: **com\.apple\.webkit|chrome|msedge**.

1. Create a **Close Non Gracefully** action.

This sample Fiddler rule matches all sessions where the process contains one of the string literals set through the regular expression and closes the connection forcibly.

![Creating "Block Traffic to Specific Processes" rule](../../images/advanced/adv-block-specific-processes.png)

>tip The blocking actions are not final and can be combined with other actions. [Learn more about final and non-final actions here.]({%slug fiddler-rules-actions%})

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Block Traffic to Specific Processes" rule](../../images/advanced/adv-block-specific-processes-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/block-traffic-to-specific-processes" target="_blank">"Block Traffic to Specific Processes"</a> rule as a FARX file, which you can import through the Rules toolbar.

## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...]({%slug modify-traffic-get-started%})
* [Learn more about all rules presets in Fiddler Everywhere here...]({%slug adv_techniques_fiddler%})
* [Learn more on how to organize your rules here...]({%slug rulesbuilder-get-started%})
* [Learn more about the matching conditions here...]({%slug fiddler-rules-actions%}#conditions)
* [Learn more about the supported actions here...]({%slug fiddler-rules-actions%}#actions)
* [Learn more about final and non-final rules here...]({%slug fiddler-rules-actions%}#final-and-non-final-actions)
* [Learn more about using breakpoints here...]({%slug rulesbuilder-breakpoints%})