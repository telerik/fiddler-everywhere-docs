---
title: Bypass CORS
description: "Using Fiddler's rules to bypass the same-origin policy when using cross-origin resource sharing (CORS)."
slug: adv_bypass_cors
position: 30
---

# Bypassing CORS and the Same-Origin Policy

Cross-Origin Resource Sharing (CORS) is a technique based on HTTP headers that limits the origins (outside the target domain) allowed to load resources on the client's side. Setting specific domains, schemes, or ports permitted to serve resources guarantees that clients can't be tricked into sharing sensitive data with third-party actors. Most modern-day applications strictly set a list of external origins that are allowed to bypass CORS. 

With Fiddler Everywhere, you can easily create a rule that bypasses the pre-set CORS policies by overwriting the sent/received values with wildcards (or other specific values).

## Creating a "Bypass CORS" Rule

This example shows how to create a rule named "Bypass CORS" that effectively sets the CORS policy not to a same-origin or specific domain but to all domains using a wildcard. This effectively bypasses the same-origin policy, which might allow third-party actors to execute a cross-site request forgery (CSRF). The rule should only be used for testing purposes where and when needed, not for real-life scenarios.

Create a "Bypass CORS" rule that sets the following actions through the [Rules Builder]({%slug modify-traffic-get-started%}).

1. Create an action that sets the HTTP Response header **Access-Control-Allow-Origin** with a wildcard value `*`.
1. Create an action that sets the HTTP Response header **Access-Control-Allow-Methods** with a wildcard value `*`.
1. Create an action that sets the HTTP Response header **Access-Control-Allow-Credentials** with a boolean value `true`.
1. Create an action that sets the HTTP Response header **Access-Control-Allow-Headers** with a wildcard value `*`.

This sample Fiddler rule matches all sessions and bypasses the pre-set CORS policies.

![Creating "Bypass CORS" rule](../../images/advanced/adv-bypass-cors.png)

Once the rule is created, enable the **Rules** tab, toggle the rule switch, and start capturing traffic.

![Activating the "Bypass CORS" rule](../../images/advanced/adv-bypass-cors-active.png)

Download a ready-to-use <a href="https://github.com/telerik/fiddler-everywhere/tree/master/rules/bypass-cors" target="_blank">"Bypass CORS"</a> rule as a FARX file, which you can import through the Rules toolbar.
 
## See Also

* [Learn more about the Rules functionality in Fiddler Everywhere here...]({%slug modify-traffic-get-started%})
* [Learn more about all rules presets in Fiddler Everywhere here...]({%slug adv_techniques_fiddler%})
* [Learn more on how to organize your rules here...]({%slug rulesbuilder-get-started%})
* [Learn more about the matching conditions here...]({%slug fiddler-rules-actions%}#conditions)
* [Learn more about the supported actions here...]({%slug fiddler-rules-actions%}#actions)
* [Learn more about final and non-final rules here...]({%slug fiddler-rules-actions%}#final-and-non-final-actions)
* [Learn more about using breakpoints here...]({%slug rulesbuilder-breakpoints%})