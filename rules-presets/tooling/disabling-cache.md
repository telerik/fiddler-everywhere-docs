---
title: Disable Caching
description: "You can disable application caching to force load the latest resources while using Fiddler's rules."
slug: adv_disable_cache
position: 10
---

# Disabling Caching

Many client and server applications cache resources to optimize sequential connections. Caching works through specific HTTP headers that instruct the client or the server to use a local copy of the response. This way, applications can load their content significantly faster than having to download the actual resources each time they are requested.

Whether you are a tester, quality engineer, or developer, you might often need to clear the cache using the built-in tools (for example, through the **Empty Cache and Hard Reload** feature in Chromium-based browsers) to ensure that you are seeing the latest version of the requested resources.

With Fiddler Everywhere, you can create a rule that automatically disables data caching. This allows you to test always against the latest version of your client/server API.

## Creating a "No Caching" Rule

Create a "No Caching" rule, by setting the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

- Create an **Update Request Header** action and remove all pre-set values for the **If-Modified-Since** header.
- Create an **Update Request Header** action, and remove all pre-set values for the **If-None-Match** header.
- Create a **Update Request Header** action, and update the **Pragma** header with value **no-cache**.
- Create a **Update Request Header** action, and update the **Cache-control** header with value **no-cache**.
- Create a **Update Response Header** action, and update the **Expires** header with value **0**.
- Create an **Update Response Header** action and remove all pre-set values for the **Last-Modified** header.
- Create an **Update Response Header** action and remove all pre-set values for the **eTag** header.
- Create a **Update Response Header** action, and update the **Cache-Control** header with value **no-cache**.

This sample Fiddler rule matches all sessions and explicitly turns off the caching through.

![Creating "No Caching" rule](../../images/advanced/adv-tech-no-caching.png)

> Tip: The matching criteria in the above screenshot demonstrate how to apply the rule for all sessions. However, Fiddler Everywhere provides robust matching conditions that you can use to further optimize your web debugging process.

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "No Caching" rule](../../images/advanced/adv-tech-no-caching-active-rule.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/no-caching" target="_blank">"No Caching"</a> rule as a FARX file, which you can import through the Rules toolbar.

 
  
## See Also

* [Learn more about the Rules functionality in FIddler Everywhere here...]({%slug modify-traffic-get-started%})
* [Learn more about all rules presets in Fiddler Everywhere here...]({%slug adv_techniques_fiddler%})
* [Learn more on how to organize your rules here...]({%slug rulesbuilder-get-started
publish: true%})
* [Learn more about the matching conditions here...]({%slug fiddler-rules-actions%}#conditions)
* [Learn more about the supported actions here...]({%slug fiddler-rules-actions%}#actions)
* [Learn more about final and non-final rules here...]({%slug fiddler-rules-actions%}#final-and-non-final-actions)