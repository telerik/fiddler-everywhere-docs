---
title: Show Traffic Only from Specific Processes
description: "Show only traffic for specific processes and applications while using Fiddler's rules."
slug: adv_show_only_specific_processes
position: 30
---

# Showing Only Traffic from Specific Processes

By default, when Fiddler Everywhere acts as an intermediate proxy, it will capture and show all traffic that goes through the system proxy. That could overwhelm users as the captured traffic could contain thousands of sessions from multiple applications running in the background. Almost every modern-day application makes some request, so you will notice traffic from all sorts of processes and applications like antivirus tools, firewalls, mail and chat clients, IDEs, and even software for maintaining your keyboard's RGB lights can issue an HTTP request.

With Fiddler Everywhere, you can easily create a rule to show traffic from specific processes and applications.

## Creating a "Show Only Traffic from Specific Processes" Rule

In this example, we will create a rule named "Show Only Traffic from Specific Processes" that hides all captured traffic except for traffic generated from a Chromium-based browser.

Create a "Show Only Traffic from Specific Processes" rule that sets the following matching conditions and actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create a matching condition that uses the "When **none of these conditions** are met **any number of times**". Note that in this rule, we will use the negative statements to match and apply actions on anything but our targets.

- Match by a **Process** that uses a regular expression to match an application with a list of specific process names.

    ```regex
    com\.apple\.webkit|chrome|msedge
    ```

    >tip The above example serves as a basic demonstration that can be easily modified. For example, you can change the negative **none of these conditions** to **any of these conditions**, effectively hiding the traffic for the processes specified in the regular expression (as demonstrated [here]({%slug adv_hide_specific_processes%})). The regular expression is also for demonstration purposes—in real life, you can create your own regex or directly use a string value with **Contains** or another string modifier.

- Create a **Do Not Show** action.

    >important Note that the **Do Not Show** action is final, which means that no other action or active rule wplaced lower in the rules queue will be executed.

This example rule hides all sessions except those coming from a Chromium-based browsers likke Microsoft Edge, or Google Chrome.

![Creating "Show Only Traffic from Specific Processes" rule](../../images/advanced/adv-show-only-specific-processes.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Show Only Traffic from Specific Processes" rule](../../images/advanced/adv-show-only-specific-processes-active.png)

The link below provides a ready-to-use rule for download as a FARX file, which you can import through the Rules toolbar.

[A "Show Only Traffic from Specific Processes" rule as FARX file](https://github.com/telerik/fiddler-everywhere/rules/filters/show-only-specific-processes)
 
 