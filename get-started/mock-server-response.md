---
title: Mock Server Response
description: Learn how to use the Rules tab to mock different server behavior.
slug: rulesbuilder-get-started
publish: true
position: 70
---

# Mocking Server Response

One of the most powerful features of the Fiddler Everywhere client is the **Rules** tab - a tool for mocking server responses and simulating various real-life scenarios. With Rules Builder, you can create **rules**, automatically triggering a specific request (that covers the criteria set in the rule). Mocking a server response is as easy as enabling the **Rules** tab, setting a rule, and executing the request (that will trigger the rule).

## Creating a Rule

To create and test your first rule follow these steps:

1. Select the **Rules** tab and click on **Add New Rule**. This will open the [**Rules Builder**]({%slug rules-general%}#rule-builder). 
1. Enter a descriptive rule name. The rule name will later appear in the [**Rules Queue**]({%slug rules-general%}#rules-queue).
1. Add a [condition or a set of conditions]({%slug rules-general%}#conditions) to match sessions.
1. Add an [action or a set of actions]({%slug rules-general%}#actions) to modify the matched sessions.
1. Press **Save** to save and add the created rule in the **Rules Queue**.
1. Switch the [ **Live traffic** to **Capturing** mode.]({%slug capture-traffic-get-started%}).
    - If testing with **Live Traffic**, make sure to enable the main **Rules** toggle.  The open the application (e.g., the Chrome browser) and execute a request that matches the set conditions. The rule is immediately applied to the ongoing captured traffic.
    - If testing with saved sessions, select the rule and use the **Execute** button. The rule is immediately applied to the loaded saved sessions.

![Rules Builder](../../images/livetraffic/rb/rules-all.png)


## Additional Resources

- [Inspect captured traffic]({%slug inspecting-traffic-get-started%}).
- [Create an API request via the Composer]({%slug composer-get-started%})
- [Modify traffic]({%slug modify-traffic-get-started%})
- [Organize requests]({%slug composer-collections-get-started%})
- [Share captured traffic with collaborators]({%slug collaboration-get-started%}).
