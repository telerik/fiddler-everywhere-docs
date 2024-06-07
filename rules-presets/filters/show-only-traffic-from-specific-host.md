---
title: Show Traffic Only from Specific Hosts
description: "Learn how to show traffic only from specific hosts while using Fiddler's rules."
slug: adv_show_only_specific_hosts
position: 20
---

# Showing Only Traffic from Specific Hosts

Similar to [showing traffic only from localhost]({% slug adv_show_only_localhost %}), there are scenarios where you would like to test and see traffic generated from a specific hostname.

With Fiddler Everywhere, you can easily create rules that limit the captured traffic so that you can see and concentrate only on the sessions that matter.

## Creating a "Show Only Host Traffic" Rule

This example shows how to create a rule named "Show Only Host Traffic" that hides all captured traffic except for traffic generated from the specified host.

Create a "Show Only Host Traffic" rule that sets the following matching conditions and actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

1. Create a matching condition that uses the "When **none of these conditions** are met **any number of times**" pattern. This rule uses the negative statements to match and apply actions on anything but the desired targets.

1. For the matching condition, match by a **URL** that uses a regular expression for addresses that contain **google.com** and **example.com**.

    ```regex
    google\.com|example\.com
    ```

1. Create a **Do Not Show** action.

    >important The **Do Not Show** action is final. No other action or active rule placed lower in the rules queue will be executed.

This sample Fiddler rule hides all sessions except those containing **google.com** or **example.com** in their URLs.

![Creating "Show Only Host Traffic" rule](../../images/advanced/adv-show-only-specific-hosts.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Show Only Host Traffic" rule](../../images/advanced/adv-show-only-specific-host-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/show-only-specific-hosts" target="_blank">"Show Only Host Traffic"</a> rule as a FARX file, which you can import through the **Rules** toolbar.
 
## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...]({%slug modify-traffic-get-started%})
* [Learn more about all rules presets in Fiddler Everywhere here...]({%slug adv_techniques_fiddler%})
* [Learn more on how to organize your rules here...]({%slug rulesbuilder-get-started%})
* [Learn more about the matching conditions here...]({%slug fiddler-rules-actions%}#conditions)
* [Learn more about the supported actions here...]({%slug fiddler-rules-actions%}#actions)
* [Learn more about final and non-final rules here...]({%slug fiddler-rules-actions%}#final-and-non-final-actions)
* [Learn more about using breakpoints here...]({%slug rulesbuilder-breakpoints%})