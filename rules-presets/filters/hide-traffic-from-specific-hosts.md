---
title: Hide Traffic from Specific Hosts
description: "Hide HTTPS traffic for specific hosts while using Fiddler's rules."
slug: adv_hide_specific_hosts
position: 25
---

# Hiding Traffic from Specific Hosts

In some occasions, you would like to temporary hide traffic from specific hosts. With Fiddler Everywhere, you can easily create rules that limit the captured traffic so that you can see and concentrate only on the sessions that matter.


## Creating a "Hide Traffic From Specific Hosts" Rule

In this example, we will create a rule named "Hide Traffic From Specific Hosts" that hides all captured traffic except for traffic generated from the specified host.

Create a "SHide Traffic From Specific Hosts" rule that sets the following matching conditions and actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

1. Create a matching condition that uses the "When **all these conditions** are met **any number of times**". 

1. Match by a **URL** that uses a regular expression to match addresses that contain **google.com** and  **example.com.**

    ```regex
    google\.com|example\.com
    ```

1. Create a **Do Not Show** action.

    >important Note that the **Do Not Show** action is final, which means that no other action or active rule wplaced lower in the rules queue will be executed.

This sample Fiddler rule hides all sessions containing **google.com** or **example.com** in their URLs.

![Creating "Hide Traffic From Specific Hosts" rule](../../images/advanced/adv-hide-specific-hosts.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Hide Traffic From Specific Hosts" rule](../../images/advanced/adv-hide-specific-host-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/hide-specific-hosts" target="_blank">"Hide Traffic From Specific Hosts"</a> rule as a FARX file, which you can import through the Rules toolbar.

  
## See Also

* [Learn more about the Rules functionality in FIddler Everywhere here...]({%slug modify-traffic-get-started%})
* [Learn more about all rules presets in Fiddler Everywhere here...]({%slug adv_techniques_fiddler%})
* [Learn more on how to organize your rules here...]({%slug rulesbuilder-get-started
publish: true%})
* [Learn more about the matching conditions here...]({%slug fiddler-rules-actions%}#conditions)
* [Learn more about the supported actions here...]({%slug fiddler-rules-actions%}#actions)
* [Learn more about final and non-final rules here...]({%slug fiddler-rules-actions%}#final-and-non-final-actions)