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

## Tooling 

A set of rules that provides custom “tools” to tackle different tasks, such as [blocking cookies]({%slug adv_block_cookies%}), [disabling browser cache]({%slug adv_disable_cache%}), [bypassing cross-origin resource sharing (CORS)]({%slug adv_bypass_cors%}), [mocking the user-agent HTTP header]({% slug adv_changing_user_agent %}) and others.

Let's show how you can create, enasble and use your own rule that bypasses [the cross-origin resource sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS). CORS uses specific HTTP Response Headers to tell the client application (for example, a browser) which domains can access its limited resources. What we need to do is to match the session and then trigger an action that updates that specific set of HTTP Response Headers.

1. Open the Fiddler **Traffic** pane and focus the **Rules** tab.

    ![Open the Rules tab](../images/kb/rules-presets-how-to/open-rules.png)

1. Click on **Add Rule**.

1. Create the following rule, in the newly opened **Rules Builder** screen.

    * Name the rule. For demonstartion purposes, we will name the rule "Bypass CORS".

    * Set a matching condition. For demonstartion purposes, we are creating a condition that matches all captured sessions.

        ![A condition to match all sessions](../images/kb/rules-presets-how-to/match-condition-all-sessions.png)

    * Set an action that changes the HTTP Response Headers related to the CORS techonology.

        1. Create an action that sets the HTTP Response header **Access-Control-Allow-Origin** with a wildcard value `*`.

        1. Create an action that sets the HTTP Response header **Access-Control-Allow-Methods** with a wildcard value `*`.

        1. Create an action that sets the HTTP Response header **Access-Control-Allow-Credentials** with a boolean value `true`.

        1. Create an action that sets the HTTP Response header **Access-Control-Allow-Headers** with a wildcard value `*`.
    
    * Save the newly created rule.

    * Once the rule is created, enable the "Bypass CORS" rule (toggle ON), enable the **Rules** tab (toggle ON), and start capturing traffic.

        ![Enabling the newly created rule](../images/kb/rules-presets-how-to/enabling-rule-bypass-cors.png)



## Filters

One of the first things you observe as a new Fiddler user is that once the intermediate proxy starts capturing traffic, you will receive an overwhelming number of captured sessions. Every modern application makes multiple requests (the number of HTTP requests made varies but can go up to hundreds per application startup). The predefined filters demonstrate how Fiddler can be set to show only specific traffic (for example, localhost addresses, particular processes, specific domains, etc.). 

## Block Lists and Allow Lists

While the filters are not removing traffic from the Fiddler’s live traffic grid, the requests are still going through the Fiddler proxy. In some cases, you will need to block or allow specific traffic entirely. This is where this set of rules comes in place.

## Map HTTP Traffic

The terms “map”, “map remote”, “map local” in the context of Fiddler are used for rules that replaces the original HTTP request or response (headers and bodies) with a custom-mapped request/response. The mapping allows you to use remote API endpoints (like third-party URLs or localhost addresses), local files, predefined responses, or even to craft your response manually. The mapping is like a manually created redirect that you can use to virtually test any API scenario without access to the client or server.

## Modify HTTP Traffic

Modifying is similar to the mapping feature as it replaces the original content of the HTTP session. The difference is that you are not replacing the whole response/request but only modifying a specific targeted part. For example, you can modify a response body by replacing a particular portion of its HTML, you can change the executing of JavaScript function by adding your parameters, or you can change the avatar in your favorite game (you would be surprised to learn how desired this feature is) by adding your image to the API. The possibilities are virtually endless.

## UI Modifications

Last but not least, we created a set of rules that allow you to modify Fiddler’s user interface. The idea behind these rules is to demonstrate how you can adjust Fiddler to your own needs by marking and highlighting what is really important. 


Overall, the rules presets in Fiddler Everywhere are a good starting point to understand how to use the Rules feature. You can learn more about the rules presets in Fiddler Everywhere from [the dedicated documentation articles]({%slug adv_techniques_fiddler%}) or by directly downloading them from [the Fiddler’s public GitHub repository](https://github.com/telerik/fiddler-everywhere/tree/master/rules) and import them as FARX files.