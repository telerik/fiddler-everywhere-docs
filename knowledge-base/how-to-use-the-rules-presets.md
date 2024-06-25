---
title: HTTPS Traffic Modifications with Fiddler rules
description: "Learn how to use Fiddler Everywhere rules for debugging, modifying, mocking, and testing the ongoing web traffic."
type: how-to
slug: how-to-use-fiddler-rules-to-modify-traffic
publish: true
res_type: kb
---

# HTTPS Traffic Modifications with Fiddler rules

At one point or another, we need to test web applications and their behavior online. Whether we are talking about a tiny front-end change in a CSS (Cascading Style Sheets) selector, reproducing a reported scenario, or a significant update of the backend API, testing online services can take much work. It often requires creating safe staging environments (so your test keeps the live production jobs untouched) and re-build ing and re-deploying through time and money-consuming processes. All the above is why we love the Fiddler’s Rules functionality – it allows you to execute your tasks quickly and effeminately through the man-in-the-middle approach.

We already talked about the **Rules** tab itself, this article will introduce you to a set of predefined rules that the team created as an entry point to display the power of the Rules in Fiddler Everywhere.

## Rules Presets

While the **Rules** tab allows users to create rules based on[ specific matching conditions and apply various actions]({%slug fiddler-rules-actions%}), the community often requires assistance in creating rules. A further analysis showed that some Fiddler users were not aware of the full capabilities of the Fiddler rules. For that reason, the team developed [a set of predefined rules]({%slug adv_techniques_fiddler%}) that you can quickly reuse with few clicks or use as a reference for your specific testing requirements.

But first, let us make a quick recap of what a Fiddler rule stands for:

>tip A rule in Fiddler Everywhere contains **a matching condition** (or set of conditions) that determines the target HTTP sessions and **an action** (or set of actions) that applies to the matched HTTP sessions.


Fiddler provides multiple matching conditions related to the HTTPS traffic (like protocols, schemes, timings, request and response data, and many others) to help you target a specific set of sessions. Then, the matched sessions are modified through the specified actions. As a result, you can quickly create logic that modifies the traffic without changing the client or the server application (or even having access to these applications). That said, the set of predefined rules that we created can be separated into several contextual groups based on what they are meant to achieve.

* **Tooling** - A set of rules that provides custom “tools” to tackle different tasks, such as [blocking cookies]({%slug adv_block_cookies%}), [disabling browser cache]({%slug adv_disable_cache%}), [bypassing cross-origin resource sharing (CORS)]({%slug adv_bypass_cors%}), [mocking the user-agent HTTP header]({% slug adv_changing_user_agent %}) and others.

    An example of a rule that enables you to [bypass CORS]({%slug adv_bypass_cors%}) for all captured HTTS sessions:
    