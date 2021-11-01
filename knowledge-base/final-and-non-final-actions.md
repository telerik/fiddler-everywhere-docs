---
title: Using Final and Non-Final Actions in Rules Tab
description: "Learn how to understand and use the final and non-final actions when creating and executing a rule in Fiddler Everywhere."
type: how-to
slug: fiddler-rules-actions
publish: true
res_type: kb
---


## Environment

|   |   |
|---|---|
| Product  |
| Product Version | 1.0.0 and above  |
| Operating System | macOS, Windows, and Linux |


## Description

Some promoted rules are blocking other rules and some rules are never effectively executed when I work with the **Rules** tab of Fiddler Everywhere. What is the reason for that?

## Solution

The [**Rules** tab]({%slug rules-general%}) provides means to mock client and server behavior by modifying HTTP requests and responses. Each rule you create has a **match** pattern and an **action** that has to be applied in case of a match.

The most likely reason that causes this issue is that [some actions are **final**, while others are **non-final**]({%slug rules-general%}#final-and-non-final-actions).

The following examples demonstrate what will happen when you combine final and non-final actions in one or multiple rules.

### Non-Final Actions Only

When only non-final actions are executed, all matching rules have their actions performed and applied.

### Final Actions Only

When one or more rules include final actions, the execution of the actions immediately stops after the most promoted rule that contains a final action takes place. No other demoted rules will be executed after that.

### Mix of Final and Non-Final Actions

When one or more rules include final actions, the execution of the actions immediately stops after the most promoted rule that contains a final action takes place. No other demoted rules will be executed after that.

Note that each rule has its priority in the **Rules** list and can be demoted and promoted, which will change the order of execution. Final rules won't block non-final rules with higher priority.

For a better illustration of this scenario, refer to the following cases:

- You have a rule with a final action (for example, the **Close Gracefully** final action).
    ![a rule with a final action](../images/kb/final-actions/rule-only-final.png)

    In this case, the rule containing the final action has higher priority in the **Rules** list. Only the first rule will execute when the matching request is made, and other demoted rules won't be triggered.
        ![final action first scenario](../images/kb/final-actions/final-action-first.png)

- You have a rule with non-final actions (for example, the **Mark Session** and the **Update Request Header** non-final actions).
    ![a rule with a non-final action](../images/kb/final-actions/rule-only-non-final.png)

    In this case, the rule containing the non-final action has higher priority in the **Rules** list. When the matching request is made, the non-final action will execute, and then the following demoted rule will be triggered as well. If you add additional rules after the rule containing the final actions, they won't be executed.
    ![non-final action first scenario](../images/kb/final-actions/non-final-action-first.png)

## Suggested Links

- [Modifying Server Responses]({% slug rulesbuilder-get-started %})
- [Using the Rules Tab]({%slug rules-general%})
