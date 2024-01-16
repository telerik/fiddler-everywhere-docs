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

How can I use the [**Rules**]({%slug modify-traffic-get-started%}) tab for redirecting traffic from one server to another?

## Solution

To accomplish this scenario, we can use a basic redirect or a rule, which utilizes regex and regex variables.

### Using a Basic Redirect

To redirect traffic from one server to another, implement a basic redirect rule.

**Match Condition**: URL > Contains > `https://docs.telerik.com/fiddler-everywhere/introduction`
**Action**: Update URL > Set Value > `http://localhost:4000/fiddler-everywhere/introduction`

### Redirecting with Regex

To create more complex redirect rules, use the Fiddler Everywhere regex support for creating **Match Conditions** rules and **Actions**.

**Match Condition**: URL > Regular Expression > `regex:(.*)docs.telerik.com/(.*)`
**Action**: Update URL > Regular Expression > `http://localhost:4000/$2`


In the previous example, two regex variables are automatically created. The second one will have as its value everything that comes after the last slash (`/`).

As a result, after applying the above rule, the following example endpoint
```
https://docs.telerik.com/fiddler-everywhere/modify-and-filter-traffic/modify-traffic-with-rules
```
will be redirected to
```
http://localhost:4000/fiddler-everywhere/modify-and-filter-traffic/modify-traffic-with-rules
```

