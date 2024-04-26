---
title: Show Traffic Only from Specific Hosts
description: "Show only traffic for specific hosts while using Fiddler's rules."
slug: adv_show_only_specific_hosts
position: 20
---

# Showing Only Traffic from Specific Hosts


Similar to showing only traffic from localhost, there are scenarios where you would like to test and see traffic generated from a specific hostname. With Fiddler Everywhere, you can easily create rules that limit the captured traffic so that you can see and concentrate only on the sessions that matter.


## Creating a "Show Only Host Traffic" Rule

In this example, we will create a rule named "Show Only Host Traffic" that hides all captured traffic except for traffic generated from the specified host.

Create a "Show Only Host Traffic" rule that sets the following matching conditions and actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **none of these conditions** are met **any number of times**". Note that in this rule, we will use the negative statements to match and apply actions on anything but our targets.

- Match by a **URL** that uses a regular expression to match addresses that contain **google.com** and  **example.com.**

    ```regex
    google\.com|example\.com
    ```

- Create a **Do Not Show** action.

    >important Note that the **Do Not Show** action is final, which means that no other action or active rule wplaced lower in the rules queue will be executed.

This example rule hides all sessions except those containing **google.com** or **example.com** in their URLs.

![Creating "Show Only Host Traffic" rule](../../images/advanced/adv-show-only-specific-hosts.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Show Only Host Traffic" rule](../../images/advanced/adv-show-only-specific-host-active.png)

The link below provides a ready-to-use rule for download as a FARX file, which you can import through the Rules toolbar.

[A "Show Only Host Traffic" rule as FARX file](https://github.com/telerik/fiddler-everywhere/rules/filters/show-only-specific-hosts)
 
 