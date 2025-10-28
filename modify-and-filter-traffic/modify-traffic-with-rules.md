---
title: Modifying Traffic
description: "Modify HTTPS traffic while using the Rules tab in the Fiddler Everywhere web-debugging proxy tool."
slug: modify-traffic-get-started
publish: true
position: 10
previous_url: /get-started/modify-traffic, /get-started/traffic/modify-traffic, /traffic/modify-traffic, /user-guide/rules, /get-started/mock-server-response, /mock-server-response, /knowledge-base/autoresponder, /user-guide/live-traffic/rules, /user-guide/live-traffic/rules-builder, /user-guide/live-traffic/autoresponder
---

# Modifying Traffic

Fiddler Everywhere provides powerful debugging techniques for testing APIs and mocking server and client behavior. Modifying traffic through the **Rules** functionality is crucial to the Fiddler testing and debugging capabilities. 

>tip A **rule** in Fiddler Everywhere is a feature that allows you to match a targeted HTTP(S) session and apply a specific action that will modify its original behavior. A rule can be created, activated, and executed through the **Rules** tab in the **Traffic** pane.

Using Fiddler's rules allows you to modify the ongoing HTTPS requests and responses without accessing or modifying the client and server applications.

To open the **Rules** tab.

1. Start Fiddler Everywhere and open the **Home** Pane.
1. Follow the **Rules** flow from the **Modify and Filter Traffic** section.
 
![Using the Fiddler's rules from the **Home** pane](./images/rules-tutorial-flow.png)

OR

1. Start Fiddler Everywhere and open the **Traffic** Pane.
1. Select the **Rules** tab.

The **Rules** tab loads, and you can create, enable, organize, and rank rules in the Rules list.

![Example of active Rules tab with rules and groups](./images/rules-tab-active.png)

## Using Rule Builder

Use the **Rule Builder** to create custom rules from scratch. Each rule can automatically trigger a specific action that meets the preset matching criteria. To mock a client request or server response, enable the **Rules** tab, set a rule, and execute the request that will trigger that rule.

To create and test a rule through the **Rule Builder**:

1. Select the **Rules** tab and click the **Add Rule** button. As a result, the **Rule Builder** opens.
    ![Adding new rule for modifying an HTTPS session through the Rule Builder](./images/rules-builder-new-rule.png)
1. Enter a descriptive rule name, which will appear in the **Rules** list.
1. Add a condition or a set of conditions to match sessions.
1. Add an action or a set of actions to modify the matched sessions.
1. Click **Save** to save and add the created rule in the **Rules** list.
1. Start capturing traffic or replay a specific session that triggers the rule.
    - If you test with system capturing, independent browser, terminal, or through explicit proxy&mdash;Ensure that the switch of the main **Rules** tab is toggled ON. Open the application in the browser and execute a request that matches the set conditions. The rule immediately applies to the ongoing captured traffic.
    - If you test with already saved sessions&mdash;Select the rule and use the **Execute** button (green play arrow). The rule immediately applies to the preloaded saved sessions.

The **Rules** tab can be a powerful ally in testing various complex scenarios without meddling with the server. You can share, import and export created rules with collaborators to ease your support, development, and QA processes.

## Creating Rules for Captured Sessions

One of the most powerful features in Fiddler Everywhere resides in the **Rules** tab. You can create rules that change HTTP Requests & Responses on the fly based on different criteria. The rules can combine multiple criteria and apply single or multiple actions, allowing you to mock real-life scenarios with a few clicks. The combinations of matching conditions and actions that can be combined and applied to single or multiple rules enable you to test client and server applications without changing or accessing their code. 

To modify the captured session through the **Rules**:

1. Start any [capturing mode](slug://capture-traffic-get-started) with Fiddler Everywhere and initiate the request. As a result, the session is captured and displayed in the **Live Traffic** grid.
1. Select the desired session and right-click to open the context menu. From the context menu, select **Add New Rule**.
    ![Add new rule through selecting a session and using the context menu](./images/add-new-rule-context-menu.png)
    >tip The **Rule Builder** opens in a dedicated detached window. This enables you to create your rule and observe the Live Traffic simultaneously.
1. The **Rule Builder**automatically populated the session data. You can further modify the matching conditions and the desired actions. 
    ![Automatically loaded session in Rules builder](./images/add-new-rule-loaded-in-rules-builder.png)
1. Click **Save** to preserve the rule.

Fiddler automatically adds the newly created rule on the top of the [**Rules** list](slug://modify-traffic-get-started), giving it immediate execution priority (you can demote or promote each rule in the list). The rule is also automatically activated (the rule switch toggles on), so any new requests that match the rule will be affected by it. You can also replay the original session through its context menu (**Replay > Reissue Requests**).

## Additional Rules Resources

- [Sample Rules Presets](slug://adv_techniques_fiddler)
- [Learn how to use the Rules preset here...](slug://how-to-use-fiddler-rules-to-modify-traffic)
- [Using Breakpoints](slug://rulesbuilder-breakpoints)
- [Understanding the Matching Conditions and the Actions](slug://fiddler-rules-actions#conditions)
- [Understanding the role of Final and Non-Final Actions](slug://fiddler-rules-actions#final-and-non-final-actions)
- [Example for using predefined actions in the Rules tab](slug://fiddler-ar-actions)
- [Example for redirecting through the Rules tab](slug://rulesbuilder-redirect-traffic)
- [Example for disabling caching through the Rules tab](slug://rule-disable-caching)
- [Returning Custom HTTP Responses](slug://using-custom-responses)
- [Fiddler Rules Archives (FARX)](slug://fiddler-farx-format)