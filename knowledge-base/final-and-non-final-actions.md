---
title: Understanding the final and non-final actions in Rules
description: "Understanding by example - the difference and the consequences of using final and non-final actions when creating and executing a rule in Fiddler Everywhere."
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

The [**Rules Tab**]({%slug rules-general%}) provides means to mock client & server behavior by modifying HTTP requests and responses. Each rule you create has a **match** pattern and an **action** that should be applied when there is a match. In some cases, you might find that some promoted rules are blocking other rules or that some rules are never effectively executed. The most likely reason is that some actions are **final**, while others are **non-final**. This article will briefly demonstrate how final and non-final actions can be used alongside and what considerations one should have when dealing with them.

[Learn more about the difference between final and non-final actions here...]({%slug rules-general%}#final-and-non-final-actions)


## Examples

Below, you can find some examples demonstrating what will happen when you combine final and non-final actions in one or multiple rules.

### Non-final Actions Only

As you might expect, when only non-final actions are executed, all rules (matching) will have their actions performed and applied.

### Final Actions Only

When there are one or more rules with final actions, the execution of actions will immediately stop after the most promoted rule that contains a final action takes place. No other demoted rules will be executed after that.

### Mix of final and Non-Final Actions

When there are one or more rules with final actions, the execution of actions will immediately stop after the most promoted rule that contains a final action takes place. No other demoted rules will be executed after that. Note that each rule has its priority in the Rules list and can be demoted and promoted, which will change the order of execution. Final rules won't block non-final rules with higher priority. For a better illustration of this scenario, refer to the below case:

- We have a rule with final action (for example, the **Close Gracefully** final action).
    ![a rule with a final action](../images/kb/final-actions/rule-only-final.png)
    
- We have a rule with a non-final actions (for example, the **Mark Session** and the **Update Request Header** non-final actions)
    ![a rule with a non-final action](../images/kb/final-actions/rule-only-non-final.png)

1. In the first case, the rule containing the final action has higher priority in the Rules list. Only the first rule will execute when the matching request is made, and other demoted rules won't be triggered.
    ![final action first scenario](../images/kb/final-actions/final-action-first.png)

2. In the second case, the rule containing the non-final action has higher priority in the Rules list. When the matching request is made, the non-final action will execute, and then the following demoted rule will be triggered as well. If you add additional rules after the rule containing the final actions, they won't be executed.
    ![non-final action first scenario](../images/kb/final-actions/non-final-action-first.png)


## Suggested Links

- [Modify Server Response]({% slug rulesbuilder-get-started %})
- [Rules Tab]({%slug rules-general%})