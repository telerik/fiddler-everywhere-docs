---
title: Mocking Server Responses
description: "Mock client and server behavior while using the Rules tab of the Fiddler Everywhere web-debugging proxy tool."
slug: rulesbuilder-get-started
publish: true
position: 20
previous_url: /get-started/mock-server-response, /mock-server-response
---

# Mocking Server Responses

One of the most powerful features in Fiddler Everywhere is the **Rules** tab that enables you to mock client requests and server responses and simulate various real-life scenarios. The **Rules** tab consist of a visual tree referred to as the **Rules Queue** that holds your created rules or group of rules, **rule switches** that activate or deactivate a rule (or group of rules), and a **Rule Builder** that shapes new rule by adding a matching condition and desired action. You can activate and execute multiple rules, change their execution priority, and apply different actions based on matching conditions. 

The below demo shows how you can mock server behavior without changing anything on the remote server (and without even having access to the server at all).



Use the **Rule Builder** to create rules and automatically trigger a specific action that meets the matching criteria set in the rule. To mock a server response, enable the **Rules** tab, set a rule, and execute the request that will trigger that rule.

To create and test a rule:

1. Select the **Rules** tab and click the **Add Rule** button. As a result, the [**Rule Builder**]({%slug rules-general%}#rule-builder) opens.

1. Enter a descriptive rule name, which will later appear in the [**Rules Queue**]({%slug rules-general%}#rules-queue).

1. Add a [condition or a set of conditions]({%slug rules-general%}#conditions) to match sessions.

1. Add an [action or a set of actions]({%slug rules-general%}#actions) to modify the matched sessions.

1. Click **Save** to save and add the created rule in the [**Rules Queue**]({%slug rules-general%}#rules-queue).

1. Start capturing traffic or replay a specific session that triggers the rule.

    - If you test with system capturing, independent browser, independent terminal, or through explicit proxy&mdash;Ensure that the switch of the main **Rules** tab is toggled ON. Open the application in the browser and execute a request that matches the set conditions. The rule is immediately applied to the ongoing captured traffic.

    - If you test with already saved sessions&mdash;Select the rule and use the **Execute** button (green play arrow). The rule is immediately applied to the preloaded saved sessions.

![Example of active Rules tab with rules and groups](../images/rules/rules-tab-active.png)

The **Rules** tab can be a powerful ally in testing various complex scenarios without meddling with the server. You can share, import, and export created rules with collaborators further to ease your support, development, and QA processes.

## Additional Resources

- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Modifying HTTPS Traffic]({%slug modify-traffic-get-started%})
- [Using Predefined Actions]({%slug fiddler-ar-actions%})
- [Understanding Final vs Non-Final Actions]({%slug fiddler-rules-actions%})
- [Creating Manual HTTP Responses]({%slug using-custom-responses%})
- [Composing API Requests with the Composer]({%slug composer-get-started%})
- [Grouping API Requests in Collections]({%slug composer-collections-get-started%})
- [Sharing Captured Traffic with Collaborators]({%slug collaboration-get-started%}).
- [Introducing the Rules tab (blog post)](https://www.telerik.com/blogs/introducing-new-rule-builder-fiddler-everywhere)
