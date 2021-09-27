---
title: Mocking Server Responses
description: "Mock various server behavior by using the Rules tab of the Fiddler Everywhere web-debugging http-proxy tool."
slug: rulesbuilder-get-started
publish: true
position: 40
---

# Mocking Server Responses

Fiddler Everywhere provides a **Rules** tab tool, which is a powerful feature that enables you to mock server responses and simulate various real-life scenarios.

You can use the **Rule Builder** to create rules and automatically trigger a specific request, which meets the criteria set in the rule. To mock a server response, enable the **Rules** tab, set a rule, and execute the request that will trigger that rule.

To create and test a rule:

1. Select the **Rules** tab and click the **Add New Rule** button. As a result, the [**Rule Builder**]({%slug rules-general%}#rule-builder) will be opened.
1. Enter a descriptive rule name. The rule name will later appear in the [**Rules Queue**]({%slug rules-general%}#rules-queue).
1. Add a [condition or a set of conditions]({%slug rules-general%}#conditions) to match sessions.
1. Add an [action or a set of actions]({%slug rules-general%}#actions) to modify the matched sessions.
1. Click **Save** to save and add the created rule in the **Rules Queue**.
1. Switch the [**Live traffic** to **Capturing** mode]({%slug capture-traffic-get-started%}).
    - If you test with **Live Traffic**, make sure that you enable the toggle of the main **Rules**. Open the application in the browser and execute a request that matches the set conditions. The rule is immediately applied to the ongoing captured traffic.
    - If you test with saved sessions, select the rule and use the **Execute** button. The rule is immediately applied to the loaded saved sessions.

![Rules Tab](../images/livetraffic/rb/rules-all.png)

## Additional Resources

- [Creating Requests with the API Composer]({%slug composer-get-started%})
- [Grouping Requests in Collections]({%slug composer-collections-get-started%})
- [Inspecting Captured Traffic]({%slug inspecting-traffic-get-started%}).
- [Modifying Traffic]({%slug modify-traffic-get-started%})
- [Sharing Captured Traffic with Collaborators]({%slug collaboration-get-started%}).
