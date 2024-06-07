---
title: Mark Static Resources
description: "Marking HTTP sessions that return static resources while using Fiddler's rules."
slug: adv_marking_static_resources
position: 30
---

# Marking Static Resources

You can dynamically change the Fiddler Everywhere user interface based on your preferences. You can highlight matched sessions through the **Mark Sessions** action and set their background and text color. For example, you can highlight all sessions that are returning static resources like images and text files.

## Creating a "Mark Scripts and JSONs" Rule

Create a "Mark Scripts and JSONs" rule by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

1. Create a matching condition that uses the "When **all these conditions** are met **any number of times**" pattern. 

1. Match by a **Response Header** where the header **Content-Type** is not empty. This matches any sessions where the header is present and has any value.

1. Match by a **Response Header** where the value of the header **Content-Type** does not equal **javascript**. This excludes dynamic content.

1. Match by a **Response Header** where the value of the header **Content-Type** does not equal **json**. This excludes dynamic content.

1. Match by **Method** of type **GET**.

1. Create a **Mark Session** action and set the preferred background and foreground (text) colors.

This sample Fiddler rule highlights all HTTP sessions where the **Content-Type** header values are of static type.

![Creating "Mark Static Resources" rule](../../images/advanced/mark-static-objects.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Mark Static Resources" rule](../../images/advanced/mark-static-objects-active.png)

>tip You can create the rule and then use the **Play** button to immediately apply the new UI effect to all captured sessions in the **Live Traffic** grid.

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/mark-static-objects" target="_blank">"Mark Static Resources"</a> rule as a FARX file, which you can import through the Rules toolbar.

## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...]({%slug modify-traffic-get-started%})
* [Learn more about all rules presets in Fiddler Everywhere here...]({%slug adv_techniques_fiddler%})
* [Learn more on how to organize your rules here...]({%slug rulesbuilder-get-started%})
* [Learn more about the matching conditions here...]({%slug fiddler-rules-actions%}#conditions)
* [Learn more about the supported actions here...]({%slug fiddler-rules-actions%}#actions)
* [Learn more about final and non-final rules here...]({%slug fiddler-rules-actions%}#final-and-non-final-actions)
* [Learn more about using breakpoints here...]({%slug rulesbuilder-breakpoints%})