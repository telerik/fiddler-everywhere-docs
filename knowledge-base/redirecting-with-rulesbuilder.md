---
title: Redirecting traffic from one server to another via the Rules tab
description: An article on how to create match rules and actions to redirect traffic while using regex variables
type: how-to
slug: rulesbuilder-redirect-traffic
publish: true
res_type: kb
previous_url: /knowledge-base/redirecting-with-autoresponder
---


#### Environment

|   |   |
|---|---|
| Product   |
| Product Version | 1.0.0 and above  |

#### Description

This article demonstrates a basic example for using the [**Rules**]({%slug rules-general%}) tab for redirecting traffic from one server to another. The job can be accomplished via a rule that (optionally) utilizes regex and regex variables.


## Basic Redirect

Redirecting traffic from one server to another can be achieved via a simple WWrule.


```JS
Match: https://docs.telerik.com/fiddler-everywhere/introduction
Action: http://localhost:4000/fiddler-everywhere/introduction
```

## Redirect with Regex

In some cases, we would like to create more complex redirect rules. Here Fiddler Everywhere provides regex support for creating **Match** rules and **Actions**.

```JS
Match: regex:(.*)docs.telerik.com/(.*)
Action: http://localhost:4000/$2
```

In the above case, two regex variables are automatically created. The second one will have as a value everything that comes after the last slash. 

As a result, after applying the above rule, this example endpoint
```
https://docs.telerik.com/fiddler-everywhere/user-guide/live-traffic/rules-builder
```
will be redirected to
```
http://localhost:4000/fiddler-everywhere/user-guide/live-traffic/rules-builder
```