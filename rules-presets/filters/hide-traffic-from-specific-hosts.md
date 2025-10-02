---
title: Hide Traffic from Specific Hosts
description: "Hide HTTPS traffic for specific hosts while using Fiddler's rules."
slug: adv_hide_specific_hosts
position: 25
---

# Hiding Traffic from Specific Hosts

In some occasions, you would like to temporary hide traffic from specific hosts. With Fiddler Everywhere, you can easily create rules that limit the captured traffic so that you can see and concentrate only on the sessions that matter.

## Creating a "Hide Traffic From Specific Hosts" Rule

This example shows how to create a rule named "Hide Traffic From Specific Hosts" that hides all captured traffic except for traffic generated from the specified host.

Create a "Hide Traffic From Specific Hosts" rule that sets the following matching conditions and actions through the [Rules Builder](slug://modify-traffic-get-started).

1. Create a matching condition that uses the "When **all these conditions** are met **any number of times**" pattern. 
1. For the matching condition, match by a **URL** that uses a regular expression for addresses that contain `google.com` and `example.com`.
    ```regex
    google\.com|example\.com
    ```
1. Create a **Do Not Show** action.
    >important The **Do Not Show** action is final. No other action or active rule placed lower in the Rules list will be executed.

This sample Fiddler rule hides all sessions containing `google.com` and `example.com` in their URLs.

![Creating "Hide Traffic From Specific Hosts" rule](./images/adv-hide-specific-hosts.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Hide Traffic From Specific Hosts" rule](./images/adv-hide-specific-hosts-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/hide-specific-hosts" target="_blank">"Hide Traffic From Specific Hosts"</a> rule as a FARX file, which you can import through the **Rules** toolbar.
  
## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...](slug://modify-traffic-get-started)
* [Learn more about all rules presets in Fiddler Everywhere here...](slug://adv_techniques_fiddler)
* [Learn more on how to organize your rules here...](slug://rulesbuilder-get-started)
* [Learn more about the matching conditions here...](slug://fiddler-rules-actions#conditions)
* [Learn more about the supported actions here...](slug://fiddler-rules-actions#actions)
* [Learn more about final and non-final rules here...](slug://fiddler-rules-actions#final-and-non-final-actions)
* [Learn more about using breakpoints here...](slug://rulesbuilder-breakpoints)