---
title: Unmatched Requests Passthrough Rule
description: "Learn how to create a rule to enable or disable passthrough of unmatched HTTP requests."
type: how-to
slug: rules-unmatched-requests-passthrough
res_type: kb
previous_url: /knowledge-base/redirecting-with-autoresponder
---


##Environment

|   |   |
|---|---|
| Product   | Fiddler Everywhere |
| Product Version | 3.4.0 and above  |

## Description

Fiddler Everywhere 3.4.0 removes the **Unmatched Requests Passthrough** option (previously available through **Settings > Rules**). The legacy option was obsolete as it often confused users and was not easily accessible for quick management. How can I achieve the same functionality with version 3.4.0 and above?

## Solution

Fiddler Everywhere comes with the powerful [**Rules** tab]({%slug rules-general%}) that allows you to easily create a rule that extends the behavior of the **Unmatched Requests Passthrough** option. By default, with Fiddler Everywhere all requests are sent to the server as is, without modifications from the **Rules** tab. Creating rules that are modifiyng that behavour is easily achivable through the [**Rules Builder**]({%slug rules-general%}#rule-builder).


1. Example for creating a basic **Unmatched Requests Non-Passthrough** rule:

    - Open the **Rules** tab and use **Add New Rule** to create new rule.
    - Set a condition to match specific set of endpoints. For demonstration purposes, we will match **all** URLs.
        ```r
        Match Condition: URL → Regular Expression → .*
        ```
    - Create an action to modify the response for the matched requests. For demonstration purposes, we are using a predefined 404 response.
        ```r
        Action: Predefined Response → 404_Plain.dat
        ```
    ![](../images/livetraffic/rb/unmatched-non-pass.png)

    When active, the above rule will return 404 for all URLs.


2. Example for creating a basic **Unmatched Requests Non-Passthrough (except for <URL>)** rule:

    - Open the **Rules** tab and use **Add New Rule** to create new rule.
    - Set the first match condition to match **all** URLs.
        ```r
        Match Condition: URL → Regular Expression → .*
        ```
    - Set a match condition that will exclude a specific URL through **Does not contain** operator. For demonstration purposes, we are matching all URLs that contain **example.com**
        ```r
        Match Condition: URL → Does not contain → example.com
        ```
    - Create an action to modify the response for the matched requests. For demonstration purposes, we are umodifying the response manually.
        ```r
        Action: Manual Response →  This request was modified by Fiddler Everywhere as it does not match the conditions of the activated rules.
        ```
    ![](../images/livetraffic/rb/unmatched-non-pass-except.png)

    When active, the above rule will return 404 for all URLs except the ones that contain **example.com**.