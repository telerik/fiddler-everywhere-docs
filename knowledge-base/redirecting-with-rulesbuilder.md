---
title: Redirecting Traffic between Servers through the Rules Tab
description: "Create match rules and actions to redirect traffic while using regex variables with the Fiddler Everywhere local proxy."
type: how-to
slug: rulesbuilder-redirect-traffic
publish: true
res_type: kb
previous_url: /knowledge-base/redirecting-with-autoresponder
---


##Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere |
| Product Version | 1.0.0 and above  |

## Description

How can I use the [**Rules**]({%slug rules-general%}) tab for redirecting traffic from one server to another?

## Solution

To accomplish this scenario, we can use a basic redirect or a rule, which utilizes regex and regex variables.

### Using a Basic Redirect

To redirect traffic from one server to another, implement a basic redirect rule.

```JS
Match: https://docs.telerik.com/fiddler-everywhere/introduction
Action: http://localhost:4000/fiddler-everywhere/introduction
```

### Redirecting with Regex

To create more complex redirect rules, use the Fiddler Everywhere regex support for creating **Match** rules and **Actions**.

```JS
Match: regex:(.*)docs.telerik.com/(.*)
Action: http://localhost:4000/$2
```

In the previous example, two regex variables are automatically created. The second one will have as its value everything that comes after the last slash (`/`).

As a result, after applying the above rule, the following example endpoint
```
https://docs.telerik.com/fiddler-everywhere/user-guide/live-traffic/rules-builder
```
will be redirected to
```
http://localhost:4000/fiddler-everywhere/user-guide/live-traffic/rules-builder
```
