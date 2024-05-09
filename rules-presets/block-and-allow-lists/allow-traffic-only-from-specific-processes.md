---
title: Allow Specific Processes
description: "Allowing HTTPS traffic from specific processes while using Fiddler's rules."
slug: adv_allow_traffic_processes
position: 40
---

# Allowing Traffic from Specific Processes


With Fiddler Everywhere, you can create a rule that automatically allows traffic only from specific processes and forcibly closes HTTP connections triggered from any other process.

## Creating a "Allow Traffic from Specific Processes" Rule

Create a "Allow Traffic from Specific Processes" rule, by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **none of these conditions** are met **any number of times**". Note that we are using the negative statement (**none...**), which means that the action will be applied to all but the matched entries. 

- Match by a **Process** where the string value defines the targeted process by its name. In the example below, we will match different browsers on macOS while using the following regular expression **com\.apple\.webkit|chrome|msedge**. Note that the process name might vary depending on the used operating system and version of the client application.

- Create a **Close Non Gracefuly** action.

An example rule that matches all sessions where the proces contains one of the string literals set thorugh the regular expression and then closes the connections made by any other unmatched process.

![Creating "Allow Traffic from Specific Processes" rule](../../images/advanced/adv-allow-only-specific-processes.png)

>tip The blocking actions are not final can be combined with other actions like **Do Not Show** which will effectively block and hide the traffic from the Fiddler's live traffic grid.

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Allow Traffic from Specific Processes" rule](../../images/advanced/adv-allow-only-specific-processes-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/allow-traffic-only-from-specific-processes/" target="_blank">"Allow Traffic from Specific Processes"</a> rule as a FARX file, which you can import through the Rules toolbar.

 
 