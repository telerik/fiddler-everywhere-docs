---
title: Show Only Localhost Traffic
description: "Show only localhost traffic while using Fiddler's rules."
slug: adv_show_only_localhost
position: 10
---

# Showing Only Localhost Traffic

A typical scenario for many software engineers is to work and test in a local environment. Web applications are often using localhost deployment before testing in production.

With Fiddler Everywhere, you can easily create rules that allow you to limit the captured traffic so that you can see and concentrate only on the sessions that matter.

## Creating a "Show Only Localhost Traffic" Rule

This example shows how to create a rule named "Show Only Localhost Traffic" that hides all captured traffic except for traffic generated from the **localhost** host or the local loopback address **127.0.0.1**.

Create a "Show Only Localhost Traffic" rule that sets the following matching conditions and actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

1. Create a matching condition that uses the "When **none of these conditions** are met **any number of times**" pattern. This rule uses the negative statements to match and apply actions on anything but the desired targets.

1. For the matching condition, match by a **Host** that contains **localhost** and by a **Host** that contains **127.0.0.1**.

1. Create a **Do Not Show** action. 

    >important The **Do Not Show** action is final. No other action or active rule placed lower in the rules queue will be executed.

This sample Fiddler rule hides all sessions except those containing **localhost** and **127.0.0.1** in their hosts.

![Creating "Show Only Localhost Traffic" rule](../../images/advanced/adv-show-only-localhost.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Show Only Localhost Traffic" rule](../../images/advanced/adv-show-only-localhost-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/show-only-localhost" target="_blank">"Show Only Localhost Traffic"</a> rule as a FARX file, which you can import through the **Rules** toolbar.
 
## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...]({%slug modify-traffic-get-started%})
* [Learn more about all rules presets in Fiddler Everywhere here...]({%slug adv_techniques_fiddler%})
* [Learn more on how to organize your rules here...]({%slug rulesbuilder-get-started%})
* [Learn more about the matching conditions here...]({%slug fiddler-rules-actions%}#conditions)
* [Learn more about the supported actions here...]({%slug fiddler-rules-actions%}#actions)
* [Learn more about final and non-final rules here...]({%slug fiddler-rules-actions%}#final-and-non-final-actions)
* [Learno more about using breakpoints here...]({%slug rulesbuilder-breakpoints%})