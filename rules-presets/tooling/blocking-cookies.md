---
title: Block Cookies
description: "You can use Fiddler's rules to block cookies."
slug: adv_block_cookies
position: 20
---

# Blocking Cookies

An HTTP cookie is a piece of information that the client and the server exchange to store specific data like authorization details, user preferences, analytics, and others.

As a developer, you might need to test your client or server application as if receiving cookies is explicitly blocked. 

With Fiddler Everywhere, you can create a rule that automatically blocks the sending and receiving of cookies.

## Creating a "Block Cookies" Rule

Create a "Block Cookies" rule by setting the following actions through the [Rules Builder](slug://modify-traffic-get-started).

1. Create an **Update Request Header** action and remove all pre-set values for the **Cookie** header.

1. Create an **Update Response Header** action and remove all pre-set values for the **Set-Cookie** header.

This sample Fiddler rule matches all sessions and explicitly blocks all cookies.

![Creating "Block Cookies" rule](../../images/advanced/adv-tech-block-cookies.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Block Cookies" rule](../../images/advanced/adv-tech-block-cookies-active-rule.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/block-cookies" target="_blank">"Block Cookies"</a> rule as a FARX file, which you can import through the Rules toolbar. 
  
## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...](slug://modify-traffic-get-started)
* [Learn more about all rules presets in Fiddler Everywhere here...](slug://adv_techniques_fiddler)
* [Learn more on how to organize your rules here...](slug://rulesbuilder-get-started)
* [Learn more about the matching conditions here...](slug://fiddler-rules-actions#conditions)
* [Learn more about the supported actions here...](slug://fiddler-rules-actions#actions)
* [Learn more about final and non-final rules here...](slug://fiddler-rules-actions#final-and-non-final-actions)
* [Learn more about using breakpoints here...](slug://rulesbuilder-breakpoints)